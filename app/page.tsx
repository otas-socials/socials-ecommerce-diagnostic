'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Button from '@/components/Button'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-carbon-black">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kde vám teče zisk?
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
            10minutová diagnostika vašeho e-shopu.<br />
            Bez marketingové vaty.
          </p>
          
          <Button onClick={() => router.push('/start')} className="text-lg">
            Spustit diagnostiku
          </Button>
          
          {/* Trust indicators */}
          <div className="mt-12 space-y-2 text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-ebitda-green">✓</span>
              <span>2500+ prověřených e-shopů</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ebitda-green">✓</span>
              <span>Data z Velkého testu e-shopů 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ebitda-green">✓</span>
              <span>Bez sales callu, bez závazků</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Anti-Persona Section */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Tento nástroj není pro:
              </h2>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-signal-red">×</span>
                  <span>E-shopy pod 1M Kč ročního obratu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-red">×</span>
                  <span>Firmy hledající "správu soc. sítí"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-red">×</span>
                  <span>Projekty bez jasné marže</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Je pro:
              </h2>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-ebitda-green">✓</span>
                  <span>Majitele řešící PNO nad 30%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ebitda-green">✓</span>
                  <span>CMO frustrované agenturou</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ebitda-green">✓</span>
                  <span>Firmy v růstové fázi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
