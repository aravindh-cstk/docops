---
title: "Version"
description: "The Versioning on Asset will allow to fetch all version, delete specific version or naming the asset version."
url: "https://www.contentstack.com/dotnet-management-asset-version"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Version

The Versioning on Asset will allow to fetch all version, delete specific version or naming the asset version.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| versionNumber | int | No | — | Version number for the asset. |

Returns:
Type
Version

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Version version = await client.Stack("<API_KEY>")..Asset("<ASSET_UID>").Version();
```
