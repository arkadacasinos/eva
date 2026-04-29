"use client"

import { Shuffle, Triangle } from "lucide-react"
import { GameTile } from "./game-tile"
import { randomGames } from "@/lib/eva-data"

export function RandomGame() {
  return (
    <section className="px-3 sm:px-5">
      <h2 className="mb-3 font-display text-lg font-bold tracking-tight sm:text-xl">
        Могу выбрать за тебя
      </h2>

      <div className="relative">
        <Triangle
          className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 fill-primary text-primary"
          aria-hidden
        />
        <Triangle
          className="absolute left-1/2 bottom-0 h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-180 fill-primary text-primary"
          aria-hidden
        />

        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/60 bg-card/40 p-2 sm:grid-cols-7 sm:gap-3 sm:p-3">
          {randomGames.map((g, i) => {
            const isCenter = i === 3
            return (
              <div key={g.id} className="relative">
                <GameTile game={g} />
                {isCenter && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-xs"
                    >
                      <Shuffle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      Случайная
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
