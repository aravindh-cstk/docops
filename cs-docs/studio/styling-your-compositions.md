---
title: "[Studio] - Styling Your Compositions"
description: Styling components in Studio using the Design tab, design tokens, breakpoints, classes, style groups, and guardrails.
url: https://www.contentstack.com/docs/studio/styling-your-compositions
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Styling Your Compositions

This page explains how to style components in Contentstack Studio using the **Design** tab, including dynamic values, design tokens, arbitrary values, responsive breakpoints, classes, and component registration style groups. It’s intended for developers registering components and teams configuring design systems, and should be used when setting up consistent styling controls and guardrails in Studio.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio lets you style components directly from the **Design** tab in the canvas. You can apply styles using:
- **Dynamic values** from connected data sources
- **Design tokens** from your organization’s design system
- **Arbitrary values** (custom CSS values you enter manually)

By understanding how to work with design tokens, responsive styles, classes, and component-level styling, you can create consistent, on-brand experiences while keeping code clean.

**Note:** You can add guardrails to restrict arbitrary values or design tokens using the `registerDesignTokens()` function.

## Styling from the Design Tab

When you select a component on the canvas and open the **Design** tab, you can:
- Adjust typography, colors, spacing, and more
- Choose values from connected **data fields** (dynamic values)
- Apply **design tokens** for consistent branding
- Enter **arbitrary values** for one-off styles

## Working with Design Tokens

Design tokens allow you to centralize your brand’s styles and apply them consistently across components.

**Example:** Registering a new token for sizes.

```
import { registerDesignTokens } from "@contentstack/studio-react";

registerDesignTokens({
  size: {
    height: {
      L: "20rem",
    },
    width: {
      XL: "30rem",
      L: "10rem",
    },
  },
});
```

Tokens automatically appear in the **Design** tab when supported by a component’s style section.

**Note:** To enable token-based styling in your components, define style sections and pass corresponding class names. Refer to the `Styling Your Registered Component` section for more details.

## Cascading and Combined Tokens

Some tokens work across multiple style properties. For example:
- **Color tokens** can apply to background and font color
- **Size tokens** can control both height and width

You can also define compound tokens that group multiple design attributes:

**Example:** A “heading” style with font size, font family, and font weight:

```
{
  typography: {
    headingLarge: {
      fontSize: "2rem",
      fontWeight: 700,
      fontFamily: "Inter, sans-serif",
    },
  },
}
```

## Default Tokens in Studio

Studio includes a built-in set of default design tokens.
- You can override these to re-theme all components
- You can disable them entirely using configuration flags

**Example:** Update a Primary Color

```
import { registerDesignTokens } from "@contentstack/studio-react";

registerDesignTokens({
  colorTokens: {
    "color-primary": "#FF4171",
  },
});
```

This will change the primary color from `#6C5CE7` to `#FF4171`.

**Example:** Disable Default Tokens

```
registerDesignTokens({}, {
  allowDefaultDesignTokens: false,
});
```

## Responsive Styling with Breakpoints

Studio supports responsive styling via CSS media queries. Use the **Viewport Selector** (top-right of canvas) to switch breakpoints visually.

**Example:** Register Breakpoints

```
import { registerBreakpoints } from "@contentstack/studio-react";

registerBreakpoints([
  {
    name: "default",
    displayName: "All Screens",
    previewSize: { width: 1200, height: 800 },
  },
  {
    name: "tablet",
    displayName: "Tablet",
    query: "(max-width: 1023px)",
    previewSize: { width: 800, height: 600 },
  },
  {
    name: "mobile",
    displayName: "Mobile",
    query: "(max-width: 767px)",
    previewSize: { width: 400, height: 500 },
  },
]);
```

**Note:** The first breakpoint must be `default`. Styles without a matching media query will fall back to it.

## Using Classes for Complex Styles

Use predefined CSS classes for animations or non-tokenized styles.

**Example:** Register Custom Classes

```
import { registerDesignClasses } from "@contentstack/studio-react";

registerDesignClasses([
  {
    name: "better-heading",
    displayName: "Better Heading",
  },
]);
```

Registered classes are available in the **Design** tab under “Class Names.”

## Styling Your Registered Component

When registering a component, define **style groups** to expose style controls in the **Design** tab. These map to CSS class names that you can apply to elements in your component.

**Example:** Register Component with Style Groups

```
import { registerComponents } from "@contentstack/studio-react";

registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {
    default: {},
    headerStyles: {},
    bodyStyles: {},
    footerStyles: {}
  },
});
```

This allows the **Design** tab to show separate style sections: `default`, `headerStyles`, etc. In your registered component, you will get this as a prop that you must pass in the class name attribute of your component.

```
function Card({
  className, headerStyles, bodyStyles, footerStyles
}: {
  className: string,
  headerStyles: string,
  bodyStyles: string,
  footerStyles: string
}) {
  return (

### I am a header

      I am a body

      I am a footer

  );
}
```

This is how you can add styles to your registered component. As you can see, the `default` style group is passed against the `className` prop. This helps us support external components easily.

By default, the `default` style group is added to every registered component. Hence, you can pass the `className` prop directly to your component without adding anything in the `registeredComponent` function.

If you want no style groups, you can pass an empty object to the style property in the `registeredComponent` function.

```
registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {},
});
```

### Rename Style Sections

By default, the key of the style group will appear in the **Design** tab. You can customize this name by passing an optional `displayName` property.

```
registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {
    default: { displayName: "Card" },
    headerStyles: { displayName: "Header" },
    bodyStyles: { displayName: "Body" },
    footerStyles: { displayName: "Footer" }
  },
});
```

### Restricting Available Styles

You can limit which style controls appear in a style group:

```
registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {
    default: {
      displayName: "Body",
      styleSections: ["typography"], // Only typography controls shown
    },
  },
});
```

### Setting Default Styles

You can apply default tokens, classes, and static values to your components during registration. These styles will be applied to your default breakpoint when you drop the component in the canvas.

```
const classes = registerDesignClasses([
  { name: "better-heading", displayName: "Better Heading" },
] as const);

const tokens = registerDesignTokens(
  { colorTokens: { primary: "#ff0019" } } as const
);

registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {
    default: {
      displayName: "Body",
      defaultStyles: {
        color: tokens.typography.color.primary,
        backgroundColor: "white",
      },
    },
    headerStyles: {
      displayName: "Header",
      defaultClasses: [classes["better-heading"]],
    },
  },
});
```

**Tip:** Mark token/class configs as `const` to enable **autocomplete** in your IDE.

## Setting Design Guardrails

Developers can control whether they want to allow arbitrary values in the design section. Additionally, they can limit which style controls appear in a style group.

```
import { registerDesignTokens } from "@contentstack/studio-react";

registerDesignTokens({}, {
  allowedValuesLevel: "arbitrary", // Allows arbitrary and token values
});
```

**Note:** By default, only **dynamic values** are allowed. To enable **design tokens** or **arbitrary values**, you must configure `registerDesignTokens()`.

```
registerComponents({
  name: "card",
  displayName: "Card",
  component: Card,
  styles: {
    default: {
      displayName: "Body",
      styleSections: ["typography"], // Only typography controls shown
    },
  },
});
```

## Best Practices

- **Use tokens over arbitrary values** to maintain brand consistency.
- **Group related styles** into style tokens for faster editing.
- **Register breakpoints early** so designers know the responsive rules.
- **Test responsive designs** in both the Studio viewport and actual devices.
- **Avoid prop conflicts** when naming style groups.

Styling in Studio gives you the flexibility to create visually rich, brand-consistent digital experiences, without sacrificing performance or developer control. By combining design tokens, responsive rules, and structured style groups, teams can collaborate efficiently while ensuring every component aligns with your design system. Whether you're working in the canvas or registering custom components, Studio’s styling framework scales with your needs, from rapid prototyping to enterprise-grade deployment.

## Common questions

### How do I enable design tokens or arbitrary values in Studio?
By default, only **dynamic values** are allowed. To enable **design tokens** or **arbitrary values**, you must configure `registerDesignTokens()`.

### Where do registered design tokens and classes show up?
Tokens automatically appear in the **Design** tab when supported by a component’s style section, and registered classes are available in the **Design** tab under “Class Names.”

### What is required for responsive styling to work?
Studio supports responsive styling via CSS media queries, and you can register breakpoints using `registerBreakpoints()`. The first breakpoint must be `default`.

### How do style groups connect to my component?
When registering a component, define **style groups** that map to CSS class names, and pass the resulting props (for example `className`, `headerStyles`, `bodyStyles`, `footerStyles`) into the `className` attribute of your component.