"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heading3 } from "./heading"
import { Button } from "./button"

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
  initialCount?: number
}

export function ClientShowcase({ clients, className = "", initialCount }: ClientShowcaseProps) {
  const [showAll, setShowAll] = useState(false)
  const [responsiveInitialCount, setResponsiveInitialCount] = useState(8)

  useEffect(() => {
    const updateInitialCount = () => {
      // Mobile: 6 cards (2 columns x 3 rows)
      // Desktop: 8 cards (4 columns x 2 rows)
      if (window.innerWidth < 768) {
        setResponsiveInitialCount(6)
      } else {
        setResponsiveInitialCount(8)
      }
    }

    updateInitialCount()
    window.addEventListener("resize", updateInitialCount)
    return () => window.removeEventListener("resize", updateInitialCount)
  }, [])

  const count = initialCount ?? responsiveInitialCount
  const displayedClients = showAll ? clients : clients.slice(0, count)
  const hasMore = clients.length > count

  return (
    <div className={`bg-white dark:bg-primary pt-8 ${className}`} >
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedClients.map((client) => (
            client.caseStudyLink ? (
              <Link 
                key={client.id} 
                href={client.caseStudyLink || "#"}
                className="aspect-square bg-light dark:bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group block"
                target={client.caseStudyLink ? "_blank" : undefined}
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
              ) : (
                <div key={client.id} className="aspect-square bg-light dark:bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group block">
                  <div className="absolute inset-4 z-40">
                    <Image
                      src={client.logo.light}
                      alt={`${client.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )
            ))
          }
        </div>
        {hasMore && !showAll && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline-brand"
              size="lg"
              onClick={() => setShowAll(true)}
            >
              See More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
