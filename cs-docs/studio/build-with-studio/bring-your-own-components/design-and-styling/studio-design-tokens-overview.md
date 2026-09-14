---
title: "Studio Design Tokens Overview"
description: "Register your design system's colors, spacing, and typography with Studio so the Design panel offers brand values instead of Studio's neutral defaults."
url: /studio/studio-design-tokens-overview
---

# Studio Design Tokens Overview

## Design tokens

Studio's right-panel **Design** controls (colour pickers, spacing inputs, typography options) use design tokens under the hood. By default they show Studio's neutral values, which are useful for the install sanity-check and off-brand for anything you'd actually ship. Registering your tokens replaces those defaults with your brand's values.

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

Call registerDesignTokens once at app boot, alongside registerComponent. Studio applies the tokens as CSS variables on the root and exposes them in the Design panel.

## What tokens you can register

Tokens map to right-panel controls, grouped by section:

### Globals

```
{
  colorTokens: {
    [name: string]: string;     // any CSS colour: "#hex", "rgb()", "hsl()", "var(--…)"
  },
  spaceTokens: {
    [name: string]: `${number}${"px" | "rem" | "em" | "%" | "vh" | "vw"}`,
  },
}
```

### Per-section

```
{
  size:       { tokens, width, height, minWidth, minHeight, maxWidth, maxHeight },
  spacing:    { tokens, margin, padding, style },
  typography: { color, fontWeight, fontSize, lineHeight, letterSpacing, style },
  background: { color, style },
  shadow:     { color, style },
  border:     { color, radius, style },
  layout:     { gap },
  effects:    { filter },
  visibility: { opacity },
  overflow:   { style },
  transform:  { style },
  position:   { zIndex, position },
}
```

You don't need to fill every section. Register only what your design system defines. Studio defaults cover everything else.

## A worked example

```
registerDesignTokens({
  colorTokens: {
    "brand.primary":   "#1e3a8a",
    "brand.secondary": "#7c3aed",
    "brand.accent":    "#f59e0b",
    "ink.high":        "#0f172a",
    "surface.default": "#ffffff",
    "surface.muted":   "#f8fafc",
  },
  spaceTokens: {
    "space.1": "4px",
    "space.2": "8px",
    "space.4": "16px",
    "space.6": "24px",
    "space.8": "32px",
  },
  typography: {
    fontSize: { sm: "14px", base: "16px", lg: "18px", xl: "24px" },
    fontWeight: { normal: 400, medium: 500, bold: 700 },
  },
});
```

Right-panel colour pickers now show brand.primary, ink.high, and so on instead of Studio's defaults.

## Merge vs replace

By default, registerDesignTokens **merges** on top of Studio's defaults. To hide the defaults entirely (so authors can't pick Studio's neutrals by mistake), pass allowDefaultDesignTokens: false:

```
registerDesignTokens(
  { colorTokens: { primary: "#0066ff" } },
  { allowDefaultDesignTokens: false },
);
```

Most enterprise installs replace rather than merge.

## Under the hood: CSS variables

Every registered token becomes a CSS custom property on :root with the prefix \--token-. The exact suffix per token is not derivable by hand (colour, spacing, shadow, and typography tokens flatten differently). Don't hand-write var(--token-…) references in your component CSS.

Two safer patterns:

1.  **Use design classes.** Call registerDesignClasses(\[{ name, displayName }, ...\]) to expose named CSS classes in the Design panel. Ship the CSS rules yourself and consume your own semantic variables inside them.
2.  **Read tokens at runtime.** getDesignTokens() returns the resolved map. Each value is the var(--token-…) reference Studio generated. Use it verbatim if you need it in CSS-in-JS.

## Speed it up with an LLM

Install the Studio CLI (curl -fsSL -u studio https://studio-documentation.contentstackapps.com/install.sh | sh), then ask your coding LLM: "import my design tokens into Studio". The import-design-tokens skill scans for a Tailwind config, CSS custom properties, or a tokens JSON file in the repo and generates the registerDesignTokens call.

## Related

-   [Design props](/docs/studio/design-props): breakpoint-aware CSS props on a component, driven by the same token system.
-   [Breakpoints](/docs/studio/configure-custom-breakpoints): register the viewports Design controls apply per.
-   [Component schema prop types](/docs/studio/component-schema-prop-types): how prop styles interacts with design tokens.
