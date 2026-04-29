"use client"

import { useEffect } from "react"
import {
  Trophy,
  Crown,
  Gift,
  Megaphone,
  ShoppingBag,
  Sparkles,
  Star,
  Dices,
  Radio,
  Coins,
  Rocket,
  Egg,
  Spade,
  Infinity as InfinityIcon,
  X,
  Heart,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { EvaLogo } from "./logo"
import { sidebarPrimary, sidebarCategories } from "@/lib/eva-data"

const iconMap = {
  trophy: Trophy,
  crown: Crown,
  gift: Gift,
  megaphone: Megaphone,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
  star: Star,
  dices: Dices,
  radio: Radio,
  coins: Coins,
  rocket: Rocket,
  egg: Egg,
  spade: Spade,
  infinity: InfinityIcon,
} as const

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  // close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop on mobile */}
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        aria-label="Главное меню"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
        )}
      >
        {/* Top: logo + close */}
        <div className="flex items-center justify-between px-4 py-4">
          <EvaLogo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="flex h-8 w-8 items-center justify-center rounded-md text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Promo cards */}
        <div className="space-y-3 px-3 pb-4">
          <PromoCard
            title="КОЛЕСО"
            subtitle="ФОРТУНЫ"
            gradient="from-amber-500 via-amber-600 to-orange-700"
            glyph="🎡"
          />
          <PromoCard
            title="СВИДАНИЕ"
            subtitle="С ЕВОЙ"
            level="Level 0/21"
            gradient="from-rose-500 via-pink-600 to-purple-700"
            glyph="💋"
          />
        </div>

        {/* Primary nav */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-thin">
          <ul className="space-y-0.5">
            {sidebarPrimary.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <li key={item.label}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary/90" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="my-3 h-px bg-sidebar-border" />

          <ul className="space-y-0.5">
            {sidebarCategories.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <li key={item.label}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary/90" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-3 text-xs text-sidebar-foreground/55">
          <div className="flex items-center gap-1.5">
            <Heart className="h-3 w-3 fill-primary text-primary" />
            <span>Eva Premium · 2026</span>
          </div>
        </div>
      </aside>
    </>
  )
}

function PromoCard({
  title,
  subtitle,
  level,
  gradient,
  glyph,
}: {
  title: string
  subtitle: string
  level?: string
  gradient: string
  glyph: string
}) {
  return (
    <button
      type="button"
      className={cn(
        "relative flex w-full items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br p-3 text-left ring-1 ring-white/10 transition-transform hover:-translate-y-0.5",
        gradient,
      )}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black/25 text-2xl backdrop-blur-sm">
        {glyph}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-display text-sm font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow">
          {title}
        </div>
        <div className="font-display text-sm font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow">
          {subtitle}
        </div>
        {level && (
          <div className="mt-0.5 text-[10px] font-medium text-white/80">{level}</div>
        )}
      </div>
    </button>
  )
}
