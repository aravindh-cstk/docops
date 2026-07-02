---
title: "Upload"
description: "The Upload request is used to upload a new custom-field, custom-widget, dashboard widget to the Stack."
url: "https://www.contentstack.com/dotnet-management-extension-upload"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Upload

The Upload request is used to upload a new custom-field, custom-widget, dashboard widget to the Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | IExtensionInterface | Yes | — | IExtensionInterface with details for uploading the extension. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
CustomFieldModel model = new CustomFieldModel("FILE_PATH", "FILE_CONTENT_TYPE", "TITLE", "DATA_TYPE");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Extension().Upload(model);
```
