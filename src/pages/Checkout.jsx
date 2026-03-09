import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initMercadoPago, Payment } from '@mercadopago/sdk-react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import './Checkout.css'

const COURSE_PRICE = 39.99
const MP_PUBLIC_KEY = import.meta.env.VITE_MP_PUBLIC_KEY

initMercadoPago(MP_PUBLIC_KEY, { locale: 'pt-BR' })

const STORIES = [
  {
    avatar: 'MF',
    avatarColor: '#6366f1',
    name: 'Mateus Ferreira',
    role: 'Repositor → Dev Júnior',
    quote: 'Trabalhava em supermercado ganhando R$1.400. Fiz esse curso em 2 meses, montei um portfólio e passei em um processo seletivo pagando R$4.200. Melhor R$40 que já gastei na vida.',
    stars: 5,
  },
  {
    avatar: 'LR',
    avatarColor: '#ec4899',
    name: 'Larissa Rocha',
    role: 'Recepcionista → Freelancer',
    quote: 'Tinha medo de não conseguir por nunca ter estudado exatas. Mas a plataforma é gamificada, parece um jogo. Hoje fatura R$3k/mês fazendo sites para pequenas empresas.',
    stars: 5,
  },
  {
    avatar: 'CG',
    avatarColor: '#f59e0b',
    name: 'Carlos Gomes',
    role: 'Desempregado → Estágio confirmado',
    quote: 'Fiquei 8 meses desempregado. Em 6 semanas no curso já estava mandando currículo. Na 8ª semana assinei contrato de estágio. Não acreditei quando recebi a ligação.',
    stars: 5,
  },
  {
    avatar: 'AP',
    avatarColor: '#22c55e',
    name: 'Ana Paula',
    role: 'Professora → Dev remota',
    quote: 'Aos 34 anos achei que era tarde. Me surpreendi com o quanto aprendi rápido. Hoje trabalho remoto para uma startup de SP e ganho 2x mais que na escola.',
    stars: 5,
  },
]

const INCLUDES = [
  '20 módulos do zero ao deploy',
  '6 tipos de tarefa (quiz, código, drag & drop…)',
  'Sistema de XP, streaks e 11 conquistas',
  'Jogos interativos e Modo Foco',
  'Revisão com repetição espaçada',
  'Certificado digital de conclusão',
  'Acesso vitalício ao conteúdo',
  'Atualizações gratuitas do curso',
]

export default function Checkout() {
  const { user, register, login, forceSetPlan } = useAuth()
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle') // idle | loading | pix | success | error
  const [pixData, setPixData] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const pendingUserId = useRef(null)
  const pendingUserEmail = useRef(null)
  const pendingUserName = useRef(null)

  useEffect(() => {
    if (user?.plan === 'paid' && user?.role !== 'admin') {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setErrorMsg('')
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    setStatus('loading')
    setErrorMsg('')

    // Validate account fields (only when not logged in)
    if (!user) {
      if (!form.name.trim()) { setErrorMsg('Informe seu nome.'); setStatus('error'); return }
      if (!form.email.trim()) { setErrorMsg('Informe seu e-mail.'); setStatus('error'); return }
      if (form.password.length < 6) { setErrorMsg('A senha deve ter pelo menos 6 caracteres.'); setStatus('error'); return }
    }

    let userId, userEmail, userName

    // Se já está logado, usa o user atual
    if (user) {
      userId = user.id
      userEmail = user.email
      userName = user.name
    } else {
      // Tenta criar conta
      try {
        const { user: newUser, session } = await register(form.email, form.password, form.name)
        userId = newUser?.id || session?.user?.id
        userEmail = form.email
        userName = form.name
      } catch {
        // Signup falhou (e-mail já existe ou outro erro) — tenta login
        try {
          await login(form.email, form.password)
          const { data: { session } } = await supabase.auth.getSession()
          userId = session?.user?.id
          userEmail = form.email
          userName = form.name
        } catch {
          setErrorMsg('E-mail ou senha incorretos. Se já tem conta, acesse /login primeiro.')
          setStatus('error')
          return
        }
      }
    }

    if (!userId) {
      setErrorMsg('Não foi possível autenticar. Desative a confirmação de e-mail no Supabase ou acesse /login primeiro.')
      setStatus('error')
      return
    }

    pendingUserId.current = userId
    pendingUserEmail.current = userEmail
    pendingUserName.current = userName

    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          formData,
          paymentMethod: selectedPaymentMethod,
          userId,
          userEmail,
          userName,
        },
      })

      if (error) throw new Error(error.message)

      if (data.status === 'approved') {
        await forceSetPlan('paid')
        setStatus('success')
        setTimeout(() => navigate('/dashboard'), 2500)
      } else if (data.status === 'pending' && data.pixQrCode) {
        setPixData({ qrCode: data.pixQrCode, qrCodeBase64: data.pixQrCodeBase64 })
        setStatus('pix')
      } else if (data.status === 'pending') {
        await forceSetPlan('paid')
        setStatus('success')
        setTimeout(() => navigate('/dashboard'), 2500)
      } else {
        throw new Error('Pagamento não aprovado. Tente novamente.')
      }
    } catch (err) {
      setErrorMsg(err.message || 'Erro ao processar pagamento.')
      setStatus('error')
    }
  }

  const onError = () => {
    setErrorMsg('Erro no formulário de pagamento. Verifique os dados e tente novamente.')
    setStatus('error')
  }

  return (
    <div className="checkout">
      {/* Left — course summary */}
      <div className="checkout__summary">
        <a href="/" className="checkout__logo">
          <span className="checkout__logo-icon">{'{}'}</span>
          Curso Iniciante
        </a>

        <div className="checkout__product">
          <p className="checkout__product-label">Você está adquirindo</p>
          <h1 className="checkout__product-title">Curso Completo de Programação</h1>
          <div className="checkout__price">
            <span className="checkout__price-from">De R$ 99,99</span>
            <div className="checkout__price-main">
              <span className="checkout__price-currency">R$</span>
              <span className="checkout__price-value">39,99</span>
            </div>
            <span className="checkout__price-note">pagamento único · acesso vitalício</span>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="checkout__social-strip">
          <div className="checkout__social-item">
            <span className="checkout__social-num">+2.400</span>
            <span className="checkout__social-label">alunos</span>
          </div>
          <div className="checkout__social-sep" />
          <div className="checkout__social-item">
            <span className="checkout__social-num">20</span>
            <span className="checkout__social-label">módulos</span>
          </div>
          <div className="checkout__social-sep" />
          <div className="checkout__social-item">
            <div className="checkout__social-stars">★★★★★</div>
            <span className="checkout__social-label">avaliação</span>
          </div>
        </div>

        {/* Stories */}
        <div className="checkout__stories-wrap">
          <p className="checkout__stories-title">O que dizem os alunos</p>
          <div className="checkout__stories">
            {STORIES.map((s) => (
              <div key={s.name} className="checkout__story">
                <div className="checkout__story-top">
                  <div className="checkout__story-avatar" style={{ background: s.avatarColor }}>
                    {s.avatar}
                  </div>
                  <div className="checkout__story-info">
                    <span className="checkout__story-name">{s.name}</span>
                    <span className="checkout__story-role">{s.role}</span>
                  </div>
                  <div className="checkout__story-stars">
                    {'★'.repeat(s.stars)}
                  </div>
                </div>
                <p className="checkout__story-quote">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="checkout__guarantee">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p><strong>7 dias de garantia</strong> — não gostou, devolvemos 100%</p>
        </div>
      </div>

      {/* Right — payment form */}
      <div className="checkout__payment">
        <div className="checkout__payment-inner">
          {status === 'loading' && (
            <div className="checkout__feedback">
              <div className="checkout__loading-spinner" />
              <h2>Processando pagamento...</h2>
              <p>Aguarde, estamos gerando seu PIX.</p>
            </div>
          )}

          {status === 'success' && (
            <div className="checkout__feedback checkout__feedback--success">
              <div className="checkout__feedback-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>Pagamento aprovado!</h2>
              <p>Redirecionando para o curso...</p>
            </div>
          )}

          {status === 'pix' && pixData && (
            <div className="checkout__pix">
              <h2 className="checkout__pix-title">Pague com PIX</h2>
              <p className="checkout__pix-sub">Escaneie o QR code ou copie o código. O acesso é liberado automaticamente após o pagamento.</p>
              {pixData.qrCodeBase64 && (
                <img src={`data:image/png;base64,${pixData.qrCodeBase64}`} alt="QR Code PIX" className="checkout__pix-qr" />
              )}
              <div className="checkout__pix-copy">
                <input readOnly value={pixData.qrCode} className="checkout__pix-input" />
                <button className="btn btn--primary" onClick={() => navigator.clipboard.writeText(pixData.qrCode)}>
                  Copiar
                </button>
              </div>
              <p className="checkout__pix-note">Aguardando pagamento... O acesso será liberado em instantes.</p>
            </div>
          )}

          <div style={{ display: status === 'idle' || status === 'error' ? 'block' : 'none' }}>
            <div className="checkout__payment-header">
              <h2 className="checkout__payment-title">Finalizar compra</h2>
              <p className="checkout__payment-sub">Crie sua conta e acesse o curso agora</p>
            </div>

            {status === 'error' && (
              <div className="checkout__error">{errorMsg}</div>
            )}

            {!user && (
              <div className="checkout__account-fields">
                <p className="checkout__section-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Seus dados de acesso
                </p>
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  className="checkout__input"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="checkout__input"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Crie uma senha (mín. 6 caracteres)"
                  className="checkout__input"
                  value={form.password}
                  onChange={handleChange}
                />
                <p className="checkout__login-hint">
                  Já tem conta? <a href="/login">Entrar aqui</a>
                </p>
              </div>
            )}

            {user && (
              <div className="checkout__logged-as">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Comprando como <strong>{user.email}</strong>
              </div>
            )}

            <p className="checkout__section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Dados de pagamento
            </p>

            <Payment
              initialization={{ amount: COURSE_PRICE }}
              customization={{
                paymentMethods: {
                  creditCard: 'all',
                  debitCard: 'all',
                  bankTransfer: 'all',
                  ticket: 'all',
                },
              }}
              onSubmit={onSubmit}
              onError={onError}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
