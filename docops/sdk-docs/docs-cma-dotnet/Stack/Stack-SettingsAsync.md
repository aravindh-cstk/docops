---
title: "SettingsAsync"
description: "The Get stack settings call retrieves the configuration settings of an existing stack."
url: "https://www.contentstack.com/dotnet-management-stack-settingsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SettingsAsync

The Get stack settings call retrieves the configuration settings of an existing stack.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.SettingsAsync();
```
