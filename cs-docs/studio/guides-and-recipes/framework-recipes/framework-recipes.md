---
title: "Framework Recipes for SSR Integration"
description: "Studio's SDK renders compositions server-side across every mainstream React host: Node/Express/Fastify, Next.js (App Router client-component SSR, App."
url: /studio/framework-recipes
---

# Framework Recipes for SSR Integration

## Framework recipes: SSR integration

Studio's SDK renders compositions server-side across every mainstream React host: Node/Express/Fastify, Next.js (App Router client-component SSR, App Router RSC, Pages Router), Remix / React Router 7, Astro islands, Gatsby. Same three-call contract. Each host's recipe is where you plug the calls into that framework's request/response idioms.

Read this page once, then pick your host's recipe.

Companion pages:

-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting): the failures we've actually hit and how to recognise them.
-   [Verification](/docs/studio/framework-recipe-verification): the curl test every recipe must pass.

## The bootstrap pattern: studioSdk.init() returns the SDK

Every recipe below assumes one bootstrap module (customer-owned) that initialises the SDK once and re-exports the returned SDK object. This is exactly the pattern the fixture canvas-app in this repo uses (canvas-app/src/bootstrapStudioSdk.ts, inspect it in the repo source. It's not published to the docs site):

```
// lib/studio.server.ts   (customer-owned; name it whatever fits your project)
import { studioSdk } from "@contentstack/studio-react";
import contentstack from "@contentstack/delivery-sdk";

const stack = contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
  region: process.env.CONTENTSTACK_REGION as any,
  live_preview: {
    enable: true,
    preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN!,
    host: /* region-specific rest-preview host */ "rest-preview.contentstack.com",
  },
});

// studioSdk.init(...) is called ONCE and RETURNS the SDK object.
// Re-export it so route files can call `sdk.fetchCompositionData(...)`.
export const sdk = studioSdk.init({ stackSdk: stack, contentTypeUid: process.env.STUDIO_COMPOSITIONS_CT_UID! });
```

Every route file then imports sdk from this module. The imported studioSdk namespace only has .init(...) on it. The fetch/render methods live on the returned SDK object.

## The three-call contract

Every host runs the same three SDK calls per request. The framework determines where each call lives by the route file's structure. sdk below is the customer-owned re-export from the bootstrap module above.

| Concern | SDK API | Returns |
| --- | --- | --- |
| **Data** | sdk.fetchCompositionData({ url, searchQuery }, { locale }) | specOptions, spec + resolved SEO + fetched entries |
| **Render** | <StudioComponent specOptions={...} /> | The composition tree ready for React's server or client renderer |
| **Styles** | getSSRStyleTags(specOptions.spec) | A ready-to-inject <style data-studio-ssr> string with the composition's design-panel tokens |
| **Metadata** | getCompositionMetadata(specOptions, { baseUrl }) | { title, description, ogImage, canonical, tags\[\] } + renderMetadataToHtml() for hosts without a native <head> API |

Data + Render are non-negotiable. Styles are non-negotiable for FOUC-free first paint. Metadata is non-negotiable for SEO: every host recipe wires it into its framework's <head> mechanism (generateMetadata, meta(), \_document.tsx, or direct string injection).

## Five universal rules

Every host recipe assumes these. If a recipe seems to work but produces one of the symptoms in [Troubleshooting](/docs/studio/framework-recipe-troubleshooting), start by re-checking these.

### Rule 1: One React copy

The SDK must resolve the host app's React (peer range ^18 || ^19). Two React copies produce Invalid hook call at render time, sometimes silently on the server and loudly on the client.

Verify:

```
npm ls react
```

Exactly one react@... line. If you see two, dedupe (pnpm install --shamefully-hoist=false, npm dedupe, or bundler resolve.alias).

### Rule 2: Root import required

Studio's built-ins (Page, Section, Repeater, component wrappers) auto-register on the first import of @contentstack/studio-react. A server bundle that only imports a subpath (e.g. @contentstack/studio-react/rsc or a hand-picked type) throws **"Internal components missing"** at render.

Every entry file (server and client) needs at least one root import somewhere in its module graph:

```
import "@contentstack/studio-react";     // triggers registration
```

Or, more usefully:

```
import { StudioComponent, studioSdk } from "@contentstack/studio-react";
```

### Rule 3: Never mix server + client fetching on the same route

A route uses **either** sdk.fetchCompositionData (server) **or** useCompositionData (client). Not both. Calling the client hook after an SSR fetch produces a hydration mismatch even when the values look identical, because the fetch times differ.

Server-fetch routes hydrate through the same specOptions passed as a prop. If you need Live Preview reactivity, install @contentstack/live-preview-utils and author a small client-boundary component (customers typically name it LivePreviewBridge) that calls ContentstackLivePreview.onEntryChange(...) to trigger the framework's refresh primitive (router.refresh(), revalidator.revalidate(), router.replace(...), etc.). Full pattern: [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7. The name is a customer convention. The SDK does not export a LivePreviewBridge component.

### Rule 4: Catch-all route pattern

One template-preview route handles every visitor URL. Studio's URL-pattern ranking (documented in [setup-template-preview-routes](https://studio-documentation.contentstackapps.com/prompts/setup-template-preview-routes.html)) resolves which composition matches. Do not add per-path Studio routes.

Every host recipe wires exactly one catch-all: the mechanics differ (app/\[\[...slug\]\]/page.tsx, Express app.get('\*', ...), Remix routes/$.tsx, Astro \[...slug\].astro).

### Rule 5: Wrap the fetch, or every unmatched URL is a 500

**The recipes on this site show the happy path only.** sdk.fetchCompositionData **throws** when nothing matches (it does not resolve with hasSpec: false) so a recipe copied verbatim has no not-found handling, and the catch-all from Rule 4 turns every unclaimed URL into a 500 instead of a 404.

It throws a ComposableStudioError carrying .id. Three ids mean "no composition here". Everything else is real breakage that must stay a 500:

| .id | Meaning |
| --- | --- |
| COMPOSITION\_NOT\_FOUND | Fetched by compositionUid, nothing matched |
| COMPOSITION\_NOT\_FOUND\_BY\_URL | Fetched by url, no pattern matched |
| PREVIEW\_ENTRY\_NOT\_FOUND | Pattern matched, no entry satisfies it, the usual outcome for a bad slug under a content\_type\_url\_pattern template |

Canonical wrapper (resolveComposition) and per-framework wiring: [configure-csr-vs-ssr, fetchCompositionData does not return "not found"](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper). Never blanket-catch: catch { notFound() } converts Content Delivery API (CDA) outages and expired tokens into silent 404s.

## Gotcha: third-party scripts inside the canvas

Every recipe below loads your real site inside Studio's iframe. Your cookie banner, chat widget, GTM tags, analytics SDKs, and ad pixels all load with it. Cookie banners cover the canvas UI. Analytics counts author sessions as page views. Ad pixels record editing as conversions.

Gate them with the SDK's editor-mode contract, isStudioCanvas() from @contentstack/studio-react:

```
import { isStudioCanvas } from "@contentstack/studio-react";
if (!isStudioCanvas()) {
  OneTrust.init(config);
  window.dataLayer?.push({ event: "pageview" });
}
```

Full recipes (JS gating, CSS-only gating, GTM inline check, SSR) + the three stable signals (cs-composable-studio query param, cs-studio-canvas HTML class, window.\_\_CS\_STUDIO\_MODE\_\_ marker): see [Detecting the Studio canvas](/docs/studio/detect-the-studio-canvas).

## Pick your host

CI-tested recipes lifted from example apps that run on every SDK PR, these cannot rot:

-   [Plain Node (Express / Fastify)](/docs/studio/framework-recipe-node). Source: examples/node-ssr/server.tsx in the SDK repo.
-   [Next.js App Router: RSC entry](/docs/studio/framework-recipe-nextjs-rsc): source: examples/nextjs-rsc/app/page.tsx (CI-tested on Next 14 and Next 16).

Adapted recipes: smoke-passed once, then hand-maintained. Re-verify against the SDK's example apps if you hit trouble:

-   [Next.js App Router: client-component SSR](/docs/studio/framework-recipe-nextjs-app-router): the default path. Full server rendering, hydrates to interactivity.
-   [Next.js Pages Router](/docs/studio/framework-recipe-nextjs-pages-router): getServerSideProps + \_document.tsx.
-   [Remix / React Router 7](/docs/studio/framework-recipe-remix): loader() + entry.server.tsx.
-   [Astro (React islands)](/docs/studio/framework-recipe-astro): frontmatter fetch + island wrapper.
-   [Gatsby](/docs/studio/framework-recipe-gatsby): SSR APIs + gatsby-ssr.js.

## Choosing between App Router (client-component SSR) and RSC

Both server-render the composition. Both give full SEO. The difference is what ships in the client bundle.

| Path | Server render | Client JS shipped | Streaming | When to pick |
| --- | --- | --- | --- | --- |
| **App Router: client-component SSR** (main entry) | Full composition DOM | The composition's built-ins hydrate for interactivity | No | Default. Simplest wiring. Full SEO. |
| **App Router: RSC** (/rsc entry) | Full composition DOM | ~142 bytes for structural content (per SDK smoke test). Custom components register as client islands automatically | Yes (React 19 streaming) | Zero-JS-preferred content pages, streaming shells, edge-runtime deployments. |

Decision, not preference: pick RSC when you need zero client JS for structural content OR streaming. Otherwise the main entry is the smaller-surface-area default.

## Where these recipes live in the SDK repo

The Node and RSC recipes are lifted verbatim from CI-tested example apps in the SDK repo (examples/node-ssr/ and examples/nextjs-rsc/). Every SDK PR runs a smoke pass against both, so the code in this doc cannot drift silently.

The other host recipes are adapted: smoke-passed once at authoring time. If a customer hits trouble, the SDK example app is the source of truth. The recipe here is the translation into that host's idioms.

## See also

-   [configure-csr-vs-ssr](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html): the skill that walks through picking a render strategy for a route.
-   [setup-template-preview-routes](https://studio-documentation.contentstackapps.com/prompts/setup-template-preview-routes.html): the catch-all route Rule 4 refers to.
-   [SSR streaming](/docs/studio/ssr-streaming-patterns): the advanced streaming pattern. Assumes a recipe here is already working.
-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting): every failure mode listed by symptom.
-   [Verification](/docs/studio/framework-recipe-verification): the curl test contract.
