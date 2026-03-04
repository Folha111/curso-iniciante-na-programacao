import { useState, useRef, useCallback } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './CodeTask.css'

export default function CodeTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const [code, setCode] = useState(task.starterCode)
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
          setFeedback({ type: 'error', message: 'Quase lá! Revise seu código e tente novamente.' })
        }
      } catch {
        setFeedback({ type: 'error', message: 'Erro ao verificar. Verifique se o HTML está correto.' })
      }
    }
  }, [code, task, moduleId, completeTask])

  return (
    <div className={`code-task ${feedback?.type === 'success' ? 'code-task--success' : ''}`}>
      <div className="code-task__header">
        <span className="code-task__num">Tarefa {index + 1}</span>
        {alreadyDone && <span className="code-task__done-badge">Concluída</span>}
      </div>
      <h3 className="code-task__title">{task.title}</h3>
      <p className="code-task__desc" dangerouslySetInnerHTML={{ __html: task.description }} />

      <div className="code-task__editor-area">
        <div className="code-task__pane">
          <div className="code-task__pane-label">Código</div>
          <textarea
            className="code-task__textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
        <div className="code-task__pane">
          <div className="code-task__pane-label">Preview</div>
          <iframe
            ref={iframeRef}
            className="code-task__preview"
            title="preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>

      <div className="code-task__toolbar">
        <button className="btn btn--secondary code-task__btn" onClick={runCode}>
          ▶ Executar
        </button>
        <button className="btn btn--primary code-task__btn" onClick={verifyCode}>
          ✓ Verificar
        </button>
        <button className="code-task__hint-btn" onClick={() => setShowHint((v) => !v)}>
          💡 Dica
        </button>
      </div>

      {showHint && (
        <div className="code-task__hint">
          <strong>Dica:</strong> {task.hint}
        </div>
      )}

      {feedback && (
        <div className={`code-task__feedback code-task__feedback--${feedback.type}`}>
          <span>{feedback.type === 'success' ? '✓' : '✗'}</span>
          {feedback.message}
        </div>
      )}
    </div>
  )
}
