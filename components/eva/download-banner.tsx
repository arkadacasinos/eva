import Image from "next/image"
import { Download, Apple, Smartphone } from "lucide-react"

export function DownloadBanner() {
  return (
    <section className="px-3 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border/60 bg-card">
        <Image
          src="/app-download.jpg"
          alt="Скачайте приложение Eva"
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="relative grid gap-4 p-5 sm:p-8 md:grid-cols-2 md:p-10">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
              Mobile First
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
              Скачай приложение
            </h3>
            <p className="mt-2 max-w-sm text-sm text-foreground/75">
              Будь на связи с Евой где угодно. Все игры, бонусы и турниры — в твоём кармане.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Скачать
              </button>
              <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-xs text-foreground/75 ring-1 ring-border">
                <Apple className="h-4 w-4" />
                iOS
                <span className="mx-1 h-3 w-px bg-border" />
                <Smartphone className="h-4 w-4" />
                Android
              </div>
            </div>
          </div>
          <div aria-hidden className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
