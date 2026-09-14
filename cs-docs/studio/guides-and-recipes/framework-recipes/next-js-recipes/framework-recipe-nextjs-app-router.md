---
title: "Framework Recipe: Next.js App Router"
description: "The default App Router path. <StudioComponent /> is a client component. Next server-renders its initial output, hydration takes over for interactivity."
url: /studio/framework-recipe-nextjs-app-router
uid: bltc8bf48ed2c10bacb
---

# Framework Recipe: Next.js App Router

## Framework recipe: Next.js App Router (client-component SSR)

The default App Router path. <StudioComponent /> is a client component. Next server-renders its initial output, hydration takes over for interactivity. Full SEO. Simpler wiring than the RSC entry.

> **Adapted recipe**: smoke-passed at authoring time. The RSC recipe (examples/nextjs-rsc/) is CI-tested. This one adapts the same three calls to the main entry. If you hit trouble, cross-check against the [RSC recipe](/docs/studio/framework-recipe-nextjs-rsc).

> **Verified in-repo:** smoke-tested against the Studio Documentation Contentstack project (Next.js 14.2.35). curl /blog/welcome-to-studio returns 200 OK, 18 KB composition body, <style data-studio-ssr> with 180 \--token-\* properties, populated <title> + <meta og:title>, zero data-cs-defer-builtin placeholders.

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first.

## Prerequisites

-   Next.js 14+ (16 preferred for Turbopack + React 19).
-   Studio installed. All registrations in a server-safe module (Rule 2).
-   One catch-all route (Rule 4).

## The recipe

Two files. Server component fetches. Client wrapper renders. Studio built-ins server-render inside the client wrapper via Next's SSR pass.

```
// app/[[...slug]]/page.tsx  (server component — NO "use client")
import { getCompositionMetadata } from "@contentstack/studio-react";
import { sdk } from "@/lib/studio.server";
import { StudioClient } from "./studio-client";
import "@/registry";                     // Rule 2 — every registration module

export const dynamic = "force-dynamic";

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

  const meta = getCompositionMetadata(specOptions, { baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "" });
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { images: meta.ogImage ? [meta.ogImage] : [] },
    alternates: { canonical: meta.canonical },
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

  if (!specOptions?.spec) return <div>Not found</div>;

  return <StudioClient specOptions={specOptions} />;
}
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

```
// app/[[...slug]]/studio-client.tsx
"use client";
import { StudioComponent, getSSRStyleTags } from "@contentstack/studio-react";
import "@/registry";                     // same registry — server + client both need it (Rule 2)

export function StudioClient({ specOptions }: { specOptions: any }) {
  const styleTags = getSSRStyleTags(specOptions.spec);
  return (
    <>
      {/* Style tags land in the SSR pass; browser sees them on first paint. */}
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <StudioComponent specOptions={specOptions} />
    </>
  );
}
```

Registry, imported in both files (server + client):

```
// registry.ts
import "@contentstack/studio-react";     // Rule 2 — root import
import "./components/Hero";
import "./components/CardBand";
```

## Why the client wrapper

<StudioComponent /> in the main entry is a client component. Passing specOptions from the server component into it works because specOptions is a plain JSON-serializable object. Next serializes across the boundary automatically.

Do not add useCompositionData inside the client wrapper (Rule 3). The server component's fetch is the only fetch.

## Live Preview

Live Preview comes from @contentstack/live-preview-utils, not from @contentstack/studio-react. Install and configure it per [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), then author a small client-boundary component in the app shell that turns edit events into router.refresh():

```
// app/live-preview-bridge.tsx  (customer-authored)
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

Mount <LivePreviewBridge /> once in app/layout.tsx. ContentstackLivePreview.init({...}) is called once at app boot per [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 5.

The name LivePreviewBridge is a customer convention. The SDK does not export a component by this name. See the loop-safe pattern warnings in [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7 (never put \[router\] in the effect deps).

## When to switch to the RSC entry

Move to the [RSC recipe](/docs/studio/framework-recipe-nextjs-rsc) when:

-   You want the ~142-byte structural-JS bundle instead of the client-hydration payload.
-   You need streaming (below-the-fold sections flush after above-the-fold).
-   You're on edge runtime and want to minimize the cold-start cost.

The main entry (this recipe) is the sensible default when those aren't hard requirements.

## Verify

[Verification curl test](/docs/studio/framework-recipe-verification). All three assertions.

## Common failures

Full list in [Troubleshooting](/docs/studio/framework-recipe-troubleshooting). App Router main-entry shortlist:

-   **Hydration mismatch**: you called useCompositionData in the client wrapper on top of the server fetch. Remove the client-side call. Rule 3.
-   **Internal components missing**: registry.ts missing from one of the two files (server component or client wrapper). Both need it.
-   **Live Preview blank**: customer-authored <LivePreviewBridge /> (from @contentstack/live-preview-utils) outside a "use client" boundary, or router.refresh() not wired. Full pattern: [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7.
-   **Style FOUC**: getSSRStyleTags output not rendered before <StudioComponent /> in the client wrapper.

## See also

-   [Framework recipes: index](/docs/studio/framework-recipes).
-   [RSC recipe](/docs/studio/framework-recipe-nextjs-rsc): the alternative path with a smaller bundle.
-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting).
-   [Verification](/docs/studio/framework-recipe-verification).
