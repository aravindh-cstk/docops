---
title: "Fetch"
description: "Retrieves the details of a specific entry variant."
url: "https://www.contentstack.com/dotnet-management-entryvariant-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch

Retrieves the details of a specific entry variant.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters to filter the response. When `null` , API defaults apply. |

Returns:
Type
ContentstackResponse. The requested entry variant.

**Validation**

Throws `InvalidOperationException` if no variant UID is set on the `EntryVariant` instance. Pass a variant UID or alias to `.Variant(uid)` before calling `Fetch()`. `Fetch()` retrieves a single variant and therefore requires a variant identifier.

**Behavior**

- Sends a GET request to `/content_types/{contentTypeUid}/entries/{entryUid}/variants/{variantUid}`. Returns the raw API response wrapped in `ContentstackResponse`.
- Each call maps to a single HTTP request.

**Implementation and examples**

The following example retrieves a specific entry variant.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID")
    .Fetch();
```

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID", "BRANCH_UID")
    .Fetch();
```
