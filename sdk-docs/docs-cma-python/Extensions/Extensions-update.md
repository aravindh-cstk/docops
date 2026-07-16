---
title: "update"
description: "The update method allows you to make changes in the existing extensions in the stack."
url: "https://www.contentstack.com/python-management-extensions-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to make changes in the existing extensions in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
       "extension": {
           "tags": [
               "tag1",
               "tag2"
           ],
           "data_type": "text",
           "title": "Old Extension",
           "src": "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
           "multiple": false,
           "config": "{}",
           "type": "field"
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').extension("extension_uid").update(data).json()
```
