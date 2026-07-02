---
title: "delete"
description: "The delete method removes an item from the specific release."
url: "https://www.contentstack.com/python-management-publish-queue-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an item from the specific release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |
| release_uid | str | Yes | — | UID of the release |

Returns:
Type
Release Item

```
data = {
       "items": [{
           "uid": "items_uid",
           "version": 1,
           "locale": "ja-jp",
           "content_type_uid": "category",
           "action": "publish"
       }]
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = result = client.stack('api_key').releases('release_uid').item().delete(data)
```
