---
title: "localize"
description: "The `localize()` method creates a localized version of a term."
url: "https://www.contentstack.com/js-management-terms-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## localize

The `localize()` method creates a localized version of a term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data.term | Object | No | — | Returns localized term properties such as `name` or `description` . |
| params.locale | string | No | — | Target locale code (e.g., ' `hi-in` ', ' `fr-fr` '). |

Returns:
Type
Promise

```
const localizedTerm = await client.stack({ api_key: 'your_api_key' })
  .taxonomy('taxonomy_uid')
  .terms('term_uid')
  .localize(
    { term: { name: 'Localized Term Name' } },
    { locale: 'hi-in' }
  )
```
