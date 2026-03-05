import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useModules } from '../context/ModulesContext'
import './Certificado.css'

const ISSUE_DATE = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

function CertificateDoc({ user, modules }) {
  const totalTasks = modules.reduce((a, m) => a + m.tasks.length, 0)

  return (
    <div className="cert__doc" id="cert-doc">
      {/* Corner decorations */}
      <span className="cert__corner cert__corner--tl" />
      <span className="cert__corner cert__corner--tr" />
      <span className="cert__corner cert__corner--bl" />
      <span className="cert__corner cert__corner--br" />

      {/* Top band */}
      <div className="cert__band">
        <span className="cert__band-logo">{'{}'}</span>
        <span className="cert__band-name">Curso Iniciante em Programação</span>
      </div>

      {/* Body */}
      <div className="cert__body">
        <p className="cert__label">Certificado de Conclusão</p>

        <p className="cert__presented">Este certificado é conferido a</p>

        <h2 className="cert__student">{user.name}</h2>

        <p className="cert__desc">
          por concluir com êxito o curso{' '}
          <strong>Iniciante em Desenvolvimento Web</strong>, completando{' '}
          <strong>{totalTasks} exercícios</strong> distribuídos em{' '}
          <strong>{modules.length} módulos</strong> — incluindo fundamentos de
          HTML, CSS e JavaScript.
        </p>

        {/* Modules list */}
        <div className="cert__skills">
          {modules.map((mod) => (
            <span key={mod.id} className="cert__skill" style={{ borderColor: mod.color, color: mod.color }}>
              {mod.title}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="cert__doc-footer">
        <div className="cert__sig">
          <div className="cert__sig-line" />
          <p className="cert__sig-name">Curso Iniciante</p>
          <p className="cert__sig-role">Coordenação Pedagógica</p>
        </div>

        <div className="cert__stamp">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" strokeWidth="1.6" />
          </svg>
          <span>Aprovado</span>
        </div>

        <div className="cert__sig cert__sig--right">
          <div className="cert__sig-line" />
          <p className="cert__sig-name">{ISSUE_DATE}</p>
          <p className="cert__sig-role">Data de emissão</p>
        </div>
      </div>
    </div>
  )
}

export default function Certificado() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { isModuleDone } = useProgress()
  const { modules: MODULES } = useModules()

  const allDone = user?.role === 'admin' || MODULES.every((m) => isModuleDone(m.id))
  const doneCount = MODULES.filter((m) => isModuleDone(m.id)).length

  function handleDownload() {
    window.print()
  }

  return (
    <div className="cert">
      {allDone ? (
        <>
          <div className="cert__header no-print">
            <h1 className="cert__title">Seu Certificado</h1>
            <button className="cert__download-btn" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Baixar PDF
            </button>
          </div>

          <CertificateDoc user={user} modules={MODULES} />

          <p className="cert__hint no-print">
            Clique em <strong>Baixar PDF</strong> e escolha "Salvar como PDF" no diálogo de impressão.
          </p>
        </>
      ) : (
        <div className="cert__locked no-print">
          <div className="cert__lock-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
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
