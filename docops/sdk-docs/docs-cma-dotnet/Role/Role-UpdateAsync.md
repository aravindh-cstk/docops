---
title: "UpdateAsync"
description: "The Update request creates a new role in a stack."
url: "https://www.contentstack.com/dotnet-management-role-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateAsync

The Update request creates a new role in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | RoleModel | Yes | — | Role Model for creating Role. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
RoleModel model = new RoleModel(); 
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Role("<ROLE_UID>").UpdateAsync(model);
```
