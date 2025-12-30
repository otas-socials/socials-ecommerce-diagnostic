interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-slate-grey mb-2">
        <span>Otázka {current} z {total}</span>
      </div>
      <div className="w-full h-1 bg-slate-800">
        <div 
          className="h-full bg-ebitda-green transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
