---
title: "get_subfolders"
description: "The get_subfolders method retrieves the details of only the subfolder within a specific asset folder in the stack."
url: "https://www.contentstack.com/python-management-asset-get_subfolders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## get_subfolders

The get_subfolders method retrieves the details of only the subfolder within a specific asset folder in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folder_uid | str | Yes | — | The UID of the folder |
| query | str | Yes | — | The search query for the folder |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

query = {"is_dir": True}
asset = client().stack(api_key='api_key').assets()
response = asset.folder_collection(folder_uid='folder_uid', query)
```
