interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  onClick, 
  type = 'button',
  className = '',
  disabled = false
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-ebitda-green 
        text-black 
        px-8 py-4 
        font-semibold 
        hover:bg-[#00D66A] 
        transition-colors 
        duration-150
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  )
}
