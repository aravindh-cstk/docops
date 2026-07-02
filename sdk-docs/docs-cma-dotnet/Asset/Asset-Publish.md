---
title: "Publish"
description: "The Publish an asset call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time."
url: "https://www.contentstack.com/dotnet-management-asset-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Publish

The Publish an asset call is used to publish a specific version of an asset on the desired environment either immediately or at a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| details | PublishUnpublishDetails | Yes | — | Publish details for publishing asset. |
| apiVersion | string | No | — | API version to pass in headers. Pass the value 3.2 to use latest Publish API. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishUnpublishDetails details = new PublishUnpublishDetails();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Asset("<ASSET_UID>").Publish(new PublishUnpublishDetails(), apiVersion: "3.2");
```
