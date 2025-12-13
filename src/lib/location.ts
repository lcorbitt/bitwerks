// import { headers } from "next/headers"

export interface LocationData {
  city: string
  state: string
  isDefault: boolean
}

const DEFAULT_LOCATION: LocationData = {
  city: "Denver",
  state: "CO",
  isDefault: true
}

export function getLocationFromParams(searchParams: { [key: string]: string | string[] | undefined }): LocationData {
  const city = searchParams.city as string
  const state = searchParams.state as string

  if (city && state) {
    return {
      city,
      state,
      isDefault: false
    }
  }

  return DEFAULT_LOCATION
}

export function formatLocation(location: LocationData): string {
  return `${location.city}, ${location.state}`
}

export function getLocationString(location: LocationData, format: "full" | "city" = "full"): string {
  if (format === "city") {
    return location.city
  }
  return formatLocation(location)
} 