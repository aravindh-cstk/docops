---
title: "Choosing Between CSR and SSR Rendering"
description: "Learn how to choose between client-side and server-side rendering in Contentstack Studio, including patterns for Next.js, Remix, and Vite."
url: /studio/choosing-between-csr-and-ssr-rendering
---

# Choosing Between CSR and SSR Rendering

## Choosing Between CSR and SSR Rendering

Studio doesn't force a render model on you. The SDK gives you two ways to fetch a composition and two ways to render it, so pick the combination that fits your framework.

This page covers what each combination requires and what you have to take care of.

## The Two SDK Entry Points for Fetching

| API | Where it can run | Returns | When to use |
| --- | --- | --- | --- |
| **useCompositionData(query, options)** hook | Client only (it's a React hook) | { specOptions, isLoading, error, refetchSpec, refetchData } | Pure client-side rendering |
| **sdk.fetchCompositionData(queryOptions, options)** | Server or client | Promise<StudioComponentSpecOptions> | Server-side rendering, static generation, or RSC |

Both produce the same StudioComponentSpecOptions shape, so the renderer side (<StudioComponent specOptions={…} />) doesn't care which path produced it.

sdk here is what studioSdk.init({ stackSdk, contentTypeUid }) returns, so call it once at app boot, then reuse the reference.

## The Renderer

<StudioComponent specOptions={…} /> is the renderer for every Studio integration, covering both pages that authors open inside Studio AND visitor-facing pages. It picks the right inner rendering path based on mode (edit, show-edit-button, plain preview) automatically; you don't choose between renderers.

Marked "use client", it works inside an SSR or RSC tree because React pre-renders client components into HTML during SSR; the directive just means it hydrates on the client and has access to browser APIs after that.

## Decision Table by Framework

| Framework | Recommended pattern | Visitor pages | Studio canvas route |
| --- | --- | --- | --- |
| **Next.js App Router** | RSC: fetch in a Server Component, render in a Client Component | <StudioComponent /> | Mark canvas route "use client" |
| **Next.js Pages Router** | SSR: getServerSideProps fetches; the page renders | <StudioComponent /> | Add <StudioCanvas /> route file |
| **Remix** | SSR: loader fetches; the route component renders | <StudioComponent /> | Add <StudioCanvas /> route file |
| **Vite / React SPA** | Pure CSR via useCompositionData | <StudioComponent /> | Add a route mounting <StudioCanvas /> |
| **Astro (with React island)** | SSR fetch in .astro, render the React component as an island | <StudioComponent client:load /> | Use a React island route |

## The searchQuery requirement (server-side only)

When you call useCompositionData on the client, the SDK reads window.location.search itself. There's no parameter to pass, so it just works.

On the **server**, there's no window. You **must** pass searchQuery explicitly into fetchCompositionData:

```
await sdk.fetchCompositionData({
  url: "/blog/ai-101",
  searchQuery: requestQueryString,   // forward the full request query string verbatim
});
```

The SDK reads searchQuery to apply Studio's iframe overrides (preview entry, locale, variant, draft content) and Live Preview's draft hash. The specific param names are an internal Studio↔SDK contract; they may change between SDK versions and your code must not parse or rely on them.

Your only responsibility is to forward the **full** request query string into searchQuery. The SDK does the rest. If you don't forward it in SSR, Studio's iframe overrides and Live Preview don't reach the SDK: visitors get the right page, but the in-Studio preview and live edit channel is broken inside the iframe.

### Where to get the query string

| Framework | How |
| --- | --- |
| Next.js App Router (Server Component) | searchParams prop on the page, then serialise back to a string with new URLSearchParams(searchParams).toString() |
| Next.js Pages Router (getServerSideProps) | context.req.url.split("?")\[1\] ?? "" |
| Remix loader | new URL(request.url).search.replace(/^\\?/, "") |
| Vite SPA | Not needed on the server (no SSR) |

## Pattern 1: Pure CSR

The simplest. No SEO; first paint is a loading state.

```
"use client";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export default function BlogPostPage({ slug }) {
  const { specOptions, isLoading, error } = useCompositionData(
    { url: `/blog/${slug}` },
  );

  if (isLoading) return <Loading />;
  if (error)     return <ErrorState message={error.message} />;
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - No SEO without extra work (search engines won't see the rendered content) - First paint shows the loading state, so measure if that's acceptable for your UX

## Pattern 2: SSR with hydration (Next.js Pages Router or Remix)

Fetch on the server, render on the client with the fetched data already hydrated.

```
// pages/[[...slug]].tsx — Next.js Pages Router catch-all (one file handles every URL)
import { studioSdk, StudioComponent } from "@contentstack/studio-react";
import type { StudioComponentSpecOptions } from "@contentstack/studio-react";

export async function getServerSideProps(context) {
  const searchQuery = context.req.url.split("?")[1] ?? "";

  const sdk = studioSdk.init({ stackSdk, contentTypeUid: "your_compositions_ct" });  // call once at app boot; returns the same instance on repeat calls
  const specOptions = await sdk.fetchCompositionData({
    url: `/blog/${context.params.slug}`,
    searchQuery,
  });

  return { props: { specOptions } };
}

export default function BlogPostPage({ specOptions }: { specOptions: StudioComponentSpecOptions }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - searchQuery is required, so pass it from context.req.url - specOptions is a JSON-serialisable object, and Next.js will serialise/deserialise it through getServerSideProps cleanly - On the client, **wire Live Preview's onEntryChange** to refetch (see below), otherwise the page stays stale when authors edit content

## Pattern 3: RSC (Next.js App Router)

Fetch in a Server Component, render in a Client Component. The current recommended Next.js pattern.

> **Collision risk with optional catch-alls.** The example below uses app/\[\[...slug\]\]/page.tsx, the optional catch-all, which matches / AND every nested URL. This **collides with app/page.tsx** if your app already has one. For apps with an existing root page, use the **non-optional** form app/\[...slug\]/page.tsx instead: your existing app/page.tsx keeps owning /, and the catch-all serves everything else. The same rule applies to Pages Router (pages/\[\[...slug\]\].tsx vs pages/\[...slug\].tsx).

```
// app/[[...slug]]/page.tsx — Server Component (no "use client")
// ONE catch-all file handles every URL on the site.
// (If you have an existing app/page.tsx, use app/[...slug]/page.tsx — non-optional — instead.)
import { sdk } from "@/lib/contentstack";    // sdk = studioSdk.init({ stackSdk, contentTypeUid }) — created once at boot
import { StudioRouteClient } from "./StudioRouteClient";

export default async function StudioRoute({ params, searchParams }) {
  const searchQuery = new URLSearchParams(
    searchParams as Record<string, string>,
  ).toString();

  const url = "/" + (params.slug ?? []).join("/");
  const specOptions = await sdk.fetchCompositionData({ url, searchQuery });

  return <StudioRouteClient specOptions={specOptions} />;
}
```

```
// app/[[...slug]]/StudioRouteClient.tsx — Client Component
"use client";
import { StudioComponent } from "@contentstack/studio-react";
import type { StudioComponentSpecOptions } from "@contentstack/studio-react";

export function StudioRouteClient({ specOptions }: { specOptions: StudioComponentSpecOptions }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

**Why split?** <StudioComponent /> is a client component (it needs browser APIs after hydration). RSC can't render it directly, but a Server Component can pass server-fetched data into a Client Component wrapper.

**Why one catch-all?** Studio resolves URL patterns inside sdk.fetchCompositionData({ url }). The router only needs ONE route that captures every URL; Studio handles the per-template matching internally. See [template preview routes](/docs/studio/template-preview-routes) for opt-out paths (/api/\*, /admin/\*).

**Take care of:** - Don't try to render <StudioComponent /> in the Server Component, or Next.js will complain - searchParams in App Router pages is an object; serialise it back to a query string with URLSearchParams - Hydration mismatches don't happen if your server-fetched specOptions is identical to what the client would fetch. Both go through the same SDK path, so they are, as long as searchQuery is forwarded correctly.

## Pattern 4: SSG (static generation)

For routes that don't change often, fetch at build time.

```
// pages/products/[sku].tsx — Next.js Pages Router with getStaticProps
import { studioSdk, StudioComponent } from "@contentstack/studio-react";

export async function getStaticProps({ params }) {
  const sdk = studioSdk.init({ stackSdk, contentTypeUid: "your_compositions_ct" });
  const specOptions = await sdk.fetchCompositionData({
    url: `/products/${params.sku}`,
    searchQuery: "",          // SSG isn't inside Studio; no params to forward
  });

  return {
    props: { specOptions },
    revalidate: 60,           // ISR — re-fetch every 60s
  };
}

export async function getStaticPaths() {
  // List the SKUs you want pre-built…
  return { paths: [], fallback: "blocking" };
}

export default function ProductPage({ specOptions }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - searchQuery: "" is safe at build time, since no Studio iframe is involved - ISR revalidation handles publish updates. For instant updates, wire a Contentstack publish webhook to res.revalidate() on a custom API route. - Live Preview won't update an SSG page until revalidation triggers, because the client-side onEntryChange only works after hydration

## Live Preview considerations

Live Preview is **client-only**. The server can't subscribe to entry-change events because there's no persistent connection from Contentstack to your server.

For real-time updates while authors edit:

```
// In the client component that renders the page
useEffect(() => {
  ContentstackLivePreview.onEntryChange(() => {
    router.refresh();  // Next.js App Router — re-runs the Server Component fetch
    // or trigger a refetch via your data layer (React Query, SWR, etc.)
  });
}, []);
```

For SSR + hydration patterns, onEntryChange triggers your data layer to invalidate: the Server Component re-renders with fresh data, and the page updates without a full reload.

For pure CSR, onEntryChange calls refetchSpec returned by useCompositionData:

```
const { specOptions, refetchSpec } = useCompositionData({ url });

useEffect(() => {
  ContentstackLivePreview.onEntryChange(refetchSpec);
}, [refetchSpec]);
```

## <StudioCanvas /> is client-only

The canvas route, which previews **sections** inside Studio's iframe, has to be a Client Component. There's no SSR for it because it's the editor surface.

```
// app/canvas/page.tsx — Next.js App Router
"use client";
import dynamic from "next/dynamic";

// StudioCanvas is browser-context-dependent — renders null on the server,
// populates on the client. The "use client" directive alone doesn't prevent
// the initial server render → load it client-only via next/dynamic to
// avoid a hydration mismatch.
const StudioCanvas = dynamic(
  () => import("@contentstack/studio-react").then((m) => m.StudioCanvas),
  { ssr: false },
);

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

If you forget dynamic({ ssr: false }) in App Router, you'll see a React hydration error: <Suspense> (server) vs <div> (client). The bare "use client" doesn't fix this on its own.

## Things to take care of (consolidated)

1.  **Forward searchQuery on the server.** Without it, Studio's iframe overrides (locale, variant, preview entry, edit mode) don't apply.
2.  **<StudioCanvas /> is always client-only and must NOT be SSR'd.** App Router: dynamic(() => import("@contentstack/studio-react").then(m => m.StudioCanvas), { ssr: false }). The bare "use client" directive is necessary but not sufficient, since App Router still server-renders the initial HTML.
3.  **Live Preview is client-only.** Wire onEntryChange after hydration to trigger refetches.
4.  **Hydration mismatch.** If your server fetch and client expectations diverge (different locale defaults, different variants), you'll see a mismatch warning. Pin both sides to the same locale / variantAlias options.
5.  **Cache invalidation on publish.** SSG/ISR doesn't update until revalidation. For instant updates, wire a Contentstack publish webhook to your revalidation endpoint.
6.  **One renderer everywhere.** <StudioComponent specOptions={...} /> is the single renderer for both visitor pages and pages authors open inside Studio, and it picks the right inner path by mode automatically.

## Common pitfalls

| What you might do | What goes wrong | Fix |
| --- | --- | --- |
| Call useCompositionData in a Server Component | React error: hooks can't run on the server | **Use sdk.fetchCompositionData server-side; pass result to a Client Component** |
| Skip searchQuery in SSR | Studio iframe doesn't pick up overrides; preview shows wrong locale/variant/entry | **Forward request.url.search (Pages Router / Remix) or serialize searchParams (App Router)** |
| Render <StudioComponent /> in a Server Component directly | Next.js complains the component is client-only | **Wrap it in a "use client" Client Component that takes specOptions as a prop** |
| Forget "use client" on the canvas route | Hooks-on-server error from Studio's renderer | **Add "use client" at the top of the canvas route file (App Router)** |
| Use <StudioCanvas /> on a template route | Studio thinks every URL is a section; nothing renders | **Use <StudioComponent /> on template routes; <StudioCanvas /> only on the canvas route** |
| Skip Live Preview's onEntryChange wiring | Page never updates as authors edit | **Wire onEntryChange to your refetch / router.refresh() / cache invalidation** |

## Next

[Create a Studio project](/docs/studio/create-a-studio-project)
