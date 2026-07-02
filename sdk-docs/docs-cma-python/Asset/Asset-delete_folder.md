---
title: "delete_folder"
description: "The delete\\_folder method removes an existing asset folder along with all the assets within that folder."
url: "https://www.contentstack.com/python-management-asset-delete_folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete_folder

The delete_folder method removes an existing asset folder along with all the assets within that folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folder_uid | str | Yes | — | The UID of the folder you want to delete |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.delete(folder_uid='folder_uid')
```
