---
title: "GetAllAsync"
description: "The Get all request retrieves a list of all items (entries and assets) that are part of a specific Release."
url: "https://www.contentstack.com/dotnet-management-releaseitem-getallasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetAllAsync

The Get all request retrieves a list of all items (entries and assets) that are part of a specific Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item().GetAllAsync();
```
