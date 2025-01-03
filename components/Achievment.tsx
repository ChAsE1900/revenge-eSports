'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Crown, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const achievements = [
  {
    key: 'Reopening Success',
    description: 'Reopened with over 200 active Discord members on January 1, 2025.',
    icon: <Crown className="w-8 h-8" />,
    stat: '20+'
  },
  {
    key: 'Growth Since 2019',
    description: 'Focused on community building and increasing participation in tournaments.',
    icon: <Star className="w-8 h-8" />,
    stat: '6 Years'
  },
  {
    key: 'Tournament Highlights',
    description: 'Top 10 finishes in regional Fortnite and Valorant events in 2023.',
    icon: <Trophy className="w-8 h-8" />,
    stat: '10+'
  },
  {
    key: 'Community Events',
    description: 'Regular internal tournaments and game nights to engage the community.',
    icon: <Target className="w-8 h-8" />,
    stat: '20+'
  }
];

export function Achievements() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("Our Goals")}
          </h2>
          <p className="text-gray-400">
            {t("Strong together since 2019")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-violet-900/20 rounded-xl p-6 text-center"
            >
              <div className="text-violet-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {achievement.stat}
              </h3>
              <h4 className="text-lg font-semibold text-violet-400 mb-2">
                {t(achievement.key)}
              </h4>
              <p className="text-gray-400">
                {t(achievement.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}