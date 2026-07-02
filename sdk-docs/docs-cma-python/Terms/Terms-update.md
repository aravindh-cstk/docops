---
title: "update"
description: "The update method updates a resource with the given data and terms UID."
url: "https://www.contentstack.com/python-management-terms-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method updates a resource with the given data and terms UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | Yes | — | UID of the term. |
| data | dict | Yes | — | The data to be sent in the request body |

Returns:
Type
JSON

```
data ={
       "term": {
           "name": "Term 1"
       }
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy("taxonomy_uid").terms('terms_uid').update(data)
```
