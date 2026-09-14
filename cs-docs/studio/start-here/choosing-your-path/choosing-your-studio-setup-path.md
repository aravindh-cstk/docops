---
title: "Two ways to start: an approach comparison"
description: "Compare the Enterprise and Quickstart setup paths in Contentstack Studio to choose the right starting point for your project or evaluation."
url: /studio/choosing-your-studio-setup-path
uid: blt80d3f8dc34928c4d
---

# Two ways to start: an approach comparison

## Two ways to start: an approach comparison

> **Want to build?** Go to **[Getting Started](/docs/studio/getting-started-with-studio)**. Pick a role, follow the numbered Quickstarts. This page is a **conceptual comparison** of the two possible approaches (Enterprise vs Quickstart) for readers deciding which one their team should follow, not a step-by-step how-to.

Pick the path that matches your situation.

> **Before you pick a path: [check that Studio is enabled for your organisation](/docs/studio/check-studio-access).** 10-second app-switcher check. Both paths below assume access is turned on.

## Enterprise: bring your own components first

You already have a React component library (Storybook, design system package, Pattern Lab, etc.) and you want authors composing against **your** components, not Studio's defaults.

> **Your existing components work as-is.** Studio doesn't ask you to rebuild, refactor, or re-shape anything you already ship. The same <Button>, <Card>, <Hero> you use in production today become authored building blocks in Studio. Nothing more than a schema declaration is added. Every prop, every state, every design token, every test remains functional. Same React. Same design system. Same repository.

**The flow (nine steps, roughly in this order):**

1.  **Your existing React components**: **no changes needed, no rebuild required.** Studio wraps the components you already ship. You register them. You don't rewrite them.
2.  **Your Contentstack content types**: can be built **before or after** you register components. The ordering is flexible. If you already have a blog\_post or product CT with entries, you're set.
3.  **Register components via the [Studio CLI](/docs/studio/studio-cli)**: the Studio CLI (csdx) is a scriptable command-line tool that scans your codebase for React components and publishes their schemas to Studio so authors can drag them in the canvas. Two commands do the work: csdx studio:component:sync (one-time scan + upload) and csdx studio:component:register (per-component registration). Full walkthrough in [Studio CLI](/docs/studio/studio-cli).
4.  **Import the SDKs in your app**: @contentstack/delivery-sdk, @contentstack/live-preview-utils, @contentstack/studio-react. Wire studioSdk.init at the app shell. See [Setup](/docs/studio/setup-chapter-guide).
5.  **Expose the Canvas route**: a dedicated route (e.g. /canvas) mounting <StudioCanvas />. This is the route Studio's iframe loads while authors are **building and previewing Sections** with real data. Configure the same path as the project's **Canvas URL** in Studio settings. See [Section preview route](/docs/studio/section-preview-route).
6.  **Expose the catch-all template route**: one additional route (app/\[\[...slug\]\]/page.tsx for Next.js App Router, <Route path="\*"> for React Router) mounting <StudioComponent />. This is what **visitors hit at runtime**. Studio resolves every URL to the right composition via a Content Delivery API (CDA) query, so no per-template route registration is needed. See [Template preview routes](/docs/studio/template-preview-routes).
7.  **Create Sections**: reusable building blocks (Hero, Card Grid, Testimonial Strip) authored in Studio using your registered components. The Canvas route (step 5) is what makes this authoring surface work. See [Sections overview](/docs/studio/build-and-use-sections).
8.  **Create Templates**: assemble Sections into pages. A Template binds to a content type and renders every entry of that CT at the derived URL pattern (/blog/{{entry.slug}}). The catch-all route (step 6) is what renders these to visitors. See [Templates overview](/docs/studio/templates-overview).
9.  **Deploy**: Save is not enough. Save persists the composition in draft. **Deploy** publishes it through your stack's publishing workflow to the target environment, which is when visitors actually see it. Do this per composition (or in bulk from the Compositions list) once a Section or Template is ready. See [Save vs Deploy](/docs/studio/save-vs-deploy-a-composition).

**Ordering notes:**

-   Steps 1 and 2 can happen in either order (or in parallel). Studio doesn't care which came first.
-   Steps 3 and 4 are typically done together: register components at the same time you install the SDKs.
-   Steps 5 and 6 are **two separate routes serving two different purposes**: Canvas route (/canvas + <StudioCanvas />) powers Section authoring inside Studio's iframe. Catch-all route (\[\[...slug\]\] + <StudioComponent />) powers runtime rendering for visitors. Both are needed for the full loop.
-   Steps 7 and 8 are strict order: you need Sections before you can compose them into Templates.
-   Step 9 is the release gate: a composition sitting in draft never reaches visitors, no matter how many times you clicked Save.

Skipping step 3 (registration) means authors compose against Studio's neutral defaults instead of your design system. You'll re-do the work later. Skipping step 5 (Canvas route) means the Section canvas inside Studio loads blank. Skipping step 6 (catch-all) means Templates never render at their URL. Skipping step 9 (Deploy) means the page you authored is invisible in production. Save keeps the draft, Deploy ships it.

**Recipe:** [**enterprise-day-one**](/docs/studio/enterprise-setup-from-install-to-first-authored-page) covers all nine steps, from install to the first authored page (~30 minutes).

## Just exploring

You're evaluating Studio, building a demo, or running a proof of concept.

1.  **[Set up Studio](/docs/studio/setup-chapter-guide)**: create a project. No canvas-app required yet.
2.  **[Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app)**: author compositions directly against Studio's hosted iframe with no Canvas URL configured. Studio's default components are the palette. Deploy is disabled but everything else (authoring, binding to CMS data, saving) works.
3.  **[First page in 5 minutes](/docs/studio/quickstart-with-llm-skills)**: when you're ready, wire a canvas-app and template preview route to see a real page render.

You can graduate to the enterprise path anytime: registering your components doesn't remove Studio's defaults. Both coexist in the palette. Compositions you build in Playground remain functional once you switch to a Website Canvas (your own app).

## How the docs treat both audiences

Every page has an audience tag at the top:

-   **both**: works for either path
-   **author**: content-authoring focused
-   **developer**: code-focused

Use the audience tag (or the table of contents) to find the right page for what you're doing.

## Next

-   [Set up Studio](/docs/studio/setup-chapter-guide)
-   [Bring your own components](/docs/studio/bring-your-own-components)
