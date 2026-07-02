---
title: "addParam with Dictionary"
description: "The addParam with Dictionary method adds multiple parameters to the request."
url: "https://www.contentstack.com/python-management-entry-addparam-with-dictionary"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam with Dictionary

The addParam with Dictionary method adds multiple parameters to the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| testdict | dict | Yes | — | Query parameter dictionary for the request |

Returns:
Type
JSON

**Example**:

```
import contentstack_management
testdict =	{
  "limit": 2,
  "skip": 2,
  "include_branch": True
}

client = contentstack_management.Client(authtoken='your_authtoken')
query = client.stack('api_key').content_types('content_type_uid').entry()
query.add_param_dict(testdict)
result = query.find()
```
