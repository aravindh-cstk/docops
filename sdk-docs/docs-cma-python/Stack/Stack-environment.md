---
title: "environment"
description: "The environment method retrieves the details of the environment added in the stack."
url: "https://www.contentstack.com/python-management-stack-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

The environment method retrieves the details of the environment added in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment_name | str | No | — | Name of the environment |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').environment()
```
