---
title: "query"
description: "The Query on Asset will allow to fetch details of all or specific Asset."
url: "https://www.contentstack.com/js-management-asset-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The Query on Asset will allow to fetch details of all or specific Asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_publish_details | boolean | No | — | Enter 'true' to include the publish details of the entry. |
| params.query | object | No | — | Queries that you can use to fetch filtered results. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset()
.query({ query: { filename: 'Asset Name' } })
.find()
.then((asset) => console.log(asset))
```
