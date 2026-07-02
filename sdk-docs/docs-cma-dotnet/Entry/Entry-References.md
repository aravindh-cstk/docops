---
title: "References"
description: "The Get references of an entry call returns all the entries of content types that are referenced by a particular entry."
url: "https://www.contentstack.com/dotnet-management-entry-references"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## References

The Get references of an entry call returns all the entries of content types that are referenced by a particular entry.

No parameters.

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").References();
```
