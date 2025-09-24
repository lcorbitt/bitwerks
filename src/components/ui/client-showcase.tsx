import Image from "next/image"
import Link from "next/link"

interface Client {
  id: string
  name: string
  logo: {
    light: string
    dark: string
  }
  caseStudyLink?: string
  icons: string[]
}

interface ClientShowcaseProps {
  clients: Client[]
  className?: string
}

export function ClientShowcase({ clients, className = "" }: ClientShowcaseProps) {
  return (
    <section className={`bg-white dark:bg-primary py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div key={client.id} className="bg-light dark:bg-gray-100 rounded-xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer relative overflow-hidden group">
              {/* Brand reveal background */}
              <div className="absolute inset-0 bg-brand transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Artistic icons overlay */}
              <div className="absolute inset-0 opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                {client.icons.map((icon, index) => {
                  const positions = [
                    "top-8 left-8 text-lg",
                    "top-6 right-12 text-sm", 
                    "bottom-12 left-6 text-2xl",
                    "bottom-8 right-8 text-lg",
                    "top-1/2 left-1/2 text-sm transform -translate-x-1/2 -translate-y-1/2",
                    "top-1/4 right-1/4 text-xl",
                    "bottom-1/4 left-1/4 text-lg",
                    "top-3/4 right-1/3 text-sm"
                  ];
                  return (
                    <div key={index} className={`absolute text-white ${positions[index % positions.length]}`}>
                      {icon}
                    </div>
                  );
                })}
              </div>
              
              {/* Content with relative positioning */}
              <div className="relative z-10 flex flex-col h-full">
              {client.caseStudyLink && (
                <div className="flex justify-end mb-4">
                  <Link 
                    href={client.caseStudyLink}
                    className="text-sm text-muted-light dark:text-white group-hover:text-white transition-colors duration-300"
                  >
                    See case study <span className="ml-2">→</span>
                  </Link>
                </div>
              )}
              
              <div className="flex items-center justify-center flex-1">
                <div className="h-12 w-32 flex items-center justify-center">
                  <Image
                    src={client.logo.light}
                    alt={`${client.name} Logo`}
                    width={128}
                    height={48}
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={client.logo.dark}
                    alt={`${client.name} Logo`}
                    width={128}
                    height={48}
                    className="object-contain hidden dark:block"
                  />
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
