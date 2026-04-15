import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPostArticle } from "@/app/blog/components/BlogPostArticle"
import { BlogPostJsonLd } from "@/app/blog/components/BlogPostJsonLd"
import { getPublishedPostBySlugPublic } from "@/lib/blog/queries-public"
import { getPostFeaturedImageUrl, toAbsoluteMediaUrl } from "@/lib/blog/post-preview-media"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

interface BlogPostPageProps {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const post = await getPublishedPostBySlugPublic(params.slug)
  if (!post) return { title: "Post not found" }

  const base = getSiteBaseUrl()
  const canonical = post.canonical_url?.trim() || `${base}/blog/${params.slug}`
  const title = post.meta_title?.trim() || post.title
  const description =
    post.meta_description?.trim() || post.excerpt?.trim() || `Read "${post.title}".`
  const ogImageRaw = getPostFeaturedImageUrl(post)
  const ogImage = ogImageRaw ? toAbsoluteMediaUrl(ogImageRaw, base) ?? ogImageRaw : undefined

  return {
    title,
    description,
    keywords: post.seo_keywords.length ? post.seo_keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPublishedPostBySlugPublic(params.slug)
  if (!post) notFound()

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BlogPostArticle post={post} />
    </>
  )
}

