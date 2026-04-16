import { sanitizeBlogHtml } from "@/lib/blog/sanitize"

import styles from "./BlogDocument.module.css"

interface BlogDocumentProps {
  html: string
}

export const BlogDocument = ({ html }: BlogDocumentProps) => {
  const safeHtml = sanitizeBlogHtml(html)

  return (
    <div
      className={`${styles.blogDocument} prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-a:text-brand prose-figure:my-0 prose-img:rounded-xl`}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  )
}
