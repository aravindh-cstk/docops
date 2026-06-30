---
title: "webhook"
description: "Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens."
url: "https://www.contentstack.com/js-management-stack-webhook"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## webhook

Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for webhook to perform operation on. |

Returns:
Type
Webhook

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).webhook()
// OR
client.stack({ api_key: 'api_key'}).webhook('uid')
```
