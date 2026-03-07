import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-icon">{'{}'}</span>
            Curso Iniciante
          </a>
          <p className="footer__tagline">
            Programação para todos.
          </p>
        </div>

        <div className="footer__links-group">
          <p className="footer__group-label">Curso</p>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#curriculum">Conteúdo</a></li>
            <li><a href="#features">Plataforma</a></li>
            <li><a href="#for-whom">Para quem</a></li>
            <li><a href="#cta">Inscrição</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <p className="footer__group-label">Recursos</p>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Comunidade</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <p className="footer__group-label">Legal</p>
          <ul>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Curso Iniciante. Todos os direitos reservados.</p>
          <p>Feito com ♥ para quem está começando</p>
        </div>
      </div>
    </footer>
  )
}
