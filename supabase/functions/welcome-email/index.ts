import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'Curso Iniciante <noreply@curso-iniciante.com.br>'
const SITE_URL = Deno.env.get('SITE_URL') || 'https://curso-iniciante-na-programacao.vercel.app'

serve(async (req) => {
  try {
    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured — skipping welcome email')
      return new Response('not configured', { status: 200 })
    }

    const { userEmail, userName } = await req.json()
    if (!userEmail) return new Response('missing email', { status: 400 })

    const firstName = (userName || 'aluno').split(' ')[0]

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bem-vindo ao Curso Iniciante!</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:36px 40px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                <span style="color:#6366f1;">{}</span> Curso Iniciante
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 12px;font-size:26px;font-weight:800;color:#0f172a;line-height:1.3;">
                Bem-vindo, ${firstName}! 🎉
              </h1>
              <p style="margin:0 0 20px;font-size:16px;color:#475569;line-height:1.7;">
                Seu pagamento foi confirmado e o acesso ao curso está liberado. Você deu o primeiro passo para transformar sua carreira com programação.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background:#6366f1;border-radius:10px;">
                    <a href="${SITE_URL}/dashboard" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;">
                      Acessar o curso →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- What's inside -->
              <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.06em;">O que você tem acesso:</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${[
                  ['🗂️', '21 módulos do zero ao deploy'],
                  ['🎮', 'Sistema de XP, streaks e 11 conquistas'],
                  ['💻', '6 tipos de tarefa (quiz, código, drag & drop…)'],
                  ['🔁', 'Revisão com repetição espaçada'],
                  ['🏆', 'Certificado digital de conclusão'],
                  ['♾️', 'Acesso vitalício + atualizações gratuitas'],
                ].map(([icon, text]) => `
                <tr>
                  <td style="padding:6px 0;font-size:14px;color:#475569;">
                    <span style="margin-right:8px;">${icon}</span>${text}
                  </td>
                </tr>`).join('')}
              </table>
            </td>
          </tr>

          <!-- Tip -->
          <tr>
            <td style="padding:0 40px 32px;">
              <div style="background:#f1f5f9;border-radius:10px;padding:16px 20px;">
                <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;">
                  <strong style="color:#0f172a;">💡 Dica:</strong> Estude pelo menos 15 minutos por dia para manter seu streak e ganhar o máximo de XP.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
                Dúvidas? Fale conosco pelo WhatsApp na plataforma.<br />
                Você está recebendo este e-mail porque realizou uma compra no Curso Iniciante.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: userEmail,
        subject: `Bem-vindo, ${firstName}! Seu acesso ao curso está liberado 🎉`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return new Response('email send failed', { status: 500 })
    }

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('welcome-email error:', err)
    return new Response('error', { status: 500 })
  }
})
