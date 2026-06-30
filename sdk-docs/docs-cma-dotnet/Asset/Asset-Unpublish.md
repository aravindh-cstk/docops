---
title: "Unpublish"
description: "The Unpublish an asset call is used to unpublish a specific version of an asset from a desired environment."
url: "https://www.contentstack.com/dotnet-management-asset-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Unpublish

The Unpublish an asset call is used to unpublish a specific version of an asset from a desired environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| details | PublishUnpublishDetails | Yes | — | Publish details for un-publishing asset. |
| apiVerison | string | No | — | API version to pass in headers. Pass the value 3.2 to use latest Unpublish API. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishUnpublishDetails details = new PublishUnpublishDetails();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Asset("<ASSET_UID>").Unpublish(new PublishUnpublishDetails(), apiVersion: "3.2");
```
