import type { Metadata } from "next"

import { ContactForm } from "@/app/contact/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Your Company.",
}

export default function ContactPage() {
  return <ContactForm />
}
