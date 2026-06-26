---
title: "Query"
description: "The Query on ReleaseModel request retrieves a list of all Releases of a stack along with details of each Release."
url: "https://www.contentstack.com/dotnet-management-release-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

The Query on ReleaseModel request retrieves a list of all Releases of a stack along with details of each Release.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").Release().Query();
```
