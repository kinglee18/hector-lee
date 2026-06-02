import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-name">Héctor Lee</span>
          <span className="logo-sub">Vargas</span>
        </div>
        <p className="footer-text">Actor · Director · Locutor de Doblaje Mexicano</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Héctor Lee Vargas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
