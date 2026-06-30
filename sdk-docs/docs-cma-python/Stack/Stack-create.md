---
title: "create"
description: "The create method creates a new stack."
url: "https://www.contentstack.com/python-management-stack-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organization_uid | str | Yes | — | UID of the organization |
| data | Dict | Yes | — | The request body. |

Returns:
Type
JSON

```
data = {
   "stack": {
        "name": "My New Stack",
        "description": "My new test stack",
        "master_locale": "en-us"
        }
     }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack().create('organization_uid', data).json()
```
