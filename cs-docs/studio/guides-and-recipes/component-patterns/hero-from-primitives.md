---
title: "Compose a Hero from primitives"
description: "Build five distinct Hero variants (centered, split, full-bleed, thumbnail-on-top, two-CTA) from the same 10 registered primitives without a code change."
url: /studio/hero-from-primitives
---

# Compose a Hero from primitives

## Compose a Hero from primitives

Five distinct Hero variants built from the same 10 registered primitives. No Hero component, no engineering ticket for the next variant.

> **Prerequisite reading.** This recipe assumes you've read [Design a component library that composes, not sprawls](/docs/studio/composable-primitives) and registered the 10 primitives (4 atoms + 6 layouts) it describes.

## What you'll build

![Five Hero variants laid out in a grid: centered with background image, split (text left, image right), full-bleed immersive, thumbnail-on-top for blog articles, and two-CTA with primary + secondary buttons. Each is composed of Section + Stack + atoms, with BackgroundMedia, SplitRow, or neither depending on variant.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ca0d3035fe10a01/fbfd66888e8b87a19b1fb7e8/composed-hero-variants.png)

-   Variant 1: **Centered Hero** with a background image
-   Variant 2: **Split Hero** (text left, thumbnail right)
-   Variant 3: **Full-bleed Hero** (immersive, minimal text)
-   Variant 4: **Thumbnail-on-top Hero** (blog / product launch)
-   Variant 5: **Two-CTA Hero** (primary + secondary actions)

All five bind to the same Content Type shape: you write the CT once, and authors pick a variant per Template drop.

## Prerequisite: the Content Type

Every Hero binds to fields on a landing\_page Content Type. Suggested fields:

| Field UID | Type | Notes |
| --- | --- | --- |
| hero\_headline | Single-line text | Bound to Heading.text |
| hero\_description | Multi-line text | Bound to Description.text |
| hero\_cta\_label | Single-line text | Bound to Button.label |
| hero\_cta\_url | Link | Bound to Button.href |
| hero\_secondary\_cta\_label | Single-line text | Optional, for the two-CTA variant |
| hero\_secondary\_cta\_url | Link | Optional |
| hero\_bg\_image | File (asset) | Bound to BackgroundMedia.image |
| hero\_thumb\_image | File (asset) | Bound to Image.src for split / thumbnail-top variants |

You don't need every field for every variant: the CT is a superset, each variant binds to the subset it needs.

## Variant 1: Centered Hero with Background Image

![A Centered Hero variant rendered on canvas: a full-width Section with a dark background image behind, a strong dark overlay over the image, and centered white text stacked in the middle: a large H1 headline, a supporting description below, and a primary CTA button underneath.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame0221c993426454b/5824e9ee449ba77924762f9f/composed-hero-centered.png)

**Composition tree:**

```
Section (spacing: spacious, contentAlign: center)
└── BackgroundMedia (image: hero-bg.jpg, overlay: strong, height: tall)
    └── Stack (spacing: normal, alignment: center)
        ├── Heading (text: "Ship faster.", level: h1, emphasis: inverse)
        ├── Description (text: "The platform that…", emphasis: inverse)
        └── Button (label: "Start free trial", variant: default, size: lg)
```

**Bindings:**

-   Heading.text binds to entry.hero\_headline
-   Description.text binds to entry.hero\_description
-   Button.label binds to entry.hero\_cta\_label
-   Button.href binds to entry.hero\_cta\_url
-   BackgroundMedia.image binds to entry.hero\_bg\_image.url

**Design-system does the rest:** H1 sizing, overlay tint, spacing, button colour. Every visual token resolves without an author choosing.

## Variant 2: Split Hero (text left, thumbnail right)

![A Split Hero variant: a Section split into two equal columns via SplitRow. Left column has a Stack of Heading H1, Description, and primary Button, all left-aligned. Right column is a 4:3 thumbnail image, vertically centered next to the text.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am69a9c25b5457aee7/abd0cc415f88ab5ae1d701cb/composed-hero-split.png)

**Composition tree:**

```
Section (spacing: spacious)
└── SplitRow (ratio: 50-50, verticalAlign: center)
    ├── leftSlot:
    │   └── Stack (spacing: normal, alignment: left)
    │       ├── Heading (text: "…", level: h1)
    │       ├── Description (text: "…")
    │       └── Button (label: "Talk to sales", variant: default, size: lg)
    └── rightSlot:
        └── Image (src: hero-thumb.png, aspect: 4:3, fit: cover)
```

**Bindings:**

-   Heading.text binds to entry.hero\_headline
-   Description.text binds to entry.hero\_description
-   Button.label binds to entry.hero\_cta\_label, and Button.href binds to entry.hero\_cta\_url
-   Image.src binds to entry.hero\_thumb\_image.url

**Varieties from the same tree:**

-   Change SplitRow.ratio: 60-40 to give the text more room.
-   Swap leftSlot and rightSlot contents for image-left layouts: no schema change, just re-arrange on canvas.
-   Set reverseOnMobile: true for image-first stacking on small screens.

## Variant 3: Full-bleed Hero (immersive)

![A Full-bleed Hero: full viewport height, strong dark overlay over a background image, minimal text: a large left-aligned H1 headline and a single ghost-variant Button with a play icon underneath. No description.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amef54715b60f24300/94cc768e098f70a13aab3d72/composed-hero-full-bleed.png)

**Composition tree:**

```
Section (spacing: compact)
└── BackgroundMedia (image: hero-full.jpg, overlay: strong, height: full)
    └── Stack (spacing: tight, alignment: left)
        ├── Heading (text: "…", level: h1, emphasis: inverse)
        └── Button (label: "Watch the film", variant: ghost, icon: play, size: lg)
```

**Bindings:**

-   Heading.text binds to entry.hero\_headline
-   Button.label binds to entry.hero\_cta\_label, and Button.href binds to entry.hero\_cta\_url
-   BackgroundMedia.image binds to entry.hero\_bg\_image.url

No Description binding for this variant. Full viewport height. Minimal overlay content: the image carries the message.

## Variant 4: Thumbnail-on-top Hero (blog / product)

![A Thumbnail-on-top Hero: no background image, a wide 16:9 thumbnail image at the top of the Section, followed by an H1 headline, a description, and a link-variant Button with an arrow-right icon, all centered.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2ba1f7484a99c331/44dcc6bfef0a1e4356701f3d/composed-hero-thumbnail-top.png)

**Composition tree:**

```
Section (spacing: comfortable, contentAlign: center)
└── Stack (spacing: loose, alignment: center)
    ├── Image (src: article-thumb.jpg, aspect: 16:9, fit: cover)
    ├── Heading (text: "…", level: h1)
    ├── Description (text: "…")
    └── Button (label: "Read the article", variant: link, icon: arrow-right)
```

No BackgroundMedia. Image sits above the text. Common for blog post headers and product launch pages.

**Bindings:**

-   Image.src binds to entry.hero\_thumb\_image.url
-   Heading.text binds to entry.hero\_headline
-   Description.text binds to entry.hero\_description
-   Button.label binds to entry.hero\_cta\_label, and Button.href binds to entry.hero\_cta\_url

## Variant 5: Two-CTA Hero

![A Two-CTA Hero: Section with a subtle background image overlay, centered Stack containing H1 headline, description, and a nested Stack holding two side-by-side buttons: a primary default variant and an outline variant.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8360b0c4a2e91f1d/93552b77de19ecb464961c4f/composed-hero-two-cta.png)

**Composition tree:**

```
Section (spacing: spacious, contentAlign: center)
└── BackgroundMedia (image: hero-abstract.jpg, overlay: subtle)
    └── Stack (spacing: normal, alignment: center)
        ├── Heading (text: "…", level: h1, emphasis: inverse)
        ├── Description (text: "…", emphasis: inverse)
        └── Stack (spacing: tight, alignment: center)
            ├── Button (label: "Start free", variant: default, size: lg)
            └── Button (label: "Book a demo", variant: outline, size: lg)
```

Two buttons in a nested Stack. If you want them strictly side-by-side rather than gap-stacked, extend Stack with a direction: row option or introduce a horizontal Row layout primitive, a one-time addition to the library.

**Bindings:**

-   Primary Button.label binds to entry.hero\_cta\_label
-   Primary Button.href binds to entry.hero\_cta\_url
-   Secondary Button.label binds to entry.hero\_secondary\_cta\_label
-   Secondary Button.href binds to entry.hero\_secondary\_cta\_url
-   Plus Heading, Description, BackgroundMedia bindings as in Variant 1.

## Which layout props stay static vs. Exposed

-   **Static per Section**: Section.spacing, SplitRow.ratio, Stack.alignment, BackgroundMedia.overlay. Design decisions the Section author makes once.
-   **[Exposed Prop](/docs/studio/expose-section-props) candidates**: Section.background, BackgroundMedia.overlay, SplitRow.ratio (rare: for Templates that override the split from 50-50 to 60-40 on landing pages).
-   **Never exposed**: atom props. Content flows via CMS bindings. Visual polish stays in the design system.

## What you'll see in Studio

The primitives you registered show up in Studio's palette on the left of the canvas. Drag one onto the canvas to add it. Select it to configure its semantic options in the properties panel on the right.

![Studio](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31c9b748e2839e37/53a63d2f90e6efc0575e1806/component-palette-expanded.png)

Once you drop a Section on the canvas and nest content inside, the composition renders inline with real bindings pulled from the linked Content Type:

![Studio](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am39e1bd55e6ea064e/d650dbd14817e6f2673b05fd/landing-hero-section-canvas.png)

Every semantic dropdown (Heading level, Section spacing, Card variant) is a controlled list from your DS: no free text, no drift.

## Building this in Studio: step by step

1.  **Open the Sections palette**, click **Create Section**, name it Hero — Centered.
2.  **Set the target Content Type** to landing\_page (the [linked schema](/docs/studio/link-content-types-with-linked-schema)).
3.  **Drag Section** onto the canvas. Configure spacing: spacious, contentAlign: center.
4.  **Drag BackgroundMedia** into Section's children slot. Configure overlay: strong, height: tall.
5.  **Drag Stack** into BackgroundMedia's foreground slot. Configure spacing: normal, alignment: center.
6.  **Drag Heading** into Stack. Bind text to landing\_page.hero\_headline via the Data Picker. Configure level: h1, emphasis: inverse.
7.  **Drag Description** into Stack, below Heading. Bind text to landing\_page.hero\_description. Configure emphasis: inverse.
8.  **Drag Button** into Stack, below Description. Bind label to hero\_cta\_label, href to hero\_cta\_url. Configure variant: default, size: lg.
9.  **Save the Section**. Repeat for other variants: save each as Hero — Split, Hero — Full-bleed, etc.

Template authors then drop the variant that fits their page. Same CT bindings, different composition: no code change per variant.

## Testing

Once the Section is saved:

1.  Create a landing\_page entry, fill in hero\_headline / hero\_description / hero\_cta\_label / hero\_cta\_url / hero\_bg\_image.
2.  Create a Template with URL pattern /landing/:slug, drop Hero — Centered on it.
3.  Visit /landing/<slug>. The Hero should render with the entry's content, backed by the design-system tokens.

## Related recipes

-   [Feature grid from primitives](/docs/studio/feature-grid-from-primitives)
-   [Testimonial cards from primitives](/docs/studio/testimonial-cards-from-primitives)
-   [Pricing tiles from primitives](/docs/studio/pricing-tiles-from-primitives)
-   [Card grid with slots](/docs/studio/card-grid-with-slots): the more advanced list-and-slot pattern
