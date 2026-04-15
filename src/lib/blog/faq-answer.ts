const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const escapeHtmlAttribute = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

/** Allow http(s), mailto, and same-site absolute paths (no protocol-relative //). */
export const normalizeFaqAnswerHref = (raw: string): string | null => {
  const href = raw.trim()
  if (!href) return null
  if (href.startsWith("//")) return null
  if (href.startsWith("/")) {
    if (/[\s<>"'`]/.test(href)) return null
    return href
  }
  if (/^mailto:/i.test(href)) {
    try {
      const u = new URL(href)
      if (u.protocol === "mailto:") return u.toString()
    } catch {
      return null
    }
    return null
  }
  try {
    const u = new URL(href.startsWith("http") ? href : `https://${href}`)
    if (u.protocol === "http:" || u.protocol === "https:") return u.toString()
  } catch {
    return null
  }
  return null
}

const MD_LINK = /\[([^\]]*)\]\(([^)]+)\)/g

/**
 * Turns FAQ answer text into HTML: plain segments are escaped; `[label](url)` becomes a safe anchor when `url` is allowed.
 */
export const faqAnswerMarkdownToSafeHtml = (input: string): string => {
  let last = 0
  let out = ""
  MD_LINK.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = MD_LINK.exec(input)) !== null) {
    out += escapeHtml(input.slice(last, match.index))
    const label = match[1]
    const href = normalizeFaqAnswerHref(match[2])
    if (href) {
      out += `<a href="${escapeHtmlAttribute(href)}" rel="noopener noreferrer" target="_blank">${escapeHtml(label)}</a>`
    } else {
      out += escapeHtml(match[0])
    }
    last = match.index + match[0].length
  }
  out += escapeHtml(input.slice(last))
  return out
}

/** Plain-text answer for JSON-LD / rich results (no HTML). */
export const faqAnswerToStructuredDataPlainText = (input: string): string => {
  const withLinksExpanded = input.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (_, label: string, url: string) => {
    const t = String(label).trim()
    const u = String(url).trim()
    if (!u) return t
    return t ? `${t} ${u}` : u
  })
  return withLinksExpanded.replace(/\s+/g, " ").trim()
}
