import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // State for PDF loading status
  const [isLoading, setIsLoading] = useState(true)

  // Handle PDF loading event
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Fallback in case onLoad doesn't fire
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="resume" className="py-10 px-4 sm:py-16 sm:px-6 min-h-screen flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto w-full flex-grow flex flex-col"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
              My Resume
            </h2>
            <Link 
              to="/"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>
          
          {/* PDF viewer */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-1 sm:p-2 flex-grow flex flex-col relative overflow-hidden"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            )}
            
            <iframe 
              src="/Portfolio/assets/kevin_wang_resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              className="w-full h-full flex-grow rounded-lg" 
              title="Kevin Wang's Resume" 
              onLoad={() => setIsLoading(false)}
              style={{ minHeight: 'calc(100vh - 200px)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
