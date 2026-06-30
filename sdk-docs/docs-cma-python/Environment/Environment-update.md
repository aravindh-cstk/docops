---
title: "update"
description: "The update method allows you to make changes in the existing environment for a stack."
url: "https://www.contentstack.com/python-management-environment-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to make changes in the existing environment for a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the environment |

Returns:
Type
JSON

```
data = {
       "environment": {
           "name": "development",
           "urls": [{
               "locale": "en-us",
               "url": "http://example.com/"
           }]
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').environments("environment_name").update(data).json()
```
