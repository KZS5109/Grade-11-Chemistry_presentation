'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sun, Filter, Bus, Trees } from 'lucide-react'

const solutions = [
  { 
    title: 'Renewable Energy',
    icon: Sun,
    description: 'Solar, wind, and hydroelectric power generate electricity without burning fossil fuels, significantly reducing greenhouse gas emissions and air pollutants.',
    color: 'text-yellow-500'
  },
  { 
    title: 'Air Filters',
    icon: Filter,
    description: 'Industrial and vehicle air filtration systems capture harmful particles and gases before they enter the atmosphere, preventing pollution at the source.',
    color: 'text-gray-600'
  },
  { 
    title: 'Public Transport',
    icon: Bus,
    description: 'Promoting public transportation, cycling, and walking decreases vehicle emissions. Electric vehicles also help eliminate exhaust pollution from roads.',
    color: 'text-blue-600'
  },
  { 
    title: 'Plant Trees',
    icon: Trees,
    description: 'Trees absorb carbon dioxide and filter out harmful pollutants, naturally cleaning the air while improving overall environmental quality.',
    color: 'text-green-600'
  },
]

export default function Solutions() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, y: -8 },
  }

  return (
    <section id="solutions" ref={ref} className="w-full py-20 px-6" style={{ backgroundColor: '#E9FBEF' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: '#1A2B4C' }}
        >
          Solutions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100 text-center cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent size={48} className={solution.color} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B4C' }}>
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
