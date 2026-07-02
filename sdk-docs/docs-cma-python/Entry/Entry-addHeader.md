---
title: "addHeader"
description: "The addHeader method adds a header to the request."
url: "https://www.contentstack.com/python-management-entry-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeader

The addHeader method adds a header to the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | str | Yes | — | Header key for the request |
| value | obj | Yes | — | Header value for the request |

Returns:
Type
JSON

**Example**:

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
query = client.stack('api_key').content_types('content_type_uid').entry()
query.add_header("branch", "branch_uid")
result = query.find()
```
