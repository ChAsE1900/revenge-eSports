'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const teamMembers = [
  { name: 'John Doe', position: 'CEO', image: '/placeholder.svg', description: 'Visionary leader with 10+ years in esports management.' },
  { name: 'Jane Smith', position: 'COO', image: '/placeholder.svg', description: 'Operations expert, streamlining our processes for peak performance.' },
  { name: 'Mike Johnson', position: 'Head of Player Development', image: '/placeholder.svg', description: 'Former pro gamer, now nurturing the next generation of talent.' },
  { name: 'Emily Brown', position: 'Marketing Director', image: '/placeholder.svg', description: 'Creative mind behind our brand\'s global recognition.' },
  { name: 'Chris Lee', position: 'Chief Strategy Officer', image: '/placeholder.svg', description: 'Mastermind of our competitive strategies across all game titles.' },
  { name: 'Alex Wong', position: 'Head of Partnerships', image: '/placeholder.svg', description: 'Building strong relationships with sponsors and partners worldwide.' },
]

const OurBrand: React.FC = () => {
  const { t } = useTranslation()
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [isGridView, setIsGridView] = useState(true)

  const toggleView = () => setIsGridView((prev) => !prev)

  return (
    <section id="our-brand" className="min-h-screen py-16 bg-gradient-to-b from-black to-violet-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('Our Brand')}
        </motion.h2>
        <div className="mb-8 flex justify-center">
          <button
            onClick={toggleView}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {isGridView ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-violet-800 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedMember(index)}
                >
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-violet-300">{t(member.position)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-violet-800 rounded-lg overflow-hidden cursor-pointer flex items-center"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMember(index)}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-violet-300">{t(member.position)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-center mb-2">{teamMembers[selectedMember].name}</h3>
              <p className="text-violet-300 text-center mb-4">{t(teamMembers[selectedMember].position)}</p>
              <p className="text-center mb-6">
                {teamMembers[selectedMember].description}
              </p>
              <button
                className="mt-4 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full block mx-auto"
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

export default OurBrand

