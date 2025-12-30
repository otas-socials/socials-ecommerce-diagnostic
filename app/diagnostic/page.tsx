'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'
import { saveDiagnosticAnswers } from '@/lib/localStorage'

interface Question {
  id: 'employees' | 'revenue' | 'role';
  question: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 'employees',
    question: 'Kolik máte zaměstnanců na plný úvazek?',
    options: [
      'Jen já (solo)',
      '2-4 lidé',
      '5-9 lidí',
      '10-19 lidí',
      '20-49 lidí',
      '50+ lidí'
    ]
  },
  {
    id: 'revenue',
    question: 'Jaký je váš přibližný roční obrat?',
    options: [
      'Pod 1M Kč',
      '1-5M Kč',
      '5-10M Kč',
      '10-30M Kč',
      '30-100M Kč',
      '100-300M Kč',
      'Nad 300M Kč'
    ]
  },
  {
    id: 'role',
    question: 'Jaká je vaše role ve firmě?',
    options: [
      'Jsem majoritní vlastník/spoluvlastník (>50%)',
      'Jsem minoritní vlastník (<50%)',
      'Jsem CMO/Marketing Manager',
      'Zodpovídám za výkon marketingu',
      'Jiná role'
    ]
  }
]

export default function DiagnosticPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleAnswer = (answer: string) => {
    const question = QUESTIONS[currentQuestion]
    const newAnswers = { ...answers, [question.id]: answer }
    setAnswers(newAnswers)

    // If last question, navigate to results
    if (currentQuestion === QUESTIONS.length - 1) {
      saveDiagnosticAnswers({
        employees: newAnswers.employees,
        revenue: newAnswers.revenue,
        role: newAnswers.role
      })
      // For prototype, route to fixed roadmap page
      router.push('/roadmap')
    } else {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const question = QUESTIONS[currentQuestion]

  return (
    <div className="min-h-screen bg-carbon-black">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <ProgressBar current={currentQuestion + 1} total={QUESTIONS.length} />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="
                  w-full 
                  bg-slate-900 
                  border border-slate-800 
                  px-6 py-5 
                  text-left 
                  text-white
                  hover:border-ebitda-green
                  hover:bg-slate-800
                  transition-all
                  duration-150
                  text-lg
                "
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
