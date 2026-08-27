---
title: "Variant Aliases Deep Dive"
description: "Learn how to use Contentstack variant aliases in Studio for A/B testing, personalisation, and seasonal content, including cache key strategy and patterns to avoid."
url: /studio/variant-aliases-deep-dive
uid: blt70f213710e554dee
---

# Variant Aliases Deep Dive

## Variant Aliases Deep Dive

Contentstack's variant aliases let one entry have N versions targeted at different audiences, time periods, or experiments, e.g. a Black Friday variant of a product page, a "Premium tier" variant of marketing copy, a "Variant B" of an A/B test. Studio renders variants natively. This page is about the patterns that work and the ones that don't.

## The Model

A variant alias is a **named slice of an entry**. The base entry has its canonical content; a variant adds overrides (changed fields, added fields, removed fields). At render time, Studio resolves bindings by merging the variant on top of the base.

The active variant alias reaches the SDK through two paths: one for editors, one for visitor sites:

1.  **Editor preview (set by Studio, not by your code).** When an editor picks a variant in the Studio canvas navbar, Studio applies it to the iframe preview internally. The SDK overrides its own config.variantAlias for every subsequent fetch while running inside the iframe. You don't set this; Studio does. Your visitor-site code never sees or parses this. (The transport between Studio's canvas and the SDK is internal and may change between SDK versions; never inspect or pass Studio's iframe URL params yourself.)

2.  **Visitor site (you set this).** Your route passes variantAlias explicitly to the SDK:

3.  SSR: sdk.fetchCompositionData({ variantAlias: "holiday-2026", … })
4.  CSR: useCompositionData({ variantAlias })
5.  Or via studioSdk.init({ variantAlias }) to bake one into the SDK instance.

If no variant is specified at either path, the base entry renders.

Variants are different from locales. Locale = "this content in another language." Variant = "this content for a different audience/moment." Use both together when needed (fr-fr × holiday-2026 = the French holiday variant).

## Recommended Patterns

### A/B testing through variants

Two entry variants, same template, server-side variant selection. The variant flows in via the **variantAlias** **query option** on sdk.fetchCompositionData. The resulting specOptions is the resolved object you pass straight to <StudioComponent />:

```
// app/products/[sku]/page.tsx
export default async function ProductPage({ params }) {
  const variant = await pickExperimentVariant(params.sku);   // returns "A" or "B"

  const specOptions = await sdk.fetchCompositionData({
    contentTypeUid: "product",
    templateEntryUid: params.sku,
    variantAlias: variant === "B" ? "experiment-b" : undefined,   // undefined → base
  });

  return <StudioComponent specOptions={specOptions} />;
}
```

Authors edit variant B as just another entry view. No code change to "ship variant B": that's pickExperimentVariant returning "B" for more traffic.

### Personalisation through variants

Same shape: variant per persona, segment, or tier:

```
const persona = getPersonaFromCookies(request);   // "premium" | "standard" | "trial"
const variantAlias = persona !== "standard" ? `persona-${persona}` : undefined;
```

undefined falls back to the base entry, so you don't have to author a variant for every persona, only the ones that need different content.

### Seasonal / time-bound variants

A "Holiday 2026" variant that only renders during a date window:

```
const now = new Date();
const holidayActive = now >= new Date("2026-11-20") && now < new Date("2026-12-30");
const variantAlias = holidayActive ? "holiday-2026" : undefined;
```

Authors update the holiday variant well in advance; engineering doesn't ship anything to flip the switch. The date check does it.

### Editor preview of variants

In Studio, the navbar exposes a variant picker alongside the entry/locale pickers. Switching variant in the navbar re-renders the canvas with that variant. Authors can preview every variant of an entry without leaving Studio. (How Studio communicates the choice to the SDK inside the iframe is an internal contract. Your code never reads or sets it.)

## Patterns to Avoid

| Pattern | Why it bites |
| --- | --- |
| Variant-driven layout changes via React conditionals in components ({variant === "B" ? <HeroB /> : <HeroA />}) | Defeats Studio composability. The layout decision is in code, not in the composition spec. Use a different component composition per variant via [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks) instead. |
| Forking templates per variant (product-template, product-template-holiday) | N templates per variant; structural changes have to be N-applied |
| Selecting variants client-side based on cookies, then hydrating SSR HTML built without the variant | Hydration mismatch; CLS; user sees the wrong content for a flash |
| Caching SSR output without including the variant in the cache key | All visitors get the first request's variant; experiments don't work |
| Using variants as a versioning system ("v1", "v2") | Variants aren't designed for sequential versions; use Contentstack's actual versioning instead |

## Cache Key Strategy

If you're caching SSR output (ISR, edge cache, CDN), the **variant alias must be in the cache key**. Otherwise the first visitor's variant becomes everyone's variant.

For Vercel ISR + variants: skip ISR for variant-aware routes and use on-request SSR, OR include the variant in the dynamic route path (e.g. /products/\[sku\]/\[variant\]). For edge cache: set Vary: Cookie if the variant is cookie-derived, or include the variant in the path.

## What's Still Unsolved

-   **Variant-specific URL slugs.** Today the URL doesn't change when a variant is active. /products/studio-pro renders the variant if one is selected. If you need a different URL per variant (/products/studio-pro-holiday), that's manual route + redirect work today; deeper SDK support is on the roadmap.
-   **Editor preview of "what visitors see" for a specific persona.** The navbar variant picker tests one variant at a time; there's no single view of "preview as Persona X." Workaround: switch variant in the navbar and use the entry picker to choose the variant-targeted entry.

## See Also

-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference): the variantAlias option in CompositionQueryOptions, plus everything else you can pass through to specOptions
-   [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale): variants combine with locales for region-specific personalisation
-   [Configure CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering): variant resolution differs between paths
-   [Production deployment edges](/docs/studio/production-deployment-edge-cases): cache key strategy when shipping variants
