import { useState, useEffect } from 'react'
import { useMissoes } from '../context/MissoesContext'
import './Missoes.css'

function getTimeUntilMidnight() {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  const diff = midnight - now
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  return `${h}h ${String(m).padStart(2, '0')}m`
}

export default function Missoes() {
  const { missions, allCompleted, rewardClaimed, totalBonus, claimReward } = useMissoes()
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeUntilMidnight()), 60_000)
    return () => clearInterval(id)
  }, [])

  const completedCount = missions.filter(m => m.completed).length

  return (
    <section className="missoes">
      <div className="missoes__header">
        <div className="missoes__header-left">
          <h2 className="missoes__title">Missões do Dia</h2>
          <span className="missoes__count">{completedCount}/{missions.length}</span>
        </div>
        <span className="missoes__timer">
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Reseta em {timeLeft}
        </span>
      </div>

      <div className="missoes__list">
        {missions.map(m => (
          <div key={m.id} className={`missoes__item ${m.completed ? 'missoes__item--done' : ''}`}>
            <div className="missoes__item-icon">{m.icon}</div>
            <div className="missoes__item-body">
              <div className="missoes__item-top">
                <span className="missoes__item-label">{m.label}</span>
                <span className="missoes__item-xp">+{m.xpBonus} XP</span>
              </div>
              <div className="missoes__item-bar">
                <div
                  className="missoes__item-fill"
                  style={{ width: `${Math.round((m.current / m.target) * 100)}%` }}
                />
              </div>
              <span className="missoes__item-prog">
                {m.current}/{m.target}
                {m.completed && (
                  <svg viewBox="0 0 14 14" fill="none" width="12" height="12" style={{ marginLeft: 4 }}>
                    <path d="M2.5 7l3 3 6-6" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reward claim area */}
      {rewardClaimed ? (
        <div className="missoes__claimed">
          <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
            <path d="M4 10l5 5 7-7" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Recompensa resgatada! +{totalBonus} XP ganhos hoje
        </div>
      ) : allCompleted ? (
        <button className="missoes__claim-btn" onClick={claimReward}>
          <span>🎉</span>
          Resgatar +{totalBonus} XP
        </button>
      ) : (
        <div className="missoes__progress-hint">
          Complete todas as missões para ganhar <strong>+{totalBonus} XP bônus</strong>
        </div>
      )}
    </section>
  )
}
