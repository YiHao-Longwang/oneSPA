import type { Metadata } from "next";
import "./globals.css";
import { localBusinessJsonLd, pageMetadata, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "One Spa 南海龙宫 | 吉隆坡SPA · KL Spa & Massage",
    description:
      "One Spa 南海龙宫 at Viva Home Mall Kuala Lumpur: 24-hour spa, hot spring, KL massage, beauty, TCM wellness, private rooms and home massage booking.",
    path: "/",
    keywords: ["南海龙宫 SPA", "吉隆坡按摩推荐", "Kuala Lumpur spa", "Viva Home Mall massage"],
  }),
  applicationName: "onepsa",
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
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script src="/contact-clicks.js?v=20260824-contact-clicks" defer />
        <script src="/booking-cart.js?v=20260809-cart-rehydrate" defer />
      </body>
    </html>
  );
}
