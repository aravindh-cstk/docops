---
title: "Register Components"
description: "Learn how to use registerComponent, registerComponents, and registerLazyComponent to add your React components to the Contentstack Studio palette."
url: /studio/register-components
---

# Register Components

## Register Components

Three register APIs, picked by use case.

| API | When to use |
| --- | --- |
| **registerComponent(config)** | One component at a time. Simplest. |
| **registerComponents(configs)** | Many components at once, all eagerly registered. |
| **registerLazyComponent(config, loader)** | When you want code-splitting: the schema ships eagerly, the component code loads on demand. |

All three live in @contentstack/studio-react.

## Use registerComponent for One Component

```
import { registerComponent } from "@contentstack/studio-react";
import { Button } from "@/components/Button";
import buttonIcon from "@/assets/icons/button.svg";

registerComponent({
  type:        "Button",
  displayName: "Button",
  description: "Primary call-to-action button",
  thumbnailUrl: buttonIcon,
  component:   Button,
  props: {
    label: { type: "string", defaultValue: "Click me" },
    href:  { type: "href",   defaultValue: "#" },
    size:  {
      type:         "choice",
      options:      ["small", "medium", "large"],
      defaultValue: ["medium"],
    },
  },
});
```

What each field does:

| Field | Type | Required | Purpose |
| --- | --- | --- | --- |
| type | string | ✅ | Unique identifier for this component. Use the React component's display name or a clear slug. Don't change it after publishing, composition records reference it. |
| component | React component | ✅ | Your actual React component. Studio mounts this at render time. |
| displayName | string |  | Label shown in the palette and Layers panel. Falls back to type if omitted. |
| description | string |  | Tooltip / docs hover in the palette. |
| thumbnailUrl | string (URL, imported asset, or data: URI) |  | Palette tile thumbnail. SVG works best: inline data:image/svg+xml,… URIs avoid separate asset files and ship in the eager bundle. Falls back to a generic placeholder if omitted, so all your tiles end up looking the same. |
| sections | string | string\[\] |  | Which left-panel category this appears under. Defaults to "Registered Components". |
| wrap | boolean | string |  | If true, Studio wraps the component in a <div> for selection / edit handles. If a string, wraps in that tag. **Default: false**, you opt in if your component doesn't render a single editable root. |
| props | object |  | The prop schema. See [Component schema](/docs/studio/component-schema-prop-types) for every prop type. |
| styles | object |  | Design Panel groups. See [Design tokens](/docs/studio/configure-design-tokens-in-studio). |
| hideFromContentCreators | boolean |  | Hides from authors but keeps in dev mode. |
| hideFromComponentList | boolean |  | Hides from the palette entirely. |
| metadata | object |  | Free-form storage for custom flows. |

## Design Palette Thumbnails

Studio renders the value of thumbnailUrl as the tile in the **Registered Components** section of the palette. Without one, every tile falls back to the same default placeholder, useful as a sanity check, useless once you have more than two components.

Two practical patterns:

### A. Bundled SVG files

```
import buttonIcon from "@/assets/icons/button.svg";

registerComponent({
  type: "Button",
  thumbnailUrl: buttonIcon,
  // …
});
```

Your bundler (Vite, Next, Webpack with SVG-loader) inlines the SVG as a URL. Cleanest when you already have an icon set.

### B. Inline data: URIs

When you don't want a separate asset file, encode the SVG inline:

```
function svg(body: string): string {
  const wrapped = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(8 8)">${body}</g></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(wrapped)}`;
}

registerComponent({
  type: "Button",
  thumbnailUrl: svg('<path d="M5 4 L17 13.5 L11 14 L13.5 19 L11 20 L8.5 15 L5 18 Z" fill="currentColor" stroke="none"/>'),
  // …
});
```

Why this shape:

-   **viewBox="0 0 40 40" + <g transform="translate(8 8)">:** Studio scales the SVG to a fixed tile size. A larger viewBox shrinks the visible ink; the translate(8 8) re-centres it. Without these the icon either fills the entire tile or sits in the corner.
-   **stroke="currentColor":** tiles inherit Studio's palette theme (works in light + dark mode). Avoid hard-coded hex.
-   **encodeURIComponent:** quotes and # characters break naive data: URIs in some browsers. Encode the whole body once.

Verify visually before relying on it: open the project, drop into a composition, confirm every tile is _visually distinct_, not the placeholder.

### Layers-tree icons (separate field)

thumbnailUrl drives the **palette tile** only. To set the Layers-tree icon, use a spread-cast to pass the icon field: Studio's TypeScript types strip it from the public API at compile time, but Studio honours it at runtime:

```
registerComponent({
  type: "Hero",
  displayName: "Hero",
  thumbnailUrl: heroIcon,
  component: Hero,
  // Layers-tree icon — typescript-stripped, runtime-honoured.
  ...({ icon: "ComponentHeader" } as any),
  // …
});
```

Only built-in BuilderIcon names are accepted: the closed set lives in the Renderer switch in composable-studio (look for case "ComponentX":). Useful ones:

| If your component is… | Try icon |
| --- | --- |
| Anything button-shaped | "ComponentButton" |
| A content card / tile | "ComponentCard" |
| A header / banner / hero | "ComponentHeader" |
| Text-heavy / quote / paragraph | "ComponentText" |
| Image-prominent | "ComponentImage" |
| Video | "ComponentVideo" |
| A box / generic container | "ComponentBox" |

Arbitrary SVG / URLs are **not** accepted here: the lookup is a switch on the name string. If you omit the field (or pass an unknown name), Layers falls back to "ComponentDefault" (4 small squares).

## Use registerComponents for Many at Once

The bulk form. Same schema per entry; ergonomic when you ship a whole library.

```
import { registerComponents } from "@contentstack/studio-react";
import { Button, Card, Hero } from "@/components";
import { buttonIcon, cardIcon, heroIcon } from "@/assets/icons";

registerComponents([
  {
    type: "Button",
    displayName: "Button",
    thumbnailUrl: buttonIcon,
    component: Button,
    props: {
      label: { type: "string", defaultValue: "Click me" },
      href:  { type: "href",   defaultValue: "#" },
    },
  },
  {
    type: "Card",
    displayName: "Card",
    thumbnailUrl: cardIcon,
    component: Card,
    props: {
      title: { type: "string", defaultValue: "Card title" },
      image: { type: "imageurl" },
      body:  { type: "string", control: "large" },
    },
  },
  {
    type: "Hero",
    displayName: "Hero",
    thumbnailUrl: heroIcon,
    component: Hero,
    props: {
      headline: { type: "string", defaultValue: "Welcome" },
      cover:    { type: "imageurl" },
    },
  },
]);
```

Whether you call registerComponent thrice or registerComponents once is purely stylistic. The result is identical.

## Use registerLazyComponent to Code-Split a Component

```
import { registerLazyComponent } from "@contentstack/studio-react";
import heroIcon from "@/assets/icons/hero.svg";

registerLazyComponent(
  {
    type:        "Hero",
    displayName: "Hero",
    thumbnailUrl: heroIcon,
    description: "Above-the-fold hero with image and CTA",
    props: {
      headline:  { type: "string",   defaultValue: "Welcome" },
      cover:     { type: "imageurl" },
      ctaLabel:  { type: "string",   defaultValue: "Get started" },
      ctaHref:   { type: "href",     defaultValue: "#" },
    },
  },
  () => import("@/components/Hero").then((m) => m.Hero),
);
```

The first argument is the same schema as registerComponent, except you omit component. The second is a loader that resolves to the component.

Studio wraps the loader in React.lazy + <Suspense fallback={null}>. The **schema** (icon, label, props) ships eagerly so the palette renders the tile; the **component code** loads only when the component is mounted, either when an author drops it on the canvas or when a visitor's page renders it.

When to use lazy:

-   You have a large component library and want the schema-only initial bundle
-   A component pulls heavy dependencies (chart libs, rich-text editors) you want code-split
-   You ship to multiple Studio projects and want per-project tree-shaking

Eager registerComponent is the right default: reach for lazy when bundle size becomes a real concern. See [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration) for the full pattern + framework-specific notes.

## Place the Registration Call

The safest place is a shared module that's imported at **app boot**, alongside @/lib/contentstack:

```
// src/lib/studio-components.ts
import { registerComponents, registerDesignTokens } from "@contentstack/studio-react";
import { Button, Card, Hero } from "@/components";

// Export a function — DO NOT register at module load.
// registerDesignTokens throws if the SDK is not yet initialised, and ES `import`
// is hoisted (an `import "./studio-components"` written below `studioSdk.init(...)`
// will actually run BEFORE init). Calling registerStudio() explicitly after init
// is the only order-safe pattern.
export function registerStudio() {
  registerDesignTokens({ /* your tokens */ });
  registerComponents([
    { type: "Button", component: Button, /* … */ },
    { type: "Card",   component: Card,   /* … */ },
    { type: "Hero",   component: Hero,   /* … */ },
  ]);
}
```

```
// src/lib/contentstack.ts
import { studioSdk } from "@contentstack/studio-react";
import { registerStudio } from "./studio-components";

export const sdk = studioSdk.init({ stackSdk, contentTypeUid: "compositions" });
registerStudio();   // explicit call — guaranteed to run AFTER init
```

Then in your app shell:

```
import "@/lib/contentstack";  // runs init + registration once
```

> ⚠ ES imports hoist, so an import './studio-components' below studioSdk.init() runs before it: always use an exported register() function called explicitly after init.

## Understand Registration Order

Registration runs synchronously at module load; the canvas reads the global registry when the iframe loads.

Registration **must** run before Studio's canvas iframe loads. Otherwise the palette comes up empty for your components and authors only see the defaults.

Three ways this breaks in practice:

1.  **Side-effect import after init in the same file**: ES hoisting moves the import above the init call (see ⚠ above). Use an exported register() function instead.
2.  **Registering inside a route component**: only runs when that route mounts, which may be after the canvas. Move it to app boot.
3.  **Conditional registration based on user state**: same problem. Register all components upfront; use hideFromContentCreators if you want to keep some out of the palette for certain audiences.

## Handle Next.js App Router: Register in Both Module Graphs

App Router apps have two module graphs: a server graph (RSC pages that call sdk.fetchCompositionData) and a client graph (the bundle that hydrates). The component registry is a globalThis\-backed singleton, but it still needs to be **populated in whichever graph reaches it first**. If only one side registers, the other renders with an empty palette / unknown component errors.

Recommended layout:

```
// src/lib/studio-components.ts — PLAIN module (no "use client")
export function registerStudio() { /* registerComponents + registerDesignTokens */ }
```

Then import + call it from **both** entry points:

```
// src/lib/contentstack.ts — server-side import path
import { registerStudio } from "./studio-components";
export const sdk = studioSdk.init({ /* … */ });
registerStudio();
```

```
// src/components/StudioRender.tsx — "use client" client wrapper
"use client";
import { registerStudio } from "@/lib/studio-components";
import { StudioComponent } from "@contentstack/studio-react";
registerStudio();   // safe — registration is idempotent (first wins)
export function StudioRender(props) { return <StudioComponent {...props} />; }
```

This double-call is **safe because registerComponents is idempotent by default**: duplicates are silently skipped (first wins). The SDK was designed this way exactly so HMR, dual-graph, and worker re-evaluation don't break a working integration.

## Verify the Registration

After registering, open Studio, go to the **Components** palette on the left, and expand **Registered Components**. You should see your tiles with the icons + display names you provided.

If they don't appear, see [Troubleshoot: "Registered components don't appear in Studio's palette"](/docs/studio/troubleshoot-common-studio-issues#registered-components-dont-appear-in-studios-palette).

## Speed It Up with an LLM

```
npx @contentstack/studio-skills install
```

Then: _"register my Button component as a Studio component"_. The LLM inspects your component, infers a prop schema (or asks if it can't), and writes the registry entry.

## Next

-   [Component schema](/docs/studio/component-schema-prop-types): every prop type, with examples
-   [Default data](/docs/studio/set-component-default-data): what renders before binding
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration): when and how to lazy-register
