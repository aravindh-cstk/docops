---
title: "create"
description: "The create method lets you add a new taxonomy to your stack."
url: "https://www.contentstack.com/python-management-taxonomy-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method lets you add a new taxonomy to your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | dict | Yes | — | The data to be sent in the request body |

Returns:
Type
JSON

```
data ={
       "taxonomy": {
           "uid": "taxonomy12345",
           "name": "Taxonomy 12345",
           "description": "Description for Taxonomy 1"
       }
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy().create(data).json()
```
