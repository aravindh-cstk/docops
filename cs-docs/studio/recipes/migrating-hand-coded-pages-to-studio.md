---
title: "Migrating Hand-Coded Pages to Studio"
description: "Step-by-step playbook for incrementally migrating hand-coded Contentstack routes to Studio, one section and template at a time."
url: /studio/migrating-hand-coded-pages-to-studio
uid: blt6532020012535c31
---

# Migrating Hand-Coded Pages to Studio

## Migrating Hand-Coded Pages to Studio

You already have a working Contentstack-backed site. Routes are hand-coded — each one fetches an entry and renders components against its fields in JSX. You want Studio so authors can compose the page layouts without engineering tickets, but you can't rewrite everything at once.

This recipe is the playbook for **incremental migration** — one route per sprint, shipped to production before the next one starts. The migrate-page-to-studio skill handles the per-route conversion; this recipe is the program around it.

## Before you start

Studio must already be installed in your app. If it isn't, walk the Zero to first page first — that gets the SDK installed, the canvas route added, the first component registered. Then come back here.

You should have:

-   @contentstack/studio-react installed
-   <StudioCanvas /> mounted at a canvas route
-   At least one component registered with register-component
-   A working Studio project for this app

## The migration model — section by section, then template by template

Studio's architecture is **sections → templates → routes**:

-   **Sections** are the reusable building blocks (a Hero, a Card Grid, a Testimonial Strip). They're built once and reused across many templates.
-   **Templates** assemble sections into pages, optionally bound to a content type. Connected templates render any number of entries at a URL pattern (/blog/{{entry.slug}}, /products/{{entry.sku}}, etc.).
-   **Routes** in your app mount <StudioComponent /> at the URL patterns Studio expects.

So **the right migration order isn't "one route at a time" — it's**:

![Eight-step vertical flow showing the right migration order — 1. Identify reusable components, 2. Register them in Studio, 3. Build one Section, 4. Verify it against a preview entry, 3.5 (optional, dashed) Embed the Section directly into the hand-coded route via StudioComponent compositionUid to ship the Section before the full Template exists, 5. Build the Template that uses it, 6. Swap the matching route to StudioComponent, 7. Ship and pause before the next unit. Steps 2/3/3.5/5/6 are author-driven Studio actions (indigo accent); steps 1/4/7 are discovery/verification/pace (neutral). Step 3.5 has a dashed border to mark it optional.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am30727d42e7592559/7cff6a8f13c4c29774267532/recipes-migration-order-sections-first.svg)

Sections come first because they're the units of reuse. Once your Hero section exists in Studio, every template that wants it gets it for free. Templates without sections are achievable but you end up re-binding the same components in every template — duplicated work.

Resist converting whole templates in one PR — there's no rush. Each section is a chance to learn what authors need (which props to expose, which slots make sense). Convert one section, use it across the templates that need it, then move to the next section.

## Step 1 ��� Inventory your components, sections, and templates

**Ask your LLM:** _"Run discover-sections."_

→ Skill: discover-sections

The skill scans your route files, finds components that appear in multiple routes, and emits a prioritised section build plan with the linked-schema kind proposed for each. Review the plan, merge or split candidates if needed, then proceed. If you'd rather do the inventory by hand, the tables below show the shape it produces.

Before converting anything, you need to know:

**1a. Components your routes share.** These become Studio's Registered Components.

| Component | Where it appears | Notes |
| --- | --- | --- |
| <Hero> | /blog/\[slug\], /products/\[sku\], /home | Reused — strong section candidate |
| <Card> | /blog/\[slug\] (related posts), /products/\[sku\] (related products), /home (highlights) | Reused — Card Grid section candidate |
| <TestimonialStrip> | /products/\[sku\], /home | Reused — section candidate |
| <ProductDetails> | /products/\[sku\] only | Single-use — register but no need for its own section |
| <CartSummary> | /checkout | Single-use, interactive — register; build a section if /checkout needs to be authorable |

**1b. Sections you'll build in Studio.** Each section maps to a recurring composition on your existing routes.

| Section name | Linked schema | Components dropped | Used by template(s) |
| --- | --- | --- | --- |
| Hero Strip | Global Field hero\_strip (or directly on the connected CT) | Hero | Blog Post, Product Page, Home |
| Card Grid | Reference array (multi-CT) | Card × repeater | Blog Post (related), Product Page (related), Home (highlights) |
| Testimonial Strip | Modular Block list testimonials | TestimonialStrip + repeater | Product Page, Home |

**1c. Templates you'll build.** One template per existing route shape:

| Template | Connected to | Sections it drops | URL pattern |
| --- | --- | --- | --- |
| Blog Post | blog\_post CT | Hero Strip, Body, Card Grid (related) | /blog/{{entry.slug}} |
| Product Page | product CT | Hero Strip, ProductDetails, Card Grid (related), Testimonial Strip | /products/{{entry.sku}} |
| Home | site\_home CT (single-entry) | Hero Strip, Card Grid (highlights), Testimonial Strip | / |
| Checkout | cart CT | Hero Strip, CartSummary | /checkout |

**Studio supports every page in this table — including /checkout.** A route doesn't need to be "pure content" to be authored in Studio. Interactive components like <CartSummary> register the same way as <Hero>; what they render internally (state, network calls, payment forms) is the component's concern. Studio just composes their position on the page.

> **The only routes you'd skip** are ones that don't really have a page layout — pure API handlers, redirects, middleware-only routes. If a route renders JSX with components, Studio can author its layout.

## Step 2 — Register components (one-off, per component)

Before building any section, every component the section uses must be registered:

**Ask your LLM:** _"Run register-component for src/components/Hero.tsx with type site-hero."_

→ Skill: register-component

Repeat for every component in your inventory (1a). This is one-time work — once a component is registered, every section can use it.

## Step 3 — Build sections (one at a time)

For each section in inventory 1b, in two sub-steps:

**3a. Design the linked schema** (if it doesn't already exist).

**Ask your LLM:** _"Run design-section-from-jsx for src/components/Hero.tsx used on app/blog/\[slug\]/page.tsx, app/products/\[sku\]/page.tsx, with section name 'Hero Strip'."_

→ Skill: design-section-from-jsx

The skill reads how the component is bound across the routes, proposes a Global Field schema with the right field UIDs + types, asks you to disambiguate any rows where routes bind to different field names, and (on confirm) creates the Global Field in Contentstack via CMA. Skip this sub-step if the linked schema already exists.

**3b. Build the section itself.**

**Ask your LLM:** _"Build a Hero Strip section linked to the hero\_strip global field, dropping the registered site-hero component."_

→ Skill: build-section

This is a **Layer 2 step** — the LLM coaches you through the Studio web app's section authoring. After saving the section:

-   It appears in Studio's Sections palette.
-   Every template that wants it can drop it in.

Verify the section renders against a preview entry before moving on. Repeat for the next section.

## Step 3.5 — Optional: embed each Section directly into its hand-coded route before you build templates

A Section in Studio is a standalone composition. You don't have to wait for a full Template (Step 4) or a route swap (Step 5) to put it in production — **you can render the Section in-place inside the existing hand-coded route using <StudioComponent />**, and ship that as one PR. The rest of the page stays as-is; the Section becomes a marketer-editable region inside it.

This is the **lowest-risk increment in the whole migration**:

| What's still hand-coded | What's now Studio-managed | Author capability gained |
| --- | --- | --- |
| Whole route file, all other JSX, data fetching | The Section's region only — a "placeholder" filled by <StudioComponent /> | The marketing team can rearrange / re-bind / swap the section in Studio's canvas; engineers ship without touching the route |

The pattern:

```
// app/blog/[slug]/page.tsx — existing route, mostly unchanged
"use client";
import { useEffect, useState } from "react";
import { StudioComponent, useCompositionData } from "@contentstack/studio-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [entry, setEntry] = useState<BlogPost | null>(null);
  useEffect(() => { fetchBlogPost(params.slug).then(setEntry); }, [params.slug]);

  const { specOptions } = useCompositionData({ compositionUid: "blog_hero_strip" });
  //                                            ↑
  //                                            the Section's compositionUid from Studio

  if (!entry || !specOptions?.spec) return null;

  return (
    <>
      <BlogHeader />
      <StudioComponent specOptions={specOptions} />   {/* ← was hand-coded JSX */}
      <BlogBody entry={entry} />
      <RelatedPosts entry={entry} />
      <BlogFooter />
    </>
  );
}
```

The Section renders inline; everything else on the route stays code-owned. When you later build the Template (Step 4) and swap the route (Step 5), this per-Section <StudioComponent /> block gets replaced by a single <StudioComponent specOptions={specOptions} /> for the whole page — but until then, the Section is already in production, and authors are already editing it.

**Why this is worth doing as an interim ship**:

-   **De-risk per Section.** If something goes wrong with one Section's bindings, the blast radius is the region it occupies — not the whole page.
-   **Give authors value sooner.** They can edit and publish the section's layout the day the Section ships, weeks before the full template is ready.
-   **Validate the Section against real production traffic.** You see how it behaves under cache, SSR, Live Preview, and variant flows before you commit to a route swap.
-   **Defer the route swap until it's actually worth it.** For pages with lots of code-side logic, you might never fully swap — the Section embed is the permanent endpoint, not an interim step. See the [Embed a Studio-managed region inside a code-owned page](/docs/studio/embedding-a-composition-in-a-code-owned-page) recipe for the canonical bounded-zone pattern.

**Full walkthrough**: [Embed a Studio-managed region inside a code-owned page](/docs/studio/embedding-a-composition-in-a-code-owned-page) — covers the SDK API (useCompositionData({ compositionUid })), multiple embeds on the same page, and how the embed coexists with the rest of the route's data fetching.

If your goal is the full route swap, treat this step as optional — skip straight to Step 4 if you've already proved the Section in lower environments. If your goal is incremental author capability with minimal blast radius, ship every Section as an embed first, then promote routes one at a time when the Templates are ready.

## Step 4 — Build templates (one at a time, only after the sections it needs exist)

For each template in inventory 1c, in business-value order:

**Ask your LLM:** _"Build a Connected template for blog\_post at URL pattern /blog/{{entry.slug}}, dropping the Hero Strip + Card Grid sections."_

→ Skill: build-connected-template

Authoring a template that uses already-built sections is fast — drop section, configure preview entry, save. The expensive work was building the sections.

## Step 5 — Swap the route to render via <StudioComponent />

Only after the template is published, swap the matching route file in your app:

**Ask your LLM:** _"Run migrate-page-to-studio for app/blog/\[slug\]/page.tsx, content type blog\_post, URL pattern /blog/{{entry.slug}}."_

→ Skill: migrate-page-to-studio

The skill verifies the registered components exist, confirms the template renders, and rewrites the route's JSX to a single <StudioComponent specOptions={specOptions} /> call (preserving the old JSX as a commented diff). Then verify-setup confirms all four layers (Delivery / Live Preview / Visual Editor / Studio canvas) still resolve.

> **Once you've migrated more than a handful of routes**, consolidate to a single catch-all route via setup-template-preview-routes. The catch-all (app/\[\[...slug\]\]/page.tsx for Next.js, <Route path="\*"> for React Router) lets Studio resolve every URL on the site via its CDA query — you stop maintaining per-route files. Per-route migration via migrate-page-to-studio is the incremental tool; the catch-all is the destination.

If a blocker comes up at this stage — runtime branching, route-level state, etc. — read [Step 6 — Handling edges](#step-6--handling-edges) below.

## Step 5b — Recovery: what to do when the cutover breaks the live route

The swap in Step 5 replaces your route's JSX with <StudioComponent />. If the composition doesn't render (Layer-2 component missing, binding to a non-existent field, unpublished entry), the live route shows an empty page. You need a recovery path that doesn't require a fresh deploy.

**Three approaches, in order of blast radius:**

### Option A — Dual-render with fallback (safest, ship-with-this)

Keep the old hand-coded JSX in the route file. Wrap <StudioComponent /> so it renders the old JSX if the Studio composition fails to resolve:

```
// app/blog/[slug]/page.tsx
"use client";
import { StudioComponent } from "@contentstack/studio-react";
import { OldBlogPost } from "@/components/legacy/OldBlogPost"; // your old hand-coded page

export default function BlogPost({ params, entry }) {
  return (
    <StudioComponent
      specOptions={{ url: `/blog/${params.slug}`, contentTypeUid: "blog_post" }}
      fallback={<OldBlogPost entry={entry} />}
    />
  );
}
```

If Studio's SDK can't resolve the composition (network error, no Template matches, canvas returns empty), it renders the fallback prop. Zero downtime. Ship this from day one of the cutover; remove the fallback + old JSX after ~1 sprint of clean production traffic.

**Trade-off:** you keep two rendering paths in the bundle for the transition window. Bundle grows slightly.

### Option B — Feature flag the route

If your app has a feature-flag system (LaunchDarkly / GrowthBook / homemade), gate the Studio swap behind a flag:

```
// app/blog/[slug]/page.tsx
export default function BlogPost({ params, entry }) {
  const studioEnabled = useFlag("studio_blog_post", { defaultValue: false });
  if (studioEnabled) {
    return <StudioComponent specOptions={{ url: `/blog/${params.slug}`, contentTypeUid: "blog_post" }} />;
  }
  return <OldBlogPost entry={entry} />;
}
```

Roll out per-region / per-user-segment. If the Studio render breaks in production, flip the flag off — traffic reverts to the old JSX without a deploy.

**Trade-off:** more scaffolding. Best if your app already has a flag system; overkill if not.

### Option C — Git revert (fastest, single-commit rollback)

If neither A nor B is set up and you need to revert NOW:

```
git revert <the-swap-commit>       # inverts the Step-5 change
git push                            # ship the revert
```

Or in one-line for a single-commit swap:

```
git revert HEAD && git push
```

Your CI deploys the pre-swap route. Old JSX is live within a deploy cycle (usually <5 min if your pipeline is lean). The Studio Section + Template stay authored — you just aren't rendering through them anymore. Re-attempt the swap later once you've fixed the issue.

**Trade-off:** requires a deploy. Fine as an emergency lever; not something you want to lean on for every migration.

### Diagnosing why the composition didn't render

Before rolling back, run verify-setup — it runs a 7-layer diagnostic and reports which layer failed:

1.  SDK bootstrapped in the app.
2.  Contentstack stack reachable.
3.  Composition entry exists on the stack.
4.  Composition is published to the target environment.
5.  URL pattern matches the incoming request.
6.  Composition tree resolves (all referenced Sections + components exist in the palette).
7.  Bindings resolve to CMS data.

Layer 6-7 failures are the most common on a first cutover — usually a Section binds to a field name that changed since Step 3, or a registered component was removed. Fix the failing layer, re-verify, remove the fallback.

## Step 6 — Handling edges

Most route shapes map cleanly onto sections + templates. Where they don't, here's how to keep the migration unblocked. **These are edges to translate, not reasons to skip a route.** Studio supports every page in your inventory; the question is just how the route's quirks map onto sections.

### Runtime branching in the JSX

```
{user.tier === "premium" ? <PremiumHero {...entry.hero} /> : <Hero {...entry.hero} />}
```

Two translations:

-   **Content-driven branch** (the entry itself carries the variation — e.g. a hero\_variant field): use a Studio [Condition Block](/docs/studio/control-visibility-with-condition-blocks) inside the section. Both PremiumHero and Hero are registered components; the Condition Block picks which one renders per entry, no code.
-   **User-driven branch** (logged-in tier, persona, A/B): use [variant aliases](/docs/studio/variant-aliases-deep-dive) on the entry — your route picks the variant from cookies/middleware and passes variantAlias through to <StudioComponent />. Same template, different rendered variant per visitor. Studio handles this natively. **Skill:** wire-variant-alias — creates the variant aliases via CMA, scaffolds per-variant entry overrides, rewrites the route to resolve the segment from cookies/headers/searchParams.

### Route-level state (useState, useReducer)

```
const [tab, setTab] = useState("overview");
return <ProductTabs active={tab} onChange={setTab}>…</ProductTabs>;
```

State belongs **inside components**, not at the route level. Refactor ProductTabs to own its own state internally, then register it. The author drops <ProductTabs> onto the Studio template; the component manages tabs internally. The route just renders <StudioComponent />.

This isn't a Studio limitation — it's a general "your components should own their own state" principle. Lifting state up to the route was a hand-coding shortcut; sections expect components to be self-contained.

### External data the route fetches

```
const entry = await stack.entry(...);
const reviews = await fetch("https://reviews.example.com/" + entry.sku);
```

Studio has wire-external-data for exactly this — pass the external data via the data prop on <StudioComponent />. Authors bind it from the Data Picker under "Component Default Data" just like CMS fields. The route becomes:

```
const specOptions = await csStudio.fetchCompositionData({ url, searchQuery });
const reviews = await fetch("https://reviews.example.com/" + sku);
return <StudioComponent specOptions={specOptions} data={{ reviews }} />;
```

### Interactive surfaces (checkout, cart, account)

<CartSummary>, <PaymentForm>, <AccountSettings> are normal React components — register them like any other. The component owns its state, network calls, payment integration, etc. Studio composes their position on the page (Hero Strip above, related products below, footer at the bottom). The page **layout** becomes authorable; the component's **internals** stay engineering territory. That separation is the point of BYOC.

If you hit a route shape that none of the above covers, the question is "what would a Studio section look like for this?" — not "should I skip this route?". File the question in the docs repo if you can't see a clean translation.

## Step 7 — Ship, observe, repeat

After every successful migration (one section, one template, one route swap):

1.  **Diff the rendered output.** Hit the migrated URL in a browser, side-by-side with the previous deploy. Confirm visual parity. Screenshot both.
2.  **Open a PR with only that piece of work.** Reviewers can focus; rollback is one revert.
3.  **Deploy to production.** Monitor for 24-48 hours before starting the next migration.
4.  **Tell content authors.** This template is now editable in Studio — they should know.

Then pick the next section or template. Don't queue up the next migration before this one's been in production long enough to surface anything subtle.

## What success looks like after N sprints

The end state is **every page that's a layout-of-components is authored in Studio**. Including the ones you'd assume are off-limits (checkout, account dashboards, interactive surfaces) — Studio composes the page; the components own their interactivity.

What stays hand-coded:

-   Pure API handlers, redirects, middleware-only routes — no page layout to author.
-   Routes whose render is fundamentally not a tree of components (rare).

That's a narrower exclusion list than most teams assume. The migration question is rarely "can this be in Studio?" and almost always "which section maps onto this part of the JSX?"

## See also

-   migrate-page-to-studio — the per-route skill this recipe drives
-   [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app) — additive (not a migration). Pick the hand-coded recipe here ONLY if your team is still hand-coding routes; VE teams don't migrate, they layer Studio on top.
-   [Marketing site walkthrough](/docs/studio/marketing-site-walkthrough-with-four-end-to-end-scenarios) — the canonical multi-section example showing what a migrated route looks like end-to-end
-   Smart Containers overview — what to reach for when a blocker turns out to be content-shaped (Condition Block, Repeater, Section Slot)
-   Wire external data — for non-Contentstack data sources that have to flow into the route
