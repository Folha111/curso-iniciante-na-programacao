import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import './ResetPassword.css'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [status, setStatus] = useState('waiting') // waiting | ready | loading | success | error
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Supabase dispara PASSWORD_RECOVERY quando o usuário chega pelo link do email
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setStatus('ready')
    })

    // Fallback: verifica se URL já tem token (hash ou code)
    const { hash, search } = window.location
    if (hash.includes('access_token') || hash.includes('type=recovery') || search.includes('code=')) {
      setStatus('ready')
    }

    return () => subscription.unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return }
    if (password !== confirm) { setError('As senhas não coincidem.'); return }

    setStatus('loading')
    const { error: updateErr } = await supabase.auth.updateUser({ password })
    if (updateErr) {
      setError(updateErr.message)
      setStatus('ready')
    } else {
      setStatus('success')
      await supabase.auth.signOut()
      setTimeout(() => navigate('/login'), 2500)
    }
  }

  return (
    <>
      <Navbar />
      <div className="reset-pwd">
        <div className="reset-pwd__card">
          <div className="reset-pwd__header">
            <a href="/" className="reset-pwd__logo">
              <span>{'{}'}</span> Curso Iniciante
            </a>
            <h1>Criar nova senha</h1>
            <p>Digite sua nova senha abaixo.</p>
          </div>

          {status === 'waiting' && (
            <div className="reset-pwd__feedback">
              <div className="reset-pwd__spinner" />
              <p>Verificando link...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="reset-pwd__feedback reset-pwd__feedback--success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h2>Senha atualizada!</h2>
              <p>Redirecionando para o login...</p>
            </div>
          )}

          {(status === 'ready' || status === 'loading') && (
            <form onSubmit={handleSubmit} className="reset-pwd__form">
              {error && <p className="reset-pwd__error">{error}</p>}
              <div className="reset-pwd__field">
                <label htmlFor="pwd">Nova senha</label>
                <input
                  id="pwd"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => { setError(''); setPassword(e.target.value) }}
                  required
                  minLength={6}
                  className="reset-pwd__input"
                />
              </div>
              <div className="reset-pwd__field">
                <label htmlFor="confirm">Confirmar senha</label>
                <input
                  id="confirm"
                  type="password"
                  placeholder="••••••••"
                  value={confirm}
                  onChange={e => { setError(''); setConfirm(e.target.value) }}
                  required
                  minLength={6}
                  className="reset-pwd__input"
                />
              </div>
              <button type="submit" className="btn btn--primary reset-pwd__submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Salvando...' : 'Salvar nova senha'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
