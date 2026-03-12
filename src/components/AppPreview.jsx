import { useState } from 'react'
import './AppPreview.css'

const screens = [
  {
    id: 'modulos-mapa',
    label: 'Trilha de Módulos',
    description: 'Visualize seu caminho de aprendizado em um mapa interativo estilo Duolingo — módulo a módulo, do zero ao avançado.',
    src: '/screenshots/modulos-mapa.png',
    alt: 'Trilha visual de módulos estilo Duolingo',
  },
  {
    id: 'modulos-lista',
    label: 'Conteúdo do Curso',
    description: 'Todos os 21 módulos organizados por nível: Curioso, Entendedor, Praticante e Construtor. Cada um com tarefas e progresso.',
    src: '/screenshots/modulos-lista.png',
    alt: 'Lista de módulos do curso',
  },
  {
    id: 'certificado',
    label: 'Certificado',
    description: 'Ao concluir o curso você recebe um certificado digital personalizado com seu nome, os módulos concluídos e data de emissão.',
    src: '/screenshots/certificado.png',
    alt: 'Certificado de conclusão do curso',
  },
  {
    id: 'jogos',
    label: 'Jogos Interativos',
    description: 'Aprenda brincando com 7 jogos temáticos: memória, palavra embaralhada, digitação de código, caça ao bug e mais.',
    src: '/screenshots/jogos.png',
    alt: 'Página de jogos interativos',
  },
  {
    id: 'quiz',
    label: 'Quiz Interativo',
    description: 'Teste seus conhecimentos com 3 modalidades de quiz: velocidade, adivinhe a tag e verdade ou mito.',
    src: '/screenshots/quiz.png',
    alt: 'Quiz interativo do curso',
  },
]

export default function AppPreview() {
  const [active, setActive] = useState(0)

  return (
    <section id="preview" className="section app-preview">
      <div className="container">
        <p className="section__eyebrow">Plataforma</p>
        <h2 className="section__title">Veja como é por dentro</h2>
        <p className="section__description">
          Uma plataforma completa e bem cuidada, feita para quem está começando do zero.
        </p>

        <div className="app-preview__layout">
          {/* Tabs laterais */}
          <div className="app-preview__tabs">
            {screens.map((s, i) => (
              <button
                key={s.id}
                className={`app-preview__tab${active === i ? ' app-preview__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="app-preview__tab-label">{s.label}</span>
                <p className="app-preview__tab-desc">{s.description}</p>
              </button>
            ))}
          </div>

          {/* Imagem */}
          <div className="app-preview__frame">
            <div className="app-preview__browser">
              <div className="app-preview__browser-bar">
                <div className="app-preview__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="app-preview__url">curso-iniciante.com.br</div>
              </div>
              <div className="app-preview__screen">
                {screens.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.src}
                    alt={s.alt}
                    className={`app-preview__img${active === i ? ' app-preview__img--active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots mobile */}
        <div className="app-preview__dots-nav">
          {screens.map((s, i) => (
            <button
              key={s.id}
              className={`app-preview__dot${active === i ? ' app-preview__dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
