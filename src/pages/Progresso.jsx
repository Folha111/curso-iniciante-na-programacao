import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Dashboard.css'
import './Progresso.css'

export default function Progresso() {
  const { isTaskDone, isModuleDone, isModuleUnlocked } = useProgress()
  const { modules: MODULES } = useModules()

  const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
  const doneTasks = MODULES.reduce(
    (acc, m) => acc + m.tasks.filter((t) => isTaskDone(m.id, t.id)).length,
    0
  )
  const doneModules = MODULES.filter((m) => isModuleDone(m.id)).length
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return (
    <div className="prog">
      <div className="prog__header">
        <h1 className="prog__title">Meu Progresso</h1>
      </div>

      <div className="prog__summary">
        <div className="prog__summary-card">
          <p className="prog__summary-label">Progresso geral</p>
          <p className="prog__summary-value">{progress}%</p>
          <div className="prog__bar">
            <div className="prog__bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="prog__summary-card">
          <p className="prog__summary-label">Tarefas concluídas</p>
          <p className="prog__summary-value">{doneTasks} <span>/ {totalTasks}</span></p>
        </div>
        <div className="prog__summary-card">
          <p className="prog__summary-label">Módulos completos</p>
          <p className="prog__summary-value">{doneModules} <span>/ {MODULES.length}</span></p>
        </div>
      </div>

      <div className="prog__modules">
        {MODULES.map((mod) => {
          const unlocked = isModuleUnlocked(mod.id)
          const modDone = isModuleDone(mod.id)
          const modTasksDone = mod.tasks.filter((t) => isTaskDone(mod.id, t.id)).length
          const pct = Math.round((modTasksDone / mod.tasks.length) * 100)

          return (
            <div key={mod.id} className={`prog__module ${!unlocked ? 'prog__module--locked' : ''}`}>
              <div className="prog__module-top">
                <div className="prog__module-badge" style={{ background: mod.color }}>
                  {mod.number}
                </div>
                <div className="prog__module-info">
                  <span className="prog__module-title">{mod.title}</span>
                  <span className="prog__module-count">{modTasksDone}/{mod.tasks.length} tarefas</span>
                </div>
                {modDone && (
                  <span className="prog__module-done">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Concluído
                  </span>
                )}
                {!unlocked && (
                  <span className="prog__module-locked">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    Bloqueado
                  </span>
                )}
              </div>
              <div className="prog__bar">
                <div className="prog__bar-fill" style={{ width: `${pct}%`, background: mod.color }} />
              </div>
              <div className="prog__tasks">
                {mod.tasks.map((task) => {
                  const done = isTaskDone(mod.id, task.id)
                  return (
                    <div key={task.id} className={`prog__task ${done ? 'prog__task--done' : ''}`}>
                      <span className="prog__task-icon">
                        {done
                          ? <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                        }
                      </span>
                      <span className="prog__task-title">{task.title}</span>
                      <span className="prog__task-type">{task.type === 'quiz' ? 'Quiz' : 'Código'}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
