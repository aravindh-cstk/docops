---
title: "update"
description: "The update method updates the stack entries."
url: "https://www.contentstack.com/python-management-stack-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method updates the stack entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

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
response = client.stack('api_key').update(data).json()
```
