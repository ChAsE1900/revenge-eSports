'use client'

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Dc from "@/public/assets/DC_Revenge.png"
import { useRef } from "react"
import { useTranslation } from 'react-i18next'

export default function ProductShowcase() {
  const { t } = useTranslation()

  const imageRef = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"]
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <section id="showcase" className="bg-black text-white bg-gradient-to-b from-black to-violet-900 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          {t("Intuitive Server Structure")}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            {t("Product Showcase Description")}
          </p>
        </div>
        <motion.div className="flex justify-center" style={{ opacity, rotateX, transformPerspective: "800px" }}>
          <Image
            src={Dc}
            alt={t('Intuitive Server Structure')}
            width={1200}
            height={675}
            className="mt-14"
            ref={imageRef}
          />
        </motion.div>
      </div>
    </section>
  )
}
