---
title: "Recipes Chapter Guide"
description: "End-to-end walkthroughs: install, register, author, deploy."
url: /studio/recipes-guide
uid: blt12eb13f9e8f2d57f
---

# Recipes Chapter Guide

## Recipes

End-to-end walkthroughs: install, register, author, deploy.

## Pick a recipe by what you're adding Studio TO

Studio fits four different page-kinds differently. Pick the recipe that matches your situation:

| You're adding Studio to | Page kind | Recipe |
| --- | --- | --- |
| **A new site** (greenfield, no existing app, no existing content model) | Anything | [Zero to first page](/docs/studio/quickstart-set-up-studio-in-your-app), then [Enterprise day one](/docs/studio/enterprise-setup-from-install-to-first-authored-page) |
| **An existing CMS-driven site** with content-driven page types (blog, products) | Content-driven (1 entry per URL) | [Marketing site walkthrough](/docs/studio/marketing-site-walkthrough-with-four-end-to-end-scenarios): Connected templates do the work |
| **An existing code-driven app** that already owns its routes | Mixed (you don't want Studio to take over routes) | [Partial adoption recipe](/docs/studio/partial-adoption-coexisting-with-a-code-driven-app): catch-all serves URLs not claimed by code routes. Full-swap migration when ready |
| **A code-owned page** (PDP, checkout, account) where you want ONE editable region | Functional / evergreen | [Embed composition in code-page](/docs/studio/embedding-a-composition-in-a-code-owned-page): render a known composition by compositionUid inline |

**The recipes below organize by lifecycle** (start, migrate, real-world, section patterns), but the table above is the right way to start: pick by the SHAPE of what you're adding Studio to.

## On this chapter

### Start here

-   **[Zero to first page](/docs/studio/quickstart-set-up-studio-in-your-app)**. From absolute zero (no stack, no Studio, no app) to a working composition at a real URL in ~30 minutes. The recommended starting point for any new user.
-   [First page in 5 minutes](/docs/studio/quickstart-with-llm-skills). Evaluator quickstart: from "Studio installed" to "page rendered" using default components.
-   [Enterprise day one](/docs/studio/enterprise-setup-from-install-to-first-authored-page). Full install-to-authored-page recipe for teams shipping Studio with their own component library.

### Partial adoption (existing code-driven app)

-   [Partial adoption on a code-driven app](/docs/studio/partial-adoption-coexisting-with-a-code-driven-app). Catch-all route + code-route precedence, pick patterns by page-kind. **Start here if your app already owns its routes.**
-   [Embed a Studio-managed region in a code-owned page](/docs/studio/embedding-a-composition-in-a-code-owned-page). Bounded editable zones inside an otherwise code-owned page via compositionUid.

### Adding Studio to an existing site

-   [Migrate hand-coded pages to Studio](/docs/studio/migrating-hand-coded-pages-to-studio). Per-route incremental migration playbook for routes built in hand-coded JSX. Paired with the migrate-page-to-studio skill.
-   [Brownfield migration playbook: bringing list-shaped Sections into Studio](/docs/studio/brownfield-migration-playbook). Codified 5-phase process for migrating production list-shaped Sections (carousels, card grids) without shipping visual drift. Paired with adapt-collection-component + verify-visual-parity.
-   [Hide cookie banners, chat widgets, and marketing tags inside the canvas](/docs/studio/detect-the-studio-canvas). Detect canvas mode, gate third-party SDK inits, keep GTM tags from firing on author sessions.
-   [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app). Additive recipe for teams already using Contentstack Visual Editor. **Not a migration:** Studio and Visual Editor are separate products that coexist in the same app. VE keeps handling inline field editing. Studio adds page composition on top.

### Real-world walkthroughs

-   [Marketing site walkthrough](/docs/studio/marketing-site-walkthrough-with-four-end-to-end-scenarios). Four end-to-end scenarios on one provisioned stack, each demonstrating a distinct Studio pattern.

### Section patterns

-   [Card grid with slots](/docs/studio/card-grid-with-slots). The list-plus-slot pattern: one section owns the grid, another owns the card frame with named slots.
-   [Multi-schema section](/docs/studio/multi-schema-sections-for-multiple-content-types). One Featured Card section that auto-binds across blog posts, products, and events via a shared Global Field.
-   [Overrides without forking](/docs/studio/per-page-component-overrides-without-forking). Use Expose Section Props to allow per-page content overrides while locking structure.

### Compose from primitives

> Read [Design a component library that composes, not sprawls](/docs/studio/composable-primitives) first: these four recipes all use the same 10 registered primitives (4 atoms + 6 layouts).

-   [Hero from primitives](/docs/studio/hero-from-primitives). Five Hero variants (centered, split, full-bleed, thumbnail-on-top, two-CTA) built from the same primitives without a code change per variant.
-   [Feature grid from primitives](/docs/studio/feature-grid-from-primitives). Three-column feature callouts with icon + heading + description per card. The Grid becomes a Repeater over a Reference-multi field.
-   [Testimonial cards from primitives](/docs/studio/testimonial-cards-from-primitives). Testimonial row with quote + avatar + author name + role per card.
-   [Pricing tiles from primitives](/docs/studio/pricing-tiles-from-primitives). Three-tier pricing table with feature lists and per-tier CTAs, highlighted tier driven by a Condition Block.

## See also

-   [Docs home](/docs/studio/studio-documentation-home)
-   [Bring Your Own Components](/docs/studio/bring-your-own-components-guide): register your components first
-   [Composition concepts](/docs/studio/composition-concepts): the model these recipes apply
-   [Templates](/docs/studio/templates-guide): Connected templates
-   [Sections](/docs/studio/sections-guide): reusable blocks used by these recipes
