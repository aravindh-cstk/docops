---
title: "Delete"
description: "The delete method removes an existing language from your stack."
url: "https://www.contentstack.com/python-management-locale-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Delete

The delete method removes an existing language from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale_code | str | Yes | — | Code of the specific language |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').locale(locale_code).delete().json()
```
