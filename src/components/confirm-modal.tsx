"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export interface ConfirmModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  cancelLabel?: string
  confirmLabel?: string
  onConfirm: () => void
  /** Use destructive styling for the confirm action (e.g. delete). */
  confirmVariant?: "default" | "destructive"
  /** Hide the corner close control; user must pick Cancel or Confirm. */
  hideCloseButton?: boolean
  className?: string
}

export const ConfirmModal = ({
  open,
  onOpenChange,
  title,
  description,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  onConfirm,
  confirmVariant = "default",
  hideCloseButton = false,
  className,
}: ConfirmModalProps) => {
  const onConfirmClick = () => {
    onConfirm()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideCloseButton={hideCloseButton} className={cn("sm:max-w-md", className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-2">
          <Button type="button" variant="outline" className="text-sm font-medium" onClick={() => onOpenChange(false)}>
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={confirmVariant === "destructive" ? "destructive" : "brand"}
            className="text-sm font-medium"
            onClick={onConfirmClick}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
