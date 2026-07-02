---
title: "Locale"
description: "Contentstack has a sophisticated multilingual capability. It allows you to create and publish entries in any language."
url: "https://www.contentstack.com/dotnet-management-stack-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Locale

Contentstack has a sophisticated multilingual capability. It allows you to create and publish entries in any language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| code | string | No | — | Optional, locale code. |

Returns:
Type
Locale

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Locale locale = client.stack("<API_KEY>").Locale("<CODE>");
```
