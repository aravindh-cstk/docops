---
title: "ContentType"
description: "Represents a ContentType. Creates ContenntType Instance."
url: "https://www.contentstack.com/dotnet-contentstackclient-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ContentType

Represents a ContentType. Creates ContenntType Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | string | No | — | ContentType UID. |

Returns:
Type
ContentType

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentType contentType = stack.ContentType("content_type_uid");
```
