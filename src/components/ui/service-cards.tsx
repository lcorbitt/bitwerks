interface ServiceCard {
  title: string
  description: string
  icon: any
}

interface ServiceCardsProps {
  services: ServiceCard[]
  className?: string
}

export function ServiceCards({ services, className = "" }: ServiceCardsProps) {
  return (
    <>
      {/* Mobile: Simple list with icons */}
      <div className={`md:hidden space-y-3 ${className}`}>
        {services.map((service) => (
          <div 
            key={service.title} 
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#1f1f1f]/50 border border-gray-100 dark:border-[#1f1f1f]/70 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-[#1f1f1f]/70"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1f1f1f]/70 border border-gray-200 dark:border-[#1f1f1f]/70">
              {typeof service.icon === 'string' ? (
                <span className="text-xl">{service.icon}</span>
              ) : (
                <service.icon className="w-5 h-5 text-gray-900 dark:text-white stroke-2" />
              )}
            </div>
            
            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Desktop: Card grid */}
      <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className="group bg-white dark:bg-[#1f1f1f]/70 rounded-lg shadow-sm hover:shadow-xl border border-gray-100 dark:border-[#1f1f1f]/70 transition-all duration-300 p-8 hover:-translate-y-2 hover:scale-105"
          >
            {/* Icon - Simple black outline style */}
            <div className="mb-6">
              <div className="flex items-center justify-center w-12 h-12">
                {typeof service.icon === 'string' ? (
                  <span className="text-3xl">{service.icon}</span>
                ) : (
                  <service.icon className="w-8 h-8 text-gray-900 dark:text-white stroke-2" />
                )}
              </div>
            </div>
            
            {/* Title - Bold black text */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h3>
            
            {/* Description - Clean, concise text */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
