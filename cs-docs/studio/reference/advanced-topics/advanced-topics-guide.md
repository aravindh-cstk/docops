---
title: "Advanced Topics Chapter Guide"
description: "This chapter is the post-foundation material. Once you have Studio installed, components registered, sections + templates authored, and at least one route."
url: /studio/advanced-topics-guide
---

# Advanced Topics Chapter Guide

## Advanced topics: production, scale, edges

This chapter is the **post-foundation** material. Once you have Studio installed, components registered, sections + templates authored, and at least one route in production, the questions shift from "how do I build this" to "how do I run this at scale without surprises."

These are the seven topics that come up once Studio is real in production. Each page is a focused playbook: the model, the patterns, the decision points, the common pitfalls. Read them in any order. Pick the one that matches the pain you're feeling.

| Topic | Read this when |
| --- | --- |
| **[Performance + bundle-size playbook](/docs/studio/performance-and-bundle-size-optimization)** | Studio added measurable weight to your bundle and you want to claw it back. |
| **[Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale)** | You're shipping more than 2-3 locales and the default-locale story isn't enough. |
| **[Variant aliases (deep dive)](/docs/studio/variant-aliases-deep-dive)** | You want A/B tests, personalisation, or seasonal page variants without forking templates. |
| **[SSR streaming patterns](/docs/studio/ssr-streaming-patterns)** | You're on Next App Router, Remix defer, or Astro islands and Studio needs to play nicely with streaming. |
| **[Editorial workflow at scale](/docs/studio/managing-editorial-workflows-at-scale)** | More than one author. Approvals, scheduled publishes, environment promotion. |
| **[Testing strategies](/docs/studio/testing-strategies-for-studio-rendered-pages)** | You need unit + integration + visual regression coverage for Studio-rendered pages. |
| **[Production deployment edges](/docs/studio/production-deployment-edge-cases)** | ISR/SSG, CDN cache invalidation, edge runtime, monorepo patterns. |

None of these are needed for a working install. Skip the chapter entirely until you're ready to scale. Coming back when you hit the matching pain is the right time.

## Where these came from

Pro users running Studio in production hit a small, finite set of edges. This chapter is the consolidation of those edges, written deliberately AFTER the foundational chapters so we know what's standard and what's edge. Each page picks a default: there's a recommended pattern + a list of patterns to avoid + an honest note on what's still unsolved.

When something here turns out to be wrong or outdated, file an issue against the docs repo. These pages get the most direct customer feedback because they're the ones pros read.

## See also

-   [Recipes](/docs/studio/recipes-guide): build walkthroughs (foundational)
-   [Reference](/docs/studio/reference-guide): URL variables, matching rules, feature flags, best practices (lookup)
-   [Setup](/docs/studio/setup-chapter-guide): install + project configuration (foundational)
