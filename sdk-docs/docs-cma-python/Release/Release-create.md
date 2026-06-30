---
title: "create"
description: "The create method allows you to create a new release in your stack. To add entries/assets to a release, you need to provide the UIDs of the entries/assets in items in the request body."
url: "https://www.contentstack.com/python-management-release-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method allows you to create a new release in your stack. To add entries/assets to a release, you need to provide the UIDs of the entries/assets in items in the request body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
data = {
       "release": {
           "name": "Release Name",
           "description": "2018-12-12",
           "locked": false,
           "archived": false
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases().create(data).json()
```
