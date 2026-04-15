import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"

import { faqAnswerMarkdownToSafeHtml } from "@/lib/blog/faq-answer"
import { getPostFeaturedImageUrl } from "@/lib/blog/post-preview-media"
import { sanitizeBlogHtml } from "@/lib/blog/sanitize"

import { BlogPostAuthorCard } from "./BlogPostAuthorCard"
import { BlogDocument } from "./BlogDocument"
import { BlogPostFaqSection } from "./BlogPostFaqSection"

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
  const backHref = isAdminPreview ? "/admin" : "/blog"
  const backLabel = isAdminPreview ? "← Back to Admin" : "← Back to Blog"
  const heroUrl = getPostFeaturedImageUrl(post)
  const heroAlt = resolveHeroAlt(post, heroUrl)

  return (
    <article className="w-full pb-16 md:pb-24">
      <div className="container py-16 md:py-24">
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
                className="mt-6 max-w-2xl border-l-[3px] border-brand/55 pl-5 text-pretty text-xl font-medium leading-relaxed text-foreground/90 dark:border-brand/50 dark:text-foreground/88 md:mt-8 md:text-2xl md:leading-snug"
                role="doc-subtitle"
              >
                {post.excerpt}
              </p>
            ) : null}
            <p
              className={`text-sm text-muted-foreground ${post.excerpt ? "mt-4" : post.published_at ? "mt-4" : "mt-6"}`}
            >
              <span className="font-medium text-foreground/85">Article written:</span>{" "}
              <time dateTime={post.created_at}>{formatArticleDateLabel(post.created_at)}</time>
            </p>
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

          {post.faq_schema.length ? (
            <div className="mt-16 sm:-mx-5 md:-mx-10 md:mt-20">
              <BlogPostFaqSection
                items={post.faq_schema.map((item) => ({
                  question: item.question,
                  answerHtml: sanitizeBlogHtml(faqAnswerMarkdownToSafeHtml(item.answer)),
                }))}
              />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
