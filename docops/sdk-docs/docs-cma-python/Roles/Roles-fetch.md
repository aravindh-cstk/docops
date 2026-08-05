---
title: "fetch"
description: "The fetch method retrieves the details of a specific role from the stack."
url: "https://www.contentstack.com/python-management-roles-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific role from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| role_uid | str | Yes | — | UID of the role |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').roles('role_uid').fetch().json()
```
