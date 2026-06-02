import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contacto.css'

const LINKS = [
  { href: 'https://www.youtube.com/@hectorleevargas5164', icon: '▶', label: 'YouTube' },
  { href: 'https://holamifan.com/product/hector-lee/',    icon: '⭐', label: 'Hola Mi Fan' },
  { href: 'https://doblaje.fandom.com/es/wiki/H%C3%A9ctor_Lee', icon: '🎬', label: 'Doblaje Wiki' },
]

export default function Contacto() {
  const ref = useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    e.target.reset()
  }

  return (
    <section className="contacto" id="contacto">
      <div className="section-container">
        <div className="contacto-inner" ref={ref}>
          <div className="section-label">Contacto</div>
          <h2 className="section-title">
            ¿Buscas la Voz <span className="gold">Perfecta</span>?
          </h2>
          <p className="contacto-desc">
            Para contrataciones, colaboraciones o información sobre sus servicios.
          </p>

          <div className="contacto-links">
            {LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-link"
              >
                <span className="link-icon">{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input id="asunto" name="asunto" type="text" placeholder="¿En qué podemos ayudarte?" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={5} placeholder="Cuéntanos sobre tu proyecto..." required />
            </div>
            <button type="submit" className={`btn btn-full ${sent ? 'btn-sent' : 'btn-primary'}`}>
              {sent ? '✓ Mensaje enviado' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
