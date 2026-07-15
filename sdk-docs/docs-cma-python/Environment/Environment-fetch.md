---
title: "fetch"
description: "The fetch method retrieves the details of a specific environment from the stack."
url: "https://www.contentstack.com/python-management-environment-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific environment from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment_name | str | Yes | — | Name of the environment you want to fetch |

Returns:
Type
Environment

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').environments('environment_name').fetch().json()
```
