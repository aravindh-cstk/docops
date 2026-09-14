---
title: "SSR composition query"
description: "Learn when and how to use server-side rendering for Studio compositions, including the fetchCompositionData API, Next.js App Router, and Remix loader patterns."
url: /studio/ssr-composition-query
---

# SSR composition query

## SSR composition query

Render Studio compositions on the server so the first HTML response already contains the page. This page explains when SSR is worth the trouble and how to wire it up with studioSdk.init(...).fetchCompositionData and the <StudioComponent /> renderer.

## When you actually need SSR

Reach for SSR when one of these is true:

-   **SEO.** Crawlers index the initial HTML response. A client-side rendering (CSR) page that hydrates from JSON ships an empty shell, which hurts ranking for content-heavy compositions.
-   **Social previews.** Open Graph and Twitter card scrapers don't execute JavaScript. The <meta> tags must be in the HTML the server returns. Studio exposes these as SeoMetadata (with pageTitle, pageDescription, openGraphImage, metaProps) on the StudioComponentSpecOptions result.
-   **Slower clients.** Low-end mobile and constrained networks pay a real cost for client-side fetch + hydrate. SSR shifts that work to your server.

If none of the above apply, the CSR path with useCompositionData is simpler. See [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering).

## The SSR API surface

The SSR fetcher is fetchCompositionData on the SDK instance returned by studioSdk.init(userConfig):

```
studioSdk.init(userConfig).fetchCompositionData(
  queryOptions: CompositionQueryForSSRInput,
  options?: CompositionQueryOptions,
): Promise<StudioComponentSpecOptions>
```

Two types matter here:

-   **CompositionQueryForSSRInput**: a CompositionQueryInput ({ compositionUid?, url?, templateContentTypeUid? }) plus a searchQuery: SearchQueryInput. The searchQuery is mandatory because the SDK can't read window.location.search on the server. You have to forward the inbound request's query string explicitly.
-   **StudioComponentSpecOptions**: the object you hand to <StudioComponent />. It contains:

    -   spec: StudioSpec | null
    -   fetchOptions: StudioComponentFetchOptions
    -   hasSpec: boolean: **deprecated.** Not a not-found signal: a miss rejects, so on a resolved call this is always true
    -   hasTemplate: boolean: **deprecated.** Whether data for a connected content type resolved. It is false for every **freeform** composition, so a 404 gated on it 404s every freeform page
    -   seo: SeoMetadata | null: drop into your <head>

CompositionQueryOptions (second arg) lets you pass locale, variantAlias, templateEntryUid, extendQuery, and custom fetchComposition / fetchTemplateEntry callbacks.

## Next.js App Router

```
// app/[[...slug]]/page.tsx
import { StudioComponent, studioSdk } from "@contentstack/studio-react";
import { stack } from "@/lib/contentstack"; // your Delivery SDK instance
import { notFound } from "next/navigation";

// A miss REJECTS — it never resolves with a falsy flag. These three ids mean
// "no page at this URL"; anything else is a real failure and must stay a 5xx,
// or an expired token starts returning 404s. Module scope: built once.
const NOT_FOUND_IDS = new Set([
  "COMPOSITION_NOT_FOUND",
  "COMPOSITION_NOT_FOUND_BY_URL",
  "PREVIEW_ENTRY_NOT_FOUND",
]);

const csStudio = studioSdk.init({
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

  let specOptions;
  try {
    specOptions = await csStudio.fetchCompositionData(
      { url, searchQuery: searchParams },
      { locale: "en-us" },
    );
  } catch (error) {
    if (NOT_FOUND_IDS.has(error?.id)) notFound();
    throw error;
  }

  return <StudioComponent specOptions={specOptions} />;
}

export async function generateMetadata({ params, searchParams }) {
  const url = "/" + (params.slug?.join("/") ?? "");
  // Same rejection applies here. Metadata for a missing page is not an error
  // worth surfacing — the page itself already 404s — so swallow a miss and
  // let anything else propagate.
  let seo;
  try {
    ({ seo } = await csStudio.fetchCompositionData({ url, searchQuery: searchParams }));
  } catch (error) {
    if (!NOT_FOUND_IDS.has(error?.id)) throw error;
  }
  return seo
    ? { title: seo.pageTitle, description: seo.pageDescription, openGraph: { images: [seo.openGraphImage] } }
    : {};
}
```

The page is an async Server Component, so the await happens before any HTML streams. <StudioComponent /> then hydrates on the client and the Studio editing overlay attaches when running inside the builder iframe.

## Remix loader

```
// app/routes/$.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StudioComponent } from "@contentstack/studio-react";
import { csStudio } from "~/lib/studio.server";

const NOT_FOUND_IDS = new Set([
  "COMPOSITION_NOT_FOUND",
  "COMPOSITION_NOT_FOUND_BY_URL",
  "PREVIEW_ENTRY_NOT_FOUND",
]);

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // Same rule as the Next.js sample: a miss rejects, so catch and classify.
  // A `hasSpec` check placed after the await would never fire.
  try {
    const specOptions = await csStudio.fetchCompositionData({
      url: url.pathname,
      searchQuery: url.search, // SearchQueryInput accepts a query string
    });
    return json({ specOptions });
  } catch (error) {
    if (NOT_FOUND_IDS.has(error?.id)) {
      throw new Response("Not Found", { status: 404 });
    }
    throw error; // real failure — let it surface as a 500
  }
}

export default function CatchAll() {
  const { specOptions } = useLoaderData<typeof loader>();
  return <StudioComponent specOptions={specOptions} />;
}
```

SearchQueryInput is defined as Partial<ComposableStudioQueryParams> & Record<string, string|string\[\]|undefined> | URLSearchParams | string, so passing the raw url.search string works.

## Server-side env vars

The SDK doesn't read environment variables directly. You wire your Delivery SDK and UserConfig yourself. For SSR, keep secrets out of bundles:

-   Delivery API key / delivery token can be public. Environment-specific tokens stay server-side.
-   **Management tokens must never leave the server.** Construct the stack SDK in a module that's only imported by server code (\*.server.ts in Remix, files under app/ not marked "use client" in Next.js).
-   Set STUDIO\_COMPOSITION\_CT\_UID, CONTENTSTACK\_DELIVERY\_TOKEN, CONTENTSTACK\_ENVIRONMENT, CONTENTSTACK\_BRANCH per environment. The Studio provisioning step prints these for you.

## Hydration with <StudioComponent />

<StudioComponent /> accepts { specOptions, data? }. On the server it renders the composition tree from specOptions.spec. On the client it rehydrates the same tree and additionally:

-   attaches the Visual Builder overlay when the page is loaded inside the Studio iframe,
-   subscribes to live preview updates so authoring changes reflect without a reload.

Pass the **same** specOptions object the server fetched. Don't re-fetch on the client, or you'll get a hydration mismatch. If you need optional runtime props for registered components, pass them via the data prop (ComposableStudioData\["component\_props"\]).

## See also

-   [CSR vs SSR: choosing a render strategy](/docs/studio/choosing-between-csr-and-ssr-rendering)
-   [Install the Studio SDK](/docs/studio/install-the-studio-sdk)
-   [Install Live Preview](/docs/studio/install-live-preview)
-   [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk)
