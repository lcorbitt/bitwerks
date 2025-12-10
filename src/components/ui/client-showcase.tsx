"use client"

import Image from "next/image"
import { Heading3 } from "./heading"

interface Client {
  id: string
  name: string
  logo: {
    light: string
  }
  caseStudyLink?: string
  services?: string[]
}

interface ClientShowcaseProps {
  clients: Client[]
  className?: string
}

export function ClientShowcase({ clients, className = "" }: ClientShowcaseProps) {
  return (
    <div className={`bg-white dark:bg-primary pt-8 ${className}`} >
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div key={client.id} className="aspect-square bg-light dark:bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
              {/* Background Image */}
              <div className="absolute inset-4 z-40">
                <Image
                  src={client.logo.light}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain dark:hidden"
                />
                {/* <Image
                  src={client.logo.dark}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain hidden dark:block"
                /> */}
              </div>
              
              {/* Dark overlay on hover */}
              <div onClick={() => window.open(client.caseStudyLink, '_blank')} className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center z-40">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 -mt-16">
                  <p className="text-white text-sm font-thin mb-2">{client.services?.join(', ')}</p>
                  {client.caseStudyLink && (
                    <Heading3 
                      className="text-white text-sm hover:text-gray-300 transition-colors duration-200"
                    >
                      {client.name}
                    </Heading3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
