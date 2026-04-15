"use client"

import * as React from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

import { CONTACT_FORM } from "../constants"
import type { ContactFormData } from "../schemas"
import { getEmailLabelMaps } from "../utils"

const { storage } = CONTACT_FORM

export const useContactQuiz = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState<Partial<ContactFormData>>({})
  const formDataRef = React.useRef(formData)
  React.useEffect(() => {
    formDataRef.current = formData
  }, [formData])

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const savedData = localStorage.getItem(storage.dataKey)
    const savedStep = localStorage.getItem(storage.stepKey)

    if (savedData) {
      try {
        setFormData(JSON.parse(savedData) as Partial<ContactFormData>)
      } catch {
        // ignore corrupt storage
      }
    }

    if (savedStep) {
      const step = Number.parseInt(savedStep, 10)
      if (step >= 1 && step <= totalSteps) setCurrentStep(step)
    }
  }, [totalSteps])

  const persistFormData = React.useCallback((data: Partial<ContactFormData>) => {
    if (typeof window === "undefined") return
    localStorage.setItem(storage.dataKey, JSON.stringify(data))
  }, [])

  const persistStep = React.useCallback(
    (step: number) => {
      if (typeof window === "undefined") return
      localStorage.setItem(storage.stepKey, step.toString())
    },
    [],
  )

  const updateFormData = React.useCallback(
    (data: Partial<ContactFormData>) => {
      setFormData((prev) => {
        const next = { ...prev, ...data }
        persistFormData(next)
        return next
      })
    },
    [persistFormData],
  )

  const updateStep = React.useCallback(
    (step: number) => {
      setCurrentStep(step)
      persistStep(step)
    },
    [persistStep],
  )

  const nextStep = React.useCallback(() => {
    setCurrentStep((s) => {
      const next = s < totalSteps ? s + 1 : s
      persistStep(next)
      return next
    })
  }, [persistStep, totalSteps])

  const prevStep = React.useCallback(() => {
    setCurrentStep((s) => {
      const next = s > 1 ? s - 1 : s
      persistStep(next)
      return next
    })
  }, [persistStep])

  const clearSavedData = React.useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(storage.dataKey)
      localStorage.removeItem(storage.stepKey)
    }
    setFormData({})
    setCurrentStep(1)
    persistStep(1)
  }, [persistStep])

  const submit = React.useCallback(
    async (finalFormData?: Partial<ContactFormData>) => {
      setIsSubmitting(true)
      try {
        const dataToSubmit = finalFormData ?? formDataRef.current
        const maps = getEmailLabelMaps()

        const emailParams = {
          from_name: dataToSubmit.name ?? "",
          from_email: dataToSubmit.email ?? "",
          company: dataToSubmit.company?.trim() ? dataToSubmit.company : CONTACT_FORM.email.companyFallback,
          project_type:
            maps.projectType[dataToSubmit.projectType as string] ?? dataToSubmit.projectType ?? CONTACT_FORM.email.notSelected,
          project_scope:
            maps.projectScope[dataToSubmit.projectScope as string] ??
            dataToSubmit.projectScope ??
            CONTACT_FORM.email.notSelected,
          timeline:
            maps.timeline[dataToSubmit.timeline as string] ?? dataToSubmit.timeline ?? CONTACT_FORM.email.notSelected,
          budget: maps.budget[dataToSubmit.budget as string] ?? dataToSubmit.budget ?? CONTACT_FORM.email.notSelected,
          message: dataToSubmit.message ?? "",
        }

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_w0qm9cn",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          emailParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        )

        if (typeof window !== "undefined") {
          localStorage.removeItem(storage.dataKey)
          localStorage.removeItem(storage.stepKey)
        }

        toast.success(CONTACT_FORM.toasts.success)
        updateStep(totalSteps + 1)
      } catch {
        toast.error(CONTACT_FORM.toasts.error)
      } finally {
        setIsSubmitting(false)
      }
    },
    [totalSteps, updateStep],
  )

  return {
    currentStep,
    isSubmitting,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    submit,
    clearSavedData,
  }
}
