---
title: "Composition Rendering Reference"
description: "Complete reference for all props accepted by StudioComponent, including specOptions, data, SDK init config, and fetcher query options."
url: /studio/composition-rendering-reference
uid: blt4221315e1dbf01fa
---

# Composition Rendering Reference

## Composition Rendering Reference

Source-grounded reference for what <StudioComponent /> accepts and what flows into the underlying SDK fetchers. Every type below maps to a real export in composable-studio-sdk; line references are to the files in [composable-studio-sdk](https://www.npmjs.com/package/@contentstack/studio-react).

## The two props

<StudioComponent /> accepts exactly two props:

```
interface StudioComponentProps {
  specOptions: StudioComponentSpecOptions;   // required
  data?: ComposableStudioData["component_props"];  // optional
}
```

### specOptions — the resolved composition

Type definition:

```
type StudioComponentSpecOptions = {
  spec: StudioSpec | null;          // resolved composition; null when 404
  fetchOptions: StudioComponentFetchOptions;  // what was used to fetch
  hasSpec: boolean;                 // true when a composition was found
  hasTemplate: boolean;             // true when the composition has a connected template
  seo: SeoMetadata | null;          // SEO metadata for the <head>
};
```

**You don't hand-construct this object.** It comes from the SDK fetchers:

-   **SSR** — await csStudio.fetchCompositionData(query, options?)
-   **CSR** — useCompositionData(query, options?) returns { specOptions, isLoading, error, refetchSpec, refetchData }

### data — runtime external values

Type — ComposableStudioData\["component\_props"\] — is structurally a Record<string, any>. Authors see your data object's top-level keys under the **Component Default Data** root in the canvas Data Picker, where they can bind component props to them.

Use this for **anything not in Contentstack** — pricing APIs, A/B variant flags, geolocation, weather, user profile, URL search params. See [Component Default Data](/docs/studio/set-component-default-data) and the wire-external-data skill.

```
<StudioComponent
  specOptions={specOptions}
  data={{ pricing: livePricingData, persona: visitorPersona, abVariant: "B" }}
/>
```

---

## SDK init config (set once at app shell)

Before any fetcher runs, you initialise the SDK with studioSdk.init({...}). The config schema:

| Field | Type | Purpose |
| --- | --- | --- |
| stackSdk | Stack \\| any | **Required.** The @contentstack/delivery-sdk stack instance. Must have livePreviewQuery available. |
| contentTypeUid | string (optional) | **The content type in your stack that STORES compositions** — typically named compositions, documentation\_compositions, or similar. One per project. This is NOT the connected content type the template renders against; that's templateContentTypeUid on the query (see below). |
| locale | string (optional) | Default locale for all fetches. Per-query locale in CompositionQueryOptions overrides this. |
| cslp.appendTags | boolean (optional) | Append data-cslp Live Preview tags to bound DOM elements. |
| openInStudioButton.enable | boolean (optional) | Render the "Open in Studio" floating button on visitor pages (editor convenience). |
| openInStudioButton.position | "top" \\| "top-left" \\| "top-right" \\| "top-center" \\| "bottom" \\| "bottom-left" \\| "bottom-right" \\| "bottom-center" (optional) | Where to position the button. |
| fetchComposition | CompositionFetcher (optional) | **Global** custom fetcher for compositions. Per-query fetchComposition (below) takes priority over this. |
| fetchTemplateEntry | TemplateEntryFetcher (optional) | **Global** custom fetcher for template entries. Per-query fetchTemplateEntry (below) takes priority. |

```
// src/lib/contentstack.ts (or similar app-shell module)
import { studioSdk } from "@contentstack/studio-react";
import { stack } from "./delivery-sdk";

studioSdk.init({
  stackSdk: stack,
  contentTypeUid: "documentation_compositions",   // where YOUR compositions are stored
  locale: "en-us",
  cslp: { appendTags: true },
});
```

### Two different contentTypeUid concepts — don't confuse them

|  | What it identifies | Where you set it |
| --- | --- | --- |
| contentTypeUid (config) | The content type in your stack where **compositions themselves** are stored (one per project). | studioSdk.init({ contentTypeUid: "documentation\_compositions" }) |
| templateContentTypeUid (query) | The content type the composition's **template is connected to** (Blog Post, Product, etc.). | fetchCompositionData({ templateContentTypeUid: "product" }) |

The config-level one is set once, at app shell. The query-level one is set per route, per fetch — and only when you're identifying a composition by its connected CT instead of by composition UID or URL.

---

## What you pass to the fetcher (becomes specOptions)

csStudio.fetchCompositionData(query, options?) and useCompositionData(query, options?) take two arguments. Both fetchers return / resolve to the same specOptions object.

### query: CompositionQueryInput — identifies WHICH composition

Type. One of these five shapes — the SDK enforces at-least-one-identifier via the type:

| Shape | When to use |
| --- | --- |
| { compositionUid: string } | You know the composition's UID — **fastest path**. Pair with templateEntryUid (in options) to also pin a specific entry; otherwise the first entry of the connected CT is used. |
| { url: string } | Resolve by URL pattern matching — slower (scans compositions). |
| { compositionUid: string, url: string } | Both — UID resolves the composition, URL preserved for context. |
| { templateContentTypeUid: string } | **Pick a composition by its connected content type** — e.g. templateContentTypeUid: "product" returns the first composition connected to the product CT. Pair with templateEntryUid to pin a specific entry. |
| { url: string, templateContentTypeUid: string } | URL + CT filter; CT takes priority for the fetch, URL preserved for Studio iframe context. |

The templateContentTypeUid field is how you pass the **connected content type** of a template through to specOptions. It's the CT the template renders entries of (Blog Post, Product, Case Study, etc.) — not the CT that stores compositions in your stack. See [Two different contentTypeUid concepts](#two-different-contenttypeuid-concepts--dont-confuse-them) below.

### options?: CompositionQueryOptions — modifiers on the fetch

Type:

| Option | Type | Purpose |
| --- | --- | --- |
| variantAlias | string | Render a specific variant alias of the entry. See [Variant aliases deep-dive](/docs/studio/variant-aliases-deep-dive). |
| locale | string | Override the stack default locale for THIS query. Studio's native fallback chain still applies. |
| templateEntryUid | string | Use a specific entry UID as the preview/template entry. Priority order: templateEntryUid > url resolution > first available entry. |
| extendQuery | Record<string, { includeReferences?: string\[\]; only?: (string \\| \[string, string\])\[\] }> | Extend the underlying CDA query with extra reference inclusions or field projections, keyed by content type UID. |
| fetchComposition | CompositionFetcher | Per-query override of how the composition itself is fetched. Receives a context with compositionQuery, contentTypeUid, options, stackSdk, and defaultFetch. Return a CompositionEntry, null for 404, or call defaultFetch() to fall through. |
| fetchTemplateEntry | TemplateEntryFetcher | Per-query override of how the template entry is fetched. Same shape — gets the resolved composition + computed includeReferences and only projections. |

The fetcher overrides (fetchComposition, fetchTemplateEntry) are the escape hatch for custom storage backends, multi-region fanout, mocked tests, etc.

---

## End-to-end example

```
// app/products/[sku]/page.tsx — Next App Router, SSR
import { csStudio } from "@/lib/contentstack";
import { StudioComponent } from "@contentstack/studio-react";

export default async function ProductPage({ params, searchParams }) {
  const variant = await pickExperimentVariant(params.sku);
  const locale = searchParams.locale ?? "en-us";

  // Fetch — resolves the composition + bindings, returns the specOptions object
  const specOptions = await csStudio.fetchCompositionData(
    { templateContentTypeUid: "product", searchQuery: "" },  // CompositionQueryForSSRInput — identifies composition + forwards server request query
    {                                              // CompositionQueryOptions — modifiers
      templateEntryUid: params.sku,
      variantAlias: variant === "B" ? "experiment-b" : undefined,
      locale,
      extendQuery: {
        product: { includeReferences: ["related_products", "reviews"] },
      },
    },
  );

  // External runtime data — anything not in Contentstack
  const pricing = await fetchLivePricing(params.sku);
  const persona = getPersonaFromCookies();

  // Hand the resolved object + runtime data to StudioComponent
  return (
    <StudioComponent
      specOptions={specOptions}
      data={{ pricing, persona }}
    />
  );
}
```

That's the full surface. Two props on <StudioComponent />; a CompositionQuery + CompositionQueryOptions on the fetcher. Everything else is either internal to the SDK or surface a different SDK API touches (e.g. studioSdk.init({...}) config).

---

## Common confusions

-   **specOptions is NOT { compositionUid, templateEntryUid }** — that's the query/options input to the fetcher, not what <StudioComponent /> consumes. Always go through fetchCompositionData / useCompositionData first; pass the resolved result to <StudioComponent />.
-   **data is NOT a way to override Contentstack content.** Components inside the composition only see data values that authors _bind to_ via the Data Picker. Authors decide which data keys flow into which component props.
-   **404 handling lives on specOptions.hasSpec and specOptions.hasTemplate** — check these before rendering to short-circuit to your 404 component when no composition / no connected entry was found.
-   **Editor-only variant override is handled by Studio + the SDK, not by your code.** When an editor picks a variant in the canvas navbar, Studio applies it to the iframe preview internally; your visitor-site code only ever passes the variantAlias query option (above). Do not parse Studio's iframe URL params — they're an internal contract. See [Variant aliases deep-dive](/docs/studio/variant-aliases-deep-dive).

---

## See also

-   <StudioComposition /> reference — render a composition against data you hold (bring-your-own-data)
-   [Component Default Data](/docs/studio/set-component-default-data) — the canonical data prop reference
-   Wire external data — skill that wires runtime data through the data prop
-   Configure CSR vs SSR — pick fetchCompositionData (SSR) vs useCompositionData (CSR)
-   [Variant aliases](/docs/studio/variant-aliases-deep-dive) — passing variantAlias through to specOptions
-   [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale) — passing locale through to specOptions
-   [URL variables](/docs/studio/url-variables-reference) — every variable available in URL patterns that resolve into the query
