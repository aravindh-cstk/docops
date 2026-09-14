---
title: "Framework Recipe: Gatsby"
description: "Gatsby's SSR APIs + gatsby-ssr.js for head injection."
url: /studio/framework-recipe-gatsby
---

# Framework Recipe: Gatsby

## Framework recipe: Gatsby

> **Recipe maturity: community-verified.** This recipe is adapted from the canonical [Node SSR](/docs/studio/framework-recipe-node) recipe (CI-tested end-to-end) and covers the three-call contract + five universal rules from [Framework recipes index](/docs/studio/framework-recipes). It is **not** exercised in the SDK repo's CI. Production users on Gatsby have reported it working. Gatsby's SSR model is closer to build-time HTML than to per-request server rendering. If you use Gatsby Cloud / Netlify functions for dynamic SSR, cross-reference the Node recipe. If you hit a snag, file an issue.

Gatsby's SSR APIs + gatsby-ssr.js for head injection.

> **Verified in-repo:** smoke-tested against the Studio Documentation Contentstack project (Gatsby 5 SSR route via getServerData). curl /blog/welcome-to-studio returns 200 OK, 23 KB composition body, <style data-studio-ssr> with 360 \--token-\* properties, zero data-cs-defer-builtin placeholders.
> 
> **Known caveat:** the Head FC's <title> didn't render into the initial SSR response in the smoke test. Gatsby's Head pipeline may need per-page-static-context to emit. If SEO metadata in the initial HTML is critical, verify against your target Gatsby version before shipping, or inline metadata directly into the page component's return.

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first.

## The recipe

Studio's per-request fetch pattern is a poor fit for Gatsby's build-time static site generation (SSG) default. Use it in one of two modes:

-   **DSG (Deferred Static Generation)**: pages render on first request, then cache. Works with Studio's per-URL routing.
-   **SSR mode**: gatsby-plugin-ssr or Gatsby Cloud's function routes. Render like Node.

DSG example (src/pages/{StudioPage.slug}.tsx or a template file):

```
import { StudioComponent, getSSRStyleTags, getCompositionMetadata } from "@contentstack/studio-react";
import { sdk } from "../lib/studio.server";
import { HeadFC } from "gatsby";
import "../registry";                    // Rule 2

export const config: GatsbyConfig = { defer: true };

export async function getServerData({ params, query }: any) {
  const url = "/" + (params.slug ?? "");
  const specOptions = await sdk.fetchCompositionData(
    { url, searchQuery: new URLSearchParams(query) },
    { locale: "en-us" },
  );
  if (!specOptions?.spec) return { status: 404 };
  return { props: { specOptions } };
}

export default function Page({ serverData }: any) {
  const styleTags = getSSRStyleTags(serverData.specOptions.spec);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <StudioComponent specOptions={serverData.specOptions} />
    </>
  );
}

export const Head: HeadFC<any, { specOptions: any }> = ({ serverData }) => {
  const metadata = getCompositionMetadata(serverData.specOptions, { baseUrl: process.env.GATSBY_BASE_URL ?? "" });
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
      {metadata.canonical && <link rel="canonical" href={metadata.canonical} />}
    </>
  );
};
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

## Smoke pass: verify before treating this recipe as trustworthy for real runs

This recipe is desk-checked against the CI-tested [Node](/docs/studio/framework-recipe-node) recipe. It has not yet been verified against a real Gatsby app. Before shipping:

-   \[ \] Scaffold a fresh Gatsby project (gatsby new).
-   \[ \] Install @contentstack/studio-react (matching the SDK's examples/nextjs-rsc/package.json version).
-   \[ \] Copy the DSG template file + src/registry.ts from this recipe. Confirm the file matches Gatsby's file-based routing (src/pages/{StudioPage.slug}.tsx or src/templates/\*.tsx with createPage).
-   \[ \] Wire a known-good Studio project with at least one saved composition matching a known URL.
-   \[ \] Run gatsby build && gatsby serve. Do NOT verify with gatsby develop (DSG rendering behavior differs).
-   \[ \] Warm the URL with one curl before running assertions (DSG generates deferred pages on first request).
-   \[ \] Run the [Verification curl test](/docs/studio/framework-recipe-verification). All three assertions must pass.
-   \[ \] Verify build-time secrets stay server-side: grep -r 'CONTENTSTACK\_' public/ should return nothing.
-   \[ \] For SSR-function routes (gatsby-plugin-ssr or Gatsby Cloud functions), verify DSG deferred-generation semantics (first request is slower, subsequent are cached).

Note: Gatsby's per-request rendering model is a poor fit for Studio's per-URL routing (Studio expects a live server, Gatsby prefers pre-generated). If you find yourself fighting this, evaluate Next.js or Remix as alternative hosts.

Report deltas as GitHub issues so the doc converges on truth.

## Verify

[Verification curl test](/docs/studio/framework-recipe-verification). Build with gatsby build and serve with gatsby serve. Curl a deferred URL.
