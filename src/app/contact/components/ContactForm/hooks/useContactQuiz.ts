"use client"

import * as React from "react"
import { toast } from "sonner"

import { submitContactAction } from "@/app/actions/contact"

import { CONTACT_FORM } from "../constants"
import type { ContactFormData } from "../schemas"

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
        const result = await submitContactAction(dataToSubmit)

        if (!result.ok) {
          toast.error(result.error ?? CONTACT_FORM.toasts.error)
          return
        }

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
