import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  { value: 40, suffix: '+', label: 'Años de carrera' },
  { value: 200, suffix: '+', label: 'Personajes doblados' },
  { value: 100, suffix: '+', label: 'Producciones dirigidas' },
  { value: null, text: 'MX',  label: 'Doblaje Mexicano' },
]

function Counter({ value, suffix, text }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (text || value === null) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1500
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(value * ease))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, text])

  return (
    <span className="stat-number" ref={ref}>
      {text ?? (count + (suffix ?? ''))}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {STATS.map((s) => (
          <div className="stat-item" key={s.label}>
            <Counter value={s.value} suffix={s.suffix} text={s.text} />
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
