import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"

import { faqAnswerMarkdownToSafeHtml } from "@/lib/blog/faq-answer"
import { getPostFeaturedImageUrl } from "@/lib/blog/post-preview-media"
import { sanitizeBlogHtml } from "@/lib/blog/sanitize"

import { CTA } from "@/components/sections/cta"

import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

import { BlogPostAuthorCard } from "./BlogPostAuthorCard"
import { BlogDocument } from "./BlogDocument"
import { BlogPostFaqSection } from "./BlogPostFaqSection"
import { BlogShareMenu } from "./BlogShareMenu"

interface BlogPostArticleProps {
  post: BlogPostWithImages
  variant?: "public" | "admin-preview"
}

const resolveHeroAlt = (post: BlogPostWithImages, url: string | null): string => {
  if (!url) return ""
  const match = post.images?.find((i) => i.public_url === url)?.alt?.trim()
  if (match) return match
  return `${post.title} — featured image`
}

const formatArticleDateLabel = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })

export const BlogPostArticle = ({ post, variant = "public" }: BlogPostArticleProps) => {
  const isAdminPreview = variant === "admin-preview"
  const backHref = isAdminPreview ? "/admin" : "/insights"
  const backLabel = isAdminPreview ? "← Back to Admin" : "← Back to Insights"
  const heroUrl = getPostFeaturedImageUrl(post)
  const heroAlt = resolveHeroAlt(post, heroUrl)
  const shareUrl =
    !isAdminPreview && post.slug
      ? `${getSiteBaseUrl()}/insights/${post.slug}`
      : null

  return (
    <article className="w-full">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-3">
            <Link href={backHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {backLabel}
            </Link>
            {shareUrl ? <BlogShareMenu shareUrl={shareUrl} /> : null}
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
                  <Link href={`/insights/${post.slug}`} className="text-brand underline underline-offset-4">
                    /insights/{post.slug}
                  </Link>
                </p>
              ) : (
                <p className="mt-2 text-muted-foreground">Draft — not available on the public insights feed until published.</p>
              )}
            </div>
          ) : null}

          <header className="mb-0">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
            {post.published_at ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Published{" "}
                <time dateTime={post.published_at}>{formatArticleDateLabel(post.published_at)}</time>
              </p>
            ) : null}
            {post.excerpt ? (
              <p
                className="my-8 max-w-2xl border-l-[3px] border-brand/55 pl-5 text-pretty text-xl font-medium leading-relaxed text-foreground/90 dark:border-brand/50 dark:text-foreground/88 md:mt-8 md:text-2xl md:leading-snug"
                role="doc-subtitle"
              >
                {post.excerpt}
              </p>
            ) : null}
          </header>

          <div className={heroUrl ? "mt-6 mb-8" : "mt-6 mb-10"}>
            <BlogPostAuthorCard />
          </div>

          {heroUrl ? (
            <figure className="mb-10">
              <img
                src={heroUrl}
                alt={heroAlt}
                className="block aspect-[16/9] w-full max-h-[min(55vh,520px)] rounded-none bg-muted/20 object-cover object-center"
                fetchPriority={variant === "public" ? "high" : "auto"}
                decoding="async"
              />
            </figure>
          ) : null}

          <BlogDocument html={post.content_html} />
        </div>

        {post.faq_schema.length ? (
          <BlogPostFaqSection
            items={post.faq_schema.map((item) => ({
              question: item.question,
              answerHtml: sanitizeBlogHtml(faqAnswerMarkdownToSafeHtml(item.answer)),
            }))}
          />
        ) : null}
      </div>
      <CTA />
    </article>
  )
}
