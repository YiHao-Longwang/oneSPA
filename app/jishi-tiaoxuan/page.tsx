import { redirect } from "next/navigation";
import { technicianSelectionEnabled } from "../site-features";
import { pageMetadata } from "../seo";
import TechnicianSelection from "../technician-selection";

export const metadata = pageMetadata({
  title: "南海龙宫技师挑选 | Nanhai Onsen 吉隆坡服务预约",
  description:
    "南海龙宫技师挑选页面，可查看今日出勤技师、区域、状态与可外出服务，并可进入白区查看 Nanhai Onsen 水汇价目。",
  path: "/jishi-tiaoxuan/",
  keywords: [
    "南海龙宫技师挑选",
    "吉隆坡技师",
    "吉隆坡下水",
    "吉隆坡全套服务",
    "吉隆坡莞式按摩服务",
    "Nanhai Onsen",
  ],
});

export default function Home() {
  if (!technicianSelectionEnabled) redirect("/");
  return <TechnicianSelection />;
}
