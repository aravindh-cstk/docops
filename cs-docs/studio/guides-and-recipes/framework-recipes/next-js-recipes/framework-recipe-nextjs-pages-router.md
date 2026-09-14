---
title: "Framework Recipe: Next.js Pages Router"
description: "getServerSideProps fetches, document.tsx injects styles and metadata, then the page component renders."
url: /studio/framework-recipe-nextjs-pages-router
uid: blte9701b642bc7264b
---

# Framework Recipe: Next.js Pages Router

## Framework recipe: Next.js Pages Router

getServerSideProps fetches. \_document.tsx injects styles + metadata. Page component renders.

> **Verified in-repo:** smoke-tested against the Studio Documentation Contentstack project (Next.js 14.2.35). curl /blog/welcome-to-studio returns 200 OK, 23 KB composition body, <style data-studio-ssr> with 360 \--token-\* properties, populated <title>, zero data-cs-defer-builtin placeholders.
> 
> Requires next build && next start (not next dev: Pages Router's dev mode has racy module init).

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first.

## The recipe

```
// pages/[[...slug]].tsx
import { GetServerSideProps } from "next";
import { StudioComponent, getSSRStyleTags, getCompositionMetadata, } from "@contentstack/studio-react";
import { sdk } from "@/lib/studio.server";
import Head from "next/head";
import "@/registry";                     // Rule 2

export const getServerSideProps: GetServerSideProps = async ({ req, resolvedUrl }) => {
  const url = new URL(resolvedUrl, `http://${req.headers.host}`);
  const specOptions = await sdk.fetchCompositionData(
    { url: url.pathname, searchQuery: url.searchParams },
    { locale: "en-us" },
  );
  if (!specOptions?.spec) return { notFound: true };

  const styleTags = getSSRStyleTags(specOptions.spec);
  const metadata = getCompositionMetadata(specOptions, { baseUrl: `http://${req.headers.host}` });

  return { props: { specOptions, styleTags, metadata } };
};

export default function Page({ specOptions, styleTags, metadata }: any) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
        {metadata.canonical && <link rel="canonical" href={metadata.canonical} />}
      </Head>
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <StudioComponent specOptions={specOptions} />
    </>
  );
}
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping: see [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

\_app.tsx (registry imported at app boot):

```
// pages/_app.tsx
import "@/registry";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## Verify

[Verification curl test](/docs/studio/framework-recipe-verification). For Pages Router, run next build && next start, then curl.

## Smoke pass: verify before treating this recipe as ready for use

This recipe is desk-checked against the CI-tested [Node](/docs/studio/framework-recipe-node) and [RSC](/docs/studio/framework-recipe-nextjs-rsc) recipes. It has not yet been verified against a real Pages Router app. Before shipping in production, run:

-   \[ \] Scaffold a fresh Next.js Pages Router project (create-next-app --pages-router).
-   \[ \] Install @contentstack/studio-react (matching the version pinned in the SDK's examples/nextjs-rsc/package.json).
-   \[ \] Copy pages/\[\[...slug\]\].tsx + pages/\_app.tsx + registry.ts from this recipe.
-   \[ \] Wire a known-good Studio project with at least one saved composition matching a known URL.
-   \[ \] Run next build && next start, **NOT next dev**. Dev-mode's per-request recompile is racy for module init order.
-   \[ \] Run the [Verification curl test](/docs/studio/framework-recipe-verification) against a known composition URL. All three assertions must pass.
-   \[ \] Verify with the browser Live Preview: edit the entry in Contentstack and confirm the browser reflects the change after router.replace(router.asPath).

Report deltas from the recipe as GitHub issues so the doc converges on truth.

## Common failures

See [Troubleshooting](/docs/studio/framework-recipe-troubleshooting). Pages-Router-specific quirks: verify SSR with **next build && next start**, not next dev. Dev mode's per-request recompile is racy for module init order.
