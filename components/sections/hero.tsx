'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onStartClick: () => void
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#E9FBEF' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-100 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: '#1A2B4C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Air Pollution
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl mb-8"
          style={{ color: '#1A2B4C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Causes, Effects & Solutions
        </motion.p>
        
        <motion.p
          className="text-lg mb-12"
          style={{ color: '#556B7E' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Chemistry Presentation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={onStartClick}
            className="text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
            style={{ backgroundColor: '#1A2B4C' }}
          >
            Start Presentation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
