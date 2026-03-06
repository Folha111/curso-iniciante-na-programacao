import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleChange = (e) => {
    setError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const ok = login(form.email, form.password)
    if (ok) {
      navigate(state?.from || '/dashboard')
    } else {
      setError('E-mail ou senha incorretos.')
    }
  }

  return (
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
            <h1 className="login__form-title">Bem-vindo de volta</h1>
            <p className="login__form-sub">
              Não tem conta?{' '}
              <a href="#cta" className="login__inline-link">
                Inscreva-se grátis
              </a>
            </p>
          </div>

          {/* Social login */}
          <button className="login__google-btn" type="button">
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.5-4z" fill="#FFC107"/>
              <path d="M6.3 14.7l7 5.1C15.2 16.5 19.3 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.3-17.7 10.7z" fill="#FF3D00"/>
              <path d="M24 43c5.4 0 10.3-1.9 14-5.1l-6.5-5.3C29.7 34.4 27 35.5 24 35.5c-6 0-11.1-4-12.9-9.5l-7 5.4C7.8 38.7 15.3 43 24 43z" fill="#4CAF50"/>
              <path d="M44.5 20H24v8.5h11.8c-.9 2.6-2.6 4.8-4.8 6.3l6.5 5.3C41.5 36.5 44.5 30.1 44.5 23c0-1.3-.2-2.7-.5-4z" fill="#1976D2"/>
            </svg>
            Continuar com Google
          </button>

          <div className="login__divider">
            <span>ou continue com e-mail</span>
          </div>

          {/* Form */}
          {error && <p className="login__error">{error}</p>}

          <form className="login__form" onSubmit={handleSubmit}>
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

            <div className="login__field">
              <div className="login__label-row">
                <label htmlFor="password" className="login__label">Senha</label>
                <a href="#" className="login__forgot">Esqueci minha senha</a>
              </div>
              <div className="login__input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="login__input"
                  value={form.password}
                  onChange={handleChange}
                  required
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
            </div>

            <button type="submit" className="btn btn--primary login__submit">
              Entrar na minha conta
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
  )
}
