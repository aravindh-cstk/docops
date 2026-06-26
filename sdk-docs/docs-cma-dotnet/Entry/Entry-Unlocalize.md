---
title: "Unlocalize"
description: "The Unlocalize an entry request is used to unlocalize an existing entry."
url: "https://www.contentstack.com/dotnet-management-entry-unlocalize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Unlocalize

The Unlocalize an entry request is used to unlocalize an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | — | Enter the code of the language to unlocalize the entry of that particular language. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Unlocalize("hi-in");
```
