import './Hero.css'

const chars = ['E.T.', 'Gonzo', 'Iago', 'Kaiosama', 'El Pingüino']

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">Actor · Director · Locutor de Doblaje</p>
        <h1 className="hero-title">
          Héctor Lee<br />
          <span className="gold">Vargas</span>
        </h1>
        <p className="hero-subtitle">
          Más de <strong>40 años</strong> dando voz a los personajes más icónicos
          del cine y la televisión en español.
        </p>
        <div className="hero-chars">
          {chars.map((c, i) => (
            <span key={c}>
              {c}{i < chars.length - 1 && <span className="sep"> · </span>}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a href="#personajes" className="btn btn-primary">Ver Personajes</a>
          <a href="#videos"     className="btn btn-outline">Escuchar su Voz</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
