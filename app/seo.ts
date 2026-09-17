import type { Metadata } from "next";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://onespa.klyihao.com").replace(/\/$/, "");

export const seoKeywords = [
  "Nanhai Onsen",
  "nanhai onsen KL",
  "南海龙宫",
  "南海龙宫汤泉",
  "吉隆坡SPA",
  "吉隆坡会所",
  "吉隆坡按摩",
  "吉隆坡娱乐",
  "吉隆坡桑拿",
  "吉隆坡上门",
  "吉隆坡上门按摩",
  "吉隆坡温泉",
  "吉隆坡汤泉",
  "KL spa",
  "klspa",
  "KL massage",
  "klmassage",
  "KL entertainment",
  "klentertainment",
  "24 hour spa KL",
  "onsen KL",
  "massage KL",
  "Viva Home Mall spa",
  "Kuala Lumpur spa",
  "KL onsen spa",
  "massage Kuala Lumpur",
  "spa Kuala Lumpur 24 hours",
  "吉隆坡水疗",
  "南海龙宫 spa 会所",
  "南海龙宫吉隆坡会所",
  "南海龙宫吉隆坡桑拿",
  "吉隆坡spa会所",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/assets/hero-onsen-warm.jpg",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    keywords: [...keywords, ...seoKeywords],
    alternates: {
      canonical: canonicalPath,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "Nanhai Onsen 南海龙宫",
      type: "website",
      images: [
        {
          url: image,
          width: 1280,
          height: 853,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** The Google Business Profile this site belongs to (南海龙宫SPA会所, Viva Home Mall). */
export const googleBusinessProfileUrl = "https://share.google/Hcgob1penVXhOcgqf";

/**
 * Profiles that represent this same business. `sameAs` is how Google ties the
 * site, the Business Profile and the social accounts together as one entity -
 * which matters here because another operator trades under the Nanhai Onsen name.
 */
const sameAsProfiles = [
  "https://www.instagram.com/vivadespa/",
  "https://t.me/nhlg09",
  googleBusinessProfileUrl,
  // Deliberately excludes the onespaofficial accounts: they are linked from
  // onespa.com.my, so claiming them here would tell Google this site and that
  // operator's site are one business - the opposite of what we want.
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Nanhai Onsen 南海龙宫",
  alternateName: ["Nanhai Onsen", "南海龙宫", "南海龙宫SPA会所", "南海龙宫汤泉"],
  url: siteUrl,
  image: `${siteUrl}/assets/hero-onsen-warm.jpg`,
  sameAs: sameAsProfiles,
  hasMap: googleBusinessProfileUrl,
  telephone: "+60 14-315 5632",
  priceRange: "RM58-RM1699",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
  currenciesAccepted: "MYR",
  description:
    "Nanhai Onsen 南海龙宫 is a 24-hour bathhouse, massage and wellness outlet in Kuala Lumpur at Viva Home Mall. Contact the team on WhatsApp, Telegram or WeChat.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "LG Floor, Viva Home Mall, 85 Jalan Loke Yew, Taman Miharja",
    addressLocality: "Kuala Lumpur",
    postalCode: "52200",
    addressCountry: "MY",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: ["Kuala Lumpur", "Cheras", "Taman Miharja", "Viva Home Mall"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "booking",
      telephone: "+60 14-315 5632",
      areaServed: "MY",
      availableLanguage: ["English", "Chinese", "Malay"],
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "吉隆坡SPA" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "吉隆坡按摩" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "吉隆坡桑拿" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "吉隆坡上门按摩" } },
  ],
  knowsAbout: [
    "吉隆坡SPA",
    "吉隆坡水疗",
    "吉隆坡按摩",
    "吉隆坡温泉",
    "吉隆坡娱乐",
    "klspa",
    "klmassage",
    "klentertainment",
    "Kuala Lumpur spa",
    "KL onsen spa",
  ],
};

/**
 * FAQPage structured data. Google can surface these as expandable answers in
 * search results, so the FAQ copy on the page must match the copy passed here.
 */
export function faqJsonLd(faqs: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
