---
title: "create"
description: "The create method lets you create a new term to your taxonomy."
url: "https://www.contentstack.com/python-management-terms-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method lets you create a new term to your taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | dict | Yes | — | The request body to be sent in the call. |

Returns:
Type
JSON

```
data ={
       "term": {
           "uid": "term_1",
           "name": "Term 1"
       },
       "parent_uid": null
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').terms().create(data)
```
