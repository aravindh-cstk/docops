---
title: "ResetSettingsAsync"
description: "The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack."
url: "https://www.contentstack.com/dotnet-management-stack-resetsettingsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ResetSettingsAsync

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.ResetSettingsAsync();
```
