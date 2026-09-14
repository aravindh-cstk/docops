---
title: "Framework Recipe: Astro with React Islands"
description: "Frontmatter fetches. The island wrapper renders Studio inside an Astro page."
url: /studio/framework-recipe-astro
uid: blt4959a673b9031f9f
---

# Framework Recipe: Astro with React Islands

## Framework recipe: Astro (React islands)

Frontmatter fetches. Island wrapper renders Studio inside an Astro page.

> **Verified in-repo:** smoke-tested against the Studio Documentation Contentstack project (Astro 5 + @astrojs/node + @astrojs/react). curl /blog/welcome-to-studio returns 200 OK, 19 KB composition body, <style data-studio-ssr> with 180 \--token-\* properties, populated <title>, zero data-cs-defer-builtin placeholders. Astro island (<astro-island client:load>) serializes the full specOptions for client hydration.

> **Required Vite config for the server-side rendering (SSR) bundle.** Without this, Astro's Node adapter throws SyntaxError: The requested module 'entities/decode' does not provide an export named 'default' because the SDK's HTML-parsing transitive deps are CJS-only. Add to astro.config.mjs:
> 
> ```
> import { defineConfig } from "astro/config";
> import node from "@astrojs/node";
> import react from "@astrojs/react";
> 
> export default defineConfig({
>   output: "server",
>   adapter: node({ mode: "standalone" }),
>   integrations: [react()],
>   vite: {
>     ssr: {
>       noExternal: [
>         "entities", "domelementtype", "domhandler", "domutils",
>         "htmlparser2", "parse5",
>         /^@contentstack\/.*/,
>       ],
>     },
>   },
> });
> ```

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first.

## The recipe

```
---
// src/pages/[...slug].astro
import Layout from "../layouts/Layout.astro";
import StudioIsland from "../components/StudioIsland";
import { getSSRStyleTags, getCompositionMetadata } from "@contentstack/studio-react";
import { sdk } from "../lib/studio.server";
import "../registry";                    // Rule 2

const url = new URL(Astro.request.url);
const specOptions = await sdk.fetchCompositionData(
  { url: url.pathname, searchQuery: url.searchParams },
  { locale: "en-us" },
);

if (!specOptions?.spec) {
  return Astro.rewrite("/404");
}

const styleTags = getSSRStyleTags(specOptions.spec);
const metadata = getCompositionMetadata(specOptions, { baseUrl: url.origin });
---
<Layout>
  <slot name="head" slot="head">
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
    {metadata.canonical && <link rel="canonical" href={metadata.canonical} />}
    <Fragment set:html={styleTags} />
  </slot>
  <StudioIsland client:load specOptions={specOptions} />
</Layout>
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

```
// src/components/StudioIsland.tsx
import { StudioComponent } from "@contentstack/studio-react";
import "../registry";                    // island needs its own root import (Rule 2)
export default function StudioIsland({ specOptions }: { specOptions: any }) {
  return <StudioComponent specOptions={specOptions} />;
}
```

## Per-island registry init

Each React island in Astro is a separate hydration root. Every island that renders a <StudioComponent /> needs its own import "../registry" at the top. Missing it produces **"Internal components missing"** at hydration.

## Smoke pass: verify before treating this recipe as validated by a full run

This recipe is desk-checked against the CI-tested [Node](/docs/studio/framework-recipe-node) recipe. It has not yet been verified against a real Astro app. Before shipping:

-   \[ \] Scaffold a fresh Astro project with SSR mode enabled and the React integration installed (npm create astro@latest + npx astro add react).
-   \[ \] Install @contentstack/studio-react (matching the SDK's examples/nextjs-rsc/package.json version).
-   \[ \] Copy src/pages/\[...slug\].astro + src/components/StudioIsland.tsx + src/registry.ts from this recipe.
-   \[ \] Wire a known-good Studio project with at least one saved composition matching a known URL.
-   \[ \] Run npx astro dev (SSR mode).
-   \[ \] Run the [Verification curl test](/docs/studio/framework-recipe-verification) against a known composition URL. All three assertions must pass.
-   \[ \] Confirm the per-island registry init works: check that <StudioIsland client:load> renders correctly without "Internal components missing." If it fails, verify the registry import is at the top of the island's .tsx file.
-   \[ \] For every additional React island in the app that renders <StudioComponent />, verify import "../registry" is present at the top: every island is a separate hydration root.
-   \[ \] Run npx astro build && npx astro preview to verify production behavior.

Report deltas as GitHub issues so the doc converges on truth.

## Verify

[Verification curl test](/docs/studio/framework-recipe-verification).
