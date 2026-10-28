import { CREDENTIALS } from "./constants"

export const CredentialStrip = () => (
  <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start" role="list" aria-label="Notable clients and partners">
    {CREDENTIALS.map((name) => (
      <li
        key={name}
        className="rounded-full border border-border/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-foreground"
      >
        {name}
      </li>
    ))}
  </ul>
)
