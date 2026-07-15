---
title: "assign"
description: "The assign method creates a new alias in a particular stack of the organization."
url: "https://www.contentstack.com/python-management-alias-assign"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## assign

The assign method creates a new alias in a particular stack of the organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data you want to send to the server when creating a folder. |

Returns:
Type
Alias

```
import contentstack_management
body = {
       "branch_alias": {
           "target_branch": "test"
           }
       }
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').alias("alias_uid")
response = branch.assign(data)
```
