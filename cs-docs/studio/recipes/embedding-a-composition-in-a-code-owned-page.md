---
title: "Embedding a Composition in a Code-Owned Page"
description: "Learn how to embed a Studio-managed composition region inside a code-owned page using compositionUid, with CSR and SSR examples."
url: /studio/embedding-a-composition-in-a-code-owned-page
---

# Embedding a Composition in a Code-Owned Page

## Embedding a Composition in a Code-Owned Page

This recipe is for the **bounded-zone** use case: your app has a code-driven page (PDP, home, account, checkout) that you want engineers to keep owning end-to-end, **except** for one section, band, or shelf you want marketers to edit in Studio without touching code.

A typical example:

![PDP with four stacked sections — ProductHero, ProductSpecs, a Studio-managed Marketing band, and BuyBox. Only the Marketing band is Studio-managed; the rest is code.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am578cbb3b8e58c02e/78d3f37e9913b308a89df5a4/recipes-embed-pdp-marketing-band.png)

The PDP is functional + conversion-critical. Engineers keep it. But the marketing band changes every week: a marketer should be able to edit it in Studio's canvas without a deploy.

This recipe shows the doc-aligned way to embed that band: render a **known composition by compositionUid** inside the code page.

> **SDK verified.** The param name in the **public API** is compositionUid (singular, no second a): verified against packages/studio-messenger/src/fetch-spec.type.ts:8-19 (CompositionQueryInput type, what users pass to useCompositionData / fetchCompositionData). It accepts the composition's **slug** (the composable\_uid field value on the entry, e.g. "card\_grid", "pdp\_marketing\_band"), NOT the entry UID (blt5d57b…). Confirmed via test fixture: packages/studio-client/src/composable-studio/tests/initializer-sdk.spec.ts:40 uses compositionUid: "about\_us".
> 
> **Internal drift note.** The SDK is mid-migration from the legacy internal name composableUid to the public-API compositionUid. The internal CompositionQuery type (packages/studio-message-types/src/base/composition-query.ts:7) still uses composableUid, and convertCompositionQueryInputToCompositionQuery translates between them. If you see composableUid inside SDK internals, that's the legacy name, so **users always write compositionUid** in the public input.

> **Verified end-to-end (2026-06-18).** Both **Freeform** and **Section** (place\_composition\_as: "section") embeds work via useCompositionData({ compositionUid }). Verification: a real Section (card\_grid in the docs-canvas project, captured in our network audit) rendered correctly inline in a code page via this exact pattern: place\_composition\_as returned "section", specOptions resolved, and <StudioComponent specOptions={specOptions} /> produced the section's full canvas output including resolved related\_posts Reference data. Test source: temporary /\_test-embed route in the docs canvas-app (since deleted) calling useCompositionData({ compositionUid: "card\_grid" }). So this recipe's Freeform-vs-Section guidance below is preference + author UX, not a technical constraint.

---

## When to Use This Recipe

| Situation | This recipe? |
| --- | --- |
| One small editable region inside an otherwise code-owned page | ✅ Yes |
| Two or three editable regions on the same code page | ✅ Yes: repeat the pattern, one compositionUid per region |
| **Migrating from hand-coded routes: you want to ship each Section before the full Template is built** | ✅ Yes: this is the _interim_ ship between [migrate-from-handcoded Step 3 (build the Section)](/docs/studio/migrating-hand-coded-pages-to-studio#step-35--optional-embed-each-section-directly-into-its-hand-coded-route-before-you-build-templates) and Step 4 (build the Template). Embed the Section in the existing route via <StudioComponent compositionUid={...} />; promote to a full route swap later. |
| You want to replace the whole page with Studio | ❌ No: use [migrate-from-handcoded](/docs/studio/migrating-hand-coded-pages-to-studio) or the [partial-adoption recipe](/docs/studio/partial-adoption-coexisting-with-a-code-driven-app) |
| You want every URL to flow through Studio | ❌ No: use the catch-all from [template preview routes](/docs/studio/template-preview-routes) |
| You want a marketer-composed campaign page | ❌ No: use [freeform-landing-page](/docs/studio/freeform-landing-page-template) |

---

## What Composition Flavor to Use for the Embed

Use a **Freeform composition** (place\_composition\_as: "page" with no connected\_content\_type). Reasons:

1.  **No backing CT required.** A bounded zone often has no single-entry-per-band model, so the marketer just composes layout + bindings against any data sources they want (Pinned Entry, Pinned Query, static values, references).
2.  **Already-documented embed shape.** Freeform compositions are rendered via <StudioComponent> (or useCompositionData) by compositionUid; see [§ 33-freeform/freeform-templates.md](/docs/studio/freeform-templates) and [§ 04-template-preview-routes.md "Why fetch by url vs compositionUid"](/docs/studio/template-preview-routes). The "rendering a known composition (e.g. recommended-content widget)" line in the SDK doc is exactly this case.
3.  **Author UX.** Marketer opens the Freeform composition in Studio, composes the band, hits Save, and the next page load on the PDP picks up the updated spec. No CT changes, no developer involvement.

> **Why not a Section then?** Sections technically work via the same compositionUid lookup (verified 2026-06-18, see top-of-doc note). The reason to prefer Freeform for embedded regions is **author UX**, not capability: - **Freeform** compositions are designed for "compose a layout, no entry needed": they pin their own data sources, work standalone, and are the natural fit when the band has its own data + content shape. - **Sections** are designed to be dropped into Templates by other authors via the Sections palette. Using a Section as an inline embed bypasses that intended workflow and confuses the Sections list (a section that no Template uses, but a code page does). - Both render via compositionUid; pick the one that matches your authoring intent.

---

## End-to-End Walkthrough

### Step 1: Create the Freeform composition in Studio

1.  Studio → Templates → **\+ New Template** → pick **Freeform**.
2.  Name it after the band's job, e.g. pdp\_marketing\_band, home\_promo\_strip, cart\_upsell\_shelf. The composition's composable\_uid (kebab-case slug of the name) is what your code page will reference.
3.  Set Description: _"Embedded band inside <ProductDetailsPage>'s marketing slot. Edited by marketing; rendered inline by code."_
4.  **Leave the URL pattern at Studio's auto-derived default**: Freeform compositions get /<content\_type\_uid>/<composition\_uid> by default. **This URL is never hit by a visitor** in the embed case; it's only used by Studio's iframe for canvas previewing. You can ignore it for the embed path.
5.  Save. Note the composable\_uid Studio created; that's your embed key.

### Step 2: Drop content into the composition

In the canvas:

1.  Drop the components the band needs: a <PromoBanner>, a <MarketingCard>, whatever's registered.
2.  Wire bindings via the Data Picker:
3.  Static values (author types text directly)
4.  Pinned Entry (a specific entry the marketer picks)
5.  Pinned Query (latest 3 announcements, etc.)
6.  Save the composition.

### Step 3: Render it inline in the code-owned page

```
// app/products/[slug]/page.tsx — code-owned PDP
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { BuyBox } from "@/components/product/BuyBox";
import { MarketingBand } from "./MarketingBand";   // ← new

export default async function ProductDetailsPage({ params }) {
  const product = await fetchProductBySlug(params.slug);
  return (
    <>
      <ProductHero product={product} />
      <ProductSpecs specs={product.specs} />
      <MarketingBand />                           {/* ← Studio-managed band */}
      <BuyBox product={product} />
    </>
  );
}
```

```
// app/products/[slug]/MarketingBand.tsx — the Studio embed
"use client";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export function MarketingBand() {
  const { specOptions, isLoading, error } = useCompositionData({
    compositionUid: "pdp_marketing_band",     // ← the composable_uid from Step 1
  });

  if (isLoading) return null;                 // band is optional; don't blink the layout
  if (error || !specOptions?.spec) return null;
  return <StudioComponent specOptions={specOptions} />;
}
```

### Step 3 (SSR variant): Server Component fetch

If your PDP is RSC + SSR:

```
// app/products/[slug]/page.tsx — Server Component
import { sdk } from "@/lib/contentstack";
import { ProductHero } from "@/components/product/ProductHero";
import { MarketingBandClient } from "./MarketingBandClient";

export default async function ProductDetailsPage({ params }) {
  const product = await fetchProductBySlug(params.slug);
  const marketingBand = await sdk.fetchCompositionData({
    compositionUid: "pdp_marketing_band",
    searchQuery: "",                          // required on server (no window.location.search)
  });
  return (
    <>
      <ProductHero product={product} />
      {marketingBand?.spec && <MarketingBandClient specOptions={marketingBand} />}
      {/* … rest of the page … */}
    </>
  );
}
```

```
// app/products/[slug]/MarketingBandClient.tsx
"use client";
import { StudioComponent } from "@contentstack/studio-react";
export function MarketingBandClient({ specOptions }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

### Step 4: Verify

1.  Open the PDP in a browser; the marketing band renders below the specs section.
2.  Open Studio → the pdp\_marketing\_band composition → make a change → Save.
3.  Reload the PDP → the change appears.
4.  (Optional) Open the composition in Studio's canvas iframe; <StudioCanvas> renders the band in isolation, against whatever pinned data sources you configured.

---

## How Authors Obtain the composable\_uid

The composable\_uid is Studio's slug for the composition (kebab-case derived from the display name, editable on creation). Authors can find it three ways:

1.  **Composition list:** Studio → Templates → look at the row's second column (composable\_uid).
2.  **URL:** the canvas URL contains /canvas/<entry\_uid> (not the composable\_uid), but the composition's metadata pane (right rail → Settings) shows the composable\_uid.
3.  **Convention:** for embedded bands, pick a stable kebab-case name when creating the composition (pdp\_marketing\_band, home\_promo\_strip). The dev who writes the embed code uses that same name. Don't rename the composition after embedding; the embed code is hard-coded to the slug.

For larger teams: keep a STUDIO\_EMBEDS.md in the repo listing every composable\_uid you embed and which page renders it, so the marketer and the developer share a contract.

---

## Multiple Bands on One Page

Repeat the pattern, one component per band, each with its own composable\_uid:

```
<MarketingBand compositionUid="pdp_promo_top" />
<MarketingBand compositionUid="pdp_promo_middle" />
<MarketingBand compositionUid="pdp_recommendations" />
```

Generalize the embed by writing a thin wrapper component in YOUR codebase:

> **<StudioEmbed> is NOT an SDK export.** It's a convenience wrapper you write yourself, bundling the SDK's hook (useCompositionData) + component (<StudioComponent />). The SDK ships only those two primitives; the wrapper exists purely to avoid repeating loading/error boilerplate on every embed. Name it whatever fits your codebase: <StudioEmbed>, <ManagedBand>, <EditableRegion>, etc.

```
// components/StudioEmbed.tsx — user-defined wrapper, not an SDK export
"use client";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export function StudioEmbed({ compositionUid }: { compositionUid: string }) {
  const { specOptions, isLoading, error } = useCompositionData({ compositionUid });
  if (isLoading || error || !specOptions?.spec) return null;
  return <StudioComponent specOptions={specOptions} />;
}
```

Then <StudioEmbed compositionUid="..." /> inline anywhere on any code page.

---

## Common Pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Embed renders nothing | The composition's composable\_uid doesn't match what the code passes. | Verify exact spelling in Studio → composition list (it's case-sensitive). |
| Embed renders during SSR but disappears after hydration | Component is marked "use client" but its parent (RSC) didn't pass specOptions through. | Fetch on the server, pass specOptions to the client wrapper. See Step 3 SSR variant. |
| Band shifts layout when it loads (CLS) | isLoading returns null; page reflows when content arrives. | Render a placeholder of the band's expected height during loading instead of null. |
| Marketer edits the band but doesn't see changes on PDP | Cache. <StudioComponent> fetches via CDA which respects publish-environment + cache headers. | Republish the composition (Save in Studio is draft; publish is what visitors see). |
| Embed code points at a deleted composition | Studio doesn't refuse the delete; the embed silently 404s. | Add a runtime warning in the StudioEmbed wrapper when error is non-null, gated behind an env var (dev/staging only). |

---

## What This Is Not

-   **Not** a section slot. Section slots are inside-a-composition placeholders that a Template fills; they don't reach into a code page.
-   **Not** a route. The catch-all route renders whole pages; this embed renders one component inline on a page you already own.
-   **Not** Visual Editor. Visual Editor adds inline-edit affordances to existing CT-bound rendering; this recipe adds an entirely Studio-composed region to a non-Studio page.

---

## See Also

-   [Templates overview: when to use a template (and when not to)](/docs/studio/choosing-between-templates-and-sections#when-to-use-a-template-and-when-not-to)
-   [Freeform templates](/docs/studio/freeform-templates)
-   [Partial adoption on a code-driven app](/docs/studio/partial-adoption-coexisting-with-a-code-driven-app)
-   [SDK API: useCompositionData + fetchCompositionData](/docs/studio/sdk-api-reference)
-   [Why fetch by url vs compositionUid](/docs/studio/template-preview-routes#why-fetch-by-url-vs-compositionuid)
