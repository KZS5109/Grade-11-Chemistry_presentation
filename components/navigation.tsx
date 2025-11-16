'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Causes', id: 'causes' },
  { label: 'Effects', id: 'effects' },
  { label: 'Reactions', id: 'reactions' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Quiz', id: 'quiz' },
]

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        const nextSection = Math.min(currentSection + 1, navItems.length - 1)
        setCurrentSection(nextSection)
        scrollToSection(navItems[nextSection].id)
      } else if (e.key === 'ArrowUp') {
        const prevSection = Math.max(currentSection - 1, 0)
        setCurrentSection(prevSection)
        scrollToSection(navItems[prevSection].id)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSection])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold"
            style={{ color: '#1A2B4C' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Air Pollution
          </motion.h1>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-all relative group"
                style={{ color: '#1A2B4C' }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <div className="scroll-hint flex flex-col items-center gap-1 text-xs font-medium text-gray-600 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-gray-500">Navigate</span>
        <div className="flex flex-col gap-1">
          <ChevronUp size={16} className="mx-auto" />
          <ChevronDown size={16} className="mx-auto" />
        </div>
      </div>
    </>
  )
}
