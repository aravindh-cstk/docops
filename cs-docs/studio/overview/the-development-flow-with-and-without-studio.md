---
title: "The Development Flow With and Without Studio"
description: "Understand how Studio fits into your development workflow by comparing the page-building process with and without Studio, step by step."
url: /studio/the-development-flow-with-and-without-studio
uid: blt8ca80856303032a2
---

# The Development Flow With and Without Studio

## The Development Flow With and Without Studio

Six steps end-to-end. The first two ship through git, PR, and a deploy (your normal SDLC). The next three ship through Studio's publish — same React, same CMS, no rebuild. Below: where each step lives, who owns it, and what you don't have to repeat per page.

![Vertical five-step lifecycle. CODE phase (steps 1-2, purple): build the React component, register it with Studio — ships through git/PR/deploy, once per component. STUDIO phase (steps 3-5, teal): compose a Section by binding the component to a Content Type schema, compose a Template by dragging Sections and setting a URL pattern, publish — ships through Studio's publish, no rebuild. Outcome: visitors hit the URL and the Template renders the page from real CMS data.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2ca4a6427e015bbf/05891e038eec596a08da8ec9/overview-dev-flow-lifecycle.svg)

## What you do, side-by-side

| Step | Without Studio | With Studio |
| --- | --- | --- |
| **Setup** | App shell + Delivery SDK | App shell + Delivery SDK + Studio SDK + canvas route + ONE catch-all template route (handles every URL) |
| **Build components** | Author + Storybook (isolated, fixtures) | Author + Storybook + **register in Studio** (1-liner or via CLI) |
| **Compose multiple components** | In code, per page | **In Studio as Sections** — reusable, previewable with real data |
| **Build a page** | Hand-code layout + data-fetch + prop-mapping per page | Build a **Template** once; drop Sections; bind to fields; done |
| **Change page layout** | Code change → PR → redeploy | Author in Studio → publish |
| **Re-map a prop to a different CMS field** | Code change → PR → redeploy | Click the binding → pick a different field → publish |
| **Preview a composed page with real data** | Build + deploy + visit URL | Open the Section/Template canvas, pick a preview entry |
| **Launch a new content type page** | New route + new layout file + new fetcher | Drop a new Template against the content type, drop Sections |

## What stays the same

Studio isn't trying to take over your stack:

-   **Your components stay in your repo** — same build, same bundler, same deploy
-   **Your design system stays sovereign** — Studio uses your components, tokens, breakpoints; not its defaults
-   **Contentstack stays Contentstack** — entries, content types, locales, publishing, branches, webhooks all work the same way
-   **Storybook still does its job** — isolated component preview is still its lane
-   **Your existing pages keep working** — Studio is additive; you can adopt it Section-by-Section, Template-by-Template

## When you'd still use code (and why that's fine)

Studio is for **layout + composition + binding**. Some things are still better done in code:

-   Component implementation itself (Studio doesn't write components for you — it composes them)
-   App-level concerns (auth, analytics, error boundaries) — Studio handles page routing via Template URL patterns + a catch-all, but the surrounding app shell stays in code
-   One-off complex logic inside a component (data transforms, animations, integrations)
-   Server-side data fetching strategy (Studio supports CSR + SSR but you choose the path)

The right way to think about Studio: the layer above components, the layer below the app shell. Everything above stays code; everything below stays code; the _composition_ in between becomes data.

## Two paths to onboard

Depending on where you are, pick the onboarding path that matches:

-   **[Enterprise / bringing your own components first](/docs/studio/choosing-your-studio-setup-path#enterprise--bring-your-own-components-first)** — for teams shipping with their own design system
-   **[Just exploring](/docs/studio/choosing-your-studio-setup-path#just-exploring)** — for evaluators using Studio's defaults to see the shape

Both lead to the same destination: a Studio-powered app that composes your components against your CMS data, previewable at every step.

## Next

-   **[Two ways to start](/docs/studio/choosing-your-studio-setup-path)** — pick your onboarding path
-   **Set up Studio** — the install + configure walk-through
-   **Register your components** — the first step after install
