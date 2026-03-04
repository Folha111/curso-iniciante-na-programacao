import './Testimonials.css'

const testimonials = [
  {
    name: 'Ana Luíza M.',
    role: 'Designer → Dev Frontend',
    avatar: 'AL',
    color: '#ec4899',
    text: 'Finalmente entendi como CSS funciona de verdade. Em duas semanas eu já estava ajustando o site da empresa onde trabalho. A didática é incrível.',
  },
  {
    name: 'Rafael C.',
    role: 'Estudante de Administração',
    avatar: 'RC',
    color: '#3b82f6',
    text: 'Nunca pensei que conseguiria criar um site do zero. O curso é direto e não enrola. Terminei o módulo de JS me sentindo um programador de verdade.',
  },
  {
    name: 'Júlia R.',
    role: 'Empreendedora Digital',
    avatar: 'JR',
    color: '#8b5cf6',
    text: 'Queria entender o básico para não depender de agência pra tudo. Agora faço alterações no meu site sozinha e economizo muito todo mês.',
  },
]

function Stars() {
  return (
    <div className="testimonial__stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#f59e0b">
          <path d="M8 1l1.8 4H14l-3.4 2.5 1.3 4L8 9.2 4.1 11.5l1.3-4L2 5h4.2L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--alt testimonials">
      <div className="container">
        <p className="section__eyebrow">Depoimentos</p>
        <h2 className="section__title">O que os alunos dizem</h2>
        <p className="section__description">
          Mais de 2.400 pessoas já passaram pelo curso. Veja o que elas acharam.
        </p>

        <div className="testimonials__grid">
          {testimonials.map(({ name, role, avatar, color, text }) => (
            <div key={name} className="testimonial__card">
              <Stars />
              <p className="testimonial__text">"{text}"</p>
              <div className="testimonial__author">
                <div
                  className="testimonial__avatar"
                  style={{ background: color }}
                >
                  {avatar}
                </div>
                <div>
                  <p className="testimonial__name">{name}</p>
                  <p className="testimonial__role">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
