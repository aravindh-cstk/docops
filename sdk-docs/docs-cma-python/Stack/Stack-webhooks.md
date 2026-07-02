---
title: "webhooks"
description: "A Webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account."
url: "https://www.contentstack.com/python-management-stack-webhooks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## webhooks

A Webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhook_uid | str | No | — | UID of the webhook |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().webhooks()
```
