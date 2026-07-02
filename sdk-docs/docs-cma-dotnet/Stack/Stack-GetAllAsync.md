---
title: "GetAllAsync"
description: "The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account."
url: "https://www.contentstack.com/dotnet-management-stack-getallasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetAllAsync

The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account.

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
ContentstackResponse contentstackResponse = await client.Stack().GetAllAsync();
```
