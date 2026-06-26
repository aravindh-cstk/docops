---
title: "fetch"
description: "The fetch method retrieves the details of a particular alias."
url: "https://www.contentstack.com/python-management-alias-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a particular alias.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch_alias_uid | str | Yes | — | UID of the alias |

Returns:
Type
Alias

```
import contentstack_management
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch_alias('branch_alias_uid')
response = branch.fetch()
```
