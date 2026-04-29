import { Smartphone } from "lucide-react"
import { EvaLogo } from "./logo"

export function Footer() {
  return (
    <footer className="px-3 pb-10 sm:px-5">
      {/* Links */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-bold ring-1 ring-border">
            <span className="text-primary">18+</span>
          </span>
          <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-foreground/55">
            Eva принадлежит и управляется компанией Eva Premium Ltd. Юридический адрес: Limassol, Cyprus.
            Связаться с нами: support@eva-app.com. Лицензировано и регулируется в установленном порядке.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-bold tracking-tight">Информация</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a className="hover:text-foreground" href="#">Политика конфиденциальности</a></li>
            <li><a className="hover:text-foreground" href="#">Условия использования</a></li>
            <li><a className="hover:text-foreground" href="#">Политика KYC</a></li>
            <li><a className="hover:text-foreground" href="#">Политика AML</a></li>
            <li><a className="hover:text-foreground" href="#">Условия бонусов</a></li>
            <li><a className="hover:text-foreground" href="#">Ответственная игра</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-bold tracking-tight">Помощь</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a className="hover:text-foreground" href="#">Чат поддержки</a></li>
            <li><a className="hover:text-foreground" href="#">support@eva-app.com</a></li>
            <li><a className="hover:text-foreground" href="#">Партнёрка</a></li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex w-full items-center gap-3 rounded-2xl bg-card p-4 text-left ring-1 ring-border hover:bg-muted"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <Smartphone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[10px] uppercase tracking-wider text-foreground/55">Установи для</span>
              <span className="block font-display text-sm font-bold">Android</span>
            </span>
          </button>

          <div className="mt-4 hidden lg:block">
            <EvaLogo />
          </div>
        </div>
      </div>
    </footer>
  )
}
