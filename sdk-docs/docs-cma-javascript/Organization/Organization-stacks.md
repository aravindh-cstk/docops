---
title: "stacks"
description: "The Get all stacks in an organization call fetches the list of all stacks in an Organization."
url: "https://www.contentstack.com/js-management-organization-stacks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stacks

The Get all stacks in an organization call fetches the list of all stacks in an Organization.

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

client.organization('organization_uid').stacks({ include_count: true })
.then((collection) => console.log(collection))
```
