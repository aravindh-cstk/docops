---
title: "Configure Environment, Language, and Canvas URL"
description: "Learn how to set the environment, language, and canvas URL in your Studio project configuration to enable live section previews."
url: /studio/configure-environment-language-and-canvas-url
---

# Configure Environment, Language, and Canvas URL

## Configure Environment, Language, and Canvas URL

The **Configuration** tab is where Studio learns three things: which environment to preview from, which language, and which route on your site to load for previewing sections.

## Where It Is

Project → Settings → **Configuration**.

![Project Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

## What to Set

### Environment

The Environment dropdown lists the Environments configured on your Contentstack stack (see Prerequisites). Pick the one you want Studio to preview content from, usually test, preview, or staging.

Studio uses this to:

-   Resolve the Base URL (combined with Language below)
-   Fetch entries with the right publish state

### Language

The Language dropdown lists the languages on your stack. Pick the default, usually English - United States (en-us).

If your site is multi-locale, you can preview other languages from the canvas by passing locale to useCompositionData(...). See [Install the Studio SDK: fetch a composition](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata). The Language picked here is just the default.

### Base URL (read-only)

Studio shows the resolved Base URL below the Language dropdown, the value Studio derived from the Environment's urls\[\] entry whose locale matches the selected Language. You can't edit it here; if it's wrong, fix the per-Language URL on the Environment record in your stack.

### Canvas URL

The path on your site that hosts <StudioCanvas />, usually something like /canvas, /studio-canvas, or /\_\_studio. Enter the **path only**, never a full origin.

```
Base URL                Canvas URL
http://localhost:5173 + /canvas        = http://localhost:5173/canvas
```

The **Base URL** (origin) is not this field. Studio reads the Base URL from the per-locale URL on your Contentstack stack: **Stack → Settings → Environments → <env> → URL for <locale>**. For local dev, set that to your dev origin (e.g. http://localhost:5173). If it is empty, the canvas stays blank no matter what Canvas URL you set.

Studio combines Base URL + Canvas URL to get the full iframe address. That composed URL loads inside Studio's iframe when an author opens a section. If you haven't added the route in your app yet, the next page covers it.

> **Leave Canvas URL empty to use Playground Canvas.**
> 
> Without a Canvas URL, the project falls back to Studio's hosted Playground iframe, useful for sketching and demos before your canvas-app exists.
> 
> Deploy is disabled in Playground. Once you're ready to ship, set the Canvas URL and the project graduates to Website Canvas. See [Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app) for the full picture.

### Enable freeform feature (optional)

A toggle for the optional Freeform mode. Leave it off unless you need to compose pages that aren't tied to a content type. See the [Freeform chapter](/docs/studio/freeform-templates) for the details; you don't need it for normal template authoring.

## Save

Click **Save** at the bottom of the page. The Configuration takes effect immediately; open any composition and the canvas iframe loads at the new URL.

## Optional: LLM-assisted setup

```
npx @contentstack/studio-skills install
```

Then: _"configure my Studio project"_.

## Next

[Add the section preview route](/docs/studio/section-preview-route)
