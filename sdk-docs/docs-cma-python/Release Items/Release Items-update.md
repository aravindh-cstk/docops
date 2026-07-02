---
title: "update"
description: "The update method allows you to update the items in the specific release to their latest version before deployment."
url: "https://www.contentstack.com/python-management-release-items-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to update the items in the specific release to their latest version before deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the Release Item |
| item_uid | str | Yes | — | UID of the item |

Returns:
Type
JSON

```
data = {
   "items":[
       "$all"
   ]
 }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases("release_uid").item().update(data)
```
