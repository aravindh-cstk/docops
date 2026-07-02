---
title: "transfer_ownership"
description: "The transfer\\_ownership method transfers the ownership of the stack to another user."
url: "https://www.contentstack.com/python-management-stack-transfer_ownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## transfer_ownership

The transfer_ownership method transfers the ownership of the stack to another user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | - | The request body |

Returns:
Type
JSON

```
data = {
            "transfer_to": "manager@example.com"
        }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').transfer_ownership(data)
```
