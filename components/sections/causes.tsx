'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Flame, Factory, Car, Zap, Leaf, TreePalm } from 'lucide-react'

const causes = [
  { label: 'Fossil fuel combustion', icon: Flame, color: 'text-orange-500' },
  { label: 'Industrial emissions', icon: Factory, color: 'text-gray-700' },
  { label: 'Vehicle exhaust', icon: Car, color: 'text-blue-600' },
  { label: 'Power plants', icon: Zap, color: 'text-yellow-500' },
  { label: 'Agricultural activities', icon: Leaf, color: 'text-green-600' },
  { label: 'Deforestation', icon: TreePalm, color: 'text-emerald-700' },
]

export default function Causes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="causes" ref={ref} className="w-full py-20 px-6" style={{ backgroundColor: '#E8F1FF' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: '#1A2B4C' }}
        >
          Causes of Air Pollution
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/air-pollution-smog-city-illustration.jpg"
              alt="Air pollution illustration"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {causes.map((cause, index) => {
              const IconComponent = cause.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className={`w-6 h-6 flex-shrink-0 mt-1 ${cause.color}`} />
                  <p className="text-base font-medium" style={{ color: '#1A2B4C' }}>
                    {cause.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
