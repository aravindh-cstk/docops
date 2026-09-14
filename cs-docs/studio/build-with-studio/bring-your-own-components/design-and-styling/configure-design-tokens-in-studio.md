---
title: "Configure Design Tokens in Studio"
description: "Learn how to register your design system's color, spacing, and typography tokens in Contentstack Studio to replace the default neutral values in the Design panel."
url: /studio/configure-design-tokens-in-studio
uid: bltb38d0a3b7be2184c
---

# Configure Design Tokens in Studio

## Design tokens

Studio's right-panel Design controls (colour pickers, spacing inputs, typography options) use **design tokens** under the hood. By default they show Studio's neutral defaults (useful for the install sanity-check, off-brand for production).

Registering your design tokens swaps the defaults for your design system's values. Authors then pick from your brand colours, your spacing scale, your typography styles, not Studio's generic ones.

## The API

```
import { registerDesignTokens } from "@contentstack/studio-react";

registerDesignTokens({
  colorTokens: {
    primary:    "#0066ff",
    secondary:  "#6b7280",
    background: "#ffffff",
    foreground: "#0f172a",
    accent:     "#ec4899",
  },
  // …more sections
});
```

registerDesignTokens lives in @contentstack/studio-react. Call it once at app boot, alongside registerComponent. Studio applies the tokens as CSS variables on the root and exposes them in the Design panel.

## What tokens you can register

Tokens are organised into sections that map to right-panel controls. The full surface:

### Globals

```
{
  colorTokens: {
    [name: string]: string;     // any CSS colour value: "#hex", "rgb()", "hsl()", "var(--…)"
  },
  spaceTokens: {
    [name: string]: `${number}${"px" | "rem" | "em" | "%" | "vh" | "vw"}`,
  },
}
```

### Per-section design tokens

```
{
  size:       { tokens, width, height, minWidth, minHeight, maxWidth, maxHeight },
  spacing:    { tokens, margin, padding, style },
  position:   { zIndex, position },
  visibility: { opacity },
  layout:     { gap },
  typography: { color, fontWeight, fontSize, lineHeight, letterSpacing, style },
  background: { color, style },
  shadow:     { color, style },
  effects:    { filter },
  border:     { color, radius, style },
  transform:  { style },
  overflow:   { style },
}
```

You don't need to fill every section. Register only the tokens that matter for your design system. Defaults apply for everything else.

## A worked example

A real-world brand token set:

```
registerDesignTokens({
  colorTokens: {
    "brand.primary":   "#1e3a8a",
    "brand.secondary": "#7c3aed",
    "brand.accent":    "#f59e0b",
    "ink.high":        "#0f172a",
    "ink.medium":      "#475569",
    "ink.low":         "#94a3b8",
    "surface.default": "#ffffff",
    "surface.muted":   "#f8fafc",
  },

  spaceTokens: {
    "space.1": "4px",
    "space.2": "8px",
    "space.3": "12px",
    "space.4": "16px",
    "space.6": "24px",
    "space.8": "32px",
  },

  typography: {
    fontSize: {
      xs:   "12px",
      sm:   "14px",
      base: "16px",
      lg:   "18px",
      xl:   "24px",
      "2xl":"32px",
      "3xl":"48px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold:   700,
    },
    style: {
      heading: {
        fontFamily:  '"Inter", system-ui, sans-serif',
        fontWeight:  "700",
        fontSize:    "32px",
        lineHeight:  1.2,
      },
      body: {
        fontFamily:  '"Inter", system-ui, sans-serif',
        fontWeight:  "400",
        fontSize:    "16px",
        lineHeight:  1.5,
      },
    },
  },
});
```

After this runs, the right-panel colour pickers show "brand.primary", "ink.high", etc. instead of Studio's defaults.

## Merge vs replace

By default, registerDesignTokens **merges** your tokens on top of Studio's defaults (allowDefaultDesignTokens defaults to true). If you want only your tokens (so authors can't pick "Studio Red" or "Studio Blue" by accident), pass allowDefaultDesignTokens: false to replace the defaults instead:

```
registerDesignTokens(
  { colorTokens: { primary: "#0066ff" } },
  { allowDefaultDesignTokens: false },
);
```

Most enterprise installs set allowDefaultDesignTokens: false to replace the default design tokens.

## CSS variables under the hood

Studio compiles every registered token to a CSS custom property on :root. The **prefix is always \--token-**. The suffix is generated from the section + token key with **underscores as separators**:

```
--token-<section>_<style>_<name>
```

So a token registered under background.style.solid\_blue becomes \--token-background\_style\_solid\_blue. Some real examples emitted by the SDK (verified in studio-registry/.../design-token.spec.ts):

```
--token-background_style_solid_blue
--token-background_style_linear_gradient
--token-background_style_radial_red
--token-shadow_style_shadow_1
--token-shadow_style_shadow_2
```

The exact suffix per token is **not derivable manually**. Different token shapes (colour, spacing, shadow, typography) flatten differently. **Don't hand-write var(--token-…) references in your component CSS.** Two safer paths instead:

### 1\. Use the design classes Studio emits

When you call registerDesignClasses(\[{ name: "card-bg", ... }, ...\]), Studio emits real CSS class names you can apply directly in your components, no need to reach into the variable layer:

```
<div className="cs-bg-card-bg cs-p-space-4">…</div>
```

The class names + their composition are documented in [registerDesignClasses](#design-classes) below.

### 2\. If you really need the variable references, read them from getDesignTokens()

getDesignTokens() (exported from @contentstack/studio-react) returns the resolved token map, where each value is the var(--token-…) reference Studio generated:

```
import { getDesignTokens } from "@contentstack/studio-react";

const tokens = getDesignTokens();
tokens.typography.color["brand.primary"]; // "var(--token-...)"
```

Use those var(--token-…) references verbatim if you need them in CSS-in-JS, but treat the names as opaque. The exact suffix can shift between token shapes. See [Reading tokens at runtime](#reading-tokens-at-runtime) below.

> **Studio's internal UI** uses a separate \--color-base-\* vocabulary to style its own chrome. That's **not** the design-token surface and should not be consumed by your components.

## Reading tokens at runtime

If you need to read the registered tokens in code:

```
import { getDesignTokens } from "@contentstack/studio-react";

const tokens = getDesignTokens();
console.log(tokens.typography.color["brand.primary"]); // "var(--token-...)"
```

getDesignTokens() returns the resolved DesignTokens shape, a structured map keyed by section, then by field, whose values are CSS-variable references (var(--token-...) strings). It is **not** the raw input you passed to registerDesignTokens. There is no top-level colorTokens key on the returned object. Colour tokens surface under each section that accepts a colour (typography.color, background.color, border.color, shadow.color).

## Design classes

Beyond tokens, Studio supports **design classes**, pre-defined CSS class names with predictable styles you can reuse across components. Useful when you have utility classes (Tailwind-like) or named composite styles ("card-elevated", "button-primary").

```
import { registerDesignClasses } from "@contentstack/studio-react";

registerDesignClasses([
  { name: "card-elevated",  displayName: "Card (Elevated)" },
  { name: "button-primary", displayName: "Button (Primary)" },
]);
```

registerDesignClasses only **registers identifiers** Studio should expose in the Design panel. It does not author CSS. Define the actual rules in your own stylesheet (or utility framework) and ship them with your app. **You should consume design tokens by their semantic meaning** (your design system's own variable names), not by reaching into Studio's \--token-… namespace directly (those names aren't derivable manually, see [CSS variables under the hood](#css-variables-under-the-hood) above):

```
.card-elevated {
  background-color: var(--brand-surface);       /* your own design-system variable */
  box-shadow:       0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius:    12px;
  padding:          var(--brand-space-4);
}

.button-primary {
  background-color: var(--brand-primary);
  color:            #ffffff;
  padding:          var(--brand-space-2) var(--brand-space-4);
  font-weight:      500;
}
```

If you do need to mirror Studio's tokens into your own variables (so the Design panel and your components stay in lockstep), read the var(--token-…) references from getDesignTokens() at app shell and emit your own \--brand-\* aliases pointing at them. Don't hand-author the \--token-… names.

Authors then pick design classes from the Design panel to apply consistent styles without typing CSS.

## Speed it up with an LLM

```
curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh
```

Then ask: "import my design tokens into Studio". The LLM looks for a tailwind.config.{js,ts}, CSS custom properties, or a tokens JSON file in your repo and generates the registerDesignTokens call.

## Next

-   [Component schema](/docs/studio/component-schema-prop-types): how styles on a component schema interacts with design tokens
-   [Figma to Studio](/docs/studio/copy-and-paste-from-figma-to-studio): Figma's token system maps cleanly to Studio's
