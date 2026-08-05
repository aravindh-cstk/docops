---
title: "imports"
description: "The imports method imports the global field into a particular stack."
url: "https://www.contentstack.com/python-management-global-fields-imports"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imports

The imports method imports the global field into a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| global_field_uid | str | Yes | — | UID of the global field |
| file_path | str | Yes | — | File path of the global field to be imported |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields('global_field_uid').imports().json()
```
