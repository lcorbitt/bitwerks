import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"

import { faqAnswerMarkdownToSafeHtml } from "@/lib/blog/faq-answer"
import { sanitizeBlogHtml } from "@/lib/blog/sanitize"

import { BlogDocument } from "./BlogDocument"

interface BlogPostArticleProps {
  post: BlogPostWithImages
  variant?: "public" | "admin-preview"
}

/** Prefer dedicated cover; then SEO image; then first gallery image (sorted). */
const resolveHeroImageUrl = (post: BlogPostWithImages): string | null => {
  const cover = post.cover_image_url?.trim()
  if (cover) return cover
  const og = post.og_image_url?.trim()
  if (og) return og
  const sorted = [...(post.images ?? [])].sort((a, b) => a.sort_order - b.sort_order)
  const first = sorted[0]?.public_url?.trim()
  return first || null
}

const resolveHeroAlt = (post: BlogPostWithImages, url: string | null): string => {
  if (!url) return ""
  const match = post.images?.find((i) => i.public_url === url)?.alt?.trim()
  if (match) return match
  return `${post.title} — featured image`
}

export const BlogPostArticle = ({ post, variant = "public" }: BlogPostArticleProps) => {
  const isAdminPreview = variant === "admin-preview"
  const backHref = isAdminPreview ? "/admin" : "/blog"
  const backLabel = isAdminPreview ? "← Back to Admin" : "← Back to Blog"
  const heroUrl = resolveHeroImageUrl(post)
  const heroAlt = resolveHeroAlt(post, heroUrl)

  return (
    <>
      {heroUrl ? (
        <div className="w-full border-b border-border/30 bg-muted/25">
          <img
            src={heroUrl}
            alt={heroAlt}
            className="block min-h-[min(52vh,560px)] w-full max-h-[72vh] object-cover object-center"
            fetchPriority={variant === "public" ? "high" : "auto"}
            decoding="async"
          />
        </div>
      ) : null}

      <article className="w-full pb-16 md:pb-24">
        <div className={heroUrl ? "container pt-8 md:pt-10" : "container py-16 md:py-24"}>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Link href={backHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {backLabel}
              </Link>
            </div>

            {isAdminPreview ? (
              <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-foreground">
                <div className="font-medium">Admin preview</div>
                <p className="mt-1 text-muted-foreground">
                  This page uses the same layout as the public post. Content reflects the last saved version in the database;
                  save in the admin editor to refresh.
                </p>
                {post.status === "published" && post.slug ? (
                  <p className="mt-2">
                    <span className="text-muted-foreground">Live URL: </span>
                    <Link href={`/blog/${post.slug}`} className="text-brand underline underline-offset-4">
                      /blog/{post.slug}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-2 text-muted-foreground">Draft — not available on the public blog until published.</p>
                )}
              </div>
            ) : null}

            <header className="mb-10">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{post.title}</h1>
              <div className="mt-4 text-sm text-muted-foreground">
                {post.published_at ? new Date(post.published_at).toLocaleDateString() : null}
              </div>
              {post.excerpt ? <p className="mt-4 text-muted-foreground text-lg">{post.excerpt}</p> : null}
            </header>

            <BlogDocument html={post.content_html} />

            {post.faq_schema.length ? (
              <section className="mt-14 border-t border-border/40 pt-12" aria-labelledby="blog-faq-heading">
                <h2 id="blog-faq-heading" className="text-2xl font-semibold tracking-tight">
                  FAQ
                </h2>
                <dl className="mt-8 space-y-8">
                  {post.faq_schema.map((item, index) => (
                    <div key={`${item.question}-${index}`}>
                      <dt className="text-base font-medium text-foreground">{item.question}</dt>
                      <dd className="mt-2 text-muted-foreground prose prose-neutral max-w-none dark:prose-invert prose-p:my-0 prose-a:text-brand prose-a:underline-offset-4">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: sanitizeBlogHtml(faqAnswerMarkdownToSafeHtml(item.answer)),
                          }}
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </div>
        </div>
      </article>
    </>
  )
}
