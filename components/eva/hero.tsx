import Image from "next/image"
import { Gift, Disc, Wallet, Trophy } from "lucide-react"

const features = [
  { id: "gifts", title: "Подарки от Евы", icon: Gift, gradient: "from-amber-500/20 to-amber-500/5" },
  { id: "wheel", title: "Колесо фортуны", icon: Disc, gradient: "from-emerald-400/20 to-emerald-400/5" },
  { id: "cashback", title: "Кешбэк до 20%", icon: Wallet, gradient: "from-lime-400/20 to-lime-400/5" },
  { id: "tournaments", title: "Крупные турниры", icon: Trophy, gradient: "from-yellow-400/20 to-yellow-400/5" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[460px]">
        <Image
          src="/hero-eva.jpg"
          alt="Eva — премиум-хостесс приглашает на платформу"
          fill
          priority
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover"
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* copy */}
        <div className="relative flex h-full min-h-[260px] flex-col justify-end p-5 sm:min-h-[340px] sm:p-8 md:min-h-[420px] md:p-10 lg:min-h-[460px]">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Премиум-клуб
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              Добро пожаловать,
              <br />
              <span className="text-primary">меня зовут Ева</span>
            </h1>
            <p className="mt-3 max-w-sm text-sm text-foreground/75 sm:text-base">
              Эксклюзивные турниры, щедрые бонусы и сотни игр от лучших провайдеров. Только для своих.
            </p>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-2 gap-2 px-3 pb-2 -mt-6 relative z-10 sm:grid-cols-4 sm:gap-3 sm:px-5 md:-mt-10">
        {features.map((f) => (
          <button
            key={f.id}
            type="button"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-3 text-left ring-1 ring-inset ring-white/[0.03] backdrop-blur transition-all hover:border-primary/40 hover:bg-card sm:p-4"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-60`} />
            <div className="relative flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <f.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">
                {f.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
