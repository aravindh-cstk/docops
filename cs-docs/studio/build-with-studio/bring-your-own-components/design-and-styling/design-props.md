---
title: "Design props: breakpoint-aware CSS props"
description: "Mark a component prop as a design prop so authors can set a different CSS value per breakpoint in Studio's Settings tab, delivered to your component as a generated class."
url: /studio/design-props
---

# Design props: breakpoint-aware CSS props

## Design props: breakpoint-aware CSS props

A **design prop** is a registered prop whose key is a CSS property and whose values are CSS values, editable **per breakpoint** in the Settings tab. Your component doesn't receive the raw value. It receives a **generated class name** (with the breakpoint media queries baked in) and applies it to whichever element it targets.

Use one when a visual knob should be author-controlled and responsive (padding, gap, margin, border-radius, min-height, object-fit) but you want it as a labelled control in the Settings tab rather than free-form CSS in the Design tab.

```
registerComponent({
  type: "card",
  component: Card,
  props: {
    title: { type: "string" },
    paddingInline: {
      type: "choice",
      design: true,                       // ← the flag
      displayName: "Padding",
      options: [
        { label: "S", value: "var(--space-s)" },
        { label: "M", value: "var(--space-m)" },
        { label: "L", value: "var(--space-l)" },
      ],
      defaultValue: "var(--space-m)",
    },
  },
});
```

```
// Design prop (Studio): generated class name with per-breakpoint media queries.
export function Card({ title, paddingInline }: { title: string; paddingInline?: string }) {
  return (
    <div className={cn("card", paddingInline)}>
      <h2>{title}</h2>
    </div>
  );
}
```

The author picks **L** on desktop, switches the canvas to mobile, picks **S**. Your component's class now carries padding-inline: var(--space-l) plus an @media override for mobile. The browser's CSS cascade resolves it: **no JavaScript at render time, no flash on server-rendered pages, works in RSC.**

## How it works

-   The prop's per-breakpoint values are stored on the node's style data (the same storage the Design tab uses), never in the composition's content values. A design prop is not bindable content. It's presentation.
-   The SDK compiles the values into one class: the default breakpoint's value is the base declaration, every other breakpoint becomes an @media rule. Missing breakpoints fall back through wider breakpoints to the default, the same cascade the Design tab gives styles.
-   The class is passed to your component **under the prop key**. Applying it is your job. A design prop your component ignores styles nothing.
-   defaultValue seeds the **default breakpoint** when the component is dropped. Breakpoint overrides are always author-created.

## Rules

| Rule | Detail |
| --- | --- |
| Allowed types | choice (options are { label, value } where value is a CSS value) and string (free CSS value input). The flag is ignored with a console warning on any other type. |
| Key must be a CSS property | camelCase, e.g. paddingInline, backgroundColor, gap. Non-CSS-shaped keys are warned and ignored. An unknown-but-css-shaped key only produces a no-op declaration. |
| Reserved keys | default, className, children, style, key, ref, and any key that collides with a registered style group, warned and ignored. |
| Top-level props only | The flag is ignored inside object.properties and array.items. |
| One prop per CSS property | Prop keys are unique per component, so two knobs for the same property on different inner elements aren't possible. Split the inner element into its own component if you need that. |
| CSS values only | A design prop can't drive component logic. A token like slides = 3 that your code reads as a number is **not** a design prop. Keep it a normal prop. |

## Prefer CSS-variable values

Point option values at CSS custom properties instead of raw lengths:

```
options: [{ label: "M", value: "var(--space-m)" }]
```

Saved compositions store the var() reference, so retuning \--space-m in your stylesheet updates every composition on the next paint, no Studio JSON changes. Define the variables in a stylesheet your app always loads (e.g. globals.css :root). Raw values ("24px") also work. They're frozen into saved data.

## Editing experience

In the Settings tab a design prop renders its control against the **active breakpoint** (the same breakpoint switcher the Design tab uses). On a non-default breakpoint the control shows a breakpoint tag. Once the author sets a value there, an override dot and a **Reset** action appear. Reset removes the override so the value inherits from wider breakpoints again. The control always displays the cascade-resolved value.

Each breakpoint's value can instead be **bound to data** (the database icon), one source per breakpoint: setting a manual value replaces that breakpoint's binding and vice versa.

## Version requirements

Both sides must carry design-prop support: the Studio editor hides design-prop controls when the canvas SDK predates the feature (feature gate DESIGN\_PROPS). Published pages render design-prop data correctly even on older SDKs (the class delivery path is version-independent) but registering the flag against an old SDK's types is a developer error the gate protects authors from.

## See also

-   [Component schema: prop types](/docs/studio/component-schema-prop-types): the full prop-type reference. Design props are a flag on choice/string.
-   [Breakpoints](/docs/studio/configure-custom-breakpoints): the viewports authors design against. Design-prop overrides are stored per breakpoint id.
-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): Studio-managed tokens. The var() pattern above works with any CSS custom property, Studio-managed or your own.
-   [Style components with the Design panel](/docs/studio/style-components-with-the-design-panel): free-form per-breakpoint CSS on style groups. Design props are the curated, Settings-tab counterpart.
