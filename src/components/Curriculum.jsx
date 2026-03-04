import './Curriculum.css'

const modules = [
  {
    number: '01',
    title: 'Como a web funciona',
    color: '#3b82f6',
    topics: ['Internet e protocolos HTTP', 'Navegadores e servidores', 'HTML, CSS e JS — o trio da web'],
  },
  {
    number: '02',
    title: 'HTML — Estrutura',
    color: '#8b5cf6',
    topics: ['Tags e elementos semânticos', 'Formulários, links e mídia', 'Acessibilidade básica'],
  },
  {
    number: '03',
    title: 'CSS — Estilo',
    color: '#ec4899',
    topics: ['Seletores e propriedades', 'Box model e posicionamento', 'Flexbox e CSS Grid'],
  },
  {
    number: '04',
    title: 'Responsividade',
    color: '#f59e0b',
    topics: ['Mobile-first design', 'Media queries', 'Unidades relativas e fluidas'],
  },
  {
    number: '05',
    title: 'Lógica de Programação',
    color: '#10b981',
    topics: ['Variáveis, tipos e operadores', 'Condicionais e loops', 'Funções e escopo'],
  },
  {
    number: '06',
    title: 'JavaScript no Browser',
    color: '#f97316',
    topics: ['DOM e eventos do usuário', 'Manipulação de elementos', 'Fetch API e JSON'],
  },
  {
    number: '07',
    title: 'Git e GitHub',
    color: '#6366f1',
    topics: ['Versionamento de código', 'Commits, branches e merges', 'Publicar projetos no GitHub'],
  },
  {
    number: '08',
    title: 'Projeto Final',
    color: '#3b82f6',
    topics: ['Portfólio pessoal completo', 'Deploy gratuito na web', 'Próximos passos na carreira'],
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum">
      <div className="container">
        <div className="curriculum__header">
          <div>
            <p className="section__eyebrow">Conteúdo</p>
            <h2 className="section__title">O que você vai aprender</h2>
            <p className="section__description">
              Oito módulos progressivos que te levam do zero até publicar seu
              primeiro projeto na internet — com projetos práticos em cada etapa.
            </p>
          </div>
          <a href="#cta" className="btn btn--ghost curriculum__header-btn">
            Ver todos os módulos →
          </a>
        </div>

        <div className="curriculum__grid">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="curriculum__card"
              style={{ '--card-color': mod.color }}
            >
              <div className="curriculum__card-top">
                <span className="curriculum__number">{mod.number}</span>
                <div className="curriculum__card-dot" />
              </div>
              <h3 className="curriculum__card-title">{mod.title}</h3>
              <ul className="curriculum__topics">
                {mod.topics.map((topic) => (
                  <li key={topic} className="curriculum__topic">
                    <svg className="curriculum__check" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {topic}
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
