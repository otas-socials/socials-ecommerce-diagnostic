'use client'

import Header from '@/components/Header'
import Button from '@/components/Button'
import QuickWinCard from '@/components/QuickWinCard'
import { MOCK_RESULT } from '@/lib/mock-data'

export default function RoadmapPage() {
  const result = MOCK_RESULT

  return (
    <div className="min-h-screen bg-carbon-black">
      <Header />
      
      {/* Hero Result Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 border border-ebitda-green text-ebitda-green text-sm font-medium">
            {result.stageLabel}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {result.headline}
          </h1>
          
          <div className="flex items-center gap-3">
            <span className="text-signal-red text-2xl">🔴</span>
            <span className="text-xl text-slate-400">
              Závažnost: <span className="text-signal-red font-semibold">{result.severityLabel}</span>
            </span>
          </div>
        </div>
      </section>
      
      {/* Diagnóza Section */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-8">Diagnóza</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {result.diagnosis}
            </p>
          </div>
          
          <div className="mt-8 p-6 border border-ebitda-green bg-slate-900">
            <h3 className="text-xl font-semibold text-ebitda-green mb-3">
              📊 Benchmark
            </h3>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {result.benchmarkData}
            </p>
          </div>
        </div>
      </section>
      
      {/* Quick Wins Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Quick Wins (48h)
        </h2>
        <p className="text-slate-400 mb-8">
          Implementujte tyto kroky během příštích 48 hodin pro okamžitý dopad.
        </p>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {result.quickWins.map((quickWin, index) => (
            <QuickWinCard key={index} quickWin={quickWin} />
          ))}
        </div>
      </section>
      
      {/* Related Episodes Section */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            Doporučené epizody
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {result.relatedEpisodes.map((episode) => (
              <a
                key={episode.id}
                href={episode.url}
                className="
                  bg-slate-900 
                  border border-slate-800 
                  p-6
                  hover:border-ebitda-green
                  transition-colors
                  duration-150
                "
              >
                <div className="text-ebitda-green font-semibold mb-2">
                  {episode.id}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {episode.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {episode.relevance}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 border border-slate-800 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Chcete Growth Blueprint na míru?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            90minutová konzultace, kde projdeme vaši specifickou situaci<br />
            a navrhneme konkrétní growth strategii.
          </p>
          
          <Button onClick={() => window.location.href = 'mailto:ahoj@socials.cz'}>
            Rezervovat Growth Blueprint
          </Button>
          
          <p className="text-sm text-slate-500 mt-6">
            Cena: 4 900 Kč bez DPH
          </p>
        </div>
      </section>
    </div>
  )
}
