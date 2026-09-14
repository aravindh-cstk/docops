---
title: "Bring Your Own Data Overview"
description: "Most compositions render against Contentstack content, a template connected to a content type, entries resolved by the SDK."
url: /studio/bring-your-own-data
---

# Bring Your Own Data Overview

## Bring your own data

Most compositions render against Contentstack content: a template connected to a content type, entries resolved by the SDK. But sometimes the data lives somewhere else, or you already hold it: one element of a group-field array you fetched yourself, a product record from a commerce backend, a value computed at request time.

Studio returns two ways to bring that data in without round-tripping through the CMS:

| Surface | What it does | Use it when |
| --- | --- | --- |
| **[<StudioComposition />](/docs/studio/studio-composition-component)** | Renders a whole composition (page or standalone section) against a context object you pass in. No SDK data fetch, no hook. | You already hold the data, e.g. you're looping a group array and want to render a section per element. |
| **[Slot data](/docs/studio/slot-data)** | Attaches data to a slot prop so the components dropped inside bind it via component\_props. | A component exposes a slot for authors to fill AND holds data the dropped component needs, e.g. a reusable Hero banner that owns its CTA's destination. |

Both are **render-time only**. They live in your application code, not in the composition's saved spec. Nothing new is stored in Contentstack.

Together with the data prop covered below, that's three props, each scoped to a different part of the tree:

![Three panels: the data prop on StudioComponent scopes to the whole composition and adds a Component Default Data source an author binds. The context prop on StudioComposition scopes to the whole composition and substitutes dataSources.template so existing bindings resolve with no author action. Slot data scopes to one slot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7f40ce70bd6ea49b/b9f2628bd09bfab81303370e/byo-data-three-surfaces.png)

## How they relate to the data prop

There's a third, already-documented way external data enters a composition: the **data prop on <StudioComponent />** (see [Component Default Data](/docs/studio/set-component-default-data)). Keep the three straight:

| API | Scope of the data | Who binds it |
| --- | --- | --- |
| data prop on <StudioComponent /> | The whole composition, surfaces as the **Component Default Data** picker root | Authors, in the canvas |
| context prop on <StudioComposition /> | The whole composition, placed at dataSources.template, so the composition's template bindings resolve against it | Authors (bindings are pre-set in the composition) |
| Slot data | One slot's subtree, surfaces as component\_props for children dropped in that slot | Authors, in the canvas, scoped to the slot |

<StudioComponent /> fetches and renders a composition for a route. <StudioComposition /> renders a composition you hand it the data for. Slot data is a per-slot refinement that works inside either.

## The minimum to get started

Render a section against one element you already hold:

```
import { StudioComposition } from "@contentstack/studio-react";

// `element` is data you fetched yourself — e.g. one item of a group array.
<StudioComposition compositionUid="hero_section" context={element} />
```

Attach data to a slot so whatever an author drops in can bind it:

```
import { Slot } from "@contentstack/studio-react";

// The Hero banner owns `ctaDestination`; the slot carries it to the dropped CTA.
<Slot data={{ destination: ctaDestination }}>{ctaSlot}</Slot>
```

## Next

[StudioComposition](/docs/studio/studio-composition-component)
