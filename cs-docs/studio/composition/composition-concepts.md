---
title: "Composition Concepts"
description: "Learn what a composition is in Contentstack Studio, the difference between templates and sections, and how compositions render in your app."
url: /studio/composition-concepts
---

# Composition Concepts

## Composition Concepts

Everything you build in Studio is a **composition**, a saved layout tree of components and the data bindings that drive them.

> **Headless principle.** A composition lives in Studio + Contentstack. **It does not serve HTML on its own.** Your app's framework still serves every page — Studio supplies the composition spec, components, and bindings via sdk.fetchCompositionData(...). A composition with url: "/blog/post-1" exists in the CMS, but visitors hitting /blog/post-1 only see content if your app has a route that receives the request and renders <StudioComponent specOptions={...} />.

By default, one catch-all route in your app handles every URL that Studio compositions map to. See [Wire template preview routes](/docs/studio/template-preview-routes) for the setup.

Compositions come in two flavors:

| Flavor | What it is | URL | Tied to an entry? |
| --- | --- | --- | --- |
| **Template** | A full page connected to a content type | Yes, derived from the content type | Yes |
| **Section** | A reusable block dropped inside a template | None, previews on the project's [canvas URL](/docs/studio/canvas-url) | Optional, via a _linked schema_ (a Contentstack content type that the section binds its props to, see [Linked schema](/docs/studio/link-content-types-with-linked-schema)) |

You pick the flavor when you create a composition. It decides where the composition can be used, what URL it gets, and what data it can bind to.

## The Composition List

Every Studio project has a Compositions list with two tabs.

![Compositions list with Templates and Sections tabs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb51b9929ae9fbfd4/b79d3bf01cea2e05b78db40c/templates-list.png)

-   **Templates** tab: pages connected to a content type.
-   **Sections** tab: reusable blocks.

The button at the top changes label per tab: **\+ New Template** vs **\+ New Section**.

![Blog Post Connected template canvas (wide view): Hero Strip section at top with "Welcome to Studio: visual composition for content teams" headline and "Get started" CTA button; Card Grid section below shows "Related Blogs" heading with two article cards. Sections and Registered Components shown in left panel; top bar shows the Blog Post content type chip and PREVIEW ENTRY control.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0aa06a0da841e7ec/55bb0e24442bade292359adb/canvas-blog-post-overview.png)

## Where Compositions Render

| Flavor | Rendered by | At what URL |
| --- | --- | --- |
| Template | <StudioComponent /> | The catch-all route on your site, default: ONE route handles every URL (app/\[\[...slug\]\]/page.tsx for Next.js, <Route path="\*"> for React Router). Note: Studio's CDA lookup (which template to render) is separate from your app's route matching — the CDA resolves the composition by URL, then your route renders it. |
| Section | <StudioCanvas /> (Studio iframe) AND embedded inside a template when dropped on a page | Sections have no URL of their own, they live wherever the template that uses them appears |

## What Else Is in This Chapter

The composition concept underlies the whole canvas. Five more pages cover canvas-wide topics that aren't specific to templates or sections:

| Page | Covers |
| --- | --- |
| [Canvas URL](/docs/studio/canvas-url) | The project-level path used for section preview |
| [CMS Binding](/docs/studio/bind-cms-content-to-studio-components) | How component props pull data from Contentstack instead of literal values |
| [Design Panel](/docs/studio/style-components-with-the-design-panel) | Right-panel styling controls, colors, spacing, typography, breakpoints |
| [Layers](/docs/studio/navigate-and-use-the-layers-tab) | The left-panel layer tree, navigate and rename composition structure |
| [Save vs Deploy](/docs/studio/save-vs-deploy-a-composition) | The Save, Deploy, published cycle |

## Next

-   [Canvas URL](/docs/studio/canvas-url): the project-level path used for section preview
-   [Templates](/docs/studio/choosing-between-templates-and-sections)
-   [Sections](/docs/studio/build-and-use-sections)
