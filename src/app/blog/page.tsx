import type { Metadata } from "next"

import { BlogIndexHero } from "@/app/blog/components/BlogIndexHero"
import { BlogPostGridCard } from "@/app/blog/components/BlogPostGridCard"
import { CTA } from "@/components/sections/cta"
import { listPublishedPostsPublic } from "@/lib/blog/queries-public"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on web development, software delivery, and how we build at BitWerks.",
}

export default async function BlogIndexPage() {
  const posts = await listPublishedPostsPublic()
  const [featured, ...rest] = posts

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(42rem,85vh)] bg-gradient-to-b from-brand/[0.07] via-transparent to-transparent dark:from-brand/10"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {featured ? (
            <BlogIndexHero post={featured} />
          ) : null}

          {!featured ? (
            <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-dashed border-border/70 bg-muted/20 px-8 py-14 text-center">
              <p className="text-lg font-medium text-foreground">No published posts yet</p>
              <p className="mt-2 text-sm text-muted-foreground">Check back soon for guides and updates from the team.</p>
            </div>
          ) : null}
        </div>
      </section>

      {rest.length > 0 ? (
        <section
          className="w-full bg-black/5 dark:bg-white/5"
          aria-labelledby="blog-more-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {rest.map((post) => (
                <li key={post.id}>
                  <BlogPostGridCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CTA />
    </div>
  )
}
