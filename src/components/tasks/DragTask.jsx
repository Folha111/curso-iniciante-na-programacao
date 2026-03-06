import { useState, useRef, useCallback } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './DragTask.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function DragTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask, trackWrong } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const [items, setItems] = useState(() =>
    alreadyDone ? task.blocks : shuffle(task.blocks)
  )
  const [checked, setChecked] = useState(alreadyDone ? 'success' : null)
  const [showHint, setShowHint] = useState(false)
  const dragIndex = useRef(null)
  const [overIndex, setOverIndex] = useState(null)

  const handleDragStart = useCallback((i) => {
    dragIndex.current = i
  }, [])

  const handleDragOver = useCallback((e, i) => {
    e.preventDefault()
    setOverIndex(i)
  }, [])

  const handleDrop = useCallback((e, i) => {
    e.preventDefault()
    if (dragIndex.current === null || dragIndex.current === i) {
      setOverIndex(null)
      return
    }
    setItems((prev) => {
      const next = [...prev]
      const [moved] = next.splice(dragIndex.current, 1)
      next.splice(i, 0, moved)
      return next
    })
    dragIndex.current = null
    setOverIndex(null)
    setChecked(null)
  }, [])

  const handleDragEnd = useCallback(() => {
    dragIndex.current = null
    setOverIndex(null)
  }, [])

  function verify() {
    const correct = items.every((block, i) => block === task.blocks[i])
    if (correct) {
      setChecked('success')
      completeTask(moduleId, task.id)
    } else {
      setChecked('error')
      trackWrong(moduleId, task.id)
    }
  }

  function reset() {
    setItems(shuffle(task.blocks))
    setChecked(null)
  }

  function getBlockClass(block, i) {
    let cls = 'drag-task__block'
    if (alreadyDone) return cls + ' drag-task__block--done'
    if (overIndex === i) cls += ' drag-task__block--over'
    if (dragIndex.current === i) cls += ' drag-task__block--dragging'
    if (checked === 'success') cls += ' drag-task__block--correct'
    else if (checked === 'error' && block !== task.blocks[i]) cls += ' drag-task__block--wrong'
    return cls
  }

  return (
    <div className={`drag-task ${checked === 'success' ? 'drag-task--success' : ''}`}>
      <div className="drag-task__header">
        <span className="drag-task__num">Tarefa {index + 1}</span>
        <span className="drag-task__badge">Arrastar e Soltar</span>
        {alreadyDone && <span className="drag-task__done-badge">Concluída</span>}
      </div>

      <h3 className="drag-task__title">{task.title}</h3>
      <p className="drag-task__desc" dangerouslySetInnerHTML={{ __html: task.description }} />
      <p className="drag-task__instruction">Arraste os blocos para colocá-los na ordem correta:</p>

      <div className="drag-task__list">
        {items.map((block, i) => (
          <div
            key={block + i}
            className={getBlockClass(block, i)}
            draggable={!alreadyDone && checked !== 'success'}
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => handleDragOver(e, i)}
            onDrop={(e) => handleDrop(e, i)}
            onDragEnd={handleDragEnd}
          >
            <span className="drag-task__block-grip">⠿</span>
            <span className="drag-task__block-text">{block}</span>
            {checked === 'success' && (
              <span className="drag-task__block-icon">✓</span>
            )}
            {checked === 'error' && block !== task.blocks[i] && (
              <span className="drag-task__block-icon">✗</span>
            )}
          </div>
        ))}
      </div>

      {!alreadyDone && checked !== 'success' && (
        <div className="drag-task__toolbar">
          <button className="btn btn--primary" onClick={verify}>
            ✓ Verificar ordem
          </button>
          {checked === 'error' && (
            <button className="btn btn--secondary" onClick={reset}>
              ↺ Embaralhar novamente
            </button>
          )}
          <button className="drag-task__hint-btn" onClick={() => setShowHint((v) => !v)}>
            💡 Dica
          </button>
        </div>
      )}

      {showHint && (
        <div className="drag-task__hint">
          <strong>Dica:</strong> {task.hint}
        </div>
      )}

      {checked === 'success' && (
        <div className="drag-task__feedback drag-task__feedback--success">
          ✓ {task.successMessage}
        </div>
      )}
      {checked === 'error' && (
        <div className="drag-task__feedback drag-task__feedback--error">
          ✗ A ordem ainda não está correta. Blocos marcados em vermelho estão na posição errada.
        </div>
      )}
    </div>
  )
}
