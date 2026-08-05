---
title: "GetUserAsync"
description: "The Get user call returns comprehensive information of an existing user account."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-getuserasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetUserAsync

The Get user call returns comprehensive information of an existing user account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | Yes | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.GetUserAsync();
```
