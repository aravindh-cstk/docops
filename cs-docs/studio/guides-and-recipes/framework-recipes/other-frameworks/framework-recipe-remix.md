---
title: "Framework Recipe: Remix and React Router 7"
description: "loader() fetches, entry.server.tsx injects styles, and meta() handles metadata."
url: /studio/framework-recipe-remix
uid: blt1d2e2ba3707168ac
---

# Framework Recipe: Remix and React Router 7

## Framework recipe: Remix / React Router 7

> **Recipe maturity: community-verified.** This recipe is adapted from the canonical [Node SSR](/docs/studio/framework-recipe-node) + [Next.js App Router](/docs/studio/framework-recipe-nextjs-app-router) recipes (both CI-tested) and covers the three-call contract + five universal rules from [Framework recipes index](/docs/studio/framework-recipes). It is **not** exercised in the SDK repo's CI. Production users on Remix have reported it working. If you hit a snag, cross-reference the Node recipe (whose SSR shape Remix's loader() most closely resembles) and file an issue.

loader() fetches. entry.server.tsx injects styles. meta() handles metadata.

> **Verified in-repo:** smoke-tested against the Studio Documentation Contentstack project (Remix 2.14 on Vite). curl /blog/welcome-to-studio returns 200 OK, 23 KB composition body, <style data-studio-ssr> with 360 \--token-\* properties, populated <title>, zero data-cs-defer-builtin placeholders.
> 
> remix-serve reads PORT from env, not the \-p flag. Set env vars before starting: PORT=3000 remix-serve build/server/index.js (or use dotenv-cli).

Read [Framework recipes: SSR integration](/docs/studio/framework-recipes) first.

## The recipe

```
// app/routes/$.tsx  — Remix catch-all
import { LoaderFunctionArgs, MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { StudioComponent, getSSRStyleTags, getCompositionMetadata } from "@contentstack/studio-react";
import { sdk } from "~/lib/studio.server";
import "~/registry";                     // Rule 2

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const specOptions = await sdk.fetchCompositionData(
    { url: url.pathname, searchQuery: url.searchParams },
    { locale: "en-us" },
  );
  if (!specOptions?.spec) throw new Response("Not found", { status: 404 });

  return json({
    specOptions,
    styleTags: getSSRStyleTags(specOptions.spec),
    metadata: getCompositionMetadata(specOptions, { baseUrl: url.origin }),
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Not found" }];
  return [
    { title: data.metadata.title },
    { name: "description", content: data.metadata.description },
    ...(data.metadata.ogImage ? [{ property: "og:image", content: data.metadata.ogImage }] : []),
    ...(data.metadata.canonical ? [{ tagName: "link", rel: "canonical", href: data.metadata.canonical }] : []),
  ];
};

export default function Page() {
  const { specOptions, styleTags } = useLoaderData<typeof loader>();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <StudioComponent specOptions={specOptions} />
    </>
  );
}
```

> **Not-found handling is not shown here.** This recipe is the CI-tested happy path. fetchCompositionData **throws** when no composition matches, so as written an unclaimed URL returns a 500, not a 404. Wrap it before shipping. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500) and the canonical [resolveComposition](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper) helper.

Registry: Remix's server bundle picks it up when it's imported from route modules. Also import it in entry.client.tsx for the client bundle.

## Server bundle secrets

If your registry file imports server-only SDKs, name it registry.server.ts. Remix strips .server.\* files from the client bundle automatically. Then have a registry.ts that re-exports only what the client needs.

## Smoke pass: verify before treating this recipe as ready for real use

This recipe is desk-checked against the CI-tested [Node](/docs/studio/framework-recipe-node) recipe. It has not yet been verified against a real Remix app. Before shipping:

-   \[ \] Scaffold a fresh Remix or React Router 7 project.
-   \[ \] Install @contentstack/studio-react (matching the SDK's examples/nextjs-rsc/package.json version).
-   \[ \] Copy app/routes/$.tsx + registry.server.ts + registry.ts from this recipe.
-   \[ \] Wire a known-good Studio project with at least one saved composition matching a known URL.
-   \[ \] Run npx remix dev (or the React Router 7 equivalent).
-   \[ \] Run the [Verification curl test](/docs/studio/framework-recipe-verification) against a known composition URL. All three assertions must pass.
-   \[ \] Verify Live Preview reactivity: author a customer client component (e.g. LivePreviewBridge) using @contentstack/live-preview-utils ContentstackLivePreview.onEntryChange(...) wired to Remix's useRevalidator().revalidate(). Edit the entry, confirm the browser reflects the change without full reload. Full pattern: [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7.
-   \[ \] Verify server bundle secrets: run npx remix build && grep -r 'CONTENTSTACK\_' build/client. Should return nothing. .server.\* naming keeps secrets out of the client bundle.

Report deltas as GitHub issues so the doc converges on truth.

## Verify

[Verification curl test](/docs/studio/framework-recipe-verification). npx remix dev and curl any URL that maps to a composition.
