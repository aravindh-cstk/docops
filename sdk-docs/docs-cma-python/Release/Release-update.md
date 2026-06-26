---
title: "update"
description: "The update method allows you to update the details of a Release."
url: "https://www.contentstack.com/python-management-release-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to update the details of a Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the Release |
| release_uid | str | Yes | — | UID of the release |

Returns:
Type
JSON

```
data = {
       "release": {
           "name": "Release Name",
           "description": "2018-12-22"
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases("release_uid").update(data).json()
```
