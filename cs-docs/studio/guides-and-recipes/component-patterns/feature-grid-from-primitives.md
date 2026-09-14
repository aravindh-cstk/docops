---
title: "Compose a Feature Grid from primitives"
description: "Build a three-column feature grid (icon, heading, description per card) from the same 10 registered primitives, with authors binding to a Reference-multi field on the CT."
url: /studio/feature-grid-from-primitives
---

# Compose a Feature Grid from primitives

## Compose a Feature Grid from primitives

A three-column feature-callout section (icon + heading + description per card) composed from the same primitives as the Heroes. The Grid becomes a [Repeater](/docs/studio/create-repeatable-content-with-repeaters). Each Card iteration binds to one feature entry.

> **New to Studio's smart containers?** [Repeater](/docs/studio/create-repeatable-content-with-repeaters) iterates a bound list, rendering one iteration per item. This recipe wraps a Grid in one. The columns: 3 renders three cards, one per feature entry, automatically.

### How binding works in Studio's Data Picker

Every atom prop's binding (Heading.text, Image.src, Button.href) is set via Studio's Data Picker, a right-panel view of the linked Content Type's schema tree. Click the small chip next to a prop, pick the field. The prop resolves to that field's value at render time.

![Studio](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8c15138c8f9f63/64e5182b28c45217cbcdca5d/data-picker.png)

**Inside a Repeater, the Data Picker scope shifts to the iteration item.** When you bind a prop on a component inside a Repeater's slot, the picker shows the fields of ONE feature entry (not the parent Content Type). This is what makes the composition tree above work: the Card's Heading.text binds to feature.title, not to landing\_page.features\[0\].title. The Repeater handles iteration for you.

![A Repeater node selected in a Card Grid section. Right panel shows Configuration with Preview Mode toggled on, and Properties with Contents (a Condition Block) and Items (bound to a Related Posts multi-valued field). Canvas renders two iteration cards populated with real titles from the previewed entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2af4f237b7a2a2c0/fb706ba11a603ff500984bb6/repeater-properties.png)

Once the Repeater's Items field is bound and Preview Mode is on, the canvas renders one card per entry in the list. Studio handles the iteration. You compose the one card template inside the slot.

> **Prerequisite reading.** [Design a component library that composes, not sprawls](/docs/studio/composable-primitives): the 10 primitives this recipe uses.

## What you'll build

![A Feature Grid section: a centered section intro (H2 heading + muted description) followed by a 3-column responsive grid of three Cards. Each Card has an icon Image at the top of its header slot, then a small H3 heading, then a muted description below. Cards use the default shadcn variant with a subtle border and shadow.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am615ef2351b662102/0bdc354e0a231357140b7199/composed-feature-grid.png)

-   One Section with a centered intro
-   One Grid (3 columns) that acts as a Repeater over a Reference-multi field
-   Three Card iterations, each rendered from a feature entry with icon, heading, and description

## Prerequisite: the Content Type shape

Two Content Types:

**landing\_page**: the page CT, with:

| Field UID | Type | Notes |
| --- | --- | --- |
| features\_section\_title | Single-line text | Section intro heading |
| features\_section\_description | Multi-line text | Section intro description |
| features | Reference (multi) to feature | The list the Grid repeats over |

**feature**: one entry per feature:

| Field UID | Type | Notes |
| --- | --- | --- |
| icon | File (asset) | Icon image for the card header |
| title | Single-line text | Card heading |
| description | Multi-line text | Card body |

## Composition tree

```
Section (spacing: spacious, contentAlign: center, background: none)
└── Stack (spacing: loose, alignment: center)
    ├── Stack (spacing: normal, alignment: center)           ← section intro
    │   ├── Heading (text: "Everything you need to ship", level: h2)
    │   └── Description (text: "Built for teams that ship weekly.", emphasis: muted)
    └── Grid (columns: 3, spacing: normal)                    ← Repeater over `features`
        └── Card (variant: default, padding: normal)          ← one iteration per feature entry
            ├── header:
            │   └── Stack (spacing: tight, alignment: left)
            │       ├── Image (src: <icon>, aspect: 1:1, fit: contain)
            │       └── Heading (text: <title>, level: h3)
            └── content:
                └── Description (text: <description>, emphasis: muted)
```

## Bindings

**Section-level (static, set once per Section, not per entry):**

-   Section.spacing: spacious
-   Section.contentAlign: center
-   Grid.columns: 3
-   Grid.spacing: normal
-   Card.variant: default
-   Card.padding: normal

**Repeated per feature (the Grid is a Repeater over landing\_page.features):**

-   Section intro Heading.text binds to landing\_page.features\_section\_title
-   Section intro Description.text binds to landing\_page.features\_section\_description
-   Per-card Image.src binds to feature.icon.url
-   Per-card Heading.text binds to feature.title
-   Per-card Description.text binds to feature.description

## Varieties from the same tree

-   **4-up grid**: change Grid.columns: 3 → 4. No other change.
-   **Outlined cards**: change Card.variant: default → outline for a lighter treatment on white backgrounds.
-   **Ghost cards**: change Card.variant: ghost and Section.background: muted for cards that read as part of the section rather than as elevated tiles.
-   **Add a CTA link per card**: drop a Button (variant: link, icon: arrow-right) into each Card's footer slot with a descriptive label per feature (e.g. "Read the case study", "View integration guide"). Bind label and href to two new fields on the feature CT.
-   **Two-line grid**: change Grid.columns: 3 with more than 3 features. Grid wraps to a second row automatically.

## Which layout props to expose as Section-level

-   **Good [Exposed Props](/docs/studio/expose-section-props)**: Grid.columns, Section.background, Card.variant. Template authors can pick a layout treatment per Template drop without a code change.
-   **Never Exposed**: the atom props. Content flows through the CT. Visual polish is design-system-locked.

## Building this in Studio: step by step

1.  **Create the feature Content Type** with fields icon, title, description.
2.  **Add a features Reference-multi field** to landing\_page, targeting feature.
3.  **Create 3+ feature entries** with real content: icons, titles, descriptions.
4.  **Open the Sections palette**, click **Create Section**, name it Feature Grid — 3-column.
5.  **Set the linked schema** to landing\_page.
6.  **Drag Section** onto the canvas. Configure spacing: spacious, contentAlign: center.
7.  **Drag the outer Stack** into Section's children. Configure spacing: loose, alignment: center.
8.  **Drag an inner Stack** for the intro. Drop **Heading** (level: h2, bind text to features\_section\_title) and **Description** (emphasis: muted, bind text to features\_section\_description).
9.  **Drag Grid** as a sibling of the intro Stack. Configure columns: 3, spacing: normal.
10.  **Convert Grid into a Repeater**: right-click the Grid node, "Bind list to", select landing\_page.features. Grid becomes a Repeater with one iteration.
11.  **Drag Card** into the Repeater's iteration. Configure variant: default, padding: normal.
12.  **In Card's header**: drop a Stack, then Image (bind src to feature.icon.url, the Repeater scope makes feature.\* available) and Heading (level: h3, bind text to feature.title).
13.  **In Card's content**: drop Description (emphasis: muted, bind text to feature.description).
14.  **Save the Section**. Preview: with 3 feature entries, the Grid renders 3 Cards. With 6 entries, it renders 6 Cards wrapped to 2 rows.

## Testing

1.  Fill a landing\_page entry with features\_section\_title, features\_section\_description, and 3 feature references.
2.  Drop Feature Grid — 3-column on a Template with URL /landing/:slug.
3.  Visit /landing/<slug>. The Grid renders 3 Cards with the referenced feature entries.
4.  Add a 4th feature entry to the reference list, publish, refresh. The Grid picks up the new card without a schema change.

## Related recipes

-   [Hero from primitives](/docs/studio/hero-from-primitives)
-   [Testimonial cards from primitives](/docs/studio/testimonial-cards-from-primitives)
-   [Pricing tiles from primitives](/docs/studio/pricing-tiles-from-primitives)
-   [Card grid with slots](/docs/studio/card-grid-with-slots): for the more advanced pattern where each card's contents vary per-Template
