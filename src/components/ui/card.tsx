import * as React from "react"

interface CardProps {
  title: string
  description: string
  linkText?: string
  linkHref: string
  children?: React.ReactNode
}

export function Card({ title, description, linkText, linkHref, children }: CardProps) {
  return (
    <div className="relative bg-light dark:bg-tertiary rounded-2xl shadow-md py-20 px-8">
      {/* Icon */}
      <div className="absolute -top-12 left-8">
        <div className="bg-black dark:bg-brand rounded-xl w-24 h-24 flex items-center justify-center">
          {children}
        </div>
      </div>
      {/* Title */}
      <h3 className="text-2xl font-extrabold uppercase text-black dark:text-white mb-4">{title}</h3>
      {/* Description */}
      <p className="text-lg text-tertiary dark:text-muted-dark mb-6">
        {description}
      </p>
      {/* Link */}
      <a href={linkHref} className="font-bold underline text-primary dark:text-light hover:text-brand dark:hover:text-brand transition-colors duration-200 ease-in-out">{linkText ? linkText : "More"}</a>
    </div>
  )
}
