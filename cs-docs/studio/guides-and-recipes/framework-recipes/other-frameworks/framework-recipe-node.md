---
title: "Framework Recipe: Plain Node with Express or Fastify"
description: "The simplest SSR host: one request, one server render, one HTML response. This is the reference recipe every other host adapts."
url: /studio/framework-recipe-node
uid: bltd22950f2c717fdb8
---

# Framework Recipe: Plain Node with Express or Fastify

## Framework recipe: Plain Node (Express / Fastify)

The simplest server-side rendering (SSR) host: one request, one server render, one HTML response. This is the reference recipe every other host adapts.

> **Source of truth:** examples/node-ssr/server.tsx in the SDK repo. Continuous integration (CI) runs this example on every PR. Copy the pattern verbatim. If this doc drifts from the example, trust the example.

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first for the three-call contract and five universal rules.

## Prerequisites

-   Studio installed and @contentstack/studio-react in dependencies (see [install-studio](https://studio-documentation.contentstackapps.com/prompts/install-studio.html)).
-   All components registered at module scope (both built-ins and custom). See Rule 2 in [the shared concepts page](/docs/studio/framework-recipes#rule-2-root-import-required).
-   A catch-all route pattern in your HTTP layer (Rule 4).
-   Node 20+ (React 19 needs it for async server components).

## The recipe

One file. The three calls (data, render, styles) plus metadata injection.

```
// server.tsx
import express from "express";
import { renderToString } from "react-dom/server";
import {
  StudioComponent,
  getSSRStyleTags,
  getCompositionMetadata,
  renderMetadataToHtml,
} from "@contentstack/studio-react";
import { sdk } from "./studio.server";

// Registry: import every registration module at server startup.
// Rule 2 — a root import is required so built-ins auto-register.
import "./registry";

const app = express();

// Rule 4 — one catch-all route handles every visitor URL.
app.get("*", async (req, res) => {
  try {
    // 1) Data — server-side fetch, no hooks.
    const specOptions = await sdk.fetchCompositionData(
      { url: req.path, searchQuery: new URLSearchParams(req.query as Record<string, string>) },
      { locale: "en-us" },
    );

    if (!specOptions?.spec) {
      res.status(404).send("Not found");
      return;
    }

    // 2) Render — pure React, produces the composition's DOM.
    const bodyHtml = renderToString(<StudioComponent specOptions={specOptions} />);

    // 3) Styles — pre-computed <style> tag with the composition's design-panel tokens.
    const styleTags = getSSRStyleTags(specOptions.spec);

    // Metadata — injects <title>, <meta name=description>, og:*, canonical.
    const metadata = getCompositionMetadata(specOptions, { baseUrl: `${req.protocol}://${req.get("host")}` });
    const headHtml = renderMetadataToHtml(metadata);

    res.status(200).type("html").send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    ${headHtml}
    ${styleTags}
  </head>
  <body>
    <div id="root">${bodyHtml}</div>
    <script type="module" src="/client.js"></script>
  </body>
</html>`);
  } catch (err) {
    console.error("SSR error:", err);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

Registry file (every registration module imported once at startup):

```
// registry.ts
import "@contentstack/studio-react";     // Rule 2 — root import; triggers built-in registration
import "./components/Hero";              // side-effectful registerComponent(...) calls
import "./components/CardBand";
import "./components/Footer";
```

Client entry (hydrates the same tree):

```
// client.tsx
import { hydrateRoot } from "react-dom/client";
import { StudioComponent } from "@contentstack/studio-react";
import "./registry";                     // same registry the server used

// specOptions must match the server's — serialize it into the initial HTML
// via a <script> tag and read it here. Do NOT re-fetch on the client (Rule 3).
const specOptions = (window as any).__STUDIO_SPEC__;
hydrateRoot(document.getElementById("root")!, <StudioComponent specOptions={specOptions} />);
```

## Passing specOptions to the client

Serialize specOptions into the initial HTML so the client hydrates with the same data:

```
res.send(`<!DOCTYPE html>
<html>
  <head>${headHtml}${styleTags}</head>
  <body>
    <div id="root">${bodyHtml}</div>
    <script>window.__STUDIO_SPEC__ = ${JSON.stringify(specOptions).replace(/</g, "\\u003c")};</script>
    <script type="module" src="/client.js"></script>
  </body>
</html>`);
```

The .replace(/</g, "\\\\u003c") guards against XSS via </script> sequences inside the JSON.

## Fastify

Same three calls, different handler shape:

```
import Fastify from "fastify";
import { StudioComponent, getSSRStyleTags, getCompositionMetadata, renderMetadataToHtml } from "@contentstack/studio-react";
import "./registry";
import { renderToString } from "react-dom/server";

const app = Fastify();

app.get("/*", async (req, reply) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const specOptions = await sdk.fetchCompositionData(
    { url: url.pathname, searchQuery: url.searchParams },
    { locale: "en-us" },
  );
  if (!specOptions?.spec) return reply.code(404).send("Not found");

  const bodyHtml = renderToString(<StudioComponent specOptions={specOptions} />);
  const styleTags = getSSRStyleTags(specOptions.spec);
  const metadata = getCompositionMetadata(specOptions, { baseUrl: `http://${req.headers.host}` });

  return reply.type("text/html").send(`<!DOCTYPE html><html><head>${renderMetadataToHtml(metadata)}${styleTags}</head><body><div id="root">${bodyHtml}</div></body></html>`);
});

app.listen({ port: 3000 });
```

## Live Preview

Live Preview comes from @contentstack/live-preview-utils, not from @contentstack/studio-react. Install and configure it per [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html). ContentstackLivePreview.init({...}) runs once at app boot.

Then author a client-side component that reloads the page on entry change (plain Node has no in-app router, so window.location.reload() is the reactivity path):

```
// client-live-preview.tsx  (customer-authored)
import { useEffect } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export function LivePreviewBridge() {
  useEffect(() => {
    let first = true;
    const unsub = ContentstackLivePreview.onEntryChange(() => {
      if (first) { first = false; return; }  // skip register-time fire
      window.location.reload();
    });
    return () => { if (unsub != null) ContentstackLivePreview.unsubscribeOnEntryChange?.(unsub); };
  }, []);
  return null;
}
```

Mount it inside your client entry alongside <StudioComponent>:

```
// client.tsx
import { hydrateRoot } from "react-dom/client";
import { StudioComponent } from "@contentstack/studio-react";
import { LivePreviewBridge } from "./client-live-preview";
import "./registry";

const specOptions = (window as any).__STUDIO_SPEC__;
hydrateRoot(
  document.getElementById("root")!,
  <>
    <LivePreviewBridge />
    <StudioComponent specOptions={specOptions} />
  </>,
);
```

The name LivePreviewBridge is customer convention. The SDK does not export it. Frameworks with a router (Next.js, Remix) swap window.location.reload() for router.refresh() and revalidator.revalidate(). Loop-safe pattern rules: [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7.

## Verify

Run the [verification curl test](/docs/studio/framework-recipe-verification). All three assertions must pass:

-   curl http://localhost:3000/some-known-path returns composition body text.
-   Response HTML contains <style data-studio-ssr> with \--token- custom properties.
-   Response HTML contains <title> and <meta property="og:..."> tags.

Runnable reference: examples/node-ssr/baseline-check.ts in the SDK repo, the exact assertions CI runs.

## Common failures on this recipe

Every entry below maps to a full section in [Troubleshooting](/docs/studio/framework-recipe-troubleshooting). This is the shortlist for Node specifically:

-   **Attempted to call X() from the server**: SDK older than the dist-ESM fix (issue #874). Upgrade @contentstack/studio-react.
-   **Internal components missing**: you imported a subpath (@contentstack/studio-react/rsc) into the server bundle without a root import elsewhere. Add import "@contentstack/studio-react"; at the top of registry.ts.
-   **Empty <main> in the HTML**: the composition matched a URL pattern but produced no children. Usually the CMS entry is empty, not an SSR bug. Check the composition in Studio.
-   **Invalid hook call**: two React copies. npm ls react should show exactly one.
-   **TypeError: Cannot read properties of null (reading 'hasOwnProperty') inside @contentstack/json-rte-serializer**: the serializer's htmlToJson expects an HTMLElement, not a string. In Node you must parse the HTML through jsdom first and pass the resulting body. Full recipe in [Troubleshooting: json-rte-serializer in Node](/docs/studio/framework-recipe-troubleshooting#from-in-node).

## See also

-   [Framework recipes: index](/docs/studio/framework-recipes): the three-call contract + five universal rules.
-   [Troubleshooting](/docs/studio/framework-recipe-troubleshooting): every failure mode by symptom.
-   [Verification](/docs/studio/framework-recipe-verification): the curl test.
-   [configure-csr-vs-ssr](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html): the skill that walks through picking a render strategy.
