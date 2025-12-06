"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ArrowRight, ArrowLeft, Globe, Code, Building, Calendar, DollarSign, MessageSquare } from "lucide-react"

// Form schemas for each step
const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
})

const step2Schema = z.object({
  projectType: z.enum(["website", "software", "white-label"]),
})

const step3Schema = z.object({
  projectScope: z.enum(["new", "existing", "update"]),
})

const step4Schema = z.object({
  timeline: z.enum(["asap", "1-3months", "3-6months", "6months+", "flexible"]),
  budget: z.enum(["under-1k", "1k-5k", "5k-10k", "10k+", "discuss"]),
})

const step5Schema = z.object({
  message: z.string().min(10, "Please provide more details about your project."),
})

type FormData = z.infer<typeof step1Schema> & 
  z.infer<typeof step2Schema> & 
  z.infer<typeof step3Schema> & 
  z.infer<typeof step4Schema> & 
  z.infer<typeof step5Schema>

const projectTypes = [
  { value: "website", label: "Website", description: "Custom website design and development", icon: Globe },
  { value: "software", label: "Software Application", description: "Custom software or web application", icon: Code },
  { value: "white-label", label: "White Label Partnership", description: "We build it, you present it", icon: Building },
]

const projectScopes = [
  { value: "new", label: "New Project", description: "Starting from scratch" },
  { value: "existing", label: "Existing Project", description: "Have an existing project to improve" },
  { value: "update", label: "Update/Redesign", description: "Looking to update or redesign current solution" },
]

const timelineOptions = [
  { value: "asap", label: "ASAP", description: "Need it done quickly" },
  { value: "1-3months", label: "1-3 Months", description: "Standard timeline" },
  { value: "3-6months", label: "3-6 Months", description: "Flexible timeline" },
  { value: "6months+", label: "6+ Months", description: "Long-term project" },
  { value: "flexible", label: "Flexible", description: "No specific deadline" },
]

const budgetOptions = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k+", label: "$10,000+" },
  { value: "discuss", label: "Let's discuss" },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Partial<FormData>>({})

  const totalSteps = 5

  // Load saved data from localStorage on component mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('contact-quiz-data')
      const savedStep = localStorage.getItem('contact-quiz-step')
      
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setFormData(parsedData)
        } catch (error) {
          console.error('Error parsing saved form data:', error)
        }
      }
      
      if (savedStep) {
        const step = parseInt(savedStep, 10)
        if (step >= 1 && step <= totalSteps) {
          setCurrentStep(step)
        }
      }
    }
  }, [])

  const updateFormData = (data: Partial<FormData>) => {
    const newData = { ...formData, ...data }
    setFormData(newData)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('contact-quiz-data', JSON.stringify(newData))
    }
  }

  const updateStep = (step: number) => {
    setCurrentStep(step)
    
    // Save current step to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('contact-quiz-step', step.toString())
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      updateStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      updateStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the form data to your backend
      console.log("Form submission:", formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Clear saved data after successful submission
      if (typeof window !== 'undefined') {
        localStorage.removeItem('contact-quiz-data')
        localStorage.removeItem('contact-quiz-step')
      }
      
      toast.success("Thank you! We'll get back to you within 24 hours.")
      updateStep(totalSteps + 1) // Show success state
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearSavedData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('contact-quiz-data')
      localStorage.removeItem('contact-quiz-step')
    }
    setFormData({})
    setCurrentStep(1)
  }

  const renderStep1 = () => {
    const form = useForm<z.infer<typeof step1Schema>>({
      resolver: zodResolver(step1Schema),
      defaultValues: {
        name: formData.name || "",
        email: formData.email || "",
        company: formData.company || "",
      },
    })

    const onSubmit = (values: z.infer<typeof step1Schema>) => {
      console.log('Step 1 submitted with values:', values)
      updateFormData(values)
      nextStep()
    }

    const onError = (errors: any) => {
      console.log('Step 1 validation errors:', errors)
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </label>
            <Input
              id="name"
              {...form.register("name")}
              className="w-full"
              placeholder="Enter your full name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="w-full"
              placeholder="Enter your email address"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company (Optional)
            </label>
            <Input
              id="company"
              {...form.register("company")}
              className="w-full"
              placeholder="Enter your company name"
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full" size="lg">
          Continue <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    )
  }

  const renderStep2 = () => {
    const form = useForm<z.infer<typeof step2Schema>>({
      resolver: zodResolver(step2Schema),
      defaultValues: {
        projectType: formData.projectType || undefined,
      },
    })

    const onSubmit = (values: z.infer<typeof step2Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {projectTypes.map((type) => {
            const Icon = type.icon
            return (
              <label
                key={type.value}
                className={`relative flex items-start space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                  form.watch("projectType") === type.value
                    ? "border-brand bg-brand/5"
                    : "border-gray-200 dark:border-gray-700 hover:border-brand/50"
                }`}
              >
                <input
                  type="radio"
                  value={type.value}
                  {...form.register("projectType")}
                  className="sr-only"
                />
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  form.watch("projectType") === type.value
                    ? "bg-brand text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                {form.watch("projectType") === type.value && (
                  <Check className="w-5 h-5 text-brand" />
                )}
              </label>
            )
          })}
        </div>
        
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button type="submit" className="flex-1" size="lg">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    )
  }

  const renderStep3 = () => {
    const form = useForm<z.infer<typeof step3Schema>>({
      resolver: zodResolver(step3Schema),
      defaultValues: {
        projectScope: formData.projectScope || undefined,
      },
    })

    const onSubmit = (values: z.infer<typeof step3Schema>) => {
      updateFormData(values)
      nextStep()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {projectScopes.map((scope) => (
            <label
              key={scope.value}
              className={`relative flex items-start space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                form.watch("projectScope") === scope.value
                  ? "border-brand bg-brand/5"
                  : "border-gray-200 dark:border-gray-700 hover:border-brand/50"
              }`}
            >
              <input
                type="radio"
                value={scope.value}
                {...form.register("projectScope")}
                className="sr-only"
              />
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                form.watch("projectScope") === scope.value
                  ? "bg-brand text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              }`}>
                <Building className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{scope.label}</h3>
                <p className="text-sm text-muted-foreground">{scope.description}</p>
              </div>
              {form.watch("projectScope") === scope.value && (
                <Check className="w-5 h-5 text-brand" />
              )}
            </label>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button type="submit" className="flex-1" size="lg">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    )
  }

  const renderStep4 = () => {
    const form = useForm<z.infer<typeof step4Schema>>({
      resolver: zodResolver(step4Schema),
      defaultValues: {
        timeline: formData.timeline || undefined,
        budget: formData.budget || undefined,
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
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Project Timeline
            </h3>
            <div className="space-y-3">
              {timelineOptions.map((option) => (
                <label
                  key={option.value}
                  className={`relative flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                    form.watch("timeline") === option.value
                      ? "border-brand bg-brand/5"
                      : "border-gray-200 dark:border-gray-700 hover:border-brand/50"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...form.register("timeline")}
                    className="sr-only"
                  />
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 ${
                    form.watch("timeline") === option.value
                      ? "border-brand bg-brand"
                      : "border-gray-300 dark:border-gray-600"
                  }`}>
                    {form.watch("timeline") === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <div>
                    <span className="font-medium">{option.label}</span>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Budget Range
            </h3>
            <div className="space-y-3">
              {budgetOptions.map((option) => (
                <label
                  key={option.value}
                  className={`relative flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                    form.watch("budget") === option.value
                      ? "border-brand bg-brand/5"
                      : "border-gray-200 dark:border-gray-700 hover:border-brand/50"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...form.register("budget")}
                    className="sr-only"
                  />
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 ${
                    form.watch("budget") === option.value
                      ? "border-brand bg-brand"
                      : "border-gray-300 dark:border-gray-600"
                  }`}>
                    {form.watch("budget") === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button type="submit" className="flex-1" size="lg">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    )
  }

  const renderStep5 = () => {
    const form = useForm<z.infer<typeof step5Schema>>({
      resolver: zodResolver(step5Schema),
      defaultValues: {
        message: formData.message || "",
      },
    })

    const onSubmit = (values: z.infer<typeof step5Schema>) => {
      updateFormData(values)
      handleSubmit()
    }

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Additional Details *
            </label>
            <Textarea
              id="message"
              {...form.register("message")}
              className="min-h-[150px] w-full"
              placeholder="Tell us more about your project, goals, and any specific requirements..."
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button type="submit" className="flex-1" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Project Request"}
          </Button>
        </div>
      </form>
    )
  }

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-muted-foreground">
          We've received your project details and will get back to you within 24 hours with a personalized proposal.
        </p>
      </div>
      <Button onClick={clearSavedData} variant="outline">
        Start New Project Request
      </Button>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      default: return renderSuccess()
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Let's get to know you"
      case 2: return "What type of project?"
      case 3: return "Project scope"
      case 4: return "Timeline & budget"
      case 5: return "Additional details"
      default: return "Success!"
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return "Tell us a bit about yourself so we can personalize our approach."
      case 2: return "What can we help you with?"
      case 3: return "Is this a new project or are you looking to improve something existing?"
      case 4: return "Help us understand your timeline and budget preferences."
      case 5: return "Any additional details that will help us create the perfect solution?"
      default: return ""
    }
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Start Your Project</h1>
          <p className="text-lg text-muted-foreground">
            This quick quiz helps us understand your needs.
          </p>
          {Object.keys(formData).length > 0 && currentStep > 1 && (
            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <Check className="w-4 h-4 mr-1" />
              Progress saved automatically
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {currentStep <= totalSteps && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-brand h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          {currentStep <= totalSteps && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{getStepTitle()}</h2>
              <p className="text-muted-foreground">{getStepDescription()}</p>
            </div>
          )}
          
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  )
} 