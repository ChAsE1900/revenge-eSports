'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import acmeLogo from "@/public/assets/acme.png" // Correct import for assets inside /public
import quantumLogo from "@/public/assets/quantum.png" // Correct import for quantum.png image
import echoLogo from "@/public/assets/echo.png" // Correct import for echo.png image
import celestialLogo from "@/public/assets/celestial.png" // Correct import for celestial.png image
import pulseLogo from "@/public/assets/pulse.png" // Correct import for pulse.png image
import apexLogo from "@/public/assets/apex.png" // Correct import for apex.png image

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
]

export const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container flex justify-center">
        <h2 className="pl-10 text-xl text-center text-white/30">{t("Trusted by the world's most innovative teams")}</h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div 
            transition={{ duration: 20, ease: "linear", repeat: Infinity }} 
            initial={{ translateX: 0 }} 
            animate={{ translateX: "-50%" }} 
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};