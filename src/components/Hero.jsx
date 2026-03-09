import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left: text */}
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Acesso vitalício · Garantia de 7 dias · Sem pré-requisitos
          </span>

          <h1 className="hero__title">
            Aprenda a programar
            <br />
            <span className="gradient-text">do absoluto zero</span>
          </h1>

          <p className="hero__subtitle">
            20 módulos progressivos com projetos reais, gamificação e uma plataforma
            completa — para quem nunca escreveu uma linha de código e quer entrar na área de tecnologia.
          </p>

          <div className="hero__actions">
            <a href="/checkout" className="btn btn--primary hero__btn-main">
              Quero entrar na área de tech
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#curriculum" className="btn btn--ghost">
              Ver o conteúdo
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
                  <path d="M8 1l1.8 4H14l-3.4 2.5 1.3 4L8 9.2 4.1 11.5l1.3-4L2 5h4.2L8 1z"/>
                </svg>
              ))}
            </div>
            <p className="hero__trust-text">
              <strong>+2.400 alunos</strong> · 20 módulos · 6 tipos de tarefa
            </p>
          </div>
        </div>

        {/* Right: code mockup */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__browser">
            <div className="hero__browser-bar">
              <div className="hero__browser-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="hero__browser-url">index.html</div>
            </div>
            <div className="hero__browser-body">
              <div className="code-line">
                <span className="c-num">1</span>
                <span className="c-tag">&lt;!DOCTYPE </span>
                <span className="c-attr">html</span>
                <span className="c-tag">&gt;</span>
              </div>
              <div className="code-line">
                <span className="c-num">2</span>
                <span className="c-tag">&lt;html </span>
                <span className="c-attr">lang</span>
                <span className="c-tag">=</span>
                <span className="c-str">"pt-BR"</span>
                <span className="c-tag">&gt;</span>
              </div>
              <div className="code-line">
                <span className="c-num">3</span>
                <span className="c-indent" />
                <span className="c-tag">&lt;h1&gt;</span>
                <span className="c-text">Olá, mundo!</span>
                <span className="c-tag">&lt;/h1&gt;</span>
              </div>
              <div className="code-line">
                <span className="c-num">4</span>
                <span className="c-indent" />
                <span className="c-tag">&lt;p&gt;</span>
                <span className="c-text">Meu primeiro site</span>
                <span className="c-tag">&lt;/p&gt;</span>
              </div>
              <div className="code-line">
                <span className="c-num">5</span>
                <span className="c-indent" />
                <span className="c-tag">&lt;button&gt;</span>
                <span className="c-text">Clique aqui!</span>
                <span className="c-tag">&lt;/button&gt;</span>
              </div>
              <div className="code-line">
                <span className="c-num">6</span>
                <span className="c-tag">&lt;/html&gt;</span>
              </div>
              <div className="code-line code-line--cursor">
                <span className="c-num">7</span>
                <span className="code-cursor" />
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__float hero__float--1">
            <svg width="14" height="14" fill="#22c55e" viewBox="0 0 16 16">
              <path d="M13.5 2.5l-8 8-3-3L1 9l3.5 3.5 9.5-9.5-0.5-0.5z"/>
            </svg>
            +150 XP ganhos!
          </div>
          <div className="hero__float hero__float--2">
            🔥 7 dias de streak
          </div>
        </div>
      </div>
    </section>
  )
}
