'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const features = [
  {
    titleKey: 'Professional Coaching', 
    descriptionKey: 'Professional Coaching Description', 
    icon: '🎮'
  },
  {
    titleKey: 'State-of-the-art Facilities', 
    descriptionKey: 'State-of-the-art Facilities Description', 
    icon: '🏠'
  },
  {
    titleKey: 'Global Tournaments', 
    descriptionKey: 'Global Tournaments Description', 
    icon: '🌍'
  }
]

export default function Features() {
  const { t } = useTranslation()  // Hook for i18n translation
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t('Why Choose Us')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-violet-900 rounded-2xl p-6 cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              className="absolute inset-0 bg-violet-800"
              initial={{ scale: 0, borderRadius: '100%' }}
              animate={{ scale: hoveredIndex === index ? 1 : 0, borderRadius: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{t(feature.titleKey)}</h3>  {/* Dynamically translated feature title */}
              <p>{t(feature.descriptionKey)}</p>  {/* Dynamically translated feature description */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}