---
title: "Configure environment, language, and canvas URL"
description: "Learn how to set the environment, language, and canvas URL in your Studio project configuration to enable live section previews."
url: /studio/configure-environment-language-and-canvas-url
---

# Configure environment, language, and canvas URL

## Configure environment, language, and canvas URL

The **Configuration** tab is where Studio reads which environment to preview from, which language, and which route on your site to load for previewing sections.

## Where it is

Open your project, then Settings, then **Configuration**.

![Project Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

## What to set

### Environment

The Environment dropdown lists the Environments configured on your stack (see Prerequisites). Pick the one you want Studio to preview content from, usually test, preview, or staging.

Studio uses this to:

-   Resolve the Base URL (combined with Language below)

Studio previews drafts through the preview service, which is environment-agnostic, so this setting only selects the Base URL. It doesn't change which entries or publish state you see in the canvas.

### Language

The Language dropdown lists the languages on your stack. Pick the default, usually English - United States (en-us).

If your site is multi-locale, you can still preview other languages from the canvas by passing locale to useCompositionData(...) at the code level. See [Install the Studio SDK](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with). The Language picked here is the default.

### Base URL (read-only)

Studio shows the resolved Base URL below the Language dropdown. It's the value Studio derived from the Environment's urls\[\] entry whose locale matches the selected Language. You can't edit it here. If it's wrong, fix the per-Language URL on the Environment record in your Contentstack.

### Canvas URL

The path on your site that hosts <StudioCanvas />, usually something like /canvas, /studio-canvas, or /\_\_studio. Enter the **path only**, never a full origin.

```
Base URL                Canvas URL
http://localhost:5173 + /canvas        = http://localhost:5173/canvas
```

The **Base URL** (origin) is not this field. Studio reads it from the per-locale URL on the environment you selected above. To find that value, open your stack, go to Settings, then Environments, then <env>, and read the URL for <locale>. For local dev that must be your dev origin (e.g. http://localhost:5173). If it's empty, the canvas stays blank no matter what Canvas URL you set.

That composed URL is what loads inside Studio's iframe when an author opens a section. If you haven't added the route in your app yet, the next page covers it.

> **Leave Canvas URL empty to use Playground Canvas.** Without a Canvas URL the project falls back to Studio's hosted Playground iframe, useful for sketching and demos before your canvas-app exists. Deploy is disabled in Playground. Once you're ready to ship, set the Canvas URL and the project graduates to Website Canvas. See [Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app) for the full picture.

### Enable Freeform Feature (optional)

An optional toggle. Leave it off. See the [Freeform chapter](/docs/studio/freeform-overview) if you decide you need it later.

## Save

Click **Save** at the bottom of the page. The Configuration takes effect immediately. Open any composition and the canvas iframe loads at the new URL.

## Speed it up with an LLM

```
curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh
```

Then: "configure my Studio project".

## Next

[Add the section preview route](/docs/studio/section-preview-route)
