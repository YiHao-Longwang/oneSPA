import { technicianSelectionEnabled } from "./site-features";
import type { Metadata } from "next";
import "./globals.css";
import { localBusinessJsonLd, pageMetadata, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Nanhai Onsen 南海龙宫 | 吉隆坡SPA · KL Spa & Massage",
    description:
      "Nanhai Onsen 南海龙宫 at Viva Home Mall Kuala Lumpur: 24-hour spa, hot spring, KL massage, TCM wellness, private rooms and home massage booking.",
    path: "/",
    keywords: [
      "南海龙宫 SPA",
      "吉隆坡按摩推荐",
      "Kuala Lumpur spa",
      "Viva Home Mall massage",
      "nanhai onsen",
      "onsen kl",
    ],
  }),
  applicationName: "Nanhai Onsen",
  icons: {
    icon: [
      { url: "/favicon-48x48.png?v=20260828-dragon", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png?v=20260828-dragon", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png?v=20260828-dragon", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-48x48.png?v=20260828-dragon",
    apple: "/apple-touch-icon.png?v=20260828-dragon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script src="/motion.js?v=20260914-subnav-stable" defer />
        <script src="/contact-clicks.js?v=20260923-onespa-baiqu" defer />
        <script src="/wechat-copy.js?v=20260903-wechat" defer />
        {technicianSelectionEnabled && <script src="/tech-promo.js?v=20261002-community" defer />}
      </body>
    </html>
  );
}
