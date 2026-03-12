import './Curriculum.css'

const stages = [
  {
    stage: 'Curioso',
    title: 'Primeiros passos',
    color: '#3b82f6',
    modules: [
      { number: '01', title: 'Introdução à Programação', topics: ['Como o computador pensa', 'HTML, CSS e JS — o trio da web', 'Caminhos de carreira em tecnologia'] },
      { number: '02', title: 'Lógica de Programação', topics: ['Algoritmos e pseudocódigo', 'Condicionais, loops e funções', 'Resolução de problemas'] },
      { number: '03', title: 'VSCode: seu editor de código', topics: ['Instalação e configuração', 'Atalhos essenciais', 'Extensões úteis'] },
    ],
  },
  {
    stage: 'Aprendiz',
    title: 'HTML',
    color: '#f97316',
    modules: [
      { number: '04', title: 'HTML: primeiros elementos', topics: ['Tags, links, imagens e tabelas', 'Formulários básicos', 'Tags de ênfase e semântica'] },
      { number: '05', title: 'Estrutura de uma página HTML', topics: ['head, body e meta tags', 'Tags semânticas (nav, main, footer)', 'Viewport e acessibilidade'] },
    ],
  },
  {
    stage: 'Estudante',
    title: 'CSS',
    color: '#ec4899',
    modules: [
      { number: '06', title: 'CSS: primeiros estilos', topics: ['Seletores, cores e fontes', 'ID vs Classe e especificidade', 'Estilos de texto e background'] },
      { number: '07', title: 'CSS: box model e layout', topics: ['margin, padding e border', 'display e posicionamento', 'Variáveis CSS'] },
      { number: '08', title: 'CSS: Flexbox', topics: ['Flex container e flex items', 'justify-content e align-items', 'Layouts reais com Flexbox'] },
      { number: '09', title: 'CSS: Grid', topics: ['grid-template-columns e rows', 'A unidade fr', 'Grid vs Flexbox'] },
      { number: '10', title: 'CSS: Responsividade', topics: ['Mobile-first design', 'Media queries', 'Layouts adaptáveis para qualquer tela'] },
    ],
  },
  {
    stage: 'Praticante',
    title: 'JavaScript',
    color: '#f59e0b',
    modules: [
      { number: '11', title: 'JavaScript: variáveis e tipos', topics: ['var, let e const', 'Tipos de dados e template literals', 'Arrays e operadores'] },
      { number: '12', title: 'JavaScript: condicionais e funções', topics: ['if/else e operador ternário', 'Operadores lógicos', 'Loops e controle de fluxo'] },
      { number: '13', title: 'JavaScript: arrays e objetos', topics: ['map, filter e métodos de array', 'Desestruturação de objetos', 'Spread e rest'] },
      { number: '14', title: 'JavaScript: loops', topics: ['for, while e do-while', 'for...of e for...in', 'break e continue'] },
      { number: '15', title: 'JavaScript: funções avançadas', topics: ['Arrow functions e callbacks', 'Escopo e closures', 'Parâmetros padrão'] },
      { number: '16', title: 'JavaScript: fetch e APIs', topics: ['O que é JSON', 'async/await', 'Consumindo dados de APIs reais'] },
    ],
  },
  {
    stage: 'Construtor',
    title: 'Projetos reais',
    color: '#8b5cf6',
    modules: [
      { number: '17', title: 'JavaScript: DOM e eventos', topics: ['querySelector e getElementById', 'addEventListener e eventos', 'classList: add, remove, toggle'] },
      { number: '18', title: 'Seu primeiro projeto completo', topics: ['Contador interativo', 'Lista de tarefas com JS', 'Calculadora simples'] },
      { number: '19', title: 'Projeto: Calculadora', topics: ['Lógica de operações com JS', 'Eventos de teclado', 'switch statement'] },
      { number: '20', title: 'Projeto: Lista de Tarefas', topics: ['CRUD no frontend', 'Persistência com localStorage', 'IDs únicos e remoção'] },
      { number: '21', title: 'Projeto: Landing Page', topics: ['Hero section responsiva', 'Grid e animações CSS', 'Formulário funcional'] },
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
            <h2 className="section__title">21 módulos do zero ao deploy</h2>
            <p className="section__description">
              Cinco etapas progressivas que te levam da primeira linha de código até
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
