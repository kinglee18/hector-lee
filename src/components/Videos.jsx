import { useReveal } from '../hooks/useReveal'
import './Videos.css'

const VIDEOS = [
  {
    id: 'XlusNfoUHHI',
    title: 'Conociendo a Héctor Lee Vargas',
    desc: 'Dragon Ball y su trayectoria en el doblaje',
    badge: 'Entrevista',
    featured: true,
  },
  {
    id: 'yDRBsNiQl10',
    title: 'Actor de Doblaje Disney',
    desc: 'Locutor, actor y director de doblaje',
    badge: 'Disney',
  },
  {
    id: 'PFLnjmhrdKk',
    title: 'Doblaje Mexicano',
    desc: 'Una vida dedicada al doblaje en México',
    badge: 'Doblaje',
  },
]

export default function Videos() {
  const headerRef = useReveal()

  return (
    <section className="videos" id="videos">
      <div className="section-container">
        <div className="section-header" ref={headerRef}>
          <div className="section-label">Multimedia</div>
          <h2 className="section-title">Escucha su <span className="gold">Voz</span></h2>
          <p className="section-desc">
            Videos y entrevistas donde podrás conocer el talento y la trayectoria de Héctor Lee Vargas.
          </p>
        </div>

        <div className="videos-grid">
          {VIDEOS.map((v) => (
            <div className={`video-card ${v.featured ? 'featured' : ''}`} key={v.id}>
              <div className="video-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <span className="video-badge">{v.badge}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="videos-cta">
          <a
            href="https://www.youtube.com/@hectorleevargas5164"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Ver Canal de YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
