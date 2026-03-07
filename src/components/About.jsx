import './About.css'

const stats = [
  { value: '20',   label: 'Módulos',          sub: 'do básico ao deploy' },
  { value: '6',    label: 'Tipos de tarefa',   sub: 'quiz, código, drag & drop…' },
  { value: '100%', label: 'Gratuito',          sub: 'sem cobranças ocultas' },
  { value: '0',    label: 'Pré-requisitos',    sub: 'qualquer um pode entrar' },
]

const features = [
  'Aprenda com projetos reais em cada módulo',
  'Sistema de XP, streaks e 11 conquistas desbloqueáveis',
  'Jogos interativos, quiz e Modo Foco (Pomodoro)',
  'Certificado digital de conclusão',
]

export default function About() {
  return (
    <section id="about" className="section section--alt about">
      <div className="container about__container">
        {/* Left */}
        <div className="about__content">
          <p className="section__eyebrow">Sobre o curso</p>
          <h2 className="section__title">
            Programação explicada<br />como deveria ser
          </h2>
          <p className="section__description">
            20 módulos progressivos que te levam do zero até publicar seus primeiros projetos
            na internet — com gamificação, projetos reais e uma plataforma completa de aprendizado.
          </p>

          <ul className="about__features">
            {features.map((f) => (
              <li key={f} className="about__feature-item">
                <span className="about__feature-check">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: stats grid */}
        <div className="about__stats">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="about__stat-card">
              <span className="about__stat-value gradient-text">{value}</span>
              <span className="about__stat-label">{label}</span>
              <span className="about__stat-sub">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
