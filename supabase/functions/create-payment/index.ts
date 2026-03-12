import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const ALLOWED_ORIGIN = Deno.env.get('ALLOWED_ORIGIN') || '*'

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!MP_ACCESS_TOKEN || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      throw new Error('Configuração do servidor incompleta.')
    }

    const body = await req.json()
    const { formData, userId, userEmail, userName } = body

    // Input validation
    if (!userId || !userEmail || !formData) {
      return new Response(JSON.stringify({ error: 'Dados inválidos.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const isPix = formData.payment_method_id === 'pix' || body.paymentMethod === 'bank_transfer'

    const payer: Record<string, unknown> = {
      email: formData.payer?.email || userEmail,
      first_name: (userName || '').split(' ')[0] || 'Aluno',
      last_name: (userName || '').split(' ').slice(1).join(' ') || '',
    }

    if (formData.payer?.identification?.number) {
      payer.identification = formData.payer.identification
    }

    const paymentBody: Record<string, unknown> = {
      transaction_amount: 39.99,
      description: 'Curso Completo de Programação',
      payment_method_id: isPix ? 'pix' : formData.payment_method_id,
      payer,
    }

    if (formData.token) {
      paymentBody.token = formData.token
      paymentBody.installments = Number(formData.installments) || 1
      paymentBody.issuer_id = formData.issuer_id ? Number(formData.issuer_id) : undefined
    }

    const mpResponse = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'X-Idempotency-Key': `${userId}-${Date.now()}`,
      },
      body: JSON.stringify(paymentBody),
    })

    const payment = await mpResponse.json()

    if (!mpResponse.ok) {
      throw new Error('Pagamento não processado. Verifique os dados e tente novamente.')
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

    await supabase.from('payments').insert({
      user_id: userId,
      mp_payment_id: String(payment.id),
      status: payment.status,
      amount: 39.99,
    })

    if (payment.status === 'approved') {
      await supabase
        .from('profiles')
        .upsert({
          id: userId,
          email: userEmail,
          name: userName,
          plan: 'paid',
          paid_at: new Date().toISOString(),
        })

      // Dispara email de boas-vindas (fire-and-forget)
      supabase.functions.invoke('welcome-email', {
        body: { userEmail, userName },
      }).catch(() => { /* não bloqueia o pagamento se o email falhar */ })
    }

    const result: Record<string, unknown> = { status: payment.status }

    if (payment.payment_method_id === 'pix' || payment.payment_type_id === 'bank_transfer') {
      result.pixQrCode = payment.point_of_interaction?.transaction_data?.qr_code
      result.pixQrCodeBase64 = payment.point_of_interaction?.transaction_data?.qr_code_base64
      result.pixExpiresAt = payment.date_of_expiration
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
