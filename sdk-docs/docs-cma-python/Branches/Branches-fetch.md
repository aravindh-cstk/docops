---
title: "fetch"
description: "The fetch method retrieves the details of a specific branch."
url: "https://www.contentstack.com/python-management-branches-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific branch.

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
response = branch.fetch()
```
