---
title: "specific_folder"
description: "The specific\\_folder method retrieves the details of assets of a specific asset folder without the subfolders in the requested parent folder."
url: "https://www.contentstack.com/python-management-asset-specific_folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## specific_folder

The specific_folder method retrieves the details of assets of a specific asset folder without the subfolders in the requested parent folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| folder_uid | str | Yes | - | UID of the folder |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.specific_folder("folder_uid")
```
