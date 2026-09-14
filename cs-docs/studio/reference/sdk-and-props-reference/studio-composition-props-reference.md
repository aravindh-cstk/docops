---
title: "StudioComposition Props Reference"
description: "Source-grounded reference for <StudioComposition /> and its companion fetcher sdk.fetchComposition."
url: /studio/studio-composition-props-reference
uid: blt7035851c971332f6
---

# StudioComposition Props Reference

## StudioComposition reference: bring-your-own-data rendering

Source-grounded reference for <StudioComposition /> and its companion fetcher sdk.fetchComposition. Every type maps to a real export in [composable-studio-sdk](https://www.npmjs.com/package/@contentstack/studio-react).

<StudioComposition /> renders a composition (a full page, or a section as the root) against data you already hold, passed as context: no SDK data fetch, no hook. It runs in client-side rendering (CSR) and Next.js server-side rendering (SSR). For the conceptual guide, see [StudioComposition](/docs/studio/studio-composition-component).

## The props

```
interface StudioCompositionProps {
  context: unknown;                    // required — the template data to render against
  spec?: StudioSpec;                   // a pre-fetched, spec-only composition
  compositionUid?: string;             // client-only: fetch the composition by uid
  loadingFallback?: React.ReactNode;   // shown during the compositionUid fetch
  errorFallback?: React.ReactNode;     // shown when the compositionUid fetch fails
}
```

You must pass **either** spec **or** compositionUid. With neither, the component throws:

```
StudioComposition requires either a `spec` or a `compositionUid`.
```

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| context | unknown | Yes | - | The data the composition renders against. Placed internally at dataSources.template. The composition's template bindings resolve against it. Pass the raw element you hold (e.g. one item of a multiple-group field). The SDK wraps it. |
| spec | StudioSpec | One of spec / compositionUid | - | A pre-fetched, spec-only composition from sdk.fetchComposition. Use in SSR (resolve on the server, pass down) or when you already fetched it. When present, compositionUid is ignored and there is no loading phase. |
| compositionUid | string | One of spec / compositionUid | - | Client-only convenience: when spec is omitted, the component fetches the composition by uid via sdk.fetchComposition. A "use client" component cannot fetch during a server render. Pass a pre-fetched spec in SSR. |
| loadingFallback | React.ReactNode | No | null | Rendered while the client-side compositionUid fetch is in flight. Only relevant to the compositionUid path. |
| errorFallback | React.ReactNode | No | null | Rendered when the client-side compositionUid fetch fails. The error is also logged to the console. |

### context: how it's used

The context value is wrapped as the template data source (dataSources.template) internally. You never build a StudioSpecData envelope. Embedded sections inside the composition are auto-scoped from context with buildSectionScopedData (pure, no network). A standalone section has no embedded section nodes, so nothing extra is computed.

Pass context in the shape the composition's bindings expect (the same field names the composition was authored against).

---

## sdk.fetchComposition: the spec-only fetcher

Resolves the composition **structure** (ui, compositionEntry, linked sectionCompositions, config) and **skips** the data fetch. spec.data comes back empty. You supply the data at render time via context. This is the bring-your-own-data counterpart to sdk.fetchCompositionData (which resolves data too: see [<StudioComponent /> reference](/docs/studio/composition-rendering-reference)).

```
function fetchComposition(
  query: CompositionQueryForSSRInput,
  options?: CompositionQueryOptions,
): Promise<StudioSpec>;
```

Runs in both SSR and CSR (a plain async function, not a hook). In SSR, resolve a compositionUid here and pass the returned spec to the component. In CSR you may instead pass compositionUid to the component directly.

### query: identifies WHICH composition

Same identifier shapes as sdk.fetchCompositionData, plus the searchQuery string:

| Field | Type | Purpose |
| --- | --- | --- |
| compositionUid | string | Resolve by composition UID, the fastest path. |
| url | string | Resolve by URL pattern matching. |
| templateContentTypeUid | string | Resolve the first composition connected to this content type. |
| searchQuery | string | The Studio iframe override string (locale, variant, preview entry, edit mode). Pass "" when rendering on your own site. |

### options: modifiers on the fetch

Same CompositionQueryOptions as sdk.fetchCompositionData: variantAlias, locale, templateEntryUid, extendQuery, and the custom fetchComposition / fetchTemplateEntry overrides. See [<StudioComponent /> reference: options](/docs/studio/composition-rendering-reference#modifiers-on-the-fetch).

```
const spec = await sdk.fetchComposition(
  { compositionUid: "product_tile", searchQuery: "" },
  { locale: "en-us" },
);
```

---

## End-to-end example

```
// app/products/page.tsx — Next App Router, SSR
import { sdk } from "@/lib/contentstack";
import { StudioComposition } from "@contentstack/studio-react";

export default async function ProductsPage() {
  // Your own data + the spec-only composition fetch, in parallel.
  const [products, spec] = await Promise.all([
    getProducts(),                                                        // your data source
    sdk.fetchComposition({ compositionUid: "product_tile", searchQuery: "" }),
  ]);

  return (
    <div className="grid">
      {products.map((element, i) => (
        <StudioComposition key={i} spec={spec} context={element} />
      ))}
    </div>
  );
}
```

## Common confusions

-   **context is NOT data.** <StudioComponent /> takes a data prop (Component Default Data). <StudioComposition /> takes a context prop (template data). Different props, different roots.
-   **spec.data is empty by design.** fetchComposition skips the data fetch. That's the whole point. Supply the data through context.
-   **compositionUid doesn't work during a server render.** The client-fetch path is a "use client" effect. In SSR, pre-fetch with sdk.fetchComposition and pass spec.
-   **There is no .public namespace.** Call sdk.fetchComposition(...), not sdk.public.fetchComposition(...).

## See also

-   [StudioComposition](/docs/studio/studio-composition-component): the conceptual guide with CSR/SSR/loop examples
-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference): the route-rendering component + fetchCompositionData
-   [Slot data reference](/docs/studio/slot-props-reference): the other bring-your-own-data surface
-   [SDK API Reference](/docs/studio/sdk-api-reference): the full public surface of @contentstack/studio-react
