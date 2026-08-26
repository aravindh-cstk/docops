---
title: "Partial Adoption Coexisting With a Code-Driven App"
description: "Learn how to add Contentstack Studio incrementally to an existing code-driven app using a catch-all route pattern, without disrupting your current routes."
url: /studio/partial-adoption-coexisting-with-a-code-driven-app
uid: blt100b160819671cd0
---

# Partial Adoption Coexisting With a Code-Driven App

## Partial Adoption Coexisting With a Code-Driven App

This recipe is for teams whose app **already owns its routes**, there's a working app/products/\[slug\]/page.tsx, app/collections/\[slug\]/page.tsx, app/page.tsx, hand-coded shop and home pages, and you want to **add Studio incrementally without taking over the routes that already work**.

This is the most common enterprise starting point and it's been the least documented. The pattern below is doc-aligned and uses only mechanisms the SDK officially supports.

> **Where this came from.** The audit (STUDIO-ASSUMPTIONS-AUDIT.md A1) flagged that earlier guidance led readers toward inventing a /studio/\* route namespace or a "fallback hybrid" pattern, neither documented. The catch-all + code-route precedence approach below uses only what's in 04-template-preview-routes.md and configure-csr-vs-ssr.md.

---

## The Decision Tree

Pick the right tool per page-kind:

![Three patterns for adding Studio to a code-driven app: catch-all route for new pages, full route-swap migration for pages you fully manage in Studio, and embedded composition for one editable region inside a code-owned page.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0ffd70872d8dcc27/6264286a898b69a8f03c9fd1/recipes-partial-adoption-decision-tree.png)

Three patterns, three recipes:

| Pattern | Recipe | What it gives you |
| --- | --- | --- |
| **Catch-all + code precedence** | This recipe, § 1 below | New content types get Studio rendering automatically at their natural URLs; existing code routes stay untouched |
| **Full route-swap migration** | [migrate-from-handcoded](/docs/studio/migrating-hand-coded-pages-to-studio) | An existing code page becomes 100% Studio-rendered; old JSX preserved as comments |
| **Embedded composition** | [embed-composition-in-code-page](/docs/studio/embedding-a-composition-in-a-code-owned-page) | One editable band inside an otherwise code-owned page |

You'll likely mix all three over time. Start with the catch-all (§ 1) so new content types Just Work; do route-swaps or embeds on existing pages incrementally as the team gets confident.

---

## What We Are NOT Recommending

Two patterns the audit explicitly flags as **doc-vacuum inventions** to avoid:

1.  **❌ A** **/studio/\*** **route namespace.** Don't sandbox compositions under app/studio/\[...slug\]/page.tsx. It forces authors to hand-edit template URLs to insert /studio/, which is exactly the friction Studio is supposed to remove. Mount Studio at the **natural URL space**: the catch-all approach below.
2.  **❌ A "migrate-with-fallback" hybrid** that renders Studio if a composition is published, else the hand-coded JSX. This is undocumented and creates two divergent rendering paths per page that drift apart. The documented migration is a [full route swap](/docs/studio/migrating-hand-coded-pages-to-studio), done route-by-route. If you need a non-Studio fallback on a route, that's a sign you should embed (pattern 3) instead of swap.

---

## § 1: The Catch-all + Code-route Precedence Pattern

The Next.js (or React Router) catch-all route is registered LAST. Existing specific routes (app/products/\[slug\]/page.tsx, app/collections/\[slug\]/page.tsx, app/page.tsx, app/shop/page.tsx) win by router precedence. Studio's catch-all serves every URL the code routes don't claim.

### The Next.js root-collision caveat

> ⚠️ **You have an existing** **app/page.tsx****?** Then the optional-catch-all app/\[\[...slug\]\]/page.tsx **collides** with it at / (both match the root). Use the **non-optional** form app/\[...slug\]/page.tsx; your existing app/page.tsx keeps owning /, and the catch-all matches /anything-else. This is the load-bearing precision the audit flagged.
> 
> **Cited from Next.js docs** ([dynamic-routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)):
> 
> > _"The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (__/shop_ _in the example above)."_
> 
> So app/\[\[...slug\]\]/page.tsx matches BOTH / AND nested URLs, which is exactly where app/page.tsx lives. Two pages claiming the same URL = collision. The non-optional \[...slug\] form requires at least one segment, so it does NOT match /; that's why it coexists cleanly with app/page.tsx.

So:

![Next.js app/ folder layout with the Studio catch-all alongside existing code routes. Only app/\[...slug\]/page.tsx is new; everything else is code.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am18eba9a5ac2feb1a/3917cb910411f1ed07dd964c/recipes-partial-adoption-file-layout.png)

### Step 1: Write the catch-all

```
// app/[...slug]/page.tsx — Server Component (SSR variant)
// One file handles every URL the code routes don't claim.
import { notFound } from "next/navigation";
import { sdk } from "@/lib/studio";   // additive — see install-studio § 0 pre-flight gate
import { StudioRouteClient } from "./StudioRouteClient";

export default async function StudioRoute({ params, searchParams }) {
  // Same fetch for direct visitors AND for the in-Studio iframe preview —
  // StudioComponent switches render mode internally. Forward the full request
  // searchQuery so Studio's iframe overrides reach the SDK.
  const url = "/" + (params.slug ?? []).join("/");
  const searchQuery = new URLSearchParams(searchParams as Record<string,string>).toString();
  const specOptions = await sdk.fetchCompositionData({ url, searchQuery });

  // No composition matches this URL → standard 404. Don't fall back to anything;
  // the existing code routes already claimed everything they own.
  if (!specOptions?.spec) {
    notFound();
  }

  return <StudioRouteClient specOptions={specOptions} />;
}
```

```
// app/[...slug]/StudioRouteClient.tsx — Client Component
"use client";
import { StudioComponent } from "@contentstack/studio-react";

export function StudioRouteClient({ specOptions }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

### Step 2: Verify precedence

Studio's \_research/ground-truth notes that Next.js prefers more-specific routes over catch-alls. To confirm:

1.  Visit /products/widget-x; your **existing** PDP renders (code wins).
2.  Visit /; your **existing** home renders (code wins).
3.  Visit /about; your **existing** about renders (code wins).
4.  Visit /campaigns/spring-2026; assuming you've authored a Studio composition at this URL, **Studio's catch-all** renders it.
5.  Visit /this-does-not-exist; 404 (no code route, no composition).

If a code route is being shadowed by the catch-all, the issue is route specificity. Move the file or constrain the catch-all (e.g. app/(studio)/\[...slug\]/page.tsx inside a route group that excludes specific paths).

### Step 3: Add a new content type and Studio renders it for free

Now the payoff shows up. To add a Studio-managed campaigns CT:

1.  Create the campaigns content type in Contentstack (Content Models, New CT).
2.  **Set the CT's Custom Preview URL** to /campaigns/{{entry.url}} (or your slug field). **Once.** Dev does this; authors never touch URLs again.
3.  In Studio, build a Connected Template against campaigns. Studio auto-derives the URL pattern from the CT's Custom Preview URL.
4.  Publish a campaign entry. Visit /campaigns/spring-2026 in the browser; **the Studio composition renders**. No new route file, no per-template wiring, no engineer involvement.

That's the payoff: **every new CT inherits Studio rendering** for free.

### Step 4: When you eventually want to fully Studio-ify an existing code page

When the team is comfortable and a code-owned page (e.g. app/collections/\[slug\]/page.tsx) is ready to become Studio-managed:

1.  Run [migrate-from-handcoded.md](/docs/studio/migrating-hand-coded-pages-to-studio) Step 5 (migrate-page-to-studio skill). It rewrites the route file to <StudioComponent specOptions={...} />, preserving the old JSX as comments.
2.  Delete the now-redundant per-route file once you're confident; the catch-all picks up /collections/<slug> automatically.

That's the **gradual destination**: catch-all serves everything, and over time the per-route files disappear.

---

## React Router (Vite) Variant

```
// src/main.tsx
import { Routes, Route } from "react-router-dom";
import { CanvasRoute } from "./routes/CanvasRoute";
import { StudioRoute } from "./routes/StudioRoute";
import { ExistingPDP } from "./routes/ExistingPDP";
import { ExistingHome } from "./routes/ExistingHome";

<Routes>
  {/* Existing code routes — registered FIRST, take precedence */}
  <Route path="/" element={<ExistingHome />} />
  <Route path="/products/:slug" element={<ExistingPDP />} />
  <Route path="/collections/:slug" element={<ExistingCollection />} />
  <Route path="/canvas" element={<CanvasRoute />} />   {/* Studio's section authoring */}

  {/* Studio catch-all — registered LAST */}
  <Route path="*" element={<StudioRoute />} />
</Routes>
```

Same pattern: opt-out specific routes by registering them BEFORE the catch-all.

---

## When NOT to Use the Catch-all

The catch-all is the right default for partial adoption, but skip it if any of these apply:

| Situation | Use instead |
| --- | --- |
| You only want ONE editable band inside a code page (PDP marketing strip, home hero, etc.) | [Embedded composition](/docs/studio/embedding-a-composition-in-a-code-owned-page), render by compositionUid inline; no catch-all needed |
| Your app has no existing routes; you want Studio to render everything from day one | [Zero to first page](/docs/studio/build-your-first-studio-page), standard catch-all setup; no precedence carveouts |
| You need a Studio-rendered page at a path your code routes own | Per-route swap via [migrate-from-handcoded](/docs/studio/migrating-hand-coded-pages-to-studio); not the catch-all |

---

## Common Pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Used \[\[...slug\]\] with existing app/page.tsx | Optional catch-all collides with the root page; Next.js errors at build time OR runtime ambiguity | Use non-optional \[...slug\]; see § 1 caveat above |
| Catch-all calls notFound() aggressively, code routes broken | Catch-all somehow gets matched before specific routes | Verify route file structure; specific routes (app/products/\[slug\]/page.tsx) MUST take precedence. This is a Next.js guarantee, so usually the catch-all isn't actually running |
| Studio template URL pattern doesn't resolve to a URL | The CT's Custom Preview URL wasn't set; the template defaulted to /<ct\_uid>/<composition\_uid>/{{entry.title}} (ugly + uses title not slug) | Set the CT's Custom Preview URL once |
| Catch-all + auth, protected pages get fetched against Studio for unauth users | Catch-all doesn't know about your auth middleware | Add auth checks INSIDE the catch-all before fetchCompositionData, OR register the protected paths as explicit code routes |
| Catch-all caches stale 404s | Studio's CDA query result is cacheable | Add appropriate cache-control / revalidate to the route per your Next.js setup |

---

## Author UX Once This Is Wired

The win for marketers is exactly the friction that was missing:

-   They open Studio. They pick a CT (or Freeform). They compose. They Save + Publish.
-   The composition appears at its natural URL: /campaigns/spring-2026, /blog/ai-101, /promotions/black-friday.
-   **No URL editing**. **No "change** **/studio/** **to** **/****"** flag. **No developer involvement** per page.

That's the win that the /studio/\* sandbox blocked. Catch-all unblocks it.

---

## See Also

-   [Migrate hand-coded pages to Studio](/docs/studio/migrating-hand-coded-pages-to-studio): full per-route swap when you're ready to retire a code-owned page entirely
-   [Embed a Studio-managed region in a code-owned page](/docs/studio/embedding-a-composition-in-a-code-owned-page): bounded zones inside a kept-code page
-   [Template preview routes](/docs/studio/template-preview-routes): the canonical catch-all reference + framework matrix
-   [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering): server-side fetch variant for the catch-all
-   [URL variables](/docs/studio/url-variables-reference): the entry.url vs entry.title distinction; configuring Custom Preview URL
-   Assumptions audit: A1, A2, A3, A4, A6, A7 that informed this recipe
