'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Button from '@/components/Button'
import { saveLeadData } from '@/lib/localStorage'

export default function StartPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const validateEmail = (email: string) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return re.test(email)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    const newErrors = {
      firstName: '',
      lastName: '',
      email: ''
    }

    // Validate
    if (formData.firstName.length < 2) {
      newErrors.firstName = 'Vyplňte jméno (min. 2 znaky)'
    }
    if (formData.lastName.length < 2) {
      newErrors.lastName = 'Vyplňte příjmení (min. 2 znaky)'
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Neplatný formát e-mailu'
    }

    setErrors(newErrors)

    // If no errors, proceed
    if (!newErrors.firstName && !newErrors.lastName && !newErrors.email) {
      saveLeadData(formData)
      router.push('/diagnostic')
    }
  }

  return (
    <div className="min-h-screen bg-carbon-black">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Než začneme...
          </h1>
          
          <p className="text-slate-400 mb-8">
            Abychom vám mohli dát relevantní diagnostiku, potřebujeme:
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-400 mb-2">
                Jméno *
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={`
                  w-full 
                  bg-slate-900 
                  border 
                  ${errors.firstName ? 'border-signal-red' : 'border-slate-800'} 
                  px-4 py-3 
                  text-white 
                  placeholder-slate-500
                  focus:border-ebitda-green 
                  focus:outline-none 
                  transition-colors
                `}
                placeholder="Jan"
              />
              {errors.firstName && (
                <p className="text-signal-red text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-400 mb-2">
                Příjmení *
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={`
                  w-full 
                  bg-slate-900 
                  border 
                  ${errors.lastName ? 'border-signal-red' : 'border-slate-800'} 
                  px-4 py-3 
                  text-white 
                  placeholder-slate-500
                  focus:border-ebitda-green 
                  focus:outline-none 
                  transition-colors
                `}
                placeholder="Novák"
              />
              {errors.lastName && (
                <p className="text-signal-red text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                Firemní e-mail *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`
                  w-full 
                  bg-slate-900 
                  border 
                  ${errors.email ? 'border-signal-red' : 'border-slate-800'} 
                  px-4 py-3 
                  text-white 
                  placeholder-slate-500
                  focus:border-ebitda-green 
                  focus:outline-none 
                  transition-colors
                `}
                placeholder="jan@firma.cz"
              />
              {errors.email && (
                <p className="text-signal-red text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Pokračovat na diagnostiku
            </Button>
            
            <p className="text-sm text-slate-500 text-center flex items-center justify-center gap-2">
              <span>🔒</span>
              <span>Data nesdílíme třetím stranám</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
