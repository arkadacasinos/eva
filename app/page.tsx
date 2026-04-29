import { AppShell } from "@/components/eva/app-shell"
import { Hero } from "@/components/eva/hero"
import { CategoryTabs } from "@/components/eva/category-tabs"
import { GameSection } from "@/components/eva/game-section"
import { DownloadBanner } from "@/components/eva/download-banner"
import { LiveWinsTicker } from "@/components/eva/live-wins-ticker"
import { Tournaments } from "@/components/eva/tournaments"
import { HallOfFame } from "@/components/eva/hall-of-fame"
import { RandomGame } from "@/components/eva/random-game"
import { SeoBlock } from "@/components/eva/seo-block"
import { Footer } from "@/components/eva/footer"
import { newGames, topGames, hotGames, liveGames } from "@/lib/eva-data"

export default function HomePage() {
  return (
    <AppShell>
      <Hero />
      <CategoryTabs />

      <GameSection
        icon="🆕"
        title="Новые"
        count={155}
        games={newGames}
        firstFeatured
      />

      <GameSection
        icon="⭐"
        title="Топ"
        count={96}
        games={topGames}
      />

      <DownloadBanner />

      <LiveWinsTicker />

      <GameSection
        icon="🔥"
        title="Горячие"
        count={120}
        games={hotGames}
      />

      <Tournaments />

      <GameSection
        icon="🎰"
        title="Лайв"
        count={843}
        games={liveGames}
      />

      <HallOfFame />

      <RandomGame />

      <SeoBlock />

      <Footer />
    </AppShell>
  )
}
