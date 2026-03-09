import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  try {
    const body = await req.json()

    // Only handle payment notifications
    if (body.type !== 'payment') {
      return new Response('ok', { status: 200 })
    }

    const paymentId = body.data?.id
    if (!paymentId) return new Response('ok', { status: 200 })

    // Fetch payment details from Mercado Pago
    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { 'Authorization': `Bearer ${MP_ACCESS_TOKEN}` },
    })

    const payment = await mpResponse.json()

    if (payment.status !== 'approved') {
      return new Response('ok', { status: 200 })
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

    // Find payment record by mp_payment_id
    const { data: paymentRecord } = await supabase
      .from('payments')
      .select('user_id')
      .eq('mp_payment_id', String(paymentId))
      .single()

    if (!paymentRecord) {
      return new Response('payment not found', { status: 404 })
    }

    // Update payment status
    await supabase
      .from('payments')
      .update({ status: 'approved' })
      .eq('mp_payment_id', String(paymentId))

    // Unlock course access
    await supabase
      .from('profiles')
      .update({ plan: 'paid', paid_at: new Date().toISOString() })
      .eq('id', paymentRecord.user_id)

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return new Response('error', { status: 500 })
  }
})
