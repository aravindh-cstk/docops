---
title: "asset"
description: "Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use."
url: "https://www.contentstack.com/js-management-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset

Assets refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for asset to perform operation on. |

Returns:
Type
Asset

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset()
// OR
client.stack({ api_key: 'api_key'}).asset('uid')
```
