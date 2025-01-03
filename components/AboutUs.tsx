'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const interactiveContent = [
  { titleKey: "MissionTitle", contentKey: "MissionContent" },
  { titleKey: "VisionTitle", contentKey: "VisionContent" },
  { titleKey: "ValuesTitle", contentKey: "ValuesContent" },
  { titleKey: "AchievementsTitle", contentKey: "AchievementsContent" },
]

export default function AboutUs() {
  const { t } = useTranslation()

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % interactiveContent.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + interactiveContent.length) % interactiveContent.length)
  }

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4">
      <motion.div
        className="absolute inset-0 bg-violet-900 opacity-10"
        style={{ y }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('About')}</h2>
        <p className="text-lg md:text-xl mb-8">
          {t('About Us Description')} {/* Example for translating 'About Us' description */}
        </p>
        <motion.button
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          {t('Learn More')} {/* Translated Learn More button text */}
        </motion.button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-violet-900 p-8 max-w-2xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {t(interactiveContent[currentIndex].titleKey)} {/* Translated Title */}
                </h3>
                <p className="text-lg mb-8">
                  {t(interactiveContent[currentIndex].contentKey)} {/* Translated Content */}
                </p>
              </motion.div>
              <div className="flex justify-between">
                <button
                  className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={prevSlide}
                >
                  {t('Previous')} {/* Translated button text */}
                </button>
                <button
                  className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={nextSlide}
                >
                  {t('Next')} {/* Translated button text */}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}