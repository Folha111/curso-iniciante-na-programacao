import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import './Revisao.css'

// ─── Quiz Review Card ─────────────────────────────────────────────────────────

function QuizReview({ item, onAnswer }) {
  const { task } = item
  const [selected, setSelected] = useState(null)

  function handleSelect(idx) {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === task.correct
    setTimeout(() => onAnswer(correct), 1200)
  }

  const answered = selected !== null

  return (
    <div className="rev-card">
      <div className="rev-card__meta">
        <span className="rev-card__module">{item.moduleTitle}</span>
        <span className="rev-card__type">Quiz</span>
      </div>
      <p className="rev-card__question">{task.question}</p>
      <ul className="rev-card__options">
        {task.options.map((opt, i) => {
          let cls = 'rev-card__option'
          if (answered) {
            if (i === task.correct) cls += ' rev-card__option--correct'
            else if (i === selected) cls += ' rev-card__option--wrong'
          }
          return (
            <li key={i}>
              <button className={cls} onClick={() => handleSelect(i)} disabled={answered}>
                <span className="rev-card__option-letter">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            </li>
          )
        })}
      </ul>
      {answered && task.explanation && (
        <div className={`rev-card__explanation ${selected === task.correct ? 'rev-card__explanation--ok' : 'rev-card__explanation--err'}`}>
          {selected === task.correct ? '✓ Correto! ' : '✗ Incorreto. '}
          {task.explanation}
        </div>
      )}
    </div>
  )
}

function FillReview({ item, onAnswer }) {
  const { task } = item
  const [values, setValues] = useState(() => task.blanks.map(() => ''))
  const [checked, setChecked] = useState(false)

  function handleChange(i, val) {
    setValues((prev) => {
      const next = [...prev]
      next[i] = val
      return next
    })
  }

  function handleVerify() {
    if (checked) return
    setChecked(true)
    const correct = task.blanks.every((b, i) =>
      values[i].trim().toLowerCase() === b.toLowerCase()
    )
    setTimeout(() => onAnswer(correct), 1400)
  }

  const parts = task.code ? task.code.split('{{blank}}') : []

  return (
    <div className="rev-card">
      <div className="rev-card__meta">
        <span className="rev-card__module">{item.moduleTitle}</span>
        <span className="rev-card__type">Preencher</span>
      </div>
      <p className="rev-card__question">{task.title || item.taskTitle}</p>
      {task.description && (
        <p className="rev-card__desc" dangerouslySetInnerHTML={{ __html: task.description }} />
      )}
      <div className="rev-fill__code">
        {parts.map((part, i) => (
          <span key={i}>
            <code>{part}</code>
            {i < parts.length - 1 && (
              <input
                className={`rev-fill__input ${checked ? (values[i].trim().toLowerCase() === task.blanks[i].toLowerCase() ? 'rev-fill__input--ok' : 'rev-fill__input--err') : ''}`}
                type="text"
                value={values[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                disabled={checked}
                placeholder="?"
              />
            )}
          </span>
        ))}
      </div>
      {!checked && (
        <button className="btn btn--primary rev-card__btn" onClick={handleVerify} disabled={values.some((v) => !v.trim())}>
          Verificar
        </button>
      )}
      {checked && (
        <div className={`rev-card__explanation ${task.blanks.every((b, i) => values[i].trim().toLowerCase() === b.toLowerCase()) ? 'rev-card__explanation--ok' : 'rev-card__explanation--err'}`}>
          {task.blanks.every((b, i) => values[i].trim().toLowerCase() === b.toLowerCase())
            ? `✓ Correto! ${task.successMessage || ''}`
            : `✗ Resposta correta: ${task.blanks.join(', ')}`
          }
        </div>
      )}
    </div>
  )
}

function TypeReview({ item, onAnswer }) {
  const { task } = item
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)

  function handleVerify() {
    if (checked) return
    setChecked(true)
    const correct = task.answer.some((a) => input.trim().toLowerCase() === a.toLowerCase())
    setTimeout(() => onAnswer(correct), 1200)
  }

  const isCorrect = checked && task.answer.some((a) => input.trim().toLowerCase() === a.toLowerCase())

  return (
    <div className="rev-card">
      <div className="rev-card__meta">
        <span className="rev-card__module">{item.moduleTitle}</span>
        <span className="rev-card__type">Digitação</span>
      </div>
      <p className="rev-card__question">{task.question}</p>
      {task.hint && <p className="rev-card__hint">Dica: {task.hint}</p>}
      <input
        className={`rev-type__input ${checked ? (isCorrect ? 'rev-type__input--ok' : 'rev-type__input--err') : ''}`}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={checked}
        placeholder={task.placeholder || 'Digite sua resposta...'}
        onKeyDown={(e) => e.key === 'Enter' && !checked && input.trim() && handleVerify()}
      />
      {!checked && (
        <button className="btn btn--primary rev-card__btn" onClick={handleVerify} disabled={!input.trim()}>
          Verificar
        </button>
      )}
      {checked && (
        <div className={`rev-card__explanation ${isCorrect ? 'rev-card__explanation--ok' : 'rev-card__explanation--err'}`}>
          {isCorrect ? '✓ Correto! ' : `✗ Resposta: ${task.answer[0]}. `}
          {task.explanation}
        </div>
      )}
    </div>
  )
}

function OtherReview({ item, onAnswer }) {
  const typeLabels = { bug: 'Caçar Bug', drag: 'Arrastar', code: 'Código' }
  return (
    <div className="rev-card rev-card--redirect">
      <div className="rev-card__meta">
        <span className="rev-card__module">{item.moduleTitle}</span>
        <span className="rev-card__type">{typeLabels[item.task.type] || item.task.type}</span>
      </div>
      <div className="rev-card__redirect-icon">📖</div>
      <p className="rev-card__question">{item.taskTitle}</p>
      <p className="rev-card__redirect-desc">
        Esta tarefa precisa ser praticada diretamente no módulo.
      </p>
      <div className="rev-card__redirect-actions">
        <Link to={`/modulo/${item.moduleId}`} className="btn btn--primary">
          Ir para o módulo
        </Link>
        <button className="btn btn--ghost" onClick={() => onAnswer(true)}>
          Já revisei
        </button>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Revisao() {
  const { reviewQueue, clearWrongAnswer, trackWrong } = useProgress()
  const [current, setCurrent] = useState(0)
  const [results, setResults] = useState([]) // { moduleId, taskId, correct }
  const [done, setDone] = useState(false)

  const items = useMemo(() => reviewQueue, []) // snapshot at mount

  function handleAnswer(correct) {
    const item = items[current]
    setResults((prev) => [...prev, { moduleId: item.moduleId, taskId: item.taskId, correct }])

    if (correct) {
      clearWrongAnswer(item.moduleId, item.taskId)
    } else {
      trackWrong(item.moduleId, item.taskId)
    }

    if (current + 1 >= items.length) {
      setDone(true)
    } else {
      setCurrent((c) => c + 1)
    }
  }

  // Empty state
  if (items.length === 0) {
    return (
      <main className="revisao">
        <div className="revisao__empty">
          <div className="revisao__empty-icon">🎉</div>
          <h1 className="revisao__empty-title">Fila de revisão vazia!</h1>
          <p className="revisao__empty-sub">
            Você não tem nenhuma tarefa pendente de revisão. Continue estudando os módulos para acumular itens de revisão quando errar.
          </p>
          <Link to="/dashboard" className="btn btn--primary">Voltar ao início</Link>
        </div>
      </main>
    )
  }

  // Done screen
  if (done) {
    const correct = results.filter((r) => r.correct).length
    const total = results.length
    const pct = Math.round((correct / total) * 100)
    return (
      <main className="revisao">
        <div className="revisao__result">
          <div className="revisao__result-emoji">
            {pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '📚'}
          </div>
          <h1 className="revisao__result-title">Sessão concluída!</h1>
          <p className="revisao__result-score">{correct} <span>/ {total} corretas</span></p>
          <div className="revisao__result-bar">
            <div className="revisao__result-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="revisao__result-msg">
            {pct >= 80
              ? 'Excelente! Você dominou esses conteúdos!'
              : pct >= 50
              ? 'Bom trabalho! Continue praticando os que errou.'
              : 'Não desanime — a revisão é onde se aprende mais!'}
          </p>
          <div className="revisao__result-actions">
            <Link to="/dashboard" className="btn btn--primary">Voltar ao início</Link>
            <Link to="/modulos" className="btn btn--ghost">Ver módulos</Link>
          </div>
        </div>
      </main>
    )
  }

  const item = items[current]
  const { task } = item

  return (
    <main className="revisao">
      {/* Header */}
      <div className="revisao__header">
        <Link to="/dashboard" className="revisao__back">← Sair da revisão</Link>
        <span className="revisao__count">{current + 1} / {items.length}</span>
      </div>

      {/* Progress */}
      <div className="revisao__bar">
        <div className="revisao__bar-fill" style={{ width: `${(current / items.length) * 100}%` }} />
      </div>

      {/* Task card */}
      <div className="revisao__content">
        {task.type === 'quiz' && <QuizReview item={item} onAnswer={handleAnswer} />}
        {task.type === 'fill' && <FillReview item={item} onAnswer={handleAnswer} />}
        {task.type === 'type' && <TypeReview item={item} onAnswer={handleAnswer} />}
        {(task.type === 'bug' || task.type === 'drag' || task.type === 'code') && (
          <OtherReview item={item} onAnswer={handleAnswer} />
        )}
      </div>
    </main>
  )
}
