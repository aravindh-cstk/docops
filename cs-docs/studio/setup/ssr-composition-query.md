---
title: "SSR Composition Query"
description: "Learn when and how to use server-side rendering for Studio compositions, including the fetchCompositionData API, Next.js App Router, and Remix loader patterns."
url: /studio/ssr-composition-query
uid: blt70fdf1ddfd012ad8
---

# SSR Composition Query

## SSR Composition Query

Render Studio compositions on the server so the first HTML response already contains the page. This page explains when SSR is worth the trouble and how to wire it up with studioSdk.init(...).public.fetchCompositionData and the <StudioComponent /> renderer.

## When You Actually Need SSR

Reach for SSR when one of these is true:

-   **SEO.** Crawlers index the initial HTML response. A CSR page that hydrates from JSON ships an empty shell, which hurts ranking for content-heavy compositions.
-   **Social previews.** Open Graph and Twitter card scrapers don't execute JavaScript. The <meta> tags must be in the HTML the server returns. Studio exposes these as SeoMetadata (with pageTitle, pageDescription, openGraphImage, metaProps) on the StudioComponentSpecOptions result.
-   **Slower clients.** Low-end mobile and constrained networks pay a real cost for client-side fetch + hydrate. SSR shifts that work to your server.

If none of the above apply, the CSR path with useCompositionData is simpler, see [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering).

## The SSR API Surface

The SSR fetcher sits on the **public** branch of the SDK instance that studioSdk.init(userConfig) returns:

```
studioSdk.init(userConfig).public.fetchCompositionData(
  queryOptions: CompositionQueryForSSRInput,
  options?: CompositionQueryOptions,
): Promise<StudioComponentSpecOptions>
```

Two types matter here:

-   **CompositionQueryForSSRInput:** extends CompositionQueryInput ({ compositionUid?, url? }) with a mandatory searchQuery: SearchQueryInput. searchQuery cannot be read from window.location.search on the server, so you must pass it explicitly from the inbound request.
-   **StudioComponentSpecOptions:** the object you pass to <StudioComponent />. It contains:
-   spec: StudioSpec | null
-   fetchOptions: StudioComponentFetchOptions
-   hasSpec: boolean, false when no composition matched; render your 404
-   hasTemplate: boolean, false when the composition has no connected template entry
-   seo: SeoMetadata | null: drop into your <head>

CompositionQueryOptions (second arg) lets you pass locale, variantAlias, templateEntryUid, extendQuery, and custom fetchComposition / fetchTemplateEntry callbacks.

## Next.js App Router

```
// app/[[...slug]]/page.tsx
import { StudioComponent, studioSdk } from "@contentstack/studio-react";
import { stack } from "@/lib/contentstack"; // your Delivery SDK instance
import { notFound } from "next/navigation";

const sdk = studioSdk.init({
  stackSdk: stack,
  contentTypeUid: process.env.STUDIO_COMPOSITION_CT_UID!,
  // ...rest of UserConfig
});

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const url = "/" + (params.slug?.join("/") ?? "");

  const specOptions = await sdk.fetchCompositionData(
    { url, searchQuery: searchParams },
    { locale: "en-us" },
  );

  if (!specOptions.hasSpec || !specOptions.hasTemplate) notFound();

  return <StudioComponent specOptions={specOptions} />;
}

export async function generateMetadata({ params, searchParams }) {
  const url = "/" + (params.slug?.join("/") ?? "");
  const { seo } = await sdk.fetchCompositionData({ url, searchQuery: searchParams });
  return seo
    ? { title: seo.pageTitle, description: seo.pageDescription, openGraph: { images: [seo.openGraphImage] } }
    : {};
}
```

The page is an async Server Component, so the await happens before any HTML streams. <StudioComponent /> then hydrates on the client and the Studio editing overlay attaches when running inside the builder iframe.

## Remix Loader

```
// app/routes/$.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StudioComponent } from "@contentstack/studio-react";
import { sdk } from "~/lib/studio.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const specOptions = await sdk.fetchCompositionData({
    url: url.pathname,
    searchQuery: url.search, // SearchQueryInput accepts a query string
  });
  if (!specOptions.hasSpec) throw new Response("Not Found", { status: 404 });
  return json({ specOptions });
}

export default function CatchAll() {
  const { specOptions } = useLoaderData<typeof loader>();
  return <StudioComponent specOptions={specOptions} />;
}
```

SearchQueryInput accepts Partial<ComposableStudioQueryParams> & Record<string, string|string\[\]|undefined> | URLSearchParams | string, so passing the raw url.search string works.

## Server-Side Env Vars

The SDK doesn't read environment variables directly: you wire your Delivery SDK and UserConfig yourself. For SSR, keep secrets out of bundles:

-   Delivery API key / delivery token can be public; environment-specific tokens stay server-side.
-   **Management tokens must never leave the server.** Construct the stack SDK in a module that's only imported by server code (\*.server.ts in Remix, files under app/ not marked "use client" in Next.js).
-   Set STUDIO\_COMPOSITION\_CT\_UID, CONTENTSTACK\_DELIVERY\_TOKEN, CONTENTSTACK\_ENVIRONMENT, CONTENTSTACK\_BRANCH per environment. The Studio provisioning step prints these for you.

## Hydration with <StudioComponent />

<StudioComponent /> accepts { specOptions, data? }. On the server it renders the composition tree from specOptions.spec; on the client it rehydrates the same tree and additionally:

-   attaches the Visual Builder overlay when the page loads inside the Studio iframe,
-   subscribes to live preview updates so authoring changes reflect without a reload.

A hydration mismatch occurs when the server-rendered HTML and the client's initial render disagree, for example, if the server fetched with one locale and the client defaulted to another. Mismatches cause React to discard the server HTML and re-render from scratch, producing event listener failures and layout shifts. To avoid this, pass the **same** specOptions object the server fetched; do not re-fetch on the client. If you need optional runtime props for registered components, pass them via the data prop (ComposableStudioData\["component\_props"\]).

## See Also

-   [CSR vs SSR: choosing a render strategy](/docs/studio/choosing-between-csr-and-ssr-rendering)
-   [Install the Studio SDK](/docs/studio/install-the-studio-sdk)
-   [Install Live Preview](/docs/studio/install-live-preview)
-   [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk)
