---
title: "branch"
description: "Branch corresponds to Stack branch."
url: "https://www.contentstack.com/python-management-stack-branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## branch

Branch corresponds to Stack branch.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch_uid | str | No | — | UID of the branch |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="auth_token")
response = client.stack(api_key).branch()
```
