---
title: "Freeform Templates"
description: "Learn how to create and configure Freeform templates in Contentstack Studio for one-off layouts that pull data via Pinned Entries and Pinned Queries."
url: /studio/freeform-templates
uid: blt6a9009545c994fb3
---

# Freeform Templates

## Freeform Templates

A **Freeform template** is a template in Studio that isn't connected to any content type. Use it for one-off templates: landing templates, campaign templates, "About us", "Contact us".

You can still drop sections and components, and pull data via [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component) and [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries). What you can't do is bind to a single entry, because there isn't one.

## What Freeform Gives You

-   **Speed.** Create a template without modeling a content type first.
-   **Independence.** Useful for templates that don't fit your content model, or where the marketing team needs to move ahead of schema work.
-   **Same canvas, same components, same sections.** The authoring experience is identical to a Connected template.
-   **Pinned data.** Pull specific entries or query results onto the template without owning a "the entry for this template" relationship.

## When to Choose Freeform vs. Connected

| Use Freeform when… | Use Connected when… |
| --- | --- |
| The template is one-off and won't repeat | The template is one of many entries of the same shape |
| You don't have a content type modelled yet | You already have a CT for this content |
| Content is pulled from several places | Content is driven by exactly one entry per URL |
| Authors want layout control more than data structure | Authors want consistent rendering of structured data |

## What the Canvas Looks Like

A Freeform template's top bar is subtly different from a Connected template's:

-   A **FREEFORM MODE** badge replaces the content type chip
-   **PREVIEW COMPOSITION:** label instead of **PREVIEW ENTRY:**, because the preview drives off the composition itself, not an entry

![New Template modal showing the Freeform option labelled "Static Template" — the same composition is called "Freeform" on the canvas badge once created.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b32530e9fc94e45/aba788501e0326fa7969e471/template-creation-modal-freeform.png)

Otherwise the canvas behaves the same: same palette, same right-panel tabs. When nothing is selected on the canvas, the Data tab shows three template-level sections: **Additional Entry Data**, **Queries**, and **External Data**. (These sections aren't a separate tab; they live inside the Data tab.) See [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data).

> **Terminology note:** Studio's "New Template" modal labels the Freeform option as **"Static Template"** in the create flow. Once created, the same template's canvas header shows the **"FREEFORM MODE"** badge. Both labels refer to the same thing; this doc set calls it Freeform throughout, matching the canvas badge that's the more visible surface for authors.

![Freeform template canvas for "Spring 2026 Landing" showing the composed layout: hero section, feature section, and two testimonial quote cards. Left panel shows Sections expanded with Card Grid, Featured Card, Hero Strip thumbnails. Top bar shows the FREEFORM MODE badge and PREVIEW COMPOSITION label.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2bf05ef2e7619151/cce49a7b6fa3864f96459503/freeform-template-canvas.png)

## URL Generation

Studio auto-generates a default URL for every Freeform template:

```
/<project-composition-ct-uid>/<composition-uid>
```

Studio substitutes the actual project composition content-type UID and composition UID at creation time; these are concrete values in the stored URL, not {{...}} template variables. The only Freeform-specific template variable available for hand-editing is {{composition\_uid}}. This URL identifies the **composition itself**, not an entry. You can edit it from the canvas navbar's pencil icon.

![Edit URL modal for a Freeform Landing template — only the {{composition_uid}} chip is offered; no entry-related variables are available because Freeform has no connected entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf61a0b22ba5e7f84/3fa074ca2bfee99f211d0fa0/url-pattern-freeform.png)

Notice the modal offers **only one** insert chip: {{composition\_uid}}. Studio deliberately does not show {{entry.title}}, {{entry.url}}, or any other entry-related variable here because a Freeform template is not bound to any entry. The URL pattern can include {{environment}}, {{branch}}, {{content\_type\_uid}} typed by hand, but anything that tries to read an entry field fails to resolve at render time. ({{locale}} is accepted by the pattern engine but **avoid using it**: carry locale via your routing layer and the SDK's locale query option, see [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale).)

## URL Variables Available in Freeform

| Variable | Available? |
| --- | --- |
| {{entry.<field>}} | ❌: there's no entry |
| {{entry.<reference>.<field>}} | ❌ |
| {{taxonomy:<uid>}} | ❌ |
| {{environment}} | ✅ |
| {{locale}} | ⚠ accepted by pattern engine, but **avoid**; use routing-layer + SDK locale query option instead for consistency at scale |
| {{branch}} | ✅ |
| {{content\_type\_uid}} | ✅ |
| {{composition\_uid}} | ✅: the only entry-style variable Freeform supports |

The Insert chip row in the Edit URL modal shows only {{composition\_uid}} for Freeform. Other context variables can be typed manually.

## Where Freeform Templates Render

Same as Connected templates: at the URL the composition's pattern resolves to, on a route in your site that mounts <StudioComponent />.

![Request flow: visitor hits a URL, your route catches it, StudioComponent finds the Freeform composition with that URL and renders the layout.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am28458a67d1437720/c24735c12ef665282bc5ed11/freeform-where-render-flow.png)

If the template doesn't load, check that the route exists, that it mounts <StudioComponent />, and that the composition's URL pattern matches the route's path shape.

## Getting Data onto a Freeform Template

Three sources, all available:

| Source | When to use |
| --- | --- |
| **[Pinned Entries](/docs/studio/pin-specific-entries-to-a-component)** | Pin specific entries, e.g. a hero entry, a featured product, a testimonial. Bindings reference them by their pinned slot. |
| **[Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries)** | Pin a query result for a Repeater to iterate. |
| **[Component default data](/docs/studio/set-component-default-data)** | Your custom components ship with sensible defaults. Useful for purely presentational content. |

## Next

-   [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component)
-   [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries)
-   [The Data tab: Additional Entry Data, Queries, External Data](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data)
-   [Recipe: Freeform landing template](/docs/studio/freeform-landing-page-template)
