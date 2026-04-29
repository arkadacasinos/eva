"use client"

import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EvaLogo } from "./logo"

export function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-3 py-3 sm:px-5">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Открыть меню"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-card text-foreground/80 ring-1 ring-border hover:bg-muted lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="lg:hidden">
          <EvaLogo />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Поиск"
            className="hidden h-10 w-10 items-center justify-center rounded-lg bg-card text-foreground/70 ring-1 ring-border hover:bg-muted sm:flex"
          >
            <Search className="h-4 w-4" />
          </button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full bg-card px-5 text-sm font-semibold text-foreground ring-1 ring-border hover:bg-muted"
          >
            Вход
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-primary px-5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
          >
            <span className="hidden sm:inline">Регистрация</span>
            <span className="sm:hidden">Регистр.</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
