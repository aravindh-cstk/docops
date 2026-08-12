---
title: "Choosing Between Templates and Sections"
description: "Learn when to choose Templates for content-type-driven pages versus Sections for reusable blocks, with a decision tree and quick reference table."
url: /studio/choosing-between-templates-and-sections
---

# Choosing Between Templates and Sections

## Choosing Between Templates and Sections

Two building blocks, two jobs.

Choose Templates for content-type-driven pages or Sections for reusable blocks.

## Decision Tree

![Decision tree. Question 1: a reusable block or a full page? Block → Section (reusable visual unit, no URL of its own; e.g. hero strip, card grid, CTA strip). Page → Question 2: tied to a content type? Yes → Connected Template (one Template, many entries; URL pattern like /blog/{slug}; works for Blog, Product, Author, Doc). No → Freeform Template (one Template, one URL; for one-off Campaign, Landing, Promo pages).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb20ce92bb47eef1d/0b20d2bd21a9b4298fa00ab1/overview-templates-vs-sections-decision.png)

## Quick Reference

| Goal | Use |
| --- | --- |
| Build a page tied to one entry of a content type | **Template** |
| Build a reusable block | **Section** |
| Reuse one section across different content types | Section with a **linked schema** |
| Allow template authors to add custom content inside a section | **Section Slot** |
| Let template authors tweak a value inside a section per template instance | **Expose Section Prop** |

## What Renders Where

| Component | Goes on… | Renders |
| --- | --- | --- |
| <StudioCanvas /> | One special "canvas" route | Sections, for preview while authoring |
| <StudioComponent /> | Your real page routes | Templates as pages visitors see |

A typical Studio-powered app ships **both**.

## Next

-   [Composition concepts](/docs/studio/composition-concepts): how Studio thinks about pages
-   [Templates](/docs/studio/choosing-between-templates-and-sections): content-type-driven pages
-   [Sections](/docs/studio/build-and-use-sections): reusable blocks

---

_Need a one-off page that isn't tied to a content type? Studio has an optional_ _Freeform_ _mode for that, see the [Freeform](/docs/studio/freeform-templates) chapter when you're ready._
