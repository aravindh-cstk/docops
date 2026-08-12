---
title: "Troubleshoot Common Studio Issues"
description: "Fix common Studio setup issues including canvas iframe errors, template render failures, Live Preview problems, content fetch errors, and SDK init order issues."
url: /studio/troubleshoot-common-studio-issues
---

# Troubleshoot Common Studio Issues

## Troubleshoot Common Studio Issues

Common problems, in roughly the order you'd hit them.

> **Key terms**
> 
> -   **Canvas**: the iframe Studio opens inside its builder UI to preview your content.
> -   **StudioCanvas component**: the React component (<StudioCanvas />) you mount on a dedicated route in your app. Studio loads that route inside the canvas iframe.
> -   **Compositions**: the page-level records Studio stores in Contentstack. Each composition maps a URL pattern to a set of components and a connected content type entry.

## Canvas Iframe Issues

### "No Canvas URL Found" / MISSING\_CANVAS\_URL

Studio is trying to open a section but doesn't know where your canvas route lives.

**Fix:** 1. Project → Settings → Configuration → set **Canvas URL** to your route path (e.g. /canvas) 2. Make sure that route exists in your app and mounts <StudioCanvas /> 3. See [Section preview route](/docs/studio/section-preview-route)

### "Environment Not Configured"

Studio can't resolve the Base URL because no Environment + Language is picked.

**Fix:** Project → Settings → Configuration → pick both.

### Canvas iframe loads my home page instead of <StudioCanvas />

Your Canvas URL is / (or empty). Studio is loading the site root.

**Fix:** Change Canvas URL to a dedicated path like /canvas or /studio-canvas. Add the route in your app if it doesn't exist.

### "Use Studio Canvas Component" overlay shows on the canvas

Your canvas route is mounting the deprecated <StudioComponent /> instead of <StudioCanvas />. Studio detects this and overlays guidance until you switch.

**Fix:** in the file your project's Canvas URL points at, replace the <StudioComponent /> import + render with <StudioCanvas />. The two are not interchangeable: <StudioCanvas /> self-mounts the section preview from the URL params Studio appends to the iframe, no props needed:

```
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

The overlay disappears on the next canvas reload. See [Add the section preview route](/docs/studio/section-preview-route) for the full canvas-route guide.

### Canvas loads blank, no error

The route exists but doesn't mount <StudioCanvas />.

**Fix:** Add the component:

```
import { StudioCanvas } from "@contentstack/studio-react";
export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

## Template Render Issues

### "Template did not load"

The template's URL pattern doesn't match a route on your site that mounts <StudioComponent />. Studio surfaces this as a banner labelled **"Template Did Not Load"** on the canvas, showing the composition's UID and the URL pattern that failed to resolve, with three "Potential issues" bullet points.

**Fix paths (in order of likelihood):** 1. Add the matching route in your app (app/blog/\[slug\]/page.tsx for /blog/{{entry.url}}) 2. Edit the template's URL pattern in Studio → click the pencil icon in the canvas toolbar → Edit URL modal (see [Connected content type → Editing the URL](/docs/studio/connected-content-type#editing-the-url)) 3. Confirm the route mounts <StudioComponent /> and not <StudioCanvas /> (they're not interchangeable, see [Canvas iframe issues](#canvas-iframe-issues) above)

For the **success counterpart** (what a correctly-routed deployed template looks like at its real visitor URL), see [Save vs Deploy → Deploy](/docs/studio/save-vs-deploy-a-composition#deploy).

### Preview entry from Studio renders empty fields

The connected entry doesn't have the data the template binds to.

**Fix:** Switch the Preview Entry from the canvas toolbar (the ⇄ swap icon) to an entry that has the fields populated. Or populate the current entry's fields in Contentstack.

## Live Preview Issues

### Edits in Contentstack don't reflect on my page

Live Preview isn't initialised, or onEntryChange isn't wired to your render.

**Fix:** 1. Confirm ContentstackLivePreview.init({ … }) runs at app boot 2. Wire onEntryChange to your render or refetch: ts useEffect(() => { ContentstackLivePreview.onEntryChange(refetchSpec); }, \[refetchSpec\]); 3. Make sure your stack has Live Preview enabled stack-wide (Stack → Settings → Visual Experience → General) 4. Check the Preview Token in your .env.local matches the one on Contentstack 5. See [Install Live Preview](/docs/studio/install-live-preview)

### "Edit in Contentstack" button doesn't open

clientUrlParams.host is wrong for your region.

**Fix:** Match it to your region's app host (US: app.contentstack.com, EU: eu-app.contentstack.com, etc.). See [Install Live Preview → Non-US regions](/docs/studio/install-live-preview#non-us-regions).

## Content Fetch Issues

### 401 fetching content

Stack API Key or Delivery Token is wrong, expired, or not set.

**Fix:** 1. Re-copy from Stack → Settings → Tokens → the Delivery Token edit screen 2. Make sure your .env.local has the right values 3. Restart your dev server, as env vars are read at boot

### 404 fetching a content type

The content type UID is wrong, or doesn't exist in the stack.

**Fix:** Check Contentstack → Content Models → your CT → UID and pass that exact value to stack.contentType("...").

### Studio shows compositions but useCompositionData returns null

The composition's connected content type UID in studioSdk.init doesn't match what Studio is writing into.

**Fix:** Confirm studioSdk.init({ contentTypeUid: "..." }) matches the **Compositions** CT in your stack (Project → Settings → General → Stack Connection).

### API error (422): Studio project not created yet

You wired the SDKs (install-studio is done) but no Studio project exists yet: the compositions content type hasn't been provisioned into your stack.

This is the **expected error** for the "installed but no project yet" state. It is not a broken install.

**Fix:** 1. Create the Studio project in app.contentstack.com (Studio → New Project → link your stack). Provisioning creates the compositions content type. 2. Until a composition is published on a route you're hitting, wrap the fetch in try/catch and render a "no composition yet" placeholder (the 422 disappears once any composition is published).

### API error (422): Content type UID mismatch

The contentTypeUid value passed to studioSdk.init doesn't match the provisioned UID.

**Fix:** 1. Open Studio → Project → Settings → Configuration → check "Composition Content Type". 2. If the UID isn't compositions, set <PREFIX>\_CONTENTSTACK\_STUDIO\_CONTENT\_TYPE=<uid> in .env.local and pass that value to studioSdk.init({ contentTypeUid: "<uid>" }).

## Component Palette Issues

### Registered components don't appear in Studio's palette

Components are registered after Studio's canvas iframe loads, so it doesn't see them.

**Fix:** Call registerComponent / registerComponents **before** the canvas mounts. The cleanest way is to register at app boot, in the same module that imports @/lib/contentstack:

```
// src/lib/contentstack.ts
import { studioSdk, registerComponents } from "@contentstack/studio-react";
import { components } from "@/studio/components";

studioSdk.init({ … });
registerComponents(components);
```

### Lazy components flash blank when dropped

The default Suspense fallback is null. Provide your own:

```
import { Suspense } from "react";

function PaletteFallback() {
  return <div className="loading-card">Loading…</div>;
}

// Wrap your StudioComponent / StudioCanvas with a custom Suspense if you need a global fallback.
```

(Today the SDK uses <Suspense fallback={null}> internally; wrap your top-level render in your own Suspense to provide a different fallback for the canvas.)

## SDK Init Order Issues

### "studioSdk is not initialised"

Either studioSdk.init isn't called, or it's called _after_ you call useCompositionData.

**Fix:** Init must run before any hook reads the SDK. The safest place is a shared module imported at app boot: src/lib/contentstack.ts.

### "stackSdk is required"

You called studioSdk.init without passing the Delivery SDK instance.

**Fix:**

```
import Contentstack from "@contentstack/delivery-sdk";
import { studioSdk } from "@contentstack/studio-react";

const stack = Contentstack.stack({ … });
studioSdk.init({ stackSdk: stack, contentTypeUid: "compositions" });
```

## Pre-contact Diagnostic Checklist

Before opening a support issue, run through these checks:

-   \[ \] **Browser console:** open DevTools → Console. Note any errors, especially studioSdk not initialised, 401, 422, or hydration warnings.
-   \[ \] **Network tab:** filter by XHR/Fetch. Check that content-type and composition requests return 200. A 401 means wrong credentials; a 422 means missing or mismatched content type.
-   \[ \] **.env.local credentials:** confirm CS\_API\_KEY, CS\_DELIVERY\_TOKEN, CS\_PREVIEW\_TOKEN, and CS\_ENVIRONMENT are set and match the values in Stack → Settings → Tokens. Restart your dev server after any .env.local change.
-   \[ \] **Canvas URL in Studio:** Project → Settings → Configuration. Confirm the Canvas URL path matches the route in your app that mounts <StudioCanvas />.
-   \[ \] **Environment per-locale Base URL:** Stack → Settings → Environments → your environment → check the URL for your locale is non-empty and matches your dev origin (e.g. http://localhost:5173).

## Still Stuck?

If you've worked through this page and the canvas still doesn't render, open an issue with:

-   What you see (error text, screenshots if helpful)
-   Which layer failed (Delivery / Live Preview / Studio SDK / canvas route / Studio project)
-   Browser console output during the failure

That triages fast.
