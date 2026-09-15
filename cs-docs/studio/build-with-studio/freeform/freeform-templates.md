---
title: "Freeform templates"
description: "Learn how to create and configure Freeform templates in Contentstack Studio for one-off layouts that pull data via Pinned Entries and Pinned Queries."
url: /studio/freeform-templates
uid: blt6a9009545c994fb3
---

# Freeform templates

## Freeform templates

A **Freeform template** is a template in Studio that isn't connected to any content type. Use it for one-off templates: landing templates, campaign templates, "About us", "Contact us".

You can still drop sections and components, and pull data via [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component) and [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries). What you can't do is bind to a single entry. There isn't one.

## What Freeform returns

-   **Speed.** Create a template without modeling a content type first.
-   **Independence.** Useful for templates that don't fit your content model, or where the marketing team needs to move ahead of schema work.
-   **Same canvas, same components, same sections.** The authoring experience is identical to a Connected template.
-   **Pinned data.** Pull specific entries or query results onto the template without owning a "the entry for this template" relationship.

## When to use Freeform vs Connected

| Use Freeform when | Use Connected when |
| --- | --- |
| The template is one-off and won't repeat | The template is one of many entries of the same shape |
| You don't have a content type modelled yet | You already have a CT for this content |
| Content is pulled from several places | Content is driven by exactly one entry per URL |
| Authors want layout control more than data structure | Authors want consistent rendering of structured data |

## What the canvas looks like

A Freeform template's top bar is subtly different from a Connected template's:

-   A **FREEFORM MODE** badge replaces the content type chip
-   **PREVIEW COMPOSITION:** label instead of **PREVIEW ENTRY:** (the preview drives off the composition itself, not an entry)

> **Terminology note:** Studio's "New Template" modal labels the Freeform option as **"Static Template"** in the create flow. Once created, the same template's canvas header shows the **"FREEFORM MODE"** badge. Both labels refer to the same thing. This doc set calls it Freeform throughout, matching the canvas badge that's the more visible surface for authors.

![New Template modal showing the Freeform option labelled "Static Template". The same composition is called "Freeform" on the canvas badge once created.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b32530e9fc94e45/aba788501e0326fa7969e471/template-creation-modal-freeform.png)

Otherwise the canvas behaves the same: same palette, same right-panel tabs. The Data tab gets three template-level sections (**Additional Entry Data**, **Queries**, and **External Data**) when nothing is selected on the canvas (these sections aren't a separate tab. They live inside the Data tab). See [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data).

## URL generation

Studio auto-generates a default URL for every Freeform template:

```
/<project-composition-ct-uid>/<composition-uid>
```

Studio substitutes the actual project composition content-type UID and composition UID at creation time. These are concrete values in the stored URL, not {{...}} template variables. The only Freeform-specific template variable available for hand-editing is {{composition\_uid}}. This URL identifies the **composition itself**, not an entry. You can edit it from the canvas navbar's pencil icon.

![Edit URL modal for a Freeform Landing template: only the {{composition_uid}} chip is offered. No entry-related variables are available because Freeform has no connected entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf61a0b22ba5e7f84/3fa074ca2bfee99f211d0fa0/url-pattern-freeform.png)

Notice the modal offers **only one** insert chip: {{composition\_uid}}. Studio deliberately does not show {{entry.title}}, {{entry.url}}, or any other entry-related variable here because a Freeform template is not bound to any entry. The URL pattern can include {{content\_type\_uid}} typed manually, but anything that tries to read an entry field will fail to resolve at render time. {{environment}} and {{branch}} are accepted too but inert. They resolve to nothing. ({{locale}} is accepted by the pattern engine but **avoid using it**. Carry locale via your routing layer + the SDK's locale query option, see [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale).) <!-- style-lint: allow -->

## URL variables available in Freeform

| Variable | Available? |
| --- | --- |
| {{entry.<field>}} | No, there's no entry |
| {{entry.<reference>.<field>}} | No |
| {{taxonomy:<uid>}} | No |
| {{environment}} | No, accepted but inert (resolves to nothing) |
| {{locale}} | Accepted by the pattern engine, but **avoid**: use your routing layer and the SDK locale query option instead |
| {{branch}} | No, accepted but inert (resolves to nothing) |
| {{content\_type\_uid}} | Yes |
| {{composition\_uid}} | Yes, the only entry-style variable Freeform supports |

The Insert chip row in the Edit URL modal shows only {{composition\_uid}} for Freeform. Other context variables can be typed manually.

## Where Freeform templates render

Same as Connected templates: at the URL the composition's pattern resolves to, on a route in your site that mounts <StudioComponent />.

![Request flow: visitor hits a URL, your route catches it, StudioComponent finds the Freeform composition with that URL and renders the layout.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8dcc8606a55a7622/a066208b4d33e2da4fabdeeb/freeform-where-render-flow.png)

If the template doesn't load, check that the route exists, that it mounts <StudioComponent />, and that the composition's URL pattern matches the route's path shape.

## Getting data onto a Freeform template

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
