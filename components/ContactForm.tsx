'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('Contact Us')}</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="name" className="block text-violet-300 mb-2">{t('Name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full p-2 bg-violet-900 rounded"
            required
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-violet-300 mb-2">{t('Email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-2 bg-violet-900 rounded"
            required
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="message" className="block text-violet-300 mb-2">{t('Message')}</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full p-2 bg-violet-900 rounded h-32"
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('Send Message')}
        </motion.button>
      </form>
    </section>
  )
}

