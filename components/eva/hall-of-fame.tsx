import Image from "next/image"
import { Award } from "lucide-react"
import { hallOfFameWins, hallOfFameOdds } from "@/lib/eva-data"
import { cn } from "@/lib/utils"

export function HallOfFame() {
  return (
    <section className="px-3 sm:px-5">
      <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold tracking-tight sm:text-xl">
        <Award className="h-5 w-5 text-primary" />
        Зал славы
      </h2>

      <div className="grid gap-3 lg:grid-cols-2">
        {/* Top wins */}
        <div className="min-w-0 rounded-2xl border border-border/60 bg-card p-3 sm:p-5">
          <h3 className="mb-3 text-sm font-semibold text-foreground/85">Топ выигрыши</h3>

          {/* Featured #1 */}
          <Featured win={hallOfFameWins[0]} />

          <ul className="mt-3 space-y-2">
            {hallOfFameWins.slice(1).map((w) => (
              <li
                key={w.rank}
                className="flex min-w-0 items-center gap-2.5 rounded-xl bg-background/50 p-2.5 ring-1 ring-border/60 sm:gap-3"
              >
                <span
                  className={cn(
                    "relative flex h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ring-1 ring-border/60 sm:h-12 sm:w-12",
                    w.gradient,
                  )}
                >
                  {w.image ? (
                    <Image src={w.image} alt={w.game} fill sizes="48px" className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-2xl">{w.glyph}</span>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-display text-sm font-bold leading-tight tabular-nums text-foreground sm:text-base">
                    {w.amount}
                  </div>
                  <div className="mt-0.5 truncate text-xs text-foreground/70">{w.game}</div>
                  <div className="mt-0.5 truncate text-[10px] text-foreground/50">{w.provider}</div>
                </div>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-xs font-bold text-primary sm:h-8 sm:w-8 sm:text-sm">
                  {w.rank}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top multipliers */}
        <div className="min-w-0 rounded-2xl border border-border/60 bg-card p-3 sm:p-5">
          <h3 className="mb-3 text-sm font-semibold text-foreground/85">Топ коэффициенты</h3>
          <ul className="space-y-2">
            {hallOfFameOdds.map((o, i) => (
              <li
                key={i}
                className="flex min-w-0 items-center gap-2.5 rounded-xl bg-background/50 p-2.5 ring-1 ring-border/60 sm:gap-3"
              >
                <span
                  className={cn(
                    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ring-1 ring-border/60",
                    o.gradient,
                  )}
                >
                  {o.image ? (
                    <Image src={o.image} alt={o.game} fill sizes="40px" className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xl">{o.glyph}</span>
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium text-foreground sm:text-sm">{o.game}</div>
                  <div className="truncate text-[11px] text-foreground/50">{o.user}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-xs font-bold tabular-nums text-foreground sm:text-sm">{o.amount}</div>
                  <div className="text-[11px] font-semibold text-primary">{o.multiplier}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Featured({ win }: { win: typeof hallOfFameWins[number] }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-background/50 p-3 ring-1 ring-border/60">
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        <div
          className={cn(
            "relative flex h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ring-2 ring-primary/40 sm:h-20 sm:w-20",
            win.gradient,
          )}
        >
          {win.image ? (
            <Image src={win.image} alt={win.game} fill sizes="80px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-4xl">{win.glyph}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="break-words font-display text-lg font-extrabold leading-tight tracking-tight tabular-nums text-foreground sm:text-2xl md:text-3xl">
            {win.amount}
          </div>
          <div className="mt-1 truncate text-xs text-foreground/80 sm:text-sm">{win.game}</div>
          <div className="mt-1 inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary ring-1 ring-primary/30">
            <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span className="truncate">{win.provider}</span>
          </div>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground sm:h-9 sm:w-9 sm:text-base">
          {win.rank}
        </span>
      </div>
    </div>
  )
}
