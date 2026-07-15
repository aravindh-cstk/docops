---
title: "locales"
description: "The `locales()` method retrieves all locales in which a term is localized."
url: "https://www.contentstack.com/js-management-terms-locales"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locales

The `locales()` method retrieves all locales in which a term is localized.

No parameters.

Returns:
Type
Promise

```
const termLocales = await client.stack({ api_key: 'your_api_key' })
  .taxonomy('taxonomy_uid')
  .terms('term_uid')
  .locales()
```
