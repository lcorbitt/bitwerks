import type { Metadata } from "next"

import { BlogIndexHero } from "@/app/blog/components/BlogIndexHero"
import { BlogPostGridCard } from "@/app/blog/components/BlogPostGridCard"
import { listPublishedPostsPublic } from "@/lib/blog/queries-public"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on web development, software delivery, and how we build at BitWerks.",
}

export default async function BlogIndexPage() {
  const posts = await listPublishedPostsPublic()
  const [featured, ...rest] = posts

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(42rem,85vh)] bg-gradient-to-b from-brand/[0.07] via-transparent to-transparent dark:from-brand/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        {featured ? (
          <div className="mt-12 md:mt-16">
            <BlogIndexHero post={featured} />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <section className="mt-16 md:mt-24" aria-labelledby="blog-more-heading">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-border/50 pb-6 sm:flex-row sm:items-end">
              <div>
                <h2 id="blog-more-heading" className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  More articles
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">Browse the archive, newest first.</p>
              </div>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {rest.map((post) => (
                <li key={post.id}>
                  <BlogPostGridCard post={post} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {!featured ? (
          <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-dashed border-border/70 bg-muted/20 px-8 py-14 text-center">
            <p className="text-lg font-medium text-foreground">No published posts yet</p>
            <p className="mt-2 text-sm text-muted-foreground">Check back soon for guides and updates from the team.</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
