---
title: "delete"
description: "The delete method removes an existing webhook from the stack permanently."
url: "https://www.contentstack.com/python-management-webhooks-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an existing webhook from the stack permanently.

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
response = response = client.stack('api_key').webhooks('webhook_uid').delete().json()
```
