---
title: "query"
description: "The Query on Locale will allow to fetch details of all or specific Locale"
url: "https://www.contentstack.com/js-management-locale-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on Locale will allow to fetch details of all or specific Locale

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_count | Boolean | No | — | Total count of content types available in your stack. |
| limit | number | No | 100 | Specifies the maximum number of items to return. |
| skip | number | No | 100 | Specifies the number of items to skip from the returned results. Useful for pagination. |

Returns:
Type
Array.<Locale>

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack(api_key).locale().query({ query: { code: 'locale-code' } }).find()
.then((locales) => console.log(locales))
```

**Note:** Always include the `locale` filter inside the `query` object when filtering entries.

- **Correct usage:** `query({ query: { locale: 'en-gb' } })`Returns only entries that match the specified locale.
- **Incorrect usage:** `query({ locale: 'en-gb' })`The `locale` is treated as a query option, not a filter. All entries are returned.
