---
title: "fetchAll"
description: "The Get all organizations call lists all organizations related to the system user in the order that they were created."
url: "https://www.contentstack.com/js-management-organization-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The Get all organizations call lists all organizations related to the system user in the order that they were created.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.limit | number | No | — | The ‘limit’ parameter will return a specific number of organizations in the output. |
| param.skip | number | No | — | The ‘skip’ parameter will skip a specific number of organizations in the output. |
| param.asc | string | No | — | The ‘asc’ parameter allows you to sort the list of organizations in the ascending order with respect to the value of a specific field. |
| desc | string | No | — | The ‘desc’ parameter allows you to sort the list of Organizations in the descending order with respect to the value of a specific field. |
| include_count | boolean | No | — | The ‘include_count’ parameter returns the total number of organizations related to the user. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization().fetchAll()
.then((collection) => console.log(collection))
```
