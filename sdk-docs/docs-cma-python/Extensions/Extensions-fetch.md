---
title: "fetch"
description: "The fetch method retrieves information about the specified extension."
url: "https://www.contentstack.com/python-management-extensions-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves information about the specified extension.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| extension_uid | str | Yes | — | UID of the extension |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').extension('extension_uid').fetch().json()
```
