import { motion } from 'framer-motion'
import { ArrowDown, FileText, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                  KW
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Kevin Wang</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
          >
            Senior Software Engineer
          </motion.h2>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>kevin.wang.logic@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>(689) 264-8831</span>
            </div>

          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Product-minded Full Stack Engineer with <span className="font-semibold text-primary-600 dark:text-primary-400">11+ years</span> of experience 
            shipping production-ready software in fast-paced startup environments. 
            Specialized in <span className="font-semibold text-secondary-600 dark:text-secondary-400">React, Node.js, Python, Java, Go</span> and 
            scalable cloud-native microservices.
          </motion.p>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Contact Me
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <FileText size={18} />
              View Resume
            </Link>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12 mb-12"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/kevin-wang-4a4200353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/techspire0924"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
