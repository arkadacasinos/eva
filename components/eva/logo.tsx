import { cn } from "@/lib/utils"

export function EvaLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-amber-400 to-amber-600" />
        <span className="absolute inset-[3px] rounded-full bg-sidebar" />
        <span className="relative font-display text-sm font-bold tracking-tight text-primary">e</span>
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
        <span className="text-primary">E</span>va
      </span>
    </div>
  )
}
