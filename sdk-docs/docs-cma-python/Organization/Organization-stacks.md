---
title: "stacks"
description: "The stacks method retrieves the organization stacks."
url: "https://www.contentstack.com/python-management-organization-stacks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stacks

The stacks method retrieves the organization stacks.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organization_uid | str | Yes | — | UID of the organization |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.organizations('organization_uid').organization_stacks()
```
