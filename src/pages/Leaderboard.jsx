import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import './Leaderboard.css'

function loadLeaderboard() {
  try {
    const raw = localStorage.getItem('leaderboard_data')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

const MEDALS = ['🥇', '🥈', '🥉']

export default function Leaderboard() {
  const { user } = useAuth()
  const { xp } = useProgress()

  const rankings = useMemo(() => {
    const data = loadLeaderboard()
    // Ensure current user is included with latest XP
    if (user) data[user.email] = { name: user.name, xp }
    return Object.entries(data)
      .map(([email, info]) => ({ email, name: info.name, xp: info.xp ?? 0 }))
      .sort((a, b) => b.xp - a.xp)
  }, [user, xp])

  const top3 = rankings.slice(0, 3)
  const rest = rankings.slice(3)

  // Reorder podium: 2nd, 1st, 3rd
  const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean)
  const podiumClass = ['2nd', '1st', '3rd']
  // Find index for correct class
  const podiumIndexMap = podiumOrder.map((entry) => {
    if (!entry) return null
    const rank = top3.findIndex((e) => e?.email === entry.email)
    return rank + 1
  })

  return (
    <div className="leaderboard">
      <div className="leaderboard__header">
        <h1 className="leaderboard__title">Ranking</h1>
        <p className="leaderboard__sub">Quem está acumulando mais XP? Compete com os outros alunos!</p>
      </div>

      {rankings.length === 0 ? (
        <div className="leaderboard__empty">
          <div className="leaderboard__empty-icon">🏆</div>
          <p className="leaderboard__empty-text">Nenhum dado ainda. Complete tarefas para aparecer no ranking!</p>
        </div>
      ) : (
        <>
          {/* Podium */}
          {top3.length >= 2 && (
            <div className="leaderboard__podium">
              {podiumOrder.map((entry, idx) => {
                const rank = podiumIndexMap[idx]
                if (!entry) return null
                const isMe = entry.email === user?.email
                const rankStr = ['', '1st', '2nd', '3rd'][rank]
                return (
                  <div key={entry.email} className={`leaderboard__podium-slot leaderboard__podium-slot--${rankStr}`}>
                    <div className="leaderboard__podium-medal">{MEDALS[rank - 1]}</div>
                    <div className="leaderboard__podium-avatar">
                      {entry.name[0].toUpperCase()}
                    </div>
                    <p className="leaderboard__podium-name">{entry.name}</p>
                    <p className="leaderboard__podium-xp">{entry.xp} XP</p>
                    <div className="leaderboard__podium-block" />
                  </div>
                )
              })}
            </div>
          )}

          {/* Full list */}
          <div className="leaderboard__list">
            {rankings.map((entry, i) => {
              const isMe = entry.email === user?.email
              return (
                <div key={entry.email} className={`leaderboard__row ${isMe ? 'leaderboard__row--me' : ''}`}>
                  <span className={`leaderboard__rank ${i < 3 ? 'leaderboard__rank--top' : ''}`}>
                    {i < 3 ? MEDALS[i] : `#${i + 1}`}
                  </span>
                  <div className="leaderboard__avatar">
                    {entry.name[0].toUpperCase()}
                  </div>
                  <span className="leaderboard__name">
                    {entry.name}
                    {isMe && <span className="leaderboard__you">você</span>}
                  </span>
                  <span className="leaderboard__xp">{entry.xp} XP</span>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
