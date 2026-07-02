---
title: "version_delete"
description: "The version_delete method allows you to remove the name of a specific version of an asset and resets it to the version number."
url: "https://www.contentstack.com/python-management-asset-version_delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## version_delete

The version_delete method allows you to remove the name of a specific version of an asset and resets it to the version number.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| version_number | str | Yes | — | The version of the asset you want to delete |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

version_number = 1
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.version_delete(version_number)
```
