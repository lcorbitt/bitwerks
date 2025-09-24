import React from 'react'

interface MegaphoneIconProps {
  className?: string
  size?: number
}

export function MegaphoneIcon({ className = "", size = 24 }: MegaphoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Megaphone body */}
      <path
        d="M3 8L8 6L15 6C16.1046 6 17 6.89543 17 8V16C17 17.1046 16.1046 18 15 18L8 18L3 16V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Handle */}
      <path
        d="M8 6V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Sound waves */}
      <path
        d="M17 10C18.5 10 20 11.5 20 13C20 14.5 18.5 16 17 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8C20.5 8 24 11.5 24 13C24 14.5 20.5 18 17 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12C18 12 19 12.5 19 13C19 13.5 18 14 17 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
