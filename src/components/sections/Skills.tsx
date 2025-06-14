'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 70 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 55 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Mijn Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologieën en tools waar ik dagelijks mee werk en waarin ik me blijf ontwikkelen
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.2) + (techIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: (groupIndex * 0.2) + (techIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Wat ik momenteel leer</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React Native", "GraphQL", "Kubernetes", "Angular"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium border border-orange-200 shadow-md inline-block w-fit"
              >
                🚀 {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
