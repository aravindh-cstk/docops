---
title: "query"
description: "The Query on Entry will allow to fetch details of all or specific Entry"
url: "https://www.contentstack.com/js-management-entry-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The Query on Entry will allow to fetch details of all or specific Entry

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.locale | string | No | — | Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed. |
| params.include_workflow | boolean | No | — | Enter 'true' to include the workflow details of the entry. |
| params.include_publish_details | boolean | No | — | Enter 'true' to include the publish details of the entry. |
| params.query | object | No | — | Queries that you can use to fetch filtered results. |
| limit | number | No | 100 | Specifies the maximum number of entries to return. |
| skip | number | No | 100 | Specifies the number of entries to skip. Used for pagination. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry().query({ query: { title: 'entry title' } }).find()
.then((entry) => console.log(entry))
```

**Note:** Always include the `locale` filter inside the `query` object when filtering entries.

- **Correct usage:** `query({ query: { locale: 'en-gb' } })`Returns only entries that match the specified locale.
- **Incorrect usage:** `query({ locale: 'en-gb' })`The `locale` is treated as a query option, not a filter. All entries are returned.
