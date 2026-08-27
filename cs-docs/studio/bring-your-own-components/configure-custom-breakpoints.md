---
title: "Configure Custom Breakpoints"
description: "Learn how to register and configure responsive breakpoints in Contentstack Studio so authors can design and preview layouts across multiple viewport sizes."
url: /studio/configure-custom-breakpoints
uid: blte0f74dfb5cb2800b
---

# Configure Custom Breakpoints

## Configure Custom Breakpoints

Breakpoints define the responsive viewports authors can design for in Studio. Once registered, the canvas shows a **breakpoint switcher**: authors design for desktop, then click into tablet or mobile and override styles per-viewport. Studio applies the right styles at the right viewport at runtime.

You configure breakpoints once at SDK boot. They are global to the project, not per-component.

## When to Use Custom Breakpoints

Register custom breakpoints when your design system targets specific viewport widths that differ from Studio's defaults, for example, a wide-format editorial site that distinguishes between 1280 px and 1920 px desktop viewports, or an app that has a dedicated tablet portrait mode. If your project only needs the standard mobile/tablet/desktop split, the defaults are usually sufficient and custom breakpoints add maintenance overhead without a real authoring benefit.

## The API

Use registerBreakpoints from @contentstack/studio-react. The argument is a BreakpointInput: a tuple whose first element is the default breakpoint and remaining elements are additional breakpoints.

The resolved Breakpoint shape (from @contentstack/studio-registry):

```
interface Breakpoint {
  id: string;
  displayName: string;
  query: string;                              // CSS media query
  previewSize: { width: number; height: number };
}
```

Rules enforced by BreakpointRegistry:

-   **First entry is the default.** Its id must be "default" and it has no query (the type is DefaultBreakpoint = Omit<PreProcessedBreakpoint, "query">). The default applies when no other media query matches, typically your desktop styles.
-   **query is a raw CSS media query** (e.g. (max-width: 1024px)). Studio uses it both to drive the runtime cascade and to match the canvas preview to the right breakpoint.
-   **previewSize** sets the canvas frame width and height (px) shown when the author selects that breakpoint. It controls what authors see; it does not affect the runtime media query.
-   **displayName** is the label shown in the switcher. It is optional in the input (PreProcessedBreakpoint); if omitted, Studio derives one from the id.
-   Ensure id and displayName are unique across all entries.

## Full Example

```
import { registerBreakpoints } from "@contentstack/studio-react";

// First entry must be the default (no media query). Others use a CSS media
// query string. `previewSize` controls the canvas frame dimensions when the
// author switches to that breakpoint.
registerBreakpoints([
  {
    id: "default",
    displayName: "Desktop",
    previewSize: { width: 1200, height: 800 },
    // default entry omits `query` — its type is Omit<PreProcessedBreakpoint, "query"> & { id: "default" }
  },
  {
    id: "tablet",
    displayName: "Tablet",
    query: "(max-width: 1024px)",
    previewSize: { width: 768, height: 1024 },
  },
  {
    id: "mobile",
    displayName: "Mobile",
    query: "(max-width: 640px)",
    previewSize: { width: 375, height: 812 },
  },
]);
```

Call this once during app bootstrap: the same place you call registerComponent and registerDesignTokens.

## The Breakpoint Switcher

Once breakpoints are registered, Studio's canvas toolbar shows a switcher with one button per breakpoint, labelled by displayName. Clicking a breakpoint:

1.  Resizes the canvas iframe to previewSize.width × previewSize.height.
2.  Activates breakpoint-specific style overrides in the Design panel, design changes the author makes are scoped to that breakpoint (or cascade down from the default if the property has no per-breakpoint override).
3.  Updates the rendered composition so authors see exactly what visitors see at that viewport.

This is the core of Studio's responsive workflow: per-breakpoint padding overrides, font-size scaling, hidden-on-mobile flags, all single clicks in the right panel, no media-query CSS authored by hand.

## Responsive Design Workflow

1.  **Design the default first.** Set base styles at default (typically desktop). These cascade to every other breakpoint as the starting point.
2.  **Switch to the next breakpoint** (e.g. Tablet). Adjust only what needs to change, gap, padding, font size, visibility. Studio stores these as overrides, not as a full redefinition.
3.  **Repeat down to the smallest viewport.** Each smaller breakpoint inherits from the next-larger one unless overridden.
4.  **Preview** by clicking each breakpoint button to confirm the layout at every size.

Because overrides cascade, you keep the design system intact: change a default token and every breakpoint picks it up unless explicitly overridden.

## Common Pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Switcher does not appear | No breakpoints registered | Call registerBreakpoints at boot |
| "First breakpoint must have id 'default'" | Default entry missing or out of order | Make the first array element { id: "default", ... } with no query |
| Canvas frame size feels wrong | previewSize mismatched to the breakpoint's intent | Match previewSize.width to a representative device width inside the query range |
| Overrides do not apply at runtime | query is empty or malformed for a non-default breakpoint | Use a valid CSS media query string, e.g. (max-width: 640px) |
| Two breakpoints labelled the same in UI | Duplicate displayName | Give each entry a unique displayName |
| Mobile styles bleed into desktop | Designed at the wrong breakpoint | Always set base styles at default, then override down |

## See Also

-   [Design Panel](/docs/studio/style-components-with-the-design-panel): author-facing UI where breakpoints surface
-   [Design Tokens](/docs/studio/configure-design-tokens-in-studio): the values you override per breakpoint
-   [Registering Components](/docs/studio/register-components): opting components into Design panel control
-   [Best Practices](/docs/studio/apply-studio-development-best-practices): guidance on breakpoint design
