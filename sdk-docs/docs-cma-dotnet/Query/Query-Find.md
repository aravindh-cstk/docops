---
title: "Find"
description: "The Find all object call fetches the list of all objects owned by a particular user account."
url: "https://www.contentstack.com/dotnet-management-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Find

The Find all object call fetches the list of all objects owned by a particular user account.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack().Query().Limit(5).Find();
```
