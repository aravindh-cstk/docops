---
title: "DeleteAsync"
description: "The Delete extension call will delete an existing extension from the stack."
url: "https://www.contentstack.com/dotnet-management-extension-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeleteAsync

The Delete extension call will delete an existing extension from the stack.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Extension("<EXTENSION_UID>").DeleteAsync();
```
