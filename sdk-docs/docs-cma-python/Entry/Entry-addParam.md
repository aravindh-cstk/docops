---
title: "addParam"
description: "The addParam method adds a parameter to the request."
url: "https://www.contentstack.com/python-management-entry-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The addParam method adds a parameter to the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | str | Yes | — | Query parameter key for the request |
| value | str/int | Yes | — | Query parameter value for the request |

Returns:
Type
JSON

**Example 1**:

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
query = client.stack('api_key').content_types('content_type_uid').entry()
query.add_param("limit", 2)
result = query.find()
```

**Example 2**:

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
query = client.stack('api_key').content_types('content_type_uid').entry()
query.add_param("skip", 2)
result = query.find()
```
