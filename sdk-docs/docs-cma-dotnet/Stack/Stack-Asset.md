---
title: "Asset"
description: "Asset refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use."
url: "https://www.contentstack.com/dotnet-management-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Asset

Asset refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, asset uid. |

Returns:
Type
Asset

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Asset asset = client.stack("<API_KEY>").Asset("<UID>");
```
