---
title: "find"
description: "The find method retrieves the details of all the branches in a particular branch."
url: "https://www.contentstack.com/python-management-branches-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of all the branches in a particular branch.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | Number | Yes | — | A limit on the number of objects to return |
| skip | Number | Yes | — | The number of objects to skip before return |
| include_count | Boolean | Yes | — | To retrieve the count of results in response |

Returns:
Type
Branch

```
import contentstack
import contentstack_management
branch = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').branch()
response = branch.find()
```
