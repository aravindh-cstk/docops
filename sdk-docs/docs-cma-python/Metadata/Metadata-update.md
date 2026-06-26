---
title: "update"
description: "The update method allows you to make changes in the metadata for a specific entry or asset."
url: "https://www.contentstack.com/python-management-metadata-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to make changes in the metadata for a specific entry or asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the metadata |

Returns:
Type
JSON

```
data = {
       "metadata": {
           "entity_uid": "entity_uid",
           "type": "entry",
           "extension_uid": "extension_uid",
           "locale": "en_us",
           "_content_type_uid": "_content_type_uid",
           "presets": [{
                   "uid": "presets_uid",
                   "name": "test1",
                   "options": {}
               },
               {
                   "name": "Test3",
                   "uid": "presets_uid",
                   "options": {
                       "quality": "100",
                       "transform": {
                           "height": 500,
                           "width": 500
                       },
                       "image-type": "jpeg",
                       "focal-point": {
                           "x": 0,
                           "y": 0
                       }
                   }
               }
           ]
       }
   }
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').metadata("metadata_uid").update(data).json()
```
