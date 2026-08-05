---
title: "create"
description: "The create method creates a new branch in a particular stack of your organization."
url: "https://www.contentstack.com/python-management-branches-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new branch in a particular stack of your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new branch |

Returns:
Type
Branch

```
import contentstack
import contentstack_management
data = {
        "branch": {
        "uid": "release",
        "source": "main"
        }
    }
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch()
response = branch.create(data)
```
