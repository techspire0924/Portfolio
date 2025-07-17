'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap } from 'lucide-react'
import { experience, education, skills } from '@/data/resume'

export default function About() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my professional experience, skills, and passion for building impactful software solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300 mb-2">
                      {job.position}
                    </h3>
                    <h4 className="text-xl text-white mb-2">{job.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 leading-relaxed">
                      <span className="text-blue-300 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Education
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-300 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-xl text-white mb-2">{education.school}</h4>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{education.duration}</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">
                Relevant Coursework:
              </h5>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
