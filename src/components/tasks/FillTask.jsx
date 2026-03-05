import { useState, useRef } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './FillTask.css'

// Split code string by {{blank}} markers
function parseCode(code) {
  return code.split(/(\{\{blank\}\})/g)
}

export default function FillTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const blankCount = (task.code.match(/\{\{blank\}\}/g) || []).length
  const [values, setValues] = useState(() => Array(blankCount).fill(''))
  const [result, setResult] = useState(alreadyDone ? 'success' : null) // null | 'success' | 'error'
  const [checked, setChecked] = useState(alreadyDone ? Array(blankCount).fill(true) : null)
  const [showHint, setShowHint] = useState(false)
  const inputRefs = useRef([])

  const parts = parseCode(task.code)

  function handleChange(blankIndex, val) {
    const next = [...values]
    next[blankIndex] = val
    setValues(next)
    setResult(null)
    setChecked(null)
  }

  function handleKeyDown(e, blankIndex) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const next = inputRefs.current[blankIndex + 1]
      if (next) next.focus()
      else verify()
    }
  }

  function verify() {
    const checks = task.blanks.map((correct, i) =>
      values[i].trim().toLowerCase() === correct.trim().toLowerCase()
    )
    setChecked(checks)
    const allCorrect = checks.every(Boolean)
    setResult(allCorrect ? 'success' : 'error')
    if (allCorrect) completeTask(moduleId, task.id)
  }

  let blankIdx = 0
  const renderedCode = parts.map((part, i) => {
    if (part === '{{blank}}') {
      const bi = blankIdx++
      const isCorrect = checked ? checked[bi] : null
      const correctAnswer = task.blanks[bi]
      return (
        <input
          key={i}
          ref={(el) => (inputRefs.current[bi] = el)}
          className={`fill__input ${isCorrect === true ? 'fill__input--correct' : isCorrect === false ? 'fill__input--wrong' : ''}`}
          value={alreadyDone ? correctAnswer : values[bi]}
          onChange={(e) => handleChange(bi, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, bi)}
          disabled={alreadyDone}
          size={Math.max(correctAnswer.length + 2, 6)}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      )
    }
    return <span key={i}>{part}</span>
  })

  return (
    <div className={`fill-task ${result === 'success' ? 'fill-task--success' : ''}`}>
      <div className="fill-task__header">
        <span className="fill-task__num">Tarefa {index + 1}</span>
        <span className="fill-task__badge">Preencher lacunas</span>
        {alreadyDone && <span className="fill-task__done">Concluída</span>}
      </div>

      <h3 className="fill-task__title">{task.title}</h3>
      <p className="fill-task__desc" dangerouslySetInnerHTML={{ __html: task.description }} />

      <div className="fill-task__code-wrap">
        <div className="fill-task__code-bar">
          <span className="fill-task__dot" />
          <span className="fill-task__dot" />
          <span className="fill-task__dot" />
        </div>
        <pre className="fill-task__code">{renderedCode}</pre>
      </div>

      {!alreadyDone && (
        <div className="fill-task__toolbar">
          <button className="btn btn--primary fill-task__btn" onClick={verify}>
            ✓ Verificar
          </button>
          <button className="fill-task__hint-btn" onClick={() => setShowHint((v) => !v)}>
            💡 Dica
          </button>
        </div>
      )}

      {showHint && (
        <div className="fill-task__hint">
          <strong>Dica:</strong> {task.hint}
        </div>
      )}

      {result === 'success' && (
        <div className="fill-task__feedback fill-task__feedback--success">
          ✓ {task.successMessage}
        </div>
      )}
      {result === 'error' && (
        <div className="fill-task__feedback fill-task__feedback--error">
          ✗ Alguma resposta está errada. As lacunas corretas estão marcadas em verde.
        </div>
      )}
    </div>
  )
}
