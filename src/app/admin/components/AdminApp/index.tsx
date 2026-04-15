"use client"

import * as React from "react"

import type { User } from "@supabase/supabase-js"

import type { BlogPostWithImages } from "@/types/blog"

import { AdminSignIn } from "../AdminSignIn"
import { AdminBlogPanel } from "../AdminBlogPanel"
import { ADMIN_APP } from "./constants"

interface AdminAppProps {
  configured: boolean
  user?: User | null
  isAdmin?: boolean
  initialPosts?: BlogPostWithImages[]
}

export const AdminApp = ({ configured, user = null, isAdmin = false, initialPosts = [] }: AdminAppProps) => {
  const [activeTab, setActiveTab] = React.useState<"blog" | "more">("blog")

  if (!configured)
    return (
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-xl rounded-2xl border bg-white/50 p-6 dark:bg-black/20">
          <h1 className="text-xl font-semibold">Supabase not configured</h1>
          <p className="mt-2 text-muted-foreground">
            Add <code className="font-mono text-sm">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
            <code className="font-mono text-sm">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.
          </p>
        </div>
      </div>
    )

  if (!user) return <AdminSignIn />

  if (!isAdmin)
    return (
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-xl rounded-2xl border bg-white/50 p-6 dark:bg-black/20">
          <h1 className="text-xl font-semibold">Access denied</h1>
          <p className="mt-2 text-muted-foreground">Your user is signed in, but not in the admin allowlist.</p>
        </div>
      </div>
    )

  return (
    <div className="container py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{ADMIN_APP.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{ADMIN_APP.subtitle}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-1 border-b" role="tablist" aria-label="Admin tools">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "blog"}
          className={[
            "rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors",
            activeTab === "blog" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
          ].join(" ")}
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={false}
          disabled
          aria-disabled
          className="cursor-not-allowed rounded-t-lg px-4 py-2.5 text-sm font-medium text-muted-foreground/50"
        >
          More tools
        </button>
      </div>

      <div className="mt-6" role="tabpanel">
        {activeTab === "blog" ? <AdminBlogPanel initialPosts={initialPosts} /> : null}
      </div>
    </div>
  )
}

