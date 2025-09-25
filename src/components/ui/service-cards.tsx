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
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {services.map((service, index) => (
        <div 
          key={service.title} 
          className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 p-8 hover:-translate-y-2 hover:scale-105"
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
  )
}
