import { QuickWin } from '@/lib/mock-data'

interface QuickWinCardProps {
  quickWin: QuickWin;
}

export default function QuickWinCard({ quickWin }: QuickWinCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{quickWin.title}</h3>
        <span className={`
          px-3 py-1 text-sm font-medium border
          ${quickWin.impact === 'Vysoký' 
            ? 'text-ebitda-green border-ebitda-green' 
            : 'text-slate-grey border-slate-800'
          }
        `}>
          {quickWin.impact}
        </span>
      </div>
      
      <p className="text-slate-grey mb-4 leading-relaxed">
        {quickWin.description}
      </p>
      
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">⏱</span>
          <span className="text-slate-400">{quickWin.timeToImplement}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">🎙</span>
          <span className="text-slate-400">
            {quickWin.sourceEpisode} ({quickWin.episodeTimestamp})
          </span>
        </div>
      </div>
    </div>
  )
}
