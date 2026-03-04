import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import { useProgress } from '../context/ProgressContext'
import { MODULES } from '../data/modules'
import './Certificado.css'

export default function Certificado() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { isModuleDone } = useProgress()

  const allDone = MODULES.every((m) => isModuleDone(m.id))
  const doneCount = MODULES.filter((m) => isModuleDone(m.id)).length

  return (
    <div className="cert">
      <div className="cert__header">
        <h1 className="cert__title">Certificado</h1>
      </div>

      {allDone ? (
        <div className="cert__card">
          <div className="cert__seal">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <p className="cert__congrats">Parabéns!</p>
          <h2 className="cert__name">{user.name}</h2>
          <p className="cert__desc">
            concluiu com sucesso o curso <strong>Iniciante em Desenvolvimento Web</strong>,
            completando todos os {MODULES.reduce((a, m) => a + m.tasks.length, 0)} exercícios
            distribuídos em {MODULES.length} módulos.
          </p>
          <div className="cert__modules">
            {MODULES.map((mod) => (
              <div key={mod.id} className="cert__module-tag" style={{ borderColor: mod.color, color: mod.color }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {mod.title}
              </div>
            ))}
          </div>
          <div className="cert__footer">
            <span className="cert__date">
              {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <span className="cert__course">Curso Iniciante</span>
          </div>
        </div>
      ) : (
        <div className="cert__locked">
          <div className="cert__lock-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
          </div>
          <h2 className="cert__locked-title">Certificado bloqueado</h2>
          <p className="cert__locked-desc">
            Você completou <strong>{doneCount} de {MODULES.length}</strong> módulos.
            Conclua todos os módulos para desbloquear seu certificado.
          </p>
          <div className="cert__locked-modules">
            {MODULES.map((mod) => {
              const done = isModuleDone(mod.id)
              return (
                <div key={mod.id} className={`cert__locked-row ${done ? 'cert__locked-row--done' : ''}`}>
                  <span className="cert__locked-dot" style={{ background: done ? mod.color : undefined }} />
                  <span>{mod.title}</span>
                  {done && <span className="cert__locked-check">✓</span>}
                </div>
              )
            })}
          </div>
          <button className="cert__cta" onClick={() => navigate('/dashboard')}>
            Continuar estudando
          </button>
        </div>
      )}
    </div>
  )
}
