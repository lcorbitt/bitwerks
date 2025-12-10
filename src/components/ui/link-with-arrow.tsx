import * as React from "react"

interface LinkWithArrowProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "white" | "brand"
}

export function LinkWithArrow({ 
  href, 
  children, 
  className = "", 
  variant = "default" 
}: LinkWithArrowProps) {
  const baseClasses = "inline-flex items-center text-sm font-semibold transition-colors duration-300 ease-in-out pb-1"
  
  const variantClasses = {
    default: "text-gray-900 dark:text-white group-hover:border-b group-hover:border-black dark:group-hover:border-white",
    white: "text-white border-white/50 hover:border-white/80",
    brand: "text-brand border-brand/50 hover:border-brand/80"
  }

  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg 
        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </a>
  )
}
