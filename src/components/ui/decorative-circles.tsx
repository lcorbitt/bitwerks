"use client"

interface DecorativeCirclesProps {
  className?: string
  inverted?: boolean
}

export function DecorativeCircles({ className = "", inverted = false }: DecorativeCirclesProps) {
  if (inverted) {
    return (
      <>
        {/* Inverted: outlined circle on top, positioned on left side */}
        <div className={`absolute bottom-96 -left-[340px] lg:-left-72 pointer-events-none z-20 ${className}`}>
          <div className="absolute w-96 h-96 border-2 border-black dark:border-white rounded-full animate-bounce-slower opacity-30 translate-x-32 translate-y-16"></div>
        </div>
        <div className={`absolute bottom-52 -left-64 lg:-left-60 pointer-events-none z-20 ${className}`}>
          <div className="absolute w-72 h-72 bg-gray-500 dark:bg-gray-600 rounded-full animate-bounce-slow opacity-20"></div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Default: solid circle on top, positioned on right side */}
      <div className={`absolute bottom-96 right-20 lg:right-32 pointer-events-none z-20 ${className}`}>
        <div className="absolute w-72 h-72 bg-gray-500 dark:bg-gray-600 rounded-full animate-bounce-slow opacity-20"></div>
      </div>
      <div className={`absolute bottom-72 right-8 lg:right-16 pointer-events-none z-20 ${className}`}>
        <div className="absolute w-96 h-96 border-2 border-black dark:border-white rounded-full animate-bounce-slower opacity-30 translate-x-32 translate-y-16"></div>
      </div>
    </>
  )
} 