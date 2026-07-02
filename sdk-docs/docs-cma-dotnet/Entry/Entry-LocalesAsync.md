---
title: "LocalesAsync"
description: "The Get languages of an entry call returns the details of all the languages that an entry exists in."
url: "https://www.contentstack.com/dotnet-management-entry-localesasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## LocalesAsync

The Get languages of an entry call returns the details of all the languages that an entry exists in.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").LocalesAsync();
```
