---
title: "fetch"
description: "The fetch method retrieves a specific taxonomy term along with organization and taxonomy-level metadata, based on the provided parameters."
url: "https://www.contentstack.com/js-management-taxonomy-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves a specific taxonomy term along with organization and taxonomy-level metadata, based on the provided parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | master | Specifies the locale used to fetch the taxonomy. Defaults to `master` if not provided. |
| branch | string | No | — | Specifies the branch whose fallback locale hierarchy is followed when `include_fallback` is enabled. |
| include_fallback | boolean | No | — | Specifies a single fallback locale if the taxonomy isn’t available in the requested locale. See Locale Fallback Behavior for precedence rules. |
| fallback_locale | string | No | — | Specifies the locale to fallback to if the taxonomy doesn’t exist in the given locale. Gives priority to `include_fallback` if both are specified. |
| include_terms_count | boolean | No | — | Includes the total count of all terms within the taxonomy. |
| include_referenced_terms_count | boolean | No | — | Includes the count of terms that are referenced in at least one entry. |
| include_referenced_content_type_count | boolean | No | — | Includes the count of content types that reference this taxonomy. |
| include_referenced_entries_count | boolean | No | — | Includes the count of entries where at least one term of this taxonomy is referenced. |
| deleted | boolean | No | — | Fetches only the taxonomies that are marked as deleted. |
| taxonomy_uid | string | Yes | — | UUID of a deleted taxonomy used to retrieve its data (required when `deleted` is set to `true` ). |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').terms('termUid').fetch().then((term) => console.log(term))
```

**Locale Fallback Behavior**

When using `include_fallback` and `fallback_locale`, the system applies the following behavior:

| **Scenario** | **Parameters** | **Behavior** |
|---|---|---|
| Follow branch fallback hierarchy | `include_fallback: true`, `branch: 'main'` | Follows the branch’s configured fallback locale hierarchy. |
| Fall back to a single specific locale | `fallback_locale: 'en-us'` | Falls back only to the specified locale. |
| Both specified | `include_fallback: true` + `fallback_locale` | `include_fallback` takes priority. `fallback_locale` is ignored. |

**Note:** The SDK forwards both parameters as query parameters. The backend API applies the fallback resolution logic and precedence.

**Example: Using Fallback Parameters**

```
client
  .stack({ api_key: 'api_key' })
  .taxonomy('taxonomyUid')
  .terms('termUid')
  .fetch({
    locale: 'hi-in',
    branch: 'main',
    include_fallback: true,
    fallback_locale: 'en-us'
  })
  .then((term) => console.log(term))
```

In the above example, both parameters are provided, the backend API prioritizes `include_fallback` and ignores `fallback_locale`.
