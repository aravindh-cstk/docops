---
title: "fetch"
description: "The fetch method retrieves the details of a specific management token from the stack."
url: "https://www.contentstack.com/python-management-management-token-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific management token from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| management_token_uid | str | Yes | — | UID of the management token |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').management_token('management_token_uid').fetch().json()
```
