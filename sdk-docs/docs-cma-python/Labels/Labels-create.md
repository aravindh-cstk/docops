---
title: "create"
description: "The Create method creates a new label."
url: "https://www.contentstack.com/python-management-labels-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create method creates a new label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | dict | Yes | — | Data required to create a new label |

Returns:
Type
JSON

```
data = {
"label": {
"name": "Test",
"parent": [
"label_uid"
],
"content_types": [
"content_type_uid"
]
}
}

import contentstack_management 
client = contentstack_management.Client(authtoken='your_authtoken')
response = client.stack('api_key').label().create(data).json()
```
