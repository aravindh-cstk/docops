---
title: "Check That Studio Is Enabled for Your Organization"
description: "Before you install SDKs, register components, or open any of the walkthroughs, verify Studio is actually turned on for your Contentstack organisation."
url: /studio/check-studio-access
uid: bltb61d9c58872429b4
---

# Check That Studio Is Enabled for Your Organization

## Check that Studio is enabled for your organisation

Before you install SDKs, register components, or open any of the walkthroughs, verify Studio is actually turned on for your Contentstack organisation. If it isn't, every step downstream will look like it succeeded until the canvas fails to load, and there's no error message that points at the real cause.

## The 10-second check

1.  Open [app.contentstack.com](https://app.contentstack.com/) and sign in.
2.  Click the **app-switcher**, the 3 by 3 grid icon at the top-right of the navbar.
3.  Look for a **Studio** tile in the menu.

![Contentstack app-switcher menu open on the Stacks page, showing Studio as one of the available product tiles alongside Home, CMS, Personalize, Data & Insights, Agent OS, Brand Kit, Launch and others. Studio's presence in this menu is the visual confirmation that it is enabled for your organisation.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama2624ad88a565473/8451a195ac252fb4ca645f73/check-studio-enabled-app-switcher.png)

## Results

-   **Studio tile is present**: Studio is enabled for your organisation. Continue with whichever walkthrough sent you here (Setup, Enterprise day one, Zero to first page, Two ways to start).
-   **Studio tile is missing**: Studio is not enabled on your organisation yet. Contact Contentstack Support to have it turned on. Everything else in these docs assumes access to the Studio product area, so there's no working around it locally. The platform gate must be lifted first.

## Orient yourself: what Studio actually looks like once you open a composition

When you open a Studio composition, the app switches into a **three-panel layout** organised around the canvas. Every author + engineer touches this same layout. Knowing what each region is (and where each one gets its content from) prevents the "which panel drives what?" confusion that costs an hour on day one.

![Studio canvas open on a Blog Post template. Three-panel layout. Left panel with Components palette showing Sections (Card Grid, Featured Card, Hero Strip) and Registered Components (Basics, Media, Container, Smart Containers, HTML Elements) plus a Layers tab. Center canvas iframe rendering the actual live blog post ("Welcome to Studio: visual composition for content teams") from the connected content type. Right panel showing the "No element currently selected" placeholder that prompts you to select an element to reveal Properties / Design / Settings tabs.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am22ede33a4e203d32/d960536e78fdef885853e4c3/canvas-blog-post-overview.png)

| Region | What it is | Where its content comes from |
| --- | --- | --- |
| **Left panel** | Two tabs: **Components** (the palette of registered React components you can drag onto the canvas) + **[Layers](/docs/studio/navigate-and-use-the-layers-tab)** (the tree of everything currently placed) | Studio, driven by your registerComponent(...) calls in your app |
| **Center: the canvas iframe** | **Your real running app, loaded inside an iframe.** For a Section, Studio iframes <Canvas URL>/canvas and expects <StudioCanvas /> mounted there. For a Template, Studio iframes the template's URL pattern (e.g. /blog/welcome-to-studio) and expects <StudioComponent /> on the catch-all route. Same React, same components, same CSS, same SDK, served by **your** app, not by Studio | Your app running at the Canvas URL (dev: http://localhost:3006, prod: your deployed origin) |
| **Right panel** | Tabs for the currently selected element: **Properties** (prop values + binding chips), **Design** (spacing, colours, layout tokens, see [design tokens](/docs/studio/studio-design-tokens-overview)), **Settings** (composition-level metadata). A **Data** tab appears **only when [Freeform](/docs/studio/freeform-overview) is enabled** on the project (Pin Entry / Pin Query). The screenshot above shows the project with Freeform off, so the Data tab is absent. Until you select something on the canvas the right panel shows a "No element currently selected" placeholder. | Studio, but the values it edits flow **into** the iframe via postMessage and re-render your components in place |

> ### The one insight worth internalising on day one
> 
> **Studio's canvas is not a rendering engine.** The middle panel is a **remote-controlled window into your running app**, same React tree a visitor gets, mounted inside an iframe. The left and right panels talk to it via postMessage. Everything you see on canvas is what your visitors see. If your dev server isn't running, or the Canvas URL is wrong, the iframe is blank, and there's no separate "Studio renderer" to fall back to.
> 
> Practical consequences:
> 
> -   When you register a new component in code (registerComponent(...)), it appears in the left panel because the iframe re-runs your app on reload and the postMessage bridge pushes the palette update.
> -   When Studio's canvas won't load, the fix is almost always in your app: dev server not running, wrong Canvas URL, missing <StudioCanvas /> / <StudioComponent /> mount, studioSdk.init() not called at boot. **One exception**: if Studio shows "SDK Not Initialized" or your browser refuses the iframe with a mixed-content / "connection blocked" / "private network" error, that's the **browser** refusing to embed your http://localhost iframe inside Studio's https:// page. Every major browser (Chrome, Brave, Edge, Safari, Firefox) blocks this by default with different error copy. One fix (local HTTPS via mkcert) works everywhere. See [Troubleshoot: Studio can't reach your localhost canvas](/docs/studio/troubleshoot-common-studio-issues#studio-cant-reach-your-canvas).
> -   Studio doesn't need content delivery network (CDN) access to your compiled JS. The iframe loads your app directly, including live-reloaded dev builds during authoring.

Setup ([Setup](/docs/studio/setup-overview)) is where you wire the two mount points the iframe needs: the [section preview route](/docs/studio/section-preview-route) (<StudioCanvas />) and the [template preview route](/docs/studio/template-preview-routes) (<StudioComponent />).

## Why we surface this up front

The Studio SDKs install fine without access, studioSdk.init() runs, the canvas route mounts and looks correct in the browser. The failure only shows up when the canvas tries to load a Studio project, which requires that Studio be enabled for the org that owns the stack. Catching this at the start saves 20 to 30 minutes of "why is the canvas blank" investigation later.

## What Support needs from you

-   Your organisation's UID or name.
-   The stack you plan to use with Studio (name + API key).
-   Confirmation that your Contentstack plan includes Studio (or a note that you're evaluating).

## Once Studio is enabled

Come back to whichever page sent you here:

-   [Setup](/docs/studio/setup-overview): install SDKs, wire routes, verify.
-   [Two ways to start](/docs/studio/choosing-your-studio-setup-path): pick the Enterprise or Quickstart setup path.
-   [Enterprise day one](/docs/studio/enterprise-setup-from-install-to-first-authored-page): the 30-minute BYOC recipe.
-   [Zero to first page](/docs/studio/quickstart-set-up-studio-in-your-app): the complete walkthrough from nothing to a rendered page.
-   [First page in 5 minutes](/docs/studio/quickstart-with-llm-skills): evaluator quickstart.
