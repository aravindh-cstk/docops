---
title: "Framework Recipe: Next.js App Router with RSC"
description: "Zero client JS for structural content, streaming, edge-runtime-friendly. Pick this when you want the minimum possible bundle and are willing to import."
url: /studio/framework-recipe-nextjs-rsc
---

# Framework Recipe: Next.js App Router with RSC

## Framework recipe: Next.js App Router (RSC)

Zero client JS for structural content, streaming, edge-runtime-friendly. Pick this when you want the minimum possible bundle and are willing to import Studio via its /rsc entry point.

> **Source of truth:** examples/nextjs-rsc/app/page.tsx in the SDK repo. Continuous integration (CI) runs this example on Next 14 and Next 16 on every PR. Copy the pattern verbatim.

> **Verified in-repo:** this recipe was smoke-tested end-to-end against the Studio Documentation Contentstack project (Next.js 14.2.35, workspace-linked @contentstack/studio-react). curl /blog/welcome-to-studio returns 200 with (a) 22 KB of composition body under <main data-cs-rsc="page">, (b) a <style data-studio-ssr> block with 360 \--token-\* design-system variables, (c) populated <title> + <link rel="canonical"> + <meta property="og:title"> + Twitter card tags. Zero data-cs-defer-builtin placeholders confirm the post-#871 SDK fix under real load.

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first. If you're not sure whether to pick RSC or the client-component SSR path, see [Choosing between App Router and RSC](/docs/studio/framework-recipes#choosing-between-app-router-client-component-ssr-and-rsc).

## Prerequisites

-   Next.js 14+ (React 19 for full streaming benefits).
-   Studio installed and @contentstack/studio-react in dependencies.
-   All components registered at module scope in a server-safe file. See Rule 2 in [the shared concepts page](/docs/studio/framework-recipes#rule-2-root-import-required).
-   One catch-all route (Rule 4).

## The recipe

Two files. app/\[\[...slug\]\]/page.tsx for data + render, app/layout.tsx for the style boundary.

```
// app/[[...slug]]/page.tsx
import { StudioServerComponent, getCompositionMetadata } from "@contentstack/studio-react/rsc";
import { sdk } from "@/lib/studio.server";
import { StudioServerStyles } from "@contentstack/studio-react/rsc";
import "@/registry";                     // Rule 2 — every registration module

export const dynamic = "force-dynamic";  // Studio content is per-request

export async function generateMetadata({ params, searchParams }: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { slug = [] } = await params;
  const url = "/" + slug.join("/");
  const specOptions = await sdk.fetchCompositionData(
    { url, searchQuery: new URLSearchParams(await searchParams) },
    { locale: "en-us" },
  );
  if (!specOptions?.spec) return { title: "Not found" };

  const metadata = getCompositionMetadata(specOptions, {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "",
  });
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: { images: metadata.ogImage ? [metadata.ogImage] : [] },
    alternates: { canonical: metadata.canonical },
  };
}

export default async function Page({ params, searchParams }: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { slug = [] } = await params;
  const url = "/" + slug.join("/");
  const specOptions = await sdk.fetchCompositionData(
    { url, searchQuery: new URLSearchParams(await searchParams) },
    { locale: "en-us" },
  );

  if (!specOptions?.spec) {
    // Next's not-found handling — replace with your own or import notFound().
    return <div>Not found</div>;
  }

  return (
    <>
      {/* StudioServerStyles emits the composition's design-panel token <style>
          tag directly in the server render — no extractStyles wiring needed. */}
      <StudioServerStyles specOptions={specOptions} />
      <StudioServerComponent specOptions={specOptions} />
    </>
  );
}
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

Layout: keep it thin. The recipe doesn't need anything special here beyond the root HTML shell.

```
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Registry: same pattern as Node, imported at the top of page.tsx:

```
// registry.ts
import "@contentstack/studio-react";     // Rule 2 — root import; triggers built-in registration
import "./components/Hero";
import "./components/CardBand";
import "./components/Footer";
```

## What renders server-side vs client-side

The RSC entry ships the smallest possible client bundle by design. Here's what actually runs where:

**Server-rendered (in the initial HTML response):**

-   Full built-in catalog per [docs/api/building-blocks.md](/docs/studio/composition-building-blocks): Page, Section, Repeater, ConditionBlock, Section Slots.
-   Every registered component's initial output.
-   Composition-driven metadata (<title>, OG tags, canonical).
-   Design-panel tokens via <StudioServerStyles>.

**Client-hydrated (islands only):**

-   Registered components that are "use client" themselves become client references automatically: the RSC serializer hands them across the boundary. No manual wrapping needed.
-   Lazy registrations (component: () => import("./Hero")) are awaited server-side. The SDK resolves the loader before render.

**Excluded from RSC entry:**

-   Editor / canvas UI (<StudioCanvas />): the RSC entry is visitor-facing only. The canvas route continues to import the main entry.
-   Live Preview CSLP overlay: mounts on the canvas route, not visitor routes.
-   Symbols (React internals used only in the client-authoring context).

Smoke test in CI: a bare RSC page ships **~142 bytes** of Studio-related client JS. If you're seeing more than a couple KB, a component that shouldn't be a client island probably has an unnecessary "use client".

## Live Preview

Live Preview comes from @contentstack/live-preview-utils, not from @contentstack/studio-react. Install and configure it per [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html). ContentstackLivePreview.init({...}) runs once at app boot.

Then author a small "use client" component in the app shell that turns edit events into router.refresh():

```
// app/live-preview-bridge.tsx   (customer-authored)
"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export function LivePreviewBridge() {
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;
  useEffect(() => {
    let first = true;
    const unsub = ContentstackLivePreview.onEntryChange(() => {
      if (first) { first = false; return; }  // skip register-time fire
      routerRef.current.refresh();
    });
    return () => { if (unsub != null) ContentstackLivePreview.unsubscribeOnEntryChange?.(unsub); };
  }, []);
  return null;
}
```

Mount it once in app/layout.tsx:

```
// app/layout.tsx
import { LivePreviewBridge } from "./live-preview-bridge";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LivePreviewBridge />
        {children}
      </body>
    </html>
  );
}
```

The client island is tiny. router.refresh() re-runs the RSC render with fresh data. The name LivePreviewBridge is customer convention. The SDK does not export it. Loop-safe pattern rules (never put \[router\] in the effect deps): [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7.

## Streaming

RSC + React 19 streams for free: Next flushes the shell + <head> immediately, then streams composition chunks as they resolve. If a below-the-fold section resolves slowly (a Reference to a heavy entry), the above-the-fold ships to the user first.

To keep streaming healthy: don't block the whole render on the slowest fetch. See [SSR streaming patterns](/docs/studio/ssr-streaming-patterns) for the per-section defer pattern.

## dynamic = "force-dynamic"

Studio content is per-request (URL patterns, personalization, live preview). This line disables Next's default static optimization for the route. If you want ISR (static + revalidate), replace with:

```
export const revalidate = 60;
```

Live Preview will only reflect changes on revalidation intervals with ISR. Accept the tradeoff or leave force-dynamic.

## Verify

Run the [verification curl test](/docs/studio/framework-recipe-verification). All three assertions:

-   curl http://localhost:3000/some-known-path returns composition body text (not the RSC flight payload. The rendered HTML).
-   Response contains <style data-studio-ssr> with \--token- custom properties.
-   Response contains <title> and OG tags.

Runnable reference: examples/nextjs-rsc/tests/baseline-check.ts in the SDK repo.

## Common failures on this recipe

Full list in [Troubleshooting](/docs/studio/framework-recipe-troubleshooting). RSC-specific shortlist:

-   **Attempted to call useState() from the server**: you registered a component with "use client" at the top but the SDK is trying to render it in the server graph via an older code path. Upgrade @contentstack/studio-react past the dist-ESM fix (#871).
-   **Internal components missing**: server bundle only imports @contentstack/studio-react/rsc without a root import elsewhere. Add import "@contentstack/studio-react"; to registry.ts.
-   **Unstyled first paint**: <StudioServerStyles> missing or placed after <StudioServerComponent>. Must render before (or getSSRStyleTags string emitted into <head>: either works, one required).
-   **Live Preview not updating**: client boundary missing or router.refresh() not wired.

## See also

-   [Framework recipes: index](/docs/studio/framework-recipes): the three-call contract + five universal rules.
-   [Choosing between App Router and RSC](/docs/studio/framework-recipes#choosing-between-app-router-client-component-ssr-and-rsc): decision table.
-   [Next.js App Router: client-component SSR](/docs/studio/framework-recipe-nextjs-app-router): the alternative path with slightly larger bundle but simpler wiring.
-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting).
-   [Verification](/docs/studio/framework-recipe-verification).
-   [SSR streaming patterns](/docs/studio/ssr-streaming-patterns): advanced defer / streaming for slow Sections.
