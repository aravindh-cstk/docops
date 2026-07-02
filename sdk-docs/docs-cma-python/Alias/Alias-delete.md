---
title: "delete"
description: "The delete method removes an alias permanently from the stack"
url: "https://www.contentstack.com/python-management-alias-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an alias permanently from the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch_uid | str | Yes | — | UID of the branch |

Returns:
Type
Alias

```
import contentstack_management
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch(branch_uid="branch_uid")
response = branch.delete()
```
