---
title: "UpdateAsync"
description: "The Update extension call will update an existing extension on the stack."
url: "https://www.contentstack.com/dotnet-management-extension-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UpdateAsync

The Update extension call will update an existing extension on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ExtensionModel | Yes | — | Extension model for updating the Extension. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ExtensionModel model = new ExtensionModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Extension("<EXTENSION_UID>").UpdateAsync(model);
```
