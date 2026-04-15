import type { Metadata } from "next"

import { ServicesIndex } from "@/app/services/components/ServicesIndex"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore what Your Company can do for you.",
}

export default function ServicesPage() {
  return <ServicesIndex />
}
