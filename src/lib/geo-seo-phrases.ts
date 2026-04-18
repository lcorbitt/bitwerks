import type { USCity } from "@/lib/us-cities"
import { getCityBySlug, majorUSCities } from "@/lib/us-cities"

/** Longest tail first so e.g. `software-development` wins over `web-development`. */
export const GEO_KEYWORD_RULES = [
  { tail: "software-development", service: "software-development" as const },
  { tail: "web-development", service: "web-development" as const },
  { tail: "web-developer", service: "web-development" as const },
  { tail: "web-design", service: "web-development" as const },
] as const

export type GeoKeywordRule = (typeof GEO_KEYWORD_RULES)[number]

export interface GeoPhraseResolution {
  city: USCity
  rule: GeoKeywordRule
  locationSlug: string
}

export const humanizeGeoTail = (tail: string): string =>
  tail.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")

export const parseGeoSeoPhrase = (slug: string): GeoPhraseResolution | null => {
  const sorted = [...GEO_KEYWORD_RULES].sort((a, b) => b.tail.length - a.tail.length)
  for (const rule of sorted) {
    const suf = `-${rule.tail}`
    if (!slug.endsWith(suf) || slug.length <= suf.length) continue
    const locationSlug = slug.slice(0, -suf.length)
    if (!locationSlug) continue
    const city = getCityBySlug(locationSlug, "co")
    if (city) return { city, rule, locationSlug }
  }
  return null
}

export const buildColoradoGeoStaticParams = (): { geoSlug: string }[] => {
  const co = majorUSCities.filter((c) => c.stateSlug === "co")
  return co.flatMap((city) => GEO_KEYWORD_RULES.map((rule) => ({ geoSlug: `${city.slug}-${rule.tail}` })))
}
