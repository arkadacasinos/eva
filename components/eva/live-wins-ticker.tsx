import { Flame } from "lucide-react"
import { liveWins } from "@/lib/eva-data"

export function LiveWinsTicker() {
  // Duplicate items for seamless marquee
  const items = [...liveWins, ...liveWins]

  return (
    <section className="px-3 sm:px-5">
      <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur">
        <div className="flex items-center justify-center gap-2 border-b border-border/50 px-4 py-2.5">
          <Flame className="h-4 w-4 text-rose-400" />
          <span className="font-display text-sm font-bold tracking-tight">Лайв выигрыши</span>
          <Flame className="h-4 w-4 text-rose-400" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-card to-transparent" />

          <div className="flex w-max animate-marquee gap-3 py-3 pl-3">
            {items.map((win, i) => (
              <div
                key={`${win.game}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-xl bg-background/60 px-3 py-2 ring-1 ring-border"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-base">
                  {win.glyph}
                </span>
                <div className="text-xs">
                  <div className="max-w-[160px] truncate font-medium text-foreground">
                    {win.game}
                  </div>
                  <div className="font-bold text-primary">{win.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
