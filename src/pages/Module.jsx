import { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import { useAuth } from '../context/AuthContext'
import QuizTask from '../components/tasks/QuizTask'
import CodeTask from '../components/tasks/CodeTask'
import FillTask from '../components/tasks/FillTask'
import TypeTask from '../components/tasks/TypeTask'
import BugTask from '../components/tasks/BugTask'
import DragTask from '../components/tasks/DragTask'
import './Module.css'

// ─── Markdown-like renderer ───────────────────────────────────────────────────

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
      // skip
    } else {
      elements.push(<p key={key++} className="module-content__p">{renderInline(line)}</p>)
    }
    i++
  }

  return elements
}

// ─── Notes ───────────────────────────────────────────────────────────────────

function Notes({ moduleId, userEmail }) {
  const key = `module_notes_${userEmail}_${moduleId}`
  const [value, setValue] = useState(() => localStorage.getItem(key) ?? '')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    localStorage.setItem(key, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <section className="module-page__notes">
      <h2 className="module-page__section-title">Minhas anotações</h2>
      <p className="module-page__notes-hint">Escreva aqui suas dúvidas, resumos e insights. Só você pode ver.</p>
      <textarea
        className="module-page__notes-area"
        value={value}
        onChange={(e) => { setValue(e.target.value); setSaved(false) }}
        placeholder="Digite suas anotações aqui..."
        rows={5}
      />
      <div className="module-page__notes-footer">
        <button className="btn btn--secondary" onClick={handleSave} style={{ fontSize: '13px', padding: '6px 16px' }}>
          {saved ? '✓ Salvo!' : 'Salvar anotações'}
        </button>
        {saved && <span className="module-page__notes-saved">Anotações salvas com sucesso.</span>}
      </div>
    </section>
  )
}

// ─── Comments ─────────────────────────────────────────────────────────────────

function loadComments(moduleId) {
  try {
    const raw = localStorage.getItem(`module_comments_${moduleId}`)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveComments(moduleId, comments) {
  try {
    localStorage.setItem(`module_comments_${moduleId}`, JSON.stringify(comments))
  } catch {}
}

function Comments({ moduleId, user }) {
  const [comments, setComments] = useState(() => loadComments(moduleId))
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    const newComment = {
      id: Date.now(),
      user: user.name,
      text: trimmed,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
    }
    setComments((prev) => {
      const next = [newComment, ...prev]
      saveComments(moduleId, next)
      return next
    })
    setText('')
  }, [text, user, moduleId])

  function handleDelete(id) {
    setComments((prev) => {
      const next = prev.filter((c) => c.id !== id)
      saveComments(moduleId, next)
      return next
    })
  }

  return (
    <section className="module-page__comments">
      <h2 className="module-page__section-title">Comentários do módulo</h2>
      <p className="module-page__notes-hint">Compartilhe dúvidas, dicas ou insights com outros alunos.</p>

      <form className="module-page__comment-form" onSubmit={handleSubmit}>
        <div className="module-page__comment-avatar">{user.name?.[0]?.toUpperCase() || '?'}</div>
        <textarea
          className="module-page__comment-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreva um comentário..."
          rows={2}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e) }
          }}
        />
        <button type="submit" className="btn btn--primary module-page__comment-btn" disabled={!text.trim()}>
          Publicar
        </button>
      </form>

      <div className="module-page__comment-list">
        {comments.length === 0 && (
          <p className="module-page__comment-empty">Nenhum comentário ainda. Seja o primeiro!</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="module-page__comment">
            <div className="module-page__comment-meta">
              <div className="module-page__comment-avatar module-page__comment-avatar--sm">{c.user[0]}</div>
              <strong className="module-page__comment-author">{c.user}</strong>
              <span className="module-page__comment-date">{c.date}</span>
              {c.user === user.name && (
                <button className="module-page__comment-delete" onClick={() => handleDelete(c.id)} title="Excluir">✕</button>
              )}
            </div>
            <p className="module-page__comment-text">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Module Page ──────────────────────────────────────────────────────────────

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

  function isTaskVisible(taskIndex) {
    if (taskIndex === 0) return true
    return isTaskDone(mod.id, mod.tasks[taskIndex - 1].id)
  }

  function renderTask(task, i) {
    const props = { key: task.id, task, moduleId: mod.id, index: i }
    switch (task.type) {
      case 'quiz': return <QuizTask {...props} />
      case 'fill': return <FillTask {...props} />
      case 'type': return <TypeTask {...props} />
      case 'bug':  return <BugTask {...props} />
      case 'drag': return <DragTask {...props} />
      default:     return <CodeTask {...props} />
    }
  }

  return (
    <div className="module-page" style={{ '--mod-color': mod.color }}>
      <div className="module-page__deco" aria-hidden="true">
        <span className="module-page__deco-blob module-page__deco-blob--1" />
        <span className="module-page__deco-blob module-page__deco-blob--2" />
        <span className="module-page__deco-blob module-page__deco-blob--3" />
      </div>

      <div className="module-page__inner">
        {/* Top navigation */}
        <div className="module-page__topnav">
          <Link to="/dashboard" className="module-page__back">← Dashboard</Link>
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
              isTaskVisible(i) ? renderTask(task, i) : (
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

        {/* Personal notes */}
        <Notes moduleId={mod.id} userEmail={user.email} />

        {/* Comments */}
        <Comments moduleId={mod.id} user={user} />
      </div>
    </div>
  )
}
