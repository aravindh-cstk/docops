---
title: "Settings"
description: "The Get stack settings call retrieves the configuration settings of an existing stack."
url: "https://www.contentstack.com/dotnet-management-stack-settings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Settings

The Get stack settings call retrieves the configuration settings of an existing stack.

No parameters.

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.Settings();
```
