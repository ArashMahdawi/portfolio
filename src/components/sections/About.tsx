'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiEnvelope, HiChevronDown, HiEye, HiArrowDownTray } from 'react-icons/hi2'
import { PiReadCvLogoBold } from "react-icons/pi"

export default function About() {
  const [showCvDropdown, setShowCvDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCvDropdown(false)
      }
    }

    if (showCvDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCvDropdown])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowCvDropdown(false)
      }
    }

    if (showCvDropdown) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [showCvDropdown])

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React & Next.js", "TypeScript", "Vue.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "PostgreSQL", "MySQL", "REST APIs", "Docker", "phpMyAdmin"] },
    { category: "Authentication", items: ["SAML/SSO", "MS Entra ID", "JWT"] },
    { category: "Tools", items: ["Git", "VS Code", "Vercel", "Wappler", "Figma", "Microsoft Azure"] },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Over Mij</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gepassioneerde developer met een oog voor detail en liefde voor clean code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative self-start md:mt-6"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-84 md:w-80 md:h-88 mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl -rotate-6"></div>
              
              {/* Profile photo */}
              <div className="relative w-full h-80 sm:h-84 md:h-88 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Me.png"
                  alt="Arash Mahdawi-Nader"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-gray-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hallo! Ik ben Arash Mahdawi-Nader
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-600 leading-relaxed px-5"
            >
              <p>
                Als developer met meer dan 3 jaar ervaring ben ik gepassioneerd over het creëren van
                gebruiksvriendelijke en efficiënte web applicaties. Ik hou van het oplossen
                van complexe problemen en het leren van nieuwe technologieën.
              </p>
              <p>
                Mijn expertise ligt in frontend development, maar ik werk ook graag met
                backend technologieën om complete full-stack oplossingen te bouwen.
              </p>
              <p>
                Ik geloof in clean code, goede communicatie en het leveren van kwaliteit
                die zowel gebruikers als bedrijven helpt groeien.
              </p>
            </motion.div>

            {/* Quick Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">{skillGroup.category}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {skillGroup.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center"
              >
                <HiEnvelope className="w-5 h-5 mr-2" />
                Neem Contact Op
              </motion.a>

              {/* CV Dropdown */}
              <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                <motion.button
                  onClick={() => setShowCvDropdown(!showCvDropdown)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all text-center flex items-center justify-center w-full sm:w-auto"
                  aria-expanded={showCvDropdown}
                  aria-haspopup="true"
                >
                  <PiReadCvLogoBold className="w-5 h-5 mr-2" />
                  CV
                  <HiChevronDown className={`w-4 h-4 ml-2 transition-transform ${showCvDropdown ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* Dropdown Menu */}
                {showCvDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[180px] z-50 left-1/2 transform -translate-x-1/2"
                  >
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-t-lg transition-colors"
                      onClick={() => setShowCvDropdown(false)}
                    >
                      <HiEye className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-gray-700">Bekijk CV</span>
                    </a>
                    <div className="border-t border-gray-100"></div>
                    <a
                      href="/cv.pdf"
                      download="Arash_Mahdawi_CV.pdf"
                      className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-b-lg transition-colors"
                      onClick={() => setShowCvDropdown(false)}
                    >
                      <HiArrowDownTray className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-gray-700">Download CV</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}