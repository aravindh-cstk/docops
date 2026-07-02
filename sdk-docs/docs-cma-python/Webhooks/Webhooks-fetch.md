---
title: "fetch"
description: "The fetch method retrieves the details of a specific webhook."
url: "https://www.contentstack.com/python-management-webhooks-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the details of a specific webhook.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhook_uid | str | Yes | — | UID of the webhook |

Returns:
Type
Webhook

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks('webhook_uid').fetch().json()
```
