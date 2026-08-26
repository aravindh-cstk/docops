---
title: "URL Variables Reference"
description: "Complete reference for every URL variable Studio accepts in composition URL patterns, including entry fields, taxonomy, context metadata, date pseudo variables, and validation rules."
url: /studio/url-variables-reference
uid: blta19657f9ab21b456
---

# URL Variables Reference

## URL Variables Reference

Every variable Studio accepts inside a composition URL pattern, grouped by category. Studio's URL editor validates patterns against this set, typos and unknown variables are rejected before save.

## Variable Categories

| Category | Form | Example |
| --- | --- | --- |
| **Entry field** | {{entry.<field>}} | {{entry.title}} |
| **Entry reference field** | {{entry.<reference>.<field>}} | {{entry.author.name}} |
| **Entry system field** | {{entry.<system\_field>}} | {{entry.uid}} |
| **Taxonomy** | {{taxonomy:<taxonomy\_uid>}} | {{taxonomy:brand}} |
| **Context (metadata)** | {{<metadata\_field>}} | {{environment}} |
| **Date pseudo** | {{entry\_created\_date:<part>}} | {{entry\_created\_date:year}} |
| **Legacy wildcard** | \* | /blogs/\* |

Where each category is available:

| Category | Connected templates | Freeform templates |
| --- | --- | --- |
| Entry field | ✅ | ❌ (no entry) |
| Entry reference field | ✅ | ❌ |
| Entry system field | ✅ | ❌ |
| Taxonomy | ✅ | ❌ |
| Context (metadata) | ✅ | ✅ |
| Date pseudo (auto-generated) | ✅ | ❌ |
| Legacy wildcard | ✅ | ✅ |

## Entry Field

{{entry.<field>}}: any field declared on the content type connected to the template.

```
URL pattern: /blogs/{{entry.title}}
Resolves to: /blogs/AI%20101                (entry.title = "AI 101")
```

Spaces are URL-encoded as %20. Studio's URL editor validates that <field> exists on the connected content type's schema; typos produce a field\_not\_exists validation error.

## Entry Reference Field

{{entry.<reference>.<field>}}: a field on an entry referenced by the current entry.

```
URL pattern: /authors/{{entry.primary_author.handle}}/posts/{{entry.title}}
```

primary\_author must be a Reference field on the connected content type, and handle must exist on the referenced content type's schema.

For multi-reference fields (reference\_to.length > 1), the sub-field is accepted if it exists on at least one of the referenced content types. The first match wins at resolve time.

References are auto-included in the SDK's useCompositionData fetch; you don't need to declare extendQuery.includeReferences for fields used in URL patterns.

## Entry System Fields

Properties present on every CMA entry but not declared in the content type's schema. Allowed in patterns without a schema lookup:

| System field | What it is |
| --- | --- |
| {{entry.uid}} | The entry's unique identifier (UID) |
| {{entry.created\_at}} | ISO timestamp when the entry was created |
| {{entry.updated\_at}} | ISO timestamp of the most recent update |
| {{entry.created\_by}} | UID of the user who created the entry |
| {{entry.updated\_by}} | UID of the user who most recently updated the entry |
| {{entry.locale}} | The locale code the entry was fetched in |
| {{entry.\_version}} | Numeric version of the entry |

## Taxonomy

{{taxonomy:<taxonomy\_uid>}}: the value of a taxonomy assigned to the entry.

```
URL pattern: /{{taxonomy:industry}}/{{entry.title}}
Resolves to: /finance/quarterly-report       (entry has taxonomy industry = "finance")
```

Studio collects taxonomies referenced in patterns but doesn't validate the <taxonomy\_uid> against the schema; taxonomy terms aren't part of the content type schema.

## Context (Metadata) Variables

Five built-in metadata variables resolved from the request / project context, not from the entry. Available in both linked and Freeform patterns.

| Variable | Value at resolve time |
| --- | --- |
| {{environment}} | The selected environment name (e.g. production, staging, test) |
| {{locale}} | The selected locale code (e.g. en-us, fr-fr). **Not recommended in URL patterns**; carry locale via your routing layer + the SDK's locale query option instead. See [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale). |
| {{branch}} | The selected branch (defaults to main) |
| {{composition\_uid}} | The composition's UID: Freeform's identity variable |
| {{content\_type\_uid}} | The connected content type's UID (linked only) |

In the Edit URL modal:

-   **Linked** templates show Insert chips for {{environment}}, {{entry.title}}, {{entry.uid}}, {{taxonomy:brand}}, {{locale}} (the chip exists, but prefer routing-layer locale + the SDK locale query option instead of inserting it)
-   **Freeform** pages show only {{composition\_uid}}

The chips are quick-insert shortcuts. The full set above is typeable manually: {{branch}}, {{content\_type\_uid}} and other entry / taxonomy variants work the same.

## Date Pseudo Variables (Auto-Generated Only)

When you configure a content type's URL pattern (/blogs/:year/:month/:title), Studio auto-generates these pseudo variables from the matching pattern:

| Pattern part | Auto-generated to |
| --- | --- |
| :year | {{entry\_created\_date:year}} |
| :year\_short | {{entry\_created\_date:year\_short}} |
| :month | {{entry\_created\_date:month}} |
| :monthname | {{entry\_created\_date:monthname}} |
| :monthname\_short | {{entry\_created\_date:monthname\_short}} |
| :day | {{entry\_created\_date:day}} |

**You can't type these by hand** in the URL editor; pasting {{entry\_created\_date:year}} produces a pseudo\_variable\_not\_allowed validation error. They're an internal marker the URL engine uses; the content type's :year\-style pattern is the user-facing surface.

If you want a year in your URL without using the content type's URL pattern, store the year as an entry field and use {{entry.published\_year}} instead.

## Legacy Wildcard

\*: matches exactly one path segment, captures it for routing alignment, carries no value.

```
URL pattern: /blogs/*
Matches:     /blogs/ai-101, /blogs/llm-economics, /blogs/agent-design
```

Used by legacy linked patterns from before variable-based URLs landed. The Edit URL modal warns when it detects a legacy pattern with a "This composition has a legacy URL pattern. Once changed, you cannot revert it." banner.

> **One-way migration.** Confirming the change in the Edit URL modal upgrades the composition to a variable-based URL permanently; there is no rollback. Be sure the new pattern resolves correctly against your CT's fields before saving.

For new templates, prefer variable-based patterns (/blogs/{{entry.title}}); they carry data into the resolved URL instead of just routing it.

> **Pick a SLUG field, not the title.** {{entry.title}} renders the display-name verbatim: _"AI 101"_ → /blogs/AI%20101, which is fragile (capitals, spaces, %20\-encoding, breaks on title rename). **Bind the URL to your CT's slug field** (commonly entry.url or entry.slug); Studio gives you /blogs/ai-101. The CT's url field is the canonical Contentstack URL slug; use it for the URL pattern, use {{entry.title}} for display only.

## Where URLs Come From (Recap)

For a new linked template, Studio derives the URL pattern from the first available source (**verified against composable-studio/src/iframe-url/createCompositionEntryUrl.ts:24-31 and its implementation at lines 113-126**):

1.  **Custom Preview URL** for the content type: **strongly recommended; configure this once per CT.** tryCustomPreviewUrl() runs first.
2.  **Content type URL pattern** (e.g. /blogs/:title): tryContentTypeUrlPattern() runs if #1 returned null.
3.  **Default fallback:** /<content\_type\_uid>/<composition\_uid>/{{entry.title}}, createDefaultLinkedUrl() runs if #2 also returned null.

For Sections (always render in canvas, no visitor URL) and Freeform (no connected CT) the derivation skips #1+#2 and uses the default pattern directly.

**Two extra source values exist in the SDK enum** (COMPOSITION\_PREVIEW\_URL\_SOURCES in composable-studio-sdk/packages/studio-client/src/url-metadata/types.ts:12) but apply OUTSIDE this derivation flow: - USER\_SPECIFIED\_PATTERN: the author hand-edited the URL via the URL pattern editor AFTER creation - LEGACY\_URL: the composition pre-dates the URL-source metadata and runs on the legacy URL path

> **Dev configures once; authors never touch URLs.** Set the **Custom Preview URL** on each content type when the CT is created (Content Models → CT → Settings → Custom Preview URL → e.g. /blogs/{{entry.url}} for blogs, /products/{{entry.slug}} for products). After that, every new linked template against that CT auto-derives the correct URL pattern; **authors never edit URLs in Studio**. Hand-editing a template's URL pattern is a smell that something upstream wasn't configured.

For Freeform, the default is /<content\_type\_uid>/<composition\_uid>: CT UID and composition UID inlined as literal segments (identity-based, no entry).

See [Templates: Connected content type](/docs/studio/connected-content-type) for the derivation flow.

## Validation Rules

Studio's URL editor blocks save on any of these:

| Error | Trigger |
| --- | --- |
| invalid\_syntax | Malformed {{ }} braces, unclosed pairs |
| field\_not\_exists | {{entry.foo}} where foo isn't on the schema |
| entry\_in\_freeform | {{entry.\*}} used in a Freeform template |
| unknown\_variable | {{some\_random\_thing}} that matches no category |
| pseudo\_variable\_not\_allowed | {{entry\_created\_date:\*}} typed by hand |
| empty\_pattern | The pattern field is empty |

## Resolved-Value Behavior

-   **Spaces** in variable values are URL-encoded as %20
-   **Reference variables** trigger an includeReferences query addition automatically; you don't need to declare it via extendQuery
-   **Taxonomy variables** resolve from the entry's taxonomies.<uid> array; first value wins for multi-value taxonomies

## See Also

-   [Templates: Connected content type](/docs/studio/connected-content-type): URL derivation order
-   [Freeform templates](/docs/studio/freeform-templates): what variables Freeform supports
-   [Install the Studio SDK: Fetch a composition](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata): the extendQuery option
