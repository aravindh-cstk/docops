---
title: "Troubleshoot Bring Your Own Data"
description: "Symptom first, then the fix. Covers <StudioComposition />, its spec-only fetcher sdk.fetchComposition, and <Slot data={...}>."
url: /studio/troubleshoot-bring-your-own-data
---

# Troubleshoot Bring Your Own Data

## Troubleshoot Bring Your Own Data

Symptom first, then the fix. Covers <StudioComposition />, its spec-only fetcher sdk.fetchComposition, and <Slot data={...}>.

For setup-level failures (canvas blank, Live Preview, 401s) see [Troubleshoot setup](/docs/studio/troubleshoot-common-studio-issues).

## Errors thrown at render

### "StudioComposition requires either a spec or a compositionUid."

The component throws immediately: neither identifier was passed.

**Fix:** pass exactly one.

-   For server-side rendering (SSR), RSC, or a loop, pre-fetch and pass spec:

    ```
    const spec = await sdk.fetchComposition({ compositionUid: "product_tile", searchQuery: "" });
    <StudioComposition spec={spec} context={element} />
    ```

-   For a single client-rendered mount, pass compositionUid (plus both fallbacks).

A spec that resolved to undefined (e.g. an await you forgot, or a prop that didn't arrive) reads as "not passed". Log the value before rendering.

### "StudioComposition: SDK not initialized. Call studioSdk.init(config) before rendering with a compositionUid."

Logged to the console. The component renders errorFallback. Only the compositionUid path hits this: it needs the SDK to fetch, and studioSdk.init(...) hasn't run yet.

**Fix:**

1.  Call studioSdk.init({ stackSdk, contentTypeUid }) once at app startup, before any route mounts. See [Install the Studio SDK](/docs/studio/install-the-studio-sdk).
2.  Confirm the init module is actually imported on this route: a module that nothing imports never runs.
3.  If init is async in your app shell, render a placeholder until it completes rather than mounting <StudioComposition /> early.

### "Stack SDK not available to fetch composition."

sdk.fetchComposition throws this when the SDK was initialized without a stackSdk.

**Fix:** pass a configured Delivery SDK stack into studioSdk.init({ stackSdk }). If the stack is built from env vars, check they're present in this runtime: a server-only variable is undefined in the browser, and a missing VITE\_/NEXT\_PUBLIC\_ prefix keeps it out of the client bundle.

### "[Composable Studio SDK] Custom components not registered: <types>"

sdk.fetchComposition validates the registry against the composition's tree and throws before returning a spec. The listed types appear in the composition but have no registerComponent entry.

**Fix:**

1.  Register every component the composition uses, and confirm those calls run **before** the fetch, not in a component that renders later.
2.  In SSR this validation is client-side only: the spec resolves on the server and the throw surfaces after hydration. Check the browser console, not the server log.
3.  The sibling message "Internal components missing: …" means Studio's own built-ins weren't auto-registered. Add import "@contentstack/studio-react"; once so the package root executes.

See [Registering components](/docs/studio/register-components).

### "Composition not found. The requested composition does not exist or has been deleted."

The uid resolved to nothing. On the compositionUid path this is logged and errorFallback renders. From sdk.fetchComposition it rejects.

**Fix:** in order of likelihood:

1.  **Wrong identifier.** compositionUid is the composition's uid as listed in Studio, not the entry uid of the content it renders.
2.  **Not published to the environment you're reading.** Publish it, or point the Delivery SDK at an environment where it exists.
3.  **Deleted or renamed.** Re-check the composition list in Studio.

<!-- Heading below quotes the SDK's error string verbatim, hence the lint suppression. -->

### "Please provide either composableUid or url to fetch the composition." <!-- style-lint: allow -->

sdk.fetchComposition was called with a query that identifies nothing, e.g. { searchQuery: "" } alone, or a compositionUid that was undefined at call time.

**Fix:** include one of compositionUid, url, or templateContentTypeUid. Guard the call when the identifier comes from a param that can be empty on first render.

## Nothing renders, and nothing errors

### The server sends an empty page. Content appears after hydration

You passed compositionUid on a server-rendered mount. That path fetches in a client effect, so the server render produces nothing.

**Fix:** resolve the spec server-side and pass spec:

```
// Server Component
const spec = await sdk.fetchComposition({ compositionUid: "product_tile", searchQuery: "" });
return <StudioComposition spec={spec} context={element} />;
```

### An empty gap where the composition should be

loadingFallback and errorFallback both default to null, so a slow fetch and a failed fetch look identical, like nothing happened.

**Fix:** pass both on the compositionUid path, then re-check the console for the underlying error:

```
<StudioComposition
  compositionUid="hero_section"
  context={element}
  loadingFallback={<SectionSkeleton />}
  errorFallback={<NotFound />}
/>
```

### The composition renders, but bound nodes are blank

context doesn't match the field names the composition's bindings were authored against. Missing paths resolve to empty, no warning.

**Fix:**

1.  Open the composition in Studio and read the bindings on the blank nodes (e.g. title, hero.headline, sub\_items).
2.  Shape context with those exact keys at those exact depths. A binding to hero.headline needs context.hero.headline, not context.headline.
3.  Pass the raw element: one item of the array, one API record. Don't wrap it in an envelope of your own. The SDK places it at dataSources.template for you.
4.  Asset fields are objects, not URLs: bind featured\_image.url, and pass context.featured\_image = { url }. See [Wire external data](/docs/studio/set-component-default-data).

### The composition renders unstyled

Design tokens travel on the resolved spec's config, so a composition that renders but looks unthemed usually means tokens were never registered in this app.

**Fix:** register them, see [Design tokens](/docs/studio/configure-design-tokens-in-studio).

## Data-shape and framework problems

### spec.data comes back empty

Working as intended. sdk.fetchComposition resolves structure and **skips** the data fetch. That's what makes it the bring-your-own-data path. Supply the data through context.

If you wanted the SDK to fetch content too, you want sdk.fetchCompositionData + <StudioComponent /> instead. See [Two SDK components](/docs/studio/studio-composition-props-reference).

### "Only plain objects can be passed to Client Components" (Next.js)

<StudioComposition /> is a "use client" component, so in RSC both spec and context cross the boundary from server to client. Class instances, Date, Map, Set, and functions can't be serialized.

**Fix:** map your record to a plain object before passing it:

```
const element = {
  title: product.title,
  price: product.price,                    // number, not a Money instance
  released: product.released.toISOString(), // string, not a Date
};
```

### Every mount fires its own network request

Each <StudioComposition compositionUid={…} /> fetches independently, so N mounts cost N requests.

**Fix:** fetch the spec once above the loop and pass the same object to every item, see [Rendering a section per array element](/docs/studio/studio-composition-component#rendering-a-section-per-array-element-the-loop).

### Every item in a loop renders the same data

The loop passes the same context each iteration, usually a closure over one variable instead of the mapped element.

**Fix:** pass the element the iteration yields: products.map((element, i) => <StudioComposition key={i} spec={spec} context={element} />).

## Slot data

### The slot's keys don't appear under Component Props

Check these in order, the first two are by far the most common:

1.  **The wrong node is selected.** The Component Default Data source is scoped to the selection. Select a component **inside** the slot, not the component that owns it.
2.  **The slot value isn't wrapped.** {ctaSlot} renders fine but carries nothing. It has to be <Slot data={{ … }}>{ctaSlot}</Slot>.
3.  **The children were rebuilt.** The renderer stamps slot identity onto the element it passes for the slot prop, and <Slot> reads it to report the keys. Children.map + cloneElement, or re-wrapping each child in your own element, drops it: the render-time merge still works, so the value renders but the picker stays empty. Pass the slot prop straight through as children.
4.  **The canvas is running an older bundle.** Rebuild the canvas app and reload Studio.
5.  **The prop isn't a slot.** Confirm registerComponent declares it as { type: "slot" }, see [Component schema](/docs/studio/component-schema-prop-types).

### "[Composable Studio SDK] Slot: failed to report slot data"

The editor report failed. Rendering is unaffected. Only the picker's view of the keys is.

**Fix:** reload the canvas. If it repeats, check data for values that can't be serialized (functions, class instances). The report is serialized before it's sent.

### A bound slot key renders nothing

The binding resolved, but the value is empty.

**Fix:**

1.  Check the owner actually has a value at render time: <Slot data={{ destination: ctaHref }}> carries undefined when ctaHref is unbound or empty on that instance.
2.  Check the key still exists. Renaming a key breaks every binding already made against it, silently. Add a new key instead of renaming a live one.
3.  Confirm the binding uses **Component Default Data**, then **Component Props**, not a CMS or external-data source.

### The wrong value wins for a key

A slot's data shallow-merges over component\_props inherited from further up, and the nearest slot wins. A key that exists both globally (the data prop on <StudioComponent />) and on the slot resolves to the slot's value inside that slot. Nested slots stack, deepest first.

**Fix:** rename one of them, or rely on the override deliberately. See [Slot data, Nearest slot wins](/docs/studio/slot-data#nearest-slot-wins).

## Still stuck?

-   [StudioComposition](/docs/studio/studio-composition-component) and [Slot data](/docs/studio/slot-data): the feature guides, each with a pitfalls table
-   [<StudioComposition /> reference](/docs/studio/studio-composition-props-reference), [<Slot> reference](/docs/studio/slot-props-reference)
-   [Troubleshoot setup](/docs/studio/troubleshoot-common-studio-issues): canvas, Live Preview, content fetch, SDK init order
