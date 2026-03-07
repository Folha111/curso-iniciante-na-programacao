import { useState, useEffect, useRef, useCallback } from 'react'
import { useLang } from '../context/LangContext'
import './Foco.css'

const MODES = {
  focus:       { labelPt: 'Foco',        labelEn: 'Focus',       default: 25, color: 'var(--color-accent)' },
  short_break: { labelPt: 'Pausa curta', labelEn: 'Short break', default: 5,  color: '#10b981' },
  long_break:  { labelPt: 'Pausa longa', labelEn: 'Long break',  default: 15, color: '#f97316' },
}

const SESSIONS_BEFORE_LONG = 4

function loadFocoSettings() {
  try {
    const raw = localStorage.getItem('foco_settings')
    return raw ? JSON.parse(raw) : { focus: 25, short_break: 5, long_break: 15 }
  } catch {
    return { focus: 25, short_break: 5, long_break: 15 }
  }
}

function loadFocoStats() {
  try {
    const raw = localStorage.getItem('foco_stats')
    return raw ? JSON.parse(raw) : { totalSessions: 0, todaySessions: 0, lastDate: null }
  } catch {
    return { totalSessions: 0, todaySessions: 0, lastDate: null }
  }
}

function saveFocoStats(stats) {
  localStorage.setItem('foco_stats', JSON.stringify(stats))
}

const RADIUS = 110
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function Foco() {
  const { lang } = useLang()
  const [durations, setDurations] = useState(loadFocoSettings)
  const [mode, setMode] = useState('focus')
  const [secondsLeft, setSecondsLeft] = useState(durations.focus * 60)
  const [running, setRunning] = useState(false)
  const [sessionCount, setSessionCount] = useState(0)
  const [stats, setStats] = useState(loadFocoStats)
  const [showSettings, setShowSettings] = useState(false)
  const [settingsInput, setSettingsInput] = useState({ ...durations })
  const [finished, setFinished] = useState(false)

  const intervalRef = useRef(null)
  const audioCtxRef = useRef(null)

  const totalSeconds = durations[mode] * 60
  const progress = secondsLeft / totalSeconds
  const dashOffset = CIRCUMFERENCE * (1 - progress)

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const secs = String(secondsLeft % 60).padStart(2, '0')

  const modeLabel = lang === 'en' ? MODES[mode].labelEn : MODES[mode].labelPt
  const modeColor = MODES[mode].color

  const playBeep = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      audioCtxRef.current = ctx
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = 880
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.4, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.8)
    } catch {}
  }, [])

  const switchMode = useCallback((nextMode, nextSessionCount) => {
    setMode(nextMode)
    setSecondsLeft(durations[nextMode] * 60)
    setRunning(false)
    setFinished(true)
    setTimeout(() => setFinished(false), 2000)

    if (nextMode === 'focus') return

    // Completed a focus session
    const today = new Date().toDateString()
    setStats((prev) => {
      const isSameDay = prev.lastDate === today
      const next = {
        totalSessions: prev.totalSessions + 1,
        todaySessions: isSameDay ? prev.todaySessions + 1 : 1,
        lastDate: today,
      }
      saveFocoStats(next)
      return next
    })
  }, [durations])

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          playBeep()
          if ('Notification' in window && Notification.permission === 'granted') {
            const msg = mode === 'focus'
              ? (lang === 'en' ? 'Focus session complete! Time for a break.' : 'Sessão de foco completa! Hora de descansar.')
              : (lang === 'en' ? 'Break over! Ready to focus?' : 'Pausa encerrada! Pronto para focar?')
            new Notification('Modo Foco', { body: msg, icon: '/favicon.ico' })
          }
          const newCount = mode === 'focus' ? sessionCount + 1 : sessionCount
          setSessionCount(newCount)
          const nextMode = mode !== 'focus'
            ? 'focus'
            : newCount % SESSIONS_BEFORE_LONG === 0
              ? 'long_break'
              : 'short_break'
          switchMode(nextMode, newCount)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running, mode, sessionCount, switchMode, playBeep, lang])

  function handleModeChange(m) {
    clearInterval(intervalRef.current)
    setMode(m)
    setSecondsLeft(durations[m] * 60)
    setRunning(false)
  }

  function handleToggle() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
    setRunning((v) => !v)
  }

  function handleReset() {
    clearInterval(intervalRef.current)
    setRunning(false)
    setSecondsLeft(durations[mode] * 60)
  }

  function handleSaveSettings(e) {
    e.preventDefault()
    const next = {
      focus: Math.max(1, Math.min(90, Number(settingsInput.focus))),
      short_break: Math.max(1, Math.min(30, Number(settingsInput.short_break))),
      long_break: Math.max(1, Math.min(60, Number(settingsInput.long_break))),
    }
    setDurations(next)
    localStorage.setItem('foco_settings', JSON.stringify(next))
    setSecondsLeft(next[mode] * 60)
    setRunning(false)
    setShowSettings(false)
  }

  const todayLabel  = lang === 'en' ? 'Today' : 'Hoje'
  const totalLabel  = lang === 'en' ? 'Total sessions' : 'Total de sessões'
  const startLabel  = lang === 'en' ? 'Start' : 'Iniciar'
  const pauseLabel  = lang === 'en' ? 'Pause' : 'Pausar'
  const resetLabel  = lang === 'en' ? 'Reset' : 'Reiniciar'
  const settingsLabel = lang === 'en' ? 'Settings' : 'Configurar'
  const sessionLabel  = lang === 'en' ? 'Session' : 'Sessão'
  const minutesLabel  = lang === 'en' ? 'min' : 'min'
  const saveLabel     = lang === 'en' ? 'Save' : 'Salvar'
  const cancelLabel   = lang === 'en' ? 'Cancel' : 'Cancelar'
  const focusTitle    = lang === 'en' ? 'Focus Mode' : 'Modo Foco'
  const focusSub      = lang === 'en' ? 'Stay focused and get things done.' : 'Mantenha o foco e seja produtivo.'

  return (
    <main className="foco">
      {/* Header */}
      <div className="foco__header">
        <div>
          <h1 className="foco__title">{focusTitle}</h1>
          <p className="foco__subtitle">{focusSub}</p>
        </div>
        <button className="foco__settings-btn" onClick={() => setShowSettings(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
          {settingsLabel}
        </button>
      </div>

      {/* Mode tabs */}
      <div className="foco__modes">
        {Object.entries(MODES).map(([key, val]) => (
          <button
            key={key}
            className={`foco__mode-btn ${mode === key ? 'foco__mode-btn--active' : ''}`}
            style={mode === key ? { '--mode-color': val.color } : {}}
            onClick={() => handleModeChange(key)}
          >
            {lang === 'en' ? val.labelEn : val.labelPt}
          </button>
        ))}
      </div>

      {/* Timer ring */}
      <div className={`foco__ring-wrap ${finished ? 'foco__ring-wrap--done' : ''}`}>
        <svg className="foco__ring-svg" viewBox="0 0 260 260" width="260" height="260">
          {/* Track */}
          <circle
            cx="130" cy="130" r={RADIUS}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="10"
          />
          {/* Progress */}
          <circle
            cx="130" cy="130" r={RADIUS}
            fill="none"
            stroke={modeColor}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 130 130)"
            style={{ transition: running ? 'stroke-dashoffset 1s linear' : 'none' }}
          />
        </svg>

        <div className="foco__timer-inner">
          <p className="foco__mode-label" style={{ color: modeColor }}>{modeLabel}</p>
          <p className="foco__time">{mins}:{secs}</p>
          <p className="foco__session-count">{sessionLabel} {sessionCount + 1}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="foco__controls">
        <button className="foco__ctrl-btn foco__ctrl-btn--secondary" onClick={handleReset} disabled={secondsLeft === durations[mode] * 60 && !running}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
          </svg>
          {resetLabel}
        </button>

        <button
          className="foco__ctrl-btn foco__ctrl-btn--primary"
          style={{ '--btn-color': modeColor }}
          onClick={handleToggle}
        >
          {running ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
              {pauseLabel}
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {startLabel}
            </>
          )}
        </button>
      </div>

      {/* Session dots */}
      <div className="foco__dots">
        {Array.from({ length: SESSIONS_BEFORE_LONG }).map((_, i) => (
          <span
            key={i}
            className={`foco__dot ${i < sessionCount % SESSIONS_BEFORE_LONG || (sessionCount > 0 && sessionCount % SESSIONS_BEFORE_LONG === 0 && i < SESSIONS_BEFORE_LONG) ? 'foco__dot--done' : ''}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="foco__stats">
        <div className="foco__stat">
          <p className="foco__stat-value">{stats.todaySessions}</p>
          <p className="foco__stat-label">{todayLabel}</p>
        </div>
        <div className="foco__stat-divider" />
        <div className="foco__stat">
          <p className="foco__stat-value">{stats.totalSessions}</p>
          <p className="foco__stat-label">{totalLabel}</p>
        </div>
      </div>

      {/* Settings modal */}
      {showSettings && (
        <div className="foco__overlay" onClick={() => setShowSettings(false)}>
          <div className="foco__modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="foco__modal-title">{settingsLabel}</h2>
            <form onSubmit={handleSaveSettings} className="foco__modal-form">
              {[
                { key: 'focus',       label: lang === 'en' ? 'Focus (min)' : 'Foco (min)',        max: 90 },
                { key: 'short_break', label: lang === 'en' ? 'Short break (min)' : 'Pausa curta (min)', max: 30 },
                { key: 'long_break',  label: lang === 'en' ? 'Long break (min)' : 'Pausa longa (min)',  max: 60 },
              ].map(({ key, label, max }) => (
                <div key={key} className="foco__modal-field">
                  <label className="foco__modal-label">{label}</label>
                  <input
                    className="foco__modal-input"
                    type="number"
                    min="1"
                    max={max}
                    value={settingsInput[key]}
                    onChange={(e) => setSettingsInput((p) => ({ ...p, [key]: e.target.value }))}
                  />
                </div>
              ))}
              <div className="foco__modal-actions">
                <button type="button" className="btn btn--ghost" onClick={() => setShowSettings(false)}>{cancelLabel}</button>
                <button type="submit" className="btn btn--primary">{saveLabel}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
