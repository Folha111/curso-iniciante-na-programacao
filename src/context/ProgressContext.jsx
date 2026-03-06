import { createContext, useContext, useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { useModules } from './ModulesContext'
import { useAuth } from './AuthContext'

const ProgressContext = createContext(null)

// ─── XP Table ────────────────────────────────────────────────────────────────
const XP_TABLE = { quiz: 10, fill: 10, code: 15, type: 15, bug: 20, drag: 20 }
const DEFAULT_XP = 10

// ─── Badge Definitions ────────────────────────────────────────────────────────
export const BADGE_DEFS = [
  { id: 'first-task',     name: 'Primeiros Passos', desc: 'Complete sua primeira tarefa',       icon: '🌱' },
  { id: 'fifty-xp',       name: 'Em Progresso',     desc: 'Acumule 50 XP',                      icon: '⚡' },
  { id: 'hundred-xp',     name: 'Dedicado',          desc: 'Acumule 100 XP',                     icon: '🔥' },
  { id: 'two-hundred-xp', name: 'Especialista',      desc: 'Acumule 200 XP',                     icon: '💎' },
  { id: 'five-hundred-xp',name: 'Lenda',             desc: 'Acumule 500 XP',                     icon: '👑' },
  { id: 'streak-3',       name: 'Sequência de 3',    desc: '3 dias consecutivos de estudo',      icon: '📅' },
  { id: 'streak-7',       name: 'Sequência de 7',    desc: '7 dias consecutivos de estudo',      icon: '🗓' },
  { id: 'all-modules',    name: 'Mestre HTML',       desc: 'Conclua todos os módulos',           icon: '🏆' },
  { id: 'bug-hunter',     name: 'Caçador de Bugs',   desc: 'Complete uma tarefa de Bug',         icon: '🐛' },
  { id: 'speed-typer',    name: 'Velocista',         desc: 'Complete uma tarefa de Digitação',   icon: '⌨️' },
  { id: 'drag-master',    name: 'Ordenador',         desc: 'Complete uma tarefa de Arrastar',    icon: '🧩' },
]

function checkBadge(id, { xp, streak, doneModules, totalModules, types }) {
  switch (id) {
    case 'first-task':      return xp >= DEFAULT_XP
    case 'fifty-xp':        return xp >= 50
    case 'hundred-xp':      return xp >= 100
    case 'two-hundred-xp':  return xp >= 200
    case 'five-hundred-xp': return xp >= 500
    case 'streak-3':        return streak >= 3
    case 'streak-7':        return streak >= 7
    case 'all-modules':     return totalModules > 0 && doneModules >= totalModules
    case 'bug-hunter':      return types.has('bug')
    case 'speed-typer':     return types.has('type')
    case 'drag-master':     return types.has('drag')
    default:                return false
  }
}

// ─── Storage helpers ──────────────────────────────────────────────────────────
function loadFromStorage() {
  try {
    const raw = localStorage.getItem('course_progress')
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    const result = {}
    for (const [moduleId, tasks] of Object.entries(parsed)) {
      result[moduleId] = new Set(tasks)
    }
    return result
  } catch {
    return {}
  }
}

function saveToStorage(completed) {
  try {
    const serializable = {}
    for (const [moduleId, taskSet] of Object.entries(completed)) {
      serializable[moduleId] = Array.from(taskSet)
    }
    localStorage.setItem('course_progress', JSON.stringify(serializable))
  } catch {
    // ignore
  }
}

function loadGamification() {
  try {
    const raw = localStorage.getItem('gamification')
    if (!raw) return { xp: 0, streak: 0, lastActiveDate: null }
    return JSON.parse(raw)
  } catch {
    return { xp: 0, streak: 0, lastActiveDate: null }
  }
}

function saveGamification(data) {
  try { localStorage.setItem('gamification', JSON.stringify(data)) } catch {}
}

function loadWrongAnswers() {
  try {
    const raw = localStorage.getItem('wrong_answers')
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function saveWrongAnswers(set) {
  try { localStorage.setItem('wrong_answers', JSON.stringify(Array.from(set))) } catch {}
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function ProgressProvider({ children }) {
  const { modules } = useModules()
  const { user } = useAuth()
  const [completed, setCompleted] = useState(loadFromStorage)
  const [gamification, setGamification] = useState(loadGamification)
  const [wrongAnswers, setWrongAnswers] = useState(loadWrongAnswers)

  // Ref to track completed without stale closures
  const completedRef = useRef(completed)
  useEffect(() => { completedRef.current = completed }, [completed])

  // Update leaderboard whenever xp changes
  useEffect(() => {
    if (!user) return
    try {
      const raw = localStorage.getItem('leaderboard_data')
      const data = raw ? JSON.parse(raw) : {}
      data[user.email] = { name: user.name, xp: gamification.xp }
      localStorage.setItem('leaderboard_data', JSON.stringify(data))
    } catch {}
  }, [user, gamification.xp])

  const completeTask = useCallback((moduleId, taskId) => {
    if (completedRef.current[moduleId]?.has(taskId)) return

    setCompleted((prev) => {
      const next = { ...prev }
      if (!next[moduleId]) next[moduleId] = new Set()
      else next[moduleId] = new Set(next[moduleId])
      next[moduleId].add(taskId)
      saveToStorage(next)
      return next
    })

    // Find task type for XP
    const mod = modules.find((m) => m.id === moduleId)
    const task = mod?.tasks.find((t) => t.id === taskId)
    const xpEarned = XP_TABLE[task?.type] ?? DEFAULT_XP

    setGamification((prev) => {
      const today = new Date().toDateString()
      const lastDate = prev.lastActiveDate
      let newStreak = prev.streak
      if (lastDate !== today) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        newStreak = lastDate === yesterday.toDateString() ? prev.streak + 1 : 1
      }
      const next = { xp: prev.xp + xpEarned, streak: newStreak, lastActiveDate: today }
      saveGamification(next)
      return next
    })

    // Remove from review queue if completed
    setWrongAnswers((prev) => {
      const key = `${moduleId}:${taskId}`
      if (!prev.has(key)) return prev
      const next = new Set(prev)
      next.delete(key)
      saveWrongAnswers(next)
      return next
    })
  }, [modules])

  const trackWrong = useCallback((moduleId, taskId) => {
    setWrongAnswers((prev) => {
      const key = `${moduleId}:${taskId}`
      if (prev.has(key)) return prev
      const next = new Set(prev)
      next.add(key)
      saveWrongAnswers(next)
      return next
    })
  }, [])

  const isTaskDone = useCallback(
    (moduleId, taskId) => completed[moduleId]?.has(taskId) ?? false,
    [completed]
  )

  const isModuleDone = useCallback(
    (moduleId) => {
      const mod = modules.find((m) => m.id === moduleId)
      if (!mod) return false
      return mod.tasks.every((t) => completed[moduleId]?.has(t.id))
    },
    [completed, modules]
  )

  const isModuleUnlocked = useCallback(
    (moduleId) => {
      if (user?.role === 'admin') return true
      const index = modules.findIndex((m) => m.id === moduleId)
      if (index === 0) return true
      const prev = modules[index - 1]
      return isModuleDone(prev.id)
    },
    [isModuleDone, modules, user]
  )

  const badges = useMemo(() => {
    const types = new Set()
    for (const [moduleId, taskSet] of Object.entries(completed)) {
      const mod = modules.find((m) => m.id === moduleId)
      if (!mod) continue
      for (const taskId of taskSet) {
        const task = mod.tasks.find((t) => t.id === taskId)
        if (task) types.add(task.type)
      }
    }
    const doneModules = modules.filter((m) => isModuleDone(m.id)).length
    const checkData = {
      xp: gamification.xp,
      streak: gamification.streak,
      doneModules,
      totalModules: modules.length,
      types,
    }
    return BADGE_DEFS.map((b) => ({ ...b, unlocked: checkBadge(b.id, checkData) }))
  }, [completed, gamification, modules, isModuleDone])

  const reviewQueue = useMemo(() => {
    const queue = []
    for (const key of wrongAnswers) {
      const [moduleId, taskId] = key.split(':')
      if (!isTaskDone(moduleId, taskId)) {
        const mod = modules.find((m) => m.id === moduleId)
        const task = mod?.tasks.find((t) => t.id === taskId)
        if (mod && task) {
          queue.push({ moduleId, taskId, moduleTitle: mod.title, taskTitle: task.title })
        }
      }
    }
    return queue
  }, [wrongAnswers, isTaskDone, modules])

  function resetProgress() {
    localStorage.removeItem('course_progress')
    localStorage.removeItem('gamification')
    localStorage.removeItem('wrong_answers')
    setCompleted({})
    setGamification({ xp: 0, streak: 0, lastActiveDate: null })
    setWrongAnswers(new Set())
  }

  return (
    <ProgressContext.Provider value={{
      completed, completeTask, isTaskDone, isModuleDone, isModuleUnlocked, resetProgress,
      xp: gamification.xp,
      streak: gamification.streak,
      badges,
      reviewQueue,
      trackWrong,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
