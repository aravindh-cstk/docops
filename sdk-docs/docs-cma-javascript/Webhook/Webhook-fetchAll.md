---
title: "fetchAll"
description: "The Get all Webhook call lists all Webhooks from Stack."
url: "https://www.contentstack.com/js-management-webhook-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAll

The Get all Webhook call lists all Webhooks from Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The ` include_count’ parameter includes the count of total number of webhook in your stack, along with the details of each webhook. |
| params.limit | number | No | — | The ‘limit’ parameter will return a specific number of webhook in the output. |
| params.skip | number | No | — | The ‘skip’ parameter will skip a specific number of webhook in the response. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).webhook()
.fetchAll()
.then((webhook) => console.log(webhook))
```
