export interface BlogFaqPair {
  question: string
  answer: string
}

export const parseBlogFaqSchema = (raw: unknown): BlogFaqPair[] => {
  if (!Array.isArray(raw)) return []
  const out: BlogFaqPair[] = []
  for (const item of raw) {
    if (!item || typeof item !== "object") continue
    const rec = item as Record<string, unknown>
    const q = typeof rec.question === "string" ? rec.question.trim() : ""
    const a = typeof rec.answer === "string" ? rec.answer.trim() : ""
    if (q && a) out.push({ question: q, answer: a })
  }
  return out
}

export const splitListInput = (input: string): string[] => {
  const parts = input
    .split(/[,;\n]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  return [...new Set(parts)]
}

export const normalizeOptionalUrl = (value: string): string | null => {
  const t = value.trim()
  if (!t) return null
  try {
    const u = new URL(t.startsWith("http") ? t : `https://${t}`)
    return u.toString()
  } catch {
    return t
  }
}

export const normalizeCanonicalUrl = (value: string): string | null => {
  const t = value.trim()
  if (!t) return null
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).toString()
  } catch {
    return null
  }
}
