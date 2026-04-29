"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { useRef } from "react"
import { GameTile } from "./game-tile"
import type { Game } from "@/lib/eva-data"
import { cn } from "@/lib/utils"

type Props = {
  icon: ReactNode
  title: string
  count: number
  games: Game[]
  /** First card spans 2x2 like the "Royal Easter" featured card */
  firstFeatured?: boolean
}

export function GameSection({ icon, title, count, games, firstFeatured }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="px-3 sm:px-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight sm:text-xl">
          <span className="text-xl" aria-hidden>
            {icon}
          </span>
          <span>{title}</span>
        </h2>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-border hover:bg-muted"
          >
            Смотреть все
            <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary">
              {count}
            </span>
          </a>
          <div className="hidden items-center gap-1 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Прокрутить влево"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground/70 ring-1 ring-border hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Прокрутить вправо"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground/70 ring-1 ring-border hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal flex scroll with fixed-size tiles. */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 hide-scrollbar sm:gap-3 md:hidden"
      >
        {games.map((g, i) => {
          const isFeat = firstFeatured && i === 0
          return (
            <div
              key={g.id}
              className={cn(
                "snap-start shrink-0",
                isFeat ? "h-44 w-44 sm:h-56 sm:w-56" : "h-32 w-32 sm:h-40 sm:w-40",
              )}
            >
              <GameTile game={g} featured={isFeat} />
            </div>
          )
        })}
      </div>

      {/* Desktop: grid with optional 2x2 featured first tile. */}
      <div
        className={cn(
          "hidden gap-3 md:grid",
          firstFeatured ? "md:grid-cols-6" : "md:grid-cols-7",
        )}
        style={
          firstFeatured
            ? {
                gridTemplateRows: "repeat(2, minmax(0, 1fr))",
                gridAutoFlow: "row dense",
              }
            : undefined
        }
      >
        {games.map((g, i) => {
          const isFeat = firstFeatured && i === 0
          return (
            <div
              key={g.id}
              className={cn(
                "aspect-square",
                isFeat && "col-span-2 row-span-2",
              )}
            >
              <GameTile game={g} featured={isFeat} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
