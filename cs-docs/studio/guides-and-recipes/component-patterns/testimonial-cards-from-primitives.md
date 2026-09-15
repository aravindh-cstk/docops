---
title: "Compose Testimonial cards from primitives"
description: "Build a testimonial section with quote, avatar, author name, and role per card, composed from the same 10 registered primitives, bound to a Reference-multi field."
url: /studio/testimonial-cards-from-primitives
uid: bltbbfa6d4ef88fc859
---

# Compose Testimonial cards from primitives

## Compose Testimonial cards from primitives

A testimonial row (quote, avatar, author name, role per card) built from the same primitives as Heroes and Feature grids. The Card's footer slot uses SplitRow to place the avatar beside the author info.

> **Prerequisite reading.** [Design a component library that composes, not sprawls](/docs/studio/composable-primitives).

## What you'll build

![A Testimonial section on a muted background: a centered H2 heading at the top, followed by a 3-column grid of Cards. Each Card has a quote in the content slot at the top and a SplitRow in the footer slot: a small circular avatar image on the left (30% width), a stacked author name (H4) and muted role description on the right (70% width).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd446570372ffc14a/21982418909fc203719ef9f7/composed-testimonial-cards.png)

-   One Section with a muted background and a heading
-   A 3-column Grid acting as a [Repeater](/docs/studio/create-repeatable-content-with-repeaters) over testimonials

> **New to binding inside a Repeater?** See [the Data Picker + Repeater walkthrough in the Feature Grid recipe](/docs/studio/feature-grid-from-primitives#how-binding-works-in-studios-data-picker): same flow, same picker, scope shifts to one testimonial entry inside the Repeater slot.

-   Per-testimonial Card with quote (content) + avatar + author name + role (footer via SplitRow)

## Prerequisite: the Content Type shape

**landing\_page**: with:

| Field UID | Type | Notes |
| --- | --- | --- |
| testimonials\_section\_title | Single-line text | Section heading |
| testimonials | Reference (multi) to testimonial | The list the Grid repeats over |

**testimonial**: one entry per quote:

| Field UID | Type | Notes |
| --- | --- | --- |
| quote | Multi-line text | The testimonial body |
| author\_name | Single-line text | Name displayed after the quote |
| author\_role | Single-line text | Title / company |
| author\_avatar | File (asset) | Circular avatar image |

## Composition tree

```
Section (spacing: spacious, background: muted, contentAlign: center)
└── Stack (spacing: loose, alignment: center)
    ├── Heading (text: "Trusted by teams at", level: h2)
    └── Grid (columns: 3, spacing: normal)                    ← Repeater over `testimonials`
        └── Card (variant: default, padding: loose)           ← one iteration per testimonial
            ├── content:
            │   └── Description (text: <quote>, emphasis: default)
            └── footer:
                └── SplitRow (ratio: 30-70, verticalAlign: center)
                    ├── leftSlot:
                    │   └── Image (src: <avatar>, aspect: 1:1, fit: cover)
                    └── rightSlot:
                        └── Stack (spacing: tight, alignment: left)
                            ├── Heading (text: <author_name>, level: h4)
                            └── Description (text: <author_role>, emphasis: muted)
```

## Bindings

**Section-level (static):**

-   Section.spacing: spacious
-   Section.background: muted
-   Grid.columns: 3
-   Card.variant: default
-   Card.padding: loose
-   SplitRow.ratio: 30-70

**Repeated per testimonial (Grid is a Repeater over landing\_page.testimonials):**

-   Section Heading.text binds to landing\_page.testimonials\_section\_title
-   Per-card Description.text (quote) binds to testimonial.quote
-   Per-card Image.src (avatar) binds to testimonial.author\_avatar.url
-   Per-card Heading.text (name) binds to testimonial.author\_name
-   Per-card Description.text (role) binds to testimonial.author\_role

## Varieties from the same tree

-   **2-column layout**: Grid.columns: 2 when quotes run long and each testimonial deserves more room.
-   **Ghost cards on a plain background**: Card.variant: ghost + Section.background: none for a lighter, borderless treatment.
-   **Add a brand logo per testimonial**: drop a small Image at the top of each Card's header slot. Bind to a new brand\_logo field on the testimonial CT.
-   **Stars / rating**: introduce a Rating atom (small addition) or use an Image with a rating-visual asset per testimonial.
-   **Longer, hero-style testimonials**: Grid.columns: 1 renders as a single-column stack of full-width testimonials, useful for landing pages that lead with proof.

## Which layout props to expose

-   **Good [Exposed Props](/docs/studio/expose-section-props)**: Grid.columns (2 or 3 for landing-page density variations), Section.background (muted / brand / none), Card.variant.
-   **Static per Section**: everything on the atoms.

## Building this in Studio: step by step

1.  **Create the testimonial Content Type** with quote, author\_name, author\_role, author\_avatar.
2.  **Add a testimonials Reference-multi field** to landing\_page.
3.  **Create 3+ testimonial entries** with real quotes.
4.  **Open the Sections palette**, **Create Section**, name it Testimonial Cards — 3-column.
5.  **Set the linked schema** to landing\_page.
6.  **Drag Section**. Configure spacing: spacious, background: muted, contentAlign: center.
7.  **Drag Stack**. Configure spacing: loose, alignment: center.
8.  **Drop Heading** (level: h2, bind to testimonials\_section\_title).
9.  **Drop Grid** below the heading. Configure columns: 3.
10.  **Bind Grid to** landing\_page.testimonials, becomes a Repeater.
11.  **Drop Card** into the Repeater iteration. Configure variant: default, padding: loose.
12.  **In Card's content**: drop Description, bind text to testimonial.quote.
13.  **In Card's footer**: drop SplitRow, configure ratio: 30-70, verticalAlign: center.
14.  **In SplitRow's leftSlot**: drop Image, bind src to testimonial.author\_avatar.url, configure aspect: 1:1, fit: cover.
15.  **In SplitRow's rightSlot**: drop Stack (spacing: tight, alignment: left), then Heading (level: h4, bind to testimonial.author\_name) and Description (emphasis: muted, bind to testimonial.author\_role).
16.  **Save the Section**. Preview: 3 testimonials render as 3 Cards.

## Testing

1.  Fill a landing\_page entry with testimonials\_section\_title and 3 testimonial references.
2.  Drop Testimonial Cards — 3-column on a Template with URL /landing/:slug.
3.  Verify each card renders with quote, avatar, name, and role.
4.  Add a 4th testimonial to the reference list. The Grid picks it up automatically and wraps to a second row.

## Related recipes

-   [Hero from primitives](/docs/studio/hero-from-primitives)
-   [Feature grid from primitives](/docs/studio/feature-grid-from-primitives)
-   [Pricing tiles from primitives](/docs/studio/pricing-tiles-from-primitives)
