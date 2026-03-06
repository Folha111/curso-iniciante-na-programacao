import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import './Projetos.css'

function getProjectProgress(projectId) {
  try {
    const saved = localStorage.getItem(`project_progress_${projectId}`)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function Projetos() {
  const navigate = useNavigate()

  return (
    <main className="projetos">
      <div className="projetos__header">
        <div>
          <h1 className="projetos__title">Projetos Guiados</h1>
          <p className="projetos__sub">Construa projetos reais passo a passo e aplique o que aprendeu.</p>
        </div>
      </div>

      <div className="projetos__grid">
        {PROJECTS.map((project) => {
          const done = getProjectProgress(project.id)
          const pct = Math.round((done.length / project.steps.length) * 100)
          const started = done.length > 0
          const completed = done.length === project.steps.length

          return (
            <div
              key={project.id}
              className={`projetos__card ${completed ? 'projetos__card--done' : ''}`}
              style={{ '--proj-color': project.color }}
              onClick={() => navigate(`/projeto/${project.id}`)}
            >
              <div className="projetos__card-top">
                <div className="projetos__card-icon">{project.icon}</div>
                {completed && (
                  <span className="projetos__card-badge projetos__card-badge--done">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Concluído
                  </span>
                )}
                {!completed && started && (
                  <span className="projetos__card-badge projetos__card-badge--progress">
                    Em andamento
                  </span>
                )}
              </div>

              <div className="projetos__card-body">
                <div className="projetos__card-level">{project.level}</div>
                <h3 className="projetos__card-title">{project.title}</h3>
                <p className="projetos__card-desc">{project.subtitle}</p>
                <div className="projetos__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projetos__card-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="projetos__card-footer">
                <div className="projetos__card-meta">
                  <span className="projetos__card-steps">{project.steps.length} passos</span>
                  <span className="projetos__card-time">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {project.time}
                  </span>
                </div>
                {started && (
                  <>
                    <div className="projetos__card-bar">
                      <div className="projetos__card-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="projetos__card-pct">{done.length}/{project.steps.length} passos</span>
                  </>
                )}
                <div className="projetos__card-cta">
                  {completed ? 'Revisar' : started ? 'Continuar' : 'Começar'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
