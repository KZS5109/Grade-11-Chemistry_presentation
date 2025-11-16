'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const students = [
    'Kun Zaw Sint',
    'Hlyan Moe Myint Myat',
    'Kyaw Lin Htet'
  ]

  return (
    <footer ref={ref} className="w-full bg-gray-900 text-white py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between gap-12">
          {/* Logos Section */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* School and Group Logos */}
            <div className="flex items-center justify-center gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-11-08_14-09-18-sxc2gEwjtk1ng2Fj4yxfnyCZsYXQhn.jpg"
                alt="TrioLens Group Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%288%29-nBoOqeXyzwYEhAVBusJCgZsffymxmP.png"
                alt="CAE School Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Powered by text and Vercel/v0 logos */}
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">Powered by Vercel and v0</p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M24 0v24H0V0h24zM8 5l8 14 8-14H8z" />
                  </svg>
                </a>
                <a href="https://v0.dev" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <text x="2" y="18" fontSize="18" fontWeight="bold">v0</text>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Air Pollution: Causes, Effects & Solutions</p>
            
            <div className="text-gray-400 space-y-2">
              <p className="text-sm">Chemistry Presentation</p>
              <p className="text-sm font-medium">Students:</p>
              <div className="space-y-1">
                {students.map((student) => (
                  <p key={student} className="text-sm">{student}</p>
                ))}
              </div>
              <p className="text-sm">Class: Chemistry 101</p>
            </div>

            <p className="text-sm text-gray-500 pt-2">© 2025 Chemistry Presentation</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
