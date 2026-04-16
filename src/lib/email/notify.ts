import { CONTACT_FORM } from "@/app/contact/components/ContactForm/constants"
import type { ContactFormData } from "@/app/contact/components/ContactForm/schemas"

import { escapeHtml } from "./html-escape"
import { sendEmail } from "./send-email"

const labelForProjectType = (value: ContactFormData["projectType"]) =>
  CONTACT_FORM.projectTypes.find((item) => item.value === value)?.label ?? value

const labelForProjectScope = (value: ContactFormData["projectScope"]) =>
  CONTACT_FORM.projectScopes.find((item) => item.value === value)?.label ?? value

const labelForTimeline = (value: ContactFormData["timeline"]) =>
  CONTACT_FORM.timelineOptions.find((item) => item.value === value)?.label ?? value

/**
 * Notifies the inbox configured by CONTACT_FORM_EMAIL after a submission is stored.
 */
export const notifyContactFormInbox = async (data: ContactFormData) => {
  try {
    const to = process.env.CONTACT_FORM_EMAIL?.trim()
    if (!to) {
      console.warn("[email] CONTACT_FORM_EMAIL is not set; skipping contact notification.")
      return
    }

    const companyLine = data.company?.trim() ? `Company: ${data.company.trim()}` : "Company: —"
    const text = [
      "New contact form submission",
      "",
      `Name: ${data.name.trim()}`,
      `Email: ${data.email.trim()}`,
      companyLine,
      `Project type: ${labelForProjectType(data.projectType)}`,
      `Scope: ${labelForProjectScope(data.projectScope)}`,
      `Timeline: ${labelForTimeline(data.timeline)}`,
      "",
      "Message:",
      data.message.trim(),
    ].join("\n")

    const safeName = escapeHtml(data.name.trim())
    const safeEmail = escapeHtml(data.email.trim().toLowerCase())
    const safeCompany = data.company?.trim() ? escapeHtml(data.company.trim()) : "—"
    const safeMessage = escapeHtml(data.message.trim()).replaceAll("\n", "<br />")

    const html = `
    <h1>New contact form submission</h1>
    <p><strong>Name:</strong> ${safeName}<br/>
    <strong>Email:</strong> ${safeEmail}<br/>
    <strong>Company:</strong> ${safeCompany}<br/>
    <strong>Project type:</strong> ${escapeHtml(labelForProjectType(data.projectType))}<br/>
    <strong>Scope:</strong> ${escapeHtml(labelForProjectScope(data.projectScope))}<br/>
    <strong>Timeline:</strong> ${escapeHtml(labelForTimeline(data.timeline))}</p>
    <h2>Message</h2>
    <p>${safeMessage}</p>
  `.trim()

    const result = await sendEmail({
      to,
      subject: `Contact: ${data.name.trim()}`,
      text,
      html,
      replyTo: data.email.trim().toLowerCase(),
    })

    if (!result.ok && !result.skipped) {
      console.error("[email] Contact form notification failed:", result.error)
    }
    if (!result.ok && result.skipped) {
      console.warn("[email] Contact form notification skipped (Resend not configured).")
    }
  } catch (err) {
    console.error("[email] Contact form notification threw:", err)
  }
}

/**
 * Notifies the inbox configured by NEWSLETTER_EMAIL after a lead is stored.
 */
export const notifyNewsletterInbox = async (email: string, source?: string) => {
  try {
    const to = process.env.NEWSLETTER_EMAIL?.trim()
    if (!to) {
      console.warn("[email] NEWSLETTER_EMAIL is not set; skipping newsletter notification.")
      return
    }

    const normalized = email.toLowerCase().trim()
    const sourceLine = source?.trim() ? `Source: ${source.trim()}` : "Source: (not provided)"

    const text = ["New newsletter signup", "", `Email: ${normalized}`, sourceLine].join("\n")

    const html = `
    <h1>New newsletter signup</h1>
    <p><strong>Email:</strong> ${escapeHtml(normalized)}<br/>
    <strong>Source:</strong> ${source?.trim() ? escapeHtml(source.trim()) : "(not provided)"}</p>
  `.trim()

    const result = await sendEmail({
      to,
      subject: `Newsletter signup: ${normalized}`,
      text,
      html,
      replyTo: normalized,
    })

    if (!result.ok && !result.skipped) {
      console.error("[email] Newsletter notification failed:", result.error)
    }
    if (!result.ok && result.skipped) {
      console.warn("[email] Newsletter inbox notification skipped (Resend not configured).")
    }
  } catch (err) {
    console.error("[email] Newsletter notification threw:", err)
  }
}
