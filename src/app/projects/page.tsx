import type { Metadata } from "next"

import { ProjectsIndex } from "@/app/projects/components/ProjectsIndex"

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of recent work from Your Company.",
}

export default function ProjectsPage() {
  return <ProjectsIndex />
}
