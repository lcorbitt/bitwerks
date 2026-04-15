"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"

import { getIsNavbarHiddenForPathname } from "./utils"

export const AdminAwareNavbar = () => {
  const pathname = usePathname()

  if (getIsNavbarHiddenForPathname(pathname)) return null
  return <Navbar />
}

