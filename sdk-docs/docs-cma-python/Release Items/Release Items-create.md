---
title: "create"
description: "The create method allows you to add a new item in the scheduled release."
url: "https://www.contentstack.com/python-management-publish-queue-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method allows you to add a new item in the scheduled release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
"item": {
           "version": 1,
           "uid": "entry_or_asset_uid",
           "content_type_uid": "your_content_type_uid",
           "action": "publish",
           "locale": "en-us"
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').item().create(data)
```
