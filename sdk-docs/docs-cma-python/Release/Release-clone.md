---
title: "clone"
description: "The clone method allows you to make a copy of a specific release in the stack."
url: "https://www.contentstack.com/python-management-release-clone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## clone

The clone method allows you to make a copy of a specific release in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | data = { | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
data = {
       "release": {
           "name": "New Release Name",
           "description": "2018-12-12"
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').clone(data).json()
```
