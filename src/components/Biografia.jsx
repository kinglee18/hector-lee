import { useReveal } from '../hooks/useReveal'
import './Biografia.css'

export default function Biografia() {
  const textRef  = useReveal()
  const imageRef = useReveal(0.1)

  return (
    <section className="biografia" id="biografia">
      <div className="section-container">
        <div className="bio-content">
          <div className="bio-text" ref={textRef}>
            <div className="section-label">Trayectoria</div>
            <h2 className="section-title">
              Una Voz que Marcó <span className="gold">Generaciones</span>
            </h2>
            <p>
              Héctor Lee Vargas es uno de los actores de doblaje más reconocidos del
              doblaje mexicano. Con una carrera que supera los <strong>40 años</strong>,
              su voz ha dado vida a algunos de los personajes más entrañables del cine
              y la televisión de habla hispana.
            </p>
            <p>
              No solo como actor, sino también como <strong>director de doblaje</strong> y{' '}
              <strong>locutor</strong>, su influencia abarca múltiples facetas del mundo
              audiovisual mexicano.
            </p>
            <p>
              Su trabajo con personajes como <strong>E.T.</strong>, <strong>Gonzo</strong> e{' '}
              <strong>Iago</strong> en Aladdin lo posicionan como una leyenda viviente del
              doblaje latinoamericano.
            </p>
            <div className="bio-tags">
              {['Actor de Doblaje', 'Director de Doblaje', 'Locutor', 'Doblaje Mexicano'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="bio-image" ref={imageRef}>
            <div className="bio-img-frame">
              <div className="bio-img-placeholder">
                <div className="mic-icon">🎙️</div>
                <p>Foto de Héctor Lee Vargas</p>
              </div>
              <div className="bio-img-deco" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
