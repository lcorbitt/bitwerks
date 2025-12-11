"use client"

import Image from "next/image"
import Link from "next/link"
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
            <Link 
              key={client.id} 
              href={client.caseStudyLink || "#"}
              className="aspect-square bg-light dark:bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group block"
              target="_blank"
            >
              <div className="absolute inset-4 z-40">
                <Image
                  src={client.logo.light}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
