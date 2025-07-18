import React from "react"

interface WaveGraphicProps {
  className?: string
}

export function WaveGraphic({ className = "" }: WaveGraphicProps) {
  return (
    <div className={`relative w-full h-32 overflow-hidden bg-gradient-to-b from-light to-brand dark:from-tertiary dark:to-primary ${className}`}>
      {/* Animated waves with side-to-side movement */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-brand/20 dark:bg-black/20 rounded-[1000%_1000%_0_0] animate-wave" />
        <div className="absolute top-2 left-0 w-[200%] h-full bg-brand/30 dark:bg-black/30 rounded-[1000%_1000%_0_0] animate-wave-reverse" />
        <div className="absolute top-4 left-0 w-[200%] h-full bg-brand/40 dark:bg-black/40 rounded-[1000%_1000%_0_0] animate-wave-slow" />
      </div>
    </div>
  )
} 