import { createContext, useContext, useState, useCallback } from 'react'
import { MODULES } from '../data/modules'

const ProgressContext = createContext(null)

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('course_progress')
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    // Convert arrays back to Sets
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

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(loadFromStorage)

  const completeTask = useCallback((moduleId, taskId) => {
    setCompleted((prev) => {
      const next = { ...prev }
      if (!next[moduleId]) next[moduleId] = new Set()
      else next[moduleId] = new Set(next[moduleId])
      next[moduleId].add(taskId)
      saveToStorage(next)
      return next
    })
  }, [])

  const isTaskDone = useCallback(
    (moduleId, taskId) => {
      return completed[moduleId]?.has(taskId) ?? false
    },
    [completed]
  )

  const isModuleDone = useCallback(
    (moduleId) => {
      const mod = MODULES.find((m) => m.id === moduleId)
      if (!mod) return false
      return mod.tasks.every((t) => completed[moduleId]?.has(t.id))
    },
    [completed]
  )

  const isModuleUnlocked = useCallback(
    (moduleId) => {
      const index = MODULES.findIndex((m) => m.id === moduleId)
      if (index === 0) return true
      const prev = MODULES[index - 1]
      return isModuleDone(prev.id)
    },
    [isModuleDone]
  )

  return (
    <ProgressContext.Provider value={{ completed, completeTask, isTaskDone, isModuleDone, isModuleUnlocked }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
