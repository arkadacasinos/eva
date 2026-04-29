/**
 * Centralised site config.
 *
 * SITE_URL resolution priority:
 *  1. NEXT_PUBLIC_SITE_URL  — explicit override (production custom domain)
 *  2. VERCEL_PROJECT_PRODUCTION_URL — auto-injected on Vercel for the production deployment
 *  3. VERCEL_URL — auto-injected on Vercel for any deployment (preview / branch)
 *  4. http://localhost:3000 — local dev fallback
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`
  }

  const prodUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (prodUrl) return `https://${prodUrl}`

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`

  return "http://localhost:3000"
}

export const SITE_URL = resolveSiteUrl().replace(/\/$/, "")

export const siteConfig = {
  name: "Eva Casino",
  shortName: "Eva",
  url: SITE_URL,
  locale: "ru_RU",
  title: "Eva Casino — официальный сайт ева казино, играть онлайн | рабочее зеркало",
  description:
    "Ева казино (Eva Casino) — официальный сайт онлайн казино. Рабочее зеркало eva casino, быстрый вход и регистрация, играть онлайн в ева казино: слоты, лайв, турниры и бонусы.",
  keywords: [
    "eva casino",
    "eva casino официальный сайт",
    "eva casino зеркало",
    "eva casino играть",
    "eva casino официальный",
    "eva казино",
    "ева казино",
    "ева казино зеркало",
    "ева казино зеркало рабочее",
    "ева казино играть",
    "ева казино онлайн",
    "ева казино официальный",
    "ева казино официальный сайт",
  ],
}
