---
title: "Extension"
description: "Extension let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behavior."
url: "https://www.contentstack.com/dotnet-management-stack-extension"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Extension

Extension let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behavior.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, extension uid. |

Returns:
Type
Extension

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Extension extension = client.stack("<API_KEY>").Extension("<UID>");
```
