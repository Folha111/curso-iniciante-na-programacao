import { useState } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './TypeTask.css'

export default function TypeTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const [value, setValue] = useState('')
  const [status, setStatus] = useState(alreadyDone ? 'success' : null) // null | 'success' | 'error'
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(alreadyDone)

  function check() {
    const correct = Array.isArray(task.answer)
      ? task.answer.some((a) => a.trim().toLowerCase() === value.trim().toLowerCase())
      : value.trim().toLowerCase() === task.answer.trim().toLowerCase()

    setStatus(correct ? 'success' : 'error')
    setShowExplanation(true)
    if (correct) completeTask(moduleId, task.id)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') check()
  }

  return (
    <div className={`type-task ${status === 'success' ? 'type-task--success' : ''}`}>
      <div className="type-task__header">
        <span className="type-task__num">Tarefa {index + 1}</span>
        <span className="type-task__badge">Resposta curta</span>
        {alreadyDone && <span className="type-task__done">Concluída</span>}
      </div>

      <h3 className="type-task__question">{task.question}</h3>

      {task.context && (
        <div className="type-task__context">
          <pre className="type-task__context-code">{task.context}</pre>
        </div>
      )}

      <div className="type-task__input-row">
        <input
          className={`type-task__input ${status === 'success' ? 'type-task__input--correct' : status === 'error' ? 'type-task__input--wrong' : ''}`}
          type="text"
          value={alreadyDone ? (Array.isArray(task.answer) ? task.answer[0] : task.answer) : value}
          onChange={(e) => { setValue(e.target.value); setStatus(null); setShowExplanation(false) }}
          onKeyDown={handleKeyDown}
          placeholder={task.placeholder || 'Digite sua resposta...'}
          disabled={alreadyDone}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {!alreadyDone && (
          <button className="btn btn--primary type-task__btn" onClick={check} disabled={!value.trim()}>
            Confirmar
          </button>
        )}
      </div>

      <div className="type-task__actions">
        <button className="type-task__hint-btn" onClick={() => setShowHint((v) => !v)}>
          💡 Dica
        </button>
      </div>

      {showHint && (
        <div className="type-task__hint">
          <strong>Dica:</strong> {task.hint}
        </div>
      )}

      {showExplanation && status === 'success' && (
        <div className="type-task__feedback type-task__feedback--success">
          <strong>✓ Correto!</strong> {task.explanation}
        </div>
      )}
      {showExplanation && status === 'error' && (
        <div className="type-task__feedback type-task__feedback--error">
          <strong>✗ Não é essa.</strong> {task.explanation}
          {task.answer && (
            <span className="type-task__answer">
              Resposta: <code>{Array.isArray(task.answer) ? task.answer.join(' ou ') : task.answer}</code>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
