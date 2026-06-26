---
title: "version"
description: "The version method retrieves the details of all versions of an asset."
url: "https://www.contentstack.com/python-management-asset-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## version

The version method retrieves the details of all versions of an asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | Yes | — | UID of the asset |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.version()
```
