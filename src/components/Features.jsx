import './Features.css'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: '#f59e0b',
    title: 'Sistema de XP e Streaks',
    description: 'Ganhe XP completando tarefas e mantenha seu streak diário de estudo para subir no ranking.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    color: '#10b981',
    title: 'Jogos Interativos',
    description: 'Forca, memória e outros jogos temáticos de programação para aprender de forma divertida.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: '#6366f1',
    title: 'Modo Foco (Pomodoro)',
    description: 'Timer Pomodoro integrado com notificações e estatísticas de sessões de estudo concentradas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 20 18 10"/><polyline points="12 20 12 4"/><polyline points="6 20 6 14"/>
      </svg>
    ),
    color: '#3b82f6',
    title: 'Ranking de Alunos',
    description: 'Placar de líderes com os alunos mais ativos. Compete e acompanhe sua evolução em tempo real.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/>
      </svg>
    ),
    color: '#ec4899',
    title: 'Revisão Inteligente',
    description: 'Sistema de repetição espaçada: tarefas onde você errou voltam para revisar no momento certo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    color: '#8b5cf6',
    title: 'Certificado Digital',
    description: 'Ao concluir todos os módulos, você recebe um certificado personalizável para compartilhar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    color: '#f97316',
    title: '6 Tipos de Tarefa',
    description: 'Quiz, código ao vivo, digitação, caça ao bug, drag & drop e preenchimento de lacunas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
    color: '#14b8a6',
    title: 'Plataforma Personalizável',
    description: '5 temas de cores, modo escuro, idioma PT-BR/EN e foto de perfil — tudo do seu jeito.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section section--alt features">
      <div className="container">
        <p className="section__eyebrow">Plataforma</p>
        <h2 className="section__title">Muito mais do que um curso</h2>
        <p className="section__description">
          Uma plataforma completa de aprendizado com gamificação, ferramentas de estudo
          e recursos que tornam a jornada mais eficiente — e mais divertida.
        </p>

        <div className="features__grid">
          {features.map(({ icon, color, title, description }) => (
            <div key={title} className="features__card" style={{ '--feat-color': color }}>
              <div className="features__icon">
                {icon}
              </div>
              <div>
                <h3 className="features__title">{title}</h3>
                <p className="features__description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
