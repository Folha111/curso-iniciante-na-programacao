import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Modulos.css'

export default function Modulos() {
  const navigate = useNavigate()
  const { isTaskDone, isModuleDone, isModuleUnlocked } = useProgress()
  const { modules: MODULES, stages: STAGES } = useModules()

  const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
  const doneTasks = MODULES.reduce(
    (acc, m) => acc + m.tasks.filter((t) => isTaskDone(m.id, t.id)).length,
    0
  )
  const overallPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return (
    <main className="modulos">
      <div className="modulos__header">
        <div>
          <h1 className="modulos__title">Módulos</h1>
          <p className="modulos__sub">{doneTasks} de {totalTasks} tarefas concluídas</p>
        </div>
        <div className="modulos__overall-bar">
          <div className="modulos__overall-fill" style={{ width: `${overallPct}%` }} />
        </div>
      </div>

      <div className="modulos__stages">
        {STAGES.map((stage, stageIndex) => {
          const stageMods = MODULES.filter((m) => m.stageId === stage.id)
          if (stageMods.length === 0) return null

          const stageTasks = stageMods.reduce((acc, m) => acc + m.tasks.length, 0)
          const stageDone = stageMods.reduce(
            (acc, m) => acc + m.tasks.filter((t) => isTaskDone(m.id, t.id)).length,
            0
          )
          const stagePct = stageTasks > 0 ? Math.round((stageDone / stageTasks) * 100) : 0
          const stageComplete = stagePct === 100
          const stageUnlocked = stageMods.some((m) => isModuleUnlocked(m.id))

          return (
            <div key={stage.id} className="modulos__stage">
              <div className="modulos__stage-header" style={{ '--stage-color': stage.color }}>
                <div className="modulos__stage-left">
                  <div className="modulos__stage-num">{stageIndex + 1}</div>
                  <div className="modulos__stage-info">
                    <div className="modulos__stage-name-row">
                      <h2 className="modulos__stage-name">{stage.name}</h2>
                      {stageComplete && (
                        <span className="modulos__stage-badge modulos__stage-badge--done">
                          <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Completo
                        </span>
                      )}
                      {!stageUnlocked && (
                        <span className="modulos__stage-badge modulos__stage-badge--locked">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                          </svg>
                          Bloqueado
                        </span>
                      )}
                    </div>
                    <p className="modulos__stage-subtitle">{stage.subtitle}</p>
                  </div>
                </div>
                <div className="modulos__stage-right">
                  <span className="modulos__stage-pct">{stagePct}%</span>
                  <div className="modulos__stage-bar">
                    <div className="modulos__stage-bar-fill" style={{ width: `${stagePct}%` }} />
                  </div>
                  <span className="modulos__stage-count">{stageDone}/{stageTasks} tarefas</span>
                </div>
              </div>

              <div className="modulos__stage-modules">
                {stageMods.map((mod) => {
                  const unlocked = isModuleUnlocked(mod.id)
                  const done = isModuleDone(mod.id)
                  const modTasksDone = mod.tasks.filter((t) => isTaskDone(mod.id, t.id)).length
                  const pct = Math.round((modTasksDone / mod.tasks.length) * 100)

                  return (
                    <div
                      key={mod.id}
                      className={`modulos__card ${done ? 'modulos__card--done' : ''} ${!unlocked ? 'modulos__card--locked' : ''}`}
                      style={{ '--mod-color': mod.color }}
                      onClick={() => unlocked && navigate(`/modulo/${mod.id}`)}
                    >
                      <div className="modulos__card-top">
                        <div className="modulos__card-badge">{mod.number}</div>
                        {done && (
                          <span className="modulos__card-status modulos__card-status--done">
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Concluído
                          </span>
                        )}
                        {!unlocked && (
                          <span className="modulos__card-status modulos__card-status--locked">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                            </svg>
                            Bloqueado
                          </span>
                        )}
                      </div>

                      <div className="modulos__card-body">
                        {mod.stage && <span className="modulos__card-stage">{mod.stage}</span>}
                        <h3 className="modulos__card-title">{mod.title}</h3>
                        <p className="modulos__card-desc">{mod.description}</p>
                      </div>

                      <div className="modulos__card-footer">
                        <div className="modulos__card-meta">
                          <span className="modulos__card-count">{modTasksDone}/{mod.tasks.length} tarefas</span>
                          <span className="modulos__card-pct">{pct}%</span>
                        </div>
                        <div className="modulos__card-bar">
                          <div className="modulos__card-bar-fill" style={{ width: `${pct}%` }} />
                        </div>
                      </div>

                      {unlocked && !done && (
                        <div className="modulos__card-cta">
                          {modTasksDone > 0 ? 'Continuar' : 'Começar'}
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
