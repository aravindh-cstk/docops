---
title: "Production Deployment Edge Cases"
description: "A deployment playbook covering cache invalidation for ISR and SSG, CDN purge patterns, edge runtime constraints, and monorepo setups for Contentstack Studio."
url: /studio/production-deployment-edge-cases
uid: bltd1be45338ed68f25
---

# Production Deployment Edge Cases

## Production Deployment Edge Cases

Studio works on every common React deploy target. The edges show up around caching (compositions change without code changes — caches need to invalidate), edge-runtime weight limits, and monorepo patterns. This page is the deployment playbook.

## ISR + SSG ��� cache invalidation when compositions change

Studio compositions are **content, not code**. Caching them as if they were code means stale layouts persist even after a publish.

### The pattern — short revalidation + on-publish webhook

For ISR / on-demand SSG (Next.js, Astro), use a short revalidate AND a Contentstack webhook to invalidate on publish:

```
// app/blog/[slug]/page.tsx
export const revalidate = 60;   // safety net — 60s max staleness

export default async function BlogPost({ params }) {
  const specOptions = await csStudio.fetchCompositionData({ /* … */ });
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

### What NOT to do

| Don't | Why |
| --- | --- |
| revalidate = false (cache forever) without a webhook | A composition publish doesn't invalidate the cache; layout changes never appear |
| revalidate = 0 (always fresh) on every visitor route | Defeats ISR; every visitor pays a full SSR render |
| Tag-based caching without tagging the composition UID | revalidateTag can't target specific routes when compositions change |

## CDN cache invalidation

If you're behind a CDN (Cloudflare, Fastly, CloudFront), the deploy-platform revalidation isn't enough — the CDN's edge cache must also flush.

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

## Edge runtime compatibility

Studio's SDK currently exceeds the Vercel Edge / Cloudflare Workers 1 MB limit for many configurations. For edge-deployed routes:

-   **Use Node runtime for Studio routes.** Mark the route file: ts export const runtime = "nodejs"; // Next.js App Router
-   **Keep edge-deployed routes minimal** (auth checks, redirects, simple JSON APIs) and proxy Studio renders to Node-deployed routes.
-   **For full edge SSR** — wait for the SDK's edge-runtime story to mature OR ship hand-coded routes for the edge-critical pages.

The SDK team is actively shrinking the edge-runtime footprint; this constraint relaxes over time.

## Monorepo patterns

For monorepos where Studio is one of several apps:

### Shared component library

Components live in a shared package; both the Studio-rendered app and other apps consume them. The Studio-rendered app's register-components.tsx imports from the shared package — no duplication.

![Monorepo layout — packages/ui/ holds shared Hero, Card, Button components. The Studio-rendered app's register-components.tsx imports from ui/ (Studio-managed); a non-Studio marketing-app's src/ also imports from ui/. One source of truth, two consumers, no duplication.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb251abc0b8c213f8/6b0a254d4244c5b7772c982f/advanced-monorepo-shared-component-library.svg)

### Shared Contentstack config

The lib/contentstack.ts factory lives in a shared package; both apps init the SDK with their own credentials.

### Independent deploys

Each app deploys independently — Studio renders don't block deploys of other apps. Composition publishes flow through Contentstack webhooks to the Studio-rendered app's revalidate endpoint only.

## Deploy-platform specifics

| Platform | Studio runtime | Caching | Notes |
| --- | --- | --- | --- |
| **Vercel** | Node only (edge limit) | ISR + on-demand revalidate + revalidateTag | Use runtime = "nodejs" for Studio routes |
| **Netlify** | Node | On-demand builders + cache tags | Same pattern; netlify-functions for the revalidate handler |
| **Cloudflare Pages** | Workers (size constrained) | Cache rules + purge API | Use Pages Functions + Node runtime for Studio routes |
| **AWS Amplify** | Lambda (no edge limit) | CloudFront invalidation via webhook | Trickier — CloudFront invalidation is path-based, plan paths up front |
| **Self-hosted (Node)** | Node | Whatever you build | Same patterns; just wire the webhook → cache invalidation yourself |

## Patterns to avoid

| Pattern | Why it bites |
| --- | --- |
| Caching SSR output without including the variant + locale in the cache key | Stale variant/locale content served to wrong visitors |
| Ignoring the publish webhook → all caches go stale until the safety-net revalidate fires | Authors publish; nothing changes for visitors for minutes |
| Deploying Studio routes to edge runtime without confirming size limits | Build fails or the route OOMs at request time |
| Running the same Studio project against staging + production environments | One author edit in staging accidentally affects production |
| Monorepo + duplicated component registrations across apps | Two apps register the same type UID differently; Studio uses whichever loaded last |

## Secret handling per host

The four CONTENTSTACK\_\* secrets need different handling per environment and per host. **Never commit them to git**; use each host's secret store.

| Host | Where secrets live | Preview vs production split |
| --- | --- | --- |
| **Vercel** | Project → Settings → Environment Variables (per environment) | Set the same key with different values for Preview and Production environments. NEXT\_PUBLIC\_CONTENTSTACK\_ENVIRONMENT=preview on preview, \=production on production. |
| **Netlify** | Site → Settings → Build & deploy → Environment | Use "Deploy contexts" to scope per-branch; production branch gets production, deploy previews get preview. |
| **Cloudflare Pages** | Project → Settings → Environment variables (Preview vs Production tabs) | Same key, different values per tab. |
| **AWS Amplify** | App → Environment variables (per branch) | Bind branch → environment name. |
| **Self-hosted (Node / Docker)** | .env files loaded by dotenv, or systemd EnvironmentFile=, or Docker --env-file | Ship a .env.production and .env.preview; never ship .env with real values into the container image — mount at runtime. |

**Public vs server-only:** - **NEXT\_PUBLIC\_CONTENTSTACK\_\* / VITE\_CONTENTSTACK\_\* / PUBLIC\_CONTENTSTACK\_\*** are **client-visible** — the bundler inlines them into the JS bundle. Only put values here that are safe to see in the browser (API key + delivery token used from CSR + preview token). - **Plain CONTENTSTACK\_\*** stays on the server. Management tokens, auth tokens, and any secret used only in server-side fetchCompositionData() calls belong here — the bundler won't inline them.

## Preview vs production environment split

Studio + Contentstack use **environments** (preview, staging, production, etc.) to gate what content is deployed where. The split matters for three reasons:

1.  **Authors deploy to preview first** for review, then production for launch. The same composition can be in different versions on each environment.
2.  **Your app must configure the environment name explicitly** — CONTENTSTACK\_ENVIRONMENT=preview on the preview host, \=production on the production host. The SDK reads the env at bootstrap and fetches composition versions matching that name.
3.  **Never point staging + production at the same environment name.** An author's staging Deploy would surface on production instantly. Provision distinct environments in Contentstack (Stack → Settings → Environments); wire each host to the right one.

**Preview URL split:** Studio's Canvas URL (Layer 2 setup) should point at your preview host, not production. Authors compose against fresh preview builds; production stays untouched until Deploy.

## Canvas iframe embedding — CSP / allow-list

Studio renders your Canvas URL inside an iframe hosted at app.contentstack.com. Two headers can break this if misconfigured on your app:

**Content-Security-Policy** — if your app sends a CSP header, add frame-ancestors https://app.contentstack.com (plus regional hosts like https://eu-app.contentstack.com, https://au-app.contentstack.com per your region). Without this, the browser refuses to render your app in Studio's iframe and the canvas shows a blank state or "refused to connect" error.

**X-Frame-Options** — legacy header. If set to DENY or SAMEORIGIN, remove it or explicitly whitelist Contentstack. Prefer frame-ancestors (CSP) — modern browsers honour it over X-Frame-Options.

**Regional hosts to allow-list:**

| Region | Studio app host |
| --- | --- |
| US (default) | app.contentstack.com |
| EU | eu-app.contentstack.com |
| AU | au-app.contentstack.com |
| Azure US | azure-na-app.contentstack.com |
| Azure EU | azure-eu-app.contentstack.com |

Add every region your team's Studio project uses to the CSP frame-ancestors list.

**Preview + production both need the allow-list.** Authors previewing on staging need Studio to iframe the staging URL; production canvases need production allow-listed.

## Pre-flight CI checks

Every production Studio deploy should gate on these checks in CI. Each maps to a common failure mode we've seen ship — catch them at PR time, not at 3am.

**1\. Single React copy in the deployed bundle.** Rule 1 from framework recipes.

```
npm ls react
# expect exactly one line under the root package
```

Fail the build if react appears twice — that's the "Invalid hook call" bomb at runtime.

**2\. Every required env var present at build time.** Miss one and the SDK falls back to defaults that don't match production.

```
: "${CONTENTSTACK_API_KEY:?}" \
  "${CONTENTSTACK_DELIVERY_TOKEN:?}" \
  "${CONTENTSTACK_PREVIEW_TOKEN:?}" \
  "${CONTENTSTACK_ENVIRONMENT:?}" \
  "${CONTENTSTACK_REGION:?}"
```

(Bash ${VAR:?} fails fast with the var name if it's empty.)

**3\. Framework-recipe curl assertions pass on a boot-and-fetch.** After building + starting the app in CI, run:

```
URL=http://localhost:3000/some-known-path curl -s "$URL" > /tmp/out.html
grep -q '<main' /tmp/out.html || { echo "empty body"; exit 1; }
grep -q 'data-studio-ssr' /tmp/out.html || { echo "styles missing"; exit 1; }
grep -q '<title>' /tmp/out.html || { echo "metadata missing"; exit 1; }
```

Details + rationale: Framework recipes → Verification.

**4\. CSP frame-ancestors includes every regional Studio host you use.**

```
CSP=$(curl -sI https://your-preview-host.example.com/ | grep -i content-security-policy)
echo "$CSP" | grep -q 'app.contentstack.com' || { echo "CSP missing Studio host"; exit 1; }
```

**5\. No accidental commit of .env files.** Simple grep in CI:

```
git ls-files | grep -E '^\.env$|^\.env\.[^.]+$' && { echo "env file committed"; exit 1; } || true
```

**6\. Studio SDK version pinned or in a tight range.** Major-version drift is the top cause of "worked yesterday, broken today." Prefer ~1.5.0 or exact-pin over ^1.5.0 on the SDK packages.

Wire these six into your CI job. Every one has bitten a real deployment; every one is a 30-second check.

## What's still unsolved

-   **Edge-runtime SSR** for Studio — a major open item. Until the SDK shrinks, Node-only is the answer.
-   **CDN tag-based purge across multiple compositions** — most CDNs purge by URL or by surrogate-key; if you have hundreds of routes and one section's composition changes affecting all of them, surgical purge is non-trivial. Workaround: shorter revalidate for affected routes.
-   **Multi-region deploys with composition replication** — Contentstack's CDA handles read-replicas across regions, but composition publishes propagate at content-stack speed (seconds). For sub-second cross-region consistency, you're back to short revalidate.

## See also

-   <StudioComponent /> [reference](/docs/studio/composition-rendering-reference) — every prop + option that flows into a deployed page's render
-   [Performance + bundle-size](/docs/studio/performance-and-bundle-size-optimization) — what to ship to visitors vs editors
-   [SSR streaming patterns](/docs/studio/ssr-streaming-patterns) — getting Studio to play nicely with streaming SSR
-   Editorial workflow at scale — environment promotion alongside cache invalidation
-   [Variant aliases](/docs/studio/variant-aliases-deep-dive) — cache key strategy when variants are in play
-   Configure CSR vs SSR — pick the right render path before deploying
