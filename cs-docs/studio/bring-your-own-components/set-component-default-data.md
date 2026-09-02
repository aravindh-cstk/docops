---
title: "Set Component Default Data"
description: "Learn how schema defaultValue props and the runtime data prop on StudioComponent let you seed components with placeholder and external data in Contentstack Studio."
url: /studio/set-component-default-data
uid: blt54fb6aaae4f0f0ea
---

# Set Component Default Data

## Set Component Default Data

"Component Default Data" in Studio is two related things that share a name. Both feed values into a component without going through a Contentstack entry — and the more powerful of the two is also the easiest one to miss.

|  | What it is | Where it lives | When it's used |
| --- | --- | --- | --- |
| **Schema defaults** (defaultValue) | Per-prop fallback baked into the component's registration | The props.<name>.defaultValue field in registerComponent({...}) | Preview only — author drops the component, sees the default, replaces it on bind |
| **Runtime Component Default Data** (the data prop on <StudioComponent />) | A Record<string, any> you pass in at render time | The data prop on <StudioComponent specOptions={...} data={...} /> | **Always** — these values are bindable from the canvas, so components inside the composition can pull from them at render time |

The second one is the canonical hook for **bringing external data into a Studio composition** — pricing, inventory, feature flags, geolocation, weather, A/B variant, user profile, or anything else that doesn't live in Contentstack. You fetch the data wherever it actually lives, hand it to <StudioComponent /> via the data prop, and bind the composition's components to it through the Data Picker.

This page covers both — schema defaults first (the simpler case), then runtime Component Default Data (the powerful one).

---

## Part 1 — Schema defaults (defaultValue)

Schema defaults are what authors see the moment they drop your component on the canvas — before they've bound it to data or typed anything.

A good set of defaults makes your component **immediately visible and recognisable**. Bad or missing defaults mean the dropped component renders blank, which makes authors think they did something wrong.

### Where they live

On each prop, via the defaultValue field:

```
props: {
  label: { type: "string",   defaultValue: "Click me" },
  href:  { type: "href",     defaultValue: "#" },
  size:  { type: "choice",   options: ["small", "medium", "large"], defaultValue: ["medium"] },
  image: { type: "imageurl", defaultValue: "/placeholder.png" },
},
```

When an author drops the component, Studio uses these values until the author binds the prop to data or overrides it manually.

### What "good defaults" look like

Three rules of thumb:

#### 1\. Make the component visible on drop

A component that renders blank when dropped is a UX dead end. Author drops a Hero, sees nothing, assumes Studio is broken. Default content avoids this:

```
// Good
{
  headline: { type: "string", defaultValue: "Your headline here" },
  subtitle: { type: "string", defaultValue: "Your subhead here" },
  image:    { type: "imageurl", defaultValue: "/placeholder-hero.png" },
}

// Bad — drops as a blank rectangle
{
  headline: { type: "string" },
  subtitle: { type: "string" },
  image:    { type: "imageurl" },
}
```

#### 2\. Use placeholder copy, not real copy

Defaults are templates, not content. Use phrasing that signals "replace me":

```
// Good — clearly placeholder
defaultValue: "Your headline here"
defaultValue: "Short description of this section"

// Bad — looks like real content
defaultValue: "Buy our amazing product today!"
```

#### 3\. Default to safe / neutral choices

For choice props, default to the variant that works in the most contexts:

```
size: { type: "choice", options: ["small", "medium", "large"], defaultValue: ["medium"] }
tone: { type: "choice", options: ["neutral", "primary", "danger"], defaultValue: ["neutral"] }
```

Not the rarest variant — the most common.

### defaultValue vs defaultValueHint

Two different things:

| Field | What it does |
| --- | --- |
| defaultValue | The actual value passed to your component if nothing is set |
| defaultValueHint | A hint string shown in the form input as placeholder text — for guidance, not a real value |

```
title: {
  type:             "string",
  defaultValueHint: "e.g. Welcome to our site",     // shown grey inside the empty input
}
```

Use defaultValueHint when you want to suggest a shape without committing to placeholder content rendering on the canvas.

### When schema defaults don't apply

-   **The prop is bound to data** — the entry's value wins; defaults only matter for unbound props
-   **The prop is explicitly cleared** — Studio respects empty string / null; doesn't fall back to default
-   **Required validation failed** — the prop stays at its default but shows a validation error

### Schema defaults inside object and array props

```
cta: {
  type: "object",
  properties: {
    label: { type: "string", defaultValue: "Get started" },
    href:  { type: "href",   defaultValue: "#" },
  },
}

features: {
  type: "array",
  items: { type: "string", defaultValue: "Feature item" },
  defaultValue: ["First feature", "Second feature", "Third feature"],
}
```

For arrays, the outer defaultValue is the initial array; items.defaultValue is what new items get when authors add to the array.

---

## Part 2 — Runtime Component Default Data (the data prop on <StudioComponent />)

This is the part most teams discover late. **<StudioComponent /> takes a data prop** — a plain Record<string, any> of values that become bindable inside the composition through the Data Picker root labelled **"Component Default Data"**.

This is how external data enters a Studio composition without round-tripping through Contentstack.

### The shape

```
interface StudioComponentProps {
  specOptions: StudioComponentSpecOptions;  // required — what to render
  data?: Record<string, any>;               // optional — the runtime Component Default Data
}
```

The data value is whatever you make it — a flat object, a nested object, or a mix. Each top-level key shows up as a bindable node under "Component Default Data" in the canvas's Data Picker.

### The flow

```
1. Your app fetches external data however it normally does
   (REST, GraphQL, server function, third-party SDK, edge config, etc.)

2. You hand that data to <StudioComponent /> via the `data` prop:
      <StudioComponent
        specOptions={specOptions}
        data={{ pricing: {...}, weather: {...}, abVariant: "B" }}
      />

3. In Studio's canvas, authors bind component props to those values
   via Data Picker → "Component Default Data" → pricing.unitPrice etc.

4. At render time, Studio reads the bindings and passes the real values
   into the React components — exactly as if they came from the CMS.
```

The composition doesn't know the data is external. Bindings work the same way; the picker just shows a different root.

### Works in both CSR and SSR

The data prop is just a React prop on <StudioComponent /> — it works wherever React renders the component. The fetch path for specOptions differs by framework (hook in CSR, server function in SSR), but the data prop attaches the same way in both.

#### CSR example — Vite / React SPA

```
// src/routes/ProductPage.tsx
"use client";
import { useEffect, useState } from "react";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";
import { getLivePricing } from "@/lib/pricing-api";

export function ProductPage({ sku }: { sku: string }) {
  // 1. Composition spec via the Studio hook (CSR path)
  const { specOptions, isLoading, error } = useCompositionData({
    url: `/products/${sku}`,
  });

  // 2. External data fetched alongside, in parallel — pure React state
  const [pricing, setPricing] = useState<Pricing | null>(null);
  useEffect(() => {
    getLivePricing(sku).then(setPricing);
  }, [sku]);

  if (isLoading || !pricing) return <Loading />;
  if (error)                 return <ErrorState message={error instanceof Error ? error.message : String(error)} />;
  if (!specOptions?.spec)    return <NotFound />;

  // 3. Pass both into <StudioComponent /> via specOptions + data
  return (
    <StudioComponent
      specOptions={specOptions}
      data={{ livePricing: pricing }}
    />
  );
}
```

Live Preview updates work the same way — ContentstackLivePreview.onEntryChange(refetchSpec) refreshes the composition; pricing refreshes through its own effect/SWR/React Query path.

#### SSR / RSC example — Next.js App Router

```
// app/products/[sku]/page.tsx — Server Component (no "use client")
import { csStudio } from "@/lib/contentstack";
import { ProductPageClient } from "./ProductPageClient";
import { getLivePricing } from "@/lib/pricing-api";

export default async function ProductPage({ params, searchParams }) {
  const url = `/products/${params.sku}`;
  const searchQuery = new URLSearchParams(searchParams).toString();

  // Two parallel fetches on the server: composition spec + live pricing.
  // fetchCompositionData REJECTS for not-found URLs — catch to 404 cleanly.
  let specOptions, pricing;
  try {
    [specOptions, pricing] = await Promise.all([
      csStudio.fetchCompositionData({ url, searchQuery }),
      getLivePricing(params.sku),  // returns { unit_price, currency, in_stock }
    ]);
  } catch {
    return notFound();
  }
  if (!specOptions.hasSpec) return notFound();

  return (
    <ProductPageClient
      specOptions={specOptions}
      data={{ livePricing: pricing }}
    />
  );
}
```

```
// app/products/[sku]/ProductPageClient.tsx — Client Component
"use client";
import { StudioComponent } from "@contentstack/studio-react";

export function ProductPageClient({ specOptions, data }) {
  return <StudioComponent specOptions={specOptions} data={data} />;
}
```

The shape of what reaches <StudioComponent /> is **identical in both cases** — specOptions is the same StudioComponentSpecOptions shape whether you got it from the hook or from the server fetch; data is the same Record<string, any> you constructed alongside.

#### Equivalent patterns for other frameworks

| Framework | Where to fetch specOptions | Where to fetch external data | Where <StudioComponent /> mounts |
| --- | --- | --- | --- |
| Vite / React SPA | useCompositionData({url}) hook | useEffect + useState, or React Query / SWR | Directly in the page component |
| Next.js Pages Router | getServerSideProps → csStudio.fetchCompositionData | Same getServerSideProps (server-side) | Page component receives both as props |
| Next.js App Router (RSC) | Server Component awaits csStudio.fetchCompositionData | Server Component awaits the external fetch | Client Component wrapper marked "use client" |
| Remix | loader calls csStudio.fetchCompositionData | Same loader (server-side) | Route component reads via useLoaderData |
| Astro (with React island) | .astro server-side fetch | Same .astro server-side fetch | React island marked client:load |

For the full render-strategy decision, see [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering).

### What authors see — same picker in both paths

Now in Studio's canvas, an author opens the <PriceTag /> component's right panel, clicks the price prop's binding chip, and the Data Picker shows:

-   **Linked Template Entry** — the connected product entry (title, description, etc.)
-   **Component Default Data** — livePricing.unit\_price, livePricing.currency, livePricing.in\_stock

They pick livePricing.unit\_price. The composition renders with whatever your pricing API returned — Contentstack never sees that number, but the page does.

### Use cases that fit this pattern

-   **Live pricing or inventory** — fetched from a commerce backend, not Contentstack
-   **Personalization variant** — data={{ variant: getABVariant(user) }}
-   **Geolocation / region** — data={{ region: getRegion(request) }}, components bind to region.currency etc.
-   **Authenticated user data** — data={{ user: { name, tier } }} for personalized greetings
-   **Time-sensitive data** — current weather, "next showtime", live event status
-   **Feature flags** — data={{ flags: { newCheckoutEnabled: true } }} → bind a Condition Block to it
-   **Anything stored outside Contentstack** that the page still needs to render

### Why this is better than fetching inside the component

Fetching directly inside a registered component works, but it locks the data dependency _into_ the component code — every component that wants live pricing has to import the pricing client and replicate auth, error handling, caching, and SSR concerns.

Routing the data through the data prop on <StudioComponent /> puts the fetch in one place (the app's route handler), keeps your components dumb-and-bindable, and lets a single component render the same way against CMS data OR external data depending on what the binding points to. The component author doesn't have to know which source it's coming from.

### Visibility in the Data Picker

The "Component Default Data" root is **only visible when**:

-   A component is selected on the canvas (this is a per-component data source — see [Component Data tab](/docs/studio/the-component-data-tab))
-   The component has registered props that could accept a binding

If you pass a data prop but the picker doesn't show the root, the most likely reason is no component is currently selected — the picker scopes to the selected node.

### Combining schema defaults + runtime data

The two coexist:

| Source | When it wins |
| --- | --- |
| Author-bound CMS field | Always wins if a binding is set |
| Author-bound Component Default Data | Wins if a binding to the data prop is set |
| Author-typed literal | Wins if author manually typed a value |
| Schema defaultValue | Falls back here if nothing else is set |

Schema defaults are the floor; runtime Component Default Data is one of several first-class binding sources sitting above that floor.

### Updating runtime data after render

The data prop is a normal React prop — re-render <StudioComponent /> with a new data value and the composition reflects the change. So:

-   **Polling / SWR / React Query** — refetch external data and pass the latest into data
-   **Subscriptions** — wire a WebSocket to your state, update data, the composition re-renders
-   **User-driven changes** — currency switcher, variant toggle, locale switch — flow them through data

You don't need a special Studio API to do this; the React render cycle handles it.

### Server-side considerations

Two things to watch for in SSR:

-   **Don't pass functions or non-serializable values** in data. If you're handing data from a Server Component to a Client Component (Next.js App Router) or via getServerSideProps (Pages Router) → data has to round-trip through JSON.
-   **Hydration matches must align.** Server and client must agree on the value of data at hydration time. If the value depends on Date.now() or Math.random() and you compute it twice, you'll get a hydration mismatch warning. Compute server-side, pass through, let the client reuse the same value.

---

## Common pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Schema defaultValue left empty | Component drops as blank rectangle | Add placeholder copy / image / size as shown above |
| defaultValue used as real product copy | Author ships placeholder text as if it's content | Use clearly-template phrasing like "Your headline here" |
| Forgetting runtime data exists | Team forks components to call APIs from inside | Route external fetches through <StudioComponent data={...} /> |
| "Component Default Data" missing from picker | Authors can't find the binding | Select a component on the canvas first; the root is per-selection |
| Passing non-JSON values in data (functions, classes) | SSR serialization errors | Keep data plain �� strings, numbers, arrays, objects |
| Hydration mismatch on data-driven props | React warning in console | Compute once server-side, pass through; don't recompute on the client |

## See also

-   [Component schema](/docs/studio/component-schema-prop-types) — all prop types and how defaultValue fits per type
-   [Component Data tab](/docs/studio/the-component-data-tab) — the per-component right-panel surface that exposes "Component Default Data" in the picker
-   [CMS Binding](/docs/studio/bind-cms-content-to-studio-components) — how the picker resolves bindings against each available data source
-   [SDK API reference — StudioComponent](/docs/studio/sdk-api-reference) — the data prop type definition
-   Bring your own data — rendering a composition against data you hold (<StudioComposition />) and per-slot data (<Slot>)
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration) — lazy registration for big libraries
