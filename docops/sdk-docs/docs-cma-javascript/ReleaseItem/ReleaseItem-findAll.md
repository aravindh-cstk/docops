---
title: "findAll"
description: "The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release."
url: "https://www.contentstack.com/js-management-releaseitem-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAll

The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The `include_count` parameter includes the count of total number of items in Release, along with the details of each items. |
| params.limit | number | No | — | The `limit` parameter will return a specific number of release items in the output. |
| params.skip | number | No | — | The `skip` parameter will skip a specific number of release items in the response. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid')
.item()
.findAll()
.then((items) => console.log(items))
```
