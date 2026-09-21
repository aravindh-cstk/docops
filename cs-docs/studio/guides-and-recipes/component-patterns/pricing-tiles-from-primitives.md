---
title: "Compose Pricing tiles from primitives"
description: "Build a three-tier pricing section with feature lists and per-tier CTAs, composed from the same 10 registered primitives, bound to a Reference-multi of pricing tiers."
url: /studio/pricing-tiles-from-primitives
uid: blt0de592ad8766310d
---

# Compose Pricing tiles from primitives

## Compose Pricing tiles from primitives

A three-tier pricing table (tier name, price, feature list, CTA per tile) built from the same primitives as Heroes, Feature grids, and Testimonials. The middle tier gets a highlighted treatment via a different Card variant.

> **Prerequisite reading.** [Design a component library that composes, not sprawls](/docs/studio/composable-primitives).

## What you'll build

![A Pricing section: centered H2 heading and muted intro description at the top, followed by a 3-column grid of Cards. Left and right Cards use the outline variant, the middle Card uses the default variant to highlight it as the popular tier. Each Card](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd0a6c86382130008/87108253200cd8e28966ee49/composed-pricing-tiles.png)

-   Section intro (heading + description, centered)
-   3-column Grid ([Repeater](/docs/studio/create-repeatable-content-with-repeaters) over pricing\_tiers)

> **New to binding inside a Repeater?** See [the Data Picker + Repeater walkthrough in the Feature Grid recipe](/docs/studio/feature-grid-from-primitives#how-binding-works-in-studios-data-picker), same flow. Inside the Condition Block, the picker scope is the current iteration's pricing\_tier entry.

-   Per-tier Card with tier label + price + period (header), feature list (content), CTA (footer)
-   The "most popular" tier styled distinctly via Card.variant: default. Others variant: outline

## Prerequisite: the Content Type shape

**landing\_page**: with:

| Field UID | Type | Notes |
| --- | --- | --- |
| pricing\_section\_title | Single-line text | Section heading |
| pricing\_section\_description | Multi-line text | Section intro description |
| pricing\_tiers | Reference (multi) to pricing\_tier | The list the Grid repeats over |

**pricing\_tier**: one entry per tier:

| Field UID | Type | Notes |
| --- | --- | --- |
| tier\_name | Single-line text | e.g. "Starter", "Pro", "Enterprise" |
| tier\_tagline | Single-line text | Short qualifier: e.g. "Most Popular", "Free forever" |
| price | Single-line text | e.g. "$0", "$29", "Custom" |
| period | Single-line text | e.g. "Free forever", "per user / month", "Tailored to your team" |
| features | List of strings (multiple) | Feature bullets |
| cta\_label | Single-line text | Button label |
| cta\_url | Link | Button target |
| is\_highlighted | Boolean | Drives the Card variant + Button variant per tier |

## Composition tree

```
Section (spacing: spacious, background: none, contentAlign: center)
└── Stack (spacing: loose, alignment: center)
    ├── Stack (spacing: normal, alignment: center)                       ← section intro
    │   ├── Heading (text: "Simple, transparent pricing", level: h2)
    │   └── Description (text: "Pick the tier that fits your team.", emphasis: muted)
    └── Grid (columns: 3, spacing: normal)                                ← Repeater over `pricing_tiers`
        └��─ Card (variant: <default | outline>, padding: loose)           ← per-tier iteration
            ├── header:
            │   └── Stack (spacing: tight, alignment: left)
            │       ├── Description (text: <tier_tagline>, emphasis: muted | default)
            │       ├── Heading (text: <price>, level: h2)
            │       └── Description (text: <period>, emphasis: muted)
            ├── content:
            │   └── Stack (spacing: tight, alignment: left)               ← Repeater over `features`
            │       └── Description (text: "✓ <feature>", emphasis: default)
            └── footer:
                └── Button (label: <cta_label>, variant: <default | outline>, size: default)
```

**Note.** The feature list uses Stack of Description today. If pricing sections become a common pattern across the library, add a dedicated **FeatureList** atom with items: array<string> + checkmark: boolean. That's an incremental addition, not a re-registration.

## Bindings

**Section-level (static):**

-   Section.spacing: spacious
-   Grid.columns: 3
-   Card.padding: loose

**Repeated per pricing tier (the Grid becomes a Repeater over landing\_page.pricing\_tiers):**

-   Card.variant is Condition-bound: default when pricing\_tier.is\_highlighted is true, else outline
-   Header Description (tagline) binds to pricing\_tier.tier\_tagline
-   Header Heading (price) binds to pricing\_tier.price
-   Header Description (period) binds to pricing\_tier.period
-   Content: inner Stack Repeats over pricing\_tier.features, and per-feature Description.text binds to the feature value
-   Footer Button.label binds to pricing\_tier.cta\_label
-   Footer Button.href binds to pricing\_tier.cta\_url
-   Footer Button.variant is Condition-bound: default when highlighted, else outline

The highlighted-tier logic is a **[Condition Block](/docs/studio/control-visibility-with-condition-blocks)** wrapper in Studio, keyed on pricing\_tier.is\_highlighted. Two branches: highlighted (default variants), non-highlighted (outline variants).

## Varieties from the same tree

-   **4-tier pricing**: Grid.columns: 4 for Freelance / Team / Business / Enterprise ladders.
-   **2-tier pricing**: Grid.columns: 2 for Personal vs Business.
-   **Compact tile without feature list**: omit the content slot's inner Stack. Tier + price + CTA.
-   **Ghost tiles on a brand background**: Card.variant: ghost + Section.background: brand for a "picked from the catalog" feel.
-   **Toggle-based billing period**: add a Section-level Exposed Prop billingPeriod: monthly | annual. Content bindings resolve to different price and period fields.

## Which layout props to expose

-   **Good Exposed Props**: Grid.columns (2 / 3 / 4 tier ladders), Section.background.
-   **Static per Section**: Card.padding, atom props.
-   **Condition-bound**: Card.variant + Button.variant based on the tier's is\_highlighted boolean.

## Building this in Studio: step by step

1.  **Create the pricing\_tier Content Type** with all fields listed above.
2.  **Add a pricing\_tiers Reference-multi field** to landing\_page.
3.  **Create 3 pricing tier entries**: Starter (highlighted: false), Pro (highlighted: true), Enterprise (highlighted: false).
4.  **Open the Sections palette**, **Create Section**, name it Pricing Tiles — 3-tier.
5.  **Set the linked schema** to landing\_page.
6.  **Drag Section**: spacing: spacious, contentAlign: center.
7.  **Drag outer Stack**: spacing: loose, alignment: center.
8.  **Build the intro**: inner Stack + Heading (level: h2, bind to pricing\_section\_title) + Description (muted, bind to pricing\_section\_description).
9.  **Drop Grid** below the intro: columns: 3. Bind list to landing\_page.pricing\_tiers.
10.  **Drop a Condition Block** into the Grid iteration, keyed on pricing\_tier.is\_highlighted.
11.  **In the true branch**: drop Card (variant: default, padding: loose). Build header + content + footer.
12.  **In the false branch**: drop Card (variant: outline, padding: loose). Mirror the header + content + footer, with Button variant: outline.
13.  **In each Card's header**: Stack + Description (tagline, bind to tier\_tagline) + Heading (level: h2, bind to price) + Description (muted, bind to period).
14.  **In each Card's content**: drop a Stack (spacing: tight, alignment: left), bind its list to pricing\_tier.features (this makes the inner Stack a Repeater), then add a Description (bind to the feature string value, prefixed with "✓ ").
15.  **In each Card's footer**: Button, bind label + href, variant matches the branch.
16.  **Save the Section**. Preview: three tiles render, middle one highlighted.

## Testing

1.  Fill a landing\_page entry with pricing\_section\_title, pricing\_section\_description, and 3 pricing\_tier references.
2.  Drop Pricing Tiles — 3-tier on a Template.
3.  Verify: three tiles render, Pro (highlighted: true) uses default Card + default Button. Starter and Enterprise use outline variants.
4.  Toggle is\_highlighted on another tier and republish. Highlighting moves without a schema change.

## Related recipes

-   [Hero from primitives](/docs/studio/hero-from-primitives)
-   [Feature grid from primitives](/docs/studio/feature-grid-from-primitives)
-   [Testimonial cards from primitives](/docs/studio/testimonial-cards-from-primitives)
