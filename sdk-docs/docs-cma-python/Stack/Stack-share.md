---
title: "share"
description: "The share method shares the stack with the users."
url: "https://www.contentstack.com/python-management-stack-share"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## share

The share method shares the stack with the users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | No | — | The request body |

Returns:
Type
JSON

```
data = {
           "emails": [
               "*****"
           ],
           "roles": {
               "manager@example.com": [
                   "*******"
               ]
           }
       }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').share_stack(data).json()
```
