---
title: "version_naming"
description: "The version\\_naming method allows you to assign a name to a specific version of an asset."
url: "https://www.contentstack.com/python-management-asset-version_naming"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version_naming

The version_naming method allows you to assign a name to a specific version of an asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The information you want to update for the specified version |
| version_number | str | Yes | — | The version of the asset you want to delete |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

version_number = 1
data = {
         "upload": {
             "_version_name": "Version name"
         }
}
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.version_naming(version_number, data)
```
