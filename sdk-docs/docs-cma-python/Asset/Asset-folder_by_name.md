---
title: "folder_by_name"
description: "The folder\\_by\\_name method retrieves the details of a specific asset folder in the stack using the folder name."
url: "https://www.contentstack.com/python-management-asset-folder_by_name"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## folder_by_name

The folder_by_name method retrieves the details of a specific asset folder in the stack using the folder name.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | str | Yes | — | The search query for the folder |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

query = {"is_dir": True, "name": "folder_name"}
asset = client().stack(api_key='api_key').assets()
response = asset.folder_collection(query)
```
