'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import Causes from '@/components/sections/causes'
import Effects from '@/components/sections/effects'
import Reactions from '@/components/sections/reactions'
import Solutions from '@/components/sections/solutions'
import Quiz from '@/components/sections/quiz'
import Footer from '@/components/footer'

export default function Page() {
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <div className="bg-white">
      <Navigation />
      <main>
        <Hero onStartClick={() => {
          document.getElementById('causes')?.scrollIntoView({ behavior: 'smooth' })
        }} />
        <Causes />
        <Effects />
        <Reactions />
        <Solutions />
        <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} onOpen={() => setQuizOpen(true)} />
        <Footer />
      </main>
    </div>
  )
}
