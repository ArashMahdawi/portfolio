'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'
import { HiXMark, HiPlay, HiPause } from 'react-icons/hi2'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const openDemo = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
    setIsPlaying(true) // Start meteen
  }

  const closeDemo = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setIsPlaying(false)
  }

  const toggleDemo = () => {
    setIsPlaying(!isPlaying)
  }

  // Separate useEffect voor de slideshow interval
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (isPlaying && selectedProject) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prev) => {
          const project = projects.find(p => p.id === selectedProject)
          if (project?.screenshots) {
            return prev === project.screenshots.length - 1 ? 0 : prev + 1
          }
          return prev
        })
      }, 2500) // 2.5 seconden per foto
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isPlaying, selectedProject]) // Dependency op beide values

  const currentProject = projects.find(p => p.id === selectedProject)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Mijn Projecten
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Een selectie van projecten waar ik trots op ben. Van concept tot deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
  {project.image ? (
    <div className="relative w-full h-full p-4">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index === 0}
      />
    </div>
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="text-white font-semibold text-lg text-center px-4"
      >
        {project.title}
      </motion.div>
    </div>
  )}
  {!project.screenshots && (
    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium z-10">
      Coming Soon
    </div>
  )}
  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        GitHub
                      </motion.a>
                    )}
                    
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <motion.button
                        onClick={() => openDemo(project.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <HiPlay className="w-4 h-4" />
                        Live Demo
                      </motion.button>
                    ) : project.liveUrl ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      >
                        Live Demo
                      </motion.a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Demo Modal */}
      <AnimatePresence>
        {selectedProject && currentProject?.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeDemo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                  <p className="text-gray-300">
                    {isPlaying ? 'Demo wordt afgespeeld...' : 'Demo gepauzeerd'}
                  </p>
                </div>
                <button
                  onClick={closeDemo}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <HiXMark className="w-8 h-8" />
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full h-[70vh] bg-white rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={currentProject.screenshots[currentImageIndex]}
                  alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    key={`${currentImageIndex}-${isPlaying}`} // Key update voor restart
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={toggleDemo}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <HiPause className="w-4 h-4" />
                      Pause Demo
                    </>
                  ) : (
                    <>
                      <HiPlay className="w-4 h-4" />
                      Start Demo
                    </>
                  )}
                </button>
                
                <div className="text-white text-sm bg-black/50 px-3 py-2 rounded-lg">
                  {currentImageIndex + 1} / {currentProject.screenshots.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
