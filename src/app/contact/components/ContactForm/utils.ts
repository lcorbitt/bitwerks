import { Building, Code, Globe } from "lucide-react"

import { CONTACT_FORM } from "./constants"

export const projectTypeIcons = {
  website: Globe,
  software: Code,
  "white-label": Building,
} as const

export const getEmailLabelMaps = () => ({
  projectType: Object.fromEntries(CONTACT_FORM.projectTypes.map((t) => [t.value, t.label])) as Record<string, string>,
  projectScope: Object.fromEntries(CONTACT_FORM.projectScopes.map((s) => [s.value, s.label])) as Record<string, string>,
  timeline: Object.fromEntries(CONTACT_FORM.timelineOptions.map((t) => [t.value, t.label])) as Record<string, string>,
  budget: Object.fromEntries(CONTACT_FORM.budgetOptions.map((b) => [b.value, b.label])) as Record<string, string>,
})
