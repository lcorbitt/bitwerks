/** Supabase `.select()` fragment: one blog post row + nested images (keep in sync with RLS-exposed columns). */
export const blogPostWithImagesSelect = `
  id,
  created_at,
  updated_at,
  title,
  slug,
  status,
  published_at,
  excerpt,
  cover_image_url,
  content_document,
  content_html,
  meta_title,
  meta_description,
  canonical_url,
  og_image_url,
  seo_keywords,
  tags,
  faq_schema,
  images:blog_post_images (
    id,
    created_at,
    post_id,
    storage_path,
    public_url,
    alt,
    sort_order
  )
`
