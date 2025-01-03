'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Users, Trophy, Sword } from 'lucide-react'
import Fortnite from "@/public/assets/EN_BXECO_33-00_Shooter_EGS_Launcher_Blade_2560x1440_2560x1440-36e1ff15dc00cd506986a2565764bbd3.jpeg"
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const fortniteStats = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    titleKey: "Active Players",
    descriptionKey: "Active Players Description",
    value: "350M+"
  },
  {
    icon: <Users className="w-8 h-8" />,
    titleKey: "Team Members",
    descriptionKey: "Team Members Description",
    value: "20"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    titleKey: "Tournaments Won",
    descriptionKey: "Tournaments Won Description",
    value: "?"
  },
  {
    icon: <Sword className="w-8 h-8" />,
    titleKey: "Win Rate",
    descriptionKey: "Win Rate Description",
    value: "75%"
  }
]

function App() {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div id="teams" className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500">
            {t('Fortnite Division')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('Fortnite Description')}
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16 cursor-pointer transition duration-500"
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Image src={Fortnite} alt="Fortnite Gaming Setup"
            className="w-full h-[400px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-8">
              <motion.h3
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('Our Gaming Facility')}
              </motion.h3>
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-300"
                  >
                    {t('Facility Description')}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fortniteStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <motion.div
                className="mb-4 text-yellow-400 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{t(stat.titleKey)}</h3> {/* Translate the title */}
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{t(stat.descriptionKey)}</p> {/* Translate the description */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App