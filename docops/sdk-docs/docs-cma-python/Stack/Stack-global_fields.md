---
title: "global_fields"
description: "Global field defines the structure or schema of a page or a section of your web or mobile property."
url: "https://www.contentstack.com/python-management-stack-global_fields"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## global_fields

Global field defines the structure or schema of a page or a section of your web or mobile property.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| global_field_uid | str | No | — | UID of the global field |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().global_field()
```
