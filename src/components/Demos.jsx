import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Demos.css'

const DEMOS = [
  {
    file: '/audio/hector-lee-altos-tequila.wav',
    title: 'Altos Tequila',
    desc: 'Spot comercial bilingüe — Inglés / Español',
    badge: 'Comercial',
    lang: 'EN / ES',
  },
]

function AudioPlayer({ file, title }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const togglePlay = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
    } else {
      a.play()
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    const a = audioRef.current
    if (!a) return
    setCurrent(a.currentTime)
    setProgress((a.currentTime / a.duration) * 100 || 0)
  }

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0)
  }

  const onEnded = () => {
    setPlaying(false)
    setProgress(0)
    setCurrent(0)
  }

  const seek = (e) => {
    const a = audioRef.current
    if (!a) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    a.currentTime = ratio * a.duration
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={file}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
      <button className={`play-btn ${playing ? 'pause' : 'play'}`} onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Reproducir'}>
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>
      <div className="audio-track-wrap">
        <div className="audio-progress-bar" onClick={seek} role="slider" aria-label="Progreso" tabIndex={0}>
          <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
          <div className="audio-progress-thumb" style={{ left: `${progress}%` }} />
        </div>
        <div className="audio-time">
          <span>{fmt(current)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>
    </div>
  )
}

export default function Demos() {
  const headerRef = useReveal()

  return (
    <section className="demos" id="demos">
      <div className="section-container">
        <div className="section-header" ref={headerRef}>
          <div className="section-label">Demos</div>
          <h2 className="section-title">Demos de <span className="gold">Voz</span></h2>
          <p className="section-desc">
            Muestras de locución y doblaje que reflejan la versatilidad y el alcance de su voz.
          </p>
        </div>

        <div className="demos-list">
          {DEMOS.map((d) => (
            <div className="demo-card" key={d.file}>
              <div className="demo-card-top">
                <div className="demo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div className="demo-meta">
                  <span className="video-badge">{d.badge}</span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
                <span className="demo-lang">{d.lang}</span>
              </div>
              <AudioPlayer file={d.file} title={d.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
