---
title: "branch_alias"
description: "Branch alias corresponds to the alias of that branch."
url: "https://www.contentstack.com/python-management-stack-branch_alias"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## branch_alias

Branch alias corresponds to the alias of that branch.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| alias_uid | str | No | — | UID of the alias |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="auth_token")
response = client.stack(api_key).branch_alias()
```
