import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Modulos.css'

// ── SVG path constants ──────────────────────────────────────
const SVG_W   = 400            // viewBox width
const NODE_R  = 44             // circle radius (88px diameter)
const Y_GAP   = 200            // vertical gap between node centers (must fit: 88 circle + label + cta + gap)
const MS_H    = 124            // height consumed by milestone banner (68px banner + 56px clearance)
// Zigzag x positions (wave pattern across 400-unit viewBox)
const X_WAVE  = [200, 310, 280, 190, 110, 90, 130, 200, 310]

function pathSeg(a, b) {
  const midY = (a.y + b.y) / 2
  return `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`
}

// ── Duolingo-style map ──────────────────────────────────────
function MapaDuolingo({ MODULES, STAGES, isTaskDone, isModuleDone, isModuleUnlocked, navigate }) {
  const stagesWithMods = STAGES
    .map(s => ({ stage: s, mods: MODULES.filter(m => m.stageId === s.id) }))
    .filter(({ mods }) => mods.length > 0)

  // Build items list with absolute y positions
  const items = []
  let y = 52
  let ni = 0

  stagesWithMods.forEach(({ stage, mods }) => {
    items.push({ type: 'ms', stage, y })
    y += MS_H
    mods.forEach(mod => {
      items.push({ type: 'node', mod, stage, x: X_WAVE[ni % X_WAVE.length], y })
      y += Y_GAP
      ni++
    })
  })

  const totalH = y + 60
  const nodes  = items.filter(i => i.type === 'node')

  // Full background path (grey)
  const fullPath = nodes.length > 1
    ? nodes.slice(1).reduce((d, n, i) => {
        const prev  = nodes[i]
        const midY  = (prev.y + n.y) / 2
        return `${d} C ${prev.x} ${midY}, ${n.x} ${midY}, ${n.x} ${n.y}`
      }, `M ${nodes[0].x} ${nodes[0].y}`)
    : ''

  return (
    <div className="duo-map">
      <div className="duo-map__canvas" style={{ height: totalH }}>

        {/* ── SVG Trail ── */}
        <svg
          className="duo-map__svg"
          viewBox={`0 0 ${SVG_W} ${totalH}`}
          preserveAspectRatio="none"
          width="100%"
          height={totalH}
        >
          <defs>
            <linearGradient id="duo-half" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e"/>
              <stop offset="100%" stopColor="#d1d5db"/>
            </linearGradient>
          </defs>

          {/* Background path */}
          <path
            d={fullPath}
            fill="none"
            stroke="#d1d5db"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Completed / in-progress segments */}
          {nodes.slice(1).map((node, i) => {
            const prev     = nodes[i]
            const prevDone = isModuleDone(prev.mod.id)
            if (!prevDone) return null
            const bothDone = isModuleDone(node.mod.id)
            return (
              <path
                key={i}
                d={pathSeg(prev, node)}
                fill="none"
                stroke={bothDone ? '#22c55e' : 'url(#duo-half)'}
                strokeWidth="18"
                strokeLinecap="round"
              />
            )
          })}
        </svg>

        {/* ── Items (milestones + nodes) ── */}
        {items.map((item, i) => {

          /* ── Milestone banner ── */
          if (item.type === 'ms') {
            const { stage } = item
            const mods = stagesWithMods.find(s => s.stage.id === stage.id)?.mods ?? []
            const done = mods.reduce((a, m) => a + m.tasks.filter(t => isTaskDone(m.id, t.id)).length, 0)
            const total = mods.reduce((a, m) => a + m.tasks.length, 0)
            const complete = total > 0 && done === total
            return (
              <div
                key={i}
                className="duo-map__milestone"
                style={{ top: item.y, '--sc': stage.color }}
              >
                <span className="duo-map__ms-icon">{stage.icon}</span>
                <div className="duo-map__ms-info">
                  <strong className="duo-map__ms-name">{stage.name}</strong>
                  <span className="duo-map__ms-sub">{stage.subtitle}</span>
                </div>
                <span className={`duo-map__ms-badge ${complete ? 'duo-map__ms-badge--done' : ''}`}>
                  {complete
                    ? <><svg viewBox="0 0 14 14" fill="none" width="10" height="10"><path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg> Completo</>
                    : `${done}/${total}`}
                </span>
              </div>
            )
          }

          /* ── Module node ── */
          const { mod, stage, x } = item
          const done      = isModuleDone(mod.id)
          const unlocked  = isModuleUnlocked(mod.id)
          const tasksDone = mod.tasks.filter(t => isTaskDone(mod.id, t.id)).length
          const pct       = mod.tasks.length > 0 ? Math.round(tasksDone / mod.tasks.length * 100) : 0
          const isNext    = unlocked && !done && tasksDone === 0
          const inProg    = unlocked && !done && tasksDone > 0

          const nc = done ? '#22c55e' : !unlocked ? '#94a3b8' : stage.color

          return (
            <button
              key={i}
              className={[
                'duo-map__node',
                done     && 'duo-map__node--done',
                !unlocked && 'duo-map__node--locked',
                isNext   && 'duo-map__node--next',
                inProg   && 'duo-map__node--progress',
              ].filter(Boolean).join(' ')}
              style={{
                top : item.y - NODE_R,
                left: `calc(${(x / SVG_W) * 100}% - 65px)`,
                '--nc': nc,
              }}
              disabled={!unlocked}
              onClick={() => navigate(`/modulo/${mod.id}`)}
            >
              <div className="duo-map__node-circle">
                {done ? (
                  <svg viewBox="0 0 24 24" fill="none" width="38" height="38">
                    <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : !unlocked ? (
                  <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                ) : (
                  <span className="duo-map__node-num">{mod.number}</span>
                )}
              </div>

              <span className="duo-map__node-label">{mod.title}</span>

              {(isNext || inProg) && (
                <span className="duo-map__node-cta">
                  {inProg ? `${pct}%` : 'Começar'}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────
export default function Modulos() {
  const navigate = useNavigate()
  const { isTaskDone, isModuleDone, isModuleUnlocked } = useProgress()
  const { modules: MODULES, stages: STAGES } = useModules()
  const [view, setView] = useState('map')

  const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
  const doneTasks  = MODULES.reduce(
    (acc, m) => acc + m.tasks.filter(t => isTaskDone(m.id, t.id)).length,
    0
  )
  const overallPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return (
    <main className="modulos">
      <div className="modulos__header">
        <div>
          <h1 className="modulos__title">Módulos</h1>
          <p className="modulos__sub">{doneTasks} de {totalTasks} tarefas concluídas</p>
        </div>
        <div className="modulos__header-right">
          <div className="modulos__overall-bar">
            <div className="modulos__overall-fill" style={{ width: `${overallPct}%` }} />
          </div>
          <div className="modulos__view-toggle">
            <button
              className={`modulos__view-btn ${view === 'map' ? 'modulos__view-btn--active' : ''}`}
              onClick={() => setView('map')}
            >
              <svg viewBox="0 0 18 18" fill="none" width="14" height="14">
                <circle cx="9" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
                <circle cx="14" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
                <circle cx="4" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
                <path d="M9 6.5v2l3 2M9 8.5l-3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Mapa
            </button>
            <button
              className={`modulos__view-btn ${view === 'list' ? 'modulos__view-btn--active' : ''}`}
              onClick={() => setView('list')}
            >
              <svg viewBox="0 0 18 18" fill="none" width="14" height="14">
                <rect x="2" y="3.5" width="14" height="2.5" rx="1.2" fill="currentColor" opacity=".85"/>
                <rect x="2" y="7.8" width="14" height="2.5" rx="1.2" fill="currentColor" opacity=".55"/>
                <rect x="2" y="12" width="14" height="2.5" rx="1.2" fill="currentColor" opacity=".3"/>
              </svg>
              Lista
            </button>
          </div>
        </div>
      </div>

      {view === 'map' ? (
        <div className="duo-map-wrapper">
          <MapaDuolingo
            MODULES={MODULES}
            STAGES={STAGES}
            isTaskDone={isTaskDone}
            isModuleDone={isModuleDone}
            isModuleUnlocked={isModuleUnlocked}
            navigate={navigate}
          />
        </div>
      ) : (
        <div className="modulos__stages">
          {STAGES.map((stage, stageIndex) => {
            const stageMods = MODULES.filter(m => m.stageId === stage.id)
            if (stageMods.length === 0) return null
            const stageTasks = stageMods.reduce((acc, m) => acc + m.tasks.length, 0)
            const stageDone  = stageMods.reduce((acc, m) => acc + m.tasks.filter(t => isTaskDone(m.id, t.id)).length, 0)
            const stagePct   = stageTasks > 0 ? Math.round((stageDone / stageTasks) * 100) : 0
            const stageComplete = stagePct === 100
            const stageUnlocked = stageMods.some(m => isModuleUnlocked(m.id))

            return (
              <div key={stage.id} className="modulos__stage">
                <div className="modulos__stage-header" style={{ '--stage-color': stage.color }}>
                  <div className="modulos__stage-left">
                    <div className="modulos__stage-num">{stageIndex + 1}</div>
                    <div className="modulos__stage-info">
                      <div className="modulos__stage-name-row">
                        <h2 className="modulos__stage-name">{stage.name}</h2>
                        {stageComplete && (
                          <span className="modulos__stage-badge modulos__stage-badge--done">
                            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Completo
                          </span>
                        )}
                        {!stageUnlocked && (
                          <span className="modulos__stage-badge modulos__stage-badge--locked">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                            </svg>
                            Bloqueado
                          </span>
                        )}
                      </div>
                      <p className="modulos__stage-subtitle">{stage.subtitle}</p>
                    </div>
                  </div>
                  <div className="modulos__stage-right">
                    <span className="modulos__stage-pct">{stagePct}%</span>
                    <div className="modulos__stage-bar">
                      <div className="modulos__stage-bar-fill" style={{ width: `${stagePct}%` }} />
                    </div>
                    <span className="modulos__stage-count">{stageDone}/{stageTasks} tarefas</span>
                  </div>
                </div>
                <div className="modulos__stage-modules">
                  {stageMods.map(mod => {
                    const unlocked    = isModuleUnlocked(mod.id)
                    const done        = isModuleDone(mod.id)
                    const modTasksDone = mod.tasks.filter(t => isTaskDone(mod.id, t.id)).length
                    const pct         = Math.round((modTasksDone / mod.tasks.length) * 100)
                    return (
                      <div
                        key={mod.id}
                        className={`modulos__card ${done ? 'modulos__card--done' : ''} ${!unlocked ? 'modulos__card--locked' : ''}`}
                        style={{ '--mod-color': mod.color }}
                        onClick={() => unlocked && navigate(`/modulo/${mod.id}`)}
                      >
                        <div className="modulos__card-top">
                          <div className="modulos__card-badge">{mod.number}</div>
                          {done && (
                            <span className="modulos__card-status modulos__card-status--done">
                              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Concluído
                            </span>
                          )}
                          {!unlocked && (
                            <span className="modulos__card-status modulos__card-status--locked">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                              </svg>
                              Bloqueado
                            </span>
                          )}
                        </div>
                        <div className="modulos__card-body">
                          {mod.stage && <span className="modulos__card-stage">{mod.stage}</span>}
                          <h3 className="modulos__card-title">{mod.title}</h3>
                          <p className="modulos__card-desc">{mod.description}</p>
                        </div>
                        <div className="modulos__card-footer">
                          <div className="modulos__card-meta">
                            <span className="modulos__card-count">{modTasksDone}/{mod.tasks.length} tarefas</span>
                            <span className="modulos__card-pct">{pct}%</span>
                          </div>
                          <div className="modulos__card-bar">
                            <div className="modulos__card-bar-fill" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                        {unlocked && !done && (
                          <div className="modulos__card-cta">
                            {modTasksDone > 0 ? 'Continuar' : 'Começar'}
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}
