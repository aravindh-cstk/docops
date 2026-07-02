---
title: "update_asset_revision"
description: "The update\\_asset\\_revision method upgrades the specified version of the asset to the latest version."
url: "https://www.contentstack.com/python-management-asset-update_asset_revision"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update_asset_revision

The update_asset_revision method upgrades the specified version of the asset to the latest version.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the asset |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
         "asset": {
                 "title": "Title",
                 "description": "Description"
         },
         "version": 2
}
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.update_asset_revision(data)
```
