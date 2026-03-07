import './Curriculum.css'

const stages = [
  {
    stage: 'Etapa 1',
    title: 'Base da Web',
    color: '#3b82f6',
    modules: [
      { number: '01', title: 'Como a web funciona', topics: ['Internet e protocolos HTTP', 'Navegadores e servidores', 'HTML, CSS e JS — o trio da web'] },
      { number: '02', title: 'HTML — Estrutura', topics: ['Tags semânticas e formulários', 'Links, imagens e mídia', 'Acessibilidade básica'] },
      { number: '03', title: 'CSS — Estilo', topics: ['Seletores e box model', 'Posicionamento e display', 'Variáveis CSS'] },
      { number: '04', title: 'Responsividade', topics: ['Mobile-first design', 'Media queries', 'Unidades relativas'] },
    ],
  },
  {
    stage: 'Etapa 2',
    title: 'CSS Avançado',
    color: '#ec4899',
    modules: [
      { number: '05', title: 'CSS Flexbox', topics: ['Flex container e itens', 'Alinhamento e direção', 'Layouts reais com Flexbox'] },
      { number: '06', title: 'CSS Grid', topics: ['Grid template e áreas', 'Auto-placement', 'Layouts de página complexos'] },
      { number: '07', title: 'Responsividade Avançada', topics: ['Fluid typography', 'Container queries', 'Design totalmente adaptativo'] },
    ],
  },
  {
    stage: 'Etapa 3',
    title: 'JavaScript',
    color: '#f59e0b',
    modules: [
      { number: '08', title: 'Lógica de Programação', topics: ['Variáveis, tipos e operadores', 'Condicionais e funções', 'Escopo e closures'] },
      { number: '09', title: 'JavaScript no Browser', topics: ['DOM e eventos', 'Manipulação de elementos', 'Formulários interativos'] },
      { number: '10', title: 'JS Arrays e Objetos', topics: ['map, filter e reduce', 'Desestruturação', 'Spread e rest'] },
      { number: '11', title: 'JS Loops', topics: ['for, while e do-while', 'for...of e for...in', 'Controle de fluxo'] },
    ],
  },
  {
    stage: 'Etapa 4',
    title: 'JS Avançado',
    color: '#10b981',
    modules: [
      { number: '12', title: 'Funções Avançadas', topics: ['Arrow functions', 'Promises e async/await', 'Tratamento de erros'] },
      { number: '13', title: 'Fetch e APIs', topics: ['Requisições HTTP', 'JSON e REST APIs', 'Consumo de dados reais'] },
    ],
  },
  {
    stage: 'Etapa 5',
    title: 'Projetos Práticos',
    color: '#8b5cf6',
    modules: [
      { number: '14', title: 'Projeto Calculadora', topics: ['Lógica de operações', 'UI interativa com JS', 'Eventos de teclado'] },
      { number: '15', title: 'Projeto Lista de Tarefas', topics: ['CRUD no frontend', 'Persistência com localStorage', 'Drag & Drop'] },
      { number: '16', title: 'Projeto Landing Page', topics: ['Layout responsivo completo', 'Animações CSS', 'Seções profissionais'] },
    ],
  },
  {
    stage: 'Etapa 6',
    title: 'Publicação',
    color: '#6366f1',
    modules: [
      { number: '17', title: 'Git e GitHub', topics: ['Controle de versão', 'Commits, branches e merges', 'Pull Requests'] },
      { number: '18', title: 'Deploy na Web', topics: ['GitHub Pages', 'Vercel e Netlify', 'Domínio personalizado'] },
    ],
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum">
      <div className="container">
        <div className="curriculum__header">
          <div>
            <p className="section__eyebrow">Conteúdo</p>
            <h2 className="section__title">20 módulos do zero ao deploy</h2>
            <p className="section__description">
              Seis etapas progressivas que te levam da primeira linha de código até
              publicar seus projetos na internet.
            </p>
          </div>
          <a href="#cta" className="btn btn--ghost curriculum__header-btn">
            Começar agora →
          </a>
        </div>

        <div className="curriculum__stages">
          {stages.map((s) => (
            <div key={s.stage} className="curriculum__stage" style={{ '--stage-color': s.color }}>
              <div className="curriculum__stage-label">
                <span className="curriculum__stage-tag">{s.stage}</span>
                <span className="curriculum__stage-title">{s.title}</span>
                <span className="curriculum__stage-count">{s.modules.length} módulos</span>
              </div>
              <div className="curriculum__stage-grid">
                {s.modules.map((mod) => (
                  <div key={mod.number} className="curriculum__card" style={{ '--card-color': s.color }}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
