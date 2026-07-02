---
title: "CreateAsync"
description: "The Create is used to create a custom field, custom-widget, dashboard widget to the Stack."
url: "https://www.contentstack.com/dotnet-management-extension-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

The Create is used to create a custom field, custom-widget, dashboard widget to the Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ExtensionModel | Yes | — | Extension model for creating the Extension. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ExtensionModel model = new ExtensionModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Extension().CreateAsync(model);
```
