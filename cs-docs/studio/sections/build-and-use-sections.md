---
title: "Build and Use Sections"
description: "Learn how to build reusable Studio sections, bind them to CMS data using linked schema and drop-location auto-binding, and expose section props so template authors can override values without forking."
url: /studio/build-and-use-sections
uid: bltc66acb79def639e0
---

# Build and Use Sections

## Build and Use Sections

Sections are reusable layout blocks — a hero strip, a card grid, a CTA banner — that you author once and drop into as many pages as you need. Each section carries its own data bindings, which means it knows how to pull the right CMS fields wherever it lands. Data binding matters because it lets the same section render a blog post hero, a product promo card, or an event banner without any code changes — Studio matches the section's declared data shape to the fields available at the drop location.

## In this chapter

-   Start here — Chapter overview — What sections are, why they exist, and how they fit between components and templates.

### Binding sections to data

-   [Linked schema](/docs/studio/link-content-types-with-linked-schema) — Declare the data shape a section expects so Studio can structurally match it onto a template.
-   [Auto-binding by drop location](/docs/studio/auto-binding-by-drop-location) — How Studio resolves bindings against the scope at the drop point (page root, Repeater, Modular Block).

### Opening sections up to template authors

-   [Expose Section Props](/docs/studio/expose-section-props) — Surface individual component props for per-instance overrides on a template.

By the end of this chapter you will understand how to build a section, wire it to your CMS schema, and control exactly which values template authors can override — without forking the section or writing extra code.

## Continue

-   Continue to Smart Containers — Repeaters, Condition Blocks, and Section Slots: the primitives that turn static layouts into data-driven ones.

## See also

-   [Back to docs home](/docs/studio)
-   Templates — Where sections get composed into full pages.
