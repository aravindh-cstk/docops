---
title: "delete"
description: "The delete method removes an existing asset from the stack."
url: "https://www.contentstack.com/python-management-asset-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method removes an existing asset from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | Yes | — | UID of the asset |

Returns:
Type
Asset

```
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.delete("asset_uid")
```
