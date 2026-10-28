"use client"

import { CASE_STUDIES_SECTION_ID } from "../constants"

export const useOurWorkIndex = () => {
  const scrollToCaseStudies = () => {
    const section = document.getElementById(CASE_STUDIES_SECTION_ID)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 48, behavior: "smooth" })
    }
  }

  return { scrollToCaseStudies }
}
