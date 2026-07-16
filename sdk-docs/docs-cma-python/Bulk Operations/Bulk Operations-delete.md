---
title: "delete"
description: "The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time."
url: "https://www.contentstack.com/python-management-bulk-operations-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
       "entries":[{
           "content_type":"content_type_uid",
           "uid":"entry_uid",
           "locale":"locale"
       },{
           "content_type":"content_type_uid",
           "uid":"entry_uid",
           "locale":"entry_locale"
       }
       ],
       "assets": [{
           "uid": "uid"
       }]
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().delete(data).json()
```
