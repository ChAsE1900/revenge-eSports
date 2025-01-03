'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const teamMembers = [
  { name: 'John Doe', position: 'Team Captain', image: '/placeholder.svg' },
  { name: 'Jane Smith', position: 'Strategic Coach', image: '/placeholder.svg' },
  { name: 'Mike Johnson', position: 'Lead Analyst', image: '/placeholder.svg' },
  { name: 'Emily Brown', position: 'Performance Manager', image: '/placeholder.svg' },
  { name: 'Chris Lee', position: 'Social Media Manager', image: '/placeholder.svg' },
  { name: 'Alex Wong', position: 'Esports Psychologist', image: '/placeholder.svg' },
]

export default function OurTeam() {
  const { t } = useTranslation()
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  return (
    <section id="our-team" className="min-h-screen py-16 bg-gradient-to-b from-black to-violet-900">
      <div className="container mx-auto px-4 cursor-pointer">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('Our Team')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedMember(index)}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-violet-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-violet-300">{t(member.position)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-violet-900 p-8 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={teamMembers[selectedMember].image} 
                alt={teamMembers[selectedMember].name} 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-center mb-2">{teamMembers[selectedMember].name}</h3>
              <p className="text-violet-300 text-center mb-4">{t(teamMembers[selectedMember].position)}</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full block mx-auto"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

