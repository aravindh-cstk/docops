---
title: "create"
description: "The create method allows you to create a new metadata for a specific entry or asset."
url: "https://www.contentstack.com/python-management-metadata-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method allows you to create a new metadata for a specific entry or asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
"metadata": {
           "entity_uid": "entity_uid",
           "type": "entry",
           "_content_type_uid": "sample_content",
           "extension_uid": "extension_uid",
           "presets": [{
               "uid": "presents_uid",
               "name": "Test1",
               "options": {
               }
           }]
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').metadata().create(data).json()
```
