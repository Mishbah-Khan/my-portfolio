import Cursor from './components/cursor/Cursor';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Stats from './components/stats/Stats';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import './App.css'
import Tools from './components/tool/Tools';

function App() {

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Tools />
      <div className="noise-overlay"></div>
    </div>
  )
}

export default App
