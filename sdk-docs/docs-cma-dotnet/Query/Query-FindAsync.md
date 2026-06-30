---
title: "FindAsync"
description: "The Find all object call fetches the list of all objects owned by a particular user account."
url: "https://www.contentstack.com/dotnet-management-query-findasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FindAsync

The Find all object call fetches the list of all objects owned by a particular user account.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack().Query().Limit(5).FindAsync();
```
