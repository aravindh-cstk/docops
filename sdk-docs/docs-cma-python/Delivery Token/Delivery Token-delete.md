---
title: "delete"
description: "The delete method removes the existing delivery token from the stack."
url: "https://www.contentstack.com/python-management-delivery-token-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes the existing  delivery token from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| delivery_token_uid | str | Yes | — | UID of the delivery token |

Returns:
Type
Delivery Token

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').delivery_token('delivery_token_uid').delete().json()
```
