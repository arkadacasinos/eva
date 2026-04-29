"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Game } from "@/lib/eva-data"

type Props = {
  game: Game
  /** Make the inner content scale up for the 2x2 featured card */
  featured?: boolean
  className?: string
}

/**
 * GameTile fills its parent (h-full w-full). Sizing/aspect-ratio is the
 * responsibility of the parent wrapper inside GameSection. This avoids
 * conflicts between aspect-square and grid row/col spans.
 */
export function GameTile({ game, featured, className }: Props) {
  const hasImage = Boolean(game.image)

  return (
    <button
      type="button"
      aria-label={`Открыть игру ${game.title}`}
      className={cn(
        "group relative isolate block h-full w-full overflow-hidden rounded-2xl text-left transition-all",
        "ring-1 ring-border/40 hover:ring-primary/60 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {/* gradient bg fallback */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", game.gradient)} />

      {/* real image */}
      {hasImage && (
        <Image
          src={game.image as string}
          alt={`${game.title} ${game.subtitle ?? ""}`.trim()}
          fill
          sizes={featured ? "(max-width:768px) 90vw, 480px" : "(max-width:768px) 45vw, 220px"}
          className="object-cover"
          priority={featured}
        />
      )}

      {/* If no image, show fallback radial highlight + glyph */}
      {!hasImage && (
        <>
          <div
            className="absolute inset-0 opacity-60 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,0.45), rgba(255,255,255,0) 60%)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center select-none",
              featured ? "text-[7rem] sm:text-[9rem]" : "text-5xl sm:text-6xl",
            )}
            aria-hidden
          >
            <span className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">{game.glyph}</span>
          </div>
        </>
      )}

      {/* Subtle bottom gradient for legibility when there is an image */}
      {hasImage && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}

      {/* RTP badge */}
      {game.rtp && (
        <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-amber-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          RTP {game.rtp}
        </span>
      )}
      {game.badge && !game.rtp && (
        <span className="absolute left-2 top-2 z-10 inline-flex rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow">
          {game.badge}
        </span>
      )}

      {/* hover overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <Play className="h-5 w-5 fill-current" />
        </span>
      </div>
    </button>
  )
}
