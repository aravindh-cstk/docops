---
title: "Troubleshoot Framework Recipes"
description: "Every failure below is one we've actually hit. Cross-reference the five universal rules. Most SSR failures reduce to violating one of them."
url: /studio/framework-recipe-troubleshooting
---

# Troubleshoot Framework Recipes

## Framework-recipe troubleshooting: SSR failures by symptom

Every failure below is one we've actually hit. Cross-reference the [five universal rules](/docs/studio/framework-recipes#five-universal-rules): most SSR failures reduce to violating one of them.

---

## Attempted to call X() from the server

**Symptom:** the server bundle throws at render time with a name like useState, useEffect, or a Studio internal (useBoundValue, useResolvedSpec).

**Cause:** a client-only API landed in the server graph. Pre-#871 SDK versions had dist entries that could pull client-side hooks into the server bundle via a subpath import. Fixed in the dist-ESM restructure (#871, #874).

**Fix:** upgrade @contentstack/studio-react to the version that shipped the RSC recipe (check the CHANGELOG for dist-esm fixes referenced in the RSC example app). If you're pinned to an older version, temporarily switch to the [Node recipe](/docs/studio/framework-recipe-node) which doesn't rely on the RSC dist entry.

---

## Internal components missing

**Symptom:** render throws with a message about missing built-ins (Page, Section, Repeater not found in the registry). Sometimes surfaces as a generic "component \_page not registered."

**Cause:** [Rule 2](/docs/studio/framework-recipes#rule-2-root-import-required) violation. A server bundle or client bundle imported a subpath (@contentstack/studio-react/rsc or a hand-picked type) but never imported the package root. Built-ins register on first root import. Without one, the registry is empty.

**Fix:** add import "@contentstack/studio-react"; at the top of every registration module. Verify each module graph has at least one root import:

```
# Grep both server and client entry files.
grep -r 'from "@contentstack/studio-react"' src/ | grep -v '/rsc"' | head
```

Every top-level entry (server.tsx, app/layout.tsx, entry.server.tsx, \_app.tsx, an island component) must contain at least one match.

---

## Unstyled first paint (FOUC)

**Symptom:** the composition renders correctly but flashes unstyled for a beat before design-panel tokens apply. curl shows the composition HTML but no <style data-studio-ssr> in <head>.

**Cause:** the styles call is missing or placed after the component render. getSSRStyleTags(specOptions.spec) or <StudioServerStyles> must land in <head> or before <StudioComponent /> in the render output.

**Fix per host:**

-   **Node**: string-concat getSSRStyleTags(...) into the <head> template literal before the body render.
-   **Next App Router (main entry)**: emit inside the client wrapper before <StudioComponent />.
-   **Next App Router (RSC)**: render <StudioServerStyles specOptions={...} /> before <StudioComponent /> inside the server component.
-   **Next Pages Router**: pass styleTags from getServerSideProps and render via dangerouslySetInnerHTML inside <Head>, or use \_document.tsx for a global mount.
-   **Remix**: render inside the route component before <StudioComponent /> (or into <head> via a top-level Links export).
-   **Astro**: <Fragment set:html={styleTags} /> inside the frontmatter head slot.
-   **Gatsby**: emit inside the Head FC via dangerouslySetInnerHTML.

---

## Invalid hook call / hooks return null

**Symptom:** render works on server, blows up on hydration with React's classic "Invalid hook call" error. Sometimes shows as hooks returning null unexpectedly.

**Cause:** [Rule 1](/docs/studio/framework-recipes#rule-1-one-react-copy) violation, two React copies in the bundle. Common triggers: an SDK-local React from a node\_modules hoisting mismatch (pnpm without shamefully-hoist, workspaces with divergent versions).

**Fix:**

```
npm ls react
```

Exactly one line. If you see two:

-   npm dedupe for npm workspaces.
-   pnpm install --shamefully-hoist=false and add "react" to "peerDependenciesMeta.optional" on any offending package.
-   Yarn Berry: nohoist on Studio SDK, verify with yarn why react.

Verify the fix stuck: grep -r '"react":' node\_modules/@contentstack/studio-react/package.json, should show React as a peer, not a direct dep.

---

## Empty <main> under raw Node

**Symptom:** the response has correct <head>, correct style tag, correct metadata, but the body wrapper is empty. renderToString(<StudioComponent />) returns "".

**Cause pre-fix:** SDK older than the dist-ESM fix (#874) with a raw Node bundling issue where the server-safe export chain returned a stub. Fixed by upgrade OR by bundling the server (rollup/webpack/vite-node) so the dist resolution works uniformly.

**Cause post-fix:** the composition matched but is genuinely empty in Studio: no components dropped, or the URL resolved to a fallback composition with no children.

**Fix:**

1.  Upgrade @contentstack/studio-react past the dist-ESM fix.
2.  If still empty: open the composition in Studio at that URL. If there are no children on the canvas, this is a content problem, not an SSR bug.
3.  If the composition has children but SSR still returns empty: bundle the server with esbuild/rollup instead of raw ts-node.

---

## 500 instead of 404 on a URL with no composition

**Symptom:** an unclaimed URL (or a bad slug under a connected template) returns a 500 / the framework's error page instead of your 404. The guard in the route (if (!specOptions.hasSpec) …) appears never to run.

**Cause:** sdk.fetchCompositionData **throws** on a miss. It does not resolve with hasSpec: false. The await rejects before any guard below it executes. The recipes on this site show the happy-path fetch only. See [Rule 5](/docs/studio/framework-recipes#rule-5-wrap-the-fetch-or-every-unmatched-url-is-a-500).

It throws a ComposableStudioError carrying **.id** (not error\_code, not code). Three ids mean "no composition here":

| .id | Stage | When |
| --- | --- | --- |
| COMPOSITION\_NOT\_FOUND | Identifier lookup | Fetched by compositionUid and nothing matched |
| COMPOSITION\_NOT\_FOUND\_BY\_URL | Pattern match | Fetched by url and no pattern matched |
| PREVIEW\_ENTRY\_NOT\_FOUND | Entry lookup | A pattern matched, but no entry satisfies it, the normal outcome for a bad slug under a content\_type\_url\_pattern template |

Everything else (NETWORK\_ERROR, AUTHENTICATION\_ERROR, SERVER\_ERROR, UI\_PARSING\_ERROR, and so on) is real breakage and must stay a 500. err.details.troubleshootingInfo carries { cause, fix } pairs for the specific failure. Read it first.

**Fix:** wrap the fetch, classify known not-found ids as 404, and **rethrow everything else** so Content Delivery API (CDA) outages and expired tokens stay 500s. Canonical helper + per-framework wiring: [configure-csr-vs-ssr, fetchCompositionData does not return "not found"](https://studio-documentation.contentstackapps.com/prompts/configure-csr-vs-ssr.html#resolve-composition-helper). Test with both URL shapes: handling only the first id still 500s on every mistyped slug.

---

## Hydration mismatch

**Symptom:** the browser console shows React's "Hydration failed" warning. Parts of the page snap to a different render on client mount.

**Cause:** [Rule 3](/docs/studio/framework-recipes#rule-3-never-mix-server-client-fetching-on-the-same-route) violation: the route did both sdk.fetchCompositionData (server) and useCompositionData (client). The fetches happen at different times, so resolvedReferences, current date, personalization, or Live Preview state diverge between server and client.

**Fix:** pick one path per route. Server routes pass the fetched specOptions down through the client boundary as a prop. Do not re-fetch on the client. If you need reactivity for Live Preview, author a customer client-boundary component (customers typically name it LivePreviewBridge) using @contentstack/live-preview-utils's ContentstackLivePreview.onEntryChange(...). It calls the framework's refresh primitive (router.refresh() / revalidator.revalidate() / window.location.reload()): it re-renders the server route, it doesn't re-fetch client-side. Full pattern: [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7. The SDK does not export a LivePreviewBridge component.

---

## Metadata gaps (missing <title> / OG tags)

**Symptom:** curl shows the composition body correctly, but <title> is empty or generic. OG tags absent.

**Cause:** the composition's entry doesn't have SEO fields authored. This is a **content-modeling issue, not an integration bug.**

**Fix:**

1.  Open the entry in Contentstack. If there's no SEO group / no title, description, og\_image fields, extend the content type.
2.  If the SEO fields exist but are empty on this entry, populate them.
3.  getCompositionMetadata reads from specOptions.metadata. Verify the SDK exposed the fields you expected: console.log(specOptions.metadata) on the server.

Only after the entry has SEO data will renderMetadataToHtml() produce populated tags.

---

## Live Preview not updating

**Symptom:** editing in Live Preview edits the CMS but the browser tab doesn't reflect the change.

**Cause:** the customer-authored LivePreviewBridge client boundary (from @contentstack/live-preview-utils) is missing, misplaced, or wired to the wrong refresh callback for your framework. Note: LivePreviewBridge is a customer-authored component name, not an SDK export. See [install-live-preview](https://studio-documentation.contentstackapps.com/prompts/install-live-preview.html), 7.

**Fix per host:**

-   **Next App Router**: router.refresh() inside useRouter() from next/navigation.
-   **Next Pages Router**: router.replace(router.asPath) from next/router.
-   **Remix**: useRevalidator().revalidate().
-   **Astro**: window.location.reload() (no in-app router).
-   **Gatsby**: window.location.reload() for DSG. SSR functions can use their own refetch.
-   **Plain Node**: window.location.reload().

Make sure the bridge is inside a "use client" boundary in RSC/App-Router setups, mounted once at layout level, and wired to the correct callback for the host.

---

## Cannot find module for @contentstack/studio-react/rsc

**Symptom:** RSC recipe throws at build time or first request.

**Cause:** the SDK version doesn't include the /rsc entry point. Predates the RSC ship.

**Fix:** upgrade to the version referenced by examples/nextjs-rsc/package.json in the SDK repo. Or fall back to the [main-entry client-component SSR path](/docs/studio/framework-recipe-nextjs-app-router), which works on older SDK versions.

---

## Quick diagnostic script

If you don't know which failure mode applies, run this against a known URL:

```
URL=http://localhost:3000/some-known-path
curl -s "$URL" > /tmp/studio-ssr.html

echo "== body content =="
grep -c '<main' /tmp/studio-ssr.html    # 1+ = matched a route
grep -oE '<h[1-6][^>]*>[^<]+' /tmp/studio-ssr.html | head -5

echo "== styles =="
grep -c 'data-studio-ssr' /tmp/studio-ssr.html   # 1 = styles injected
grep -c '\-\-token-' /tmp/studio-ssr.html         # 1+ = tokens present

echo "== metadata =="
grep -oE '<title>[^<]+' /tmp/studio-ssr.html
grep -c 'og:image' /tmp/studio-ssr.html
```

-   If all three sections are populated, SSR is working. Investigate whatever downstream issue brought you here.
-   If the body is empty but styles and metadata are present, the composition is empty on this URL (a content problem, not SSR).
-   If the styles are missing, follow the FOUC path.
-   If the metadata is missing, follow the SEO-fields-not-authored path.
-   If the body has data-cs-defer-builtin placeholders, the SDK is out of date. Upgrade it.

---

### TypeError: Cannot read properties of null (reading 'hasOwnProperty') from @contentstack/json-rte-serializer in Node

**Symptom:** any SSR path that converts HTML into JSON RTE (or vice-versa) using @contentstack/json-rte-serializer throws deep inside the library on the first call.

**Cause:** the serializer's htmlToJson expects a **real DOM HTMLElement**, not an HTML string. In a browser you'd pass new DOMParser().parseFromString(html, 'text/html').body. In Node there is no DOMParser in the global scope, so passing a string returns null and the next hop crashes on the null.

**Fix:** in Node/SSR contexts, parse the HTML through jsdom first and pass the resulting body element:

```
import { htmlToJson, jsonToHtml } from '@contentstack/json-rte-serializer'
import { JSDOM } from 'jsdom'

function htmlStringToJsonRte(html: string) {
  const dom = new JSDOM(html)
  const body = dom.window.document.querySelector('body')!
  return htmlToJson(body as unknown as HTMLElement)
}

// jsonToHtml is symmetric — takes JSON RTE, returns an HTML string. No DOM needed.
const html = jsonToHtml(rte)
```

Package requirements: npm install --save-dev jsdom @types/jsdom.

**Where this matters:** the import-content skill uses this exact pattern in its Node reproducer (scripts/verify-import-preview.ts). A customer running the same import path in their build pipeline hits this immediately. Consider baking the wrapper into a shared helper on the customer side rather than repeating the JSDOM(...) boilerplate.

## See also

-   [Framework recipes: index](/docs/studio/framework-recipes).
-   [Verification](/docs/studio/framework-recipe-verification): the curl test contract every recipe passes.
-   [troubleshoot-ssr-rendering](https://studio-documentation.contentstackapps.com/prompts/troubleshoot-ssr-rendering.html): the SSR-specific troubleshooting skill.
