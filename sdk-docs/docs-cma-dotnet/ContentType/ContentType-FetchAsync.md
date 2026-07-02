---
title: "FetchAsync"
description: "The Fetch a single content type call returns information of a specific content type."
url: "https://www.contentstack.com/dotnet-management-contenttype-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The Fetch a single content type call returns information of a specific content type.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").FetchAsync();
```
