---
title: "PublishAsync"
description: "The Publish an asset call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time."
url: "https://www.contentstack.com/dotnet-management-asset-publishasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## PublishAsync

The Publish an asset call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| details | PublishUnpublishDetails | Yes | — | Publish details for publishing asset. |
| apiVersion | string | No | — | API version to pass in headers. Pass the value 3.2 to use latest publish API. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishUnpublishDetails details = new PublishUnpublishDetails();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset("<ASSET_UID>").PublishAsync(new PublishUnpublishDetails(), apiVersion: "3.2");
```
