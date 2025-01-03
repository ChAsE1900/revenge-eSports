"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
}

export function TeamMember({ name, role, image, bio, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-violet-900/20 rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-violet-400 mb-4">{role}</p>
        <p className="text-gray-300 mb-4">{bio}</p>
        <div className="flex gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <a href="#" className="text-white hover:text-violet-400 transition-colors">
            <FaDiscord className='text-xl' />
          </a>
        </div>
      </div>
    </motion.div>
  );
}