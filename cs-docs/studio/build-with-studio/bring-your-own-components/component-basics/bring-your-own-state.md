---
title: "Bring Your Own State (BYOS)"
description: "Share state across Studio components with declared state variables, plug in Redux/Zustand or web storage via getState/setState, and let authors wire buttons to your app's functions with action props."
url: /studio/bring-your-own-state
uid: blt23bf2b7b5a4bbacc
---

# Bring Your Own State (BYOS)

## Bring Your Own State (BYOS)

> **Availability: check the export, not the version number.** Runtime-verified: public npm's @contentstack/studio-react **1.7.0 is the latest tag and does not contain BYOS** (no useStudioState in its dist), while the SDK monorepo reports the same 1.7.0 with the feature. Same number, different contents, so a version comparison will mislead you. Check for the symbol:
> 
> ```
> npm ls @contentstack/studio-react --depth=0
> grep -rq "useStudioState" node_modules/@contentstack/studio-react/dist \
>   && echo "BYOS present" || echo "BYOS ABSENT"
> ```
> 
> (node -e "require('@contentstack/studio-react/package.json')" fails with ERR\_PACKAGE\_PATH\_NOT\_EXPORTED, the exports map doesn't expose it.)
> 
> **BYOS ABSENT** means this chapter doesn't apply to your install: as of this writing no published release ships BYOS. The APIs below are accurate against the SDK source and verified by execution, but they need a build that includes them.

> **Two halves must both be present, and they ship separately.**
> 
> | Half | What it provides | Status |
> | --- | --- | --- |
> | **SDK (your app)** | useStudioState, studioState, registerStudioFunctions, the action prop type | Not in any published @contentstack/studio-react release, verified against 1.7.0 (latest) |
> | **Studio editor** | Declared variables listed in the Data Picker, the action prop's picker in the right panel | Deployed on **dev / non-prod** environments, **not yet on prod** (per the Studio team) |
> 
> So on a prod stack BYOS is unavailable even with a correct SDK build: the authoring half isn't there. On a dev environment both halves exist, which is where the author-facing behaviour can be exercised. The runtime contract below is verified by execution in both cases, the gate is availability, not correctness.

Registered components give Studio your markup. BYOS gives it your behaviour: a shared state store authors can bind to, and named functions authors can wire to buttons, without you hardcoding either.

Three pieces, each usable independently:

| Piece | What it returns | API |
| --- | --- | --- |
| **State variables** | Values shared across components, sections and templates, and bindable by authors in the Data Picker | state.variables, registerComponentStateVariable |
| **Storage** | Where those values live: session, local, or your own store (Redux, Zustand, signals, a plain object) | storage, getState, setState, subscribe |
| **Functions + action props** | Business logic authors invoke by name from a button | registerStudioFunctions, type: "action" |

Without BYOS, anything interactive has to be a self-contained registered component with its behaviour baked in. Authors can re-bind its props and nothing else. With BYOS, a "Add to cart" button an author dropped can call your cart:add and every other component reading cart:count updates.

## When NOT to use BYOS

BYOS is for values that are **shared and mutable**. These four look similar and aren't:

| What you have | Use instead |
| --- | --- |
| Read-only data fetched once for a page (pricing, geo, inventory) | the data prop on <StudioComponent />, see [Default data](/docs/studio/set-component-default-data) |
| One prop that varies per template instance | an exposed section prop |
| A branch on user segment or audience | a variant alias (Personalize) |
| A per-prop starting value | defaultValue in the prop schema |

Reaching for BYOS where one of those fits adds a store, a declaration and a subscription for no author benefit.

## 1\. Declare state variables

**Only declared variables are author-bindable.** Undeclared keys still work in code via useStudioState("anything"), but they never appear in the Data Picker: they're a code-only (ad-hoc) tier.

Two declaration tiers:

```
// Tier "init" — at SDK init
export const sdk = studioSdk.init({
  stackSdk: stack,
  contentTypeUid: "compositions",
  state: {
    variables: {
      "cart:count":  { type: "number",  defaultValue: 0 },
      "cart:filter": { type: "string",  defaultValue: "" },
      "ui:theme":    { type: "choice",  defaultValue: "light", options: ["light", "dark"] },
    },
  },
});
```

```
// Tier "component" — at component module scope, next to the component
import { registerComponentStateVariable, useStudioState } from "@contentstack/studio-react";

registerComponentStateVariable("cart:filter", { type: "string", defaultValue: "all" });

export function CartFilter() {
  const [filter, setFilter] = useStudioState<string>("cart:filter");
  return <input value={filter ?? ""} onChange={(e) => setFilter(e.target.value)} />;
}
```

**Precedence (this is deliberate):**

1.  A **component\-tier** declaration **beats** the same key declared at **init**, deterministically, regardless of module evaluation order. The init declaration is used only for keys no component declared.
2.  Same-tier re-declaration of a key keeps the **first** definition.
3.  A runtime set value always beats any declared default.

So a component can own the shape of its own key without coordinating with the init file, and the result doesn't depend on bundler ordering.

**Types** mirror the bindable prop types so a variable can be offered in the picker: string · number · boolean · choice · array · object. choice requires options.

**Which tier?** One test determines it: **if deleting the component should delete the key, declare it at component tier.** Otherwise the application owns it, and it belongs at init. A cart count, theme or locale is global. A component's own active tab, filter or expanded row is not.

## 2\. Pick where state lives

```
state: {
  storage: "session",              // "session" | "local" | "custom"
  storageKey: "cs-studio:state",   // default; built-in stores only
  variables: { /* … */ },
}
```

| storage | Where values live | Needs |
| --- | --- | --- |
| "session" | sessionStorage, survives reloads and hard navigations in the tab, cleared when it closes | nothing |
| "local" | localStorage, also survives across visits | nothing |
| "custom" | **Your** store: Redux, Zustand, signals, a plain object | getState + setState |

Defaults, in order: omitting state entirely gives the SDK's internal in-memory Map (fully backward compatible). Providing state without storage gives the built-in **session** store, unless you passed the custom functions, in which case **custom**.

### storage: "custom": the get/set contract

```
import { store } from "@/store";           // e.g. a Redux store

state: {
  storage: "custom",
  getState: (key) => store.getState().studio[key],
  setState: (key, value) => store.dispatch({ type: "studio/set", key, value }),

  // OPTIONAL but usually what you want: let mutations that happen OUTSIDE
  // Studio propagate INTO Studio-bound components. Returns an unsubscribe.
  subscribe: (key, listener) => store.subscribe(listener),

  variables: { "cart:count": { type: "number", defaultValue: 0 } },
}
```

getState and setState are **required** for custom: the store is yours, so the SDK cannot guess how to read or write it.

**Skip subscribe and the flow is one-way.** Studio-initiated writes work, but a dispatch from elsewhere in your app won't re-render Studio-bound components: they only re-read when the SDK's own store notifies. If any code outside Studio mutates these keys, wire subscribe.

> **Returning a fresh object from getState is safe.** The hook caches per key and only re-reads when its version changes, so a getState that builds a new object or array per call won't trip React's "getSnapshot should be cached" warning or loop.

## 3\. Read and write

**In React**: useStudioState returns a tuple, like useState:

```
const [count, setCount] = useStudioState<number>("cart:count");
setCount(5);                        // direct value
setCount((prev) => (prev ?? 0) + 1); // functional update
```

**SSR-safe:** on the server the hook renders the declared default (or your server-appropriate getState value). Subscriptions attach only on the client.

**Outside React**: event handlers, analytics glue, business logic. Same store instance the hook and author bindings use, so there's one source of truth:

```
import { studioState } from "@contentstack/studio-react";

studioState.set("cart:count", (prev) => (prev ?? 0) + 1);
const count = studioState.get<number>("cart:count");
const stop  = studioState.subscribe("cart:count", () => console.log("changed"));
studioState.reset();   // clear everything — e.g. on a client-side route change
```

getStudioStateSnapshot() returns \[{ key, value }\] for every **declared** variable with its current value: this is exactly what the Data Picker lists under Component Props.

## Sharing a value between components

Two components share a value by using the **same key string**. Nothing else is required: no props, no context, no common parent:

```
// SETS — dropped in a Hero Section
export function AddToCartButton() {
  const [, setCount] = useStudioState<number>("cart:count");
  return <button onClick={() => setCount((p) => (p ?? 0) + 1)}>Add to cart</button>;
}
```

```
// GETS — dropped in the Header Section
export function CartBadge() {
  const [count] = useStudioState<number>("cart:count");
  return <span>Cart ({count ?? 0})</span>;
}
```

The key is declared **once**, anywhere, not per component.

**Why this matters in Studio specifically.** Normally you would lift shared state to a common React parent. Here you cannot: the author decides which Sections exist, in what order, and on which templates, so these two components may sit in different Sections, on different templates, or only one may be present. There is no common parent you control.

Because the store sits outside the React tree:

-   Mount order doesn't matter: whichever component mounts later reads the current value
-   Either component may be absent. The other still works
-   An author can move either one anywhere without breaking the link

### Two ways this fails without an error

**A key typo.** "cart:count" and "cart:Count" are two different values and nothing warns you: one component updates while the other never moves. Export the keys instead of typing literals:

```
// lib/state-keys.ts
export const CART_COUNT = "cart:count";
```

**A namespace collision.** The registry is flat, so "count" from a cart and "count" from a carousel are the same value. Prefix every key by feature: cart:count, carousel:index.

## 4\. Functions + action props: let authors wire buttons to your logic

Register named functions once. ctx is { get, set, subscribe } against the same store:

```
import { registerStudioFunctions } from "@contentstack/studio-react";

registerStudioFunctions({
  "cart:add": (ctx, args) => {
    ctx.set("cart:count", (prev) => (prev ?? 0) + 1);
    ctx.set("cart:last_added", args?.sku ?? "");
  },
  "coupon:apply": (ctx, args) => {
    const discounts: Record<string, number> = { SAVE10: 10, SAVE20: 20 };
    ctx.set("checkout:discount", discounts[args?.code] ?? 0);
  },
});
```

Registrations **merge**, so you can call this once per feature module. Re-registering a name overwrites it and warns in development, which is what makes HMR usable.

Then expose an **action prop** on a component so an author picks which function it calls:

```
registerComponent(AddToCartButton, {
  name: "Add to cart",
  props: {
    label:      { type: "string", defaultValue: "Add to cart" },
    onCtaClick: { type: "action", displayName: "CTA Click Function" },
  },
});
```

The author binds onCtaClick to cart:add. The SDK wraps it so your component just calls the prop:

```
function AddToCartButton({ label, onCtaClick }) {
  return <button onClick={() => onCtaClick?.({ sku: "X1" })}>{label}</button>;
}
```

Extra positional arguments are forwarded verbatim, so a callback invoked as onSelect(id, meta) reaches the function without dropping anything. To call a function from your own code instead of a prop, use callStudioFunction("cart:add", { sku: "X1" }).

> **action is a real prop type.** It sits alongside string, number, boolean, choice, href, imageurl, datestring, array, object, slot, json\_rte and any. Leave it out of your registrations and authors have no way to attach behaviour: every interactive component stays a black box with its logic hardcoded.

## 5\. SSR: declare on the client before hydration

The trap: your server init file declares variables at module scope, but apps typically run the **client** init from a lazily-imported module, which evaluates **after** hydration. State-bound nodes then hydrate against keys that aren't declared yet and mismatch the server HTML.

Fix: statically import a tiny module that declares at module scope, so declarations exist before hydration.

```
// lib/register-state-variables.ts — imported STATICALLY by _app / root layout
import { registerGlobalStateVariables } from "@contentstack/studio-react";
import { studioStateConfig } from "./studio-state-config";

registerGlobalStateVariables(studioStateConfig.variables ?? {});
```

registerGlobalStateVariables declares at the **init** tier, so component-level declarations still override it.

## Verify it works

1.  Open the Data Picker on a component prop. Every **declared** variable appears under Component Props with its current value. If one is missing, it was never declared.
2.  Bind it, then change the value from a second component. The first re-renders.
3.  **For storage: "custom":** mutate the key from outside Studio (a dispatch in the console) and confirm the bound component updates. If it doesn't, subscribe is missing.
4.  **For an action prop:** bind it, click the element in the canvas, confirm the registered function ran.

getStudioStateSnapshot() returns \[{ key, value }\] for every declared variable, exactly what the picker lists, which makes it the quickest answer to "why isn't my variable there?".

## A cart, end to end

Every piece of the chapter in one working shape.

```
// lib/state-keys.ts — export keys, never type the literals
export const CART_COUNT  = "cart:count";
export const CART_FILTER = "cart:filter";
export const UI_THEME    = "ui:theme";
```

```
// lib/contentstack.ts — global tier: keys the application owns
import { studioSdk } from "@contentstack/studio-react";
import { CART_COUNT, UI_THEME } from "./state-keys";

export const sdk = studioSdk.init({
  stackSdk: stack,
  contentTypeUid: "compositions",
  state: {
    storage: "session",
    variables: {
      [CART_COUNT]: { type: "number", defaultValue: 0 },
      [UI_THEME]:   { type: "choice", defaultValue: "light", options: ["light", "dark"] },
    },
  },
});
```

```
// lib/studio-functions.ts — behaviour an author can choose from
import { registerStudioFunctions } from "@contentstack/studio-react";
import { CART_COUNT } from "./state-keys";

registerStudioFunctions({
  "cart:add": (ctx, args) => {
    ctx.set(CART_COUNT, (prev) => (prev ?? 0) + 1);
    ctx.set("cart:last_added", args?.sku ?? "");
  },
});
```

```
// components/CartBadge.tsx — reads a global key
import { useStudioState } from "@contentstack/studio-react";
import { CART_COUNT } from "@/lib/state-keys";

export function CartBadge() {
  const [count] = useStudioState<number>(CART_COUNT);
  return <span className="badge">{count ?? 0}</span>;
}
```

```
// components/CartFilter.tsx — owns its own key, so declares it itself
import { registerComponentStateVariable, useStudioState } from "@contentstack/studio-react";
import { CART_FILTER } from "@/lib/state-keys";

registerComponentStateVariable(CART_FILTER, { type: "string", defaultValue: "all" });

export function CartFilter() {
  const [filter, setFilter] = useStudioState<string>(CART_FILTER);
  return (
    <select value={filter ?? "all"} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="sale">On sale</option>
    </select>
  );
}
```

```
// components/CtaButton.tsx — the author picks what it does
import { registerComponent } from "@contentstack/studio-react";

function CtaButton({ label, onCtaClick }: { label?: string; onCtaClick?: (a?: unknown) => void }) {
  return <button onClick={() => onCtaClick?.({ sku: "ABC-123" })}>{label}</button>;
}

registerComponent(CtaButton, {
  type: "cta-button",
  displayName: "CTA Button",
  props: {
    label:      { type: "string", defaultValue: "Add to cart" },
    onCtaClick: { type: "action", displayName: "CTA Click Function" },
  },
});
```

**The result:** an author drops CtaButton into any Section, binds onCtaClick to cart:add from a dropdown, and CartBadge (sitting in the Header, a different Section entirely) increments. Wiring those two together took no code change.

## Common pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| Expecting an undeclared key to appear in the Data Picker | Only **declared** variables are author-bindable. Ad-hoc keys are code-only by design | Declare it: state.variables at init, or registerComponentStateVariable at module scope |
| storage: "custom" without getState / setState | The SDK can't read or write a store it doesn't know | Both are required for custom. Use session/local if you don't need your own store |
| Custom store, no subscribe | One-way: Studio writes land, but a dispatch elsewhere in the app never re-renders Studio-bound components | Pass subscribe(key, listener) returning an unsubscribe |
| Client init lazily imported, state-bound nodes hydrate wrong | Client declarations evaluate after hydration, so nodes hydrate against undeclared keys | Statically import a module calling registerGlobalStateVariables, see section 5 |
| Assuming init state.variables wins over a component declaration | Component tier deliberately **overrides** init, regardless of module order | Treat the component declaration as authoritative for that key. Use init for keys no component owns |
| No action props on interactive components | Authors can't wire behaviour, so interactivity stays hardcoded and the component is a black box | Add type: "action" props and register the functions they call |
| Re-registering a function name in production | Silently overwrites. The dev warning doesn't fire outside development | Keep names unique per feature. Treat the registry as a namespace (cart:add, coupon:apply) |
| Calling registerComponentStateVariable inside the component body | It runs after render, so the declaration never lands and the key stays invisible to authors | Call it at **module scope**, beside the component |
| A key typo: cart:Count vs cart:count | Two silently separate values. One component updates, the other never moves, and nothing warns | Export key constants and import them |
| Unprefixed key names (count, filter) | The registry is flat, so the same bare name collides across features | Namespace every key by feature |
| count + 1 on the first render | The value is undefined until the declared default resolves | Guard the read (count ?? 0) and prefer setCount(prev => …) |
| Gating on the package version to check availability | Published 1.7.0 and the monorepo's 1.7.0 differ in contents | Grep dist for the exported symbol, see the availability note at the top |
| require("@contentstack/studio-react/package.json") | The exports map doesn't expose it, so it throws ERR\_PACKAGE\_PATH\_NOT\_EXPORTED | Use npm ls @contentstack/studio-react --depth=0 |

## See also

-   [Registering components](/docs/studio/register-components): the registration APIs action props live in
-   [Component schema: prop types](/docs/studio/component-schema-prop-types): every prop type, including action
-   [Default data](/docs/studio/set-component-default-data): the data prop, for external data that isn't shared state
-   Skill: [wire-studio-state](https://studio-documentation.contentstackapps.com/prompts/wire-studio-state.html), the guided path through this chapter
