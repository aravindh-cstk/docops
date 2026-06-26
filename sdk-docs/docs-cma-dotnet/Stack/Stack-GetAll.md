---
title: "GetAll"
description: "The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account."
url: "https://www.contentstack.com/dotnet-management-stack-getall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetAll

The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account.

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
ContentstackResponse contentstackResponse = client.Stack().GetAll();
```
