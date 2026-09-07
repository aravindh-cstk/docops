---
title: "Composition Concepts"
description: "Learn what a composition is in Contentstack Studio, the difference between templates and sections, and how compositions render in your app."
url: /studio/composition-concepts
uid: blt7c60815ca3b85bf5
---

# Composition Concepts

## Composition Concepts

> **Two audiences on this page.** **Content authors** — read the two sentences below then jump to For Authors → Working with Sections or the Glossary. The React / SDK content in the callouts is for engineers; you don't need it to compose pages. **Developers** — keep reading. The callouts explain how the composition actually lands in your app.

Everything you build in Studio is a **composition** — a saved layout tree of components and the data bindings that drive them. Templates are compositions of type page; Sections are compositions of type section. If you're composing pages in Studio, that's the whole idea.

> **For engineers — headless principle.** A composition lives in Studio + Contentstack. **It does not serve HTML on its own.** Your app's framework still serves every page — Studio just supplies the composition spec, components, and bindings via csStudio.fetchCompositionData(...). A composition with url: "/blog/post-1" exists in the CMS, but visitors hitting /blog/post-1 only see content if your app has a route that receives the request and renders <StudioComponent specOptions={...} />. See [Wire template preview routes](/docs/studio/template-preview-routes) — by default, ONE catch-all route handles every URL.

Compositions come in two flavors:

| Flavor | What it is | URL | Tied to an entry? |
| --- | --- | --- | --- |
| **Template** | A full page connected to a content type | Yes, derived from the content type | Yes |
| **Section** | A reusable block dropped inside a template | None — previews on the project's [canvas URL](/docs/studio/canvas-url) | Optional, via a _linked schema_ |

You pick the flavor when you create a composition. It decides where the composition can be used, what URL it gets, and what data it can bind to.

> **Three-part mental model.** Any CMS-driven page does three things, and Studio's primitives map one-to-one:
> 
> 1.  **Fetch the data** → the **Template** (URL-bound, tied to a Content Type); plus optional pinned entries or saved queries declared on the composition.
> 2.  **Iterate over the schema** → a **List Section** — a Section whose _root_ is a Repeater. Used whenever a field holds N items (reference field, modular blocks field, or group with multiple: true).
> 3.  **Bind fields to component props** → a **Simple Section** — a Section with no root Repeater. Maps one schema field to one component prop.
> 
> Fetch → iterate → bind. Every composition is a combination of these three. Studio's UI has only "+ New Section" and "+ New Template" — you get List vs Simple by what you drop at the root.

## The composition list

Every Studio project has a Compositions list with two tabs.

![Compositions list with Templates and Sections tabs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb51b9929ae9fbfd4/b79d3bf01cea2e05b78db40c/templates-list.png)

-   **Templates** tab — pages connected to a content type.
-   **Sections** tab — reusable blocks.

The button at the top changes label per tab: **\+ New Template** vs **\+ New Section**.

## Where compositions render

| Flavor | Rendered by | At what URL |
| --- | --- | --- |
| Template | <StudioComponent /> | The catch-all route on your site — default: ONE route handles every URL (app/\[\[...slug\]\]/page.tsx for Next.js, <Route path="\*"> for React Router). Studio's CDA query resolves which template matches each URL. |
| Section | <StudioCanvas /> (Studio iframe) AND embedded inside a template when dropped on a page | Sections have no URL of their own — they live wherever the template that uses them appears |

## What else is in this chapter

The composition concept underlies the whole canvas. Six more pages cover canvas-wide topics that aren't specific to templates or sections:

| Page | Covers |
| --- | --- |
| [Canvas URL](/docs/studio/canvas-url) | The project-level path used for section preview |
| [CMS Binding](/docs/studio/bind-cms-content-to-studio-components) | How component props pull data from Contentstack instead of literal values |
| [Component Data tab](/docs/studio/the-component-data-tab) | The per-element Data/Settings panel and pinning entries for binding |
| [Design Panel](/docs/studio/style-components-with-the-design-panel) | Right-panel styling controls — colors, spacing, typography, breakpoints |
| [Layers](/docs/studio/navigate-and-use-the-layers-tab) | The left-panel layer tree — navigate and rename composition structure |
| [Save vs Deploy](/docs/studio/save-vs-deploy-a-composition) | The Save → Deploy → published cycle |

## Next

-   [Canvas URL](/docs/studio/canvas-url) — the project-level path used for section preview
-   Templates
-   Sections
