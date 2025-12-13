import { redirect } from "next/navigation"
import { getCitiesBySlug } from "@/lib/us-cities"

interface PageProps {
  params: {
    city: string
  }
}

export default function CityOnlyRedirect({ params }: PageProps) {
  const citySlug = decodeURIComponent(params.city)
  const cities = getCitiesBySlug(citySlug)

  // If we found cities, redirect to the highest priority one
  if (cities.length > 0) {
    const city = cities[0] // Already sorted by priority (highest first)
    redirect(`/services/web-development/${city.slug}/${city.stateSlug}`)
  }

  // If no city found, redirect to base service page
  redirect("/services/web-development")
}

