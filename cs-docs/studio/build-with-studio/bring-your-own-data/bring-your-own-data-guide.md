---
title: "Bring Your Own Data Chapter Guide"
description: "Render a Studio composition against data you already hold, and pass your own data into a slot so the components dropped inside it can bind to it."
url: /studio/bring-your-own-data-guide
uid: blta336b3bdfa88165c
---

# Bring Your Own Data Chapter Guide

## Bring Your Own Data

Render a Studio composition against data you already hold, and pass your own data into a slot so the components dropped inside it can bind to it.

## On this chapter

-   [Start here: Chapter overview](/docs/studio/bring-your-own-data): The two "bring your own data" surfaces and when to use each.

### Rendering with your own data

-   [StudioComposition](/docs/studio/studio-composition-component): Render a composition (a full page, or a section as the root) against a context object you supply, no SDK data fetch, no hook. Works in client-side rendering (CSR) and server-side rendering (SSR).

### Passing data into slots

-   [Slot data](/docs/studio/slot-data): Attach data to a slot prop so the components an author drops into it can bind it through component\_props, with the nearest slot winning.

### When something breaks

-   [Troubleshooting](/docs/studio/troubleshoot-bring-your-own-data): Every error these two surfaces throw, what causes it, and the fix, plus the silent failures (blank bound nodes, empty gaps, keys missing from the picker).

## See also

-   [Bring your own components](/docs/studio/bring-your-own-components-guide): Register the components a composition is built from.
-   [Component Default Data](/docs/studio/set-component-default-data): The data prop on <StudioComponent />, the other way external data enters a composition.
-   [Docs home](/docs/studio/studio-documentation-home)
