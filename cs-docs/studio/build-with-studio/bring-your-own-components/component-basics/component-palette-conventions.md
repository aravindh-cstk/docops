---
title: "Component Palette Conventions"
description: "Once a customer's registered a dozen or more components, the Studio palette's \\\"Registered Components\\\" accordion is a scroll wall."
url: /studio/component-palette-conventions
uid: blta17032204ad966f8
---

# Component Palette Conventions

## Palette conventions: group + thumbnail your registered components so the palette reads as a library

Once a customer's registered a dozen or more components, the Studio palette's "Registered Components" accordion is a scroll wall. Grouping and thumbnailing turn that wall into a browsable component library where marketers find what they need in seconds.

This page is the convention. Adopt it for every new BYOC project.

## Palette groups: by role, brand-prefixed, never "Template" or "Section"

Group registered components by **role**, not by feature area. Three groups are usually enough:

-   **<Brand> · Elements**: Layer-1 atomics (Heading, Text, Image, Button, Badge, Icon). The building blocks marketers compose inside other things.
-   **<Brand> · Patterns**: Layer-2 slot-based containers + sealed compositions (Card, Callout, ProductCard, TestimonialCard, AuthorCard). The pieces marketers drop and bind.
-   **<Brand> · Layouts**: Layer-2 layout components with slot props (TwoColumn, ThreeColumn, Stack, Container, Grid). The pieces marketers use to arrange the layout.

Brand-prefix consistently. Acme · Elements / MP · Patterns / Contoso · Layouts. Pick names marketers immediately understand, never internal engineering terms.

### The two words you must not use in group or component names

-   **Template**
-   **Section**

Both collide with Studio's own terminology (Templates compose Sections. Sections compose components). A component named Hero Section is confusing: is it a component or a Section? A palette group named Templates is worse. Studio's Templates tab is already right there in the app chrome. Rename ruthlessly: Hero Section becomes Hero Block, Homepage Template Wrapper becomes Homepage Chrome, and so on.

### Registering the group

Every registerComponent call takes a sections array naming its palette group(s):

```
registerComponent({
  type: "acme-hero-block",
  displayName: "Hero Block",
  component: () => import("./HeroBlock"),
  sections: ["Acme · Patterns"],   // ← palette group
  thumbnailUrl: thumb(HeroGlyph, "Hero Block"),
  props: { /* … */ },
});
```

A component can appear in more than one group if it genuinely belongs (a Product Card might belong in both Patterns and a per-page-family group like Acme · PDP Blocks).

## Thumbnails: inline SVG data URIs, tier-based visual language

Studio renders thumbnailUrl (or falls back to a text placeholder if omitted, which looks amateur). Ship a thumbnail for every registered component.

### Contract

-   **Inline SVG data URI**, encoded via encodeURIComponent. Zero network fetches, zero broken references.
-   **Consistent card shape** across the whole library: same viewBox, same background treatment. This is what makes the palette read as a library, not a pile.
-   **Colors from the customer's brand tokens** (CSS variables or a token file), never invented hex codes. If the brand ships with Studio design tokens registered, use those literals in the SVG so the thumbnail stays in sync with the brand.
-   **Filled shapes, not thin line icons.** Line icons look like placeholders. Filled shapes look intentional.
-   **Component name in the brand's display font**, centered at the bottom of the card. Marketers scan by name. The visual is secondary.

### The visual language scales with tier

The thumbnail should preview what kind of thing this component is. Three tiers, three visual languages:

| Tier | Thumbnail style |
| --- | --- |
| **Layer-1 atomic** | One filled brand-accent glyph OR a bar or two representing the single value. $ mark for Price, accent pill + knockout bar for Button, single-line rect for Heading. |
| **Layer-2 slot-based** (skeleton with drop zones) | Wireframe with **dashed strokes marking the open slots**. Two-zone band = two dashed empty rects. Card with a body slot = a card frame with one dashed rect inside. |
| **Layer-2 sealed / composed pattern** | A mini-mockup of the real thing: image block + label bar + price bar for a Product Card. Accent chip + heading + button-shape for a Callout. Matches the component's actual visual layout in the brand's colors. |

A marketer looking at the palette should be able to tell at a glance: "that's an atom I drop inside things. That's a shell I fill in. That's a card I bind."

### Helper snippet: starter kit

Adopt this helper (or a customer-adapted version) into every BYOC project's registration file. It's five lines of primitives + a thumb() wrapper:

```
// Brand tokens — use your customer's actual token names.
const BG           = "var(--color-canvas)";
const INK          = "var(--color-ink)";
const ACCENT       = "var(--color-accent)";
const DASHED_STROKE = "var(--color-slot-outline)";  // dashed slot borders
const DISPLAY_FONT = "var(--font-display)";

// Primitives.
const bar = (x: number, y: number, w: number, h: number, fill: string, o = 1) =>
  `<rect x='${x}' y='${y}' width='${w}' height='${h}' rx='${h / 2}' fill='${fill}' opacity='${o}'/>`;
const box = (x: number, y: number, w: number, h: number, fill: string, rx = 8, o = 1) =>
  `<rect x='${x}' y='${y}' width='${w}' height='${h}' rx='${rx}' fill='${fill}' opacity='${o}'/>`;
const slot = (x: number, y: number, w: number, h: number, rx = 8) =>
  `<rect x='${x}' y='${y}' width='${w}' height='${h}' rx='${rx}' fill='none' stroke='${DASHED_STROKE}' stroke-width='2' stroke-dasharray='6 4'/>`;
const dot = (cx: number, cy: number, r: number, fill: string, o = 1) =>
  `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${fill}' opacity='${o}'/>`;

// Compose one thumbnail from a glyph fragment + a label.
export const thumb = (glyph: string, label: string) => {
  const s =
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">` +
    `<rect width="400" height="240" rx="18" fill="${BG}"/>` +
    `<g transform="translate(200 96)">${glyph}</g>` +
    `<text x="200" y="216" font-family="${DISPLAY_FONT}" font-size="23" font-weight="500" fill="${INK}" text-anchor="middle">${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(s)}`;
};
```

Glyphs use coordinates centered on (0, 0). The <g transform="translate(200 96)"> places them.

### Concrete example: a Layer-2 layout component

<ThreeColumn> renders 3 columns with brand-standard gap. Its thumbnail is three dashed slot rects (marketers drop content into them):

```
const ThreeColumnGlyph =
  slot(-140, -50, 80, 100) +
  slot(-40,  -50, 80, 100) +
  slot(60,   -50, 80, 100);

registerComponent({
  type: "acme-three-column",
  displayName: "Three Column",
  sections: ["Acme · Layouts"],
  thumbnailUrl: thumb(ThreeColumnGlyph, "Three Column"),
  component: () => import("./ThreeColumn"),
  props: {
    col1: { type: "slot", displayName: "Column 1" },
    col2: { type: "slot", displayName: "Column 2" },
    col3: { type: "slot", displayName: "Column 3" },
  },
});
```

### Concrete example: a Layer-2 sealed pattern

<ProductCard> renders image + name + price bound to fields. Its thumbnail mimics the real card:

```
const ProductCardGlyph =
  box(-70, -60, 140, 100, ACCENT, 8, 0.15) +      // image block
  bar(-70,   50, 90, 8, INK) +                     // product name
  bar(-70,   66, 40, 8, ACCENT);                   // price

registerComponent({
  type: "acme-product-card",
  displayName: "Product Card",
  sections: ["Acme · Patterns"],
  thumbnailUrl: thumb(ProductCardGlyph, "Product Card"),
  component: () => import("./ProductCard"),
  props: { /* image, name, price, url — all bound to entry fields */ },
});
```

## Rules of thumb

-   **A palette that reads as a library.** Every group has 4-12 components. If a group has 2, either merge with a neighbour or drop the group. If a group has 20, split it.
-   **A thumbnail that previews the shape.** If you can't tell atomic vs slot-shell vs pattern from a glance at three thumbnails, the visual language isn't discriminating enough: rework the glyph library, not the components.
-   **Zero external references.** No content delivery network (CDN) URLs, no linked assets. Everything inline as a data URI. This is the palette rendering inside Studio's iframe. External requests hit CORS or return no response.

## See also

-   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html): the mechanics. sections and thumbnailUrl are prop registration fields, documented there.
-   [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html): the build-sheet skill. Each component in its Components table needs a palette group + thumbnail per this page's convention.
-   [figma-generate-components](https://studio-documentation.contentstackapps.com/prompts/figma-generate-components.html): Figma-to-React pipeline. Use tier-based thumbnail glyphs matching what Figma outputs.
-   [import-design-tokens](https://studio-documentation.contentstackapps.com/prompts/import-design-tokens.html): token registration. The thumbnail helper's brand-token literals should match what's registered here.
