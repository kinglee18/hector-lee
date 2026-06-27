import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#inicio',     label: 'Inicio' },
  { href: '#biografia',  label: 'Biografía' },
  { href: '#personajes', label: 'Personajes' },
  { href: '#videos',     label: 'Videos' },
  { href: '#demos',      label: 'Demos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#inicio" className="nav-logo" onClick={closeMenu}>
          <span className="logo-name">Héctor Lee</span>
          <span className="logo-sub">Vargas</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
