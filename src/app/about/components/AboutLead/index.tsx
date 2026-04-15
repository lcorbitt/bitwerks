import { Heading2 } from "@/components/ui/heading"

import { ABOUT_LEAD } from "./constants"

export const AboutLead = () => {
  return (
    <section className="bg-white py-16 md:py-24 dark:bg-black">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Heading2 className="mb-6">{ABOUT_LEAD.title}</Heading2>
          <p className="text-lg text-muted-foreground">{ABOUT_LEAD.body}</p>
        </div>
      </div>
    </section>
  )
}
