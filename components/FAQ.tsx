'use client'

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PlusIcon, MinusIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const items = [
  {
    question: "How do I join the team?",
    answer:
      "To join, simply reach out through our recruitment form on Discord or contact a team manager. Make sure to highlight your skills and experience in competitive gaming!",
  },
  {
    question: "Are there tryouts for new members?",
    answer:
      "Yes, we conduct regular tryouts to evaluate new members. Keep an eye on our Discord announcements for upcoming tryout dates and requirements.",
  },
  {
    question: "Can I switch roles within the team?",
    answer:
      "We're flexible and support role changes if it aligns with the team's needs. Discuss your preferred role with the team captain or coach.",
  },
  {
    question: "How does the team ensure fair play?",
    answer:
      "We have a strict no-cheating policy. Our moderation team actively monitors gameplay, and we use advanced tools to ensure fairness and integrity during matches.",
  },
]

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div 
      className="py-7 border-b border-violet-700 hover:cursor-pointer" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon className="text-violet-500" /> : <PlusIcon className="text-violet-500" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, margin: 0, marginTop: 0 }} 
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }} 
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-violet-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="bg-black text-white bg-gradient-to-b from-violet-900 to-black py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter mb-12">
          {t('Frequently Asked Questions')}
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem 
              question={t(question)} 
              answer={t(answer)} 
              key={question} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}