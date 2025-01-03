"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <html lang="en">
      <I18nextProvider i18n={i18n}>
        <body className={inter.className}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: true },
              fpsLimit: 60,
              particles: {
                color: { value: "#8b5cf6" },
                links: {
                  color: "#8b5cf6",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 1, max: 5 }
                }
              },
              detectRetina: true
            }}
          />
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </body>
      </I18nextProvider>
    </html>
  )
}

