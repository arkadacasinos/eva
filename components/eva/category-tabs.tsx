"use client"

import { useState } from "react"
import { Sparkles, Star, Dices, Radio, Coins, Rocket, Egg, Spade, Infinity as InfinityIcon, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "all", label: "Все", icon: null, dot: "bg-emerald-400" },
  { id: "new", label: "Новые", icon: Sparkles, dot: "bg-emerald-400" },
  { id: "top", label: "Топ", icon: Star, dot: "bg-amber-400" },
  { id: "slots", label: "Слоты", icon: Dices, dot: "bg-cyan-400" },
  { id: "live", label: "Лайв", icon: Radio, dot: "bg-rose-400" },
  { id: "bonus", label: "Отыгрыш бонуса", icon: Coins, dot: "bg-fuchsia-400" },
  { id: "crash", label: "Краш", icon: Rocket, dot: "bg-orange-400" },
  { id: "easter", label: "Easter", icon: Egg, dot: "bg-yellow-400" },
  { id: "belatra", label: "Belatra", icon: Spade, dot: "bg-blue-400" },
  { id: "endorphina", label: "Endorphina", icon: InfinityIcon, dot: "bg-violet-400" },
]

export function CategoryTabs() {
  const [active, setActive] = useState("all")
  return (
    <div className="px-3 sm:px-5">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
        <button
          type="button"
          aria-label="Поиск"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-foreground/70 ring-1 ring-border hover:bg-muted"
        >
          <Search className="h-4 w-4" />
        </button>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ring-1",
              active === t.id
                ? "bg-primary text-primary-foreground ring-primary"
                : "bg-card text-foreground/80 ring-border hover:bg-muted",
            )}
          >
            <span className={cn("h-2 w-2 rounded-full", t.dot)} />
            {t.icon ? <t.icon className="h-4 w-4 opacity-80" /> : null}
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
