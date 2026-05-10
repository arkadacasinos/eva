import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Ева Казино -Eva Casino официальный сайт. Рабочее зеркало Ева онлайн",
  description:
    "Ева казино официальный сайт — ваш надежный вход в мир лицензионных слотов. Используйте актуальное ева казино зеркало рабочее для доступа 24/7. Пройдите быструю регистрацию в Eva Casino играть онлайн и забирайте бонусы на официальном сайте Ева Казино.",
  
  keywords: [
    "eva casino",
    "eva casino официальный сайт",
    "eva casino зеркало",
    "eva казино",
    "ева казино",
    "ева казино зеркало",
    "ева казино зеркало рабочее",
    "ева казино играть",
    "ева казино онлайн",
    "ева казино официальный",
    "ева казино официальный сайт",
    "eva casino играть",
    "eva casino официальный"
  ],

  alternates: {
    canonical: "/ru",
  },

  other: {
    "yandex": "noarchive",
    "rating": "adult",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Eva Casino (Ева Казино) — Официальный сайт и рабочее зеркало",
    description: "Играйте в Ева казино онлайн на официальном сайте. Актуальные зеркала, бонусы и лицензионные слоты Eva Casino.",
    url: "/ru",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eva Casino RU — Официальный вход",
    description: "Лицензионное онлайн казино Ева. Вход через рабочее зеркало.",
  },
}

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}
