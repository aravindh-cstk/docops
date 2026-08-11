---
title: "Studio Design Tokens Overview"
description: "Complete design-token reference for Contentstack Studio, covering typeface, color palette, type scale, spacing, radii, shadows, and component conventions."
url: /studio/studio-design-tokens-overview
---

# Studio Design Tokens Overview

## Studio Design Tokens Overview

A complete design-token reference for Contentstack Studio, grounded in the Venus design system.

---

## Typeface

-   **Sans:** Inter, weights 400 / 500 / 600 / 700. Used everywhere.
-   **Mono:** 'IBM Plex Mono', weights 400 / 500 / 600. Code, field names, routes, API tokens only.
-   Load: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap

---

## Color

```
:root {
  /* Brand purple */
  --purple:            #6c5ce7;  /* primary — links, active, accents */
  --purple-hover:      #5d50be;
  --purple-pressed:    #3e3871;  /* deep — headings on purple cards */
  --purple-accent:     #b6aef3;  /* accent text on dark */
  --purple-soft:       #8b7fe0;

  /* Purple tints / surfaces */
  --purple-5:          #f9f8ff;
  --purple-panel:      #faf9ff;  /* "with Studio" panel bg */
  --purple-10:         #efedfc;  /* light fill, chips */
  --purple-tint:       #f3f1fd;
  --purple-border:     #d9d4f7;
  --purple-border-2:   #cbc2f5;  /* stronger purple border */
  --purple-eyebrow-bd: #ddd6fa;

  /* Teal (content / "before" accent) */
  --teal:              #2c8a93;
  --teal-bright:       #43b7c2;
  --teal-on-dark:      #7fd4dc;
  --teal-code:         #86d9c0;  /* tags in code blocks */
  --teal-bg:           #eef9fa;
  --teal-border:       #bfe3e7;
  --teal-border-soft:  #cfe9ec;

  /* Neutral text */
  --text-heading:      #212121;
  --text-body:         #475161;
  --text-secondary:    #647696;
  --text-muted-label:  #8b97ab;  /* uppercase meta labels */
  --text-tertiary:     #a9b6cb;
  --text-on-dark:      #c7d0e1;

  /* Surfaces & borders (blue-grays) */
  --white:             #ffffff;
  --surface:           #f7f9fc;  /* card/lane gray */
  --slide-bg:          #f4f5f9;  /* content slide bg */
  --hero-bg:           #eceef4;  /* model-hero slide bg */
  --border:            #dde3ee;  /* default 1px border */
  --border-soft:       #e6eaf1;
  --divider-purple:    #e6e3f5;

  /* Dark (title / payoff / CTA / code) */
  --dark:              #0f1424;  /* navy bg + code blocks */
  --dark-card:         #1c2336;
  --dark-border:       #2c3650;

  /* Success (the "finished / live" end state) */
  --success:           #1f8a5b;
  --success-bg:        #f1faf4;
  --success-border:    #c5e6cf;

  /* Warning / "without" cost (amber) */
  --warn:              #c0851f;
  --warn-text:         #9a7321;

  /* Destructive / Storybook-contrast (coral-red) */
  --danger:            #a3372a;
  --danger-bg:         #fdeeeb;
  --danger-border:     #f4ccc4;
}
```

Venus note: **warning = red #d62400**, **attention = amber #ffae0a**, **info = cyan #00b9e0**, **success = green #007a52**. The amber/coral values above are the practical shades used for the benefit contrast (✓/✗) rows.

---

## Type Scale

**Deck slides (1920×1080):** | Role | Size / weight / tracking | | --- | --- | | Eyebrow / overline | 19px · 700 · .16em · UPPERCASE · purple | | H1 (title slide) | 88px · 700 · \-0.03em | | H2 (section) | 54–60px · 700 · \-0.025em | | Sub / lede | 24–28px · 400 · 1.5 | | Card title | 26–27px · 600 | | Card body | 18–20px · 400 · 1.45–1.5 | | Small meta label | 14px · 700 · .06–.12em · UPPERCASE |

**Mental-model graphics (1280 wide):** | Role | Size / weight | | --- | --- | | H1 | 29–33px · 700 · \-0.02em | | Section label (THE IDEA…) | 11px · 700 · .13em UPPERCASE | | Column / lane label | 9.5–11px · 700 · .08–.1em UPPERCASE | | Card title | 13.5–14.5px · 600 | | Card body | 11–12.5px · 400 · 1.35–1.4 | | Mono (code/chips) | 10.5–12.5px · 500/600 |

---

## Spacing

4px base scale: **4 / 8 / 12 / 16 / 24 / 32 / 40 / 64**. Slide horizontal padding **110–128px**. Graphic padding **34–40px**. Card padding 12–16px (graphics), 24–34px (slides). Grid/flex gap: 13–24px.

## Radii

| Token | Use |
| --- | --- |
| 6px | dense chips |
| 8px | step chips, inputs |
| 9–10px | graphic cards |
| 12–14px | slide cards, panels, lanes |
| 999px | pills / eyebrow badges |
| 50% | dots, avatars |

## Shadows

```
--shadow-purple-card: 0 4px 16px rgba(108,92,231,.12);   /* "with Studio" panels */
--shadow-purple-soft: 0 3px 12px rgba(108,92,231,.10);
--shadow-elevated:    0 16px 40px rgba(15,20,36,.16), 0 4px 12px rgba(108,92,231,.12); /* hero cards */
--shadow-subtle:      0 2px 8px rgba(15,20,36,.08);       /* browser mockups */
```

## Background Dot-Grid

```
/* graphics */   background: #fff; background-image: radial-gradient(#eef0f6 1px, transparent 1px); background-size: 22px 22px;
/* light slides */ background: #f4f5f9; background-image: radial-gradient(#dde2ec 1.2px, transparent 1.2px); background-size: 28px 28px;
/* dark slides */  background: #0f1424; background-image: radial-gradient(#1d2540 1.3px, transparent 1.3px); background-size: 30px 30px;
```

---

## Component Conventions

-   **Eyebrow pill:** lightweight indicator label with a 6px purple dot and uppercase purple label text. Uses #efedfc bg, 1px #ddd6fa border, 999px radius (pill shape), 6×13px padding.
-   **Card:** white, 1px #dde3ee, radius 12–14 (slides) / 9–10 (graphics). The emphasized/"with Studio" card swaps to #faf9ff bg, 1.5px #cbc2f5 border, purple shadow.
-   **Accent top-bar:** 3px bar on key cards, teal #43b7c2 (content/CMS) or purple #6c5ce7 (Studio).
-   **Status semantics:** start = neutral #f7f9fc; finished/live = success green; the "with Studio" path = purple; the "without" path = neutral gray; the cost line = amber #c0851f.
-   **Icons:** outline SVG, 16–38px, 1.6–1.7 stroke, monochrome #475161/#8b97ab default, #6c5ce7 when active/branded. No emoji, no filled icon families.
-   **NEW badge:** 7.5–8.5px · 700 · purple on white, 1px #d9d4f7, radius 4–5.
