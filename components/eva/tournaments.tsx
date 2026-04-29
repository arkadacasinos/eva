"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Trophy } from "lucide-react"

type Tournament = {
  id: string
  prize: string
  title: string
  imageSrc: string
  imageAlt: string
  endsInHours: number
  accent: string
}

const tournaments: Tournament[] = [
  {
    id: "evas-pace",
    prize: "500 000 ₽",
    title: "В темпе Евы",
    imageSrc: "/tournament-runner.jpg",
    imageAlt: "Спортсменка на пробежке",
    endsInHours: 17 + 24 * 0,
    accent: "from-emerald-500/30 to-emerald-500/0",
  },
  {
    id: "play-with-fire",
    prize: "500 000 ₽",
    title: "Играй с огнём",
    imageSrc: "/tournament-devil.jpg",
    imageAlt: "Маскот-дьяволёнок с трезубцем",
    endsInHours: 17 + 24 * 6,
    accent: "from-rose-500/30 to-rose-500/0",
  },
]

export function Tournaments() {
  return (
    <section className="px-3 sm:px-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight sm:text-xl">
          <Trophy className="h-5 w-5 text-primary" />
          Турниры
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-border hover:bg-muted"
        >
          Смотреть все
          <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary">
            2
          </span>
        </a>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {tournaments.map((t) => (
          <TournamentCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  )
}

function TournamentCard({ t }: { t: Tournament }) {
  const [{ days, hours, minutes }, setTime] = useState(() => fromHours(t.endsInHours))

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        const totalMin = prev.days * 1440 + prev.hours * 60 + prev.minutes - 1
        if (totalMin <= 0) return { days: 0, hours: 0, minutes: 0 }
        const d = Math.floor(totalMin / 1440)
        const h = Math.floor((totalMin - d * 1440) / 60)
        const m = totalMin - d * 1440 - h * 60
        return { days: d, hours: h, minutes: m }
      })
    }, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <article className="relative isolate overflow-hidden rounded-2xl border border-border/60 bg-card">
      <Image
        src={t.imageSrc || "/placeholder.svg"}
        alt={t.imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent`} />
      <div className={`absolute inset-0 bg-gradient-to-t ${t.accent}`} />

      <div className="relative flex min-h-[200px] flex-col gap-4 p-4 sm:min-h-[240px] sm:p-6">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            {t.prize}
          </div>
          <div className="text-sm text-foreground/85">{t.title}</div>
        </div>

        <div className="mt-auto flex items-end gap-3 sm:gap-4">
          <TimeBlock value={pad(days)} label="дней" />
          <Sep />
          <TimeBlock value={pad(hours)} label="часов" />
          <Sep />
          <TimeBlock value={pad(minutes)} label="минут" />
        </div>

        <button
          type="button"
          className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
        >
          Участвовать
        </button>
      </div>
    </article>
  )
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
        {value}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/55">
        {label}
      </span>
    </div>
  )
}

function Sep() {
  return <span className="pb-5 text-xl font-bold text-foreground/40">:</span>
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function fromHours(total: number) {
  const days = Math.floor(total / 24)
  const hours = total - days * 24
  return { days, hours, minutes: 4 }
}
