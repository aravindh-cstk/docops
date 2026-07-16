---
title: "create"
description: "The create method creates a new global field in a particular stack."
url: "https://www.contentstack.com/python-management-global-fields-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new global field in a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
           "global_field": {
               "title": "Servlet",
               "uid": "servlet",
           "schema": [{
                   "display_name": "Name",
                   "uid": "name",
                   "data_type": "text"
               }
       }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields().create(data)
```
