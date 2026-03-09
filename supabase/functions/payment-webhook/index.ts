import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const WEBHOOK_SECRET = Deno.env.get('MP_WEBHOOK_SECRET')

async function verifySignature(req: Request, paymentId: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) return true // skip if secret not configured

  const signatureHeader = req.headers.get('x-signature')
  const requestId = req.headers.get('x-request-id') || ''
  if (!signatureHeader) return false

  const parts = Object.fromEntries(signatureHeader.split(',').map((p) => p.split('=')))
  const ts = parts['ts']
  const v1 = parts['v1']
  if (!ts || !v1) return false

  const manifest = `id:${paymentId};request-id:${requestId};ts:${ts};`
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(manifest))
  const computed = Array.from(new Uint8Array(signature)).map((b) => b.toString(16).padStart(2, '0')).join('')

  return computed === v1
}

serve(async (req) => {
  try {
    if (!MP_ACCESS_TOKEN || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return new Response('server misconfigured', { status: 500 })
    }

    const body = await req.json()

    if (body.type !== 'payment') {
      return new Response('ok', { status: 200 })
    }

    const paymentId = body.data?.id
    if (!paymentId) return new Response('ok', { status: 200 })

    // Verify Mercado Pago signature
    const valid = await verifySignature(req, String(paymentId))
    if (!valid) {
      return new Response('unauthorized', { status: 401 })
    }

    // Fetch payment details from Mercado Pago
    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { 'Authorization': `Bearer ${MP_ACCESS_TOKEN}` },
    })

    const payment = await mpResponse.json()

    if (payment.status !== 'approved') {
      return new Response('ok', { status: 200 })
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

    const { data: paymentRecord } = await supabase
      .from('payments')
      .select('user_id')
      .eq('mp_payment_id', String(paymentId))
      .single()

    if (!paymentRecord) {
      return new Response('payment not found', { status: 404 })
    }

    await supabase
      .from('payments')
      .update({ status: 'approved' })
      .eq('mp_payment_id', String(paymentId))

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
