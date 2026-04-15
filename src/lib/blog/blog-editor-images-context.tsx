"use client"

import * as React from "react"

import type { BlogPostImageRow } from "@/types/blog"

export const BlogEditorImagesContext = React.createContext<BlogPostImageRow[]>([])

export const useBlogEditorImages = (): BlogPostImageRow[] => React.useContext(BlogEditorImagesContext)
