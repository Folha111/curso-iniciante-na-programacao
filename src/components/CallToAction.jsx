import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './CallToAction.css'

const PROMO_HOURS = 24
const PROMO_PRICE = '39,99'
const FULL_PRICE = '99,99'
const STORAGE_KEY = 'promo_end_time'

const INCLUDES = [
  { icon: '🎯', text: '20 módulos do zero ao deploy' },
  { icon: '🎮', text: 'Jogos interativos de programação' },
  { icon: '⏱️', text: 'Modo Foco com timer Pomodoro' },
  { icon: '🏆', text: '11 conquistas desbloqueáveis' },
  { icon: '📊', text: 'Ranking e sistema de XP' },
  { icon: '🎓', text: 'Certificado digital de conclusão' },
  { icon: '♾️', text: 'Acesso vitalício + atualizações' },
  { icon: '🛡️', text: 'Garantia de 7 dias ou reembolso' },
]

function getEndTime() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const end = Number(stored)
    if (end > Date.now()) return end
  }
  const end = Date.now() + PROMO_HOURS * 60 * 60 * 1000
  localStorage.setItem(STORAGE_KEY, String(end))
  return end
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(null)
  useEffect(() => {
    const endTime = getEndTime()
    function tick() {
      const diff = endTime - Date.now()
      if (diff <= 0) { setTimeLeft({ h: '00', m: '00', s: '00', expired: true }); return }
      setTimeLeft({
        h: String(Math.floor(diff / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
        expired: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

export default function CallToAction() {
  const t = useCountdown()

  return (
    <section id="cta" className="cta">
      <div className="cta__grid-bg" aria-hidden="true" />
      <div className="cta__glow cta__glow--1" aria-hidden="true" />
      <div className="cta__glow cta__glow--2" aria-hidden="true" />

      <div className="container cta__container">

        {/* Topo — badge de urgência */}
        <div className="cta__top-badge">
          <span className="cta__top-badge-dot" />
          OFERTA POR TEMPO LIMITADO
        </div>

        {/* Headline */}
        <h2 className="cta__title">
          Comece sua carreira em tecnologia
          <br />
          <span className="cta__title-hl">hoje mesmo, por menos de R$&nbsp;40</span>
        </h2>

        {/* Card principal */}
        <div className="cta__card">
          <div className="cta__card-glow" aria-hidden="true" />

          {/* Lado esquerdo — preço e timer */}
          <div className="cta__left">
            <p className="cta__offer-label">Você paga apenas</p>

            <div className="cta__price-wrap">
              <span className="cta__full-price">R$ {FULL_PRICE}</span>
              <div className="cta__price">
                <span className="cta__price-cur">R$</span>
                <span className="cta__price-num">{t?.expired ? FULL_PRICE : PROMO_PRICE}</span>
              </div>
              <span className="cta__price-sub">pagamento único · acesso vitalício</span>
            </div>

            {/* Countdown */}
            {t && !t.expired && (
              <div className="cta__timer">
                <p className="cta__timer-label">⚡ Promoção acaba em</p>
                <div className="cta__timer-digits">
                  <div className="cta__digit-box">
                    <span className="cta__digit">{t.h}</span>
                    <span className="cta__digit-label">horas</span>
                  </div>
                  <span className="cta__digit-sep">:</span>
                  <div className="cta__digit-box">
                    <span className="cta__digit">{t.m}</span>
                    <span className="cta__digit-label">min</span>
                  </div>
                  <span className="cta__digit-sep">:</span>
                  <div className="cta__digit-box">
                    <span className="cta__digit">{t.s}</span>
                    <span className="cta__digit-label">seg</span>
                  </div>
                </div>
                <p className="cta__timer-warning">
                  Após esse prazo volta para R$ {FULL_PRICE}
                </p>
              </div>
            )}

            <Link to="/checkout" className="cta__btn">
              {t?.expired ? 'Garantir meu acesso agora' : 'Aproveitar esta oferta agora'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <div className="cta__methods">
              <span>💳 Cartão</span>
              <span>·</span>
              <span>🏦 PIX</span>
              <span>·</span>
              <span>💸 Débito</span>
            </div>
          </div>

          {/* Divisor */}
          <div className="cta__divider" />

          {/* Lado direito — o que inclui */}
          <div className="cta__right">
            <p className="cta__includes-title">O que está incluso:</p>
            <ul className="cta__includes">
              {INCLUDES.map(({ icon, text }) => (
                <li key={text} className="cta__include-item">
                  <span className="cta__include-icon">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="cta__guarantee">
              <div className="cta__guarantee-icon">🛡️</div>
              <div>
                <p className="cta__guarantee-title">Garantia incondicional de 7 dias</p>
                <p className="cta__guarantee-sub">Não gostou? Devolvemos 100% do seu dinheiro, sem burocracia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé — prova social */}
        <div className="cta__social">
          <div className="cta__social-item">
            <span className="cta__social-num">+2.400</span>
            <span className="cta__social-label">alunos no curso</span>
          </div>
          <div className="cta__social-divider" />
          <div className="cta__social-item">
            <span className="cta__social-num">20</span>
            <span className="cta__social-label">módulos completos</span>
          </div>
          <div className="cta__social-divider" />
          <div className="cta__social-item">
            <div className="cta__social-stars">
              {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
            </div>
            <span className="cta__social-label">avaliação dos alunos</span>
          </div>
        </div>

      </div>
    </section>
  )
}
