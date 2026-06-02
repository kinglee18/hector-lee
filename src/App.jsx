import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Biografia from './components/Biografia'
import Personajes from './components/Personajes'
import Videos from './components/Videos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Biografia />
        <Personajes />
        <Videos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
