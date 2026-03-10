import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import WhatsappFab from '../components/WhatsappFab'
import './Login.css'

function traduzirErro(msg = '') {
  if (msg.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.'
  if (msg.includes('Email not confirmed')) return 'Confirme seu e-mail antes de entrar.'
  if (msg.includes('User already registered') || msg.includes('already been registered')) return 'Este e-mail já está cadastrado.'
  if (msg.includes('Password should be at least')) return 'A senha deve ter pelo menos 6 caracteres.'
  if (msg.includes('Unable to validate email')) return 'E-mail inválido.'
  if (msg.includes('signup is disabled')) return 'Cadastro temporariamente desativado.'
  if (msg.includes('network') || msg.includes('fetch')) return 'Erro de conexão. Verifique sua internet.'
  return 'Ocorreu um erro. Tente novamente.'
}

export default function Login() {
  const [mode, setMode] = useState('login') // 'login' | 'register' | 'reset'
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resetSent, setResetSent] = useState(false)
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleChange = (e) => {
    setError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await login(form.email, form.password)
        navigate(state?.from || '/dashboard')
      } else if (mode === 'register') {
        if (!form.name.trim()) { setError('Informe seu nome.'); return }
        await register(form.email, form.password, form.name)
        navigate('/checkout')
      } else if (mode === 'reset') {
        if (!form.email.trim()) { setError('Informe seu e-mail.'); setLoading(false); return }
        const { error: resetErr } = await supabase.auth.resetPasswordForEmail(form.email, {
          redirectTo: `${window.location.origin}/login`,
        })
        if (resetErr) throw resetErr
        setResetSent(true)
      }
    } catch (err) {
      setError(traduzirErro(err.message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <div className="login">
      {/* Left panel — branding */}
      <div className="login__panel login__panel--left">
        <div className="login__panel-bg" aria-hidden="true" />

        <Link to="/" className="login__logo">
          <span className="login__logo-icon">{'{}'}</span>
          <span>Curso Iniciante</span>
        </Link>

        <div className="login__branding">
          <h2 className="login__headline">
            Aprenda no seu ritmo,<br />evolua de verdade.
          </h2>
          <p className="login__sub">
            Acesse sua conta para continuar de onde parou e acompanhar seu progresso.
          </p>
        </div>

        <div className="login__testimonial">
          <p className="login__testimonial-text">
            "Em duas semanas já estava fazendo alterações no site da minha empresa."
          </p>
          <div className="login__testimonial-author">
            <div className="login__testimonial-avatar">AL</div>
            <div>
              <p className="login__testimonial-name">Ana Luíza M.</p>
              <p className="login__testimonial-role">Designer → Dev Frontend</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="login__panel login__panel--right">
        <div className="login__form-wrapper">
          <div className="login__form-header">
            <h1 className="login__form-title">
              {mode === 'login' ? 'Bem-vindo de volta' : mode === 'register' ? 'Criar conta' : 'Recuperar senha'}
            </h1>
            <p className="login__form-sub">
              {mode === 'login' ? (
                <>Não tem conta?{' '}
                  <button className="login__inline-link" onClick={() => { setMode('register'); setError('') }}>
                    Criar conta
                  </button>
                </>
              ) : mode === 'register' ? (
                <>Já tem conta?{' '}
                  <button className="login__inline-link" onClick={() => { setMode('login'); setError('') }}>
                    Entrar
                  </button>
                </>
              ) : (
                <>Lembrou a senha?{' '}
                  <button className="login__inline-link" onClick={() => { setMode('login'); setError(''); setResetSent(false) }}>
                    Voltar ao login
                  </button>
                </>
              )}
            </p>
          </div>

          {mode === 'reset' && resetSent && (
            <div className="login__reset-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <p><strong>E-mail enviado!</strong></p>
                <p>Verifique sua caixa de entrada e clique no link para criar uma nova senha.</p>
              </div>
            </div>
          )}

          {error && <p className="login__error">{error}</p>}

          <form className="login__form" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="login__field">
                <label htmlFor="name" className="login__label">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  className="login__input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="login__field">
              <label htmlFor="email" className="login__label">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seuemail@exemplo.com"
                className="login__input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {mode !== 'reset' && <div className="login__field">
              <div className="login__label-row">
                <label htmlFor="password" className="login__label">Senha</label>
                {mode === 'login' && (
                  <button type="button" className="login__forgot" onClick={() => { setMode('reset'); setError(''); setResetSent(false) }}>
                    Esqueci minha senha
                  </button>
                )}
              </div>
              <div className="login__input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  placeholder="••••••••"
                  className="login__input"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="login__eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>}

            <button type="submit" className="btn btn--primary login__submit" disabled={loading || (mode === 'reset' && resetSent)}>
              {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar na minha conta' : mode === 'register' ? 'Criar conta e pagar' : 'Enviar link de recuperação'}
            </button>
          </form>

          <p className="login__terms">
            Ao entrar, você concorda com nossos{' '}
            <a href="#">Termos de Uso</a> e{' '}
            <a href="#">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </div>
    <WhatsappFab />
    </>
  )
}
