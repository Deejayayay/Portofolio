
//styles
import './styles/globalstyles.css'
import './styles/app.css'

//pages
import Hero from './pages/hero'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'

function App() {
  return (
    <>
      <div className='app'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>

  )
}

export default App
