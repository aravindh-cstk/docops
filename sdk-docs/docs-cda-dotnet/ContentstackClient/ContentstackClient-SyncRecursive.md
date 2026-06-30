---
title: "SyncRecursive"
description: "Syncs the recursive language."
url: "https://www.contentstack.com/dotnet-contentstackclient-syncrecursive"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SyncRecursive

Syncs the recursive language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Locale | string | No | — | Locale |
| SyncType | SyncType | No | — | Sync type. |
| ContentTypeUid | string | No | — | Content type uid. |
| StartFrom | DateTime | No | — | Start from. |

Returns:
Type
Task<SyncStack>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncRecursive();
```

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncRecursive(SyncType: SyncType.AssetPublished);
```

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncRecursive(ContentTypeUid: "source");
```

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncRecursive(StartFrom:DateTime.Now);
```

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
SyncStack result = await client.SyncRecursive(SyncType: SyncType.EntryPublished, ContentTypeUid: "source");
```
