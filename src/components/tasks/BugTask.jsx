import { useState, useRef, useCallback } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './BugTask.css'

export default function BugTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const [code, setCode] = useState(task.buggyCode)
  const [feedback, setFeedback] = useState(alreadyDone ? { type: 'success', message: task.successMessage } : null)
  const [showHint, setShowHint] = useState(false)
  const iframeRef = useRef(null)

  const runCode = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = code
    }
    setFeedback(null)
  }, [code])

  const verifyCode = useCallback(() => {
    if (!iframeRef.current) return
    iframeRef.current.srcdoc = code

    iframeRef.current.onload = () => {
      try {
        const doc = iframeRef.current.contentDocument
        const passed = task.validate(doc)
        if (passed) {
          setFeedback({ type: 'success', message: task.successMessage })
          completeTask(moduleId, task.id)
        } else {
          setFeedback({ type: 'error', message: 'O bug ainda não foi corrigido. Revise o código e tente novamente.' })
        }
      } catch {
        setFeedback({ type: 'error', message: 'Erro ao verificar. Verifique se o HTML está correto.' })
      }
    }
  }, [code, task, moduleId, completeTask])

  const fixed = feedback?.type === 'success'

  return (
    <div className={`bug-task ${fixed ? 'bug-task--fixed' : ''}`}>
      <div className="bug-task__header">
        <span className="bug-task__num">Tarefa {index + 1}</span>
        <span className="bug-task__badge">🐛 Encontrar o erro</span>
        {alreadyDone && <span className="bug-task__done-badge">Concluída</span>}
      </div>
      <h3 className="bug-task__title">{task.title}</h3>
      <p className="bug-task__desc" dangerouslySetInnerHTML={{ __html: task.description }} />

      <div className="bug-task__warning">
        🐛 O código abaixo tem um erro. Encontre e corrija!
      </div>

      <div className="bug-task__editor-area">
        <div className="bug-task__pane">
          <div className="bug-task__pane-label">Código (com bug)</div>
          <textarea
            className="bug-task__textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
        <div className="bug-task__pane">
          <div className="bug-task__pane-label">Preview</div>
          <iframe
            ref={iframeRef}
            className="bug-task__preview"
            title="preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>

      <div className="bug-task__toolbar">
        <button className="btn btn--secondary bug-task__btn" onClick={runCode}>
          ▶ Executar
        </button>
        <button className="btn btn--primary bug-task__btn" onClick={verifyCode}>
          ✓ Verificar
        </button>
        <button className="bug-task__hint-btn" onClick={() => setShowHint((v) => !v)}>
          💡 Dica
        </button>
      </div>

      {showHint && (
        <div className="bug-task__hint">
          <strong>Dica:</strong> {task.hint}
        </div>
      )}

      {feedback && (
        <div className={`bug-task__feedback bug-task__feedback--${feedback.type}`}>
          <span>{feedback.type === 'success' ? '✓' : '✗'}</span>
          {feedback.message}
        </div>
      )}
    </div>
  )
}
