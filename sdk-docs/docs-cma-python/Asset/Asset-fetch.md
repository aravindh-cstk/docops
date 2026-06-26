---
title: "fetch"
description: "The fetch method retrieves the details of a specific version of a particular asset"
url: "https://www.contentstack.com/python-management-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific version of a particular asset

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | Yes | — | UID of the asset |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.fetch("asset_uid")
```
