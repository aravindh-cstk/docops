---
title: "Build your first Studio page"
description: "The canonical 30-minute tutorial that stitches together the five-step quickstart chain, from installing the SDKs to rendering a live URL from a Template."
url: /studio/build-your-first-studio-page
uid: blt2f50772c94862156
---

# Build your first Studio page

## Build your first Studio page

This is the fastest supported path from a blank React app to a live page rendered by Studio. It sequences the five numbered quickstarts into one continuous run. Budget about 30 minutes end-to-end.

At the end of it, you'll have a Contentstack stack, a Studio project bound to it, three SDKs wired into your React app, one registered component, a Simple Section, a List Section, and a Template that renders at a real URL against a real entry.

## What you'll build

-   One canvas app that boots the Delivery SDK, Live Preview, and the Studio SDK from a single contentstack/ folder.
-   A catch-all route that renders <StudioUrlRenderer /> for every URL Studio owns.
-   One registered React component with a slot prop.
-   A Simple Section that binds that component to a Group field.
-   A List Section that iterates a Modular Block field and lets Templates fill each iteration's Section Slot.
-   A Connected Template with a URL pattern like /blog/{{entry.slug}}, deployed and rendering.

## Prerequisites

Before starting, confirm that Studio is enabled for your organization. See [Check Studio access](/docs/studio/check-studio-access). Then collect the four .env values in [Before you start](/docs/studio/prerequisites).

You'll need Node 18 or newer, a running React app (Vite, Next.js, CRA, any framework), and a Contentstack stack with a Delivery Token, Preview Token, and at least one environment.

## The five steps

Follow them in order. Each step builds on the previous one. The total time on a fast machine is about 30 minutes, mostly typing.

1.  **[Set up Studio in your app](/docs/studio/quickstart-set-up-studio-in-your-app)** (~15 min). Install the three SDKs, create contentstack/initialize.ts and contentstack/StudioRenderer.tsx, wire the catch-all route. At the end of this step your canvas is empty but reachable.
2.  **[Register a component](/docs/studio/quickstart-register-a-component-with-a-slot)** (~10 min). Expose one React component to Studio's palette, declare a slot prop so authors can drop children into it.
3.  **[Build a Simple Section](/docs/studio/quickstart-build-a-simple-section)** (~10 min). Bind that component to a Group field on a Content Type, expose one prop for per-instance override.
4.  **[Build a List Section](/docs/studio/quickstart-build-a-list-section)** (~15 min). Wrap a component in a Repeater over a Modular Block field, add a Section Slot so each iteration can be filled from a Template.
5.  **[Create a Template with a URL](/docs/studio/quickstart-create-a-template)** (~5 min). Connect the Template to a Content Type, drop your Sections, wire the URL pattern, deploy. Every entry of that Content Type now lights up a live URL.

## What you'll have at the end

A running app at http://localhost:5173/blog/<slug> (or your framework's equivalent) that renders content pulled live from Contentstack, composed through Studio. Editing the entry in the CMS updates the canvas via Live Preview. Editing the composition in Studio and deploying updates the live URL without a code change or redeploy.

## Where to go next

-   Skim [Page anatomy: one template, three sections](/docs/studio/standard-studio-page-anatomy) to lock in the mental model.
-   Try [Design-first quickstart](/docs/studio/quickstart-design-first) to hand a Figma or mockup to Studio's decompose skill and let it author the Sections + Template for you.
-   Or jump into [Recipes](/docs/studio/recipes-guide) to see the same primitives applied to real page patterns.
