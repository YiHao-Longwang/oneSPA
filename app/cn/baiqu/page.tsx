import { redirect } from "next/navigation";
import { siteUrl } from "../../seo";

export default function ChineseBaiquRedirect() {
  redirect(`${siteUrl}/baiqu/`);
}
