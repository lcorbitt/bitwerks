interface QuoteProps {
  quote: string
  author: string
  title: string
  company: string
}

export function Quote({ quote, author, title, company }: QuoteProps) {
  return (
    <div className="relative p-8 rounded-2xl">
      {/* Large decorative quotation marks */}
      <div className="z-10 absolute -top-4 -left-4 text-[12rem] text-brand/50 font-serif leading-none">
        &ldquo;
      </div>
      
      {/* Quote card */}
      <div className="relative bg-white dark:bg-secondary rounded-xl p-6 shadow-lg">
        {/* Quote text */}
        <blockquote className="text-primary/80 dark:text-white text-lg leading-relaxed mb-6">
          {quote}
        </blockquote>
        
        {/* Attribution */}
        <div className="text-right">
          <div className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-1">
            {author}
          </div>
          <div className="text-brand dark:text-brand font-bold text-sm mb-1">
            {title}
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-xs">
            {company}
          </div>
        </div>
      </div>
    </div>
  )
}
