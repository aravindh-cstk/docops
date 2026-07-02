---
title: "create_folder"
description: "The create\\_folder method creates a new asset folder and/or adds a parent folder to it in a particular stack."
url: "https://www.contentstack.com/python-management-asset-create_folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create_folder

The create_folder method creates a new asset folder and/or adds a parent folder to it in a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | - | The data you want to send to the server when creating a folder. |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
    >>>     "asset": {
        >>>         "name": "Demo"
    >>>     }
}
asset = client().stack(api_key='api_key').assets()
response = asset.create_folder(data)
```
