---
title: "fetch"
description: "The `fetch()` method retrieves details of a specific term along with organization metadata."
url: "https://www.contentstack.com/js-management-terms-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch()` method retrieves details of a specific term along with organization metadata.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | master | Specifies the locale used to fetch the term. Defaults to `master` if not provided. |
| branch | string | No | — | Specifies the branch whose fallback locale hierarchy is followed when `include_fallback` is enabled. |
| include_fallback | boolean | No | — | Follows the fallback locale hierarchy of the specified branch or main when the taxonomy term isn’t available in the selected locale. |
| fallback_locale | string | No | — | Specifies the fallback locale if the term isn’t available in the given locale. If both `fallback_locale` and `include_fallback` are provided, `include_fallback` takes precedence. |
| include_children_count | boolean | No | — | Includes the count of children under the term. |
| include_referenced_entries_count | boolean | No | — | Includes the count of entries where the term is referenced. |
| include_children_referenced_entries_count | boolean | No | — | Includes the count of entries where descendant terms are referenced. |
| deleted | boolean | No | — | Fetches only the terms that are marked as deleted. |
| taxonomy_uid | string | No | — | Specifies the UID of the taxonomy for which term data is required. |
| term_uid | string | No | — | Specifies the UID of the deleted term. Required when `deleted` is set to true. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key' }).taxonomy('taxonomyUid').terms('termUid').fetch().then((term) => console.log(term));
```
