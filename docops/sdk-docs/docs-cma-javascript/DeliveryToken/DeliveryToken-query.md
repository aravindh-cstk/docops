---
title: "query"
description: "The Query on Delivery Token will allow to fetch details of all or specific Delivery Token."
url: "https://www.contentstack.com/js-management-deliverytoken-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The Query on Delivery Token will allow to fetch details of all or specific Delivery Token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The ` include_count’ parameter includes the count of total number of delivery token in your stack, along with the details of each delivery token |
| params.limit | number | No | — | The ‘limit’ parameter will return a specific number of delivery token in the output. |
| params.skip | number | No | — | The ‘skip’ parameter will skip a specific number of delivery token in the response. |

Returns:
Type
Query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).deliveryToken()
.query({ query: { name: 'token_name' } }))
.find()
.then((contentstackCollection) => console.log(contentstackCollection))
```
