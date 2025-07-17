import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Resume from './components/Resume'

// ScrollToTop component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Main layout component
function MainLayout({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  return (
    <>
      <AnimatedBackground />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
      
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <BrowserRouter basename="/Portfolio">
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/resume" element={
            <>
              <AnimatedBackground />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
