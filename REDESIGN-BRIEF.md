# Redesign brief — paste this into another AI

---

## Who this is for

You are redesigning the website of **Nanhai Onsen 南海龙宫**, a 24-hour Chinese
bathhouse (汤泉 / onsen-style) on Level 2 of Viva Home Mall, Kuala Lumpur. It
sells 12-hour entry tickets, massage and body-polish treatments, a beauty
studio, TCM wellness, private rooms, and an outcall (home massage) service.
The site is bilingual: an English tree at `/` and a mirrored Chinese tree at
`/cn/`. Chinese is the primary commercial language — most customers read 中文.

**There is no online payment and no cart.** Every booking happens in a chat on
WhatsApp, Telegram or WeChat, and the guest pays at the outlet. Never design
checkout, card, or "buy now" flows.

## The hard constraint: it must not resemble onespa.com.my

A different operator trading as "One Spa" (onespa.com.my) is **suing this
client for copying their website**. The site has already been reworked once to
diverge — palette, typography, all package and facility names, and every
mirrored heading were changed. Your job is to push the *composition* further.

Two things follow from this:

1. **Do not use onespa.com.my as a reference.** Do not visit it for
   inspiration, and do not reproduce any layout, section order, naming or
   phrasing from it.
2. **Do not clone any single other website either.** Study conventions across
   several unrelated sites and synthesise. Cloning one site's layout is how
   this problem started.

For reference, these patterns were on the other operator's site and must stay
gone: a nav of exactly `Home / Packages / Facilities / Home Service / Beauty /
TCM / FAQ / Contact` in that order; package names `Solo 12-Hour Pass`,
`Daytime Massage Package`, `Yangzhou Body Scrub`, `All-Day Scrub & Massage`,
`Daytime Duo`; facility names `Fire & Ice Pools`, `Salt-Crystal Steam Room`,
`Movie & Rest Lounge`, `Immersive Light Walk`, `Foot Bath Room`; headings
"Pick Yours, Book in Minutes" and "Coming With Friends or Family?"; and the
background colour `#fff2e9`.

## Why the current design still feels derivative

Be blunt with yourself about this. The last pass replaced the **design layer** —
tokens, typography, components, motion — but kept the original **page
skeleton**. Every page still runs:

```
hero (full-bleed photo, centred type)
  → band of 4 short promises
  → grid of 5 package cards
  → grid of 7 facility photo cards
  → gradient banner CTA
  → FAQ accordion
```

That skeleton is inherited from the site being disputed. Re-skinning it will
always feel like the same template in new clothes. **The composition, section
order and interaction model are what need to change**, not the palette again.

Also: the homepage currently loads **seven facility photographs** in one grid.
The client's note is that not every photo needs to be used. Fewer, larger,
better-chosen images with more whitespace and more typographic structure will
read far more expensive than a dense photo grid.

## What to change

Treat these as directions to explore, not a checklist to implement literally.

**Composition**
- Replace the full-bleed-photo hero. Consider an asymmetric editorial split:
  large type on a solid warm ground beside a single tall image; or type over a
  narrow letterboxed image with the fold showing content beneath.
- Build a section around **the bathing ritual**, which is genuinely this
  business's own subject and hard to call derivative: hot herbal pool → steam
  or sauna → cold plunge → repeat. A numbered horizontal sequence, a temperature
  scale (13°C / 43°C), or a diagram would all be distinctive.
- Present treatments and prices as a **printed menu**, not cards — ruled rows,
  a column of durations, a column of prices. It suits a bathhouse and looks
  nothing like a package-card grid.
- Break the uniform grid. Let one facility get a full-bleed spread with a long
  caption, and reduce the rest to a short list with no images at all.
- Reconsider the floating contact buttons. A slim persistent bar, or a rail
  anchored to the layout, may read less like a template add-on.

**Typography**
- Current: Cormorant Garamond (display) + Inter (body). Cormorant is very
  widely used and its default oldstyle figures make prices render badly — set
  numerals in the sans, or pick a display face with lining figures.
- Whatever you choose **must pair with Chinese**. Latin display faces do not
  cover CJK, so the CJK fallback (PingFang SC / Noto Serif SC / Source Han) is
  doing most of the visible work on `/cn/`. Choose the CJK face deliberately
  and set its weight and tracking, rather than letting it fall back.
- Chinese headlines need tighter tracking and different line-height from
  Latin. Test both trees at every breakpoint.

**Colour**
- Current: `#FDFBF7` paper, `#1C2B24` deep green ink, `#B9854D` brass. This is
  fine and deliberately distinct, but if you change it, avoid `#fff2e9` and
  avoid cream-and-terracotta, which is what the disputed site uses.

## Technical constraints — read these, they will save you hours

**Stack:** Next.js 16 App Router running on `vinext` 0.0.50 (a Vite/Cloudflare
Workers compat layer), React 19.2, Tailwind v4 via `@tailwindcss/postcss`. All
styling lives in one file, `app/globals.css` (~4,300 lines, tokenised, single
`:root`). Shared chrome is in `app/site-common.tsx`.

**Hydration — the big one.** Hydration in this setup completes *after*
`window.load`. Any class or attribute a script adds to the DOM — even on load —
is reported by React as a mismatch it "won't patch up", and the change is
discarded. This silently broke scroll reveal animations twice: elements were
left permanently at `opacity: 0`.

- Do **not** add classes or attributes to `<html>`, `<body>` or content nodes
  from a script in order to drive appearance.
- Reveal-on-scroll is implemented in CSS only, with
  `animation-timeline: view()` inside `@supports`, so unsupported browsers
  simply render everything visible. Keep that approach.
- If you use `animation-range`, note that an element taller than the viewport
  never completes its `entry` phase. Cap it (the current value is
  `entry 0% entry 35%`) or tall blocks stay half-transparent. Never write a
  degenerate range like `entry 12% cover 6%`.
- JavaScript may still respond to user interaction and scroll (the sticky
  header state, the mobile drawer, subnav highlighting all do) — that happens
  long after hydration and survives.

**Do not rename or remove these — they are wired to live JS and tests:**
- Anchor ids `#pk-solo`, `#pk-daytime`, `#pk-scrub`, `#pk-allday-sm`,
  `#pk-daytime-duo`, and the sections `#treatments`, `#combos`, `#featured`,
  `#facilities`, `#faq`, `#room`, `#know`, `#drinks`, `#outcall-plans`.
- `data-book="..."` attributes and their values (`solo`, `daytime`, `scrub`,
  `allday-sm`, `daytime-duo`, `kids`, `outcall-classic`, `outcall-anytime`,
  `outcall-fourhands`), plus `data-book-locale`.
- Class names `booking-*`, `cart-confirm-*`, `tech-*`, `admin-*`, `click-*`,
  and `data-wechat-copy` / `data-copy-label` / `data-copied-label`
  (`public/booking-cart.js`, `wechat-copy.js`, `contact-clicks.js` and
  `admin-*.js` query these).
- The promo link must keep exactly
  `className="mobile-tech-link promo-tech-link"` with
  `href="/jishi-tiaoxuan/"` and `aria-label="最新 男士必看 技师挑选"`, in that
  attribute order — `tests/rendered-html.test.mjs` asserts the literal string.
- Identifiers containing `onespa` (`onespa_admin_token`, `ONESPA_API_BASE`,
  `CONTACT_CLICK_SITE = "onespa"`, and a SQL literal `'onespa'`) are storage
  and database keys. Renaming them orphans existing analytics rows and logs
  staff out. Leave them. Only *visible wording* was rebranded.

**Business facts that must stay accurate in any copy you write:**
- Open 24 hours. Entry is a 12-hour stay, clock starting at check-in.
- Sunday is charged at the **weekday** tier. Friday, Saturday and public
  holidays are the higher tier.
- `++` means 10% service charge + 8% SST.
- Free date changes up to 1 day before arrival.
- Outcall: RM100 travel fee, cash on arrival, 30km radius.
- On the technician-selection page, guests must be told: ask on WhatsApp
  whether the technician is free, give a rough arrival time, and **say
  「我是龙王来的」when entering the shop**. Keep that third point prominent.

**Verify before you claim it works.** Screenshots in this environment are
unreliable; measure the DOM instead (`getBoundingClientRect`, `getComputedStyle`)
and check the browser console for hydration errors. Run `npm test` (builds, then
asserts rendered HTML). Check both `/` and `/cn/`, at 375px, 780px and 1440px.

## Deliverable

A revised `app/globals.css` and revised `app/site-common.tsx` plus homepage,
with the section composition changed — not just the palette. Explain what you
changed structurally and why it no longer reads as the same template.

## Reference sites — study, do not clone

Look at **several** and take conventions, not layouts:

- `aman.com` — restraint, enormous whitespace, one image per idea, type doing
  the work. The clearest model for "fewer photos, more air".
- `hoshinoresorts.com` / `hoshinoya.com` — bilingual Japanese/English
  hospitality; useful for how CJK and Latin coexist in one typographic system.
- `sixsenses.com` — wellness programming presented as structured content
  rather than photo cards.
- `selected-ryokan.com` — dense onsen information architecture: baths, water
  types, facilities described in text.
- `othership.us` and Nordic/urban bathhouse brands — the sauna→plunge ritual
  communicated as a sequence, which is the closest analogue to this client's
  own bathing rounds.

For layout and interaction vocabulary in the abstract, browse
`awwwards.com` and `siteinspire.com` filtered to hospitality or wellness.
