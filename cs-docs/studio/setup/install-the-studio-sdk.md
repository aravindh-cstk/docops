---
title: "Install the Studio SDK"
description: "Step-by-step guide to installing and configuring @contentstack/studio-react, including SDK initialization, component registration, composition fetching, and canvas mounting."
url: /studio/install-the-studio-sdk
uid: bltc3346bb7060b4852
---

# Install the Studio SDK

## Install the Studio SDK

The Studio SDK is the visual editor bridge — studioSdk, <StudioCanvas />, <StudioComponent />, plus the hooks and registration APIs you'll use day-to-day.

This page is the self-contained chapter for the SDK. Install at the top; everything else you need (registration, fetching, mounting, troubleshooting) follows in the order you actually do them.

**On this page:** - [Prerequisites](#prerequisites)

1.  [Install](#1-install)
2.  [Initialize studioSdk](#2-initialize-studiosdk)
3.  [Register your components](#3-register-your-components)
4.  [Fetch a composition with useCompositionData](#4-fetch-a-composition-with-usecompositiondata)
5.  [Mount <StudioCanvas /> and <StudioComponent />](#5-mount-ltstudiocanvas-gt-and-ltstudiocomponent-gt)
6.  [Common patterns](#6-common-patterns)
7.  [Troubleshoot](#7-troubleshoot)

---

## Prerequisites

@contentstack/studio-react builds on the two SDKs from the earlier steps in this chapter. Complete both before continuing:

-   [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk) — @contentstack/delivery-sdk
-   [Install Live Preview](/docs/studio/install-live-preview) — @contentstack/live-preview-utils

---

## 1\. Install

```
npm install @contentstack/studio-react
```

@contentstack/studio-react depends on @contentstack/delivery-sdk and @contentstack/live-preview-utils being present. If you skipped the earlier steps in this chapter, complete [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk) and [Install Live Preview](/docs/studio/install-live-preview) first.

## 2\. Initialize studioSdk

Add the init call to src/lib/contentstack.ts so it runs once, at app boot, alongside Delivery + Live Preview:

```
import Contentstack from "@contentstack/delivery-sdk";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { studioSdk } from "@contentstack/studio-react";

export const stack = Contentstack.stack({ /* … */ });

ContentstackLivePreview.init({ /* … */ });

export const csStudio = studioSdk.init({
  stackSdk:       stack,
  // contentTypeUid: "compositions",   // set once you've created a Studio project
});

export { ContentstackLivePreview, studioSdk };
```

### studioSdk.init options

| Option | Required | What it does |
| --- | --- | --- |
| stackSdk | ✅ | The Delivery SDK instance you created earlier. Studio reads content through it. |
| contentTypeUid | once you have a project | The content type Studio writes composition records into. Set this once your Studio project is created (usually "compositions"). |

Init is **side-effect** — it registers Studio's internal components and wires up the messaging bridge for the canvas iframe. Import @/lib/contentstack somewhere in your app shell so the init runs.

## 3\. Register your components

Studio's palette in the canvas needs to know about **your** components. Without registering, authors can only drop Studio's defaults.

### registerComponent — single

```
import { registerComponent } from "@contentstack/studio-react";
import { Button } from "@/components/Button";
import buttonIcon from "@/assets/icons/button.svg";

registerComponent({
  type:        "Button",
  displayName: "Button",
  thumbnailUrl:        buttonIcon,
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

### registerComponents — many at once

```
import { registerComponents } from "@contentstack/studio-react";

registerComponents([
  { type: "Button",  displayName: "Button",   component: Button,  thumbnailUrl: …, props: { … } },
  { type: "Card",    displayName: "Card",     component: Card,    thumbnailUrl: …, props: { … } },
  { type: "Hero",    displayName: "Hero",     component: Hero,    thumbnailUrl: …, props: { … } },
]);
```

### registerLazyComponent ��� code-split a component

For large component libraries, register a loader instead of the component itself. Studio holds the schema (thumbnailUrl, displayName, props) eagerly so it can render the palette tile; the actual component code loads only when an author drops it or a visitor's page renders it.

```
import { registerLazyComponent } from "@contentstack/studio-react";
import heroIcon from "@/assets/icons/hero.svg";

registerLazyComponent(
  {
    type:        "Hero",
    displayName: "Hero",
    thumbnailUrl:        heroIcon,
    props: {
      title:    { type: "string",   defaultValue: "Welcome" },
      subtitle: { type: "string",   defaultValue: "" },
      image:    { type: "imageurl", displayName: "Hero image" },
    },
  },
  () => import("@/components/Hero").then((m) => m.Hero),
);
```

Under the hood Studio wraps the loader in React.lazy + <Suspense fallback={null}>. Your bundler splits the code; the schema is always available.

When to reach for it: - You have a large component library and bundle size matters - A component has heavy dependencies (chart libs, rich-text editors) you don't want in the initial bundle - You want per-route code splitting and Studio's canvas to play nicely

Eager registerComponent is the right default — use registerLazyComponent when bundle size becomes a real concern.

For the full prop-schema shape (text, image, link, color, slot, etc.), see [Component schema](/docs/studio/component-schema-prop-types).

## 4\. Fetch a composition with useCompositionData

useCompositionData is the hook your templates and pages use to fetch a composition's spec from Contentstack.

### Basic shape

```
import { useCompositionData } from "@contentstack/studio-react";

function BlogPostPage({ slug }) {
  const { specOptions, isLoading, error, refetchSpec } = useCompositionData(
    { url: `/blog/${slug}` },   // query: how to find the composition
  );

  if (isLoading) return <Loading />;
  if (error)     return <Error message={error instanceof Error ? error.message : String(error)} />;

  return <StudioComponent specOptions={specOptions} />;
}
```

### Query shapes — five accepted forms

How you tell Studio which composition to fetch:

| Shape | Use when |
| --- | --- |
| { compositionUid } | You already know the composition's UID — fastest. |
| { url } | You only have the URL pattern. Works, but processes all compositions to find a match — slower. |
| { compositionUid, url } | UID is used for the fetch; URL is preserved for diagnostics and iframe context. |
| { templateContentTypeUid } | Fetch by content type — returns the first matching composition (limit 1). |
| { url, templateContentTypeUid } | Use the content type for the composition lookup; URL is preserved for context. |

The priority resolution: compositionUid > templateContentTypeUid > url.

### Options — locale, variantAlias, templateEntryUid

```
const { specOptions, isLoading } = useCompositionData(
  { compositionUid: "marketing-hero" },
  {
    locale:           "fr",                          // override default locale
    variantAlias:     "winter-sale",                 // fetch a specific variant
    templateEntryUid: "blt456",                      // exact entry from the connected CT
    extendQuery: {
      blog_post: { includeReferences: ["author"] },  // per-CT query extensions
    },
  },
);
```

| Option | What it does |
| --- | --- |
| **locale** | Override the default stack locale for this query. Auto-fallback via Contentstack's native fallback. |
| **variantAlias** | Fetch a specific variant (e.g. "winter-sale"). |
| **templateEntryUid** | Fetch this exact entry from the connected content type, instead of resolving by URL or grabbing the first entry. **Priority: templateEntryUid > url > first entry.** |
| **extendQuery** | Per-CT additions — includeReferences, only field projection. |
| **fetchComposition** | Per-query override that wraps or replaces the default composition fetch. |
| **fetchTemplateEntry** | Per-query override for the template entry fetch. |

### What it returns

| Field | Type | Meaning |
| --- | --- | --- |
| specOptions | object | null | The full rendering payload — pass to <StudioComponent specOptions={specOptions} />. Contains spec, fetchOptions, hasSpec, hasTemplate, seo. |
| isLoading | boolean | True while fetching |
| error | unknown | null | Set if the fetch failed |
| refetchSpec | () => void | Re-run the fetch (e.g. after a content edit) |
| refetchData | () => void | Re-fetch only the data layer (entries) without re-fetching the spec |

Custom fetchers (fetchComposition, fetchTemplateEntry) are advanced — they let you intercept Studio's content fetches to wrap, cache, or replace. The default works for almost everything.

### Server-side fetch (SSR / RSC / SSG)

useCompositionData is a hook — client-only. For server-side rendering, use csStudio.fetchCompositionData(queryOptions, options) instead:

```
import { csStudio } from "@/lib/contentstack";   // the initialized instance from studioSdk.init(...)

// Server-side (e.g. in a Server Component or getServerSideProps)
const specOptions = await csStudio.fetchCompositionData({
  url:         "/blog/ai-101",
  searchQuery: requestQueryString,   // required — see why below
});

// Pass to client component
<StudioComponent specOptions={specOptions} />
```

The searchQuery argument is **required on the server** because there's no window.location.search to read. Studio uses it to detect whether the request is happening inside Studio's iframe and to honor locale / variant / preview overrides Studio passes via URL params.

For the full SSR / RSC / SSG patterns including framework-specific code, see [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering).

## 5\. Mount <StudioCanvas /> and <StudioComponent />

These are NOT interchangeable. They go on different routes.

| Component | Route | Purpose |
| --- | --- | --- |
| **<StudioCanvas />** | A single dedicated canvas route in your app (e.g. /canvas) | Where Studio previews **Sections** in isolation |
| **<StudioComponent />** | Your real page routes (/blog/\[slug\], /contact-us, etc.) | Renders **templates** as actual pages for visitors |

A typical app ships **both**.

### Mount <StudioCanvas /> on the canvas route

```
// app/canvas/page.tsx (Next.js App Router)
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

That's it. Studio drives the rest via URL params on the iframe.

Once mounted, head to Studio → Project Settings → Configuration and set **Canvas URL** to this route's path (covered in [Section preview route](/docs/studio/section-preview-route)).

### Mount <StudioComponent /> on your template preview routes

```
// app/blog/[slug]/page.tsx (Next.js App Router)
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export default function BlogPostPage({ params }) {
  const { specOptions, isLoading, error } = useCompositionData(
    { url: `/blog/${params.slug}` },
  );

  if (isLoading) return <Loading />;
  if (error)     return <Error message={error instanceof Error ? error.message : String(error)} />;
  if (!specOptions?.spec) return <NotFound />;  // hook returns specOptions: ... | null
  return <StudioComponent specOptions={specOptions} />;
}
```

You'll do this for each route that renders a Studio-built template — /blog/\[slug\], /products/\[sku\], /contact-us, etc.

If the URL pattern doesn't match a composition, you'll see an in-product "Template did not load" error with a clear message. See [Troubleshoot](#7-troubleshoot).

## 6\. Common patterns

### Loading + error states

```
const { specOptions, isLoading, error } = useCompositionData({ url });

if (isLoading) return <Skeleton />;
if (error)     return <Error message={error instanceof Error ? error.message : String(error)} retry={refetchSpec} />;
if (!specOptions?.spec) return <NotFound />;
return <StudioComponent specOptions={specOptions} />;
```

### Refetch on a content update

```
useEffect(() => {
  ContentstackLivePreview.onEntryChange(refetchSpec);
}, [refetchSpec]);
```

Wire Live Preview's onEntryChange to the hook's refetchSpec so the page re-renders when authors save edits.

### Locale switching

```
const [locale, setLocale] = useState("en-us");
const { specOptions, isLoading } = useCompositionData(
  { url },
  { locale },
);

return (
  <>
    <button onClick={() => setLocale("fr")}>FR</button>
    {!isLoading && specOptions?.spec && <StudioComponent specOptions={specOptions} />}
  </>
);
```

### Variant preview (Personalization)

```
const { specOptions } = useCompositionData(
  { compositionUid: "marketing-hero" },
  { variantAlias: "winter-sale" },
);
```

### Per-entry preview

When a single linked template needs to preview a specific entry (rather than the first one):

```
const { specOptions } = useCompositionData(
  { templateContentTypeUid: "blog_post" },
  { templateEntryUid: "blt456" },
);
```

## 7\. Troubleshoot

| Symptom | What to check |
| --- | --- |
| **"No Canvas URL Found"** in Studio when opening a section | Project Settings → Configuration → set the Canvas URL field |
| **"Environment Not Configured"** | Pick an Environment + Language in Project Configuration |
| **"Template did not load"** when opening a linked template | The composition's URL pattern doesn't match a route on your site. Either fix the pattern or add the route. |
| Canvas loads blank | Your canvas route exists but doesn't mount <StudioCanvas /> — add the snippet from step 5 |
| 401 fetching content | Stack API Key or Delivery Token wrong — copy them again from Stack → Settings → Tokens |
| Preview doesn't update in real time | Live Preview not initialised, or onEntryChange not wired — see [Install Live Preview](/docs/studio/install-live-preview) |
| Components don't appear in the palette | Register them via registerComponent / registerComponents _before_ the canvas iframe loads |
| Lazy components flash blank | <Suspense fallback={null}> is the default — provide your own fallback if needed |

For the full diagnostic tree, see [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues).

## Speed it up with an LLM

```
curl -fsSL {{STUDIO_DOCS_BASE_URL}}/install.sh | sh
```

Then: _"install Studio in this project"_.

## Next

The SDK side is done. The Studio web app side comes next.

→ [Create a Studio project](/docs/studio/create-a-studio-project)
