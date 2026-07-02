---
title: "Fetch"
description: "The Get an extension call returns comprehensive information about a specific extension of a stack."
url: "https://www.contentstack.com/dotnet-management-extension-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch

The Get an extension call returns comprehensive information about a specific extension of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Extension("<EXTENSION_UID>").Fetch();
```
