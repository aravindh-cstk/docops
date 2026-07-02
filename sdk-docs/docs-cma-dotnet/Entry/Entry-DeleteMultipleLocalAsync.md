---
title: "DeleteMultipleLocalAsync"
description: "The Delete Locale will delete specific localized entries by passing the locale codes."
url: "https://www.contentstack.com/dotnet-management-entry-deletemultiplelocalasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## DeleteMultipleLocalAsync

The Delete Locale will delete specific localized entries by passing the locale codes.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locales | List<string> | No | — | Enter the code of the language to unlocalize the entry of that particular language. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
List<string> locales = new List<string>(); 
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").DeleteMultipleLocalAsync(locales);
```
