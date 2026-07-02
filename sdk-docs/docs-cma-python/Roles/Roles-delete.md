---
title: "delete"
description: "The delete method removes an existing role from a particular stack of your organization."
url: "https://www.contentstack.com/python-management-roles-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an existing role from a particular stack of your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| role_uid | str | Yes | — | UID of the role |

Returns:
Type
Role

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = response = client.stack('api_key').roles('role_uid').delete().json()
```
