"use client"

import { useState } from "react"
import { Search, Trophy, User, Zap, Star, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
const TABS = [
  "Топ по ставкам", 
  "Крупнейшие победители", 
  "Лидеры по удаче", 
  "Рекордные выигрыши", 
  "Топ за неделю"
] as const
type Tab = (typeof TABS)[number]

const PERIODS = ["За все время", "За месяц", "За неделю", "Сегодня"] as const
type Period = (typeof PERIODS)[number]

const ROWS = [
  { place: 1, player: "Eva_Queen_77", value: "8,450,200 ₽" },
  { place: 2, player: "SlotMaster_RU", value: "7,100,000 ₽" },
  { place: 3, player: "Zanos_V_EVE", value: "5,880,100 ₽" },
  { place: 4, player: "Lucky_Bear_44", value: "4,215,500 ₽" },
  { place: 5, player: "Piter_Gamer", value: "3,920,300 ₽" },
  { place: 6, player: "VIP_Client_Eva", value: "2,640,000 ₽" },
  { place: 7, player: "Mila_Casino", value: "1,172,000 ₽" },
  { place: 8, player: "User_99283", value: "945,600 ₽" },
  { place: 9, player: "Super_Stavka", value: "844,700 ₽" },
  { place: 10, player: "Eva_Fan_Top", value: "735,900 ₽" },
]

export default function EvaRuHighScores() {
  const [tab, setTab] = useState<Tab>("Топ по ставкам")
  const [period, setPeriod] = useState<Period>("За все время")

  return (
    <div className="mx-auto max-w-[1480px] px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-6">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                Ева Казино — Таблица рекордов и заносов
              </h1>
              <p class="text-gray-400 text-sm mt-1">Официальные рейтинги игроков Eva Casino онлайн</p>
            </div>
            
            <div className="flex items-center gap-1 rounded-xl bg-[#161931] p-1 border border-white/5">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={cn(
                    "px-4 h-8 rounded-lg text-[10px] font-bold uppercase transition-all whitespace-nowrap",
                    period === p ? "bg-[#ff8c05] text-white shadow-lg" : "text-gray-400 hover:text-white"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 bg-[#141733] p-2 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "px-4 h-10 rounded-xl text-xs font-bold transition-all whitespace-nowrap border uppercase italic",
                    tab === t
                      ? "bg-blue-600 border-blue-400 text-white shadow-lg"
                      : "bg-white/5 border-transparent text-gray-400 hover:text-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Найти игрока в Ева Казино..."
                className="h-10 w-full md:w-64 rounded-xl bg-black/30 border border-white/10 pl-10 pr-3 text-xs text-white outline-none focus:border-[#ff8c05]/50 transition-all"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#161931]/50 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-[60px_1fr_1fr] px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/5">
              <span>Место</span>
              <span>Игрок</span>
              <span className="text-right">Сумма в Eva Casino</span>
            </div>
            <div class="divide-y divide-white/[0.03]">
              {ROWS.map((r) => (
                <div
                  key={r.place}
                  className="grid grid-cols-[60px_1fr_1fr] px-6 h-16 items-center text-sm hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[#ff8c05] font-bold">
                    {String(r.place).padStart(2, "0")}
                  </span>
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px]">👤</div>
                    <span className="text-gray-200 font-medium">{r.player}</span>
                  </div>
                  <span className="text-right font-black text-[#22c55e] tabular-nums tracking-tight">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#1e1b4b] to-[#0c0d1e] p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff8c05] shadow-lg shadow-orange-600/20">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Ваш статус</p>
                <p className="text-lg font-black text-white italic uppercase tracking-tighter">Eva_Player_100</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {[
                { label: "Топ по ставкам", value: "#12,748", icon: <Zap class="size-3 text-blue-400"/> },
                { label: "Крупные выигрыши", value: "Без рейтинга", muted: true, icon: <Star class="size-3 text-yellow-400"/> },
                { label: "Уровень лояльности", value: "Level 4", icon: <ShieldCheck class="size-3 text-green-400"/> },
              ].map((r) => (
                <li key={r.label} className="flex flex-col gap-1 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                  <div class="flex items-center gap-2">
                    {r.icon}
                    <span className="text-[11px] font-bold text-gray-500 uppercase">{r.label}</span>
                  </div>
                  <span className={cn("text-sm font-black italic", r.muted ? "text-gray-600" : "text-white")}>
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
            <button class="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest">
              Личный кабинет
            </button>
          </div>

          <div class="rounded-2xl overflow-hidden relative aspect-[4/5] border border-white/5 group cursor-pointer">
            <img src="https://static.photos/gaming/400x500/10" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Бонус Ева Казино"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
               <p class="text-[#ff8c05] font-black text-2xl italic leading-none uppercase">Бонус 250%</p>
               <p class="text-white text-xs mt-2 font-medium">Забирай на первый депозит в Eva Casino</p>
            </div>
          </div>
        </aside>
      </div>
      <section class="mt-12 bg-[#161931]/30 rounded-3xl p-8 border border-white/5">
        <h2 class="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">
          Как попасть в топ игроков Ева Казино официальный сайт?
        </h2>
        <div class="grid md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
          <p>
            Система рейтингов <strong>Eva Casino</strong> базируется на прозрачных алгоритмах учета игровой активности. Чтобы занять место в разделе <strong>Ева Казино официальный сайт</strong> High Scores, игрокам необходимо проявлять стабильную активность в лицензионных слотах и лайв-играх. Каждая ставка в <strong>Eva Casino играть онлайн</strong> приносит баллы опыта, которые напрямую влияют на вашу позицию в глобальной таблице лидеров.
          </p>
          <p>
            Важно отметить, что все данные синхронизируются в режиме реального времени. Если вы используете <strong>Ева Казино зеркало</strong> для входа, ваш прогресс и место в рейтинге сохраняются. Мы ценим честность, поэтому <strong>Ева Казино онлайн</strong> использует многоуровневую систему защиты от накруток, гарантируя, что в топе находятся только реальные пользователи.
          </p>
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
