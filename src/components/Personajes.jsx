import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Personajes.css'

const PERSONAJES = [
  { img: '/personajes/et.jpg',       clip: 'RT8QWvDMz1U', name: 'E.T.',          obra: 'E.T. el Extraterrestre',            year: '1982 · Steven Spielberg',      badge: 'Cine' },
  { img: '/personajes/gonzo.jpg',    clip: 'XTlnOLs57wg', name: 'Gonzo',         obra: 'Los Muppets',                        year: 'Múltiples producciones',        badge: 'Disney' },
  { img: '/personajes/animal.jpg',   clip: 'XTlnOLs57wg', name: 'Animal',        obra: 'Los Muppets',                        year: 'Múltiples producciones',        badge: 'Disney' },
  { img: '/personajes/iago.jpg',     clip: 'GGQbVes6v_c', name: 'Iago',          obra: 'Aladdin',                            year: '1992 · Disney',                 badge: 'Disney' },
  { img: '/personajes/kaiosama.png', clip: 't6TYv18GWxo', name: 'Kaiosama',      obra: 'Dragon Ball Z',                      year: 'Serie / Película',              badge: 'Anime' },
  { img: '/personajes/pinguino.png', clip: 'RT8QWvDMz1U', name: 'El Pingüino',   obra: 'Batman Regresa',                     year: '1992 · Tim Burton',             badge: 'Cine' },
  { img: '/personajes/smee.jpg',     clip: 'RT8QWvDMz1U', name: 'Mr. Smee',      obra: 'Jake y los Piratas de Nunca Jamás',  year: 'Serie Disney Jr.',              badge: 'Disney' },
  { img: '/personajes/bocon.png',    clip: '89pUQ5QZl28', name: 'Bocón el Rudo', obra: 'Cómo Entrenar a tu Dragón',          year: '2010 · DreamWorks',             badge: 'Animación' },
]

const FILTERS = ['Todos', 'Cine', 'Disney', 'Anime', 'Animación']

export default function Personajes() {
  const [active, setActive] = useState('Todos')
  const [activeClip, setActiveClip] = useState(null)
  const headerRef = useReveal()

  const filtered = active === 'Todos'
    ? PERSONAJES
    : PERSONAJES.filter(p => p.badge === active)

  return (
    <section className="personajes" id="personajes">
      <div className="section-container">
        <div className="section-header" ref={headerRef}>
          <div className="section-label">Portafolio</div>
          <h2 className="section-title">Personajes <span className="gold">Icónicos</span></h2>
          <p className="section-desc">
            Una selección de los personajes más memorables a los que Héctor Lee ha dado voz.
          </p>
        </div>

        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="personajes-grid">
          {filtered.map((p) => (
            <div className="personaje-card" key={p.name}>
              <div className="card-img-wrap" onClick={() => setActiveClip(p.clip)}>
                <img src={p.img} alt={p.name} />
                <div className="card-play-btn" aria-label={`Ver clip de ${p.name}`}>▶</div>
              </div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <p className="card-obra">{p.obra}</p>
                <p className="card-year">{p.year}</p>
                <span className="card-badge">{p.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeClip && (
        <div className="clip-modal-overlay" onClick={() => setActiveClip(null)}>
          <div className="clip-modal" onClick={e => e.stopPropagation()}>
            <button
              className="clip-modal-close"
              onClick={() => setActiveClip(null)}
              aria-label="Cerrar video"
            >✕</button>
            <div className="clip-modal-embed">
              <iframe
                src={`https://www.youtube.com/embed/${activeClip}?autoplay=1&rel=0`}
                title="Clip de personaje"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
