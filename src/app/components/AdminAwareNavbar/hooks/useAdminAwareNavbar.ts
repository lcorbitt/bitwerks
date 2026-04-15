"use client"

import { usePathname } from "next/navigation"

import { getIsNavbarHiddenForPathname } from "../utils"

export const useAdminAwareNavbar = () => {
  const pathname = usePathname()

  return {
    pathname,
    isHidden: getIsNavbarHiddenForPathname(pathname),
  }
}

