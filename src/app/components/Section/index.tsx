import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps) => {
  return <section className={cn(className)}>{children}</section>
}

