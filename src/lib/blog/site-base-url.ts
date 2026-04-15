export const getSiteBaseUrl = (): string => {
  const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (raw) return raw.replace(/\/$/, "")
  return "https://bitwerks.dev"
}
