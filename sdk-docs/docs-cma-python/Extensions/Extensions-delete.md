---
title: "delete"
description: "The Delete method removes an extension permanently from your stack."
url: "https://www.contentstack.com/python-management-extensions-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete method removes an extension permanently from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| extension_uid | str | Yes | — | UID of the extension |

Returns:
Type
JSON

```
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').extension('extension_uid').delete().json()
```
