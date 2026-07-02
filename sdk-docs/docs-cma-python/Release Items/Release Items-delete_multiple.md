---
title: "delete_multiple"
description: "The delete_multiple method removes one or more items from the specific release."
url: "https://www.contentstack.com/python-management-publish-queue-delete_multiple"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete_multiple

The delete_multiple method removes one or more items from the specific release.

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
           "uid": "item_uid",
           "locale": "en-us",
           "version": 1,
           "content_type_uid": "your_content_type_uid",
           "action": "publish_or_unpublish"
       }]
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = result = client.stack('api_key').releases('release_uid').item().delete_multiple(data)
```
