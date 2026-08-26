---
title: "Managing Multiple Locales at Scale"
description: "Learn how to resolve, configure, and scale locale handling in Contentstack Studio, including fallback chains, region-specific compositions, and patterns to avoid."
url: /studio/managing-multiple-locales-at-scale
uid: bltb61ac29b5a9aacb7
---

# Managing Multiple Locales at Scale

## Managing Multiple Locales at Scale

A single-locale site is straightforward: set the project's default Language, every binding resolves against the entry in that locale, done. The story changes when you ship 5, 10, 25 locales with different launch dates, fallback chains, region-specific compositions, and different content per locale.

## The Model

Studio resolves the locale for every binding in this priority order (highest wins):

1.  **Studio iframe override:** when an editor selects a locale in the Studio canvas navbar, the SDK applies it to fetches happening inside the iframe (handled internally by Studio + the SDK; your code does not set or read this). User intent wins.
2.  **Per-query option:** sdk.fetchCompositionData({ locale: "fr-fr", … }) overrides the default. This is the recommended way to carry locale into Studio fetches on visitor routes.
3.  **Project default Language:** what you set in [configure-studio](/docs/studio/manually-configuring-the-studio-web-app).

Layer 1 is editor-only. Layers 2-3 are what visitors hit. **Resolve the locale before the SDK fetch:** read it from your routing layer (path segment, subdomain, cookie, accept-language header, etc.), then pass it explicitly as the locale query option. Don't try to encode it inside the Studio URL pattern.

## Recommended Pattern

### Resolve locale from your routing layer and pass it to the SDK

Pick the locale in your app's routing/middleware layer (path segment, subdomain, cookie, Accept-Language, etc.), then forward it explicitly to the SDK fetch:

```
// e.g. Next.js App Router — path segment carries the locale
export default async function Page({ params }) {
  const locale = params.locale;                              // "fr-fr"
  const url = "/" + (params.slug ?? []).join("/");           // path without locale prefix
  const specOptions = await sdk.fetchCompositionData(
    { url },
    { locale },                                              // ← explicit override
  );
  return <StudioRouteClient specOptions={specOptions} />;
}
```

Why this beats encoding locale inside the Studio URL pattern:

-   **Routing-layer ownership.** Your app already has a locale router (i18n middleware, subdomain, etc.). Reusing that source-of-truth is cleaner than duplicating the resolution inside the Studio pattern.
-   **Per-locale caching.** Different routing-layer URLs (path / subdomain / cookie + cache key) already produce separate CDN cache entries, so locale-aware caching works without involving Studio.
-   **Pattern stability.** Your Studio URL pattern stays focused on the _content_ shape (e.g. /blog/{{entry.slug}}); the locale dimension is orthogonal and lives in routing.
-   **Avoids the editor vs. visitor split.** Studio's editor preview already picks locale via its navbar (Layer 1 above); having a separate visitor mechanism that doesn't encode locale into the Studio pattern keeps preview and visitor render aligned.

### Fallback locale chains

Contentstack supports per-locale fallback\_locale. Studio honors the chain. Configure at Stack, Settings, Languages: each locale has a fallback (e.g. fr-ca falls back to fr-fr falls back to en-us).

What this gives you: if an entry isn't translated to fr-ca yet, Studio resolves bindings against the fr-fr version automatically. Authors don't see broken pages; they see French content until Canadian-French is ready.

**Pitfall:** make sure the chain ends at a locale that's _always_ translated (your default). An unterminated chain renders empty fields.

### Region-specific compositions

When the **layout itself** needs to differ per region (not just the content), don't fork templates per locale. Instead:

-   Build ONE template with a Condition Block that branches on the entry's \_locale field, OR
-   Use [variant aliases](/docs/studio/variant-aliases-deep-dive), a per-region variant of the entry can render through the same template with different content + layout overrides.

Forking templates per locale (blog-en, blog-fr, blog-de) means N copies of every layout change. Avoid.

### Locale-aware preview entries

When an author picks a preview entry in Studio's navbar, also pick the matching locale (Studio's left-of-navbar locale switcher). Otherwise the canvas renders the entry in the project's default locale even though you're testing the French version.

## Patterns to Avoid

| Pattern | Why it bites |
| --- | --- |
| Encoding locale inside the Studio URL pattern (/{{locale}}/blog/{{entry.slug}}) | The Studio pattern then has to satisfy both editor-preview and visitor routing; cleaner to keep the Studio pattern content-shaped (/blog/{{entry.slug}}) and let the routing layer + the locale query option carry locale |
| Locale carried only as a visitor query param (/blog?locale=fr) | CDN caches one version; visitors of different locales see each other's content. Use path-segment, subdomain, cookie, or accept-header in routing, then forward as the locale query option |
| Forking templates per locale | N templates to maintain; one structural change is now N changes |
| Hard-coding the locale in the canvas-app's stack init | Studio overrides at iframe-load time, but sdk.fetchCompositionData calls don't, so bindings resolve against the wrong locale |
| Skipping fallback\_locale configuration | Unfinished translations render as blank fields; authors blame Studio for content issues |

## What's Still Unsolved

-   **Right-to-left rendering** isn't a Studio concern: your components are responsible for RTL via your design system. Make sure registered components honour dir="rtl" for Arabic/Hebrew locales.
-   **Locale-specific URL slugs** (e.g. /fr-fr/produits/ instead of /fr-fr/products/) require URL-pattern multiplexing per locale. Patterns can include literal locale-conditional segments but the syntax is verbose; a cleaner solution is on the SDK team's roadmap.

## See Also

-   [<StudioComponent /> reference](/docs/studio/composition-rendering-reference), the locale option in CompositionQueryOptions, plus the rest of what specOptions carries
-   [URL variables](/docs/studio/url-variables-reference), the {{locale}} variable and the full list of pattern variables
-   [Configure Studio](/docs/studio/manually-configuring-the-studio-web-app), set the project default Language
-   [Variant aliases](/docs/studio/variant-aliases-deep-dive), per-region variant rendering through one template
-   [Linked-schema matching rules](/docs/studio/linked-schema-matching-rules), how locale interacts with content type matching
