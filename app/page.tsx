import { HomeExperience } from "./home-experience";
import { ContactButtons, whatsappNumberDisplay } from "./site-common";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Nanhai Onsen 南海龙宫 | 吉隆坡SPA桑拿 · 按摩会所",
  description:
    "Nanhai Onsen 南海龙宫是吉隆坡 24 小时SPA、桑拿、按摩与休闲娱乐会所，位于 Viva Home Mall。汤泉汗蒸、上门按摩与中医调理，可用 WhatsApp、Telegram 或 WeChat 联系客服。",
  path: "/",
  keywords: [
    "吉隆坡SPA",
    "吉隆坡桑拿",
    "吉隆坡会所",
    "吉隆坡按摩",
    "吉隆坡上门",
    "吉隆坡娱乐",
    "南海龙宫",
    "nanhai onsen",
    "klspa",
    "klmassage",
    "klentertainment",
  ],
});


export default function Home() {
  return <HomeExperience locale="cn" contact={<ContactButtons locale="cn" whatsappLabel={`WhatsApp ${whatsappNumberDisplay}`} />} />;
}
