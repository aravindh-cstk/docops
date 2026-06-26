---
title: "update"
description: "The Update method is used to update an existing label."
url: "https://www.contentstack.com/python-management-labels-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update method is used to update an existing label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | dict | Yes | — | The updated data of the label |
| label_uid | str | Yes | — | UID of the label |

Returns:
Type
JSON

```
data ={
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
response = client.stack('api_key').label("label_uid").update(data).json()
```
