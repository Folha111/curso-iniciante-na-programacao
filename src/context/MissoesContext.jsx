import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { useProgress } from './ProgressContext'

const MissoesContext = createContext(null)

// ─── Pool de missões disponíveis ────────────────────────────────────────────
const MISSION_POOL = [
  { id: 'tasks-2',  type: 'tasks',  icon: '📝', label: 'Complete 2 tarefas hoje',      target: 2,   xpBonus: 20 },
  { id: 'tasks-3',  type: 'tasks',  icon: '📝', label: 'Complete 3 tarefas hoje',      target: 3,   xpBonus: 30 },
  { id: 'tasks-5',  type: 'tasks',  icon: '📝', label: 'Complete 5 tarefas hoje',      target: 5,   xpBonus: 50 },
  { id: 'xp-30',    type: 'xp',    icon: '⚡', label: 'Ganhe 30 XP hoje',             target: 30,  xpBonus: 15 },
  { id: 'xp-50',    type: 'xp',    icon: '⚡', label: 'Ganhe 50 XP hoje',             target: 50,  xpBonus: 25 },
  { id: 'xp-100',   type: 'xp',    icon: '⚡', label: 'Ganhe 100 XP hoje',            target: 100, xpBonus: 50 },
  { id: 'quiz',     type: 'tipo',  icon: '🧠', label: 'Complete 1 quiz',               target: 1,   xpBonus: 15 },
  { id: 'bug',      type: 'tipo',  icon: '🐛', label: 'Encontre 1 bug',                target: 1,   xpBonus: 20 },
  { id: 'drag',     type: 'tipo',  icon: '🧩', label: 'Complete 1 tarefa de arrastar', target: 1,   xpBonus: 15 },
  { id: 'code',     type: 'tipo',  icon: '💻', label: 'Escreva 1 código',              target: 1,   xpBonus: 20 },
  { id: 'streak',   type: 'streak',icon: '🔥', label: 'Estude qualquer coisa hoje',    target: 1,   xpBonus: 10 },
]

// Gerador de número pseudoaleatório com seed (mesmo dia = mesmas missões)
function seededRand(seed) {
  let s = seed
  return () => {
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b)
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b)
    s = s ^ (s >>> 16)
    return (s >>> 0) / 0xffffffff
  }
}

function getDailyMissions(dateStr) {
  const seed = dateStr.split('').reduce((a, c) => a + c.charCodeAt(0), 0) * 31337
  const rand = seededRand(seed)
  const pool = [...MISSION_POOL]
  const selected = []
  while (selected.length < 3 && pool.length > 0) {
    const idx = Math.floor(rand() * pool.length)
    selected.push(pool.splice(idx, 1)[0])
  }
  return selected
}

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadState(today) {
  try {
    const raw = localStorage.getItem('daily_missions')
    if (!raw) return { date: today, rewardClaimed: false }
    const saved = JSON.parse(raw)
    if (typeof saved !== 'object' || saved === null) throw new Error('invalid')
    if (saved.date !== today) return { date: today, rewardClaimed: false }
    return saved
  } catch {
    return { date: today, rewardClaimed: false }
  }
}

function saveState(state) {
  try { localStorage.setItem('daily_missions', JSON.stringify(state)) } catch {}
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function MissoesProvider({ children }) {
  const today = new Date().toDateString()
  const { todayXp, todayTaskCount, todayTaskTypes, streak, addBonusXp, incrementMissionsDone } = useProgress()

  const [state, setState] = useState(() => loadState(today))

  const templates = useMemo(() => getDailyMissions(today), [today])

  const missions = useMemo(() => {
    return templates.map(m => {
      let current = 0
      switch (m.type) {
        case 'tasks':  current = todayTaskCount; break
        case 'xp':     current = todayXp; break
        case 'streak': current = streak >= 1 ? 1 : 0; break
        case 'tipo': {
          const taskType = m.id // 'quiz', 'bug', 'drag', 'code'
          current = todayTaskTypes.includes(taskType) ? 1 : 0
          break
        }
      }
      return { ...m, current: Math.min(current, m.target), completed: current >= m.target }
    })
  }, [templates, todayXp, todayTaskCount, todayTaskTypes, streak])

  const allCompleted = missions.every(m => m.completed)
  const totalBonus   = missions.reduce((a, m) => a + m.xpBonus, 0) + 50 // +50 bônus por completar tudo

  const claimReward = useCallback(() => {
    if (!allCompleted || state.rewardClaimed) return
    addBonusXp(totalBonus)
    incrementMissionsDone()
    setState(prev => {
      const next = { ...prev, rewardClaimed: true }
      saveState(next)
      return next
    })
  }, [allCompleted, state.rewardClaimed, totalBonus, addBonusXp, incrementMissionsDone])

  return (
    <MissoesContext.Provider value={{ missions, allCompleted, rewardClaimed: state.rewardClaimed, totalBonus, claimReward }}>
      {children}
    </MissoesContext.Provider>
  )
}

export function useMissoes() {
  const ctx = useContext(MissoesContext)
  if (!ctx) throw new Error('useMissoes must be used inside MissoesProvider')
  return ctx
}
