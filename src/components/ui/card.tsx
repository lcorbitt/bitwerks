import * as React from "react"

interface CardProps {
  title: string
  description: string
  linkText?: string
  linkHref: string
  children?: React.ReactNode
}

export function Card({ title, description, linkText, linkHref, children }: CardProps) {
  // Determine animation based on title
  const getAnimationClass = () => {
    if (title.toLowerCase().includes('web')) {
      return 'group-hover:animate-float' // Globe - floating animation
    } else if (title.toLowerCase().includes('software')) {
      return 'group-hover:animate-spin-slow' // Cog - spinning animation
    } else {
      return 'group-hover:animate-pulse-glow' // Lightbulb - glowing animation
    }
  }

  return (
    <div className="relative bg-light dark:bg-tertiary rounded-2xl shadow-md py-12 md:py-20 px-8 group hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      {/* Icon */}
      <div className="absolute -top-8 md:-top-12 left-8">
        <div className="bg-black dark:bg-brand rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center group-hover:shadow-md group-hover:shadow-brand/50 transition-all duration-300 ease-in-out">
          <div className={`group-hover:scale-125 transition-all duration-500 ease-out ${getAnimationClass()}`}>
            {children}
          </div>
        </div>
      </div>
      {/* Title */}
      <h3 className="text-2xl font-extrabold uppercase text-black dark:text-white mb-4 group-hover:text-brand dark:group-hover:text-brand transition-colors duration-300">{title}</h3>
      {/* Description */}
      <p className="text-lg text-tertiary dark:text-muted-dark mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      {/* Link */}
      <a href={linkHref} className="font-bold underline text-primary dark:text-light hover:text-brand dark:hover:text-brand transition-colors duration-200 ease-in-out group-hover:scale-105 inline-block">{linkText ? linkText : "More"}</a>
    </div>
  )
}
