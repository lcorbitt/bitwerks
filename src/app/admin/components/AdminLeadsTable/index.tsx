"use client"

import type { NewsletterLead } from "@/types/newsletter"

interface AdminLeadsTableProps {
  initialLeads: NewsletterLead[]
}

export const AdminLeadsTable = ({ initialLeads }: AdminLeadsTableProps) => {
  return (
    <div className="grid gap-4">
      <div className="overflow-x-auto rounded-xl border bg-background">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {initialLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3 font-medium">{lead.email}</td>
                <td className="px-4 py-3 text-muted-foreground">{lead.source ?? "—"}</td>
                <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {initialLeads.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            No newsletter signups yet. They will appear here when visitors subscribe.
          </div>
        ) : null}
      </div>
    </div>
  )
}
