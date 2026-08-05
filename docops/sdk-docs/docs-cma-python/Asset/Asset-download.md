---
title: "download"
description: "The download method lets you save the specific asset in your local storage."
url: "https://www.contentstack.com/python-management-asset-download"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## download

The download method lets you save the specific asset in your local storage.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | Yes | — | UID of the asset |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.download()
```
