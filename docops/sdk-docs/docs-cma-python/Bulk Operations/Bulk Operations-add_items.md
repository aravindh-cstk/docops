---
title: "add_items"
description: "The `add_items` method adds multiple entries and assets to a specified release for bulk publishing and coordinated deployment."
url: "https://www.contentstack.com/python-management-sdk-bulk-operations-add_items"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## add_items

The `add_items` method adds multiple entries and assets to a specified release for bulk publishing and coordinated deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to add the entries |

Returns:
Type
JSON

**Example:**

```
data = {
    "release": "release_uid"
    "action": "publish",
    "locale": ["en-us", "hi-in"]
    "reference": true
    "items": [
        {
        "uid": "entry_uid",
        "content_type_uid": "content_type_uid"
        }
    ]
}

import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().add_items(data).json()
```
