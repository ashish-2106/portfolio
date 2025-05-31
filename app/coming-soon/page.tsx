"use client"

import { Button } from "@/components/ui/button"
import { Dancing_Script } from "next/font/google"
import { motion } from "framer-motion"

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"], // Use bold for better clarity
})

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white flex-col relative overflow-hidden px-4">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Animated Heading with Shadow */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${dancing.className} text-6xl md:text-7xl mb-4 text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.25)] animate-bounce`}
      >
        Coming Soon
      </motion.h1>

      {/* Typing animation for subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-md md:text-lg text-gray-300 mb-8 border-l-4 border-purple-500 pl-4 animate-typing overflow-hidden whitespace-nowrap"
      >
        This project will be live shortly. Stay tuned!
      </motion.p>

      {/* Go Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Button
          onClick={() => window.history.back()}
          className="bg-white text-black hover:bg-gray-200 transition-all duration-300"
        >
          ← Go Back
        </Button>
      </motion.div>
    </div>
  )
}
