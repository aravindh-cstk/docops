---
title: "GetAll"
description: "The Get all request retrieves a list of all items (entries and assets) that are part of a specific Release."
url: "https://www.contentstack.com/dotnet-management-releaseitem-getall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetAll

The Get all request retrieves a list of all items (entries and assets) that are part of a specific Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item().GetAll();
```
