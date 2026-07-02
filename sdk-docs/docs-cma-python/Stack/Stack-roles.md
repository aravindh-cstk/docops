---
title: "roles"
description: "The roles method retrieves the details of the user roles in the stack."
url: "https://www.contentstack.com/python-management-stack-roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## roles

The roles method retrieves the details of the user roles in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| roles_uid | str | Yes | — | UID of the user role |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().roles()
```
