import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Perfil.css'

export default function Perfil() {
  const { user, updateUser } = useAuth()
  const { xp, streak, badges, weeklyXp, weeklyGoal, setWeeklyGoal, isModuleDone } = useProgress()
  const { modules } = useModules()

  const [editMode, setEditMode] = useState(false)
  const [nameInput, setNameInput] = useState(user.name)
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [saveMsg, setSaveMsg] = useState(null)

  const unlockedBadges = badges.filter((b) => b.unlocked)
  const doneModules = modules.filter((m) => isModuleDone(m.id)).length
  const totalTasks = modules.reduce((acc, m) => acc + m.tasks.length, 0)

  const GOAL_OPTIONS = [50, 100, 200, 300, 500]
  const weekPct = weeklyGoal > 0 ? Math.min(100, Math.round((weeklyXp / weeklyGoal) * 100)) : 0

  function handleSave(e) {
    e.preventDefault()
    if (!nameInput.trim()) return
    const updates = { name: nameInput.trim() }
    if (passwordInput) {
      if (passwordInput !== confirmPassword) {
        setSaveMsg({ type: 'error', text: 'As senhas não coincidem.' })
        return
      }
      if (passwordInput.length < 4) {
        setSaveMsg({ type: 'error', text: 'A senha deve ter pelo menos 4 caracteres.' })
        return
      }
      updates.password = passwordInput
    }
    updateUser(updates)
    setPasswordInput('')
    setConfirmPassword('')
    setEditMode(false)
    setSaveMsg({ type: 'success', text: 'Perfil atualizado com sucesso!' })
    setTimeout(() => setSaveMsg(null), 3000)
  }

  return (
    <main className="perfil">
      {/* Header */}
      <div className="perfil__header">
        <div className="perfil__avatar">{user.name[0].toUpperCase()}</div>
        <div className="perfil__info">
          <h1 className="perfil__name">{user.name}</h1>
          <p className="perfil__email">{user.email}</p>
          <span className="perfil__role-badge">{user.role === 'admin' ? 'Administrador' : 'Aluno'}</span>
        </div>
        <button className="btn btn--ghost perfil__edit-btn" onClick={() => setEditMode((v) => !v)}>
          {editMode ? 'Cancelar' : 'Editar perfil'}
        </button>
      </div>

      {saveMsg && (
        <div className={`perfil__msg perfil__msg--${saveMsg.type}`}>{saveMsg.text}</div>
      )}

      {/* Edit form */}
      {editMode && (
        <form className="perfil__form" onSubmit={handleSave}>
          <h2 className="perfil__form-title">Editar perfil</h2>
          <div className="perfil__field">
            <label className="perfil__label">Nome</label>
            <input
              className="perfil__input"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Seu nome"
              maxLength={40}
            />
          </div>
          <div className="perfil__field">
            <label className="perfil__label">Nova senha <span className="perfil__label-opt">(deixe vazio para manter)</span></label>
            <input
              className="perfil__input"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Nova senha"
            />
          </div>
          {passwordInput && (
            <div className="perfil__field">
              <label className="perfil__label">Confirmar senha</label>
              <input
                className="perfil__input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repita a nova senha"
              />
            </div>
          )}
          <button className="btn btn--primary" type="submit">Salvar alterações</button>
        </form>
      )}

      {/* Stats */}
      <section className="perfil__stats">
        <div className="perfil__stat-card">
          <p className="perfil__stat-value" style={{ color: 'var(--color-accent)' }}>{xp}</p>
          <p className="perfil__stat-label">XP Total</p>
        </div>
        <div className="perfil__stat-card">
          <p className="perfil__stat-value">{streak}</p>
          <p className="perfil__stat-label">Dias seguidos</p>
        </div>
        <div className="perfil__stat-card">
          <p className="perfil__stat-value">{doneModules}<span>/{modules.length}</span></p>
          <p className="perfil__stat-label">Módulos completos</p>
        </div>
        <div className="perfil__stat-card">
          <p className="perfil__stat-value">{unlockedBadges.length}<span>/{badges.length}</span></p>
          <p className="perfil__stat-label">Badges</p>
        </div>
      </section>

      {/* Weekly Goal */}
      <section className="perfil__section">
        <h2 className="perfil__section-title">Meta semanal de XP</h2>
        <div className="perfil__goal-card">
          <div className="perfil__goal-info">
            <p className="perfil__goal-current">{weeklyXp} <span>/ {weeklyGoal} XP esta semana</span></p>
            <p className="perfil__goal-pct">{weekPct}% concluído</p>
          </div>
          <div className="perfil__goal-bar">
            <div className="perfil__goal-fill" style={{ width: `${weekPct}%` }} />
          </div>
          <div className="perfil__goal-options">
            <p className="perfil__goal-label">Alterar meta:</p>
            <div className="perfil__goal-btns">
              {GOAL_OPTIONS.map((g) => (
                <button
                  key={g}
                  className={`perfil__goal-btn ${weeklyGoal === g ? 'perfil__goal-btn--active' : ''}`}
                  onClick={() => setWeeklyGoal(g)}
                >
                  {g} XP
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="perfil__section">
        <h2 className="perfil__section-title">Progresso por módulo</h2>
        <div className="perfil__modules">
          {modules.map((mod) => {
            const done = isModuleDone(mod.id)
            return (
              <div key={mod.id} className="perfil__module-row" style={{ '--mod-color': mod.color }}>
                <span className="perfil__module-num">{mod.number}</span>
                <span className="perfil__module-title">{mod.title}</span>
                {done
                  ? <span className="perfil__module-done">Completo ✓</span>
                  : <span className="perfil__module-pend">Em progresso</span>
                }
              </div>
            )
          })}
        </div>
      </section>

      {/* Badges */}
      <section className="perfil__section">
        <h2 className="perfil__section-title">Badges desbloqueadas ({unlockedBadges.length})</h2>
        {unlockedBadges.length === 0 ? (
          <p className="perfil__empty">Nenhuma badge ainda. Complete tarefas para desbloquear!</p>
        ) : (
          <div className="perfil__badges">
            {unlockedBadges.map((b) => (
              <div key={b.id} className="perfil__badge">
                <span className="perfil__badge-icon">{b.icon}</span>
                <span className="perfil__badge-name">{b.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
