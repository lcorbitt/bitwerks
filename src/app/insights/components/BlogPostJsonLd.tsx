import type { BlogPostWithImages } from "@/types/blog"

import { faqAnswerToStructuredDataPlainText } from "@/lib/blog/faq-answer"
import { getPostFeaturedImageUrl, toAbsoluteMediaUrl } from "@/lib/blog/post-preview-media"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

interface BlogPostJsonLdProps {
  post: BlogPostWithImages
}

export const BlogPostJsonLd = ({ post }: BlogPostJsonLdProps) => {
  const base = getSiteBaseUrl()
  const url = `${base}/insights/${post.slug}`
  const description = post.meta_description?.trim() || post.excerpt?.trim() || undefined
  const featuredRaw = getPostFeaturedImageUrl(post)
  const featuredAbs = featuredRaw ? toAbsoluteMediaUrl(featuredRaw, base) ?? featuredRaw : null
  const images = featuredAbs ? [featuredAbs] : []

  const blogPosting: Record<string, unknown> = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description,
    datePublished: post.published_at ?? undefined,
    dateModified: post.updated_at,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "BitWerks", url: base },
    publisher: { "@type": "Organization", name: "BitWerks", url: base },
  }

  if (images.length > 0) blogPosting.image = images
  if (post.seo_keywords.length) blogPosting.keywords = post.seo_keywords.join(", ")
  if (post.tags.length) blogPosting.articleSection = post.tags.join(", ")

  const graph: Record<string, unknown>[] = [blogPosting]

  if (post.faq_schema.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: post.faq_schema.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAnswerToStructuredDataPlainText(item.answer),
        },
      })),
    })
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
