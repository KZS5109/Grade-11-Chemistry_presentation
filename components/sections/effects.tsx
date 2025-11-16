'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const effects = [
  {
    title: 'Smog Formation',
    description: 'Ground-level ozone and particulate matter reduce visibility',
    image: '/smog-formation-urban-city-pollution.jpg',
  },
  {
    title: 'Acid Rain',
    description: 'SO2 and NOx react with water to form acidic precipitation',
    image: '/acid-rain-storm-precipitation.jpg',
  },
  {
    title: 'Respiratory Issues',
    description: 'Inhaling pollutants damages lungs and airways',
    image: '/respiratory-health-lungs-breathing.jpg',
  },
]

export default function Effects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="effects" ref={ref} className="w-full py-20 px-6" style={{ backgroundColor: '#E9FBEF' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: '#1A2B4C' }}
        >
          Effects of Air Pollution
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={effect.image || "/placeholder.svg"}
                  alt={effect.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: '#1A2B4C' }}>
                {effect.title}
              </h3>
              <p className="text-gray-600">{effect.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
