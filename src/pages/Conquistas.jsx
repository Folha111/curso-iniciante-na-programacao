import { useProgress } from '../context/ProgressContext'
import './Conquistas.css'

const XP_LEVELS = [0, 50, 100, 200, 500]

export default function Conquistas() {
  const { xp, streak, badges } = useProgress()

  const unlockedCount = badges.filter((b) => b.unlocked).length
  const nextLevel = XP_LEVELS.find((l) => l > xp) ?? XP_LEVELS[XP_LEVELS.length - 1]
  const prevLevel = [...XP_LEVELS].reverse().find((l) => l <= xp) ?? 0
  const pct = nextLevel === prevLevel ? 100 : Math.round(((xp - prevLevel) / (nextLevel - prevLevel)) * 100)

  return (
    <div className="conquistas">
      <div className="conquistas__header">
        <h1 className="conquistas__title">Conquistas</h1>
        <p className="conquistas__sub">Desbloqueie badges completando tarefas e mantendo sua sequência de estudos.</p>
      </div>

      {/* Stats */}
      <div className="conquistas__stats">
        <div className="conquistas__stat">
          <p className="conquistas__stat-value">{xp}</p>
          <p className="conquistas__stat-label">XP Total</p>
        </div>
        <div className="conquistas__stat">
          <p className="conquistas__stat-value">{streak}</p>
          <p className="conquistas__stat-label">Dias seguidos</p>
        </div>
        <div className="conquistas__stat">
          <p className="conquistas__stat-value">{unlockedCount}</p>
          <p className="conquistas__stat-label">Badges desbloqueados</p>
        </div>
        <div className="conquistas__stat">
          <p className="conquistas__stat-value">{badges.length}</p>
          <p className="conquistas__stat-label">Total de badges</p>
        </div>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <div className="conquistas__streak">
          <span className="conquistas__streak-flame">🔥</span>
          <div className="conquistas__streak-info">
            <p className="conquistas__streak-num">{streak} {streak === 1 ? 'dia' : 'dias'} em sequência!</p>
            <p className="conquistas__streak-label">Continue estudando para não perder sua sequência</p>
          </div>
        </div>
      )}

      {/* XP bar */}
      <div className="conquistas__xp-bar">
        <div className="conquistas__xp-header">
          <span className="conquistas__xp-label">Progresso de XP</span>
          <span className="conquistas__xp-value">{xp} / {nextLevel} XP</span>
        </div>
        <div className="conquistas__xp-track">
          <div className="conquistas__xp-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="conquistas__xp-levels">
          {XP_LEVELS.map((l) => (
            <span key={l} className="conquistas__xp-mark">{l}</span>
          ))}
        </div>
      </div>

      {/* Badges grid */}
      <p className="conquistas__section-title">Todos os badges</p>
      <div className="conquistas__grid">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`conquistas__badge ${badge.unlocked ? 'conquistas__badge--unlocked' : 'conquistas__badge--locked'}`}
          >
            {badge.unlocked && (
              <span className="conquistas__badge-check">✓</span>
            )}
            <span className="conquistas__badge-icon">{badge.icon}</span>
            <p className="conquistas__badge-name">{badge.name}</p>
            <p className="conquistas__badge-desc">{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
