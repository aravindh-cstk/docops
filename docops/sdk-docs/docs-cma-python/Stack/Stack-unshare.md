---
title: "unshare"
description: "The unshare method removes access to a stack from users who have specific user roles."
url: "https://www.contentstack.com/python-management-stack-unshare"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unshare

The unshare method removes access to a stack from users who have specific user roles.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
    "email": "manager@example.com"
  }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').unshare(data)
```
