---
title: "GetStacksAsync"
description: "The get Stacks call gets all the Stack within the Organization."
url: "https://www.contentstack.com/dotnet-management-organization-getstacksasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetStacksAsync

The get Stacks call gets all the Stack within the Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query Parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Organization("<ORG_UID>").GetStacksAsync();
```
