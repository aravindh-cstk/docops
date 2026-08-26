---
title: "SDK API Reference"
description: "Complete public API surface of @contentstack/studio-react, covering hooks, components, registration functions, design tokens, and exported types."
url: /studio/sdk-api-reference
uid: bltce78f5b33bf7d4c3
---

# SDK API Reference

## SDK API Reference

Complete public surface of @contentstack/studio-react. All signatures are taken verbatim from dist/index.d.ts.

## Quick Map: "I Want to…"

| Goal | Reach for |
| --- | --- |
| Render a Studio template on a route | StudioComponent + useCompositionData (CSR) or sdk.fetchCompositionData (SSR) |
| Render the Studio canvas iframe target | StudioCanvas (client-only on SSR, see setup-section-preview) |
| Render multiple compositions at once on the same page | useMultipleCompositions |
| Render a composition WITHOUT canvas-editor wiring (visitor-only) | PreviewRenderer |
| Let editors create compositions from a 404 inside Visual Editor | VisualEditorCreateCompositionButton |
| Register one component in Studio | registerComponent |
| Register many components, idempotently | registerComponents(\[…\]) |
| Lazy-load a heavy component | registerLazyComponent |
| Tell the Design panel about your tokens | registerDesignTokens |
| Register named design classes | registerDesignClasses |
| Register responsive breakpoints | registerBreakpoints |
| Register a JSON RTE renderer | registerJSONRTE |
| Render selected-state UI inside a registered component | useSelected |
| React to authors hiding your component | useHiddenElementNotification |
| Discover the actual --token-… CSS variable names at runtime | getDesignTokenCssVariables |
| Read the registered tokens (structured map) | getDesignTokens |
| Type your component's props with SDK-injected attributes (wrap: false) | StudioAttributes |

## Hooks

### useCompositionData

Fetches a composition spec and the data required to render it. Supports lookup by compositionUid, url, or both.

```
declare function useCompositionData(
  compositionQuery: CompositionQueryInput,
  options?: CompositionQueryOptions,
): CompositionDataResult;
```

CompositionDataResult is a discriminated union of LoadingState | ErrorState | SuccessState, each exposing specOptions, isLoading, error, refetchSpec, and refetchData.

```
const { specOptions, isLoading, error } = useCompositionData({ url: "/about" });
```

### useMultipleCompositions

Render **N compositions in one pass** with shared component loading and per-composition deduplication. Use this when a page is composed of multiple regions, each backed by its own composition (dashboards, landings with mixed-source regions, etc.). Avoids per-component duplicate fetches.

```
declare function useMultipleCompositions(
  options: UseMultipleCompositionsOptions,
): UseMultipleCompositionsResult;
```

UseMultipleCompositionsOptions takes an array of composition queries; the result is keyed back to each query so you can fan-out the specOptions to multiple <StudioComponent /> instances in render.

### Re-exported hooks

From @contentstack/studio-react-components/hooks:

-   useHiddenElementNotification: surfaces a notification when an authored element is hidden in the current breakpoint.
-   useSelected: returns whether the current node is selected in the builder.

## Components

### StudioComponent

Main renderer with full editing capabilities. Mounts on template preview routes; picks the right inner rendering path automatically based on mode (edit, show-edit-button, plain preview).

```
declare function StudioComponent(props: {
  specOptions: StudioComponentSpecOptions;       // required — what to render
  data?: ComposableStudioData["component_props"]; // optional — runtime Component Default Data, bindable from the canvas
}): JSX.Element;
```

```
<StudioComponent specOptions={specOptions} data={componentData} />
```

The data prop is the canonical hook for injecting **external data into a composition**: anything not in Contentstack (live pricing, geolocation, A/B variant, feature flags, weather, etc.). Whatever object you pass here becomes bindable inside the canvas through the Data Picker root "Component Default Data". See [Component Default Data → runtime data injection](/docs/studio/set-component-default-data#part-2--runtime-component-default-data-the-data-prop-on-studiocomponent-) for the full pattern with worked examples.

### PreviewRenderer

Internal-use renderer that accepts a raw StudioSpec. **You should not need this**: <StudioComponent specOptions={...} /> is the single user-facing renderer for both visitor and in-Studio routes. PreviewRenderer is exported by the SDK for advanced cases (custom batch-loading flows building their own spec pipeline). All canonical patterns in this doc set use StudioComponent.

```
declare function PreviewRenderer(props: {
  spec: Omit<StudioSpec, "compositionEntry"> & { compositionEntry?: StudioSpec["compositionEntry"] };
  data?: ComposableStudioData["component_props"];
}): JSX.Element;
```

### StudioCanvas

Zero-config canvas. Place on a wildcard route; it discovers the composition being edited and fetches data automatically.

```
declare const StudioCanvas: () => JSX.Element | null;
```

```
<Route path="*" element={<StudioCanvas />} />
```

### VisualEditorCreateCompositionButton

Render-props button shown on 404 routes inside the Visual Builder to create a new linked composition.

```
declare function VisualEditorCreateCompositionButton(
  props: VisualEditorCreateCompositionButtonProps,
): React.ReactElement | null;
```

Render-props receive { isInsideVB, shouldShow, handleCreateComposition, isLoading }.

## Registration

### registerComponent

Register a single component.

```
declare function registerComponent(
  componentConfig: Parameters<ComponentRegistry["registerComponents"]>[0][0],
): void;
```

### registerLazyComponent

Register a component whose implementation is lazily loaded.

```
declare function registerLazyComponent(
  config: Omit<Parameters<ComponentRegistry["registerComponents"]>[0][0], "component">,
  loader: () => Promise<(props?: any) => React.ReactNode>,
): void;
```

### registerComponents / registerPublicComponents

Bulk-register components. registerComponents is the public alias.

```
declare const registerComponents: typeof registerPublicComponents;
```

### registerBreakpoints

Register responsive breakpoints. The first entry must be the default breakpoint and carries no media query.

```
declare const registerBreakpoints: (breakpoints: BreakpointInput) => void;
```

## Design

### registerDesignTokens

Register colour / typography / spacing tokens. Returns a fully-typed DesignTokens object merged with defaults (unless allowDefaultDesignTokens: false).

```
declare function registerDesignTokens<T, O extends Partial<DesignTokensOptionsInput>>(
  designTokens: T,
  options?: O,
): DesignTokens<...>;
```

### registerDesignClasses

Register named design classes. Use as const satisfies DesignClassesInput\[\] for best type inference.

```
declare function registerDesignClasses<C>(designClasses: C): DesignClassesNames<C>;
```

### getDesignTokens / getDefaultDesignTokens

```
declare function getDesignTokens(): DesignTokens;
declare const getDefaultDesignTokens: () => any;
```

### getDesignTokenCssVariables

Returns the actual \--token-… CSS variable map for the registered token set, the source of truth for runtime variable names (which use \_ separators and are not derivable by hand). Useful when you need to mirror Studio's tokens into your own design system's \--brand-\* variables at app shell.

```
declare function getDesignTokenCssVariables(): CssVariablesToValue;
// CssVariablesToValue ≈ Record<`--token-${string}`, string>
```

Example:

```
const map = getDesignTokenCssVariables();
// e.g. { "--token-background_style_solid_blue": "#1e3a8a", ... }

// Mirror into your own design-system variables on :root
for (const [tokenVar, value] of Object.entries(map)) {
  // pick the tokens you want to expose, alias them
  if (tokenVar === "--token-background_style_solid_blue") {
    document.documentElement.style.setProperty("--brand-primary", value);
  }
}
```

See [Design tokens](/docs/studio/configure-design-tokens-in-studio#css-variables-under-the-hood) for why hand-writing var(--token-…) references is discouraged.

### Re-exports

-   BUILT\_IN\_COMPONENTS, DesignTokens, DesignTokensInput, RegisterComponentOptionsInput: from @contentstack/studio-registry.
-   extractStyles, studioSdk: from @contentstack/studio-core.
-   registerJSONRTE: from @contentstack/studio-client.

## Types

Exported type-only:

-   Cslptag: { "data-cslp": string } | undefined. Attribute used for live preview tagging.
-   StudioAttributes: { studioAttributes?: BuilderNodeInternalAttributes }. Attributes passed to a component when wrap: false; only populated inside the builder.
-   PreviewRendererProps
-   VisualEditorCreateCompositionButtonProps, VisualEditorCreateCompositionButtonRenderProps

Re-exported types: CompositionQueryForSSR, LightConfig, SearchQueryInput, StudioComponentFetchOptions, StudioComponentSpecOptions, StudioSpec, UserConfig, Node, CompositionQuery.

## See Also

-   [Composition overview](/docs/studio/composition-concepts): what useCompositionData returns and how to render it.
-   [Canvas URL](/docs/studio/canvas-url): pairing StudioCanvas with a wildcard route.
-   [Registering components](/docs/studio/register-components): using registerComponent and registerComponents.
-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): registerDesignTokens and registerDesignClasses in context.
-   [Component default data](/docs/studio/set-component-default-data): populating the data prop on StudioComponent.
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration): when to prefer registerLazyComponent.
