---
title: "Find"
description: "Retrieves all variants for a specific entry."
url: "https://www.contentstack.com/dotnet-management-entryvariant-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Find

Retrieves all variants for a specific entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters such as `limit` and `skip` to filter or paginate results. When `null` , API defaults apply. |

Returns:
Type
ContentstackResponse. The variants associated with the specified entry.

**Validation**

Throws `InvalidOperationException` if a variant UID is set on the `EntryVariant` instance. Call `.Variant()` without a UID argument to list all variants.

**Behavior**

- Sends a GET request to `/content_types/{contentTypeUid}/entries/{entryUid}/variants`. Returns the raw API response wrapped in `ContentstackResponse`.
- The Contentstack Management .NET SDK does not paginate automatically. Use `collection` to control `limit` and `skip`.

**Implementation and examples**

The following example retrieves all variants for an entry.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant()
    .Find();
```

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant(null, "BRANCH_UID")
    .Find();
```
