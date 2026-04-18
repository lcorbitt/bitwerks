"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { submitContactAction } from "@/app/actions/contact"
import { CONTACT_FORM } from "@/app/contact/components/ContactForm/constants"
import { step1Schema, step5Schema } from "@/app/contact/components/ContactForm/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const condensedSchema = z.object({
  name: step1Schema.shape.name,
  email: step1Schema.shape.email,
  company: step1Schema.shape.company,
  message: step5Schema.shape.message,
})

type CondensedValues = z.infer<typeof condensedSchema>

export type LocationLeadServicePreset = "website" | "software" | "white-label"

interface ContactLeadCondensedProps {
  sourceLine: string
  projectTypePreset: LocationLeadServicePreset
}

export const ContactLeadCondensed = ({ sourceLine, projectTypePreset }: ContactLeadCondensedProps) => {
  const form = useForm<CondensedValues>({
    resolver: zodResolver(condensedSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  })

  const onSubmit = async (values: CondensedValues) => {
    const result = await submitContactAction({
      name: values.name,
      email: values.email,
      company: values.company?.trim() ? values.company : undefined,
      projectType: projectTypePreset,
      projectScope: "new",
      timeline: "flexible",
      message: `[${sourceLine}]\n\n${values.message}`,
    })
    if (!result.ok) {
      toast.error(result.error ?? CONTACT_FORM.toasts.error)
      return
    }
    toast.success(CONTACT_FORM.toasts.success)
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="lead-name" className="text-sm font-medium">
            {CONTACT_FORM.step1.nameLabel}
          </label>
          <Input id="lead-name" {...form.register("name")} autoComplete="name" />
          {form.formState.errors.name ? (
            <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="lead-email" className="text-sm font-medium">
            {CONTACT_FORM.step1.emailLabel}
          </label>
          <Input id="lead-email" type="email" {...form.register("email")} autoComplete="email" />
          {form.formState.errors.email ? (
            <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="lead-company" className="text-sm font-medium">
          {CONTACT_FORM.step1.companyLabel}
        </label>
        <Input id="lead-company" {...form.register("company")} autoComplete="organization" />
      </div>
      <div className="space-y-2">
        <label htmlFor="lead-message" className="text-sm font-medium">
          Project details
        </label>
        <Textarea id="lead-message" rows={4} className="resize-y" {...form.register("message")} />
        {form.formState.errors.message ? (
          <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" className="w-full" variant="brand" size="lg" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? CONTACT_FORM.buttons.submitting : CONTACT_FORM.buttons.submit}
      </Button>
    </form>
  )
}
