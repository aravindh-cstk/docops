---
title: "fetchAll"
description: "The fetchAll method retrieves the details of all the branches of a stack."
url: "https://www.contentstack.com/js-management-auditlog-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAll

The fetchAll method retrieves the details of all the branches of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Int | No | — | Limit on API response to provide content in the list |
| skip | Int | No | — | Offset for skipping content in response |
| include_count | Boolean | No | — | To retrieve the count of Branch. |

Returns:
Type
ContentstackCollection

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.stack({ api_key: 'api_key'}).auditLog().fetchAll()
.then((logs) => console.log(logs))
```
