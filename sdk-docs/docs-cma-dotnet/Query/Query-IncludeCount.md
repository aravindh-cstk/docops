---
title: "IncludeCount"
description: "The ‘include_count’ parameter returns the total number of object related to the user."
url: "https://www.contentstack.com/dotnet-management-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeCount

The ‘include_count’ parameter returns the total number of object related to the user.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack().Query().IncludeCount();
```
