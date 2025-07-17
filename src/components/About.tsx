import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Rocket, Users, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Expertise",
      description: "11+ years building scalable applications with React, Node.js, Python, Java, and Go"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Experience",
      description: "Led 0→1 development efforts and scaled systems in fast-paced environments"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cross-Functional Leader",
      description: "Strong collaboration with product, design, and business teams in Agile environments"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Improved load times by 35%, API response times by 40%, and reduced incidents by 67%"
    }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about building exceptional user experiences and scalable systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    With over a decade in software engineering, I've had the privilege of working 
                    across diverse industries—from fintech at <span className="font-semibold text-primary-600 dark:text-primary-400">SoFi</span> to 
                    healthcare at <span className="font-semibold text-secondary-600 dark:text-secondary-400">GE Healthcare</span>.
                  </p>
                  <p>
                    I specialize in rapid prototyping, lean product iteration, and architecting 
                    high-impact applications that scale. My experience spans the full stack, 
                    from crafting intuitive React frontends to building robust microservices 
                    architectures on AWS and GCP.
                  </p>
                  <p>
                    What drives me is the intersection of technology and user experience—creating 
                    solutions that not only work flawlessly but delight users and drive business value.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">11+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                My Philosophy
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                "Great software is not just about clean code—it's about understanding user needs, 
                collaborating effectively with teams, and building solutions that create real value. 
                I believe in continuous learning, rapid iteration, and the power of technology to 
                solve meaningful problems."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
