---
title: "UnlinkContentTypesAsync"
description: "The UnlinkContentTypesAsync method allows you to unlink content types to your variant group."
url: "https://www.contentstack.com/dotnet-management-variantgroups-unlinkcontenttypesasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UnlinkContentTypesAsync

The `UnlinkContentTypesAsync` method allows you to unlink content types to your variant group.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUids | List<string> | Yes | — | List of content type UIDs to be linked to the variant group |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
List<string> contentTypeUids = new List<string> { "content_type_uid_1", "content_type_uid_2" };
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").VariantGroups("<VARIANT_GROUP_UID>").UnlinkContentTypesAsync(contentTypeUids);
```
