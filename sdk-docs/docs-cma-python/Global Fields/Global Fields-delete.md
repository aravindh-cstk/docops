---
title: "delete"
description: "The delete method deletes an existing global field from a particular stack."
url: "https://www.contentstack.com/python-management-global-fields-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method deletes an existing global field from a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| global_field_uid | str | Yes | — | UID of the global field |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")
response = client.stack('api_key').global_fields('global_field_uid').delete()
```
