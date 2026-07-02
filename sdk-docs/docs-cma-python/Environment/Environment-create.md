---
title: "create"
description: "The create method adds a new publishing environment in your stack."
url: "https://www.contentstack.com/python-management-environment-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method adds a new publishing environment in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new environment |

Returns:
Type
JSON

```
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
response = client.stack('api_key').environments().create(data).json()
```
