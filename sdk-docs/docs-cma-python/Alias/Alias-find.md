---
title: "find"
description: "The find method retrieves the details of all aliases available in the particular stack."
url: "https://www.contentstack.com/python-management-alias-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all aliases available in the particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Number | Yes | — | A limit on the number of objects to return |
| skip | Number | Yes | — | The number of objects to skip before return |
| include_count | Boolean | Yes | — | To retrieve the count of results in response |

Returns:
Type
Alias

```
import contentstack_management
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch_alias()
response = branch.find()
```
