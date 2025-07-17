import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Zap, Users, Database, Shield } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Personal Telehealth Platform",
      description: "A comprehensive full-stack telehealth platform enabling virtual consultations, real-time symptom prediction via AI, and chatbot-assisted triage. Built with modern technologies for scalability and security.",
      image: "🏥",
      technologies: ["React", "Node.js", "Python", "AI/ML", "WebRTC", "PostgreSQL"],
      features: [
        "Real-time video consultations",
        "AI-powered symptom analysis",
        "Chatbot triage system",
        "HIPAA-compliant architecture",
        "Responsive design"
      ],
      github: "https://github.com/techspire0924/telehealth-platform",
      demo: "#",
      category: "Healthcare"
    },
    {
      title: "LangChain Legal Chatbot",
      description: "AI-powered microservices chatbot for legal document support, leveraging Retrieval-Augmented Generation (RAG) for accurate and contextual responses to legal queries.",
      image: "⚖️",
      technologies: ["React", "FastAPI", "LangChain", "Redis", "pgvector", "RAG"],
      features: [
        "RAG-based document analysis",
        "Legal query processing",
        "Vector similarity search",
        "Microservices architecture",
        "Real-time responses"
      ],
      github: "https://github.com/techspire0924/langchain-legal-bot",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "SoFi Rewards Dashboard",
      description: "High-performance rewards and cashback dashboard built for millions of users. Features real-time transaction processing, dispute management, and comprehensive analytics.",
      image: "💳",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Java", "AWS"],
      features: [
        "Real-time transaction tracking",
        "Cashback calculations",
        "Dispute processing",
        "Performance optimizations",
        "Mobile-first design"
      ],
      github: "#",
      demo: "#",
      category: "Fintech",
      isWork: true
    },
    {
      title: "GE Healthcare Telemedicine",
      description: "HIPAA-compliant telemedicine platform for virtual consultations. Integrated with EHR systems and PACS devices for seamless clinical workflows.",
      image: "🩺",
      technologies: ["React", "Redux", "Java", "Spring Boot", "WebSockets", "D3.js"],
      features: [
        "HIPAA compliance",
        "EHR integration",
        "Real-time diagnostics",
        "Clinical dashboards",
        "Multi-device support"
      ],
      github: "#",
      demo: "#",
      category: "Healthcare",
      isWork: true
    }
  ]

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Healthcare': return <Shield className="w-5 h-5" />
      case 'AI/ML': return <Zap className="w-5 h-5" />
      case 'Fintech': return <Database className="w-5 h-5" />
      default: return <Users className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of impactful applications across healthcare, fintech, and AI
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Project Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.image}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          {getCategoryIcon(project.category)}
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {project.category}
                          </span>
                          {project.isWork && (
                            <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium">
                              Professional
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="text-primary-500 flex-shrink-0">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </motion.a>
                    )}
                    {project.isWork && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg">
                        <Shield size={18} />
                        <span>Proprietary</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Want to see more?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Check out my GitHub for additional projects and contributions to open source.
              </p>
              <motion.a
                href="https://github.com/techspire0924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>View GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
