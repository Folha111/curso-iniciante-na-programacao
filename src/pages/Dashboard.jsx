import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { isTaskDone, isModuleDone, isModuleUnlocked } = useProgress()
  const { modules: MODULES } = useModules()

  const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
  const doneTasks = MODULES.reduce(
    (acc, m) => acc + m.tasks.filter((t) => isTaskDone(m.id, t.id)).length,
    0
  )
  const doneModules = MODULES.filter((m) => isModuleDone(m.id)).length
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  // Find the first incomplete unlocked module for "continue" section
  const nextModule = MODULES.find((m) => isModuleUnlocked(m.id) && !isModuleDone(m.id))

  return (
    <main className="dash__main">
        {/* Top bar */}
        <header className="dash__header">
          <div>
            <h1 className="dash__welcome">Olá, {user.name} 👋</h1>
            <p className="dash__welcome-sub">Continue de onde parou.</p>
          </div>
          <div className="dash__avatar">{user.name[0]}</div>
        </header>

        {/* Stats */}
        <div className="dash__stats">
          <div className="dash__stat-card">
            <p className="dash__stat-label">Progresso geral</p>
            <p className="dash__stat-value">{progress}%</p>
            <div className="dash__progress-bar">
              <div className="dash__progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="dash__stat-card">
            <p className="dash__stat-label">Tarefas concluídas</p>
            <p className="dash__stat-value">{doneTasks} <span>/ {totalTasks}</span></p>
          </div>
          <div className="dash__stat-card">
            <p className="dash__stat-label">Módulos completos</p>
            <p className="dash__stat-value">{doneModules} <span>/ {MODULES.length}</span></p>
          </div>
        </div>

        {/* Continue */}
        {nextModule && (
          <section className="dash__continue">
            <h2 className="dash__section-title">Continuar estudando</h2>
            <div className="dash__next-card" onClick={() => navigate(`/modulo/${nextModule.id}`)} style={{ cursor: 'pointer' }}>
              <div className="dash__next-badge" style={{ background: nextModule.color }}>{nextModule.number}</div>
              <div className="dash__next-info">
                <p className="dash__next-title">{nextModule.title}</p>
                <p className="dash__next-sub">
                  {nextModule.tasks.filter((t) => isTaskDone(nextModule.id, t.id)).length}/{nextModule.tasks.length} tarefas concluídas
                </p>
              </div>
              <button className="btn btn--primary dash__next-btn">
                Continuar
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </section>
        )}

        {/* Modules list */}
        <section id="modulos">
          <h2 className="dash__section-title">Módulos</h2>
          <div className="dash__modules">
            {MODULES.map((mod) => {
              const modDone = isModuleDone(mod.id)
              const unlocked = isModuleUnlocked(mod.id)
              const modTasksDone = mod.tasks.filter((t) => isTaskDone(mod.id, t.id)).length
              const pct = Math.round((modTasksDone / mod.tasks.length) * 100)
              const status = modDone ? 'done' : unlocked ? (modTasksDone > 0 ? 'active' : 'unlocked') : 'locked'

              return (
                <div
                  key={mod.id}
                  className={`dash__module-row dash__module-row--${status}`}
                  style={{ '--mod-color': mod.color }}
                  onClick={() => unlocked && navigate(`/modulo/${mod.id}`)}
                >
                  <span className="dash__module-row-num">{mod.number}</span>

                  <div className="dash__module-row-info">
                    <span className="dash__module-row-title">{mod.title}</span>
                    <div className="dash__module-row-bar">
                      <div className="dash__module-row-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <div className="dash__module-row-right">
                    <span className="dash__module-row-count">{modTasksDone}/{mod.tasks.length}</span>
                    {modDone && (
                      <span className="dash__module-row-icon dash__module-row-icon--done">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                    {status === 'locked' && (
                      <span className="dash__module-row-icon dash__module-row-icon--locked">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                      </span>
                    )}
                    {(status === 'active' || status === 'unlocked') && (
                      <span className="dash__module-row-icon dash__module-row-icon--arrow">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
    </main>
  )
}
