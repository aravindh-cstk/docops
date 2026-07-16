---
title: "move"
description: "The move method lets you update the details of a specific term in the taxonomy."
url: "https://www.contentstack.com/python-management-terms-move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## move

The move method lets you update the details of a specific term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | Yes | — | UID of the term |
| data | dict | Yes | — | The request body to be sent in the call. |

Returns:
Type
JSON

```
data ={
       "term": {
           "uid": "term_1"
       },
       "parent_uid": null
       }
       Under an existing Term:
       {
       "term": {
           "uid": "term_3"
       },
       "parent_uid": "term_1"
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy("taxonomy_uid").terms('terms_uid').move(data).json()
```
