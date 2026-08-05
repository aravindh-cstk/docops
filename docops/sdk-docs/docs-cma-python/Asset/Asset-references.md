---
title: "references"
description: "The references method retrieves the details of the entries and content types in which a specific asset is referenced."
url: "https://www.contentstack.com/python-management-asset-references"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## references

The references method retrieves the details of the entries and content types in which a specific asset is referenced.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | Yes | — | UID of the asset |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.references()
```
