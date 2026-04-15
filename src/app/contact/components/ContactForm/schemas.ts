import * as z from "zod"

import { CONTACT_VALIDATION_MESSAGES } from "./constants"

export const step1Schema = z.object({
  name: z.string().min(2, CONTACT_VALIDATION_MESSAGES.nameMin),
  email: z.string().email(CONTACT_VALIDATION_MESSAGES.emailInvalid),
  company: z.string().optional(),
})

export const step2Schema = z.object({
  projectType: z.enum(["website", "software", "white-label"]),
})

export const step3Schema = z.object({
  projectScope: z.enum(["new", "existing", "update"]),
})

export const step4Schema = z.object({
  timeline: z.enum(["asap", "1-3months", "3-6months", "6months+", "flexible"]),
  budget: z.enum(["under-1k", "1k-5k", "5k-10k", "10k+", "discuss"]),
})

export const step5Schema = z.object({
  message: z
    .string()
    .min(1, CONTACT_VALIDATION_MESSAGES.messageRequired)
    .refine(
      (val) => val.trim().split(/\s+/).filter((word) => word.length > 0).length >= 3,
      { message: CONTACT_VALIDATION_MESSAGES.messageWordCount },
    ),
})

export type ContactFormData = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema> &
  z.infer<typeof step3Schema> &
  z.infer<typeof step4Schema> &
  z.infer<typeof step5Schema>
