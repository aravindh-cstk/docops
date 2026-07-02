---
title: "delete"
description: "The delete method removes an existing branch from a particular stack of your organization."
url: "https://www.contentstack.com/python-management-branches-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an existing branch from a particular stack of your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch_uid | str | Yes | — | UID of the branch |

Returns:
Type
Branch

```
import contentstack
import contentstack_management
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch(branch_uid="branch_uid")
response = branch.delete(data)
```
