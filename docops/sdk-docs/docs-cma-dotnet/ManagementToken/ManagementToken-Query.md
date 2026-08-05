---
title: "Query"
description: "The Query on ManagementToken request returns the details of all the management tokens generated in a stack."
url: "https://www.contentstack.com/dotnet-management-managementtoken-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

The Query on ManagementToken request returns the details of all the management tokens generated in a stack.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Tokens;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").ManagementToken().Query();
```
