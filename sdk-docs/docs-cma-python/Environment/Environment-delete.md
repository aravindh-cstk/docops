---
title: "delete"
description: "The delete method removes an existing environment from a particular stack of your organization."
url: "https://www.contentstack.com/python-management-environment-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method removes an existing environment from a particular stack of your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment_name | str | Yes | — | Name of the environment you want to delete |

Returns:
Type
Environment

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').environments('environment_name').delete().json()
```
