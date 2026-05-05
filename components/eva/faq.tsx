"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqItem = { q: string; a: string }

const items: FaqItem[] = [
  {
    q: "Что такое Eva Casino и где найти официальный сайт?",
    a: "Eva Casino (ева казино) — это лицензированная онлайн-площадка с игровыми автоматами, лайв-казино, краш-играми и турнирами. Eva casino официальный сайт работает круглосуточно и доступен по основной ссылке eva-casino.com. Если основной адрес недоступен, используйте eva casino зеркало.",
  },
  {
    q: "Как зарегистрироваться на eva casino официальный сайт?",
    a: "Чтобы начать eva casino играть, нажмите кнопку «Регистрация» в правом верхнем углу, укажите e-mail или номер телефона, придумайте пароль и подтвердите совершеннолетие. Регистрация на ева казино официальный сайт занимает меньше минуты.",
  },
  {
    q: "Где взять ева казино зеркало рабочее?",
    a: "Eva casino зеркало — точная копия основного сайта с тем же аккаунтом и балансом. Получить ева казино зеркало рабочее можно у оператора чата поддержки или в официальном Telegram-канале — там оперативно публикуются актуальные ссылки.",
  },
  {
    q: "Можно ли ева казино играть с телефона?",
    a: "Да. Ева казино онлайн полностью адаптировано под мобильные устройства — каталог игр, кошелёк и поддержка работают одинаково на ПК и смартфонах. Для Android доступно отдельное приложение, которое скачивается со страницы eva casino официальный.",
  },
  {
    q: "Какие игры есть на eva казино?",
    a: "В каталоге evacasino более 5 000 игр: слоты, лайв-казино, рулетка, блэкджек, баккара, покер, краш-игры и прогрессивные джекпоты. Все игры запускаются прямо в браузере без установки.",
  },
  {
    q: "Какие способы пополнения и вывода доступны?",
    a: "На eva casino официальный сайт поддерживаются банковские карты Visa и Mastercard, СБП, электронные кошельки и криптовалюты (USDT, BTC, ETH). Минимальный депозит — от 100 ₽, вывод обрабатывается в среднем за 15–30 минут.",
  },
  {
    q: "Какие бонусы получают новые игроки?",
    a: "Новичкам ева казино начисляет приветственный пакет до 100% на первый депозит и фриспины в популярных слотах. Постоянные игроки получают еженедельный кешбэк до 20%, рело-бонусы и подарки от Евы по программе лояльности «Свидание с Евой».",
  },
  {
    q: "Безопасно ли ева казино играть онлайн?",
    a: "Да. Eva casino официальный работает на основании международной лицензии Curacao, использует TLS-шифрование и сертифицированные генераторы случайных чисел. Площадка регулярно проходит независимые аудиты честности.",
  },
  {
    q: "Нужно ли проходить верификацию?",
    a: "Базовый функционал eva казино доступен сразу после регистрации. Верификация документов (KYC) запрашивается перед первым крупным выводом — это стандартная процедура для всех лицензированных площадок и обычно занимает несколько часов.",
  },
  {
    q: "Как связаться с поддержкой ева казино официальный сайт?",
    a: "Служба поддержки eva casino работает 24/7. Написать оператору можно через чат на сайте или на e-mail support@eva-casino.com — ответ приходит в течение нескольких минут на русском или английском языке.",
  },
]

function FaqRow({ item, defaultOpen = false }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition hover:bg-background/40 sm:px-5"
      >
        <span className="text-sm font-medium text-foreground sm:text-base">{item.q}</span>
        <ChevronDown
          className={[
            "mt-0.5 h-4 w-4 shrink-0 text-foreground/60 transition-transform",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm leading-relaxed text-foreground/75 sm:px-5">
          {item.a}
        </div>
      )}
    </div>
  )
}

export function Faq() {
  return (
    <section className="px-3 pb-6 pt-2 sm:px-5" aria-labelledby="faq-title">
      <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-7">
        <h2
          id="faq-title"
          className="font-display text-xl font-bold tracking-tight text-balance sm:text-2xl"
        >
          Частые вопросы об eva casino
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          Всё, что нужно знать про ева казино официальный сайт, регистрацию, зеркало и
          выплаты.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-border/60 bg-background/30">
          {items.map((item, i) => (
            <FaqRow key={item.q} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
