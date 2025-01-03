'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function LatestNews() {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const news = [
    { 
      title: t("Revenge eSports Wins Major Tournament"),
      date: t("2023-06-15"),
      content: t("Our team dominated the finals, securing a decisive victory and cementing our position as top contenders in the competitive scene.")
    },
    { 
      title: t("New Star Player Joins Our Dota 2 Team"),
      date: t("2023-06-10"),
      content: t("We're thrilled to welcome pro player 'Neon' to our roster, bringing years of high-level experience to strengthen our team.")
    },
    { 
      title: t("Upcoming Charity Stream Event"),
      date: t("2023-06-05"),
      content: t("Join us this weekend for a 24-hour charity stream supporting gaming accessibility. Special guests and prizes announced soon!")
    },
    { 
      title: t("Revenge eSports Launches Junior League"),
      date: t("2023-05-28"),
      content: t("We're excited to announce our new junior league, fostering the next generation of esports talent. Sign-ups open next week!")
    },
  ];

  return (
    <section id="news" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-black to-violet-900">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t('Latest News')}</h2>
      <div className="max-w-4xl w-full">
        {news.map((item, index) => (
          <motion.div
            key={index}
            className="bg-violet-800 p-6 rounded-lg mb-6 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            layout
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <motion.h3 className="text-2xl font-bold mb-2">{item.title}</motion.h3>
            <motion.p className="text-violet-300 mb-2">{item.date}</motion.p>
            <motion.div
              initial={false}
              animate={{ height: expandedIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-white/80">{item.content}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

