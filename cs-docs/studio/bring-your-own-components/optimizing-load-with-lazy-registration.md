---
title: "Optimizing Load With Lazy Registration"
description: "Learn how to use lazy registration in Contentstack Studio to defer heavy component code into separate bundles, keeping your initial JS bundle small."
url: /studio/optimizing-load-with-lazy-registration
uid: bltc83390036d48e90c
---

# Optimizing Load With Lazy Registration

## Optimizing Load With Lazy Registration

For small component libraries, eager registerComponent is fine. For larger libraries, or for components with heavy dependencies, you can register **lazily**: ship the schema in the initial bundle, defer the component code until it's actually needed.

## When to Reach for Lazy Registration

| Symptom | Likely needs lazy registration |
| --- | --- |
| Initial JS bundle is bloated with components most pages don't render | Yes |
| One component pulls in a heavy library (charts, rich-text editor, code editor) | Yes |
| Studio's canvas iframe is slow to load even on small pages | Yes |
| You ship a component library used across multiple Studio projects | Yes |
| You have 10–20 simple components | Eager is fine |

## The API

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

Two arguments:

1.  **The schema**: exactly the same shape as registerComponent, except you omit the component field (Studio provides it via React.lazy)
2.  **A loader**: returns a Promise<React.ComponentType>

Under the hood Studio wraps the loader in React.lazy() + <Suspense fallback={null}>. Your bundler sees the dynamic import() and emits a separate chunk.

## What Ships Eagerly vs. Lazily

| Lives in the initial bundle | Lives in the lazy chunk |
| --- | --- |
| The schema (thumbnailUrl, displayName, props, validation rules) | Your React component itself |
| The lazy wrapper (a tiny Suspense + lazy stub) | All of the component's imports (heavy libs, large assets) |
| The palette tile renders eagerly | First render of the component triggers the chunk load |

The schema is always available. Authors see your tile in the palette immediately. The actual component code only loads when:

-   An author drops the component onto the canvas (component renders for the first time inside Studio)
-   A visitor lands on a page that uses the component (visitor's bundle pulls the chunk)

## When Lazy-Loaded Chunks Actually Fetch

```
T=0  Page boot               Eager bundle loads (schemas, lazy wrappers)
T=1  Studio canvas opens     Palette renders — no lazy code fetched yet
T=2  Author drops Hero       Hero chunk fetches  →  Suspense fallback shows  →  Hero renders
T=3  Visitor hits /landing   Page bundle pulls Hero chunk  →  renders to HTML
```

The author/visitor sees the Suspense fallback during the chunk fetch. Default is null; chunks typically load in ~50ms on a warm cache, so this is invisible to users. For heavy components on a cold cache, see the next section.

## Customize the Fallback

The SDK uses <Suspense fallback={null}> internally. Two ways to provide your own fallback.

### Wrap your app shell in a global Suspense

Studio's lazy components participate in any outer Suspense boundary you provide:

```
import { Suspense } from "react";

export default function AppShell({ children }) {
  return (
    <Suspense fallback={<ComponentLoadingSkeleton />}>
      {children}
    </Suspense>
  );
}
```

Catches lazy loads from inside Studio's tree and shows your skeleton instead of nothing. Useful when you want a single fallback covering everything.

### Roll your own: skip registerLazyComponent entirely

registerLazyComponent is sugar over registerComponent + React.lazy + <Suspense>. If you want a custom per-component fallback (or full control over the wrapper), do it manually with plain registerComponent:

```
import React, { Suspense, lazy } from "react";
import { registerComponent } from "@contentstack/studio-react";
import heroIcon from "@/assets/icons/hero.svg";

const HeroLazy = lazy(() => import("@/components/Hero"));

const Hero = (props) => (
  <Suspense fallback={<HeroSkeleton />}>     // your fallback, not null
    <HeroLazy {...props} />
  </Suspense>
);

registerComponent({
  type:        "Hero",
  displayName: "Hero",
  thumbnailUrl: heroIcon,
  component:   Hero,
  props: { /* … */ },
});
```

Functionally identical to registerLazyComponent. Same lazy chunk, same bundle behaviour, same Studio integration, just with your own Suspense wrapper.

**When to pick which:**

| Use registerLazyComponent when… | Use registerComponent + manual lazy when… |
| --- | --- |
| fallback: null is fine | You need a custom per-component fallback |
| You want the convention everyone else follows | You're already wrapping Suspense elsewhere for your own reasons |
| Less boilerplate to write | You want full control over the wrapper component |

## Mix Eager and Lazy in the Same Library

Mix freely. Eagerly register the components that always render; lazily register the heavy ones:

```
// Always-needed components — eager
registerComponents([
  { type: "Button", component: Button, /* … */ },
  { type: "Text",   component: Text,   /* … */ },
  { type: "Image",  component: Image,  /* … */ },
]);

// Heavy / rare components — lazy
registerLazyComponent(
  { type: "Chart",       props: { /* … */ } },
  () => import("@/components/Chart").then(m => m.Chart),
);
registerLazyComponent(
  { type: "VideoPlayer", props: { /* … */ } },
  () => import("@/components/VideoPlayer").then(m => m.VideoPlayer),
);
registerLazyComponent(
  { type: "RichTextEditor", props: { /* … */ } },
  () => import("@/components/RichTextEditor").then(m => m.RichTextEditor),
);
```

> **Pitfall: direct route imports break lazy boundaries.** If a route file contains import { Hero } from "@/components/Hero", the static import pulls Hero into the route bundle regardless of lazy registration, so the dynamic import() inside registerLazyComponent never fires a separate chunk request. Keep route files free of direct component imports; import from your registry module (@/lib/studio-components) so the bundler honours the code split.

## Per-Route Code Splitting (Visitor Side)

Lazy registration affects Studio's canvas, but the same idea applies to **visitor-facing routes**. If a route renders a template that uses Chart, the visitor's bundle still pulls the Chart chunk, but only on that route, not on routes that don't use it.

This is automatic when:

1.  You used registerLazyComponent (so the registration is via a dynamic import())
2.  Your bundler is configured to code-split (Next.js, Vite, modern Webpack all do this by default)
3.  Your route imports @/lib/studio-components (or wherever you register), not the components themselves

If you import { Hero } from "@/components/Hero" in a route file, that breaks the lazy boundary: the import statically pulls Hero into the route bundle. The whole point is to let Studio drive when the component loads. Keep route files free of direct component imports.

## Server-Side Considerations

When you're rendering with SSR / RSC / SSG (see [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering)):

-   The server renders client components via React's server-pass; React.lazy works correctly, it pre-renders the loaded component into HTML
-   The visitor's browser then hydrates the same component; chunk fetch happens during hydration if it wasn't already in the bundle
-   **No extra config needed** for Next.js App Router, Pages Router, Remix, Vite SSR

Edge case: if your build configuration explicitly disables code splitting (rare, but possible with some Webpack / Rollup configs), lazy registration falls back to eager behaviour, and everything ends up in the initial bundle. Check your bundler output if you suspect this.

## What \_lazy Looks Like to Studio

Internally Studio tags lazy registrations with a \_lazy: true flag on the registry entry. This isn't something you set or inspect; it's there so Studio's tooling knows the component isn't loaded yet and can fire the lazy load when needed.

The flag also means Studio's diagnostics know to wait for the chunk before claiming "component didn't render," useful for troubleshooting.

## A Pragmatic Default

For most enterprise libraries:

| Component category | Registration |
| --- | --- |
| Buttons, links, text primitives | Eager |
| Layouts, grids, containers | Eager |
| Cards, tiles, headings | Eager |
| Anything with a chart, map, code editor, video player, rich-text editor | **Lazy** |
| Components that are author-only (test cards, dev tools) | Lazy + hideFromContentCreators |

This split keeps the initial bundle small without making routine drops feel sluggish.

## Verification Checklist

After moving to lazy registration:

1.  Open Studio's canvas: your palette tiles should appear identically (schema is the same)
2.  Drop the lazy component: there should be a brief flash before it renders (the chunk fetching)
3.  In DevTools Network tab, you should see a new chunk request when the component first mounts
4.  Subsequent drops of the same component should be instant (chunk is cached)

If the chunk request doesn't fire, your bundler may be inlining the dynamic import. Check the build output to confirm the chunk exists.

## Next

-   [Design tokens](/docs/studio/configure-design-tokens-in-studio)
-   [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering)
