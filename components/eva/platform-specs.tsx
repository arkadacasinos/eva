const specs: Array<{ label: string; value: string }> = [
  { label: "Название", value: "Eva Casino (ева казино)" },
  { label: "Официальный сайт", value: "eva casino официальный сайт" },
  { label: "Год основания", value: "2024" },
  { label: "Лицензия", value: "Международная (Curacao)" },
  { label: "Языки интерфейса", value: "Русский, English" },
  { label: "Валюты", value: "RUB, USD, EUR, USDT, BTC, ETH" },
  { label: "Минимальный депозит", value: "от 100 ₽" },
  { label: "Минимальный вывод", value: "от 500 ₽" },
  { label: "Скорость вывода", value: "15–30 минут" },
  { label: "Игр в каталоге", value: "5 000+" },
  { label: "Провайдеры", value: "Pragmatic Play, Endorphina, Belatra, Easter, BGaming и др." },
  { label: "Типы игр", value: "Слоты, лайв, карточные, рулетка, краш, джекпоты" },
  { label: "Приветственный бонус", value: "До 100% на первый депозит + фриспины" },
  { label: "Кешбэк", value: "До 20% еженедельно" },
  { label: "Турниры", value: "Призовые фонды от 500 000 ₽" },
  { label: "Программа лояльности", value: "«Свидание с Евой», 21 уровень" },
  { label: "Мобильная версия", value: "Адаптивный сайт + приложение для Android" },
  { label: "Зеркало", value: "ева казино зеркало рабочее доступно по запросу в чат" },
  { label: "Поддержка", value: "Чат 24/7, e-mail support@eva-casino.com" },
  { label: "Возрастное ограничение", value: "18+" },
]

export function PlatformSpecs() {
  return (
    <section className="px-3 pb-6 pt-2 sm:px-5" aria-labelledby="specs-title">
      <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-7">
        <h2
          id="specs-title"
          className="font-display text-xl font-bold tracking-tight text-balance sm:text-2xl"
        >
          Характеристики платформы Eva Casino
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          Краткая сводка по основным параметрам ева казино официальный сайт — от лицензии до
          сроков вывода.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-border/60">
          <table className="w-full table-fixed border-collapse text-sm">
            <tbody>
              {specs.map((row, idx) => (
                <tr
                  key={row.label}
                  className={[
                    "border-b border-border/50 last:border-b-0",
                    idx % 2 === 0 ? "bg-background/40" : "bg-transparent",
                  ].join(" ")}
                >
                  <th
                    scope="row"
                    className="w-2/5 px-3 py-2.5 text-left align-top font-medium text-foreground/70 sm:w-1/3 sm:px-4 sm:py-3"
                  >
                    {row.label}
                  </th>
                  <td className="px-3 py-2.5 align-top text-foreground sm:px-4 sm:py-3">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
