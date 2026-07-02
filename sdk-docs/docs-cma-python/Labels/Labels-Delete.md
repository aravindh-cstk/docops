---
title: "Delete"
description: "The Delete method is used to remove a specific label from the stack."
url: "https://www.contentstack.com/python-management-labels-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete

The Delete method is used to remove a specific label from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| label_uid | str | Yes | — | UID of the label |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').label('label_uid').delete().json()
```
