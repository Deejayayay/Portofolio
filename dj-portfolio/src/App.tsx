
//styles
import './styles/globalstyles.css'


//pages
import Hero from './pages/hero'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Nav from './pages/nav'
function App() {

  return (
    <>
      <Nav />
      <div className='app'>
      <main>
        <section id="hero">
          <Hero />
          
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      </div>
    </>
  )
}

export default App
