---
title: "The Development Flow With and Without Studio"
description: "Understand how Studio fits into your development workflow by comparing the page-building process with and without Studio, step by step."
url: /studio/the-development-flow-with-and-without-studio
uid: blt8ca80856303032a2
---

# The Development Flow With and Without Studio

## How a page ships: without shipping code.

The Lifecycle

Six steps. The first two ship through git, PR, and a deploy (your normal SDLC). The next three ship through Studio's publish: same React, same CMS, no rebuild. Below: where each step lives, who owns it, and what you don't have to repeat per page.

![Vertical five-step lifecycle. CODE phase (steps 1-2, purple): build the React component, register it with Studio, ships through git/PR/deploy, once per component. STUDIO phase (steps 3-5, teal): compose a Section by binding the component to a Content Type schema, compose a Template by dragging Sections and setting a URL pattern, publish, ships through Studio](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdc516f9362bf94e6/d364188e866b43188188402f/overview-dev-flow-lifecycle.png)

## The engineering lifecycle: side by side

The Section / Template model changes what each step of building a page looks like. Without Studio, every page's layout, fetch, and prop-mapping is hand-wired in code. Every layout change ships as a code change. With Studio, two new steps (**build Sections** and **build Templates**) turn a page into a composition that authors can rearrange without a deploy.

![Development flow without Studio: three stacked steps. Setup (app shell + delivery SDK), Build components (author + Storybook), Build pages per page (hand-wired layout + data fetch + prop mapping). Every layout or field-rename change requires a code change, PR, and redeploy.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5036df381bc4617d/45a3ecc08a29730ce879ead7/overview-dev-flow-without-studio.png) ![Development flow with Studio: four stacked steps. Setup adds the Studio SDK plus a canvas route and a single catch-all template route. Build components is unchanged plus a one-line register call. Two new Studio-managed steps follow: build Sections (compose multiple components, bind props to CMS fields, preview live) and build Templates (drop Sections onto a content-type-bound template). Layout, Section swaps, and rebindings become no-code.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame4d4a996acc1ca8b/2521331fce521160d458927e/overview-dev-flow-with-studio.png)

## The per-page flow: before / after

Once your team's engineering lifecycle is in place (above), every individual page moves through this before / after, a two-column decomposition of what a developer actually does per page, with the code that ships in each column.

![Two-column comparison of the per-page flow. TODAY, WITHOUT STUDIO: five numbered steps (Content in CMS, Fetch via APIs, Compose page in code, Deploy, Page rendered) alongside a dark code-editor panel showing a hand-wired landing.tsx with hero, feature grid, and CTA. Every layout change loops through git, then PR, then continuous integration (CI), then deploy. WITH CONTENTSTACK STUDIO: six numbered steps (Content in CMS, Connect Studio SDK, Compose page in Studio, Preview, Publish, Renders automatically) alongside a rendered Studio-canvas mockup showing Hero and Feature Grid tiles both marked](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am78907fdac0d0d500/85dd5349da08251df2c0258c/overview-dev-flow-comparison-steps.png)

For the horizontal one-scan version optimised for first-touch readers, see [Where Studio fits in your day-to-day flow](/docs/studio/studio-documentation-home#where-studio-fits-in-your-day-to-day-flow) on the docs home.

## What you do, side-by-side

| Step | Without Studio | With Studio |
| --- | --- | --- |
| **Setup** | App shell + Delivery SDK | App shell + Delivery SDK + Studio SDK + canvas route + ONE catch-all template route (handles every URL) |
| **Build components** | Author + Storybook (isolated, fixtures) | Author + Storybook + **register in Studio** (1-liner or via CLI) |
| **Compose multiple components** | In code, per page | **In Studio as Sections** (reusable, previewable with real data) |
| **Build a page** | Hand-code layout + data-fetch + prop-mapping per page | Build a **Template** once, drop Sections, bind to fields, done |
| **Change page layout** | Code change, then PR, then redeploy | Author in Studio, then publish |
| **Re-map a prop to a different CMS field** | Code change, then PR, then redeploy | Click the binding, pick a different field, then publish |
| **Preview a composed page with real data** | Build + deploy + visit URL | Open the Section/Template canvas, pick a preview entry |
| **Launch a new content type page** | New route + new layout file + new fetcher | Drop a new Template against the content type, drop Sections |

## What stays the same

Studio isn't trying to take over your stack:

-   **Your components stay in your repo**: same build, same bundler, same deploy
-   **Your design system stays sovereign**: Studio uses your components, tokens, breakpoints. Not its defaults
-   **Contentstack stays Contentstack**: entries, content types, locales, publishing, branches, webhooks all work the same way
-   **Storybook still does its job**: isolated component preview is still its lane
-   **Your existing pages remain functional**: Studio is additive. You can adopt it Section-by-Section, Template-by-Template

## When you'd still use code (and why that's fine)

Studio is for **layout + composition + binding**. Rendering, data fetching, and business logic are still better done in code:

-   Component implementation itself (Studio doesn't write components for you: it composes them)
-   App-level concerns (auth, analytics, error boundaries). Studio handles page routing via Template URL patterns + a catch-all, but the surrounding app shell stays in code
-   One-off complex logic inside a component (data transformation, animations, integrations)
-   Server-side data fetching strategy (Studio supports CSR + SSR but you choose the path)

The right way to think about Studio: the layer above components, the layer below the app shell. Everything above stays code. Everything below stays code. The composition in between becomes data.

## Two paths to onboard

Depending on where you are, pick the setup path that matches:

-   **[Enterprise / bringing your own components first](/docs/studio/choosing-your-studio-setup-path#enterprise-bring-your-own-components-first)**: for teams shipping with their own design system
-   **[Just exploring](/docs/studio/choosing-your-studio-setup-path#just-exploring)**: for evaluators using Studio's defaults to see the shape

Both lead to the same destination: a Studio-powered app that composes your components against your CMS data, previewable at every step.

## Next

-   **[Two ways to start](/docs/studio/choosing-your-studio-setup-path)**: pick your setup path
-   **[Set up Studio](/docs/studio/setup-overview)**: the install + configure walk-through
-   **[Register your components](/docs/studio/bring-your-own-components-guide)**: the first step after install
