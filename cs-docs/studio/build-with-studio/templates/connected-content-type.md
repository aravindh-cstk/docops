---
title: "The connected content type"
description: "Learn how every Studio template connects to one Contentstack content type, how URL patterns are derived, and how the preview entry works during authoring."
url: /studio/connected-content-type
---

# The connected content type

## The connected content type

Every template is connected to one content type. The template renders every entry of that type: write the layout once, publish many pages.

Use templates for **content-driven pages**: blog posts, product pages, recipes, author profiles (anything where the page is "one entry per URL").

## How it works

When you create a template, you pick a content type. After that:

-   Bindings inside the template resolve against the **current entry**: {{entry.title}}, {{entry.featured\_image}}, {{entry.author.name}}, and so on
-   The template renders at a URL Studio derives from the content type's URL settings.
-   Studio picks the right entry when a visitor lands on a URL: the URL pattern carries enough info to identify exactly one entry.

## Where the URL pattern comes from

Studio picks the **first available** source:

1.  **Custom Preview URL** (recommended): if you've configured one for this content type, Studio reuses its path. Best because it mirrors your live site exactly.
2.  **Content type URL pattern**: otherwise Studio uses the CT's own url field pattern. A CT pattern like /blogs/:title becomes /blogs/{{entry.title}}.
3.  **Default fallback**: if neither exists, a guaranteed-unique pattern.

> **Custom Preview URL is stack-level**, configured in your stack under **Settings**, then **Visual Experience**, then **Preview URL**. Per-content-type URL paths are defined inside that single global form, not on each content type's settings page.

## Editing the URL

Open the URL editor with the pencil icon in the canvas toolbar.

![Edit URL modal for a template](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc369dc98dec408be/b5753af82137103f6c9524b6/url-pattern-connected.png)

The modal returns:

-   The **Preview URL Pattern** input with the current pattern
-   A reset icon to restore the auto-derived pattern
-   An **Insert** row of variable chips you can click to insert: {{environment}}, {{entry.title}}, {{entry.uid}}, {{taxonomy:brand}}, {{locale}} (chip exists but **avoid using {{locale}} in patterns**: carry locale via your routing layer + the SDK's locale query option, see [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale))

A banner tells you the source of the current URL (custom preview URL, CT pattern, default, or user-specified).

## Variables you can use

| Variable | What it inserts |
| --- | --- |
| {{entry.<field>}} | Any field on the connected entry |
| {{entry.<reference>.<field>}} | A field from a referenced entry |
| {{taxonomy:<taxonomy\_uid>}} | A taxonomy assigned to the entry |
| {{environment}} | **Inert**: accepted but resolves to nothing (environment is set at SDK init). |
| {{locale}} | Current locale code. **Avoid in URL patterns**: use routing-layer + SDK locale query option instead. |
| {{branch}} | **Inert**: accepted but resolves to nothing (branch is set at SDK init). |
| {{content\_type\_uid}} | The connected content type's UID |
| {{composition\_uid}} | This composition's UID |

See the [full URL variables reference](/docs/studio/url-variables-reference) for all variants including date placeholders.

## Worked example

Say your stack has Custom Preview URL /{{entry.url}} configured for blog\_post.

![blog_post content type with title, url, hero_image, body fields, connected to an AI-First Blog Layout template with URL pattern /{{entry.url}}, rendering three example blog URLs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am42e361510dbb5d8b/a4d74504949efa4702df89e7/templates-connected-content-type-schema.png)

All three URLs render through the **same** template. Studio swaps in the current entry's bindings.

## The preview entry on the canvas

The canvas chrome shows **PREVIEW ENTRY :** (entry name) with a swap icon (⇄) next to it. This is the entry the canvas is currently rendering against: every template.\* binding inside the canvas resolves to that one entry's fields. Different preview entry, different rendered values, same template.

A few things worth knowing:

-   **It's an authoring-only choice, not part of the published composition.** Picking a preview entry doesn't pin the template to that entry, doesn't change what visitors see, and doesn't require a deploy. It's so you can see what the template looks like with real data while you author.
-   **Studio picks one automatically when you open the template.** Usually the most recently updated entry that satisfies the template's URL pattern. You can always swap.
-   **The swap is instant.** Click the ⇄ icon to open an entry picker scoped to the template's connected content type. Pick a different entry, and the canvas re-renders against the new one immediately: no reload, no deploy.
-   **It drives the URL line directly below the entry name.** That URL is the template's URL pattern evaluated against the preview entry's fields (e.g. /blog/hello-world). It updates live as you swap entries, and it's the quickest way to catch URL-pattern mistakes ("my pattern uses {{entry.slug}} but this entry doesn't have a slug field. That's why the URL looks broken").

So the preview entry answers "which entry am I looking at right now?", not "which entry is published". Authors sometimes assume that saving a binding while a particular entry is the preview pins the template to that entry. It doesn't. The binding records a field path. The preview entry is whichever one happens to be loaded when the canvas opens.

### When to swap the preview entry

-   The current preview entry has empty fields, so bindings render blank. Swap to a fuller entry to see the layout's real density
-   The current preview entry's URL pattern doesn't expose a field you're trying to bind, so swap to an entry with that field populated
-   You want to sanity-check the template under different content shapes (long titles, missing images), so swap through a few entries

## Editing rules

-   Edit URLs from the **canvas navbar**, not from the composition list (the list is read-only for URLs).
-   Studio **validates on save** and blocks invalid patterns: typo'd variable, field that doesn't exist on the CT, etc.
-   Saving a new URL **refetches the connected entry and reloads the preview**.
-   Once you edit a URL, Studio marks it as user-specified and stops auto-overwriting it on reset.
-   **Reset** in the modal re-runs the automatic derivation, useful if your Custom Preview URL or CT pattern changed.

## Common pitfalls

-   **"Template did not load" error.** Your template's URL pattern doesn't match any route on your site that mounts <StudioComponent />. Either fix the pattern or add the matching route.
-   **Two entries collide on the same URL.** Studio uses the composition + entry combo to disambiguate, so {{entry.url}} patterns that resolve to the same path still work as long as the entries differ.
-   **Date placeholders typed manually.** Studio rejects them. They're auto-generated from a CT's URL pattern.

## Next

-   [Using sections and components](/docs/studio/using-sections-and-components-in-a-template)
-   [URL variables reference](/docs/studio/url-variables-reference)
-   [Set up template preview routes](/docs/studio/template-preview-routes)
