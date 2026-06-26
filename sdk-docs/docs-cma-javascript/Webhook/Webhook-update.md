---
title: "update"
description: "The Update Webhook call lets you update the name and description of an existing Webhook."
url: "https://www.contentstack.com/js-management-webhook-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update Webhook call lets you update the name and description of an existing Webhook.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).webhook('webhook_uid')
.fetch()
.then((webhook) => {
 webhook.title = 'My New Webhook'
 webhook.description = 'Webhook description'
 return webhook.update()
})
.then((webhook) => console.log(webhook))
```
