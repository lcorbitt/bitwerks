"use client"

import type * as React from "react"

import { Button as ExistingButton } from "@/components/ui/button"

type ExistingButtonProps = React.ComponentProps<typeof ExistingButton>

export const Button = (props: ExistingButtonProps) => {
  return <ExistingButton {...props} />
}

