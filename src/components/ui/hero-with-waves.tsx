import React from "react"
import { WaveGraphic } from "./wave-graphic"

interface WaveDividerProps {
  className?: string
}

export function WaveDivider({ className = "" }: WaveDividerProps) {
  return (
    <div className={`relative h-48 overflow-hidden ${className}`}>
      <WaveGraphic />
    </div>
  )
} 