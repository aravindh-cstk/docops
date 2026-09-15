---
title: "Detect the Studio Canvas to Gate Third-Party Scripts"
description: "The Studio canvas iframes your real site, which means every third-party script your site loads also runs inside the canvas."
url: /studio/detect-the-studio-canvas
uid: blt286b9e32005e3c93
---

# Detect the Studio Canvas to Gate Third-Party Scripts

## Detect the Studio canvas: gating third-party scripts

The Studio canvas iframes your real site, which means every third-party script your site loads also runs inside the canvas. Cookie banners cover the canvas UI, chat widgets overlap Studio's panels, analytics tags count author-editing sessions as real visitors, ad pixels record editing as conversions. First-session bug for every enterprise customer.

Studio ships a **first-party editor-mode contract** (three stable signals plus a small API) that customers use to gate third-party initialization. This page is the canonical answer.

## What breaks when you don't gate

| Third party | Symptom in the canvas |
| --- | --- |
| OneTrust / cookie consent | Banner covers the canvas until dismissed, every session |
| Intercom / Qualified / Drift | Chat bubble overlaps Studio's properties panel |
| GTM / GA / analytics | Author editing sessions counted as real page views |
| Meta / TikTok / LinkedIn pixels | Author sessions counted as ad conversions |
| LaunchDarkly / Split.io | Origin-mismatch errors in the canvas console |

## The three stable signals

These are **versioned, non-breaking API**. The SDK guarantees them. Renaming is a breaking change and gets called out in release notes.

| # | Signal | Value | Available |
| --- | --- | --- | --- |
| 1 | Query param | cs-composable-studio, present on canvas + template-preview iframe URLs. Exported as STUDIO\_CANVAS\_QUERY\_PARAM | Immediately: zero SDK involvement (readable by inline scripts, GTM, server) |
| 2 | <html> class | cs-studio-canvas (exported as STUDIO\_MODE\_HTML\_CLASS), added in canvas mode | As soon as @contentstack/studio-react evaluates in the browser |
| 3 | Window marker | window.\_\_CS\_STUDIO\_MODE\_\_ = 'canvas' | 'preview' | 'visitor' | Same as #2. **Persists across client-side navigations** that strip the query param |

Pick the signal that fits your integration point. The API helpers below combine all three under the hood.

## The API

Everything re-exports from the package root:

```
import {
  isStudioCanvas,             // (searchQuery?) => boolean — THE gate for third parties
  isStudioEditorMode,         // (searchQuery?) => boolean — canvas OR live-preview pane
  detectStudioMode,           // (searchQuery?) => 'canvas' | 'preview' | 'visitor'
  markStudioMode,             // () => StudioMode — runs automatically on package import
  STUDIO_CANVAS_QUERY_PARAM,  // "cs-composable-studio"
  STUDIO_MODE_HTML_CLASS,     // "cs-studio-canvas"
  type StudioMode,
} from "@contentstack/studio-react";
```

Semantics:

-   **Browser, no args**: the window marker wins if set (survives SPA navigation). Otherwise the current URL's params determine the result.
-   **Server, no args**: always returns 'visitor' / false. Never throws. For a real server-side answer, pass the request's search params (string or URLSearchParams).
-   **Explicit args always bypass the marker**: required for server-side rendering (SSR) request semantics.
-   markStudioMode() is idempotent. The first stamp wins. Runs automatically when the package root imports. Customers only call it manually for code that runs before the SDK's module graph (rare).

## Recipes

### 1\. Gate third-party JS (the 90% case)

```
import { isStudioCanvas } from "@contentstack/studio-react";

if (!isStudioCanvas()) {
  OneTrust.init(config);
  Qualified.init(config);
  posthog.init(POSTHOG_KEY);
}
```

Do not try to hide these with CSS after they render. Skip init entirely. Many SDKs mount irrevocably (event listeners, console wrappers, fetch intercepts, mutation observers). CSS-hiding leaves the runtime hooks intact.

### 2\. Analytics + ad pixels: use isStudioEditorMode, not isStudioCanvas

preview is Studio's Live Preview pane, a mode where authors preview a draft outside the canvas. Cookie banners can stay visible in preview mode, but **analytics and pixels should be off in BOTH canvas and preview**. An editor previewing a draft is not a visitor.

```
import { isStudioEditorMode } from "@contentstack/studio-react";

if (!isStudioEditorMode()) {
  window.dataLayer?.push({ event: "pageview" });
}
```

### 3\. GTM: inline check via the query param

GTM injects declaratively via a <script> tag before any SDK code runs. Use signal #1 directly:

```
<script>
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    cs_studio_canvas:
      new URLSearchParams(location.search).has("cs-composable-studio"),
  });
</script>
<!-- GTM snippet here -->
```

Then, in GTM:

1.  Create a Data Layer Variable named cs\_studio\_canvas.
2.  Add the trigger condition **"fires only if {{cs\_studio\_canvas}} equals false"** to every tag.

Same shape as GTM's built-in preview-mode gating.

### 4\. CSS-only gating: replaces MutationObserver hacks

Signal #2 lets you hide late-injecting widgets purely in CSS. No JS, no observers:

```
html.cs-studio-canvas #onetrust-banner-sdk,
html.cs-studio-canvas #qualified-widget-container,
html.cs-studio-canvas #hubspot-messages-iframe-container,
html.cs-studio-canvas .intercom-lightweight-app {
  display: none !important;
}
```

Works declaratively: the <html> class fires before third-party markup mounts, so CSS matches on first paint. No timing gymnastics.

### 5\. SSR: pass request params explicitly

isStudioCanvas() with no args returns false on the server. For a real answer, pass the request's search params:

```
// Express
if (!isStudioCanvas(req.url.split("?")[1] ?? "")) {
  // emit GTM snippet / pixel <script> tags into the HTML response
}

// Remix loader
export async function loader({ request }) {
  const params = new URL(request.url).searchParams;
  if (!isStudioCanvas(params)) {
    // include analytics scripts in the response
  }
}

// Next.js server component
export default async function Page({ searchParams }) {
  const params = new URLSearchParams(await searchParams);
  if (!isStudioCanvas(params)) {
    // render analytics <script> tags
  }
}
```

## Decision table

| You're gating | Use |
| --- | --- |
| JS that runs after your app boots | isStudioCanvas() |
| Analytics / ad pixels | isStudioEditorMode() |
| GTM / inline <head> scripts | Query param check (recipe 3) |
| Pure CSS (hide injected widgets) | html.cs-studio-canvas class (recipe 4) |
| Server-rendered script tags | isStudioCanvas(request params) (recipe 5) |

## Third-party scripts that should still run in the canvas

Not everything needs gating. The rule:

| Runs on visitor site | Runs in canvas? |
| --- | --- |
| Analytics / feature-flag SDKs / A-B testing | **No**, pollutes data with author sessions. |
| Cookie banners, chat widgets, feedback widgets | **No**, cover the canvas UI. |
| Design-system CSS / font loaders / theme tokens | **Yes**, the canvas is supposed to look like the site. |
| App SDKs the composed components need (a maps SDK, a video player runtime) | **Yes**, otherwise components render broken. |
| Auth / session bootstrap | **Depends**, most auth should be mocked in canvas mode so authoring works without a login flow. Keep whatever the components need to render. |

## Verify

-   Open the site normally. The marker reads window.\_\_CS\_STUDIO\_MODE\_\_ === 'visitor'. Cookie banner, chat, and GTM all fire.
-   Open the composition in the Studio canvas. The marker is 'canvas'. <html> has cs-studio-canvas. Nothing third-party fires. No author-session events in analytics dashboards.
-   Navigate client-side inside the canvas (link click that changes the URL). The marker is still 'canvas' even though the query param is gone from the visible URL.
-   curl the page with the canvas query params. The response carries no GTM or pixel <script> tags.

## Boundaries and caveats

-   **Signals #2 and #3 require the page to import @contentstack/studio-react** somewhere in its module graph. Any Studio-rendering page already does. Signal #1 (query param) works with zero SDK.
-   The contract detects **Studio contexts only.** It says nothing about Contentstack Live Preview used outside Studio, except via the preview mode.
-   **Bare window.self !== window.top (iframe check) is NOT part of the contract.** Customers should stop using it: it breaks for sites legitimately embedded elsewhere (Notion, Framer, docs sites). Use isStudioCanvas() instead.

## See also

-   [configure-csr-vs-ssr](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html): where to import + call these helpers per render strategy.
-   [Framework recipes](/docs/studio/framework-recipes): per-host wiring. Each host's gotchas section references this page.
-   [troubleshoot-canvas](https://studio-documentation.contentstackapps.com/prompts/troubleshoot-canvas.html): if the canvas is blank rather than covered by an overlay, use this instead. (Chrome Local Network Access, a browser-imposed block, is a different class of failure.)
