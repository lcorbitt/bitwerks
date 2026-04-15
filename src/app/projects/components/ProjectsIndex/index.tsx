import Link from "next/link"

import { PROJECTS_INDEX } from "./constants"

export const ProjectsIndex = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{PROJECTS_INDEX.title}</h1>
        <p className="mt-3 text-muted-foreground">{PROJECTS_INDEX.description}</p>

        <div className="mt-10 rounded-2xl border bg-white/50 p-6 dark:bg-black/20">
          <p className="text-muted-foreground">
            {PROJECTS_INDEX.noteBeforeLink}{" "}
            <Link className="underline underline-offset-4" href={PROJECTS_INDEX.portfolioHref}>
              {PROJECTS_INDEX.portfolioLinkText}
            </Link>{" "}
            ({PROJECTS_INDEX.portfolioHref}). {PROJECTS_INDEX.noteAfterLink}
          </p>
        </div>
      </div>
    </div>
  )
}
