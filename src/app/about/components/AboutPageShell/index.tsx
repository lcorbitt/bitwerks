import type { AboutPageShellProps } from "./types"

export const AboutPageShell = ({ children }: AboutPageShellProps) => {
  return <div className="flex flex-col overflow-hidden">{children}</div>
}

