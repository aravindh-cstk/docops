---
title: "move"
description: "The move method transfers entries or assets from one release to another, preserving locale and variant information."
url: "https://www.contentstack.com/python-management-sdk-release-items-move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## move

The `move` method transfers entries or assets from one release to another, preserving locale and variant information.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to assign the move the items |

Returns:
Type
JSON

**Example:**

```
data ={
    "release_uid": "targe_release_uid",
    "item": [
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
}
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = result = client.stack('api_key').releases('release_uid').item().move(data)
```
