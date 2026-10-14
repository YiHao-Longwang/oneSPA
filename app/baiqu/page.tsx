import { technicianSelectionEnabled } from "../site-features";
import { Fragment } from "react";
import {
  experienceImage,
  Brandmark,
  Diamond,
  FloatingWhatsApp,
  Footer,
  SectionHead,
} from "../site-common";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Nanhai Onsen 南海龙宫 | 吉隆坡SPA · 吉隆坡按摩娱乐",
  description:
    "Nanhai Onsen 南海龙宫位于吉隆坡 Viva Home Mall，24 小时营业，提供吉隆坡SPA、吉隆坡按摩、汤泉汗蒸、中医调理与休闲娱乐。",
  path: "/baiqu/",
  keywords: ["吉隆坡SPA", "吉隆坡按摩", "吉隆坡娱乐", "南海龙宫", "klspa", "klmassage", "klentertainment"],
});

const siteBase = "";

const chips = [
  "全天候不打烊",
  "一次待满 12 小时",
  "泡汤、汗蒸与用餐，一张票走完",
  "普通价目清楚列明",
];

const packages = [
  {
    title: "12 小时普通入场",
    desc: "成人普通入场，入场后可停留 12 小时",
    price: "RM169 起 / 人",
    href: `${siteBase}/packages/#pk-solo`,
    featured: true,
  },
  {
    title: "儿童票",
    desc: "12 岁及以下儿童，须成人陪同",
    price: "RM58 起 / 小孩",
    href: `${siteBase}/packages/#pk-kids`,
  },
];

const facilities = [
  {
    title: "冷热交替池",
    image: "fac-icefire.jpg",
    lead: true,
    copy:
      "一边是 13°C 的玄冰池，一边是 43°C 的中药池。在星空顶下来回换着泡，几轮下来整个人是清醒的。",
  },
  {
    title: "岩盐蒸房",
    image: "fac-steam.jpg",
    copy: "整面盐晶墙，暖黄的灯，热气不烈但够久，坐着坐着一周的疲劳就出汗排掉了。",
  },
  {
    title: "护理房",
    image: "fac-massage.jpg",
    copy:
      "一间房三张床，一家人或一群朋友不必分开做。推拿、泰式、精油等 20 项护理，都是在这几间房里进行。",
    more: true,
  },
  {
    title: "古法搓背",
    image: "fac-scrub.jpg",
    copy:
      "这间房只做一件事：古法搓背，来龙去脉都写在墙上。需要可另行加购。",
    more: true,
  },
  {
    title: "放映厅 · 眠息厅",
    image: "fac-movie.jpg",
    copy:
      "影视厅和休息厅连在一起，每个位子配一副耳机，所以这边在看片、隔壁照样睡得着。想通宵的客人，最后基本都待在这里。",
  },
  {
    title: "光影长廊",
    image: "fac-immersive.jpg",
    copy: "一条会流动的光影长廊，泡完走进去慢慢回神。多数人走到一半就停下来拍照。",
  },
  {
    title: "足部护理房",
    image: "fac-recliner.jpg",
    copy:
      "专门照顾脚的一间房，足疗和修脚都在这做。电动躺椅能放到全平，不想说话就直接睡过去。",
    more: true,
  },
];

const faqs = [
  ["真的可以待 12 小时？", "可以。从进场那一刻开始算 12 小时，这段时间里所有设施都能用。"],
  [
    "星期日算平日还是周末？",
    "算平日。星期日到星期四都属于低价档，星期五、星期六和公共假期属于另一档。",
  ],
  ["公共假期怎么算钱？", "按周末那一档收。不用自己算，选好日期后日历上会直接显示该天的价格。"],
];

export default function ChinesePage() {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <a className="brand" href="/" aria-label="Nanhai Onsen 南海龙宫">
            <Brandmark />
          </a>
          {technicianSelectionEnabled && (
            <button className="mobile-tech-link promo-tech-link" type="button" data-tech-inquiry aria-label="最新 男士必看 技师挑选">
              <span className="promo-kicker">
                <strong>最新!!</strong> 男士必看
              </span>
              <span className="promo-main">技师挑选</span>
            </button>
          )}
          <nav className="nav" aria-label="Primary navigation">
            <a className="on" href="/baiqu/">
              白区首页
            </a>
            <a href="/packages/">价目</a>
            <a href="/facilities/">设施</a>
            <a href="/home-massage/">上门服务</a>
            {technicianSelectionEnabled && <button type="button" data-tech-inquiry>技师挑选</button>}
            <a href="/tcm/">中医部</a>
            <a href="/faq/">常见问题</a>
            <a href="/contact/">联系我们</a>
          </nav>
          <div className="top-right">
            <details className="mnav">
              <summary aria-label="菜单">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <nav className="mnav-list" aria-label="Mobile navigation">
                <a href="/baiqu/">白区首页</a>
                <a href="/packages/">价目</a>
                <a href="/facilities/">设施</a>
                <a href="/home-massage/">上门服务</a>
                {technicianSelectionEnabled && <button type="button" data-tech-inquiry>技师挑选</button>}
                    <a href="/tcm/">中医部</a>
                <a href="/faq/">常见问题</a>
                <a href="/contact/">联系我们</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
      <main id="main-content" lang="zh-Hans">
        <section className="hero home">
          <img
            className="hero-img"
            src={experienceImage("hero-onsen-warm.jpg")}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
          <div className="container">
            <div className="k">Nanhai Onsen · 南海龙宫 · 吉隆坡 · 24 小时营业</div>
            <h1>
              在吉隆坡一间不打烊的
              <br />
              南海龙宫温泉会所
            </h1>
            <p>
              Nanhai Onsen 南海龙宫开在吉隆坡 Viva Home Mall LG Floor，一天 24 小时都不关门。
              一张门票就是 12 小时：吉隆坡SPA水疗、汤池、汗蒸、桑拿、按摩，
              饿了还有餐饮，慢慢泡不用赶。
            </p>
            <div className="cta">
              <a className="btn clay" href={`${siteBase}/packages/`}>
                看价目
              </a>
              <a className="btn cream-line" href={`${siteBase}/facilities/`}>
                看全部设施
              </a>
            </div>
          </div>
        </section>

        <div className="chips">
          <div className="container">
            {chips.map((chip) => (
              <span className="c" key={chip}>
                <Diamond />
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="osw-onsen-crosslink">
          <div className="container">
            <a className="osw-product-text-link" href={`${siteBase}/wenquan/`}>
              中式汤泉
            </a>
          </div>
        </div>

        <section id="featured">
          <SectionHead eyebrow="普通价目" title="普通入场价格" />
          <div className="container">
            <div className="minis">
              {packages.map((pkg) => (
                <article className={`mini-card${pkg.featured ? " night" : ""}`} key={pkg.title}>
                  {pkg.featured ? <span className="tag hot">普通价目</span> : null}
                  <h3>{pkg.title}</h3>
                  <p className="desc">{pkg.desc}</p>
                  <div className="grow" />
                  <div className="price">
                    <span className="rm">{pkg.price}</span>
                  </div>
                  <a className={`btn sm${pkg.featured ? "" : " line"}`} href={pkg.href}>
                    看价目
                  </a>
                </article>
              ))}
            </div>
            <p className="taxnote osw-home-tax">
              选完日期即显示到手价
            </p>
            <div className="center-cta">
              <a className="btn" href={`${siteBase}/packages/`}>
                看价目
              </a>
            </div>
          </div>
        </section>

        <section id="facilities">
          <SectionHead eyebrow="店里有什么" title="汤池、蒸房与安静的角落" />
          <div className="container">
            <div className="fac-grid">
              {facilities.map((facility, index) => (
                <Fragment key={facility.title}>
                  <article className={`fac${facility.lead ? " lead" : ""}`}>
                    <div className="ph">
                      <img
                        src={experienceImage(facility.image)}
                        alt={facility.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="fb">
                      <h3>{facility.title}</h3>
                      <p>{facility.copy}</p>
                      {facility.more ? (
                        <a className="more" href={`${siteBase}/packages/#treatments`}>
                          看按摩项目与价格 &rsaquo;
                        </a>
                      ) : null}
                    </div>
                  </article>
                  {index === 0 ? (
                    <section className="osw-home-sauna" key="sauna">
                      <h3>汗蒸与桑拿</h3>
                      <p>
                        泡池之外，南海龙宫设有<strong>岩盐蒸房房</strong>与
                        <strong>干湿桑拿</strong>。盐晶房温度较缓，适合久待，喜欢慢慢出汗、边聊天边放松的人通常泡完汤就直接进来。
                      </p>
                      <p>
                        中式汤泉的用法讲究交替：<strong>热汤 → 汗蒸或桑拿 → 冰池</strong>
                        。一轮下来毛孔开合一次，循环两三轮，比单纯泡着更解乏。
                      </p>
                      <p>汗蒸房与桑拿全部包含在 12 小时门票内，24 小时开放，不额外收费。</p>
                    </section>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <div className="center-cta">
              <a className="btn line" href={`${siteBase}/facilities/`}>
                看全部设施
              </a>
            </div>

            <div className="banner">
              <div>
                <h3>几个人来？这样买最划算</h3>
                <p>大人可选单人票，带小孩加儿童票。人数较多可直接联系 WhatsApp 协助安排。</p>
              </div>
              <a className="btn" href={`${siteBase}/packages/#featured`}>
                看普通价目
              </a>
            </div>
          </div>
        </section>

        <section id="faq">
          <SectionHead
            eyebrow="常见问题"
            title="第一次来之前，客人最常问的几件事。"
          />
          <div className="container">
            <div className="faqwrap">
              <div className="faq">
                {faqs.map(([question, answer], index) => (
                  <details open={index === 0} key={question}>
                    <summary>
                      {question}
                      <span className="plus" />
                    </summary>
                    <div className="a">{answer}</div>
                  </details>
                ))}
              </div>
              <div className="center-cta">
                <a className="btn line" href={`${siteBase}/faq/`}>
                  看常见问题
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="cn" />
      <FloatingWhatsApp locale="cn" />
    </>
  );
}
