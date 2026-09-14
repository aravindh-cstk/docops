---
title: "When to use Templates vs Sections: a decision tree"
description: "Learn when to choose Templates for content-type-driven pages versus Sections for reusable blocks, with a decision tree and quick reference table."
url: /studio/choosing-between-templates-and-sections
---

# When to use Templates vs Sections: a decision tree

## When to use Templates vs Sections: a decision tree

> **Building your first Studio thing?** Go to **[Getting Started](/docs/studio/getting-started-with-studio)**. The numbered Quickstarts walk you through building both a Section and a Template. This page is a **decision reference** for later, when you're planning a new piece and need to pick which one it should be.

Two building blocks, two jobs.

## Decision tree

![Decision tree. Are you building a reusable block or a full page? Block becomes a Section (a reusable visual unit with no URL of its own, for example hero strip, card grid, CTA strip). Page becomes a Connected Template (one Template, many entries. URL pattern like /blog/{slug}, works for Blog, Product, Author, Doc, Case study, Event).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb999a3be696e1b13/1b0578ac9979ed1ced395cc0/overview-templates-vs-sections-decision.png)

## Quick reference

| You want to | Use |
| --- | --- |
| Build a page tied to one entry of a content type | **Template** |
| Build a reusable block | **Section** |
| Reuse one section across different content types | Section with a **linked schema** |
| Let template authors drop custom content inside a section | **Section Slot** |
| Let template authors tweak a value inside a section per template instance | **Expose Section Prop** |

## What renders where

| Component | Goes on | Renders |
| --- | --- | --- |
| <StudioCanvas /> | One special "canvas" route | Sections, for preview while authoring |
| <StudioComponent /> | Your real page routes | Templates as pages visitors see |

A typical Studio-powered app ships **both**.

## Next

-   [Composition concepts](/docs/studio/what-is-a-composition): how Studio models page structure
-   [Templates](/docs/studio/templates-overview): content-type-driven pages
-   [Sections](/docs/studio/build-and-use-sections): reusable blocks
