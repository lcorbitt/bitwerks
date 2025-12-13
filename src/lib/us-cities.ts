// Major US cities for location-based SEO
// Organized alphabetically by state for better developer readability

export interface USCity {
  city: string
  state: string
  stateName: string
  slug: string
  stateSlug: string
  priority: number // Higher priority = more important for SEO
}

// Top 100+ major US cities by population and business activity
// Sorted alphabetically by state, then by city within state
export const majorUSCities: USCity[] = [
  // Alabama
  { city: "Birmingham", state: "AL", stateName: "Alabama", slug: "birmingham", stateSlug: "al", priority: 1 },
  { city: "Montgomery", state: "AL", stateName: "Alabama", slug: "montgomery", stateSlug: "al", priority: 2 },
  
  // Alaska
  { city: "Anchorage", state: "AK", stateName: "Alaska", slug: "anchorage", stateSlug: "ak", priority: 1 },
  
  // Arizona
  { city: "Phoenix", state: "AZ", stateName: "Arizona", slug: "phoenix", stateSlug: "az", priority: 1 },
  { city: "Tucson", state: "AZ", stateName: "Arizona", slug: "tucson", stateSlug: "az", priority: 1 },
  { city: "Mesa", state: "AZ", stateName: "Arizona", slug: "mesa", stateSlug: "az", priority: 2 },
  { city: "Scottsdale", state: "AZ", stateName: "Arizona", slug: "scottsdale", stateSlug: "az", priority: 2 },
  
  // Arkansas
  { city: "Little Rock", state: "AR", stateName: "Arkansas", slug: "little-rock", stateSlug: "ar", priority: 1 },
  
  // California
  { city: "Los Angeles", state: "CA", stateName: "California", slug: "los-angeles", stateSlug: "ca", priority: 1 },
  { city: "San Francisco", state: "CA", stateName: "California", slug: "san-francisco", stateSlug: "ca", priority: 1 },
  { city: "San Diego", state: "CA", stateName: "California", slug: "san-diego", stateSlug: "ca", priority: 1 },
  { city: "San Jose", state: "CA", stateName: "California", slug: "san-jose", stateSlug: "ca", priority: 1 },
  { city: "Sacramento", state: "CA", stateName: "California", slug: "sacramento", stateSlug: "ca", priority: 2 },
  { city: "Oakland", state: "CA", stateName: "California", slug: "oakland", stateSlug: "ca", priority: 2 },
  { city: "Fresno", state: "CA", stateName: "California", slug: "fresno", stateSlug: "ca", priority: 2 },
  { city: "Long Beach", state: "CA", stateName: "California", slug: "long-beach", stateSlug: "ca", priority: 2 },
  { city: "Anaheim", state: "CA", stateName: "California", slug: "anaheim", stateSlug: "ca", priority: 2 },
  { city: "Santa Ana", state: "CA", stateName: "California", slug: "santa-ana", stateSlug: "ca", priority: 3 },
  { city: "Irvine", state: "CA", stateName: "California", slug: "irvine", stateSlug: "ca", priority: 2 },
  { city: "Santa Barbara", state: "CA", stateName: "California", slug: "santa-barbara", stateSlug: "ca", priority: 3 },
  
  // Colorado
  { city: "Denver", state: "CO", stateName: "Colorado", slug: "denver", stateSlug: "co", priority: 1 },
  { city: "Colorado Springs", state: "CO", stateName: "Colorado", slug: "colorado-springs", stateSlug: "co", priority: 1 },
  { city: "Aurora", state: "CO", stateName: "Colorado", slug: "aurora-co", stateSlug: "co", priority: 1 },
  { city: "Fort Collins", state: "CO", stateName: "Colorado", slug: "fort-collins", stateSlug: "co", priority: 1 },
  { city: "Boulder", state: "CO", stateName: "Colorado", slug: "boulder", stateSlug: "co", priority: 1 },
  { city: "Lakewood", state: "CO", stateName: "Colorado", slug: "lakewood", stateSlug: "co", priority: 1 },
  { city: "Thornton", state: "CO", stateName: "Colorado", slug: "thornton", stateSlug: "co", priority: 2 },
  { city: "Arvada", state: "CO", stateName: "Colorado", slug: "arvada", stateSlug: "co", priority: 2 },
  { city: "Westminster", state: "CO", stateName: "Colorado", slug: "westminster", stateSlug: "co", priority: 2 },
  { city: "Pueblo", state: "CO", stateName: "Colorado", slug: "pueblo", stateSlug: "co", priority: 2 },
  { city: "Greeley", state: "CO", stateName: "Colorado", slug: "greeley", stateSlug: "co", priority: 2 },
  { city: "Grand Junction", state: "CO", stateName: "Colorado", slug: "grand-junction", stateSlug: "co", priority: 2 },
  { city: "Loveland", state: "CO", stateName: "Colorado", slug: "loveland", stateSlug: "co", priority: 2 },
  { city: "Broomfield", state: "CO", stateName: "Colorado", slug: "broomfield", stateSlug: "co", priority: 2 },
  
  // Connecticut
  { city: "Hartford", state: "CT", stateName: "Connecticut", slug: "hartford", stateSlug: "ct", priority: 1 },
  { city: "New Haven", state: "CT", stateName: "Connecticut", slug: "new-haven", stateSlug: "ct", priority: 2 },
  
  // Delaware
  { city: "Wilmington", state: "DE", stateName: "Delaware", slug: "wilmington", stateSlug: "de", priority: 1 },
  
  // District of Columbia
  { city: "Washington", state: "DC", stateName: "District of Columbia", slug: "washington", stateSlug: "dc", priority: 1 },
  
  // Florida
  { city: "Miami", state: "FL", stateName: "Florida", slug: "miami", stateSlug: "fl", priority: 1 },
  { city: "Tampa", state: "FL", stateName: "Florida", slug: "tampa", stateSlug: "fl", priority: 1 },
  { city: "Orlando", state: "FL", stateName: "Florida", slug: "orlando", stateSlug: "fl", priority: 1 },
  { city: "Jacksonville", state: "FL", stateName: "Florida", slug: "jacksonville", stateSlug: "fl", priority: 1 },
  { city: "Fort Lauderdale", state: "FL", stateName: "Florida", slug: "fort-lauderdale", stateSlug: "fl", priority: 1 },
  { city: "St. Petersburg", state: "FL", stateName: "Florida", slug: "st-petersburg", stateSlug: "fl", priority: 2 },
  { city: "Tallahassee", state: "FL", stateName: "Florida", slug: "tallahassee", stateSlug: "fl", priority: 2 },
  { city: "West Palm Beach", state: "FL", stateName: "Florida", slug: "west-palm-beach", stateSlug: "fl", priority: 2 },
  
  // Georgia
  { city: "Atlanta", state: "GA", stateName: "Georgia", slug: "atlanta", stateSlug: "ga", priority: 1 },
  { city: "Augusta", state: "GA", stateName: "Georgia", slug: "augusta", stateSlug: "ga", priority: 2 },
  { city: "Savannah", state: "GA", stateName: "Georgia", slug: "savannah", stateSlug: "ga", priority: 2 },
  
  // Hawaii
  { city: "Honolulu", state: "HI", stateName: "Hawaii", slug: "honolulu", stateSlug: "hi", priority: 1 },
  
  // Idaho
  { city: "Boise", state: "ID", stateName: "Idaho", slug: "boise", stateSlug: "id", priority: 1 },
  
  // Illinois
  { city: "Chicago", state: "IL", stateName: "Illinois", slug: "chicago", stateSlug: "il", priority: 1 },
  { city: "Aurora", state: "IL", stateName: "Illinois", slug: "aurora", stateSlug: "il", priority: 2 },
  { city: "Naperville", state: "IL", stateName: "Illinois", slug: "naperville", stateSlug: "il", priority: 2 },
  { city: "Rockford", state: "IL", stateName: "Illinois", slug: "rockford", stateSlug: "il", priority: 3 },
  
  // Indiana
  { city: "Indianapolis", state: "IN", stateName: "Indiana", slug: "indianapolis", stateSlug: "in", priority: 1 },
  { city: "Fort Wayne", state: "IN", stateName: "Indiana", slug: "fort-wayne", stateSlug: "in", priority: 2 },
  
  // Iowa
  { city: "Des Moines", state: "IA", stateName: "Iowa", slug: "des-moines", stateSlug: "ia", priority: 1 },
  
  // Kansas
  { city: "Wichita", state: "KS", stateName: "Kansas", slug: "wichita", stateSlug: "ks", priority: 1 },
  { city: "Overland Park", state: "KS", stateName: "Kansas", slug: "overland-park", stateSlug: "ks", priority: 2 },
  
  // Kentucky
  { city: "Louisville", state: "KY", stateName: "Kentucky", slug: "louisville", stateSlug: "ky", priority: 1 },
  { city: "Lexington", state: "KY", stateName: "Kentucky", slug: "lexington", stateSlug: "ky", priority: 2 },
  
  // Louisiana
  { city: "New Orleans", state: "LA", stateName: "Louisiana", slug: "new-orleans", stateSlug: "la", priority: 1 },
  { city: "Baton Rouge", state: "LA", stateName: "Louisiana", slug: "baton-rouge", stateSlug: "la", priority: 2 },
  
  // Maine
  { city: "Portland", state: "ME", stateName: "Maine", slug: "portland-me", stateSlug: "me", priority: 1 },
  
  // Maryland
  { city: "Baltimore", state: "MD", stateName: "Maryland", slug: "baltimore", stateSlug: "md", priority: 1 },
  
  // Massachusetts
  { city: "Boston", state: "MA", stateName: "Massachusetts", slug: "boston", stateSlug: "ma", priority: 1 },
  { city: "Worcester", state: "MA", stateName: "Massachusetts", slug: "worcester", stateSlug: "ma", priority: 2 },
  { city: "Springfield", state: "MA", stateName: "Massachusetts", slug: "springfield", stateSlug: "ma", priority: 2 },
  
  // Michigan
  { city: "Detroit", state: "MI", stateName: "Michigan", slug: "detroit", stateSlug: "mi", priority: 1 },
  { city: "Grand Rapids", state: "MI", stateName: "Michigan", slug: "grand-rapids", stateSlug: "mi", priority: 2 },
  { city: "Ann Arbor", state: "MI", stateName: "Michigan", slug: "ann-arbor", stateSlug: "mi", priority: 2 },
  
  // Minnesota
  { city: "Minneapolis", state: "MN", stateName: "Minnesota", slug: "minneapolis", stateSlug: "mn", priority: 1 },
  { city: "St. Paul", state: "MN", stateName: "Minnesota", slug: "st-paul", stateSlug: "mn", priority: 1 },
  
  // Mississippi
  { city: "Jackson", state: "MS", stateName: "Mississippi", slug: "jackson", stateSlug: "ms", priority: 1 },
  
  // Missouri
  { city: "Kansas City", state: "MO", stateName: "Missouri", slug: "kansas-city", stateSlug: "mo", priority: 1 },
  { city: "St. Louis", state: "MO", stateName: "Missouri", slug: "st-louis", stateSlug: "mo", priority: 1 },
  { city: "Springfield", state: "MO", stateName: "Missouri", slug: "springfield-mo", stateSlug: "mo", priority: 2 },
  
  // Montana
  { city: "Billings", state: "MT", stateName: "Montana", slug: "billings", stateSlug: "mt", priority: 1 },
  
  // Nebraska
  { city: "Omaha", state: "NE", stateName: "Nebraska", slug: "omaha", stateSlug: "ne", priority: 1 },
  { city: "Lincoln", state: "NE", stateName: "Nebraska", slug: "lincoln", stateSlug: "ne", priority: 2 },
  
  // Nevada
  { city: "Las Vegas", state: "NV", stateName: "Nevada", slug: "las-vegas", stateSlug: "nv", priority: 1 },
  { city: "Reno", state: "NV", stateName: "Nevada", slug: "reno", stateSlug: "nv", priority: 2 },
  
  // New Hampshire
  { city: "Manchester", state: "NH", stateName: "New Hampshire", slug: "manchester", stateSlug: "nh", priority: 1 },
  
  // New Jersey
  { city: "Newark", state: "NJ", stateName: "New Jersey", slug: "newark", stateSlug: "nj", priority: 1 },
  { city: "Jersey City", state: "NJ", stateName: "New Jersey", slug: "jersey-city", stateSlug: "nj", priority: 1 },
  
  // New Mexico
  { city: "Albuquerque", state: "NM", stateName: "New Mexico", slug: "albuquerque", stateSlug: "nm", priority: 1 },
  
  // New York
  { city: "New York", state: "NY", stateName: "New York", slug: "new-york", stateSlug: "ny", priority: 1 },
  { city: "Buffalo", state: "NY", stateName: "New York", slug: "buffalo", stateSlug: "ny", priority: 2 },
  { city: "Rochester", state: "NY", stateName: "New York", slug: "rochester", stateSlug: "ny", priority: 2 },
  { city: "Albany", state: "NY", stateName: "New York", slug: "albany", stateSlug: "ny", priority: 2 },
  { city: "Syracuse", state: "NY", stateName: "New York", slug: "syracuse", stateSlug: "ny", priority: 3 },
  
  // North Carolina
  { city: "Charlotte", state: "NC", stateName: "North Carolina", slug: "charlotte", stateSlug: "nc", priority: 1 },
  { city: "Raleigh", state: "NC", stateName: "North Carolina", slug: "raleigh", stateSlug: "nc", priority: 1 },
  { city: "Greensboro", state: "NC", stateName: "North Carolina", slug: "greensboro", stateSlug: "nc", priority: 2 },
  { city: "Durham", state: "NC", stateName: "North Carolina", slug: "durham", stateSlug: "nc", priority: 2 },
  { city: "Winston-Salem", state: "NC", stateName: "North Carolina", slug: "winston-salem", stateSlug: "nc", priority: 2 },
  
  // North Dakota
  { city: "Fargo", state: "ND", stateName: "North Dakota", slug: "fargo", stateSlug: "nd", priority: 1 },
  
  // Ohio
  { city: "Columbus", state: "OH", stateName: "Ohio", slug: "columbus", stateSlug: "oh", priority: 1 },
  { city: "Cleveland", state: "OH", stateName: "Ohio", slug: "cleveland", stateSlug: "oh", priority: 1 },
  { city: "Cincinnati", state: "OH", stateName: "Ohio", slug: "cincinnati", stateSlug: "oh", priority: 1 },
  { city: "Toledo", state: "OH", stateName: "Ohio", slug: "toledo", stateSlug: "oh", priority: 2 },
  { city: "Akron", state: "OH", stateName: "Ohio", slug: "akron", stateSlug: "oh", priority: 2 },
  
  // Oklahoma
  { city: "Oklahoma City", state: "OK", stateName: "Oklahoma", slug: "oklahoma-city", stateSlug: "ok", priority: 1 },
  { city: "Tulsa", state: "OK", stateName: "Oklahoma", slug: "tulsa", stateSlug: "ok", priority: 1 },
  
  // Oregon
  { city: "Portland", state: "OR", stateName: "Oregon", slug: "portland", stateSlug: "or", priority: 1 },
  { city: "Eugene", state: "OR", stateName: "Oregon", slug: "eugene", stateSlug: "or", priority: 2 },
  
  // Pennsylvania
  { city: "Philadelphia", state: "PA", stateName: "Pennsylvania", slug: "philadelphia", stateSlug: "pa", priority: 1 },
  { city: "Pittsburgh", state: "PA", stateName: "Pennsylvania", slug: "pittsburgh", stateSlug: "pa", priority: 1 },
  { city: "Allentown", state: "PA", stateName: "Pennsylvania", slug: "allentown", stateSlug: "pa", priority: 2 },
  
  // Rhode Island
  { city: "Providence", state: "RI", stateName: "Rhode Island", slug: "providence", stateSlug: "ri", priority: 1 },
  
  // South Carolina
  { city: "Charleston", state: "SC", stateName: "South Carolina", slug: "charleston", stateSlug: "sc", priority: 1 },
  { city: "Columbia", state: "SC", stateName: "South Carolina", slug: "columbia", stateSlug: "sc", priority: 1 },
  
  // South Dakota
  { city: "Sioux Falls", state: "SD", stateName: "South Dakota", slug: "sioux-falls", stateSlug: "sd", priority: 1 },
  
  // Tennessee
  { city: "Nashville", state: "TN", stateName: "Tennessee", slug: "nashville", stateSlug: "tn", priority: 1 },
  { city: "Memphis", state: "TN", stateName: "Tennessee", slug: "memphis", stateSlug: "tn", priority: 1 },
  { city: "Knoxville", state: "TN", stateName: "Tennessee", slug: "knoxville", stateSlug: "tn", priority: 2 },
  { city: "Chattanooga", state: "TN", stateName: "Tennessee", slug: "chattanooga", stateSlug: "tn", priority: 2 },
  
  // Texas
  { city: "Houston", state: "TX", stateName: "Texas", slug: "houston", stateSlug: "tx", priority: 1 },
  { city: "Dallas", state: "TX", stateName: "Texas", slug: "dallas", stateSlug: "tx", priority: 1 },
  { city: "Austin", state: "TX", stateName: "Texas", slug: "austin", stateSlug: "tx", priority: 1 },
  { city: "San Antonio", state: "TX", stateName: "Texas", slug: "san-antonio", stateSlug: "tx", priority: 1 },
  { city: "Fort Worth", state: "TX", stateName: "Texas", slug: "fort-worth", stateSlug: "tx", priority: 1 },
  { city: "El Paso", state: "TX", stateName: "Texas", slug: "el-paso", stateSlug: "tx", priority: 2 },
  { city: "Arlington", state: "TX", stateName: "Texas", slug: "arlington", stateSlug: "tx", priority: 2 },
  { city: "Corpus Christi", state: "TX", stateName: "Texas", slug: "corpus-christi", stateSlug: "tx", priority: 2 },
  { city: "Plano", state: "TX", stateName: "Texas", slug: "plano", stateSlug: "tx", priority: 2 },
  { city: "Laredo", state: "TX", stateName: "Texas", slug: "laredo", stateSlug: "tx", priority: 3 },
  
  // Utah
  { city: "Salt Lake City", state: "UT", stateName: "Utah", slug: "salt-lake-city", stateSlug: "ut", priority: 1 },
  { city: "Provo", state: "UT", stateName: "Utah", slug: "provo", stateSlug: "ut", priority: 2 },
  
  // Vermont
  { city: "Burlington", state: "VT", stateName: "Vermont", slug: "burlington", stateSlug: "vt", priority: 1 },
  
  // Virginia
  { city: "Virginia Beach", state: "VA", stateName: "Virginia", slug: "virginia-beach", stateSlug: "va", priority: 1 },
  { city: "Richmond", state: "VA", stateName: "Virginia", slug: "richmond", stateSlug: "va", priority: 1 },
  { city: "Norfolk", state: "VA", stateName: "Virginia", slug: "norfolk", stateSlug: "va", priority: 2 },
  
  // Washington
  { city: "Seattle", state: "WA", stateName: "Washington", slug: "seattle", stateSlug: "wa", priority: 1 },
  { city: "Spokane", state: "WA", stateName: "Washington", slug: "spokane", stateSlug: "wa", priority: 2 },
  { city: "Tacoma", state: "WA", stateName: "Washington", slug: "tacoma", stateSlug: "wa", priority: 2 },
  
  // West Virginia
  { city: "Charleston", state: "WV", stateName: "West Virginia", slug: "charleston-wv", stateSlug: "wv", priority: 1 },
  
  // Wisconsin
  { city: "Milwaukee", state: "WI", stateName: "Wisconsin", slug: "milwaukee", stateSlug: "wi", priority: 1 },
  { city: "Madison", state: "WI", stateName: "Wisconsin", slug: "madison", stateSlug: "wi", priority: 1 },
  
  // Wyoming
  { city: "Cheyenne", state: "WY", stateName: "Wyoming", slug: "cheyenne", stateSlug: "wy", priority: 1 },
]

// Helper functions
export function getCityBySlug(citySlug: string, stateSlug: string): USCity | undefined {
  return majorUSCities.find(
    (city) => city.slug === citySlug && city.stateSlug === stateSlug.toLowerCase()
  )
}

export function formatLocationString(city: USCity): string {
  return `${city.city}, ${city.state}`
}

export function formatLocationDisplay(city: USCity): string {
  return `${city.city}, ${city.stateName}`
}

// Get cities by state
export function getCitiesByState(state: string): USCity[] {
  return majorUSCities.filter((city) => city.state === state.toUpperCase())
}

// Get all unique states
export function getAllStates(): string[] {
  return Array.from(new Set(majorUSCities.map((city) => city.state))).sort()
}

// Get cities by slug (without state requirement)
// Returns all cities matching the slug, sorted by priority (highest first)
export function getCitiesBySlug(citySlug: string): USCity[] {
  return majorUSCities
    .filter((city) => city.slug === citySlug)
    .sort((a, b) => a.priority - b.priority) // Lower priority number = higher priority
}
