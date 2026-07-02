---
title: "fetch"
description: "The fetch method retrieves the details of a specific global field from a particular stack."
url: "https://www.contentstack.com/python-management-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the details of a specific global field from a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| global_field_uid | str | Yes | — | UID of the global field |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields('global_field_uid').fetch().json()
```
