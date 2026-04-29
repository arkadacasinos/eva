"use client"

import { useState, type ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-svh">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header onOpenMenu={() => setOpen(true)} />
        <main className="flex-1">
          <div className="space-y-7 py-5 sm:space-y-9 sm:py-7">{children}</div>
        </main>
      </div>
    </div>
  )
}
