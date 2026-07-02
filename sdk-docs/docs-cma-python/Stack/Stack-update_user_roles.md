---
title: "update_user_roles"
description: "The update\\_user\\_roles method updates all the user roles of the stack."
url: "https://www.contentstack.com/python-management-stack-update_user_roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update_user_roles

The update_user_roles method updates all the user roles of the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
    "users": {
        "user_uid": ["role_uid1", "role_uid2"]
      }
  }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').update_user_role(data)
```
