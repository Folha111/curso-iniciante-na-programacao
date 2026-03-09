import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!MP_ACCESS_TOKEN) throw new Error('MP_ACCESS_TOKEN não configurado')

    const body = await req.json()
    const { formData, userId, userEmail, userName } = body

    console.log('formData recebido:', JSON.stringify(formData))

    const paymentBody: Record<string, unknown> = {
      transaction_amount: 39.99, // sempre fixo, ignora o valor do brick
      description: 'Curso Completo de Programação',
      payment_method_id: formData.payment_method_id,
      payer: {
        email: formData.payer?.email || userEmail,
        first_name: userName?.split(' ')[0] || 'Aluno',
        last_name: userName?.split(' ').slice(1).join(' ') || '',
      },
    }

    // Dados de cartão
    if (formData.token) {
      paymentBody.token = formData.token
      paymentBody.installments = Number(formData.installments) || 1
      paymentBody.issuer_id = formData.issuer_id
    }

    // CPF/identificação
    if (formData.payer?.identification?.number) {
      (paymentBody.payer as Record<string, unknown>).identification = formData.payer.identification
    }

    console.log('Enviando para MP:', JSON.stringify(paymentBody))

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
    console.log('Resposta MP:', JSON.stringify(payment))

    if (!mpResponse.ok) {
      throw new Error(payment.message || payment.error || `Erro MP: ${mpResponse.status}`)
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
    }

    const result: Record<string, unknown> = { status: payment.status }

    if (payment.payment_method_id === 'pix') {
      result.pixQrCode = payment.point_of_interaction?.transaction_data?.qr_code
      result.pixQrCodeBase64 = payment.point_of_interaction?.transaction_data?.qr_code_base64
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Erro:', err)
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
