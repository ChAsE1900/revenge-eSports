'use client'

import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const backgroundAnimation = useAnimation()
  const [isHovering, setIsHovering] = useState(false)

  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    backgroundAnimation.start({
      backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
    })
  }, [mousePosition, backgroundAnimation])

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Esports Arena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2  bg-[radial-gradient(closest-side,#000_82%,#8B5CF6)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] opacity-90"></div>
      <motion.div
        className="absolute inset-0 bg-violet-900 opacity-20 rounded-3xl"
        animate={backgroundAnimation}
        transition={{ type: 'tween', ease: 'linear' }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Revenge <span className="text-violet-500">eSports</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {t('Dominating the digital battlefield')}
        </motion.p>
        <Link href="https://discord.gg/WvbSa5fGtX">
        <motion.button
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          {t('Join Our Team')}
        </motion.button>
        </Link>
        <motion.div
          className="mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {t('Ready to become a champion?')}
        </motion.div>
      </div>
    </section>
  )
}