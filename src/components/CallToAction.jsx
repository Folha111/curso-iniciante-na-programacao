import './CallToAction.css'

export default function CallToAction() {
  return (
    <section id="cta" className="cta">
      <div className="cta__bg-glow" aria-hidden="true" />
      <div className="container cta__container">
        <span className="cta__eyebrow">Pronto para começar?</span>

        <h2 className="cta__title">
          Sua jornada na programação
          <br />
          começa agora
        </h2>

        <p className="cta__description">
          Gratuito, online e no seu ritmo.<br />
          Basta ter vontade de aprender.
        </p>

        <div className="cta__actions">
          <a href="#" className="btn btn--white">
            Inscrever-se gratuitamente
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <p className="cta__note">
          Sem cartão de crédito &nbsp;·&nbsp; Sem prazo &nbsp;·&nbsp; Cancele quando quiser
        </p>
      </div>
    </section>
  )
}
