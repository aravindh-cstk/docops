---
title: "roles"
description: "The roles method retrieves the organization roles entries."
url: "https://www.contentstack.com/python-management-organization-roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## roles

The roles method retrieves the organization roles entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organization_uid | str | Yes | — | UID of the organization |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='auth_token')

response = client.organizations('organization_uid').get_organization_roles().json()
```
