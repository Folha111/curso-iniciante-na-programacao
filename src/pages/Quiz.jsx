import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Games.css' // reusa os mesmos estilos visuais

// ─── Data ────────────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  { q: 'Qual tag define um parágrafo?', opts: ['<p>', '<div>', '<span>', '<text>'], answer: 0 },
  { q: 'Qual atributo define o endereço de um link?', opts: ['src', 'href', 'link', 'url'], answer: 1 },
  { q: 'Qual tag cria o título principal da página?', opts: ['<title>', '<h1>', '<header>', '<head>'], answer: 1 },
  { q: 'Qual tag exibe uma imagem?', opts: ['<image>', '<photo>', '<img>', '<pic>'], answer: 2 },
  { q: 'Qual tag cria uma lista não ordenada?', opts: ['<ol>', '<list>', '<ul>', '<li>'], answer: 2 },
  { q: 'O atributo "alt" em <img> serve para...', opts: ['definir tamanho', 'texto alternativo', 'cor de fundo', 'link externo'], answer: 1 },
  { q: 'Em HTML, comentários são escritos com...', opts: ['// texto', '/* texto */', '<!-- texto -->', '# texto'], answer: 2 },
  { q: 'A tag <br> serve para...', opts: ['negrito', 'quebra de linha', 'linha horizontal', 'link'], answer: 1 },
  { q: 'Qual tag engloba o conteúdo visível da página?', opts: ['<html>', '<head>', '<main>', '<body>'], answer: 3 },
  { q: 'Qual tag representa negrito semântico?', opts: ['<bold>', '<b>', '<strong>', '<em>'], answer: 2 },
]

const TAG_CLUES = [
  { clue: 'Cria um parágrafo de texto', tag: 'p', opts: ['p', 'div', 'span', 'section'] },
  { clue: 'Cria um link clicável', tag: 'a', opts: ['a', 'link', 'href', 'nav'] },
  { clue: 'Exibe uma imagem', tag: 'img', opts: ['img', 'image', 'pic', 'src'] },
  { clue: 'Agrupa elementos em bloco', tag: 'div', opts: ['div', 'span', 'block', 'group'] },
  { clue: 'Texto em itálico semântico', tag: 'em', opts: ['em', 'i', 'italic', 'span'] },
  { clue: 'Texto em negrito semântico', tag: 'strong', opts: ['bold', 'b', 'strong', 'heavy'] },
  { clue: 'Item de uma lista', tag: 'li', opts: ['li', 'ul', 'ol', 'item'] },
  { clue: 'Título de maior destaque', tag: 'h1', opts: ['h1', 'h6', 'title', 'header'] },
  { clue: 'Quebra de linha', tag: 'br', opts: ['br', 'hr', 'nl', 'break'] },
  { clue: 'Cria um botão clicável', tag: 'button', opts: ['input', 'click', 'button', 'btn'] },
]

const VOM_QUESTIONS = [
  { statement: 'A tag <img> não precisa de tag de fechamento.', answer: true },
  { statement: 'A tag <head> exibe conteúdo visível na página.', answer: false },
  { statement: '<h1> representa um título maior que <h6>.', answer: true },
  { statement: 'CSS significa "Cascading Style Sheets".', answer: true },
  { statement: 'A tag <p> pode conter outra tag <p> dentro.', answer: false },
  { statement: '<div> é um elemento inline por padrão.', answer: false },
  { statement: 'A tag <a> é usada para criar links.', answer: true },
  { statement: 'O atributo "src" em <img> define a URL da imagem.', answer: true },
  { statement: '<span> é um elemento de bloco por padrão.', answer: false },
  { statement: 'HTML significa HyperText Markup Language.', answer: true },
]

// ─── QuizVeloz ───────────────────────────────────────────────────────────────

function QuizVeloz({ onBack }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [timer, setTimer] = useState(12)
  const [done, setDone] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const q = QUIZ_QUESTIONS[current]

  const advance = useCallback((wasCorrect) => {
    setFeedback(wasCorrect ? 'correct' : 'wrong')
    setTimeout(() => {
      setFeedback(null)
      setSelected(null)
      if (current + 1 >= QUIZ_QUESTIONS.length) setDone(true)
      else { setCurrent((c) => c + 1); setTimer(12) }
    }, 700)
  }, [current])

  useEffect(() => {
    if (done || selected !== null) return
    if (timer === 0) { advance(false); return }
    const t = setTimeout(() => setTimer((v) => v - 1), 1000)
    return () => clearTimeout(t)
  }, [timer, done, selected, advance])

  function handleSelect(i) {
    if (selected !== null || feedback) return
    setSelected(i)
    const correct = i === q.answer
    if (correct) setScore((s) => s + 1)
    advance(correct)
  }

  function restart() {
    setCurrent(0); setScore(0); setSelected(null)
    setTimer(12); setDone(false); setFeedback(null)
  }

  if (done) {
    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {QUIZ_QUESTIONS.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Incrível! Você domina HTML!' : pct >= 50 ? 'Bom trabalho! Continue praticando.' : 'Revise os módulos e tente novamente!'}
        </p>
        <div className="game-result__actions">
          <button className="btn btn--primary" onClick={restart}>Jogar de novo</button>
          <button className="btn btn--ghost" onClick={onBack}>Voltar</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`game-play ${feedback ? `game-play--${feedback}` : ''}`}>
      <div className="game-play__topbar">
        <button className="game-play__back" onClick={onBack}>← Sair</button>
        <div className="game-play__meta">
          <span className="game-play__score-label">Pontos: <strong>{score}</strong></span>
          <span className={`game-play__timer ${timer <= 4 ? 'game-play__timer--urgent' : ''}`}>{timer}s</span>
        </div>
      </div>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(current / QUIZ_QUESTIONS.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {QUIZ_QUESTIONS.length}</p>
      <h2 className="game-play__question">{q.q}</h2>
      <ul className="game-play__options">
        {q.opts.map((opt, i) => {
          let cls = 'game-play__option'
          if (selected !== null) {
            if (i === q.answer) cls += ' game-play__option--correct'
            else if (i === selected) cls += ' game-play__option--wrong'
          }
          return (
            <li key={i}>
              <button className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
                <span className="game-play__option-letter">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// ─── AdivinheATag ────────────────────────────────────────────────────────────

function AdivinheATag({ onBack }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const q = TAG_CLUES[current]

  function handleSelect(opt) {
    if (selected !== null) return
    setSelected(opt)
    if (opt === q.tag) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (current + 1 >= TAG_CLUES.length) setDone(true)
      else setCurrent((c) => c + 1)
    }, 900)
  }

  function restart() { setCurrent(0); setScore(0); setSelected(null); setDone(false) }

  if (done) {
    const pct = Math.round((score / TAG_CLUES.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '🏷️' : pct >= 50 ? '👍' : '📖'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {TAG_CLUES.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Você conhece as tags muito bem!' : pct >= 50 ? 'Quase lá! Um pouco mais de prática.' : 'Continue estudando as tags HTML!'}
        </p>
        <div className="game-result__actions">
          <button className="btn btn--primary" onClick={restart}>Jogar de novo</button>
          <button className="btn btn--ghost" onClick={onBack}>Voltar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-play">
      <div className="game-play__topbar">
        <button className="game-play__back" onClick={onBack}>← Sair</button>
        <span className="game-play__score-label">Pontos: <strong>{score}</strong></span>
      </div>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(current / TAG_CLUES.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {TAG_CLUES.length}</p>
      <p className="game-tag__hint">Qual tag HTML...</p>
      <h2 className="game-play__question">"{q.clue}"</h2>
      <ul className="game-play__options game-play__options--grid">
        {q.opts.map((opt) => {
          let cls = 'game-play__option game-play__option--code'
          if (selected !== null) {
            if (opt === q.tag) cls += ' game-play__option--correct'
            else if (opt === selected) cls += ' game-play__option--wrong'
          }
          return (
            <li key={opt}>
              <button className={cls} onClick={() => handleSelect(opt)} disabled={selected !== null}>
                {'<'}{opt}{'>'}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// ─── VerdadeOuMito ───────────────────────────────────────────────────────────

function VerdadeOuMito({ onBack }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const q = VOM_QUESTIONS[current]

  function handleSelect(val) {
    if (selected !== null) return
    setSelected(val)
    if (val === q.answer) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (current + 1 >= VOM_QUESTIONS.length) setDone(true)
      else setCurrent((c) => c + 1)
    }, 900)
  }

  function restart() { setCurrent(0); setScore(0); setSelected(null); setDone(false) }

  if (done) {
    const pct = Math.round((score / VOM_QUESTIONS.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '🎯' : pct >= 50 ? '👏' : '🤔'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {VOM_QUESTIONS.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Excelente! Você sabe separar fato de mito!' : pct >= 50 ? 'Bom! Mas alguns mitos te enganaram.' : 'Revise o conteúdo e volte mais forte!'}
        </p>
        <div className="game-result__actions">
          <button className="btn btn--primary" onClick={restart}>Jogar de novo</button>
          <button className="btn btn--ghost" onClick={onBack}>Voltar</button>
        </div>
      </div>
    )
  }

  const isRight = selected === q.answer

  return (
    <div className="game-play">
      <div className="game-play__topbar">
        <button className="game-play__back" onClick={onBack}>← Sair</button>
        <span className="game-play__score-label">Pontos: <strong>{score}</strong></span>
      </div>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(current / VOM_QUESTIONS.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {VOM_QUESTIONS.length}</p>
      <p className="game-tag__hint">Esta afirmação é...</p>
      <h2 className="game-play__question game-play__question--vom">"{q.statement}"</h2>
      <div className="vom-btns">
        <button
          className={`vom-btn vom-btn--true ${selected !== null && q.answer === true ? 'vom-btn--correct' : ''} ${selected === true && !isRight ? 'vom-btn--wrong' : ''}`}
          onClick={() => handleSelect(true)}
          disabled={selected !== null}
        >
          ✓ Verdade
        </button>
        <button
          className={`vom-btn vom-btn--false ${selected !== null && q.answer === false ? 'vom-btn--correct' : ''} ${selected === false && !isRight ? 'vom-btn--wrong' : ''}`}
          onClick={() => handleSelect(false)}
          disabled={selected !== null}
        >
          ✗ Mito
        </button>
      </div>
      {selected !== null && (
        <p className={`vom-feedback ${isRight ? 'vom-feedback--right' : 'vom-feedback--wrong'}`}>
          {isRight ? '✓ Correto!' : `✗ Era ${q.answer ? 'Verdade' : 'Mito'}!`}
        </p>
      )}
    </div>
  )
}

// ─── Hub ─────────────────────────────────────────────────────────────────────

const QUIZ_LIST = [
  { id: 'quiz', title: 'Quiz Veloz', description: '10 perguntas sobre HTML com contador regressivo. Responda rápido!', icon: '⚡', color: '#6366f1', component: QuizVeloz },
  { id: 'tags', title: 'Adivinhe a Tag', description: 'Leia a descrição e escolha a tag HTML correta entre 4 opções.', icon: '🏷️', color: '#10b981', component: AdivinheATag },
  { id: 'vom', title: 'Verdade ou Mito', description: 'Afirmações sobre HTML e CSS — você sabe separar o certo do errado?', icon: '🎯', color: '#f59e0b', component: VerdadeOuMito },
]

export default function Quiz() {
  const [activeGame, setActiveGame] = useState(null)
  const game = QUIZ_LIST.find((g) => g.id === activeGame)
  const GameComponent = game?.component

  return (
    <div className="games-page">
      <div className="games-page__deco" aria-hidden="true">
        <span className="games-page__blob games-page__blob--1" style={{ background: '#6366f1' }} />
        <span className="games-page__blob games-page__blob--2" style={{ background: '#f59e0b' }} />
        <span className="games-page__blob games-page__blob--3" style={{ background: '#10b981' }} />
      </div>

      <div className="games-page__inner">
        <div className="games-page__topnav">
          <Link to="/dashboard" className="games-page__back">← Dashboard</Link>
        </div>

        {!activeGame ? (
          <>
            <header className="games-page__header">
              <p className="games-page__eyebrow">Teste seus conhecimentos</p>
              <h1 className="games-page__title">Quiz Interativo</h1>
              <p className="games-page__subtitle">
                Responda perguntas sobre HTML e CSS. Escolha uma modalidade e veja quanto você sabe!
              </p>
            </header>
            <div className="games-grid">
              {QUIZ_LIST.map((g) => (
                <button key={g.id} className="game-card" style={{ '--game-color': g.color }} onClick={() => setActiveGame(g.id)}>
                  <div className="game-card__icon">{g.icon}</div>
                  <h2 className="game-card__title">{g.title}</h2>
                  <p className="game-card__desc">{g.description}</p>
                  <span className="game-card__cta">Começar →</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="games-page__active">
            <GameComponent onBack={() => setActiveGame(null)} />
          </div>
        )}
      </div>
    </div>
  )
}
