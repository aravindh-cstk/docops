---
title: "fetch"
description: "The fetch method retrieves information about a specific language available on the stack."
url: "https://www.contentstack.com/python-management-locale-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves information about a specific language available on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale_code | str | Yes | — | Code of the specific language |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').locale('locale_code').fetch().json()
```
