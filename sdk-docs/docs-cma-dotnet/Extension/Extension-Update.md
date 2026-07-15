---
title: "Update"
description: "The Update extension call will update an existing extension on the stack."
url: "https://www.contentstack.com/dotnet-management-extension-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update extension call will update an existing extension on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ExtensionModel | Yes | — | Extension model for updating the Extension. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ExtensionModel model = new ExtensionModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Extension("<EXTENSION_UID>").Update(model);
```
