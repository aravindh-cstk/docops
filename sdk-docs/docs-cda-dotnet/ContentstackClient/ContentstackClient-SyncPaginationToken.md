---
title: "SyncPaginationToken"
description: "Syncs the pagination token."
url: "https://www.contentstack.com/dotnet-contentstackclient-syncpaginationtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SyncPaginationToken

Syncs the pagination token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paginationToken | string | No | — | Pagination token. |

Returns:
Type
Task<SyncStack>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await stack.SyncPaginationTokenn("pagination_token");
```
