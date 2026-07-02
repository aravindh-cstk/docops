---
title: "update_items"
description: "The update_items method updates all release items (entries and assets) to their latest versions before deployment, ensuring the most current content is published."
url: "https://www.contentstack.com/python-management-sdk-bulk-operations-update_items"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update_items

The `update_items` method updates all release items (entries and assets) to their latest versions before deployment, ensuring the most current content is published.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to update the items |

Returns:
Type
JSON

**Example:**

```
data = {
    "release": "release_uid",
    "items": [
        {
            "uid": "entry_uid",
            "locale": "en-us"
        },
        {
            "uid": "entry_uid",
            "locale": "en-us",
            "variant_id": "entry_variant_id"
        }
    ]
    or
    [ '$all' ]
}
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().update_items(data).json()
```
