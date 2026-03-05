import { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Games.css'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function scrambleWord(word) {
  let result
  do { result = shuffle(word.split('')).join('') } while (result === word)
  return result
}

// ─── Data ────────────────────────────────────────────────────────────────────

const MEMORY_PAIRS = [
  { id: 1, tag: '<h1>', desc: 'Título principal' },
  { id: 2, tag: '<p>', desc: 'Parágrafo' },
  { id: 3, tag: '<a>', desc: 'Link clicável' },
  { id: 4, tag: '<img>', desc: 'Imagem' },
  { id: 5, tag: '<ul>', desc: 'Lista não ordenada' },
  { id: 6, tag: '<div>', desc: 'Divisão em bloco' },
  { id: 7, tag: '<span>', desc: 'Trecho inline' },
  { id: 8, tag: '<button>', desc: 'Botão' },
]

const SCRAMBLE_WORDS = [
  { tag: 'section', hint: 'Seção de conteúdo' },
  { tag: 'article', hint: 'Artigo independente' },
  { tag: 'header', hint: 'Cabeçalho da página' },
  { tag: 'footer', hint: 'Rodapé da página' },
  { tag: 'button', hint: 'Botão clicável' },
  { tag: 'strong', hint: 'Negrito semântico' },
  { tag: 'figure', hint: 'Figura com legenda' },
  { tag: 'table', hint: 'Tabela de dados' },
  { tag: 'input', hint: 'Campo de entrada' },
  { tag: 'label', hint: 'Rótulo de formulário' },
]

const CODE_SNIPPETS = [
  { code: '<h1>Olá, Mundo!</h1>', desc: 'Título principal' },
  { code: '<p>Meu primeiro parágrafo.</p>', desc: 'Parágrafo de texto' },
  { code: '<a href="#">Clique aqui</a>', desc: 'Link simples' },
  { code: '<img src="foto.jpg" alt="Foto">', desc: 'Imagem com alt' },
  { code: '<button type="button">Enviar</button>', desc: 'Botão de ação' },
  { code: '<ul>\n  <li>Item 1</li>\n</ul>', desc: 'Lista não ordenada' },
]

// ─── MemoriaHTML ─────────────────────────────────────────────────────────────

function MemoriaHTML({ onBack }) {
  const [cards] = useState(() => {
    const deck = []
    MEMORY_PAIRS.forEach((pair) => {
      deck.push({ key: `tag-${pair.id}`, pairId: pair.id, type: 'tag', content: pair.tag })
      deck.push({ key: `desc-${pair.id}`, pairId: pair.id, type: 'desc', content: pair.desc })
    })
    return shuffle(deck)
  })

  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState(new Set())
  const [moves, setMoves] = useState(0)
  const [locked, setLocked] = useState(false)
  const [done, setDone] = useState(false)

  function handleFlip(idx) {
    if (locked) return
    if (flipped.includes(idx)) return
    if (matched.has(cards[idx].pairId)) return

    const next = [...flipped, idx]
    setFlipped(next)

    if (next.length === 2) {
      setMoves((m) => m + 1)
      setLocked(true)
      const [a, b] = next
      if (cards[a].pairId === cards[b].pairId) {
        const newMatched = new Set([...matched, cards[a].pairId])
        setMatched(newMatched)
        setFlipped([])
        setLocked(false)
        if (newMatched.size === MEMORY_PAIRS.length) setDone(true)
      } else {
        setTimeout(() => { setFlipped([]); setLocked(false) }, 1000)
      }
    }
  }

  function restart() {
    setFlipped([]); setMatched(new Set()); setMoves(0); setLocked(false); setDone(false)
  }

  if (done) {
    const perfect = moves <= MEMORY_PAIRS.length
    return (
      <div className="game-result">
        <div className="game-result__emoji">{perfect ? '🧠' : moves <= 14 ? '⭐' : '👍'}</div>
        <h2 className="game-result__title">Parabéns!</h2>
        <p className="game-result__score">{moves} jogadas</p>
        <p className="game-result__msg">
          {perfect ? 'Memória perfeita! Impressionante!' : moves <= 14 ? 'Muito bem! Boa memória!' : 'Conseguiu! Tente bater seu recorde.'}
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
        <span className="game-play__score-label">Jogadas: <strong>{moves}</strong></span>
      </div>
      <p className="game-play__count">Pares encontrados: {matched.size} / {MEMORY_PAIRS.length}</p>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(matched.size / MEMORY_PAIRS.length) * 100}%` }} />
      </div>
      <p className="game-tag__hint">Clique nas cartas para encontrar os pares (tag ↔ descrição)</p>
      <div className="memory-grid">
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.has(card.pairId)
          const isMatched = matched.has(card.pairId)
          return (
            <button
              key={card.key}
              className={`memory-card ${isFlipped ? 'memory-card--flipped' : ''} ${isMatched ? 'memory-card--matched' : ''} ${card.type === 'tag' ? 'memory-card--tag' : 'memory-card--desc'}`}
              onClick={() => handleFlip(idx)}
              disabled={isFlipped || locked}
            >
              <span className="memory-card__back">?</span>
              <span className="memory-card__front">{card.content}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── PalavraEmbaralhada ───────────────────────────────────────────────────────

function PalavraEmbaralhada({ onBack }) {
  const questions = useMemo(() => shuffle(SCRAMBLE_WORDS).slice(0, 8), [])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null) // 'correct' | 'wrong'
  const [done, setDone] = useState(false)
  const [skipped, setSkipped] = useState(0)

  const q = questions[current]
  const scrambled = useMemo(() => scrambleWord(q.tag), [q])

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim() || feedback) return
    const correct = input.trim().toLowerCase() === q.tag
    setFeedback(correct ? 'correct' : 'wrong')
    if (correct) setScore((s) => s + 1)
    setTimeout(() => {
      setFeedback(null)
      setInput('')
      if (current + 1 >= questions.length) setDone(true)
      else setCurrent((c) => c + 1)
    }, 900)
  }

  function handleSkip() {
    if (feedback) return
    setSkipped((s) => s + 1)
    setFeedback('wrong')
    setTimeout(() => {
      setFeedback(null)
      setInput('')
      if (current + 1 >= questions.length) setDone(true)
      else setCurrent((c) => c + 1)
    }, 700)
  }

  function restart() { setCurrent(0); setScore(0); setInput(''); setFeedback(null); setDone(false); setSkipped(0) }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '🔤' : pct >= 50 ? '👌' : '📖'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {questions.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Vocabulário afiado!' : pct >= 50 ? 'Bom! Pratique mais um pouco.' : 'Continue estudando as tags!'}
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
        <div className="game-play__progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {questions.length}</p>
      <p className="game-tag__hint">{q.hint}</p>
      <div className="scramble-word">
        {scrambled.split('').map((letter, i) => (
          <span key={i} className="scramble-letter">{letter}</span>
        ))}
      </div>
      <p className="scramble-sub">Reorganize as letras para formar a tag HTML correta</p>
      <form className="scramble-form" onSubmit={handleSubmit}>
        <input
          className={`scramble-input ${feedback === 'correct' ? 'scramble-input--correct' : feedback === 'wrong' ? 'scramble-input--wrong' : ''}`}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite a tag..."
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          disabled={!!feedback}
        />
        <div className="scramble-actions">
          <button type="submit" className="btn btn--primary" disabled={!input.trim() || !!feedback}>
            Confirmar
          </button>
          <button type="button" className="btn btn--ghost" onClick={handleSkip} disabled={!!feedback}>
            Pular
          </button>
        </div>
      </form>
      {feedback && (
        <p className={`vom-feedback ${feedback === 'correct' ? 'vom-feedback--right' : 'vom-feedback--wrong'}`}>
          {feedback === 'correct' ? '✓ Correto!' : `✗ Era: <${q.tag}>`}
        </p>
      )}
    </div>
  )
}

// ─── DigitacaoVeloz ───────────────────────────────────────────────────────────

function DigitacaoVeloz({ onBack }) {
  const snippets = useMemo(() => shuffle(CODE_SNIPPETS), [])
  const [current, setCurrent] = useState(0)
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [done, setDone] = useState(false)

  const target = snippets[current]

  function calcAccuracy() {
    const t = target.code
    let correct = 0
    for (let i = 0; i < t.length; i++) {
      if (input[i] === t[i]) correct++
    }
    return t.length > 0 ? Math.round((correct / t.length) * 100) : 0
  }

  function handleVerify() {
    if (feedback) return
    const acc = calcAccuracy()
    const passed = acc >= 90
    setFeedback({ passed, acc })
    if (passed) setScore((s) => s + 1)
    setTimeout(() => {
      setFeedback(null)
      setInput('')
      if (current + 1 >= snippets.length) setDone(true)
      else setCurrent((c) => c + 1)
    }, 1200)
  }

  function restart() { setCurrent(0); setInput(''); setScore(0); setFeedback(null); setDone(false) }

  // Colored char-by-char display
  function renderTarget() {
    return target.code.split('').map((char, i) => {
      let cls = 'typing-char'
      if (i < input.length) {
        cls += input[i] === char ? ' typing-char--correct' : ' typing-char--wrong'
      }
      return (
        <span key={i} className={cls}>{char === '\n' ? '↵\n' : char}</span>
      )
    })
  }

  if (done) {
    const pct = Math.round((score / snippets.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '⌨️' : pct >= 50 ? '💪' : '✍️'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {snippets.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Digitação perfeita! Seus dedos conhecem HTML!' : pct >= 50 ? 'Bom ritmo! Continue praticando.' : 'A prática leva à perfeição!'}
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
        <span className="game-play__score-label">Acertos: <strong>{score}</strong></span>
      </div>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(current / snippets.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {snippets.length}</p>
      <p className="game-tag__hint">{target.desc} — digite o código abaixo:</p>
      <pre className="typing-target">{renderTarget()}</pre>
      <textarea
        className="typing-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o código aqui..."
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
        disabled={!!feedback}
        rows={3}
      />
      {feedback && (
        <p className={`vom-feedback ${feedback.passed ? 'vom-feedback--right' : 'vom-feedback--wrong'}`}>
          {feedback.passed ? `✓ Correto! ${feedback.acc}% de precisão` : `✗ ${feedback.acc}% de precisão — precisa de 90%`}
        </p>
      )}
      <button className="btn btn--primary" onClick={handleVerify} disabled={!input.trim() || !!feedback}>
        Verificar
      </button>
    </div>
  )
}

// ─── AcharOErro ──────────────────────────────────────────────────────────────

const BUG_CHALLENGES = [
  {
    id: 1,
    description: 'Uma tag de fechamento está escrita errada. Clique na linha com o erro:',
    lines: [
      '<h1>Título da página</h1>',
      '<p>Bem-vindo ao meu site.</p>',
      '<a href="https://google.com">Clique aqui<a>',
      '<p>Obrigado pela visita.</p>',
    ],
    bugLine: 2,
    explanation: 'A tag de fechamento do link está errada: <a> deveria ser </a>. Tags de fechamento precisam da barra /.',
  },
  {
    id: 2,
    description: 'A tag de fechamento da lista está incorreta. Clique na linha com o erro:',
    lines: [
      '<ul>',
      '  <li>Primeiro item</li>',
      '  <li>Segundo item</li>',
      '  <li>Terceiro item</li>',
      '<ul>',
    ],
    bugLine: 4,
    explanation: 'A tag de fechamento está escrita como <ul> mas deveria ser </ul>. A barra / indica fechamento.',
  },
  {
    id: 3,
    description: 'Um atributo está sem valor. Clique na linha com o erro:',
    lines: [
      '<html lang="pt-BR">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Meu Site</title>',
      '  </head>',
      '  <body>',
      '    <img src="foto.jpg" alt=>',
      '  </body>',
      '</html>',
    ],
    bugLine: 6,
    explanation: 'O atributo alt= está sem valor entre aspas. Deveria ser alt="descrição da imagem". O alt é obrigatório para acessibilidade.',
  },
  {
    id: 4,
    description: 'Uma tag está com o nome errado. Clique na linha com o erro:',
    lines: [
      '<section>',
      '  <h2>Sobre mim</h2>',
      '  <pragraph>Sou desenvolvedor web iniciante.</pragraph>',
      '  <p>Estou aprendendo HTML, CSS e JavaScript.</p>',
      '</section>',
    ],
    bugLine: 2,
    explanation: 'A tag <pragraph> não existe. A tag correta para parágrafo é <p>. Erros de digitação em nomes de tags fazem o navegador ignorar o elemento.',
  },
  {
    id: 5,
    description: 'Um nome de atributo está com erro de digitação. Clique na linha com o erro:',
    lines: [
      '<form>',
      '  <label for="nome">Nome:</label>',
      '  <input type="text" id="nome" placehoder="Digite seu nome">',
      '  <button type="submit">Enviar</button>',
      '</form>',
    ],
    bugLine: 2,
    explanation: 'O atributo "placehoder" está errado — falta um "l". O correto é "placeholder".',
  },
  {
    id: 6,
    description: 'Aspas de um atributo não foram fechadas. Clique na linha com o erro:',
    lines: [
      '<!DOCTYPE html>',
      '<html lang="pt-BR">',
      '<head>',
      '  <link rel="stylesheet href="estilo.css">',
      '</head>',
    ],
    bugLine: 3,
    explanation: 'As aspas do atributo rel não foram fechadas. Deveria ser rel="stylesheet" href="estilo.css" — dois atributos separados.',
  },
  {
    id: 7,
    description: 'Um elemento errado está dentro da lista. Clique na linha com o erro:',
    lines: [
      '<ol>',
      '  <li>Passo 1: abrir o editor</li>',
      '  <li>Passo 2: escrever o HTML</li>',
      '  <p>Passo 3: salvar o arquivo</p>',
      '  <li>Passo 4: abrir no navegador</li>',
      '</ol>',
    ],
    bugLine: 3,
    explanation: 'Dentro de <ol> e <ul> só podem existir elementos <li>. Usar <p> diretamente dentro de uma lista quebra a estrutura semântica do HTML.',
  },
  {
    id: 8,
    description: 'Uma tag de fechamento está sem a barra. Clique na linha com o erro:',
    lines: [
      '<div class="cartao">',
      '  <h3>Título do cartão</h3>',
      '  <p>Descrição do cartão aqui.</p>',
      '<div>',
    ],
    bugLine: 3,
    explanation: 'A tag de fechamento <div> está sem a barra. Deveria ser </div>. Sem o fechamento correto o navegador pode aninhar elementos de forma errada.',
  },
  {
    id: 9,
    description: 'O atributo href do link está escrito errado. Clique na linha com o erro:',
    lines: [
      '<nav>',
      '  <a hrf="pagina1.html">Página 1</a>',
      '  <a href="pagina2.html">Página 2</a>',
      '  <a href="pagina3.html">Página 3</a>',
      '</nav>',
    ],
    bugLine: 1,
    explanation: 'O atributo "hrf" está com erro de digitação. O correto é "href". Sem href o link não navega para nenhum lugar.',
  },
  {
    id: 10,
    description: 'Uma tag de título está sendo fechada com a tag errada. Clique na linha com o erro:',
    lines: [
      '<article>',
      '  <h2>Notícia do dia</h2>',
      '  <p>Hoje foi um dia ensolarado.</p>',
      '  <h3>Detalhes</h4>',
      '  <p>Temperatura máxima de 28°C.</p>',
      '</article>',
    ],
    bugLine: 3,
    explanation: 'A tag foi aberta como <h3> mas fechada como </h4>. A abertura e fechamento devem usar a mesma tag.',
  },
  {
    id: 11,
    description: 'O atributo src da imagem está escrito errado. Clique na linha com o erro:',
    lines: [
      '<figure>',
      '  <img scr="paisagem.jpg" alt="Paisagem montanhosa">',
      '  <figcaption>Vista das montanhas</figcaption>',
      '</figure>',
    ],
    bugLine: 1,
    explanation: 'O atributo "scr" está com as letras trocadas. O correto é "src" (source). Sem src correto a imagem não carrega.',
  },
  {
    id: 12,
    description: 'O DOCTYPE está com erro. Clique na linha com o erro:',
    lines: [
      '<!DOCTYP html>',
      '<html lang="pt-BR">',
      '  <head>',
      '    <title>Minha Página</title>',
      '  </head>',
      '  <body>',
      '    <p>Olá, mundo!</p>',
      '  </body>',
      '</html>',
    ],
    bugLine: 0,
    explanation: 'A declaração DOCTYPE está errada: "DOCTYP" deveria ser "DOCTYPE". Sem isso o navegador entra em modo de compatibilidade e pode renderizar a página de forma inesperada.',
  },
  {
    id: 13,
    description: 'O atributo type do botão está errado. Clique na linha com o erro:',
    lines: [
      '<form action="/enviar">',
      '  <input type="email" placeholder="Seu e-mail">',
      '  <button tipe="submit">Inscrever</button>',
      '</form>',
    ],
    bugLine: 2,
    explanation: 'O atributo "tipe" está com erro de digitação. O correto é "type". Com o atributo errado o comportamento do botão pode ser imprevisível.',
  },
  {
    id: 14,
    description: 'Uma tag está sendo fechada na ordem errada. Clique na linha com o erro:',
    lines: [
      '<p>Este texto tem uma parte em <strong><em>negrito e itálico</strong></em>.</p>',
      '<p>Parágrafo normal aqui.</p>',
    ],
    bugLine: 0,
    explanation: 'As tags foram fechadas na ordem errada: </strong> veio antes de </em>, mas <em> foi aberto depois de <strong>. A ordem correta de fechamento é </em></strong>.',
  },
  {
    id: 15,
    description: 'O atributo charset está com o valor errado. Clique na linha com o erro:',
    lines: [
      '<!DOCTYPE html>',
      '<html lang="pt-BR">',
      '<head>',
      '  <meta charset="UFT-8">',
      '  <title>Meu Blog</title>',
      '</head>',
    ],
    bugLine: 3,
    explanation: '"UFT-8" está com as letras trocadas. O correto é "UTF-8" (Unicode Transformation Format). Sem isso acentos e caracteres especiais podem aparecer quebrados.',
  },
  {
    id: 16,
    description: 'A tag de abertura de uma seção está errada. Clique na linha com o erro:',
    lines: [
      '<main>',
      '  <seciton>',
      '    <h2>Projetos</h2>',
      '    <p>Veja meus trabalhos abaixo.</p>',
      '  </seciton>',
      '</main>',
    ],
    bugLine: 1,
    explanation: '"<seciton>" está com as letras trocadas. O correto é "<section>". O navegador não reconhece a tag e trata como elemento desconhecido.',
  },
  {
    id: 17,
    description: 'O atributo for do label não casa com o id do input. Clique na linha com o erro:',
    lines: [
      '<form>',
      '  <label for="emai">E-mail:</label>',
      '  <input type="email" id="email" placeholder="seu@email.com">',
      '  <button type="submit">Enviar</button>',
      '</form>',
    ],
    bugLine: 1,
    explanation: 'O for="emai" não bate com id="email". Quando for e id não coincidem, clicar no label não foca o input. O correto é for="email".',
  },
  {
    id: 18,
    description: 'Uma tag está sendo usada sem fechamento quando deveria ter. Clique na linha com o erro:',
    lines: [
      '<table>',
      '  <tr>',
      '    <th>Nome</th>',
      '    <th>Idade</th>',
      '  <tr>',
      '  <tr>',
      '    <td>Ana</td>',
      '    <td>25</td>',
      '  </tr>',
      '</table>',
    ],
    bugLine: 4,
    explanation: 'A linha 5 fecha a linha da tabela como <tr> em vez de </tr>. A barra / é obrigatória para indicar fechamento.',
  },
  {
    id: 19,
    description: 'Um atributo de estilo inline tem um erro de sintaxe. Clique na linha com o erro:',
    lines: [
      '<div>',
      '  <p style="color: red">Texto vermelho</p>',
      '  <p style="font-size 18px">Texto maior</p>',
      '  <p style="font-weight: bold">Texto negrito</p>',
      '</div>',
    ],
    bugLine: 2,
    explanation: 'No CSS inline "font-size 18px" está sem os dois pontos. A sintaxe correta é "propriedade: valor", portanto: font-size: 18px.',
  },
  {
    id: 20,
    description: 'A tag de fechamento do parágrafo está errada. Clique na linha com o erro:',
    lines: [
      '<div class="intro">',
      '  <h1>Bem-vindo</h1>',
      '  <p>Este é o meu primeiro site.</p>',
      '  <p>Estou aprendendo HTML agora!</\p>',
      '</div>',
    ],
    bugLine: 3,
    explanation: 'A tag </\\p> tem uma barra extra antes de p. O correto é simplesmente </p>.',
  },
  {
    id: 21,
    description: 'Um elemento de cabeçalho está sendo usado de forma incorreta. Clique na linha com o erro:',
    lines: [
      '<body>',
      '  <h1>Título Principal</h1>',
      '  <h1>Segundo Título</h1>',
      '  <p>Parágrafo introdutório.</p>',
      '</body>',
    ],
    bugLine: 2,
    explanation: 'Uma página deve ter apenas um <h1>. O segundo título deveria ser <h2>. Usar múltiplos <h1> prejudica a acessibilidade e o SEO do site.',
  },
  {
    id: 22,
    description: 'O valor do atributo type do input está errado. Clique na linha com o erro:',
    lines: [
      '<form>',
      '  <input type="txt" placeholder="Seu nome">',
      '  <input type="email" placeholder="Seu e-mail">',
      '  <button type="submit">Enviar</button>',
      '</form>',
    ],
    bugLine: 1,
    explanation: '"type=txt" não é um tipo válido. O correto é type="text". Com um tipo inválido o navegador pode ignorar o atributo.',
  },
  {
    id: 23,
    description: 'Uma tag semântica está sendo fechada com uma tag diferente. Clique na linha com o erro:',
    lines: [
      '<header>',
      '  <nav>',
      '    <a href="/">Início</a>',
      '    <a href="/sobre">Sobre</a>',
      '  </nav>',
      '</head>',
    ],
    bugLine: 5,
    explanation: 'A tag foi aberta como <header> mas fechada como </head>. São tags completamente diferentes: <header> é o cabeçalho da página visível e <head> é a seção de metadados.',
  },
  {
    id: 24,
    description: 'O atributo de largura da imagem está com a unidade dentro das aspas de forma errada. Clique na linha com o erro:',
    lines: [
      '<div class="banner">',
      '  <img src="banner.jpg" alt="Banner" width="100%" height="200">',
      '  <img src="logo.jpg" alt="Logo" widht="120" height="60">',
      '</div>',
    ],
    bugLine: 2,
    explanation: '"widht" está com as letras trocadas. O correto é "width". Com o atributo errado a imagem exibirá no tamanho padrão.',
  },
  {
    id: 25,
    description: 'Uma âncora está sem o atributo necessário para funcionar. Clique na linha com o erro:',
    lines: [
      '<footer>',
      '  <p>Siga-nos nas redes sociais:</p>',
      '  <a href="">Instagram</a>',
      '  <a>Twitter</a>',
      '  <a href="https://facebook.com">Facebook</a>',
      '</footer>',
    ],
    bugLine: 3,
    explanation: 'O link do Twitter não tem o atributo href. Sem href a tag <a> não é um link — é apenas texto sem comportamento de navegação.',
  },
  {
    id: 26,
    description: 'A tag de fechamento do head está errada. Clique na linha com o erro:',
    lines: [
      '<!DOCTYPE html>',
      '<html>',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Portfólio</title>',
      '  <head>',
      '  <body>',
      '    <h1>Meu Portfólio</h1>',
      '  </body>',
      '</html>',
    ],
    bugLine: 5,
    explanation: 'A tag </head> está sem a barra: está escrita como <head>. Sem o fechamento correto o navegador pode incluir o body dentro do head.',
  },
  {
    id: 27,
    description: 'Um atributo de classe está com o nome errado. Clique na linha com o erro:',
    lines: [
      '<div calss="container">',
      '  <h2>Seção de produtos</h2>',
      '  <p>Confira nossos produtos abaixo.</p>',
      '</div>',
    ],
    bugLine: 0,
    explanation: '"calss" está com as letras trocadas. O correto é "class". Com o atributo errado nenhum estilo CSS será aplicado ao elemento.',
  },
  {
    id: 28,
    description: 'A tag strong foi fechada incorretamente. Clique na linha com o erro:',
    lines: [
      '<p>',
      '  Programação é uma habilidade <strong>muito importante</strog>',
      '  para o mercado de trabalho atual.',
      '</p>',
    ],
    bugLine: 1,
    explanation: 'A tag foi aberta como <strong> mas fechada como </strog>. O nome da tag de abertura e fechamento deve ser idêntico.',
  },
  {
    id: 29,
    description: 'O elemento input está usando um atributo inexistente. Clique na linha com o erro:',
    lines: [
      '<form>',
      '  <input type="password" name="senha" obligatory>',
      '  <button type="submit">Entrar</button>',
      '</form>',
    ],
    bugLine: 1,
    explanation: '"obligatory" não é um atributo HTML válido. O atributo correto para tornar um campo obrigatório é "required".',
  },
  {
    id: 30,
    description: 'A tag de fechamento do body está faltando a barra. Clique na linha com o erro:',
    lines: [
      '  <footer>',
      '    <p>© 2024 Meu Site</p>',
      '  </footer>',
      '<body>',
      '</html>',
    ],
    bugLine: 3,
    explanation: 'A linha <body> deveria ser </body>. Sem a barra a tag é interpretada como uma segunda abertura de body, não como fechamento.',
  },
]

function AcharOErro({ onBack }) {
  const challenges = useMemo(() => shuffle(BUG_CHALLENGES).slice(0, 8), [])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const challenge = challenges[current]

  function handleSelect(lineIdx) {
    if (selected !== null) return
    setSelected(lineIdx)
    if (lineIdx === challenge.bugLine) setScore((s) => s + 1)
  }

  function handleNext() {
    setSelected(null)
    if (current + 1 >= challenges.length) setDone(true)
    else setCurrent((c) => c + 1)
  }

  function restart() {
    setCurrent(0); setSelected(null); setScore(0); setDone(false)
  }

  if (done) {
    const pct = Math.round((score / challenges.length) * 100)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '🐛' : pct >= 50 ? '🔍' : '👀'}</div>
        <h2 className="game-result__title">Resultado</h2>
        <p className="game-result__score">{score} / {challenges.length}</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Olho afiado! Você encontrou quase todos os erros.' : pct >= 50 ? 'Bom trabalho! Continue praticando a leitura de código.' : 'Leia cada linha com calma — os erros são sutis!'}
        </p>
        <div className="game-result__actions">
          <button className="btn btn--primary" onClick={restart}>Jogar de novo</button>
          <button className="btn btn--ghost" onClick={onBack}>Voltar</button>
        </div>
      </div>
    )
  }

  const answered = selected !== null
  const correct = selected === challenge.bugLine

  return (
    <div className="game-play">
      <div className="game-play__topbar">
        <button className="game-play__back" onClick={onBack}>← Sair</button>
        <span className="game-play__score-label">Acertos: <strong>{score}</strong></span>
      </div>
      <div className="game-play__progress-bar">
        <div className="game-play__progress-fill" style={{ width: `${(current / challenges.length) * 100}%` }} />
      </div>
      <p className="game-play__count">{current + 1} / {challenges.length}</p>

      <p className="bug-description">{challenge.description}</p>

      <div className="bug-code">
        {challenge.lines.map((line, i) => {
          let cls = 'bug-line'
          if (answered) {
            if (i === challenge.bugLine) cls += ' bug-line--correct'
            else if (i === selected) cls += ' bug-line--wrong'
          } else {
            cls += ' bug-line--clickable'
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={answered}>
              <span className="bug-line__num">{i + 1}</span>
              <code className="bug-line__code">{line}</code>
              {answered && i === challenge.bugLine && (
                <span className="bug-line__icon">✓</span>
              )}
              {answered && i === selected && i !== challenge.bugLine && (
                <span className="bug-line__icon bug-line__icon--wrong">✗</span>
              )}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`bug-feedback ${correct ? 'bug-feedback--correct' : 'bug-feedback--wrong'}`}>
          <p className="bug-feedback__status">{correct ? '✓ Correto!' : '✗ Não era essa linha'}</p>
          <p className="bug-feedback__explanation">{challenge.explanation}</p>
          <button className="btn btn--primary" onClick={handleNext} style={{ marginTop: '8px' }}>
            {current + 1 < challenges.length ? 'Próximo →' : 'Ver resultado'}
          </button>
        </div>
      )}
    </div>
  )
}

// ─── QuizCronometrado ─────────────────────────────────────────────────────────

const TIMED_QUIZ_QUESTIONS = [
  { question: 'Qual tag cria um parágrafo?', options: ['<div>', '<p>', '<span>', '<text>'], correct: 1 },
  { question: 'Qual atributo define o destino de um link?', options: ['src', 'alt', 'href', 'id'], correct: 2 },
  { question: 'Qual tag cria um título principal (maior)?', options: ['<h6>', '<title>', '<h1>', '<header>'], correct: 2 },
  { question: 'Qual tag cria uma lista NÃO ordenada?', options: ['<ol>', '<ul>', '<li>', '<list>'], correct: 1 },
  { question: 'Qual propriedade CSS muda a cor do texto?', options: ['background', 'font-color', 'text-color', 'color'], correct: 3 },
  { question: 'Qual valor de display ativa o Flexbox?', options: ['block', 'inline', 'flex', 'grid-flex'], correct: 2 },
  { question: 'Qual propriedade CSS cria espaço INTERNO?', options: ['margin', 'gap', 'padding', 'border'], correct: 2 },
  { question: 'Qual propriedade CSS cria espaço EXTERNO?', options: ['padding', 'margin', 'gap', 'offset'], correct: 1 },
  { question: 'Em JavaScript, qual palavra declara uma variável que pode mudar?', options: ['const', 'var', 'let', 'def'], correct: 2 },
  { question: 'Qual operador verifica igualdade ESTRITA em JS?', options: ['=', '==', '===', '!=='], correct: 2 },
  { question: 'Como se escreve um comentário em HTML?', options: ['// texto', '/* texto */', '<!-- texto -->', '# texto'], correct: 2 },
  { question: 'Qual tag insere uma imagem?', options: ['<image>', '<img>', '<pic>', '<src>'], correct: 1 },
  { question: 'Qual propriedade CSS controla o tamanho da fonte?', options: ['text-size', 'font-size', 'font', 'size'], correct: 1 },
  { question: 'Como se declara uma constante em JavaScript?', options: ['let', 'var', 'const', 'fix'], correct: 2 },
  { question: 'Qual método JS seleciona um elemento pelo ID?', options: ['querySelector', 'getElement', 'getElementById', 'findById'], correct: 2 },
  { question: 'Qual tag HTML cria um botão clicável?', options: ['<click>', '<input>', '<btn>', '<button>'], correct: 3 },
  { question: 'Qual propriedade CSS arredonda bordas?', options: ['border-style', 'border-radius', 'corner-radius', 'round'], correct: 1 },
  { question: 'O que faz o console.log() em JavaScript?', options: ['Exibe na tela', 'Salva um arquivo', 'Imprime no console', 'Cria um elemento'], correct: 2 },
  { question: 'Qual tag semântica representa o rodapé da página?', options: ['<bottom>', '<footer>', '<end>', '<base>'], correct: 1 },
  { question: 'Qual evento JS é disparado ao clicar em um elemento?', options: ['hover', 'focus', 'click', 'submit'], correct: 2 },
]

function QuizCronometrado({ onBack }) {
  const [phase, setPhase] = useState('ready')
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const questions = useMemo(() => shuffle(TIMED_QUIZ_QUESTIONS), [])
  const intervalRef = useRef(null)

  useEffect(() => {
    if (phase !== 'playing') return
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current)
          setPhase('done')
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [phase])

  function startGame() {
    setPhase('playing')
    setTimeLeft(60)
    setCurrentQ(0)
    setScore(0)
    setSelected(null)
    setAnswered(false)
  }

  function handleSelect(optIdx) {
    if (answered) return
    setSelected(optIdx)
    setAnswered(true)
    const correct = optIdx === questions[currentQ].correct
    if (correct) setScore((s) => s + 1)
    setTimeout(() => {
      const next = currentQ + 1
      if (next >= questions.length) {
        clearInterval(intervalRef.current)
        setPhase('done')
      } else {
        setCurrentQ(next)
        setSelected(null)
        setAnswered(false)
      }
    }, 800)
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')
  const timePct = (timeLeft / 60) * 100
  const timerDanger = timeLeft < 15

  if (phase === 'ready') {
    return (
      <div className="game-play">
        <div className="game-play__topbar">
          <button className="game-play__back" onClick={onBack}>← Sair</button>
        </div>
        <div className="quiz-cron-ready">
          <div className="quiz-cron-ready__icon">⏱</div>
          <h2 className="quiz-cron-ready__title">Quiz Relâmpago</h2>
          <ul className="quiz-cron-ready__rules">
            <li>⏱ Você tem <strong>60 segundos</strong></li>
            <li>📋 {questions.length} perguntas de HTML, CSS e JS</li>
            <li>✅ Responda o máximo que puder</li>
            <li>⚡ Quanto mais rápido, mais questões!</li>
          </ul>
          <button className="btn btn--primary" style={{ fontSize: '15px', padding: '12px 32px' }} onClick={startGame}>
            Iniciar desafio →
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    const pct = Math.round((score / questions.length) * 100)
    const answeredCount = currentQ + (answered ? 1 : 0)
    return (
      <div className="game-result">
        <div className="game-result__emoji">{pct >= 80 ? '⚡' : pct >= 50 ? '⏱' : '📚'}</div>
        <h2 className="game-result__title">Tempo esgotado!</h2>
        <p className="game-result__score">{score} de {answeredCount} perguntas</p>
        <p className="game-result__msg">
          {pct >= 80 ? 'Incrível! Você é muito rápido e preciso!' : pct >= 50 ? 'Bom desempenho! Continue praticando.' : 'Continue estudando — velocidade vem com a prática!'}
        </p>
        <div className="game-result__actions">
          <button className="btn btn--primary" onClick={startGame}>Jogar novamente</button>
          <button className="btn btn--ghost" onClick={onBack}>Voltar</button>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="game-play">
      <div className="game-play__topbar">
        <button className="game-play__back" onClick={onBack}>← Sair</button>
        <span className="game-play__score-label">Acertos: <strong>{score}</strong></span>
      </div>

      <div className={`quiz-cron-timer-bar ${timerDanger ? 'quiz-cron-timer-bar--danger' : ''}`}>
        <div className="quiz-cron-timer-bar__fill" style={{ width: `${timePct}%` }} />
      </div>

      <div className={`quiz-cron-timer ${timerDanger ? 'quiz-cron-timer--danger' : ''}`}>
        {mins}:{secs}
      </div>

      <p className="game-play__count">{currentQ + 1} / {questions.length}</p>
      <p className="game-tag__hint" style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>
        {q.question}
      </p>

      <div className="quiz-cron-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-cron-option'
          if (answered) {
            if (i === q.correct) cls += ' quiz-cron-option--correct'
            else if (i === selected) cls += ' quiz-cron-option--wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={answered}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Hub ─────────────────────────────────────────────────────────────────────

const GAME_LIST = [
  { id: 'memoria', title: 'Jogo da Memória', description: 'Encontre os pares: tag HTML ↔ descrição. Menos jogadas = mais pontos!', icon: '🧠', color: '#8b5cf6', component: MemoriaHTML },
  { id: 'scramble', title: 'Palavra Embaralhada', description: 'As letras de uma tag estão fora de ordem. Você consegue reorganizá-las?', icon: '🔤', color: '#06b6d4', component: PalavraEmbaralhada },
  { id: 'typing', title: 'Digitação de Código', description: 'Digite trechos de HTML com precisão. Precisa de 90% de acerto para passar!', icon: '⌨️', color: '#f43f5e', component: DigitacaoVeloz },
  { id: 'bug', title: 'Achar o Erro', description: 'Um trecho de código tem um bug. Clique na linha errada antes que ela te engane!', icon: '🐛', color: '#f59e0b', component: AcharOErro },
  { id: 'quiz-cronometrado', title: 'Quiz Relâmpago', description: '60 segundos, quantas perguntas de HTML, CSS e JS você consegue acertar?', icon: '⏱', color: '#f59e0b', component: QuizCronometrado },
]

export default function Games() {
  const [activeGame, setActiveGame] = useState(null)
  const game = GAME_LIST.find((g) => g.id === activeGame)
  const GameComponent = game?.component

  return (
    <div className="games-page">
      <div className="games-page__deco" aria-hidden="true">
        <span className="games-page__blob games-page__blob--1" style={{ background: '#8b5cf6' }} />
        <span className="games-page__blob games-page__blob--2" style={{ background: '#06b6d4' }} />
        <span className="games-page__blob games-page__blob--3" style={{ background: '#f43f5e' }} />
      </div>

      <div className="games-page__inner">
        <div className="games-page__topnav">
          <Link to="/dashboard" className="games-page__back">← Dashboard</Link>
        </div>

        {!activeGame ? (
          <>
            <header className="games-page__header">
              <p className="games-page__eyebrow">Modo livre</p>
              <h1 className="games-page__title">Jogos Interativos</h1>
              <p className="games-page__subtitle">
                Aprenda HTML de um jeito diferente. Memória, raciocínio e digitação em um só lugar!
              </p>
            </header>
            <div className="games-grid">
              {GAME_LIST.map((g) => (
                <button key={g.id} className="game-card" style={{ '--game-color': g.color }} onClick={() => setActiveGame(g.id)}>
                  <div className="game-card__icon">{g.icon}</div>
                  <h2 className="game-card__title">{g.title}</h2>
                  <p className="game-card__desc">{g.description}</p>
                  <span className="game-card__cta">Jogar →</span>
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
