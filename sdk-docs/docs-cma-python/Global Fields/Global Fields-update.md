---
title: "update"
description: "The update method updates the details of an existing global field."
url: "https://www.contentstack.com/python-management-global-fields-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method updates the details of an existing global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| global_field_uid | str | Yes | — | UID of the global field |
| data | Dict | Yes | — | The Request body |

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
client = contentstack_management.Client(authtoken="authtoken")
response = client.stack('api_key').global_fields('global_field_uid').update(data)
```
