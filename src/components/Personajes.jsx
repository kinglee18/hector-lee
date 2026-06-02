import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Personajes.css'

const PERSONAJES = [
  { img: '/personajes/et.jpg',       name: 'E.T.',          obra: 'E.T. el Extraterrestre',            year: '1982 · Steven Spielberg',      badge: 'Cine' },
  { img: '/personajes/gonzo.jpg',    name: 'Gonzo',         obra: 'Los Muppets',                        year: 'Múltiples producciones',        badge: 'Disney' },
  { img: '/personajes/animal.jpg',   name: 'Animal',        obra: 'Los Muppets',                        year: 'Múltiples producciones',        badge: 'Disney' },
  { img: '/personajes/iago.jpg',     name: 'Iago',          obra: 'Aladdin',                            year: '1992 · Disney',                 badge: 'Disney' },
  { img: '/personajes/kaiosama.png', name: 'Kaiosama',      obra: 'Dragon Ball Z',                      year: 'Serie / Película',              badge: 'Anime' },
  { img: '/personajes/pinguino.png', name: 'El Pingüino',   obra: 'Batman Regresa',                     year: '1992 · Tim Burton',             badge: 'Cine' },
  { img: '/personajes/smee.jpg',     name: 'Mr. Smee',      obra: 'Jake y los Piratas de Nunca Jamás',  year: 'Serie Disney Jr.',              badge: 'Disney' },
  { img: '/personajes/bocon.png',    name: 'Bocón el Rudo', obra: 'Cómo Entrenar a tu Dragón',          year: '2010 · DreamWorks',             badge: 'Animación' },
]

const FILTERS = ['Todos', 'Cine', 'Disney', 'Anime', 'Animación']

export default function Personajes() {
  const [active, setActive] = useState('Todos')
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
              <div className="card-img-wrap">
                <img src={p.img} alt={p.name} />
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
    </section>
  )
}
