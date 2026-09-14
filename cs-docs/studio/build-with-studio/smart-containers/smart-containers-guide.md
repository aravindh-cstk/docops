---
title: "Smart Containers Chapter Guide"
description: "The three primitives that turn a static layout into a data-driven one: Repeater (render N times), Condition Block (switch designs by item type), Section."
url: /studio/smart-containers-guide
uid: blt2fac2ddb93ae9d5b
---

# Smart Containers Chapter Guide

## Smart Containers

The three primitives that turn a static layout into a data-driven one: Repeater (render N times), Condition Block (switch designs by item type), Section Slot (carve an editable placeholder).

## How the three compose

Each primitive answers a different question, and they nest:

| Primitive | Question it answers | Typical binding | Nests inside |
| --- | --- | --- | --- |
| **Repeater** | How many? | A multi-value field (references\[\], body\_blocks\[\], an array of strings) | Section / Template canvas, becomes the loop |
| **Condition Block** | Which design for this one? | Reads the current iteration item's type/UID | Almost always sits **inside a Repeater** to switch designs per iteration |
| **Section Slot** | Who fills this? | No binding: it's an author-facing hole in a Section | Inside a Section. The template author fills it later |

A common combined pattern (Modular Blocks rendered per iteration):

```
Section
└─ Repeater  (bound to template.body_blocks[])
   └─ Condition Block  (matches on block.type)
      ├─ when "hero"     → <Hero> bound to iteration.headline
      ├─ when "quote"    → <Quote> bound to iteration.quote_text
      └─ when "cta"      → <CTA> bound to iteration.button_label
```

Section Slots are orthogonal: they punch a hole into a Section that the template composer later fills, with more components, or even with more Smart Containers.

Rule of thumb: use Repeater when the count is data-driven. Add a Condition Block when the items aren't all the same shape. Carve a Section Slot when the composer above you should decide what goes there.

## On this chapter

### Start here

-   [Smart Containers overview](/docs/studio/smart-containers-overview): the three primitives and how they compose

### Rendering many items

-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): bind to a multi-value field, render the same shape once per item
-   [Modular Blocks](/docs/studio/rendering-modular-block-fields): Repeater + Condition pattern for heterogeneous block lists
-   [Reference fields](/docs/studio/rendering-reference-fields): Repeater + Condition for multi-content-type references

### Switching designs

-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): pick which design renders based on the current item

### Opening sections to authors

-   [Section Slots](/docs/studio/section-slots): carve a placeholder that the next composer fills
-   [Slot Defaults & Allowed Sections](/docs/studio/slot-defaults-and-allowed-sections): pre-fill an empty slot with a default section, and restrict which sections may be dropped

## See also

-   [Docs home](/docs/studio/studio-documentation-home)
-   [Sections](/docs/studio/sections-guide): where Smart Containers usually live
-   [Templates](/docs/studio/templates-guide): Smart Containers also work directly on template canvases
