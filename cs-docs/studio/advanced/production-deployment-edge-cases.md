---
title: "Production Deployment Edge Cases"
description: "A deployment playbook covering cache invalidation for ISR and SSG, CDN purge patterns, edge runtime constraints, and monorepo setups for Contentstack Studio."
url: /studio/production-deployment-edge-cases
---

# Production Deployment Edge Cases

## Production Deployment Edge Cases

Studio works on every common React deploy target. The edges show up around caching (compositions change without code changes, caches need to invalidate), edge-runtime weight limits, and monorepo patterns. This page is the deployment playbook.

## ISR + SSG: Cache Invalidation When Compositions Change

Studio compositions are **content, not code**. Caching them as if they were code means stale layouts persist even after a publish.

### The pattern: short revalidation and on-publish webhook

For ISR / on-demand SSG (Next.js, Astro), use a short revalidate AND a Contentstack webhook to invalidate on publish:

```
// app/blog/[slug]/page.tsx
export const revalidate = 60;   // safety net — 60s max staleness

export default async function BlogPost({ params }) {
  const specOptions = await sdk.fetchCompositionData({ /* … */ });
  return <StudioComponent specOptions={specOptions} />;
}
```

Then configure a Contentstack webhook on the compositions content type to hit your deploy platform's revalidation API on every publish:

```
// app/api/revalidate-composition/route.ts
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const { event, data } = await request.json();
  if (event !== "publish") return Response.json({ ok: true });

  const compositionUid = data.entry.uid;
  const linkedTemplate = data.entry.linked_content_type;   // e.g. "blog_post"
  revalidateTag(`composition:${compositionUid}`);
  revalidatePath(`/${linkedTemplate}/[slug]`);
  return Response.json({ revalidated: true });
}
```

This combination gives you fast cache misses on publish (the webhook) AND a backstop in case the webhook fires late or misses (the 60s revalidate).

### What not to do

| Don't | Why |
| --- | --- |
| revalidate = false (cache forever) without a webhook | A composition publish doesn't invalidate the cache; layout changes never appear |
| revalidate = 0 (always fresh) on every visitor route | Defeats ISR; every visitor pays a full SSR render |
| Tag-based caching without tagging the composition UID | revalidateTag can't target specific routes when compositions change |

## CDN Cache Invalidation

If you're behind a CDN (Cloudflare, Fastly, CloudFront), the deploy-platform revalidation isn't enough, the CDN's edge cache must also flush.

The pattern: webhook hits your origin's revalidate endpoint AND purges the CDN. Most platforms have an API for surgical purge by URL or tag:

```
async function purgeCDN(paths: string[]) {
  await fetch("https://api.cloudflare.com/client/v4/zones/<zone>/purge_cache", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.CF_API_TOKEN}` },
    body: JSON.stringify({ files: paths.map(p => `https://yoursite.com${p}`) }),
  });
}
```

Trigger this from the same webhook handler as the deploy-platform revalidation.

## Edge Runtime Compatibility

Studio's SDK currently exceeds the Vercel Edge / Cloudflare Workers 1 MB limit for many configurations. For edge-deployed routes:

-   **Use Node runtime for Studio routes.** Mark the route file: ts export const runtime = "nodejs"; // Next.js App Router
-   **Keep edge-deployed routes minimal** (auth checks, redirects, simple JSON APIs) and proxy Studio renders to Node-deployed routes.
-   **For full edge SSR:** wait for the SDK's edge-runtime story to mature OR ship hand-coded routes for the edge-critical pages.

The SDK team is actively shrinking the edge-runtime footprint; this constraint relaxes over time.

## Monorepo Patterns

For monorepos where Studio is one of several apps:

### Shared component library

Components live in a shared package; both the Studio-rendered app and other apps consume them. The Studio-rendered app's register-components.tsx imports from the shared package, no duplication.

![Monorepo layout — packages/ui/ holds shared Hero, Card, Button components. The Studio-rendered app's register-components.tsx imports from ui/ (Studio-managed); a non-Studio marketing-app's src/ also imports from ui/. One source of truth, two consumers, no duplication.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4e823eb51c5e8623/1991244c6f39c05e8a1a50cb/advanced-monorepo-shared-component-library.png)

### Shared Contentstack config

The lib/contentstack.ts factory lives in a shared package; both apps init the SDK with their own credentials.

### Independent deploys

Each app deploys independently. Studio renders don't block deploys of other apps. Composition publishes flow through Contentstack webhooks to the Studio-rendered app's revalidate endpoint only.

## Deploy-Platform Specifics

| Platform | Studio runtime | Caching | Notes |
| --- | --- | --- | --- |
| **Vercel** | Node only (edge limit) | ISR + on-demand revalidate + revalidateTag | Use runtime = "nodejs" for Studio routes |
| **Netlify** | Node | On-demand builders + cache tags | Same pattern; netlify-functions for the revalidate handler |
| **Cloudflare Pages** | Workers (size constrained) | Cache rules + purge API | Use Pages Functions + Node runtime for Studio routes |
| **AWS Amplify** | Lambda (no edge limit) | CloudFront invalidation via webhook | Trickier: CloudFront invalidation is path-based, plan paths up front |
| **Self-hosted (Node)** | Node | Whatever you build | Same patterns; just wire the webhook to cache invalidation yourself |

## Patterns to Avoid

| Pattern | Why it bites |
| --- | --- |
| Caching SSR output without including the variant + locale in the cache key | Stale variant/locale content served to wrong visitors |
| Ignoring the publish webhook, all caches go stale until the safety-net revalidate fires | Authors publish; nothing changes for visitors for minutes |
| Deploying Studio routes to edge runtime without confirming size limits | Build fails or the route OOMs at request time |
| Running the same Studio project against staging + production environments | One author edit in staging accidentally affects production |
| Monorepo + duplicated component registrations across apps | Two apps register the same type UID differently; Studio uses whichever loaded last |

## What's Still Unsolved

-   **Edge-runtime SSR** for Studio: a major open item. Until the SDK shrinks, Node-only is the answer.
-   **CDN tag-based purge across multiple compositions:** most CDNs purge by URL or by surrogate-key; if you have hundreds of routes and one section's composition changes affecting all of them, surgical purge is non-trivial. Workaround: shorter revalidate for affected routes.
-   **Multi-region deploys with composition replication:** Contentstack's CDA handles read-replicas across regions, but composition publishes propagate at content-stack speed (seconds). For sub-second cross-region consistency, you're back to short revalidate.

## See Also

-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference): every prop + option that flows into a deployed page's render
-   [Performance + bundle-size](/docs/studio/performance-and-bundle-size-optimization): what to ship to visitors vs editors
-   [SSR streaming patterns](/docs/studio/ssr-streaming-patterns): getting Studio to play nicely with streaming SSR
-   [Editorial workflow at scale](/docs/studio/managing-editorial-workflows-at-scale): environment promotion alongside cache invalidation
-   [Variant aliases](/docs/studio/variant-aliases-deep-dive): cache key strategy when variants are in play
-   [Configure CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering): pick the right render path before deploying
