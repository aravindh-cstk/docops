---
title: "Quickstart 1: Set Up Studio in Your App"
description: "Install the SDKs, bootstrap Studio, add a preview route. At the end of this Quickstart you'll have an empty Studio canvas rendering at a route in your app."
url: /studio/quickstart-set-up-studio-in-your-app
---

# Quickstart 1: Set Up Studio in Your App

## Quickstart 1: Set up Studio in your app

Install the SDKs, bootstrap Studio, add a preview route. At the end of this Quickstart you'll have an empty Studio canvas rendering at a route in your app.

**Time:** ~15 minutes. **Next:** [Register a component](/docs/studio/quickstart-register-a-component-with-a-slot).

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/bltce3163d804cf475a/6a6b939942e0b5067cad0c88/01-quickstart-setup.mp4).

**Watch the walkthrough (8:00)**: the same steps, run against a real stack. Prefer reading? Everything below covers the same ground. [See all six videos](/docs/studio/studio-video-walkthroughs).

![Studio Compositions list: Templates tab of a project with four connected Templates (Case Study, Product Page, Spring 2026 Landing, Blog Post) and their bound content types.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am03e085d2ad2d0397/d60acd439c6e71ad503285ec/quickstart-templates-list.png)

## What you'll have at the end

-   Three SDKs installed: @contentstack/delivery-sdk, @contentstack/live-preview-utils, @contentstack/studio-react.
-   A single contentstack/ folder holding initialize.ts (bootstraps the SDKs + ContentstackLivePreview.init so draft edits push into your canvas) and StudioRenderer.tsx.
-   One catch-all route rendering <StudioUrlRenderer />, subscribed to onEntryChange so it refetches when you edit content.
-   An empty canvas at http://localhost:5173/ (or wherever your app runs) waiting for a composition.

## Prerequisites

-   \[ \] Node 18 or later.
-   \[ \] A running React app (Vite, Next.js, CRA, anything). If you don't have one: npm create vite@latest my-app -- --template react-ts and cd my-app.
-   \[ \] A Contentstack stack with API key + delivery token + preview token. See [Prerequisites](/docs/studio/review-prerequisites-before-you-start) if you need to create one.

## Steps

### 1\. Create your Studio project

You'll do this in the Contentstack UI, not in code. Skip if you already have a Studio project bound to your stack.

-   Open Contentstack, then Studio, then **\+ New Project**.
-   Bind to the stack you'll use.

Full details: [Create a Studio project](/docs/studio/create-a-studio-project).

### 2\. Install the three SDKs

```
npm install @contentstack/delivery-sdk @contentstack/live-preview-utils @contentstack/studio-react
```

That's the whole install. Nothing else to add.

### 3\. Create the Studio setup folder

Keep every Studio-specific file in **one folder** so setup stays in one place, and so the later Quickstarts (component registration, sections) have an obvious home. This Quickstart creates two files in it:

```
src/
  contentstack/
    initialize.ts       # bootstraps the SDKs — imported once, for its side effects
    StudioRenderer.tsx  # renders the composition that matches the current URL
```

> **Next.js:** put the folder at app/contentstack/ instead of src/contentstack/. Everything inside is the same.

#### contentstack/initialize.ts

This module wires up the Delivery SDK, Live Preview, and the Studio SDK. Importing it once runs all three inits. You never call anything from it directly.

```
import contentstack from "@contentstack/delivery-sdk";
import { studioSdk } from "@contentstack/studio-react";
import ContentstackLivePreview, { type IStackSdk } from "@contentstack/live-preview-utils";

const stackSdk = contentstack.stack({
  apiKey:        import.meta.env.VITE_CONTENTSTACK_API_KEY,
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment:   import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
  host:          import.meta.env.VITE_CONTENTSTACK_HOST,
  live_preview: {
    enable:        true,
    preview_token: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
    host:          import.meta.env.VITE_CONTENTSTACK_LIVE_PREVIEW_HOST,
  },
});

ContentstackLivePreview.init({
  enable: true,
  stackDetails: {
    apiKey:      import.meta.env.VITE_CONTENTSTACK_API_KEY,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
  },
  clientUrlParams: {
    host: import.meta.env.VITE_CONTENTSTACK_APP_HOST,
  },
  stackSdk: stackSdk.config as IStackSdk,
  ssr: false,
});

studioSdk.init({ stackSdk });
```

> **Same file on other frameworks, only the env accessor changes:**
> 
> -   **Next.js:** swap import.meta.env.VITE\_CONTENTSTACK\_\* for process.env.NEXT\_PUBLIC\_CONTENTSTACK\_\* (client-visible env needs the NEXT\_PUBLIC\_ prefix). Because this module touches the browser, import it from a "use client" file (see step 4).
> -   **Remix:** read from window.ENV.CONTENTSTACK\_\*, populated by a root loader that returns { ENV: { CONTENTSTACK\_API\_KEY: ... } } and renders it into window.ENV via <Scripts /> (see Remix's ["Environment Variables" docs](https://remix.run/docs/en/main/guides/envvars)).

Env vars in .env.local (Vite shown, prefix with NEXT\_PUBLIC\_ for Next.js):

```
VITE_CONTENTSTACK_API_KEY=blt...
VITE_CONTENTSTACK_DELIVERY_TOKEN=cs...
VITE_CONTENTSTACK_PREVIEW_TOKEN=cs...
VITE_CONTENTSTACK_ENVIRONMENT=production                            # a real delivery environment name, not the literal string "preview"
VITE_CONTENTSTACK_HOST=cdn.contentstack.io                          # delivery host — required if you're not on the default US region
VITE_CONTENTSTACK_LIVE_PREVIEW_HOST=rest-preview.contentstack.com   # see the region table in [Install Live Preview](/docs/studio/install-live-preview#non-us-regions)
VITE_CONTENTSTACK_APP_HOST=app.contentstack.com                     # powers the "edit in Studio" deep link — swap for your region's app host
```

ContentstackLivePreview.init is what pushes draft edits from Contentstack into your running app while you're inside Studio's canvas. Without it, the canvas renders your app but content edits won't refetch until a manual reload. stackSdk.config passes the Delivery SDK's live-preview state (API key, host, preview token) into the Live Preview client so both stay in sync.

> studioSdk.init also accepts an optional contentTypeUid, only needed if you render a specific composition by UID. For URL-matched pages (this Quickstart) you can leave it out.

#### contentstack/StudioRenderer.tsx

This file is **identical across all three frameworks**. It reads the current path from the browser, resolves it to a composition with useCompositionData, and subscribes to onEntryChange so edits in Studio refetch the spec. <StudioComponent /> requires a resolved specOptions prop. It does not fetch until you pass one.

```
import { StudioComponent, useCompositionData } from "@contentstack/studio-react";
import { useEffect } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export function StudioUrlRenderer() {
  const { specOptions, error, isLoading, refetchSpec } = useCompositionData({
    url: window.location.pathname,
  });

  useEffect(() => {
    const callbackUid = ContentstackLivePreview.onEntryChange(refetchSpec);
    return () => {
      ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
    };
  }, [refetchSpec]);

  if (error !== null) {
    console.log(error);
    return "Page Not Found";
  }

  if (isLoading) {
    return "Loading...";
  }

  return <StudioComponent specOptions={specOptions} />;
}
```

> **Next.js / Remix:** this component reads window.location and subscribes to browser events, so it must run client-side. In Next.js add "use client"; at the top. In Remix render it inside <ClientOnly>.

### 4\. Wire the folder into your app

Studio needs ONE catch-all route that receives every URL and asks Studio "does this URL match a Template?" Import initialize once for its side effects, then mount StudioUrlRenderer at that route.

#### Vite / CRA (React Router)

In src/App.tsx:

```
import { Route, Routes } from "react-router";
import "./contentstack/initialize";
import { StudioUrlRenderer } from "./contentstack/StudioRenderer";

function App() {
  return (
    <Routes>
      <Route path="*" element={<StudioUrlRenderer />} />
    </Routes>
  );
}

export default App;
```

#### Next.js: App Router

Create app/\[\[...slug\]\]/page.tsx. The \[\[...slug\]\] optional-catch-all matches every URL. "use client" is required because the renderer (and initialize) touch the browser:

```
"use client";
import "../contentstack/initialize";
import { StudioUrlRenderer } from "../contentstack/StudioRenderer";

export default function CatchAll() {
  return <StudioUrlRenderer />;
}
```

#### Remix

Rename your app's index route to a splat, app/routes/$.tsx. Splat routes match every URL no more-specific route claims:

```
import { ClientOnly } from "remix-utils/client-only";
import "../contentstack/initialize";
import { StudioUrlRenderer } from "../contentstack/StudioRenderer";

export default function Splat() {
  return <ClientOnly fallback={null}>{() => <StudioUrlRenderer />}</ClientOnly>;
}
```

Full details on all three: [Template preview routes](/docs/studio/template-preview-routes).

### 5\. Run and open the canvas

```
npm run dev
```

Open http://localhost:5173/. You'll see an empty page (no Template exists yet, that's expected). In Contentstack, open Studio and select your project. The canvas shows your app iframed, waiting for you to author a Template.

## Verify

Three checks:

-   \[ \] Browser console shows no red errors from @contentstack/\* packages.
-   \[ \] The Studio canvas (in Contentstack UI) shows your localhost:5173 iframe successfully, no CORS error, no blank.
-   \[ \] The composition palette on the left is loaded (you'll see "Basic" and "Layout" categories with generic components).

If any of these fail: [Setup troubleshoot](/docs/studio/troubleshoot-common-studio-issues).

If the canvas shows an **"SDK Not Initialized"** modal instead of your iframed app, the SDK isn't reachable from the Studio canvas. This is expected before you've completed step 3 (bootstrap) or if the browser can't reach your localhost from app.contentstack.com (mixed-content / PNA restrictions). The modal contains the exact studioSdk.init({ stackSdk }) snippet from your contentstack/initialize.ts, a good sanity check that your init call matches. Full recovery path: [Setup troubleshoot, SDK initialization](/docs/studio/troubleshoot-common-studio-issues#sdk-initialization).

## Optional: render a hello-world composition right now (~5 min)

Studio is wired but nothing renders yet on your app because you have no compositions. Want to see something real render before moving on to Quickstart 2? Author a **minimal hello-world composition** via one Skill prompt.

Open Claude Code / Cursor / Windsurf in your app repo:

> "Author a hello-world composition entry named hello\_studio with URL pattern /hello-studio. Use the default Heading and Text components. Set the heading text to 'Hello, Studio!' and the text to 'This composition was authored by an LLM Skill in one prompt.' Publish to the preview environment. Use the author-composition-via-api skill."

The Skill:

-   Confirms the compositions Content Type exists on your stack.
-   POSTs a composition entry to Content Management API (CMA) with the composable\_uid hello\_studio, url /hello-studio, and a page UI tree containing a Heading + Text component with static values.
-   Publishes to preview.

Then open http://localhost:5173/hello-studio (or your dev URL). You should see:

```
Hello, Studio!
This composition was authored by an LLM Skill in one prompt.
```

That's a full render: Studio matched the URL, resolved the composition, and rendered its component tree with the static values. Your first working page in ~5 minutes.

**If nothing renders:** run the [verify-setup Skill](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html) which runs a 7-layer diagnostic and tells you exactly which layer failed. The layers, in order: the SDK bootstraps, the composition entry exists, the entry is published, the URL matches, the page renders, and the bindings resolve.

**Delete the hello-world composition later** via the same Skill: "Delete the hello\_studio composition entry."

## What happened

Studio is now a runtime library your app calls at every route. Every request goes through the catch-all route. There, <StudioComponent /> asks Studio's SDK whether any Template matches this URL, then renders the matched Template composition, or nothing.

You still have no components of your own registered. That's Quickstart 2.

## Next

**[Quickstart 2: Register a component with a Slot](/docs/studio/quickstart-register-a-component-with-a-slot)** (~10 min).

## Full-detail references

-   [Setup chapter](/docs/studio/setup-chapter-guide): every option, every trade-off (CSR vs SSR, App Router vs Pages Router, Live Preview integration).
-   [Verify end-to-end](/docs/studio/verify-your-studio-setup-end-to-end): the exhaustive verification checklist.
-   [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues): every symptom + fix.
