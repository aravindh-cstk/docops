---
title: "Choosing Between CSR and SSR Rendering"
description: "Learn how to choose between client-side and server-side rendering in Contentstack Studio, including patterns for Next.js, Remix, and Vite."
url: /studio/choosing-between-csr-and-ssr-rendering
uid: blt50d99f950ea64b2b
---

# Choosing Between CSR and SSR Rendering

## Choosing Between CSR and SSR Rendering

Studio doesn't force a render model on you. The SDK gives you two ways to fetch a composition and two ways to render it; you pick the combination that fits your framework.

This page covers what each combination requires and what you have to take care of.

## The two SDK entry points for fetching

| API | Where it can run | Returns | When to use |
| --- | --- | --- | --- |
| **useCompositionData(query, options)** hook | Client only (it's a React hook) | { specOptions, isLoading, error, refetchSpec, refetchData } | Pure client-side rendering |
| **csStudio.fetchCompositionData(queryOptions, options)** | Server or client | Promise<StudioComponentSpecOptions> | Server-side rendering, static generation, or RSC |

Both produce the same StudioComponentSpecOptions shape, so the renderer side (<StudioComponent specOptions={…} />) doesn't care which path produced it.

csStudio here is what studioSdk.init({ stackSdk, contentTypeUid }) returns — call it once at app boot, then reuse the reference.

## The renderer

<StudioComponent specOptions={…} /> is the renderer for every Studio integration — both pages that authors open inside Studio AND visitor-facing pages. It picks the right inner rendering path based on mode (edit, show-edit-button, plain preview) automatically; you don't choose between renderers.

Marked "use client" — works inside an SSR or RSC tree because React pre-renders client components into HTML during SSR; the directive just means it hydrates on the client and has access to browser APIs after that.

## Decision table by framework

| Framework | Recommended pattern | Visitor pages | Studio canvas route |
| --- | --- | --- | --- |
| **Next.js App Router** | RSC: fetch in a Server Component, render in a Client Component | <StudioComponent /> | Mark canvas route "use client" |
| **Next.js Pages Router** | SSR: getServerSideProps fetches; the page renders | <StudioComponent /> | Add <StudioCanvas /> route file |
| **Remix** | SSR: loader fetches; the route component renders | <StudioComponent /> | Add <StudioCanvas /> route file |
| **Vite / React SPA** | Pure CSR via useCompositionData | <StudioComponent /> | Add a route mounting <StudioCanvas /> |
| **Astro (with React island)** | SSR fetch in .astro, render the React component as an island | <StudioComponent client:load /> | Use a React island route |

## The searchQuery requirement (server-side only)

When you call useCompositionData on the client, the SDK reads window.location.search itself. There's no parameter to pass — it just works.

On the **server**, there's no window. You **must** pass searchQuery explicitly into fetchCompositionData:

```
await csStudio.fetchCompositionData({
  url: "/blog/ai-101",
  searchQuery: requestQueryString,   // forward the full request query string verbatim
});
```

The SDK reads searchQuery to apply Studio's iframe overrides (preview entry, locale, variant, draft content) and Live Preview's draft hash. The specific param names are an internal Studio↔SDK contract — they may change between SDK versions and your code must not parse or rely on them.

Your only responsibility is to forward the **full** request query string into searchQuery. The SDK does the rest. If you don't forward it in SSR, Studio's iframe overrides and Live Preview won't reach the SDK — visitors get the right page, but the in-Studio preview and live edit channel are broken inside the iframe.

### Where to get the query string

| Framework | How |
| --- | --- |
| Next.js App Router (Server Component) | searchParams prop on the page → serialise back to a string with new URLSearchParams(searchParams).toString() |
| Next.js Pages Router (getServerSideProps) | context.req.url.split("?")\[1\] ?? "" |
| Remix loader | new URL(request.url).search.replace(/^\\?/, "") |
| Vite SPA | Not needed on the server (no SSR) |

## Pattern 1 — Pure CSR

The simplest. No SEO; first paint is a loading state.

```
"use client";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export default function BlogPostPage({ slug }) {
  const { specOptions, isLoading, error } = useCompositionData(
    { url: `/blog/${slug}` },
  );

  if (isLoading) return <Loading />;
  if (error)     return <ErrorState message={error instanceof Error ? error.message : String(error)} />;
  if (!specOptions?.spec) return <NotFound />;
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - No SEO without extra work (search engines won't see the rendered content) - First paint shows the loading state — measure if that's acceptable for your UX

## Pattern 2 — SSR with hydration (Next.js Pages Router or Remix)

Fetch on the server, render on the client with the fetched data already hydrated.

```
// pages/[[...slug]].tsx — Next.js Pages Router catch-all (one file handles every URL)
import { studioSdk, StudioComponent } from "@contentstack/studio-react";
import type { StudioComponentSpecOptions } from "@contentstack/studio-react";

export async function getServerSideProps(context) {
  const searchQuery = context.req.url.split("?")[1] ?? "";
  const csStudio = studioSdk.init({ stackSdk, contentTypeUid: "your_compositions_ct" });  // call once at app boot; returns the same instance on repeat calls

  // fetchCompositionData REJECTS for not-found URLs — catch to return a 404
  // cleanly. The hasSpec-false branch in the render component is a defensive
  // backstop for empty-but-resolved states.
  try {
    const specOptions = await csStudio.fetchCompositionData({
      url: `/blog/${context.params.slug}`,
      searchQuery,
    });
    return { props: { specOptions } };
  } catch {
    return { notFound: true };
  }
}

export default function BlogPostPage({ specOptions }: { specOptions: StudioComponentSpecOptions }) {
  if (!specOptions.hasSpec) return <NotFound />;
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - searchQuery is required — pass it from context.req.url - specOptions is a JSON-serialisable object — Next.js will serialise/deserialise it through getServerSideProps cleanly - On the client, **wire Live Preview's onEntryChange** to refetch (see below), otherwise the page stays stale when authors edit content

## Pattern 3 — RSC (Next.js App Router)

Fetch in a Server Component, render in a Client Component. The current recommended Next.js pattern.

> **Root-collision caveat.** The example below uses app/\[\[...slug\]\]/page.tsx (optional catch-all — matches / AND nested URLs). This **collides with app/page.tsx** if your app already has one. For apps with an existing root page, use the **non-optional** form app/\[...slug\]/page.tsx instead — your existing app/page.tsx keeps owning /, and the catch-all serves everything else. Same rule applies to Pages Router (pages/\[\[...slug\]\].tsx vs pages/\[...slug\].tsx).

```
// app/[[...slug]]/page.tsx — Server Component (no "use client")
// ONE catch-all file handles every URL on the site.
// (If you have an existing app/page.tsx, use app/[...slug]/page.tsx — non-optional — instead.)
import { csStudio } from "@/lib/contentstack";    // csStudio = studioSdk.init({ stackSdk, contentTypeUid }) — created once at boot
import { StudioRouteClient } from "./StudioRouteClient";

export default async function StudioRoute({ params, searchParams }) {
  const searchQuery = new URLSearchParams(
    searchParams as Record<string, string>,
  ).toString();

  const url = "/" + (params.slug ?? []).join("/");
  // fetchCompositionData rejects for not-found URLs — catch and call notFound()
  // so Next.js renders your app/not-found.tsx cleanly.
  let specOptions;
  try {
    specOptions = await csStudio.fetchCompositionData({ url, searchQuery });
  } catch {
    notFound();
  }

  return <StudioRouteClient specOptions={specOptions!} />;
}
```

```
// app/[[...slug]]/StudioRouteClient.tsx — Client Component
"use client";
import { StudioComponent } from "@contentstack/studio-react";
import type { StudioComponentSpecOptions } from "@contentstack/studio-react";

export function StudioRouteClient({ specOptions }: { specOptions: StudioComponentSpecOptions }) {
  if (!specOptions.hasSpec) return <NotFound />;
  return <StudioComponent specOptions={specOptions} />;
}
```

**Why split?** <StudioComponent /> is a client component (it needs browser APIs after hydration). RSC can't render it directly — but a Server Component can pass server-fetched data into a Client Component wrapper.

**Why one catch-all?** Studio resolves URL patterns inside csStudio.fetchCompositionData({ url }). The router only needs ONE route that captures every URL; Studio handles the per-template matching internally. See [template preview routes](/docs/studio/template-preview-routes) for opt-out paths (/api/\*, /admin/\*).

**Take care of:** - Don't try to render <StudioComponent /> in the Server Component — Next.js will complain - searchParams in App Router pages is an object; serialise it back to a query string with URLSearchParams - Hydration mismatches won't happen if your server-fetched specOptions is identical to what the client would fetch. Both go through the same SDK path, so they are — as long as searchQuery is forwarded correctly.

## Pattern 4 — SSG (static generation)

For routes that don't change often, fetch at build time.

```
// pages/products/[sku].tsx — Next.js Pages Router with getStaticProps
import { studioSdk, StudioComponent } from "@contentstack/studio-react";

export async function getStaticProps({ params }) {
  const csStudio = studioSdk.init({ stackSdk, contentTypeUid: "your_compositions_ct" });
  try {
    const specOptions = await csStudio.fetchCompositionData({
      url: `/products/${params.sku}`,
      searchQuery: "",          // SSG isn't inside Studio; no params to forward
    });
    return {
      props: { specOptions },
      revalidate: 60,           // ISR — re-fetch every 60s
    };
  } catch {
    return { notFound: true };  // fetchCompositionData rejects if the URL doesn't resolve
  }
}

export async function getStaticPaths() {
  // List the SKUs you want pre-built…
  return { paths: [], fallback: "blocking" };
}

export default function ProductPage({ specOptions }) {
  if (!specOptions.hasSpec) return <NotFound />;
  return <StudioComponent specOptions={specOptions} />;
}
```

**Take care of:** - searchQuery: "" is safe at build time — no Studio iframe is involved - ISR revalidation handles publish updates. For instant updates, wire a Contentstack publish webhook to res.revalidate() on a custom API route. - Live Preview won't update an SSG page until revalidation triggers — the client-side onEntryChange only works after hydration

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

For SSR + hydration patterns, onEntryChange triggers your data layer to invalidate — the Server Component re-renders with fresh data, and the page updates without a full reload.

For pure CSR, onEntryChange calls refetchSpec returned by useCompositionData:

```
const { specOptions, refetchSpec } = useCompositionData({ url });

useEffect(() => {
  ContentstackLivePreview.onEntryChange(refetchSpec);
}, [refetchSpec]);
```

## <StudioCanvas /> is client-only

The canvas route — the one that previews **sections** inside Studio's iframe — has to be a Client Component. There's no SSR for it because it's the editor surface.

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
2.  **<StudioCanvas /> is always client-only — and must NOT be SSR'd.** App Router: dynamic(() => import("@contentstack/studio-react").then(m => m.StudioCanvas), { ssr: false }). The bare "use client" directive is necessary but not sufficient — App Router still server-renders the initial HTML.
3.  **Live Preview is client-only.** Wire onEntryChange after hydration to trigger refetches.
4.  **Hydration mismatch.** If your server fetch and client expectations diverge (different locale defaults, different variants), you'll see a mismatch warning. Pin both sides to the same locale / variantAlias options.
5.  **Cache invalidation on publish.** SSG/ISR doesn't update until revalidation. For instant updates, wire a Contentstack publish webhook to your revalidation endpoint.
6.  **One renderer everywhere.** <StudioComponent specOptions={...} /> is the single renderer for both visitor pages and pages authors open inside Studio �� it picks the right inner path by mode automatically.

## Common pitfalls

| What you might do | What goes wrong | Fix |
| --- | --- | --- |
| Call useCompositionData in a Server Component | React error: hooks can't run on the server | Use csStudio.fetchCompositionData server-side; pass result to a Client Component |
| Skip searchQuery in SSR | Studio iframe doesn't pick up overrides; preview shows wrong locale/variant/entry | Forward request.url.search (Pages Router / Remix) or serialise searchParams (App Router) |
| Render <StudioComponent /> in a Server Component directly | Next.js complains the component is client-only | Wrap it in a "use client" Client Component that takes specOptions as a prop |
| Forget "use client" on the canvas route | Hooks-on-server error from Studio's renderer | Add "use client" at the top of the canvas route file (App Router) |
| Use <StudioCanvas /> on a template route | Studio thinks every URL is a section; nothing renders | Use <StudioComponent /> on template routes; <StudioCanvas /> only on the canvas route |
| Skip Live Preview's onEntryChange wiring | Page never updates as authors edit | Wire onEntryChange to your refetch / router.refresh() / cache invalidation |

## Next

→ [Create a Studio project](/docs/studio/create-a-studio-project)
