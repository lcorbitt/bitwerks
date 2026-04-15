import type { BlogFaqPair } from "@/lib/blog/blog-seo"
import { splitListInput } from "@/lib/blog/blog-seo"
import type { BlogPostWithImages } from "@/types/blog"

const normalizeFaq = (items: BlogFaqPair[]) =>
  items
    .filter((f) => f.question.trim() && f.answer.trim())
    .map((f) => ({ question: f.question.trim(), answer: f.answer.trim() }))

const sortedUnique = (values: string[]) =>
  [...new Set(values.map((s) => s.trim()).filter(Boolean))].sort()

const comparableImages = (p: BlogPostWithImages) =>
  [...(p.images ?? [])]
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order || a.id.localeCompare(b.id))
    .map((i) => ({ id: i.id, sort_order: i.sort_order, public_url: i.public_url, alt: i.alt ?? "" }))

const snapshotFromPost = (p: BlogPostWithImages) => ({
  title: p.title,
  slug: p.slug,
  excerpt: p.excerpt ?? "",
  status: p.status,
  content_document: p.content_document,
  meta_title: p.meta_title ?? "",
  meta_description: p.meta_description ?? "",
  canonical_url: p.canonical_url ?? "",
  og_image_url: p.og_image_url ?? "",
  seo_keywords: sortedUnique(p.seo_keywords),
  tags: sortedUnique(p.tags),
  faq_schema: normalizeFaq(p.faq_schema),
  cover_image_url: p.cover_image_url ?? "",
  images: comparableImages(p),
})

export interface BlogEditorDirtyFormState {
  title: string
  slug: string
  excerpt: string
  status: "draft" | "published"
  contentDocument: unknown
  metaTitle: string
  metaDescription: string
  canonicalUrl: string
  ogImageUrl: string
  keywordsInput: string
  tagsInput: string
  faqItems: BlogFaqPair[]
  post: BlogPostWithImages
}

const snapshotFromForm = (form: BlogEditorDirtyFormState) => ({
  title: form.title,
  slug: form.slug,
  excerpt: form.excerpt,
  status: form.status,
  content_document: form.contentDocument,
  meta_title: form.metaTitle.trim(),
  meta_description: form.metaDescription.trim(),
  canonical_url: form.canonicalUrl.trim(),
  og_image_url: form.ogImageUrl.trim(),
  seo_keywords: sortedUnique(splitListInput(form.keywordsInput)),
  tags: sortedUnique(splitListInput(form.tagsInput)),
  faq_schema: normalizeFaq(form.faqItems),
  cover_image_url: form.post.cover_image_url ?? "",
  images: comparableImages(form.post),
})

export const isBlogEditorDirty = (form: BlogEditorDirtyFormState): boolean =>
  JSON.stringify(snapshotFromForm(form)) !== JSON.stringify(snapshotFromPost(form.post))
