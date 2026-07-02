---
title: "localize"
description: "The localize() method creates a localized version of a taxonomy in the specified locale."
url: "https://www.contentstack.com/js-management-taxonomy-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## localize

The `localize()` method creates a localized version of a taxonomy in the specified locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Object | No | — | Returns the updated localized taxonomy details. |
| params.locale | string | No | — | Target locale code (e.g., `'hi-in'` , `'fr-fr'` ). |

Returns:
Type
Promise

```
const localizedTaxonomy = await client.stack({ api_key: 'your_api_key' })
  .taxonomy('taxonomy_uid')
  .localize(
    { taxonomy: { name: 'Localized Taxonomy Name' } },
    { locale: 'hi-in' }
  )
```
