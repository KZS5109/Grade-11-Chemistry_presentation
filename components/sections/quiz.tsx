'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface QuizProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const quizQuestions = [
  {
    question: 'What is the primary cause of smog formation?',
    options: [
      'Ground-level ozone and particulate matter',
      'Water vapor',
      'Carbon dioxide',
      'Nitrogen gas',
    ],
    correct: 0,
    explanation: 'Smog forms when ground-level ozone and particulate matter interact with sunlight and emissions.',
  },
  {
    question: 'Which gas forms sulfurous acid when reacting with water?',
    options: ['NO₂', 'SO₂', 'CO₂', 'O₃'],
    correct: 1,
    explanation: 'Sulfur dioxide (SO₂) reacts with water vapor to form sulfurous acid, which contributes to acid rain.',
  },
  {
    question: 'What is one solution to reduce air pollution?',
    options: [
      'Increase vehicle use',
      'Use renewable energy',
      'Burn more fossil fuels',
      'Cut down more trees',
    ],
    correct: 1,
    explanation: 'Renewable energy sources like solar and wind power produce electricity without emitting pollutants.',
  },
  {
    question: 'Which human activity is the largest contributor to air pollution?',
    options: [
      'Cooking',
      'Burning fossil fuels for energy and transportation',
      'Industrial manufacturing only',
      'Agricultural activities',
    ],
    correct: 1,
    explanation: 'Burning fossil fuels for transportation and electricity generation is the primary source of air pollution worldwide.',
  },
  {
    question: 'How do trees help reduce air pollution?',
    options: [
      'They produce oxygen and absorb carbon dioxide',
      'They trap particles and filter harmful gases',
      'They convert pollutants into harmless substances',
      'All of the above',
    ],
    correct: 3,
    explanation: 'Trees provide multiple benefits: they produce oxygen, absorb CO₂, trap particulate matter, and filter harmful gases from the air.',
  },
]

export default function Quiz({ isOpen, onClose, onOpen }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = index
    setSelectedAnswers(newAnswers)
    setAnswered(true)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
    } else {
      calculateScore()
    }
  }

  const calculateScore = () => {
    let newScore = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correct) {
        newScore++
      }
    })
    setScore(newScore)
    setSubmitted(true)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSubmitted(false)
    setSelectedAnswers([])
    setAnswered(false)
    onClose()
  }

  return (
    <section id="quiz" className="w-full py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
        >
          Quiz
        </motion.h2>

        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Button
              onClick={onOpen}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium"
            >
              Start Quiz
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence>
            {!submitted ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-gray-900 h-2 rounded-full transition-all"
                      style={{
                        width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    const isSelected = selectedAnswers[currentQuestion] === index
                    const isCorrect = index === quizQuestions[currentQuestion].correct
                    const showFeedback = answered && (isSelected || isCorrect)

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: answered ? 1 : 1.02 }}
                        onClick={() => !answered && handleAnswer(index)}
                        disabled={answered}
                        className={`w-full p-4 rounded-lg text-left font-medium transition-all ${
                          showFeedback
                            ? isCorrect
                              ? 'bg-green-500 text-white'
                              : isSelected
                              ? 'bg-red-500 text-white'
                              : 'bg-green-100 text-gray-900 border border-green-300'
                            : isSelected
                            ? 'bg-gray-900 text-white'
                            : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900'
                        }`}
                      >
                        {option}
                      </motion.button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {answered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-lg mb-6 ${
                        selectedAnswers[currentQuestion] === quizQuestions[currentQuestion].correct
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-blue-50 border border-blue-200'
                      }`}
                    >
                      <p className="font-semibold text-gray-900 mb-2">Answer Explanation:</p>
                      <p className="text-gray-700">
                        {quizQuestions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  onClick={handleNext}
                  disabled={!answered}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium disabled:opacity-50"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-2xl border border-gray-200"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h3>
                <p className="text-6xl font-bold text-gray-900 mb-2">
                  {score}/{quizQuestions.length}
                </p>
                <p className="text-xl text-gray-600 mb-8">
                  {score === quizQuestions.length
                    ? 'Perfect score!'
                    : score >= quizQuestions.length - 1
                    ? 'Great job!'
                    : 'Good effort!'}
                </p>
                <Button
                  onClick={handleRestart}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium"
                >
                  Restart Quiz
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  )
}
