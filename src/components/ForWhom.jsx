import './ForWhom.css'

const profiles = [
  {
    emoji: '🌱',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    title: 'Curiosos e iniciantes',
    description:
      'Nunca viu código na vida e quer entender como sites e aplicativos são criados do zero.',
    fit: 'Perfeito se você',
    items: ['Não tem nenhuma experiência técnica', 'Aprende melhor na prática', 'Quer entender o que "programar" significa'],
  },
  {
    emoji: '🔄',
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    title: 'Em transição de carreira',
    description:
      'Trabalha em outra área e quer migrar para tecnologia, mas não sabe por onde começar.',
    fit: 'Perfeito se você',
    items: ['Precisa de uma trilha clara e estruturada', 'Tem tempo limitado no dia a dia', 'Quer validar se programação é pra você'],
  },
  {
    emoji: '🎨',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    title: 'Designers e criativos',
    description:
      'Cansado de depender de um dev para mudar a cor de um botão? Aprenda a fazer você mesmo — e entenda por que o código nunca fica igual ao Figma.',
    fit: 'Perfeito se você',
    items: ['Quer editar sites sem precisar de ajuda', 'Sente que perde tempo explicando o óbvio para devs', 'Quer entender CSS, layouts e responsividade na prática'],
  },
  {
    emoji: '📚',
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    title: 'Estudantes',
    description:
      'Está na faculdade ou no ensino médio e quer adquirir habilidades práticas do mercado.',
    fit: 'Perfeito se você',
    items: ['Quer complementar a grade curricular', 'Busca um diferencial no currículo', 'Tem curiosidade sobre tecnologia'],
  },
]

export default function ForWhom() {
  return (
    <section id="for-whom" className="section for-whom">
      <div className="container">
        <p className="section__eyebrow">Público-alvo</p>
        <h2 className="section__title">Para quem é este curso?</h2>
        <p className="section__description">
          Não importa o seu ponto de partida. Se você tem vontade de aprender,
          este curso é para você.
        </p>

        <div className="for-whom__grid">
          {profiles.map(({ emoji, gradient, title, description, fit, items }) => (
            <div key={title} className="for-whom__card">
              <div className="for-whom__icon" style={{ background: gradient }}>
                <span>{emoji}</span>
              </div>
              <h3 className="for-whom__title">{title}</h3>
              <p className="for-whom__description">{description}</p>
              <div className="for-whom__divider" />
              <p className="for-whom__fit-label">{fit}:</p>
              <ul className="for-whom__items">
                {items.map((item) => (
                  <li key={item} className="for-whom__item">
                    <span className="for-whom__bullet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
