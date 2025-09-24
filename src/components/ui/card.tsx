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
    <div className="relative bg-light dark:bg-tertiary rounded-2xl shadow-md py-12 md:py-20 px-8 group hover:shadow-xl hover:cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1">
      {/* Icon */}
      <div className="absolute -top-8 md:-top-12 left-8">
        <div className="bg-black dark:bg-brand rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center group-hover:shadow-md group-hover:shadow-black/50 transition-all duration-300 ease-in-out">
          <div className="group-hover:scale-110 transition-all duration-300 ease-out">
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
      <a href={linkHref} className="hover:bg-gray-200 dark:hover:bg-black/30 rounded-md px-4 py-2 font-bold underline text-primary dark:text-light hover:text-brand dark:hover:text-brand transition-colors duration-200 ease-in-out inline-block">{linkText ? linkText : "Get Started"}</a>
    </div>
  )
}
