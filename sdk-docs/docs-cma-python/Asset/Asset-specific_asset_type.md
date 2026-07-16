---
title: "specific_asset_type"
description: "The specific\\_asset\\_type method retrieves the assets based on the query request."
url: "https://www.contentstack.com/python-management-asset-specific_asset_type"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## specific_asset_type

The specific_asset_type method retrieves the assets based on the query request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_type | str | No | - | The type of asset you want to retrieve |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

asset_type = "images"
asset = client().stack(api_key='api_key').assets()
response = asset.specific_asset_type(asset_type)
```
