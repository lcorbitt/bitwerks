"use client"

import * as React from "react"

import type { BlogFaqPair } from "@/lib/blog/blog-seo"

interface BlogSeoSectionProps {
  metaTitle: string
  metaDescription: string
  canonicalUrl: string
  ogImageUrl: string
  keywordsInput: string
  tagsInput: string
  faqItems: BlogFaqPair[]
  onMetaTitleChange: (value: string) => void
  onMetaDescriptionChange: (value: string) => void
  onCanonicalUrlChange: (value: string) => void
  onOgImageUrlChange: (value: string) => void
  onKeywordsInputChange: (value: string) => void
  onTagsInputChange: (value: string) => void
  onFaqItemsChange: (items: BlogFaqPair[]) => void
}

export const BlogSeoSection = ({
  metaTitle,
  metaDescription,
  canonicalUrl,
  ogImageUrl,
  keywordsInput,
  tagsInput,
  faqItems,
  onMetaTitleChange,
  onMetaDescriptionChange,
  onCanonicalUrlChange,
  onOgImageUrlChange,
  onKeywordsInputChange,
  onTagsInputChange,
  onFaqItemsChange,
}: BlogSeoSectionProps) => {
  const metaDescriptionLength = metaDescription.length

  const addFaqRow = () => {
    onFaqItemsChange([...faqItems, { question: "", answer: "" }])
  }

  const updateFaq = (index: number, patch: Partial<BlogFaqPair>) => {
    const next = faqItems.map((item, i) => (i === index ? { ...item, ...patch } : item))
    onFaqItemsChange(next)
  }

  const removeFaq = (index: number) => {
    onFaqItemsChange(faqItems.filter((_, i) => i !== index))
  }

  return (
    <section className="grid gap-6 rounded-2xl border bg-muted/10 p-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">SEO &amp; AEO</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Control how this article appears in search and AI overviews. FAQ pairs can qualify for FAQ rich results when
          content is factual and visible on the page.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-xs font-medium">Meta title (optional)</span>
          <input
            className="h-10 rounded-xl border bg-background px-3"
            value={metaTitle}
            onChange={(e) => onMetaTitleChange(e.target.value)}
            placeholder="Leave blank to use the article title in search results"
          />
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
            <span>Meta description</span>
            <span className="font-normal text-muted-foreground">
              {metaDescriptionLength} / 160 <span className="sr-only">characters</span>
            </span>
          </span>
          <textarea
            className="min-h-24 rounded-xl border bg-background px-3 py-2"
            value={metaDescription}
            onChange={(e) => onMetaDescriptionChange(e.target.value)}
            placeholder="Search snippet; aim for a clear value proposition in ~150–160 characters."
            maxLength={320}
          />
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-xs font-medium">Canonical URL (optional)</span>
          <input
            className="h-10 rounded-xl border bg-background px-3"
            value={canonicalUrl}
            onChange={(e) => onCanonicalUrlChange(e.target.value)}
            placeholder="Defaults to this post’s public URL when published"
            autoComplete="url"
          />
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-xs font-medium">Open Graph / social image URL (optional)</span>
          <input
            className="h-10 rounded-xl border bg-background px-3"
            value={ogImageUrl}
            onChange={(e) => onOgImageUrlChange(e.target.value)}
            placeholder="Defaults to cover image when set"
            autoComplete="url"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-medium">SEO keywords</span>
          <textarea
            className="min-h-24 rounded-xl border bg-background px-3 py-2 font-mono text-xs"
            value={keywordsInput}
            onChange={(e) => onKeywordsInputChange(e.target.value)}
            placeholder="Comma or line separated (synonyms, entities, long-tail phrases)"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-medium">Article tags</span>
          <textarea
            className="min-h-24 rounded-xl border bg-background px-3 py-2 font-mono text-xs"
            value={tagsInput}
            onChange={(e) => onTagsInputChange(e.target.value)}
            placeholder="Topic labels (e.g. web development, denver); used in structured data"
          />
        </label>
      </div>

      <div className="grid gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-medium">FAQ schema (AEO / rich results)</span>
          <button type="button" className="text-xs font-medium text-brand underline underline-offset-4" onClick={addFaqRow}>
            Add question
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Each pair becomes FAQ structured data. Questions and answers should match copy users see on the page.
        </p>
        <div className="grid gap-3">
          {faqItems.map((item, index) => (
            <div key={index} className="grid gap-2 rounded-xl border bg-background p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">Pair {index + 1}</span>
                <button type="button" className="text-xs text-red-600" onClick={() => removeFaq(index)}>
                  Remove
                </button>
              </div>
              <label className="grid gap-1">
                <span className="text-xs font-medium">Question</span>
                <input
                  className="h-9 rounded-lg border bg-background px-2 text-sm"
                  value={item.question}
                  onChange={(e) => updateFaq(index, { question: e.target.value })}
                />
              </label>
              <label className="grid gap-1">
                <span className="text-xs font-medium">Answer</span>
                <textarea
                  className="min-h-16 rounded-lg border bg-background px-2 py-1.5 text-sm"
                  value={item.answer}
                  onChange={(e) => updateFaq(index, { answer: e.target.value })}
                />
              </label>
            </div>
          ))}
          {!faqItems.length ? <div className="text-sm text-muted-foreground">No FAQ items. Add pairs if this post answers specific questions.</div> : null}
        </div>
      </div>
    </section>
  )
}
