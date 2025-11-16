'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FlaskConical } from 'lucide-react'

const reactions = [
  {
    title: 'Sulfur Dioxide Reaction',
    equation: 'SO₂ + H₂O → H₂SO₃',
    description: 'Forms sulfurous acid, a component of acid rain',
  },
  {
    title: 'Nitrogen Dioxide Reaction',
    equation: '2NO₂ + H₂O → HNO₂ + HNO₃',
    description: 'Forms nitrous and nitric acid, contributing to acid rain',
  },
]

export default function Reactions() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="reactions" ref={ref} className="w-full py-20 px-6" style={{ backgroundColor: '#E8F1FF' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: '#1A2B4C' }}
        >
          Chemical Reactions
        </motion.h2>

        <div className="flex gap-8 items-start mb-12">
          <div className="hidden lg:block pt-4">
            <FlaskConical size={48} className="text-blue-500 opacity-70" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1 space-y-8"
          >
            {reactions.map((reaction, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1A2B4C' }}>
                  {reaction.title}
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-4 border-2 border-blue-300">
                  <p className="text-3xl font-mono font-bold text-center" style={{ color: '#1A2B4C' }}>
                    {reaction.equation}
                  </p>
                </div>
                <p className="text-gray-700">{reaction.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
