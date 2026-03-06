import { useState, useRef, useCallback, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import './Projeto.css'

function loadProgress(projectId) {
  try {
    const saved = localStorage.getItem(`project_progress_${projectId}`)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveProgress(projectId, doneSteps) {
  localStorage.setItem(`project_progress_${projectId}`, JSON.stringify(doneSteps))
}

// Render explanation text with basic **bold** and `code` support
function Explanation({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\n)/g)
  return (
    <div className="projeto__explanation">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        if (part === '\n') {
          return <br key={i} />
        }
        if (part.trimStart().startsWith('- ')) {
          const lines = part.split('\n').filter(Boolean)
          return lines.map((line, j) => {
            const trimmed = line.trimStart()
            if (trimmed.startsWith('- ')) {
              return <li key={`${i}-${j}`}>{trimmed.slice(2)}</li>
            }
            return <span key={`${i}-${j}`}>{line}</span>
          })
        }
        return <span key={i}>{part}</span>
      })}
    </div>
  )
}

// ── Snippet block with copy button ───────────────────────────────────────────
function Snippet({ snippet }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(snippet.code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="projeto__snippet">
      <div className="projeto__snippet-header">
        <span className="projeto__snippet-label">{snippet.label}</span>
        <button className="projeto__snippet-copy" onClick={handleCopy}>
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>
      <pre className="projeto__snippet-code"><code>{snippet.code}</code></pre>
    </div>
  )
}

// ── Local project layout (VSCode) ─────────────────────────────────────────────
function LocalStep({ step, isStepDone, onMarkDone, onMarkUndone }) {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="projeto__local-body">
      <div className="projeto__local-explanation">
        <Explanation text={step.explanation} />
      </div>

      {step.snippets?.length > 0 && (
        <div className="projeto__snippets">
          {step.snippets.map((s, i) => <Snippet key={i} snippet={s} />)}
        </div>
      )}

      {step.hint && (
        <div className="projeto__local-hint-wrap">
          <button className="projeto__hint-btn" onClick={() => setShowHint((v) => !v)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            {showHint ? 'Ocultar dica' : 'Ver dica'}
          </button>
          {showHint && (
            <div className="projeto__hint">
              <div className="projeto__hint-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                Dica
              </div>
              <span>{step.hint}</span>
            </div>
          )}
        </div>
      )}

      <div className="projeto__local-check">
        {isStepDone ? (
          <div className="projeto__local-done">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Passo concluído!
            <button className="projeto__local-undo" onClick={onMarkUndone}>Desfazer</button>
          </div>
        ) : (
          <button className="projeto__local-mark-done" onClick={onMarkDone}>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Concluí este passo
          </button>
        )}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Projeto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = PROJECTS.find((p) => p.id === id)

  const [doneSteps, setDoneSteps] = useState(() => loadProgress(id))
  const [currentStep, setCurrentStep] = useState(() => {
    const done = loadProgress(id)
    if (!project) return 0
    const firstIncomplete = project.steps.findIndex((s) => !done.includes(s.id))
    return firstIncomplete === -1 ? project.steps.length - 1 : firstIncomplete
  })

  // Browser project state
  const [code, setCode] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const iframeRef = useRef(null)

  const step = project?.steps[currentStep]
  const isLocal = project?.type === 'local'

  useEffect(() => {
    if (!step || isLocal) return
    setCode(step.starterCode)
    setFeedback(null)
    setShowHint(false)
    setShowSolution(false)
    if (iframeRef.current) iframeRef.current.srcdoc = step.starterCode
  }, [currentStep, step?.id, isLocal])

  // Reset hint on step change for local projects
  useEffect(() => {}, [currentStep])

  const runCode = useCallback(() => {
    if (iframeRef.current) iframeRef.current.srcdoc = code
    setFeedback(null)
  }, [code])

  const verifyCode = useCallback(() => {
    if (!iframeRef.current || !step) return
    iframeRef.current.srcdoc = code
    iframeRef.current.onload = () => {
      try {
        const doc = iframeRef.current.contentDocument
        const passed = step.validate(doc)
        if (passed) {
          setFeedback({ type: 'success', message: 'Passo concluído! Ótimo trabalho.' })
          const updated = doneSteps.includes(step.id) ? doneSteps : [...doneSteps, step.id]
          setDoneSteps(updated)
          saveProgress(id, updated)
        } else {
          setFeedback({ type: 'error', message: 'Ainda não está certo. Revise e tente novamente!' })
        }
      } catch {
        setFeedback({ type: 'error', message: 'Erro ao verificar. Confira se o HTML está correto.' })
      }
    }
  }, [code, step, doneSteps, id])

  const markStepDone = useCallback(() => {
    if (!step) return
    const updated = doneSteps.includes(step.id) ? doneSteps : [...doneSteps, step.id]
    setDoneSteps(updated)
    saveProgress(id, updated)
  }, [step, doneSteps, id])

  const markStepUndone = useCallback(() => {
    if (!step) return
    const updated = doneSteps.filter((s) => s !== step.id)
    setDoneSteps(updated)
    saveProgress(id, updated)
  }, [step, doneSteps, id])

  const goToStep = useCallback((index) => setCurrentStep(index), [])
  const goNext = useCallback(() => {
    if (currentStep < project.steps.length - 1) setCurrentStep((s) => s + 1)
  }, [currentStep, project])
  const goPrev = useCallback(() => {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }, [currentStep])

  if (!project) {
    return (
      <main className="projeto projeto--notfound">
        <p>Projeto não encontrado.</p>
        <Link to="/projetos">Voltar aos projetos</Link>
      </main>
    )
  }

  const isStepDone = step && doneSteps.includes(step.id)
  const allDone = doneSteps.length === project.steps.length

  return (
    <main className="projeto" style={{ '--proj-color': project.color }}>
      {/* ── Header ── */}
      <div className="projeto__header">
        <button className="projeto__back" onClick={() => navigate('/projetos')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Projetos
        </button>
        <div className="projeto__header-center">
          <span className="projeto__header-icon">{project.icon}</span>
          <div>
            <h1 className="projeto__header-title">{project.title}</h1>
            <p className="projeto__header-sub">
              {isLocal && (
                <span className="projeto__local-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  VSCode
                </span>
              )}
              Passo {currentStep + 1} de {project.steps.length}
              {allDone && <span className="projeto__all-done"> — Projeto concluído!</span>}
            </p>
          </div>
        </div>
        <div className="projeto__steps-indicator">
          {project.steps.map((s, i) => (
            <button
              key={s.id}
              className={`projeto__step-dot ${i === currentStep ? 'projeto__step-dot--active' : ''} ${doneSteps.includes(s.id) ? 'projeto__step-dot--done' : ''}`}
              onClick={() => goToStep(i)}
              title={s.title}
            />
          ))}
        </div>
      </div>

      {/* ── Step title bar ── */}
      <div className="projeto__step-bar">
        <div className="projeto__step-num">
          {isStepDone ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            currentStep + 1
          )}
        </div>
        <h2 className="projeto__step-title">{step?.title}</h2>
        {isStepDone && <span className="projeto__step-done-badge">Concluído</span>}
      </div>

      {/* ── Body ── */}
      {isLocal ? (
        <LocalStep
          key={step?.id}
          step={step}
          isStepDone={isStepDone}
          onMarkDone={markStepDone}
          onMarkUndone={markStepUndone}
        />
      ) : (
        <div className="projeto__body">
          {/* Left: explanation */}
          <div className="projeto__left">
            <div className="projeto__explanation-wrap">
              {step && <Explanation text={step.explanation} />}
            </div>

            {showHint && step?.hint && (
              <div className="projeto__hint">
                <div className="projeto__hint-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  Dica
                </div>
                <code>{step.hint}</code>
              </div>
            )}

            {showSolution && step?.solution && (
              <div className="projeto__solution">
                <div className="projeto__solution-label">Solução</div>
                <pre><code>{step.solution}</code></pre>
              </div>
            )}

            <div className="projeto__left-actions">
              {step?.hint && (
                <button className="projeto__hint-btn" onClick={() => setShowHint((v) => !v)}>
                  {showHint ? 'Ocultar dica' : 'Ver dica'}
                </button>
              )}
              {step?.solution && (
                <button className="projeto__solution-btn" onClick={() => setShowSolution((v) => !v)}>
                  {showSolution ? 'Ocultar solução' : 'Ver solução'}
                </button>
              )}
            </div>
          </div>

          {/* Right: editor + preview */}
          <div className="projeto__right">
            <div className="projeto__editor-wrap">
              <div className="projeto__pane">
                <div className="projeto__pane-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                  Código
                </div>
                <textarea
                  className="projeto__textarea"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Tab') {
                      e.preventDefault()
                      const el = e.target
                      const start = el.selectionStart
                      const end = el.selectionEnd
                      const next = code.slice(0, start) + '  ' + code.slice(end)
                      setCode(next)
                      requestAnimationFrame(() => {
                        el.selectionStart = el.selectionEnd = start + 2
                      })
                    }
                  }}
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div className="projeto__pane">
                <div className="projeto__pane-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  Preview
                </div>
                <iframe
                  ref={iframeRef}
                  className="projeto__preview"
                  title="preview"
                  sandbox="allow-scripts"
                  srcDoc={step?.starterCode}
                />
              </div>
            </div>

            {feedback && (
              <div className={`projeto__feedback projeto__feedback--${feedback.type}`}>
                {feedback.type === 'success' ? (
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                )}
                {feedback.message}
              </div>
            )}

            <div className="projeto__toolbar">
              <button className="projeto__btn projeto__btn--run" onClick={runCode}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Executar
              </button>
              <button className="projeto__btn projeto__btn--verify" onClick={verifyCode}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Verificar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation ── */}
      <div className="projeto__nav">
        <button className="projeto__nav-btn" onClick={goPrev} disabled={currentStep === 0}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Anterior
        </button>

        {currentStep < project.steps.length - 1 ? (
          <button className="projeto__nav-btn projeto__nav-btn--next" onClick={goNext}>
            Próximo passo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <button className="projeto__nav-btn projeto__nav-btn--finish" onClick={() => navigate('/projetos')}>
            {allDone ? 'Projeto concluído!' : 'Finalizar projeto'}
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </main>
  )
}
