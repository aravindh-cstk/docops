---
title: "Brownfield Migration Playbook"
description: "You have a working site. Its list-shaped sections (product carousels, card grids, related-post shelves) render through production components with."
url: /studio/brownfield-migration-playbook
---

# Brownfield Migration Playbook

## Brownfield migration playbook: bringing list-shaped Sections into Studio

You have a working site. Its list-shaped sections (product carousels, card grids, related-post shelves) render through production components with array/object interfaces:

```
<SolutionsCarousel solutions={related} isLogoBgWhite={false} />
<ResponsiveCardGrid items={caseStudies} columns={3} />
```

You want authors to bind those lists to CMS collections without a developer. This is the codified process for doing it without shipping visual drift, the failure mode where the composed page looks 80% right and marketing quietly rejects the migration.

## Pick the right path first: array-prop vs adapter

Studio has two ways to render a CMS collection through a production wrapper. Decide before writing anything:

-   **Path A: native array prop.** If the production wrapper already accepts an array prop of full entry-like objects, and the list is a single **Reference field** (one CT, no per-item polymorphism, no template-author child-swap), register the wrapper with type: "array" and populate data\_sources.resolvedReferences. The SDK's data-binder delivers full resolved entries. The wrapper does its own .map(). Simpler and native. See [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html), When to skip the Repeater entirely.
-   **Path B: compatibility adapter.** Use [adapt-collection-component](https://studio-documentation.contentstackapps.com/prompts/adapt-collection-component.html) when the leaf shape doesn't reduce to array items (per-item variant flags, Modular Block polymorphism, template-author child-swap via a Section Slot).

If Path A works, use it. You skip most of the phases below. This playbook covers Path B for the cases Path A can't handle.

Companion resources:

-   **[adapt-collection-component](https://studio-documentation.contentstackapps.com/prompts/adapt-collection-component.html)**: the per-Section skill. Run it once per production wrapper.
-   **[verify-visual-parity](https://studio-documentation.contentstackapps.com/prompts/verify-visual-parity.html)**: the browser-driven parity check. Run it after each Section lands.
-   **[register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html)**, Call-site literal sweep and, Tolerant image signatures, the two acceptance items that prevent the two most common bugs.
-   **[migrate-from-handcoded.md](/docs/studio/migrating-hand-coded-pages-to-studio)**: the program around this playbook (order of routes, when to swap). This doc is the technique.

---

## Why brownfield migration drifts

The configuration that makes a production page look right lives in **call-site code that Studio adoption deletes**. Every hand-coded route contains literals the production wrapper depends on:

```
<SolutionsCarousel
  solutions={related}
  variant="compact"          // ← literal call-site prop
  isLogoBgWhite={false}      // ← literal call-site prop
  isInteractive={true}       // ← literal call-site prop, default false
/>
```

When authors bind solutions in Studio, the composition captures the data but not any of the literals. Unless every literal is deliberately carried into the adapter's registration as a defaultValue, the composed page inherits framework defaults instead of production defaults: the composed carousel animates on hover where the live one doesn't, has white logo backgrounds where the live one has grey, or ships in the wrong variant entirely.

Add to that: production wrappers routinely massage data before passing to leaves (copy = short\_description ?? description, image = entry.tile\_data?.thumb ?? entry.image, subtitle = "Related to " + entry.title). Bindings are bare field → prop paths, so any such data reshaping has nowhere to live unless the migration explicitly routes it.

The playbook is these two failure modes, systematized.

---

## The five phases

### Phase 1: Inventory

For each list-shaped Section you plan to migrate:

-   Grep every JSX use of the production wrapper. Record every literal prop set at every call site, even the ones that look defaulty. rg -tn tsx -o "<SolutionsCarousel\[^>\]\*>" finds them.
-   Read the wrapper's TypeScript interface. Distinguish **scalar props** (bind directly) from **array/object props** (need the adapter pattern) from **children** (goes into a slot).
-   Read the leaf card's TypeScript interface. Every scalar prop on the leaf becomes a scalar prop on the leaf adapter's registration.
-   Grep any data massage between call site and wrapper. Record what fields are rerouted, composed, or fallen-back. The "where does call-site logic go?" decisions come from this list.

Output: one document per Section with wrapper name, leaf name, list of literal props at every call site, and list of data-massage rules.

### Phase 2: Register with code-derived defaults

Register the leaf adapter first, then the wrapper. Two mandatory contracts:

-   **Call-site literal sweep**: every literal from the inventory becomes a defaultValue on the corresponding registered prop, or a named preset. This is not optional. Missing it is the single most common cause of pages "looking similar but off."
-   **Tolerant image signatures**: every imageurl prop's TypeScript type accepts string | { url?: string } | null | undefined, and the component internally coerces. Studio's picker binds sometimes the object, sometimes .url, and either shape must render.

Where possible, generate the registration from the component's TypeScript interface (upcoming CLI feature) so no prop is silently omitted. A hand-written registration that misses one boolean is the failure mode from the field.

The imageUrl() helper (a two-line function) is worth adopting as a blessed snippet:

```
export function imageUrl(x: string | { url?: string } | null | undefined): string | undefined {
  if (!x) return undefined;
  return typeof x === "string" ? x : x.url;
}
```

### Phase 3: Decompose into wrapper + Repeater + leaf

Follow [adapt-collection-component](https://studio-documentation.contentstackapps.com/prompts/adapt-collection-component.html) from initial adaptation through all three registrations. Three registrations per production wrapper:

1.  **Leaf adapter**: thin wrapper that imports the production leaf card verbatim. Never reimplement it. Scalars in, real card out.
2.  **Wrapper adapter**: the List Section wrapper. Registered with a slot prop for the iteration region + scalar props for header/CTA. CSS transcribed line-by-line from production, with a // KEEP-IN-SYNC WITH <ProductionWrapper> comment on both files.
3.  **Repeater**: dropped into the wrapper's slot at template-authoring time, bound to the multi-value field. Not a registration.

Data massage from Phase 1 routes as follows:

| Call-site pattern | Home in Studio |
| --- | --- |
| Prop reroute (copy = short\_description ?? description) | Inside the leaf adapter |
| String composition ("Related to " + entry.title) | Static text on the Section, or a Section prop set per-composition |
| Per-CT fallbacks (entry.tile\_data?.thumb ?? entry.image) | Per-branch bindings inside a Condition Block |
| Boolean flag literals | defaultValue on the adapter's corresponding prop |
| Computed values (URL builders, formatters) | In the host app before <StudioComponent data={…} />, OR in the adapter body |

### Phase 4: Verify Section-by-Section, not once at the end

Run [verify-visual-parity](https://studio-documentation.contentstackapps.com/prompts/verify-visual-parity.html) against the production URL after each Section lands. Screenshot both at three viewports (390 / 768 / 1280), classify every drift into one of four root-cause buckets:

-   **A**: unbound prop rendering a defaultValue meant as palette preview.
-   **B**: boolean flag the live call site set, missing from adapter registration.
-   **C**: prop-routing mismatch between production and adapter.
-   **D**: layout-wrapper CSS drift (heading class, item basis, gap).

Fix at the source (adapter body, registration, wrapper CSS). Never patch the composition. Repeat until two consecutive Sections come back drift-free.

### Phase 5: Ship the route

Only after every Section on the route passes visual parity: swap the route via [migrate-page-to-studio](https://studio-documentation.contentstackapps.com/prompts/migrate-page-to-studio.html). Verify once more. Move to the next route.

---

## What you cannot fix in the playbook

Some drift classes cannot be closed by adapter work: they're product gaps. Note them explicitly so the migration doesn't stall trying to hack around them:

-   **JS-library carousels inside a Repeater**: Embla / Swiper measure children. Studio's Repeater wraps each iteration in display:contents with zero measured width. Use CSS-only carousels (scroll-snap + flex-basis + overflow-x), OR skip the Repeater entirely via Path A (native array prop) and let the wrapper's own JS carousel measure real children.
-   **Computed value derivations beyond the picker's expressiveness**: Condition Block branches with different bindings cover per-CT fallbacks. Anything truly runtime-computed lives in the adapter body or the host app before <StudioComponent data={…} />.

Don't drift into hand-hacking these. Ship what works, disclose what doesn't.

---

## Field notes

-   **Same-repo migration is a luxury.** This playbook converged only because the old code sat in the same repo to diff against. Customers whose site was built by a departed agency won't have that safety net. The call-site scanner and per-Section parity view are worth more in their case than they look from inside the building.
-   **Leaves first, wrappers second.** Reuse works at the leaf level (scalar props all the way). Drift only ever appears at the wrapper. So do the leaf adapters first (they're mechanical, high-confidence work) and get the wrapper adapter into a state where visual-parity has something to compare against before starting Phase 4.
-   **KEEP-IN-SYNC comments are a temporary contract.** They document that two files will drift unless coordinated. The permanent fix is the product gap: bindable collection props on the real wrapper, so the parallel adapter goes away entirely. Until then, the comment is the migration's version-control gate.

## See also

-   [adapt-collection-component](https://studio-documentation.contentstackapps.com/prompts/adapt-collection-component.html): the per-Section skill this playbook wraps.
-   [verify-visual-parity](https://studio-documentation.contentstackapps.com/prompts/verify-visual-parity.html): the parity check for Phase 4.
-   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html), Call-site literal sweep: Phase 2 mandatory contract.
-   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html), Tolerant image signatures: Phase 2 mandatory contract.
-   [migrate-from-handcoded.md](/docs/studio/migrating-hand-coded-pages-to-studio): the program around this playbook (order of routes, when to swap).
-   [use-condition-block](https://studio-documentation.contentstackapps.com/prompts/use-condition-block.html): required whenever a heterogeneous field powers the Repeater.
