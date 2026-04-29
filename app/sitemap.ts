import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
  }> = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/games", changeFrequency: "daily", priority: 0.9 },
    { path: "/games/new", changeFrequency: "daily", priority: 0.8 },
    { path: "/games/top", changeFrequency: "daily", priority: 0.8 },
    { path: "/games/slots", changeFrequency: "daily", priority: 0.8 },
    { path: "/games/live", changeFrequency: "daily", priority: 0.8 },
    { path: "/bonuses", changeFrequency: "weekly", priority: 0.7 },
    { path: "/promo", changeFrequency: "weekly", priority: 0.7 },
    { path: "/tournaments", changeFrequency: "daily", priority: 0.7 },
    { path: "/vip", changeFrequency: "weekly", priority: 0.6 },
    { path: "/shop", changeFrequency: "weekly", priority: 0.5 },
    { path: "/login", changeFrequency: "monthly", priority: 0.4 },
    { path: "/register", changeFrequency: "monthly", priority: 0.5 },
    { path: "/legal/terms", changeFrequency: "yearly", priority: 0.2 },
    { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/legal/kyc", changeFrequency: "yearly", priority: 0.2 },
    { path: "/legal/aml", changeFrequency: "yearly", priority: 0.2 },
    { path: "/legal/responsible-gaming", changeFrequency: "yearly", priority: 0.2 },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
