---
title: "subfolder"
description: "The subfolder method retrieves the details of assets and subfolders of a specific parent folder."
url: "https://www.contentstack.com/python-management-asset-subfolder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## subfolder

The subfolder method retrieves the details of assets and subfolders of a specific parent folder.

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
response = asset.subfolders("folder_uid")
```
