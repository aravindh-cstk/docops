---
title: "CreateAsync"
description: "This call lets you add a new language to your stack. You can either add a supported language or a custom language of your choice."
url: "https://www.contentstack.com/dotnet-management-locale-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

This call lets you add a new language to your stack. You can either add a supported language or a custom language of your choice.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | LocaleModel | Yes | — | Locale Model for creating locale. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
LocaleModel model = new LocaleModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Locale().CreateAsync(model);
```
