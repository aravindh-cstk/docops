---
title: "import"
description: "The Import a webhook call imports a web hook into a stack."
url: "https://www.contentstack.com/js-management-webhook-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## import

The Import a webhook call imports a web hook into a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.webhook | string | Yes | — | File path to import webhook |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = {
 webhook: 'path/to/file.json',
}

client.stack({ api_key: 'api_key'}).webhook().import(data)
.then((webhook) => console.log(webhook))

//OR
client.stack({ api_key: 'api_key'}).webhook('webhook_uid').import(data)
.then((webhook) => console.log(webhook))
```
