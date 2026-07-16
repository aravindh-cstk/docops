---
title: "update"
description: "The update method lets you update the details of an existing taxonomy in your stack."
url: "https://www.contentstack.com/python-management-taxonomy-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method lets you update the details of an existing taxonomy in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | dict | Yes | — | The request body to be sent in the call |

Returns:
Type
JSON

```
data ={
   "taxonomy": {
       "name": "Taxonomy 12345",
       "description": "Description updated for Taxonomy 12345"
   }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy("taxonomy_uid").update(data).json()
```
