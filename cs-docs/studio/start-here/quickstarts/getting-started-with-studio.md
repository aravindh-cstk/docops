---
title: "Getting Started with Studio"
description: "Welcome to Contentstack Studio. Pick your role and follow the path."
url: /studio/getting-started-with-studio
---

# Getting Started with Studio

## Getting Started

> **Before you pick a path: [check that Studio is enabled for your organisation](/docs/studio/check-studio-access).** A 10-second app-switcher check that saves a 20-minute "why is the canvas blank" investigation later. Every path below assumes access is turned on.

Welcome to Contentstack Studio. Pick your role and follow the path.

## I'm a Content Author

You want to edit page content (headlines, images, layouts) without touching code. Studio is where you compose pages and swap content per Template.

**[Author your first page in 5 minutes](/docs/studio/author-your-first-edit)**: use an existing Template, drop a Section, change a headline, publish.

Everything else in "For Content Authors" (in the sidebar) explains the surfaces you'll be authoring on.

## I'm a Developer

You want to hook your React components into Studio so authors can compose them.

> **Before any path: read [Design a component library that composes, not sprawls](/docs/studio/composable-primitives)** (10 min). The foundational pattern that governs what to register: atomic + layout primitives that let content authors compose Heroes, Feature grids, Testimonials, and Pricing tiles without drifting from your design system. Read this once with your designer if you have one. It saves the rewrites. Works with any DS (shadcn/ui + Tailwind, Chakra, MUI, your in-house kit).

Two paths:

**Design-first: you have a Figma / mockup / description (~30 min):** the **[Design-first Quickstart](/docs/studio/quickstart-design-first)** runs Quickstart 1's SDK setup, then hands the design to the decompose-design skill. Chained skills build Sections + Template + first render. Fastest path from a design to a rendered page.

**Fast eval: Let an LLM do it (~15 min):** follow **[Getting started with LLM Skills](/docs/studio/quickstart-with-llm-skills)**: install one script, ask your coding LLM in plain English, done. Studio ships 83 skills that drive setup + registration + composition authoring for you. Works in Claude Code / Cursor / Copilot Chat / Windsurf / Continue / Cline.

**Manual path: Learn as you go (~1 hour):** the 5 numbered Quickstarts below. Each builds on the previous. Recommended if you want to internalize how Studio works before letting the LLM speed you up.

> **Already have a working React site?** These Quickstarts apply to you too: Studio installs alongside your existing app, not instead of it. Do all five Quickstarts (the SDKs and catch-all route go into your existing codebase, not a new one), then convert your first hand-coded route with the [migrate-from-handcoded playbook](/docs/studio/migrating-hand-coded-pages-to-studio), one route per sprint, no rewrites. If you're on Visual Editor already, see [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app): Studio layers on top, VE stays.

Follow them in order, each Quickstart builds on the previous:

1.  **[Set up Studio in your app](/docs/studio/quickstart-set-up-studio-in-your-app)**: install the SDKs, bootstrap Studio, wire the preview route. ~15 minutes.
2.  **[Register a component with a Slot](/docs/studio/quickstart-register-a-component-with-a-slot)**: expose one of your React components to Studio's palette, declare a slot prop for drop-in children. ~10 minutes.
3.  **[Build a Simple Section + Expose Props](/docs/studio/quickstart-build-a-simple-section)**: bind a component to a Group field, expose one prop for per-instance override. ~10 minutes.
4.  **[Build a List Section with Section Slots](/docs/studio/quickstart-build-a-list-section)**: iterate a Modular Block field, let Templates fill each iteration's Slot with different content. ~15 minutes.
5.  **[Create a Template + URL](/docs/studio/quickstart-create-a-template)**: connect to a content type, drop your Sections, wire a URL pattern, deploy. ~5 minutes.

**Total time from a blank React app to a live page: ~1 hour.**

## Not sure yet?

-   **What is Studio?** See [What is Studio](/docs/studio/contentstack-studio-overview).
-   **Fetch, iterate, bind: the three stages a page goes through.** See [The Studio page](/docs/studio/standard-studio-page-anatomy).
-   **Slot vs Section Slot vs Exposed Prop: how to decide.** See [The Studio page, Step 3](/docs/studio/standard-studio-page-anatomy#step-3-meet-slots-the-two-extension-points).

Landed here from a specific error or feature question? Use the sidebar search. Every concept has a canonical home. If you land on a summary, a "full detail" link takes you there.
