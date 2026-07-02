---
title: "update_or_move"
description: "The update_or_move method allows you to either update the details of a folder or set the folder as a parent folder if you want to move a folder under another folder."
url: "https://www.contentstack.com/python-management-asset-update_or_move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update_or_move

The update_or_move method allows you to either update the details of a folder or set the folder as a parent folder if you want to move a folder under another folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folder_uid | str | Yes | — | UID of the folder |
| data | Dict | Yes | — | The request body |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
         "asset": {
                 "name": "Demo"
         }
}
asset = client().stack(api_key='api_key').assets()
response = asset.update_or_move(folder_uid='folder_uid', data)
```
