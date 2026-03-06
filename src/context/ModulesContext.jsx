import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { MODULES as STATIC_MODULES, STAGES } from '../data/modules'

const ModulesContext = createContext(null)

function loadOverrides() {
  try {
    const raw = localStorage.getItem('modules_overrides')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function loadExtraTasks() {
  try {
    const raw = localStorage.getItem('modules_extra_tasks')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function loadNewModules() {
  try {
    const raw = localStorage.getItem('modules_new')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function ModulesProvider({ children }) {
  const [overrides, setOverrides] = useState(loadOverrides)
  const [extraTasks, setExtraTasks] = useState(loadExtraTasks)
  const [newModules, setNewModules] = useState(loadNewModules)

  // Computed merged modules
  const modules = useMemo(() => {
    const staticMerged = STATIC_MODULES.map((mod) => {
      const override = overrides[mod.id] || {}
      const extras = extraTasks[mod.id] || []
      return {
        ...mod,
        ...override,
        tasks: [...mod.tasks, ...extras],
      }
    })
    return [...staticMerged, ...newModules]
  }, [overrides, extraTasks, newModules])

  const updateModuleMeta = useCallback((moduleId, fields) => {
    setOverrides((prev) => {
      const next = { ...prev, [moduleId]: { ...(prev[moduleId] || {}), ...fields } }
      localStorage.setItem('modules_overrides', JSON.stringify(next))
      return next
    })
  }, [])

  const addTaskToModule = useCallback((moduleId, task) => {
    setExtraTasks((prev) => {
      const existing = prev[moduleId] || []
      const next = { ...prev, [moduleId]: [...existing, task] }
      localStorage.setItem('modules_extra_tasks', JSON.stringify(next))
      return next
    })
  }, [])

  const removeExtraTask = useCallback((moduleId, taskId) => {
    setExtraTasks((prev) => {
      const existing = prev[moduleId] || []
      const next = { ...prev, [moduleId]: existing.filter((t) => t.id !== taskId) }
      localStorage.setItem('modules_extra_tasks', JSON.stringify(next))
      return next
    })
  }, [])

  const addModule = useCallback((moduleData) => {
    setNewModules((prev) => {
      const next = [...prev, moduleData]
      localStorage.setItem('modules_new', JSON.stringify(next))
      return next
    })
  }, [])

  const removeModule = useCallback((moduleId) => {
    setNewModules((prev) => {
      const next = prev.filter((m) => m.id !== moduleId)
      localStorage.setItem('modules_new', JSON.stringify(next))
      return next
    })
  }, [])

  const resetModules = useCallback(() => {
    localStorage.removeItem('modules_overrides')
    localStorage.removeItem('modules_extra_tasks')
    localStorage.removeItem('modules_new')
    setOverrides({})
    setExtraTasks({})
    setNewModules([])
  }, [])

  const isStaticModule = useCallback(
    (moduleId) => STATIC_MODULES.some((m) => m.id === moduleId),
    []
  )

  const value = useMemo(
    () => ({ modules, stages: STAGES, updateModuleMeta, addTaskToModule, removeExtraTask, addModule, removeModule, resetModules, isStaticModule, extraTasks }),
    [modules, updateModuleMeta, addTaskToModule, removeExtraTask, addModule, removeModule, resetModules, isStaticModule, extraTasks]
  )

  return (
    <ModulesContext.Provider value={value}>
      {children}
    </ModulesContext.Provider>
  )
}

export function useModules() {
  const ctx = useContext(ModulesContext)
  if (!ctx) throw new Error('useModules must be used inside ModulesProvider')
  return ctx
}
