"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowLeft, ArrowRight, Building, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { CONTACT_FORM } from "./constants"
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
} from "./schemas"
import { projectTypeIcons } from "./utils"
import { useContactQuiz } from "./hooks/useContactQuiz"

export const ContactForm = () => {
  const totalSteps = 5
  const {
    currentStep,
    isSubmitting,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    submit,
    clearSavedData,
  } = useContactQuiz(totalSteps)

  const stepMeta = CONTACT_FORM.steps[currentStep - 1]

  const Step1 = () => {
    const form = useForm<z.infer<typeof step1Schema>>({
      resolver: zodResolver(step1Schema),
      defaultValues: {
        name: formData.name ?? "",
        email: formData.email ?? "",
        company: formData.company ?? "",
      },
    })

    const onSubmit = (values: z.infer<typeof step1Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {CONTACT_FORM.step1.nameLabel}
            </label>
            <Input id="name" {...form.register("name")} className="w-full" placeholder={CONTACT_FORM.step1.namePlaceholder} />
            {form.formState.errors.name ? (
              <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.name.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {CONTACT_FORM.step1.emailLabel}
            </label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="w-full"
              placeholder={CONTACT_FORM.step1.emailPlaceholder}
            />
            {form.formState.errors.email ? (
              <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.email.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              {CONTACT_FORM.step1.companyLabel}
            </label>
            <Input
              id="company"
              {...form.register("company")}
              className="w-full"
              placeholder={CONTACT_FORM.step1.companyPlaceholder}
            />
          </div>
        </div>
        <Button type="submit" className="w-full hover:bg-brand/90" size="lg">
          {CONTACT_FORM.buttons.continue} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    )
  }

  const Step2 = () => {
    const form = useForm<z.infer<typeof step2Schema>>({
      resolver: zodResolver(step2Schema),
      defaultValues: { projectType: formData.projectType },
    })

    const onSubmit = (values: z.infer<typeof step2Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {CONTACT_FORM.projectTypes.map((type) => {
            const Icon = projectTypeIcons[type.value]
            return (
              <label
                key={type.value}
                className={`relative flex cursor-pointer space-x-4 rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                  form.watch("projectType") === type.value
                    ? "border-brand bg-brand/5"
                    : "border-gray-200 hover:border-brand/50 dark:border-[#1f1f1f]/70"
                }`}
              >
                <input type="radio" value={type.value} {...form.register("projectType")} className="sr-only" />
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                    form.watch("projectType") === type.value
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-gray-600 dark:bg-[#1f1f1f]/70 dark:text-gray-400"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                {form.watch("projectType") === type.value ? <Check className="h-5 w-5 text-brand" /> : null}
              </label>
            )
          })}
        </div>
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="mr-2 h-4 w-4" /> {CONTACT_FORM.buttons.back}
          </Button>
          <Button type="submit" className="flex-1 hover:bg-brand/90" size="lg">
            {CONTACT_FORM.buttons.continue} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    )
  }

  const Step3 = () => {
    const form = useForm<z.infer<typeof step3Schema>>({
      resolver: zodResolver(step3Schema),
      defaultValues: { projectScope: formData.projectScope },
    })

    const onSubmit = (values: z.infer<typeof step3Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {CONTACT_FORM.projectScopes.map((scope) => (
            <label
              key={scope.value}
              className={`relative flex cursor-pointer space-x-4 rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                form.watch("projectScope") === scope.value
                  ? "border-brand bg-brand/5"
                  : "border-gray-200 hover:border-brand/50 dark:border-[#1f1f1f]/70"
              }`}
            >
              <input type="radio" value={scope.value} {...form.register("projectScope")} className="sr-only" />
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                  form.watch("projectScope") === scope.value
                    ? "bg-brand text-white"
                    : "bg-gray-100 text-gray-600 dark:bg-[#1f1f1f]/70 dark:text-gray-400"
                }`}
              >
                <Building className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{scope.label}</h3>
                <p className="text-sm text-muted-foreground">{scope.description}</p>
              </div>
              {form.watch("projectScope") === scope.value ? <Check className="h-5 w-5 text-brand" /> : null}
            </label>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="mr-2 h-4 w-4" /> {CONTACT_FORM.buttons.back}
          </Button>
          <Button type="submit" className="flex-1 hover:bg-brand/90" size="lg">
            {CONTACT_FORM.buttons.continue} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    )
  }

  const Step4 = () => {
    const form = useForm<z.infer<typeof step4Schema>>({
      resolver: zodResolver(step4Schema),
      defaultValues: {
        timeline: formData.timeline,
      },
    })

    const onSubmit = (values: z.infer<typeof step4Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 flex items-center text-lg font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              {CONTACT_FORM.step4.timelineHeading}
            </h3>
            <div className="space-y-3">
              {CONTACT_FORM.timelineOptions.map((option) => (
                <label
                  key={option.value}
                  className={`relative flex cursor-pointer space-x-3 rounded-lg border-2 p-3 transition-all hover:shadow-md ${
                    form.watch("timeline") === option.value
                      ? "border-brand bg-brand/5"
                      : "border-gray-200 hover:border-brand/50 dark:border-[#1f1f1f]/70"
                  }`}
                >
                  <input type="radio" value={option.value} {...form.register("timeline")} className="sr-only" />
                  <div
                    className={`flex h-4 w-4 flex-shrink-0 rounded-full border-2 ${
                      form.watch("timeline") === option.value ? "border-brand bg-brand" : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {form.watch("timeline") === option.value ? (
                      <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-white" />
                    ) : null}
                  </div>
                  <div>
                    <span className="font-medium">{option.label}</span>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="mr-2 h-4 w-4" /> {CONTACT_FORM.buttons.back}
          </Button>
          <Button type="submit" className="flex-1 hover:bg-brand/90" size="lg">
            {CONTACT_FORM.buttons.continue} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    )
  }

  const Step5 = () => {
    const form = useForm<z.infer<typeof step5Schema>>({
      resolver: zodResolver(step5Schema),
      defaultValues: { message: formData.message ?? "" },
    })

    const onSubmit = (values: z.infer<typeof step5Schema>) => {
      updateFormData(values)
      submit({ ...formData, ...values })
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {CONTACT_FORM.step5.messageLabel}
            </label>
            <Textarea
              id="message"
              {...form.register("message")}
              className="min-h-[150px] w-full"
              placeholder={CONTACT_FORM.step5.messagePlaceholder}
            />
            {form.formState.errors.message ? (
              <p className="text-sm text-red-500 dark:text-red-400">{form.formState.errors.message.message}</p>
            ) : null}
          </div>
        </div>
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="mr-2 h-4 w-4" /> {CONTACT_FORM.buttons.back}
          </Button>
          <Button type="submit" variant="brand" className="flex-1" size="lg" disabled={isSubmitting}>
            {isSubmitting ? CONTACT_FORM.buttons.submitting : CONTACT_FORM.buttons.submit}
          </Button>
        </div>
      </form>
    )
  }

  const renderSuccess = () => (
    <div className="space-y-6 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold">{CONTACT_FORM.success.title}</h2>
        <p className="text-muted-foreground">{CONTACT_FORM.success.body}</p>
      </div>
      <Button onClick={clearSavedData} variant="outline">
        {CONTACT_FORM.buttons.startNew}
      </Button>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
      case 5:
        return <Step5 />
      default:
        return renderSuccess()
    }
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">{CONTACT_FORM.page.title}</h1>
          <p className="text-lg text-muted-foreground">{CONTACT_FORM.page.subtitle}</p>
          {Object.keys(formData).length > 0 && currentStep > 1 && currentStep <= totalSteps ? (
            <div className="mt-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
              <Check className="mr-1 h-4 w-4" />
              {CONTACT_FORM.page.progressSaved}
            </div>
          ) : null}
        </div>

        {currentStep <= totalSteps ? (
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">
                {CONTACT_FORM.progress.stepLabel} {currentStep} {CONTACT_FORM.progress.of} {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-[#1f1f1f]/70">
              <div
                className="h-2 rounded-full bg-brand transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        ) : null}

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-[#1f1f1f]/70 dark:bg-[#1f1f1f]/70">
          {currentStep <= totalSteps && stepMeta ? (
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold">{stepMeta.title}</h2>
              <p className="text-muted-foreground">{stepMeta.description}</p>
            </div>
          ) : null}
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  )
}
