export const CONTACT_FORM = {
  storage: {
    dataKey: "contact-quiz-data",
    stepKey: "contact-quiz-step",
  },
  page: {
    title: "Start your project",
    subtitle: "A short questionnaire helps us understand your needs.",
    progressSaved: "Progress saved automatically",
  },
  progress: {
    stepLabel: "Step",
    of: "of",
  },
  buttons: {
    continue: "Continue",
    back: "Back",
    submit: "Submit",
    submitting: "Submitting…",
    startNew: "Start new request",
  },
  success: {
    title: "Thank you",
    body: "We received your message and will follow up soon.",
  },
  toasts: {
    success: "Thank you! We will get back to you soon.",
    error: "Something went wrong. Please try again.",
  },
  step1: {
    nameLabel: "Full name *",
    namePlaceholder: "Your full name",
    emailLabel: "Email *",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company (optional)",
    companyPlaceholder: "Company name",
  },
  step5: {
    messageLabel: "Details *",
    messagePlaceholder: "Tell us about your goals, timeline, and requirements…",
  },
  step4: {
    timelineHeading: "Timeline",
    budgetHeading: "Budget",
  },
  steps: [
    { title: "About you", description: "Basic contact details so we can respond." },
    { title: "Project type", description: "What kind of work are you considering?" },
    { title: "Scope", description: "New build, existing product, or redesign?" },
    { title: "Timeline & budget", description: "Rough preferences are fine." },
    { title: "Anything else?", description: "Share context that will help us prepare." },
  ],
  projectTypes: [
    { value: "website" as const, label: "Website", description: "Marketing site, landing pages, or content site." },
    { value: "software" as const, label: "Software", description: "Web app, internal tools, or product work." },
    { value: "white-label" as const, label: "Partnership", description: "You sell; we build under your brand." },
  ],
  projectScopes: [
    { value: "new" as const, label: "New initiative", description: "Starting from a blank slate." },
    { value: "existing" as const, label: "Existing product", description: "Improving something already live." },
    { value: "update" as const, label: "Refresh", description: "Redesign, refactor, or modernize." },
  ],
  timelineOptions: [
    { value: "asap" as const, label: "ASAP", description: "As soon as practical." },
    { value: "1-3months" as const, label: "1–3 months", description: "Near-term delivery." },
    { value: "3-6months" as const, label: "3–6 months", description: "Medium-term roadmap." },
    { value: "6months+" as const, label: "6+ months", description: "Exploratory or long-range." },
    { value: "flexible" as const, label: "Flexible", description: "No fixed deadline yet." },
  ],
  budgetOptions: [
    { value: "under-1k" as const, label: "Under $1,000" },
    { value: "1k-5k" as const, label: "$1,000 – $5,000" },
    { value: "5k-10k" as const, label: "$5,000 – $10,000" },
    { value: "10k+" as const, label: "$10,000+" },
    { value: "discuss" as const, label: "Prefer to discuss" },
  ],
} as const

export const CONTACT_VALIDATION_MESSAGES = {
  nameMin: "Name must be at least 2 characters.",
  emailInvalid: "Please enter a valid email address.",
  messageRequired: "Please add a few words about your project.",
  messageWordCount: "Please share a bit more detail (at least a short sentence).",
} as const
