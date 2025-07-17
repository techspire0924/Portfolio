import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, Zap } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      company: "SoFi",
      position: "Senior Software Engineer",
      duration: "Apr 2019 - May 2025",
      location: "San Francisco, CA",
      logo: "💰",
      achievements: [
        "Built high-performance rewards dashboard with React, Next.js, TypeScript, boosting user engagement by 20%",
        "Developed microservices using Java, Python, Go, and gRPC, reducing support volume by 35%",
        "Led internal business operations portal redevelopment, improving ticket resolution by 45%",
        "Optimized frontend performance, reducing mobile load time by 35% through lazy loading and code splitting",
        "Improved API response times by 40% with Redis caching and async processing",
        "Implemented real-time alerts with Kafka and AWS Lambda, achieving 99% delivery under 2 seconds"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Java", "Python", "Go", "AWS", "Kafka", "Redis"]
    },
    {
      company: "GE Healthcare",
      position: "Software Engineer - Digital Health",
      duration: "Sep 2016 - Feb 2019",
      location: "Chicago, IL",
      logo: "🏥",
      achievements: [
        "Built HIPAA-compliant telemedicine UI with React, Redux, Java, driving 3x pilot adoption",
        "Engineered low-latency APIs with WebSockets and REST, achieving <300ms round-trip time",
        "Implemented server-side rendering and D3.js dashboards, optimizing clinical terminal load time by 25%",
        "Collaborated with clinical advisors and UX researchers to iterate on diagnostic workflows"
      ],
      technologies: ["React", "Redux", "Java", "Spring Boot", "Python", "Django", "WebSockets", "D3.js"]
    },
    {
      company: "Globant",
      position: "Full Stack Engineer - Growth & Commerce",
      duration: "Jul 2013 - Aug 2016",
      location: "Buenos Aires, Argentina",
      logo: "🛒",
      achievements: [
        "Delivered mobile-optimized e-commerce frontend with AngularJS, increasing conversion rates by 22%",
        "Built real-time analytics dashboards with Elasticsearch and Kibana, reducing report generation time by 60%",
        "Created CMS automation features with Python and NLTK, improving content deployment efficiency by 40%"
      ],
      technologies: ["AngularJS", "Node.js", "Python", "Flask", "Elasticsearch", "Kibana", "Bootstrap"]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-6">
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building impactful solutions across fintech, healthcare, and e-commerce
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Company Header */}
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{exp.logo}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                          {exp.position}
                        </p>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <TrendingUp size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-primary-500 mt-1.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Zap size={18} />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">11+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Major Companies</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
              <div className="text-gray-600 dark:text-gray-400">Users Impacted</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
