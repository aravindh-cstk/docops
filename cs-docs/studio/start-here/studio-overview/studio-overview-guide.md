---
title: "Studio Overview Chapter Guide"
description: "What Studio is, when to use what, and how to pick the right onboarding path."
url: /studio/studio-overview-guide
---

# Studio Overview Chapter Guide

## Overview

What Studio is, when to use what, and how to pick the right setup path.

> **Bringing your existing React app + component library into Studio?** Your components work as-is: **no rebuild, no refactor**. Studio registers what you already ship. Jump to [**Two ways to start: the Enterprise path**](/docs/studio/choosing-your-studio-setup-path#enterprise-bring-your-own-components-first) for the explicit 9-step flow, which runs from your existing components and content types, through CLI registration, SDK install, the Canvas route and the catch-all route, to Sections, Templates and Deploy. Then follow the [enterprise-day-one recipe](/docs/studio/enterprise-setup-from-install-to-first-authored-page).

## On this chapter

-   [What is Studio?](/docs/studio/contentstack-studio-overview). Three capabilities in one: a visual page builder, a real-data preview surface for composed components, and an on-the-fly editor for layouts / components / look-and-feel. Complements your stack. Doesn't replace it.
-   [The development flow: with and without Studio](/docs/studio/the-development-flow-with-and-without-studio). Side-by-side comparison of the dev flow before and after introducing Studio, across four stages: setup, building components, building sections, and building templates.
-   [The composability ladder](/docs/studio/the-composability-ladder). The four-rung conceptual model (Component, Section, Section-in-Slot, Template, in that order) and how slot props + Section Slots compose up the stack. Read this once to make the rest of the docs click into a single picture.
-   [The Studio page](/docs/studio/standard-studio-page-anatomy). Standard anatomy of a Studio page: one Template plus three Sections (Hero, Body, Related). A migration walkthrough from a hand-coded blog route into Studio's Template + Sections model, with the two Section shapes (Simple, List) and the slot vocabulary explained in order.
-   [Two ways to start](/docs/studio/choosing-your-studio-setup-path). Pick the setup path that fits: **Enterprise** (bring your own component library, using the explicit 9-step flow that runs from your existing components and content types, through CLI registration, SDK install, the Canvas route and the catch-all route, to Sections, Templates and Deploy) or **Quickstart** (use Studio defaults first).
-   [When to use Templates vs Sections](/docs/studio/choosing-between-templates-and-sections). Decision tree for choosing between full-page Templates and reusable Sections.

## See also: Getting Started

-   **[Design a component library that composes, not sprawls](/docs/studio/composable-primitives)**: Foundational pattern doc covering what to register. Lives in Getting Started so it's visible before you install anything.

## See also

-   [Docs home](/docs/studio/studio-documentation-home)
-   [Setup](/docs/studio/setup-chapter-guide): once you've picked a path, start installing.
