import { useState } from 'react'
import { useProgress } from '../../context/ProgressContext'
import './QuizTask.css'

export default function QuizTask({ task, moduleId, index }) {
  const { isTaskDone, completeTask, trackWrong } = useProgress()
  const alreadyDone = isTaskDone(moduleId, task.id)

  const [selected, setSelected] = useState(alreadyDone ? task.correct : null)
  const [submitted, setSubmitted] = useState(alreadyDone)

  const isCorrect = submitted && selected === task.correct

  function handleSelect(i) {
    if (submitted) return
    setSelected(i)
  }

  function handleSubmit() {
    if (selected === null) return
    setSubmitted(true)
    if (selected === task.correct) {
      completeTask(moduleId, task.id)
    } else {
      trackWrong(moduleId, task.id)
    }
  }

  function handleRetry() {
    setSelected(null)
    setSubmitted(false)
  }

  return (
    <div className={`quiz-task ${submitted ? (isCorrect ? 'quiz-task--correct' : 'quiz-task--wrong') : ''}`}>
      <div className="quiz-task__header">
        <span className="quiz-task__num">Tarefa {index + 1}</span>
        {alreadyDone && <span className="quiz-task__done-badge">Concluída</span>}
      </div>
      <p className="quiz-task__question">{task.question}</p>
      <ul className="quiz-task__options">
        {task.options.map((opt, i) => {
          let cls = 'quiz-task__option'
          if (submitted && isCorrect) {
            if (i === task.correct) cls += ' quiz-task__option--correct'
          } else if (submitted && !isCorrect) {
            if (i === selected) cls += ' quiz-task__option--wrong'
          } else if (i === selected) {
            cls += ' quiz-task__option--selected'
          }
          return (
            <li key={i}>
              <button className={cls} onClick={() => handleSelect(i)} disabled={submitted}>
                <span className="quiz-task__option-letter">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            </li>
          )
        })}
      </ul>

      {submitted && isCorrect && (
        <div className="quiz-task__feedback quiz-task__feedback--correct">
          <span className="quiz-task__feedback-icon">✓</span>
          <p>{task.explanation}</p>
        </div>
      )}

      {submitted && !isCorrect && (
        <div className="quiz-task__feedback quiz-task__feedback--wrong">
          <span className="quiz-task__feedback-icon">✗</span>
          <p>Resposta incorreta. Tente novamente!</p>
        </div>
      )}

      {!submitted && (
        <button className="quiz-task__submit btn btn--primary" onClick={handleSubmit} disabled={selected === null}>
          Verificar resposta
        </button>
      )}

      {submitted && !isCorrect && (
        <button className="quiz-task__retry btn btn--secondary" onClick={handleRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  )
}
