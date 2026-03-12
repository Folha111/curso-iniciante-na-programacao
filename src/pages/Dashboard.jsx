import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import { useLang } from '../context/LangContext'
import translations from '../data/translations'
import Missoes from '../components/Missoes'
import './Dashboard.css'

function groupByStage(modules, stages) {
  return stages.map((stage) => ({
    ...stage,
    modules: modules.filter((m) => m.stageId === stage.id),
  })).filter((s) => s.modules.length > 0)
}

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { isTaskDone, isModuleDone, isModuleUnlocked, xp, streak, badges, reviewQueue, weeklyXp, weeklyGoal } = useProgress()
  const { modules: MODULES, stages: STAGES } = useModules()
  const { t, lang } = useLang()

  const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
  const doneTasks = MODULES.reduce(
    (acc, m) => acc + m.tasks.filter((t) => isTaskDone(m.id, t.id)).length,
    0
  )
  const doneModules = MODULES.filter((m) => isModuleDone(m.id)).length
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  const nextModule = MODULES.find((m) => isModuleUnlocked(m.id) && !isModuleDone(m.id))
  const unlockedBadges = badges.filter((b) => b.unlocked)
  const weekPct = weeklyGoal > 0 ? Math.min(100, Math.round((weeklyXp / weeklyGoal) * 100)) : 0

  return (
    <main className="dash__main">
      {/* Top bar */}
      <header className="dash__header">
        <div>
          <h1 className="dash__welcome">{t('dashboard','greeting')}, {user.name} 👋</h1>
          <p className="dash__welcome-sub">{t('dashboard','subtitle')}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {streak > 0 && (
            <div className="dash__streak-pill">
              🔥 {streak} {streak === 1 ? t('dashboard','day') : t('dashboard','days')}
            </div>
          )}
          <div className="dash__avatar">{user.name?.[0]?.toUpperCase() || '?'}</div>
        </div>
      </header>

      {/* Stats */}
      <div className="dash__stats">
        <div className="dash__stat-card">
          <p className="dash__stat-label">{t('dashboard','overallProgress')}</p>
          <p className="dash__stat-value">{progress}%</p>
          <div className="dash__progress-bar">
            <div className="dash__progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">{t('dashboard','tasksDone')}</p>
          <p className="dash__stat-value">{doneTasks} <span>/ {totalTasks}</span></p>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">{t('dashboard','modulesDone')}</p>
          <p className="dash__stat-value">{doneModules} <span>/ {MODULES.length}</span></p>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">{t('dashboard','xpAccumulated')}</p>
          <p className="dash__stat-value" style={{ color: 'var(--color-accent)' }}>{xp} <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-gray)' }}>XP</span></p>
        </div>
      </div>

      {/* Badges preview */}
      {unlockedBadges.length > 0 && (
        <section className="dash__badges-section">
          <div className="dash__badges-header">
            <h2 className="dash__section-title">{t('dashboard','recentAchievements')}</h2>
            <Link to="/conquistas" className="dash__badges-link">{t('dashboard','viewAll')}</Link>
          </div>
          <div className="dash__badges-row">
            {unlockedBadges.slice(0, 5).map((b) => (
              <div key={b.id} className="dash__badge-chip" title={b.name + ': ' + b.desc}>
                <span>{b.icon}</span>
                <span className="dash__badge-chip-name">{b.name}</span>
              </div>
            ))}
            {unlockedBadges.length > 5 && (
              <Link to="/conquistas" className="dash__badge-chip dash__badge-chip--more">
                +{unlockedBadges.length - 5} {t('dashboard','more')}
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Weekly Goal */}
      <section className="dash__weekly">
        <div className="dash__weekly-header">
          <h2 className="dash__section-title">{t('dashboard','weeklyGoal')}</h2>
          <Link to="/perfil" className="dash__badges-link">{t('dashboard','configure')}</Link>
        </div>
        <div className="dash__weekly-card">
          <div className="dash__weekly-info">
            <span className="dash__weekly-icon">🎯</span>
            <div>
              <p className="dash__weekly-label">{translations[lang]?.dashboard?.weeklyXpLabel(weeklyXp, weeklyGoal)}</p>
              <p className="dash__weekly-sub">{weekPct >= 100 ? t('dashboard','goalReached') : translations[lang]?.dashboard?.goalRemaining(weeklyGoal - weeklyXp)}</p>
            </div>
            <span className="dash__weekly-pct">{weekPct}%</span>
          </div>
          <div className="dash__weekly-bar">
            <div className="dash__weekly-fill" style={{ width: `${weekPct}%` }} />
          </div>
        </div>
      </section>

      {/* Daily Missions */}
      <Missoes />

      {/* Review queue */}
      {reviewQueue.length > 0 && (
        <section className="dash__review">
          <div className="dash__badges-header">
            <h2 className="dash__section-title">{t('dashboard','reviewQueue')}</h2>
            <Link to="/revisao" className="dash__badges-link">{t('dashboard','startSession')}</Link>
          </div>
          <p className="dash__review-sub">{t('dashboard','reviewSub')}</p>
          <div className="dash__review-list">
            {reviewQueue.slice(0, 3).map((item) => (
              <div
                key={`${item.moduleId}:${item.taskId}`}
                className="dash__review-card"
                onClick={() => navigate(`/modulo/${item.moduleId}`)}
              >
                <span className="dash__review-icon">🔁</span>
                <div className="dash__review-info">
                  <p className="dash__review-task">{item.taskTitle}</p>
                  <p className="dash__review-module">{item.moduleTitle}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Continue */}
      {nextModule && (
        <section className="dash__continue">
          <h2 className="dash__section-title">{t('dashboard','nextModule')}</h2>
          <div className="dash__next-card" onClick={() => navigate(`/modulo/${nextModule.id}`)} style={{ cursor: 'pointer' }}>
            <div className="dash__next-badge" style={{ background: nextModule.color }}>{nextModule.number}</div>
            <div className="dash__next-info">
              <p className="dash__next-title">{nextModule.title}</p>
              <p className="dash__next-sub">
                {nextModule.tasks.filter((t) => isTaskDone(nextModule.id, t.id)).length}/{nextModule.tasks.length} tarefas concluídas
              </p>
            </div>
            <button className="btn btn--primary dash__next-btn">
              {t('dashboard','continue')}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* Modules list grouped by stage */}
      <section id="modulos">
        <h2 className="dash__section-title">Módulos</h2>
        <div className="dash__modules">
          {groupByStage(MODULES, STAGES).map((stage) => (
            <div key={stage.id} className="dash__stage-group">
              <div className="dash__stage-label" style={{ '--stage-color': stage.color }}>
                <span className="dash__stage-label-dot" />
                {stage.name}
              </div>
              {stage.modules.map((mod) => {
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
                      <div className="dash__module-row-header">
                        <span className="dash__module-row-title">{mod.title}</span>
                        {mod.stage && <span className="dash__module-row-stage">{mod.stage}</span>}
                      </div>
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
          ))}
        </div>
      </section>
    </main>
  )
}
