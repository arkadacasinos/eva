export type Game = {
  id: string
  title: string
  subtitle?: string
  /** Tailwind gradient classes for the tile background (fallback when no image) */
  gradient: string
  /** Real game cover image path */
  image?: string
  /** Big emoji-like icon used as a fallback glyph */
  glyph: string
  /** Optional small badge */
  badge?: string
  rtp?: string
  provider?: string
}

export const newGames: Game[] = [
  {
    id: "royal-easter",
    title: "Royal",
    subtitle: "Easter",
    gradient: "from-amber-700 via-red-800 to-amber-900",
    image: "/games/royal-easter.jpg",
    glyph: "7",
    badge: "NEW",
  },
  { id: "sugar-merge", title: "Sugar", subtitle: "Merge Up", gradient: "from-pink-500 via-fuchsia-500 to-purple-600", image: "/games/sugar-merge.jpg", glyph: "🍭" },
  { id: "burning-hell", title: "Burning Hell", subtitle: "3000", gradient: "from-orange-600 via-red-600 to-rose-800", image: "/games/burning-hell.jpg", glyph: "😈" },
  { id: "mummy-treasures", title: "Mummyland", subtitle: "Treasures", gradient: "from-violet-700 via-purple-800 to-indigo-900", image: "/games/mummyland.jpg", glyph: "🏺" },
  { id: "olympus-rivals", title: "Olympus", subtitle: "Rivals", gradient: "from-sky-600 via-blue-700 to-indigo-800", image: "/games/olympus-rivals.jpg", glyph: "⚡" },
  { id: "fruit-invaders", title: "Fruit", subtitle: "Invaders", gradient: "from-emerald-500 via-teal-600 to-cyan-700", image: "/games/fruit-invaders.jpg", glyph: "👾" },
  { id: "cult", title: "Cult", subtitle: "of Riches", gradient: "from-stone-700 via-amber-800 to-stone-900", image: "/games/cult.jpg", glyph: "🕯️" },
  { id: "rice-riches", title: "Rice &", subtitle: "Riches", gradient: "from-rose-500 via-orange-500 to-amber-500", image: "/games/rice-riches.jpg", glyph: "🍚" },
  { id: "mummys-mines", title: "Mummy's", subtitle: "Mines", gradient: "from-purple-700 via-fuchsia-800 to-purple-900", image: "/games/mummys-mines.jpg", glyph: "💣" },
  { id: "sloteus-gold", title: "Sloteus", subtitle: "Gold", gradient: "from-amber-500 via-yellow-600 to-orange-700", image: "/games/sloteus-gold.jpg", glyph: "👑" },
  { id: "crown-coins", title: "Crown", subtitle: "Coins", gradient: "from-yellow-500 via-amber-600 to-orange-800", image: "/games/crown-coins.jpg", glyph: "🪙" },
]

export const topGames: Game[] = [
  { id: "striking-diamond", title: "Striking", subtitle: "Diamond 3", gradient: "from-rose-600 via-red-700 to-orange-800", image: "/games/striking-diamond.jpg", glyph: "💎" },
  { id: "mega-thunder", title: "Mega", subtitle: "Thunder", gradient: "from-cyan-500 via-blue-600 to-indigo-800", image: "/games/mega-thunder.jpg", glyph: "⚡" },
  { id: "atomic-coins", title: "Atomic", subtitle: "Coins 2", gradient: "from-amber-500 via-orange-600 to-red-700", image: "/games/atomic-coins.jpg", glyph: "⚛️" },
  { id: "olympus-rivals-2", title: "Olympus", subtitle: "Rivals", gradient: "from-blue-500 via-teal-600 to-emerald-700", image: "/games/olympus-rivals.jpg", glyph: "🏛️" },
  { id: "fruit-invaders-2", title: "Fruit", subtitle: "Invaders", gradient: "from-pink-500 via-rose-500 to-fuchsia-600", image: "/games/fruit-invaders.jpg", glyph: "🍓" },
  { id: "fortune-bags", title: "Fortune", subtitle: "Bags", gradient: "from-yellow-500 via-amber-500 to-emerald-600", image: "/games/fortune-bags.jpg", glyph: "💰" },
  { id: "bonanza-billion", title: "Bonanza", subtitle: "Billion", gradient: "from-emerald-500 via-teal-600 to-amber-500", image: "/games/bonanza-billion.jpg", glyph: "🎉" },
]

export const hotGames: Game[] = [
  { id: "peak-power", title: "Peak", subtitle: "Power", gradient: "from-yellow-400 via-amber-500 to-orange-600", image: "/games/peak-power.jpg", glyph: "☢️", rtp: "8.5%", provider: "Pragmatic Play" },
  { id: "ghosts-walk", title: "Ghosts", subtitle: "Night Walk", gradient: "from-violet-500 via-purple-600 to-fuchsia-700", image: "/games/ghosts-walk.jpg", glyph: "👻", rtp: "1.5%" },
  { id: "cthulhu", title: "Cthulhu", subtitle: "Rising", gradient: "from-cyan-700 via-teal-800 to-emerald-900", image: "/games/cthulhu.jpg", glyph: "🐙", rtp: "1.3%" },
  { id: "dice-duels", title: "Dice", subtitle: "Duels", gradient: "from-red-600 via-rose-700 to-pink-800", image: "/games/dice-duels.jpg", glyph: "🎲", rtp: "1%" },
  { id: "ancient-gong", title: "Ancient", subtitle: "Gong", gradient: "from-amber-600 via-red-700 to-rose-900", image: "/games/ancient-gong.jpg", glyph: "🐉", rtp: "980%" },
  { id: "jackpot-limbo", title: "Jackpot", subtitle: "Limbo 9999x", gradient: "from-amber-400 via-yellow-500 to-orange-600", image: "/games/jackpot-limbo.jpg", glyph: "🎰", rtp: "972%" },
  { id: "wonwon", title: "Wonwon", subtitle: "Catching", gradient: "from-yellow-300 via-amber-400 to-orange-500", image: "/games/wonwon.jpg", glyph: "🐰", rtp: "946%" },
]

export const liveGames: Game[] = [
  { id: "vip-blackjack", title: "VIP", subtitle: "Blackjack", gradient: "from-stone-800 via-zinc-900 to-stone-900", image: "/games/vip-blackjack.jpg", glyph: "🃏" },
  { id: "baccarat", title: "Baccarat", subtitle: "Lounge", gradient: "from-rose-600 via-red-700 to-amber-700", image: "/games/baccarat.jpg", glyph: "♣️" },
  { id: "prive-blackjack", title: "Privé", subtitle: "Blackjack", gradient: "from-emerald-700 via-teal-800 to-emerald-900", image: "/games/prive-blackjack.jpg", glyph: "♠️" },
  { id: "crazy-time", title: "Crazy", subtitle: "Time", gradient: "from-blue-500 via-indigo-600 to-purple-700", image: "/games/crazy-time.jpg", glyph: "🎡" },
  { id: "diamond-blackjack", title: "Diamond", subtitle: "Blackjack", gradient: "from-rose-500 via-pink-600 to-red-700", image: "/games/diamond-blackjack.jpg", glyph: "💠" },
  { id: "super-sicbo", title: "Super", subtitle: "Sic Bo", gradient: "from-red-600 via-rose-700 to-pink-800", image: "/games/super-sicbo.jpg", glyph: "🎲" },
  { id: "craps-live", title: "Craps", subtitle: "Live", gradient: "from-cyan-600 via-blue-700 to-indigo-800", image: "/games/craps-live.jpg", glyph: "🎯" },
]

export const randomGames: Game[] = [
  { id: "le-pharaon-1", title: "Le", subtitle: "Pharaon", gradient: "from-cyan-400 via-sky-500 to-blue-600", image: "/games/le-pharaon.jpg", glyph: "🐱" },
  { id: "fist-destruction", title: "Fist of", subtitle: "Destruction", gradient: "from-amber-600 via-orange-700 to-red-800", image: "/games/fist-destruction.jpg", glyph: "👊" },
  { id: "zeus", title: "Zeus", gradient: "from-amber-300 via-yellow-500 to-amber-700", image: "/games/zeus.jpg", glyph: "⚡" },
  { id: "le-pharaon-2", title: "Le", subtitle: "Pharaon", gradient: "from-emerald-400 via-teal-500 to-cyan-600", image: "/games/le-pharaon-2.jpg", glyph: "🐱" },
  { id: "sugar-rush", title: "Sugar", subtitle: "Rush", gradient: "from-pink-400 via-fuchsia-500 to-purple-600", image: "/games/sugar-rush.jpg", glyph: "🍬" },
  { id: "cyber-heist", title: "Cyber", subtitle: "Heist", gradient: "from-blue-600 via-indigo-700 to-violet-800", image: "/games/cyber-heist.jpg", glyph: "🦝" },
  { id: "sweet-burst", title: "Sweet", subtitle: "Burst", gradient: "from-rose-400 via-pink-500 to-fuchsia-600", image: "/games/sweet-burst.jpg", glyph: "🍭" },
]

export const liveWins = [
  { game: "Royal Easter", amount: "1 100 ₽", glyph: "👑" },
  { game: "Big Bass Splash", amount: "1 228 ₽", glyph: "🐟" },
  { game: "Great Rhino Megaways", amount: "800 ₽", glyph: "🦏" },
  { game: "Wild Bounty Showdown", amount: "676 ₽", glyph: "🤠" },
  { game: "The Dog House", amount: "918,4 ₽", glyph: "🐕" },
  { game: "Great Rhino Mega", amount: "547,2 ₽", glyph: "🦏" },
  { game: "Anubis Wrath", amount: "960 ₽", glyph: "🏺" },
  { game: "Treasures of Aztec", amount: "800 ₽", glyph: "🗿" },
  { game: "Wild Bandito", amount: "480 ₽", glyph: "🎭" },
  { game: "Sweet Bonanza", amount: "1 542 ₽", glyph: "🍬" },
  { game: "Gates of Olympus", amount: "2 100 ₽", glyph: "⚡" },
]

export const hallOfFameWins = [
  { rank: 1, game: "Sweet Bonanza 1000 Mobile", provider: "PragmaticPlay", amount: "1 728 063,98 ₽", gradient: "from-pink-500 via-rose-500 to-fuchsia-600", image: "/games/sugar-merge.jpg", glyph: "🍭" },
  { rank: 2, game: "Sloteus Gold", provider: "Endorphina", amount: "768 025,35 ₽", gradient: "from-amber-500 via-yellow-600 to-orange-700", image: "/games/sloteus-gold.jpg", glyph: "👑" },
  { rank: 3, game: "Gates of Olympus 1000", provider: "PragmaticPlay", amount: "632 252,55 ₽", gradient: "from-amber-300 via-yellow-500 to-amber-700", image: "/games/zeus.jpg", glyph: "⚡" },
]

export const hallOfFameOdds = [
  { game: "Sweet Bonanza 1000 Mobile", user: "User:456885", amount: "1 728 063,98 ₽", multiplier: "×6983,36", gradient: "from-pink-500 to-fuchsia-600", image: "/games/sugar-merge.jpg", glyph: "🍭" },
  { game: "Zeus vs Hades — Gods of War 250 Mobile", user: "User:755339", amount: "48 456,02 ₽", multiplier: "×6120,00", gradient: "from-amber-300 to-yellow-600", image: "/games/zeus.jpg", glyph: "⚡" },
  { game: "Gates of Olympus Super Scatter Mobile", user: "User:457607", amount: "145 864,78 ₽", multiplier: "×6105,00", gradient: "from-cyan-500 to-blue-700", image: "/games/olympus-rivals.jpg", glyph: "🏛️" },
  { game: "Dragon's Bonanza", user: "User:511726", amount: "54 907,66 ₽", multiplier: "×2750,85", gradient: "from-emerald-500 to-teal-700", image: "/games/ancient-gong.jpg", glyph: "🐉" },
  { game: "Peak Power Mobile", user: "User:454884", amount: "41 531,82 ₽", multiplier: "×2622,00", gradient: "from-yellow-400 to-orange-600", image: "/games/peak-power.jpg", glyph: "☢️" },
]

export const sidebarPrimary = [
  { label: "Уровни", icon: "trophy" },
  { label: "V.I.P", icon: "crown" },
  { label: "Бонусы", icon: "gift" },
  { label: "Промо акции", icon: "megaphone" },
  { label: "Магазин", icon: "shopping-bag" },
] as const

export const sidebarCategories = [
  { label: "Новые", icon: "sparkles" },
  { label: "Топ", icon: "star" },
  { label: "Слоты", icon: "dices" },
  { label: "Лайв", icon: "radio" },
  { label: "Отыгрыш бонуса", icon: "coins" },
  { label: "Краш", icon: "rocket" },
  { label: "Easter", icon: "egg" },
  { label: "Belatra", icon: "spade" },
  { label: "Endorphina", icon: "infinity" },
] as const
