---
title: "assets"
description: "Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use. The assets method retrieves a specific asset in the stack"
url: "https://www.contentstack.com/python-management-stack-assets"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assets

Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use. The assets method retrieves a specific asset in the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | str | No | — | UID of the asset |
| branch | str | No | — | Branch where the asset is added |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="auth_token")
assets = client.stack(api_key).assets()
```
