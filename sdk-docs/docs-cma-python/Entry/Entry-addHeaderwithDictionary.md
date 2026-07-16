---
title: "addHeader with Dictionary"
description: "The addHeader with Dictionary method adds multiple headers to the request."
url: "https://www.contentstack.com/python-management-entry-addheader-with-dictionary"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader with Dictionary

The addHeader with Dictionary method adds multiple headers to the request.

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
  "branch": "branch_uid"
}

client = contentstack_management.Client(authtoken='your_authtoken')
query = client.stack('api_key').content_types('content_type_uid').entry()
query.add_header_dict(testdict)
result = query.find()
```
