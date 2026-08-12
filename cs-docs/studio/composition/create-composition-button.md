---
title: "Create Composition Button"
description: "API reference for the VisualEditorCreateCompositionButton React component, including props, render-prop pattern, and Visual Builder integration."
url: /studio/create-composition-button
---

# Create Composition Button

## Create Composition Button

VisualEditorCreateCompositionButton is a React component from @contentstack/studio-react that lets a host application surface a "create composition" call-to-action when a page has no composition yet. It is useful when an author lands on a 404 (or otherwise empty) route from inside the Visual Builder and needs to spin up a new linked composition without leaving the preview frame.

## Purpose

When a route is opened inside the Visual Builder iframe and the composition behind it does not yet exist, the front-end normally has nothing to render. Instead of showing a bare 404, you can mount this component to:

-   Detect that the page is being viewed inside the Visual Builder frame.
-   Offer a button (or any custom UI you render) that asks Studio to create a composition linked to the current route.
-   Coordinate the create flow with Studio via postMessage, so the new composition opens straight into editing.

Outside the Visual Builder frame the component renders nothing by default, so it is safe to leave in production templates.

## Placement

Mount it wherever your app renders the "no composition / 404 / not found" state for a route that _could_ host a composition, typically inside your catch-all route, your CMS page renderer's empty branch, or a dedicated NotFound component. It does not need to wrap your tree; it is a leaf component.

It pairs naturally with useCompositionData, when the hook returns an error or empty result for a Visual-Builder-driven route, render the button alongside your fallback UI.

## Props

The component is typed as VisualEditorCreateCompositionButtonProps:

| Prop | Type | Purpose |
| --- | --- | --- |
| error | Error \\| null (optional) | The error returned from your composition fetch. Passed in so the component can decide when to surface itself. |
| alwaysShow | boolean (optional) | Force the button to render even outside the Visual Builder frame. Intended for local debugging. |
| children | (props: VisualEditorCreateCompositionButtonRenderProps) => React.ReactNode (optional) | Render-prop for fully custom UI. |

## Render Prop Pattern

Instead of shipping a fixed button, the component exposes a VisualEditorCreateCompositionButtonRenderProps object so you can render the CTA in your own design system:

| Field | Type | Meaning |
| --- | --- | --- |
| isInsideVB | boolean | True when the component detects it is running inside the Visual Builder frame. |
| shouldShow | boolean | Combined visibility flag: honors alwaysShow, isInsideVB, and the supplied error. Use this to gate rendering. |
| handleCreateComposition | () => void | Click handler that initiates the create flow with Studio over postMessage. |
| isLoading | boolean | True while the postMessage round-trip is in flight; use it to disable the button and show a pending state. |

The render-prop pattern lets you supply your own button UI. The component calls children with a VisualEditorCreateCompositionButtonRenderProps object; you use shouldShow to conditionally render and handleCreateComposition as the click handler. This keeps the component's logic separate from your design system.

Minimal usage:

```
import { VisualEditorCreateCompositionButton } from "@contentstack/studio-react";

<VisualEditorCreateCompositionButton error={error}>
  {({ shouldShow, handleCreateComposition, isLoading }) =>
    shouldShow && (
      <button onClick={handleCreateComposition} disabled={isLoading}>
        {isLoading ? "Creating..." : "Create New Page"}
      </button>
    )
  }
</VisualEditorCreateCompositionButton>
```

If you omit children, the component renders nothing. A children render prop is required to render any UI. Declared return type is React.ReactElement | null.

## Integration with the Visual Editor Session

The button is meaningful only inside a Visual Builder session:

1.  **Frame detection.** On mount, the component inspects its runtime context to set isInsideVB. Outside the editor (e.g. a public production visit) shouldShow stays false and nothing renders.
2.  **Create handshake.** handleCreateComposition sends a postMessage to the Studio parent frame asking it to create a composition linked to the current URL/route.
3.  **Loading state.** While Studio is provisioning the composition, isLoading is true so your UI can show a spinner or disabled button.
4.  **Hand-off.** Once Studio creates the composition, it reloads the preview frame against the new composition, and your normal composition-render path (useCompositionData + <StudioComponent specOptions={...} />) takes over.

Because the handshake is postMessage\-based, the component is a no-op when loaded standalone; there is no parent Studio frame to answer. Use alwaysShow only to render the UI for local visual testing; the create action will not complete without Studio on the other side.

## See Also

-   [Composition overview](/docs/studio/setup-overview)
-   [CMS binding](/docs/studio/bind-cms-content-to-studio-components)
-   [Canvas URL](/docs/studio/canvas-url)
-   [Deploy](/docs/studio/save-vs-deploy-a-composition)
