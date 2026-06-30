---
title: "Update"
description: "The Update request creates a new role in a stack."
url: "https://www.contentstack.com/dotnet-management-role-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update request creates a new role in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | RoleModel | Yes | — | Role Model for creating Role. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
RoleModel model = new RoleModel(); 
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Role("<ROLE_UID>").UpdateAsync(model);
```
