'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'

const goals = [
  "Goal 1",
  "Goal 2",
  "Goal 3",
  "Goal 4"
]

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-violet-700 text-white px-4 py-2 rounded-full text-sm font-bold">
    {children}
  </span>
)

export default function FutureGoals() {
  const [currentGoal, setCurrentGoal] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoal((prev) => (prev + 1) % goals.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="future-goals" className="bg-violet-900 py-28 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Tag>{t('Future Goals')}</Tag>
          <h2 className="text-4xl md:text-6xl lg:text-6xl text-center text-white font-medium mt-10 mb-8">
            {t('Revenge eSports')}
          </h2>
          <div className="h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentGoal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl text-center text-violet-300 max-w-[1000px]"
              >
                {t(goals[currentGoal])}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="text-white text-xl mt-8">
            {t('Goal Description')}
          </p>
        </div>
      </div>
    </section>
  )
}