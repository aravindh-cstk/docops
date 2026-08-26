---
title: "SSR Streaming Patterns"
description: "Learn how to integrate Contentstack Studio with Next.js App Router, Remix, and Astro to stream SSR responses and optimize page load performance."
url: /studio/ssr-streaming-patterns
uid: bltc369178939abe9ce
---

# SSR Streaming Patterns

## SSR Streaming Patterns

Modern SSR frameworks (Next App Router, Remix with defer, Astro islands) stream the response; the shell goes out first, slower content streams in chunks. Studio composes pages from many bindings, each of which may resolve to a CDA call. Naive integration blocks the entire response on the slowest call. Done right, the shell + above-the-fold renders fast and the below-the-fold sections stream in.

## The Model

Every Studio render goes through three async phases:

1.  **Spec fetch:** load the composition record from Contentstack. Fast (one CDA call). Required for any render to start.
2.  **Binding resolution:** fetch every entry the composition references. This is where the work is: each binding may hit CDA, each Repeater may hit a query, sections add references, etc.
3.  **Component render:** actually render the React tree with the resolved data.

For streaming, the trick is making phase 3 NOT block on all of phase 2. Each section streams as its bindings resolve.

## Recommended Patterns

### Next.js App Router: wrap the awaited fetch in <Suspense>

<StudioComponent />'s specOptions prop is the **resolved** object from sdk.fetchCompositionData(...); you fetch first, pass the result in:

```
// app/blog/[slug]/page.tsx
import { Suspense } from "react";
import { StudioComponent } from "@contentstack/studio-react";
import { sdk } from "@/lib/contentstack";

async function BlogPostContent({ slug }: { slug: string }) {
  const specOptions = await sdk.fetchCompositionData({
    contentTypeUid: "blog_post",
    templateEntryUid: slug,
  });
  return <StudioComponent specOptions={specOptions} />;
}

export default function BlogPost({ params }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <BlogPostContent slug={params.slug} />
    </Suspense>
  );
}
```

The shell + skeleton ship immediately; the awaited fetch + Studio render stream in once the spec + bindings resolve.

For finer-grained per-section streaming (each section showing its own skeleton independently), the cleanest pattern is to author the page as **multiple sibling** **<StudioComponent />** **instances**, one per region, each fetching its own composition:

```
async function HeroRegion({ slug }: { slug: string }) {
  const specOptions = await sdk.fetchCompositionData({ contentTypeUid: "blog_post_hero", templateEntryUid: slug });
  return <StudioComponent specOptions={specOptions} />;
}
async function BodyRegion({ slug }: { slug: string }) {
  const specOptions = await sdk.fetchCompositionData({ contentTypeUid: "blog_post_body", templateEntryUid: slug });
  return <StudioComponent specOptions={specOptions} />;
}

export default function BlogPost({ params }) {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}><HeroRegion slug={params.slug} /></Suspense>
      <Suspense fallback={<BodySkeleton />}><BodyRegion slug={params.slug} /></Suspense>
    </>
  );
}
```

This works when your data model uses multiple compositions per page (one per region). For a single composition that contains multiple sections, today you get one streaming boundary, not per-section streaming. See [What's still unsolved](#whats-still-unsolved) below.

### Remix: defer() for non-blocking sections

```
// app/routes/blog.$slug.tsx
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const specPromise = sdk.fetchCompositionData({
    contentTypeUid: "blog_post",
    slug: params.slug,
  });
  return defer({ spec: specPromise });
}

export default function BlogPost() {
  const { spec } = useLoaderData();
  return (
    <Await resolve={spec} errorElement={<Error />}>
      {(resolved) => <StudioComponent specOptions={resolved.specOptions} />}
    </Await>
  );
}
```

defer() ships the route shell immediately; <Await> streams the Studio render in once the spec promise resolves. Pair with <Suspense> fallbacks for skeletons.

### Astro: partial hydration with islands

```
---
// src/pages/blog/[slug].astro
import { StudioComponent } from "@contentstack/studio-react";
const { slug } = Astro.params;
const specOptions = await sdk.fetchCompositionData({ contentTypeUid: "blog_post", slug });
---

<Layout>
  <StudioComponent client:visible specOptions={specOptions} />
</Layout>
```

client:visible defers Studio's client-side hydration until the section scrolls into view. Above-the-fold renders as plain HTML; below-the-fold hydrates lazily.

### Gate Live Preview out of production renders

Live Preview's post-message channel ships extra weight that visitors don't need. Gate ContentstackLivePreview.init() behind a build-time env check (see [Performance + bundle-size](/docs/studio/performance-and-bundle-size-optimization#dont-ship-live-preview-to-visitors)). Production routes render without the LP channel; smaller streamed payload, faster TTFB.

### Above-the-fold renders first

Put the user's most important content in the FIRST section of the composition. The shell + above-the-fold section paint first; below-the-fold streams in.

## Patterns to Avoid

| Pattern | Why it bites |
| --- | --- |
| Wrapping the entire <StudioComponent /> in a single <Suspense> | No streaming benefit; the whole page is one chunk |
| Calling useCompositionData (CSR hook) inside a streaming SSR route | The CSR hook fetches on mount, bypassing the server stream entirely; you lose SSR's benefits |
| Pre-loading every entry the composition references in a single waterfall | Defeats streaming; spec fetch + binding resolution serialize unnecessarily |
| Streaming a route that uses CSR Live Preview in production | Live Preview's post-message channel doesn't play well with mid-stream hydration; gate LP init behind an env flag so visitor routes don't load it |
| Conditional rendering based on window / document at the top of a streamed component | SSR-CSR mismatch; React errors on hydration |

## What's Still Unsolved

-   **Per-section streaming inside a single composition.** Today a <StudioComponent /> is one Suspense boundary: the whole spec must resolve before any section paints. If you need per-section streaming, model the page as multiple compositions (one per region) and render each in its own <Suspense>. A first-class "stream per top-level section" mode is on the roadmap.
-   **Server-only SDK entry point.** @contentstack/studio-react ships one bundle today; gating Live Preview out of production relies on the build-time env check shown above. A dedicated server-only entry point (smaller, no LP) is being scoped.
-   **Edge runtime streaming.** Studio runs in the Node runtime; streaming works there. On Vercel Edge / Cloudflare Workers, the SDK's size + streaming primitives constrain what's possible: Node runtime is the recommended target today. See [Production deployment edges](/docs/studio/production-deployment-edge-cases#edge-runtime-compatibility).
-   **React Server Components composition.** Studio's <StudioComponent /> is rendered server-side but currently treats its tree as a single RSC boundary, not as nested RSC. Deeper RSC integration is planned.

## See Also

-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference): every prop + fetcher option the streaming examples above pass
-   [Configure CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering): pick the render path that matches your framework
-   [Performance + bundle-size](/docs/studio/performance-and-bundle-size-optimization): what to ship to visitors vs editors
-   [Production deployment edges](/docs/studio/production-deployment-edge-cases): edge runtime constraints
