---
title: "query"
description: "The Query on Label will allow to fetch details of all or specific Label."
url: "https://www.contentstack.com/js-management-label-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on Label will allow to fetch details of all or specific Label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The `include_count` parameter includes the count of total number of label in your stack, along with the details of each label. |
| params.limit | number | No | — | The `limit` parameter will return a specific number of label in the output. |
| params.skip | number | No | — | The `skip` parameter will skip a specific number of label in the response. |

Returns:
Type
Query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).label()
.query({ query: { name: 'Label Name' } }).find()
.then((label) => console.log(label))
```
