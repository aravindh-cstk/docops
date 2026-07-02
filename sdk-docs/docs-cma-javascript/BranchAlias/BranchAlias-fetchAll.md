---
title: "fetchAll"
description: "The Get all BranchAlias request retrieves the details of all the Branch of a stack."
url: "https://www.contentstack.com/js-management-branchalias-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The Get all BranchAlias request retrieves the details of all the Branch of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.limit | number | No | — | The limit parameter will return a specific number of Branch in the output. |
| params.skip | number | No | — | The skip parameter will skip a specific number of Branch in the output. |
| params.include_count | boolean | No | — | To retrieve the count of Branch. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branchAlias()
.fetchAll()
.then((collection) => console.log(collection))
```
