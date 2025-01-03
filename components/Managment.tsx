'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from './TeamMember'
import { useTranslation } from 'react-i18next'

const management = [
  {
    name: 'Finnmac',
    role: 'Co-Owner & CEO',
    image: '/assets/image.png',
    bio: 'Experienced owner of an esports brand',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Tainen',
    role: 'Co-Owner & COO',
    image: '/assets/76225c870d48ae1dca38cc8df79d1017.png',
    bio: 'Esports veteran and a lot of experience in Fortnite competitive',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Louis',
    role: 'Team Manager',
    image: '/assets/LLdLtIsp_400x400.png',
    bio: 'Team Manager with many years of experience',
    socials: { twitter: '#', linkedin: '#' }
  }
];

export function Management() {
  const { t } = useTranslation()

  return (
    <section id="our-team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('Management Team')}
          </h2>
          <p className="text-gray-400">{t('Visionaries Description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {management.map((person, index) => (
            <TeamMember
              key={person.name}
              {...person}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}