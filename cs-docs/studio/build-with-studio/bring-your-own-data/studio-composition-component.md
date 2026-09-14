---
title: "The StudioComposition Component"
description: "<StudioComposition /> renders a composition (a full page, or a section as the root) against data you already hold, passed in as a context prop."
url: /studio/studio-composition-component
---

# The StudioComposition Component

## StudioComposition

<StudioComposition /> renders a composition (a full page, or a section as the root) against data **you** already hold, passed in as a context prop. No SDK data fetch, no hook. It works in client-side rendering (CSR) and Next.js server-side rendering (SSR).

Use it when the data isn't coming from the SDK's normal template fetch: you fetched it yourself, it's one element of an array you're looping, or it comes from a system other than Contentstack.

**Note:** This is different from <StudioComponent />. <StudioComponent /> fetches a composition for a route and renders it with its bound CMS data. <StudioComposition /> renders a composition you hand the data to. See [Two SDK components](/docs/studio/composition-rendering-reference) for the <StudioComponent /> surface.

## What it does

You give it which composition to render, and the context data to render it against.

-   **Which composition**: either a pre-fetched spec (from sdk.fetchComposition) or a compositionUid it fetches for you on the client.
-   **The data**: a context object, placed internally at dataSources.template. The composition's template bindings resolve against it. Pass the raw element you already hold (for example one item of a multiple-group field). The SDK wraps it, you don't build a full spec-data envelope.

Embedded sections inside the composition are auto-scoped from your context (no network). You never build section\_scoped\_data yourself.

## The props

```
interface StudioCompositionProps {
  context: unknown;                    // required — the data to render against
  spec?: StudioSpec;                   // a pre-fetched, spec-only composition
  compositionUid?: string;             // OR a uid the component fetches on the client
  loadingFallback?: React.ReactNode;   // shown during the compositionUid fetch (default null)
  errorFallback?: React.ReactNode;     // shown if the compositionUid fetch fails (default null)
}
```

You must pass **either** spec **or** compositionUid: the component throws if neither is present. When spec is provided, compositionUid is ignored and there is no loading phase (nothing to fetch).

For the full type-level reference, see [<StudioComposition /> reference](/docs/studio/studio-composition-props-reference).

## Two ways to give it a composition

### 1\. Pre-fetch the spec (works in SSR and CSR)

Resolve the composition once with sdk.fetchComposition, then pass the returned spec. This is the only path that works during a server render: a "use client" component can't fetch on the server.

```
import { sdk } from "@/lib/contentstack";
import { StudioComposition } from "@contentstack/studio-react";

// Spec-only fetch — resolves the composition STRUCTURE, skips the data fetch.
const spec = await sdk.fetchComposition({ compositionUid: "hero_section", searchQuery: "" });

// `element` is data you already hold.
<StudioComposition spec={spec} context={element} />;
```

sdk.fetchComposition(query, options?) returns a Promise<StudioSpec> whose data is intentionally empty. This is the bring-your-own-data path. The query takes the same identifier shapes as sdk.fetchCompositionData (compositionUid, url, templateContentTypeUid) plus the searchQuery string.

### 2\. Pass a compositionUid (client only)

Hand the component a compositionUid and it fetches on the client. Give it loadingFallback and errorFallback for the fetch phase.

```
"use client";
import { StudioComposition } from "@contentstack/studio-react";

<StudioComposition
  compositionUid="hero_section"
  context={element}
  loadingFallback={<SectionSkeleton />}
  errorFallback={<NotFound />}
/>;
```

A failed fetch is logged to the console and renders errorFallback. While the fetch is in flight, loadingFallback renders.

**Tip:** In SSR, prefer the pre-fetched spec path. You can resolve the spec on the server and stream markup immediately, with no client-side loading state. Reserve the compositionUid path for client-rendered surfaces.

## Rendering a section per array element (the loop)

The common case: you hold a multiple-group array and want to render the same section once per element, each against its own data. Fetch the spec once, map over your data.

```
import { sdk } from "@/lib/contentstack";
import { StudioComposition } from "@contentstack/studio-react";

const spec = await sdk.fetchComposition({ compositionUid: "product_tile", searchQuery: "" });

export function ProductGrid({ products }: { products: ProductElement[] }) {
  return (
    <div className="grid">
      {products.map((element, i) => (
        <StudioComposition key={i} spec={spec} context={element} />
      ))}
    </div>
  );
}
```

Fetching the spec once and reusing it across the loop avoids a fetch per item. If you use the compositionUid path inside a loop instead, each <StudioComposition /> fetches independently, fine for a handful, wasteful for many.

Rendered, that's one section three times over, each against its own element, no CMS entry behind any of them:

![Browser page titled "Latest releases" with three cards side by side: Studio 1.4 Bring your own data, Studio 1.3 Slot defaults, Studio 1.2 Smart containers. Each card is the same Featured Card section composition rendered against a different element of an array the page holds itself, with its title, body and "Read more" link resolving from that element.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf47e01be2f8e0da5/a87b4ff552cbdb65408ff008/studio-composition-per-element.png)

The section itself is unchanged, the same one an author built against a content type. Only where its template data comes from differs.

## Works in both CSR and SSR

context is a React prop, so the component renders wherever React runs. Only the fetch path for the composition differs.

#### CSR example: Vite / React SPA

```
"use client";
import { useEffect, useState } from "react";
import { StudioComposition, type StudioSpec } from "@contentstack/studio-react";
import { sdk } from "@/lib/contentstack";

export function HeroBlock({ element }: { element: unknown }) {
  const [spec, setSpec] = useState<StudioSpec | null>(null);

  useEffect(() => {
    sdk.fetchComposition({ compositionUid: "hero_section", searchQuery: "" }).then(setSpec);
  }, []);

  if (!spec) return <SectionSkeleton />;
  return <StudioComposition spec={spec} context={element} />;
}
```

Or skip the prefetch entirely and let the component fetch:

```
"use client";
import { StudioComposition } from "@contentstack/studio-react";

export function HeroBlock({ element }: { element: unknown }) {
  return (
    <StudioComposition
      compositionUid="hero_section"
      context={element}
      loadingFallback={<SectionSkeleton />}
      errorFallback={<NotFound />}
    />
  );
}
```

#### SSR / RSC example: Next.js App Router

Resolve the spec on the server, render immediately, no client loading state.

```
// app/products/page.tsx — Server Component (no "use client")
import { sdk } from "@/lib/contentstack";
import { StudioComposition } from "@contentstack/studio-react";

export default async function ProductsPage() {
  // Your own data fetch + the spec-only composition fetch, in parallel.
  const [products, spec] = await Promise.all([
    getProducts(),                                                       // your data source
    sdk.fetchComposition({ compositionUid: "product_tile", searchQuery: "" }),
  ]);

  return (
    <div className="grid">
      {products.map((element, i) => (
        <StudioComposition key={i} spec={spec} context={element} />
      ))}
    </div>
  );
}
```

#### Equivalent patterns for other frameworks

| Framework | Where to fetch the spec | Where to fetch your data | Where <StudioComposition /> mounts |
| --- | --- | --- | --- |
| Vite / React SPA | useEffect + sdk.fetchComposition, or the compositionUid path | useEffect / React Query / SWR | Directly in the page component |
| Next.js Pages Router | getServerSideProps calls sdk.fetchComposition | Same getServerSideProps | Page component receives both as props |
| Next.js App Router (RSC) | Server Component awaits sdk.fetchComposition | Server Component awaits your fetch | Rendered in the Server Component (or a "use client" child) |
| Remix | loader calls sdk.fetchComposition | Same loader | Route component reads via useLoaderData |
| Astro (with React island) | .astro server-side fetch | Same .astro server-side fetch | React island marked client:load |

For the full render-strategy decision, see [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering).

## How context maps to bindings

The composition an author built has bindings against its template. When you render with <StudioComposition />, your context object becomes that template data, so a binding to title reads context.title, a binding to sub\_items reads context.sub\_items, and so on.

Pass the element in the same shape the composition's bindings expect. If the composition was authored against a product template, context is one product-shaped object. If it iterates sub\_items, context has a sub\_items array.

## Common pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Neither spec nor compositionUid passed | Component throws at render | Pass one of them: spec for SSR, compositionUid for client-only |
| Using compositionUid during a server render | Nothing renders on the server. Content pops in on the client | Pre-fetch with sdk.fetchComposition and pass spec instead |
| context shape doesn't match the composition's bindings | Bound nodes render blank | Pass the element in the shape the composition was authored against (same field names) |
| compositionUid path with no fallbacks | Blank flash during fetch / silent failure | Pass loadingFallback and errorFallback |
| Re-fetching the spec inside a loop | Extra network calls, slow render | Fetch the spec once above the loop, pass the same spec to each item |
| Expecting spec.data to be populated | spec.data comes back empty | That's by design: fetchComposition skips the data fetch, you provide it via context |

## See also

-   [<StudioComposition /> reference](/docs/studio/studio-composition-props-reference): every prop and the fetchComposition query shape
-   [Troubleshooting](/docs/studio/troubleshoot-bring-your-own-data): the errors this component and sdk.fetchComposition throw, and the silent failures they don't
-   [Slot data](/docs/studio/slot-data): the other bring-your-own-data surface
-   [Component Default Data](/docs/studio/set-component-default-data): the data prop on <StudioComponent />
-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference): the route-rendering component
-   [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering): pick a render strategy
