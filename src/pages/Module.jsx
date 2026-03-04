import { useParams, Link, useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import { useAuth } from '../context/AuthContext'
import QuizTask from '../components/tasks/QuizTask'
import CodeTask from '../components/tasks/CodeTask'
import './Module.css'

function renderInline(text) {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, j) =>
    part.startsWith('`') && part.endsWith('`') ? (
      <code key={j} className="module-content__code">{part.slice(1, -1)}</code>
    ) : (
      part
    )
  )
}

function renderContext(text) {
  const elements = []
  const lines = text.split('\n')
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('```')) {
      // Collect code block
      const blockLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        blockLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={key++} className="module-content__pre">
          <code>{blockLines.join('\n')}</code>
        </pre>
      )
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="module-content__h3">{line.slice(4)}</h3>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="module-content__h2">{line.slice(3)}</h2>)
    } else if (line.trim() === '') {
      // skip blank lines (spacing handled by CSS)
    } else {
      elements.push(<p key={key++} className="module-content__p">{renderInline(line)}</p>)
    }
    i++
  }

  return elements
}

export default function Module() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isTaskDone, isModuleDone, isModuleUnlocked } = useProgress()
  const { modules: MODULES } = useModules()
  const { user } = useAuth()

  const mod = MODULES.find((m) => m.id === id)

  if (!mod) {
    return (
      <div className="module-error">
        <p>Módulo não encontrado.</p>
        <Link to="/dashboard">Voltar ao Dashboard</Link>
      </div>
    )
  }

  if (!isModuleUnlocked(mod.id)) {
    return (
      <div className="module-error">
        <p>Este módulo ainda está bloqueado. Conclua o módulo anterior primeiro.</p>
        <Link to="/dashboard">Voltar ao Dashboard</Link>
      </div>
    )
  }

  const doneTasks = mod.tasks.filter((t) => isTaskDone(mod.id, t.id)).length
  const totalTasks = mod.tasks.length
  const progressPct = Math.round((doneTasks / totalTasks) * 100)
  const allDone = isModuleDone(mod.id)

  const currentIndex = MODULES.findIndex((m) => m.id === mod.id)
  const nextMod = MODULES[currentIndex + 1]
  const prevMod = MODULES[currentIndex - 1]

  // Show tasks progressively: always show first, then show next if previous is done
  function isTaskVisible(taskIndex) {
    if (taskIndex === 0) return true
    return isTaskDone(mod.id, mod.tasks[taskIndex - 1].id)
  }

  return (
    <div className="module-page" style={{ '--mod-color': mod.color }}>
      {/* Decorative background blobs */}
      <div className="module-page__deco" aria-hidden="true">
        <span className="module-page__deco-blob module-page__deco-blob--1" />
        <span className="module-page__deco-blob module-page__deco-blob--2" />
        <span className="module-page__deco-blob module-page__deco-blob--3" />
      </div>

      <div className="module-page__inner">
        {/* Top navigation */}
        <div className="module-page__topnav">
          <Link to="/dashboard" className="module-page__back">
            ← Dashboard
          </Link>
          <div className="module-page__topnav-modules">
            {prevMod && (
              <button className="module-page__topnav-btn" onClick={() => navigate(`/modulo/${prevMod.id}`)}>
                ← {prevMod.title}
              </button>
            )}
            {nextMod && (
              <button
                className="module-page__topnav-btn"
                onClick={() => navigate(`/modulo/${nextMod.id}`)}
                disabled={!(user?.role === 'admin' || allDone)}
                title={!(user?.role === 'admin' || allDone) ? 'Conclua este módulo primeiro' : ''}
              >
                {nextMod.title} →
              </button>
            )}
          </div>
        </div>

        {/* Header */}
        <header className="module-page__header">
          <span className="module-page__header-deco-num" aria-hidden="true">{mod.number}</span>
          <div className="module-page__header-top">
            <span className="module-page__num">{mod.number}</span>
            <span className="module-page__progress-text">{doneTasks}/{totalTasks} tarefas</span>
          </div>
          <h1 className="module-page__title">{mod.title}</h1>
          <p className="module-page__desc">{mod.description}</p>
          <div className="module-page__bar">
            <div className="module-page__bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </header>

        {/* Context section */}
        <section className="module-page__context">
          <h2 className="module-page__section-title">Conteúdo</h2>
          <div className="module-page__content">
            {renderContext(mod.context)}
          </div>
        </section>

        {/* Tasks section */}
        <section className="module-page__tasks">
          <h2 className="module-page__section-title">Tarefas</h2>
          <div className="module-page__task-list">
            {mod.tasks.map((task, i) =>
              isTaskVisible(i) ? (
                task.type === 'quiz' ? (
                  <QuizTask key={task.id} task={task} moduleId={mod.id} index={i} />
                ) : (
                  <CodeTask key={task.id} task={task} moduleId={mod.id} index={i} />
                )
              ) : (
                <div key={task.id} className="module-page__task-locked">
                  <span>🔒 Tarefa {i + 1} — conclua a tarefa anterior para desbloquear</span>
                </div>
              )
            )}
          </div>
        </section>

        {allDone && !nextMod && (
          <div className="module-page__next">
            <p className="module-page__next-msg">Parabéns! Você concluiu todos os módulos disponíveis!</p>
          </div>
        )}
      </div>
    </div>
  )
}
