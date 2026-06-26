---
title: "create_multiple"
description: "The create method allows you to add multiple new items in the scheduled release."
url: "https://www.contentstack.com/python-management-publish-queue-create_multiple"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create_multiple

The create method allows you to add multiple new items in the scheduled release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
"items": [{
           "uid": "entry_or_asset_uid1",
           "version": 1,
           "locale": "en-us",
           "content_type_uid": "demo1",
           "action": "publish"
       }, {
           "uid": "entry_or_asset_uid2",
           "version": 4,
           "locale": "fr-fr",
           "content_type_uid": "demo2",
           "action": "publish"
       }]
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').item().create_multiple(data)
```
