---
title: "Performance and Bundle-Size Optimization"
description: "Patterns for reducing Studio's runtime weight in production: lazy registration, code-splitting, SSR resolution, and avoiding Live Preview in visitor bundles."
url: /studio/performance-and-bundle-size-optimization
uid: blt3a73d3142eb3d0a1
---

# Performance and Bundle-Size Optimization

## Performance and Bundle-Size Optimization

Studio adds runtime weight to your app. @contentstack/studio-react is a few hundred KB compressed, and @contentstack/live-preview-utils adds more. For most sites that's fine — it's the cost of authorability. For weight-sensitive surfaces (landing pages, AMP-style targets, edge-deployed routes) you can drop the runtime cost substantially with a small set of patterns.

## The model

Studio's runtime weight has three layers:

1.  **Authoring weight** — the canvas iframe, the section preview machinery, post-message channels. Loaded by <StudioCanvas /> on the canvas route only.
2.  **Visitor weight** — what <StudioComponent /> ships to real visitor pages. Lighter than <StudioCanvas />, but still meaningfully bigger than a hand-coded render.
3.  **Component weight** — your own registered components, plus any dependencies they pull in.

Layer 1 only loads on the canvas route. **Stop worrying about that one — it's not in visitor pages.** Layers 2 and 3 are where the win is.

## Recommended patterns

### Lazy-register heavy components

registerLazyComponent lets Studio defer the import until the component is actually placed on a page:

```
import { registerLazyComponent } from "@contentstack/studio-react";

registerLazyComponent(
  {
    type: "video-player",
    displayName: "Video Player",
    props: { /* … */ },
  },
  () => import("./components/VideoPlayer").then(m => m.default),   // only fetched when used
);
```

Use this for anything > 50 KB minified or that pulls in a heavy dependency (a chart library, a video player, a rich text renderer). Pages that don't use the component pay zero weight for it.

### Code-split per-route

Studio's <StudioComponent /> should not be in your shared bundle. Mount it from a route file that's automatically code-split by your framework (Next.js App Router page.tsx, Remix route files, Astro pages). The framework's per-route splitting handles this for you — just don't accidentally import @contentstack/studio-react from a top-level layout.

### Server-side resolution where possible

csStudio.fetchCompositionData(queryOptions, options) (the SSR path) returns the full spec server-side. Render the result to HTML at request time; ship hydration data only. The CSR useCompositionData hook is convenient but adds runtime cost — use it only when SSR isn't an option (auth-gated content, runtime-only data).

See configure-csr-vs-ssr for the wiring.

### Don't ship Live Preview to visitors

@contentstack/live-preview-utils is for editors, not visitors. Gate ContentstackLivePreview.init() behind a check:

```
if (process.env.NEXT_PUBLIC_ENABLE_LIVE_PREVIEW === "true") {
  ContentstackLivePreview.init({ /* … */ });
}
```

Set the env var only in your preview/staging deployment. Production visitor pages never load the Live Preview channel, never pay its weight.

### Measure before optimising

Run a Next/Astro bundle analyser or source-map-explorer against your production build. Confirm the actual weight Studio adds before guessing. Most of the time it's smaller than you think; sometimes a transitive dep blows up — measurement tells you which.

## Patterns to avoid

| Pattern | Why it bites |
| --- | --- |
| Importing @contentstack/studio-react from a top-level layout | Defeats code-splitting; every route now ships Studio runtime |
| Eagerly registering every component up front | Defeats registerLazyComponent; defeats per-route splitting |
| Bundling Live Preview into production builds | Editor-only weight in every visitor's bundle |
| Using CSR useCompositionData for content that could be fetched server-side | Adds an extra round-trip + runtime cost; SSR is faster + lighter |
| Pre-loading all sections via linked\_sections for SSR | Pulls down sections the route may never render; only the sections in the composition's UI tree are needed |

## What's still unsolved

-   **Tree-shaking Studio's internal renderer.** Some internal Studio modules can't be tree-shaken effectively today. If your bundle analysis shows @contentstack/studio-react larger than expected, file an issue with your analyser output — the SDK team prioritises these.
-   **Edge-runtime size limits.** Studio currently exceeds the Vercel Edge / Cloudflare Workers 1 MB limit on some configurations. For edge-deployed routes, use the Node runtime; see [Production deployment edges](/docs/studio/production-deployment-edge-cases#edge-runtime-compatibility).

## See also

-   Configure CSR vs SSR — pick the right render path
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration) — lazy registration + bundle reference
-   [Production deployment edges](/docs/studio/production-deployment-edge-cases) — edge runtime + ISR considerations
