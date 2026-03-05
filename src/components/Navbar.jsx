import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">{'{}'}</span>
          <span className="navbar__logo-text">Curso Iniciante</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#curriculum" onClick={() => setMenuOpen(false)}>Conteúdo</a></li>
          <li><a href="#for-whom" onClick={() => setMenuOpen(false)}>Para quem</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Depoimentos</a></li>
          <li className="navbar__links-mobile-cta">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="navbar__mobile-login">Entrar</Link>
            <a href="#cta" onClick={() => setMenuOpen(false)} className="btn btn--primary navbar__mobile-signup">
              Começar grátis
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <Link to="/login" className="navbar__login-link">Entrar</Link>
          <a href="#cta" className="btn btn--primary navbar__cta">
            Começar grátis
          </a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
