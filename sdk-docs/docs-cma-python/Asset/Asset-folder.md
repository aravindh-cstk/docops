---
title: "folder"
description: "The folder method retrieves the details of a specific asset folder in the stack using the folder UID."
url: "https://www.contentstack.com/python-management-asset-folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## folder

The folder method retrieves the details of a specific asset folder in the stack using the folder UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folder_uid | str | Yes | — | UID of the folder |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.folder_collection(folder_uid='folder_uid')
```
