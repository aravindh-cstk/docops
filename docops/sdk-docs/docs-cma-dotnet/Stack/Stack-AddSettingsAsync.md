---
title: "AddSettingsAsync"
description: "The Add stack settings request lets you add additional settings for your existing stack."
url: "https://www.contentstack.com/dotnet-management-stack-addsettingsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## AddSettingsAsync

The Add stack settings request lets you add additional settings for your existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| settings | StackSettings | Yes | — | Stack settings details. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>")
.AddSettingsAsync(settings);
```
