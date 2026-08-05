---
title: "Item"
description: "The list of all items (entries and assets) that are part of a specific Release."
url: "https://www.contentstack.com/dotnet-management-release-item"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Item

The list of all items (entries and assets) that are part of a specific Release.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseItem item = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item();
```
