---
title: "SyncToken"
description: "Syncs the token."
url: "https://www.contentstack.com/dotnet-contentstackclient-synctoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SyncToken

Syncs the token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| SyncToken | string | No | — | Sync token. |

Returns:
Type
Task<SyncStack>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncToken("sync_token");
```
