---
title: "FetchAsync"
description: "Retrieves the details of a specific entry variant asynchronously."
url: "https://www.contentstack.com/dotnet-management-entryvariant-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

Retrieves the details of a specific entry variant asynchronously.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters to filter the response. When `null` , API defaults apply. |

Returns:
Type
Task<ContentstackResponse>. Resolves to the requested entry variant.

**Validation**

Throws `InvalidOperationException` if no variant UID is set on the `EntryVariant` instance. Pass a variant UID or alias to `.Variant(uid)` before calling `FetchAsync`.

**Behavior**

- Sends a GET request to `/content_types/{contentTypeUid}/entries/{entryUid}/variants/{variantUid}` asynchronously. Returns the raw API response wrapped in `ContentstackResponse`.
- Each call maps to a single HTTP request.

**Implementation and examples**

The following example retrieves a specific entry variant asynchronously.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID")
    .FetchAsync();
```

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");
ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID", "BRANCH_UID")
    .FetchAsync();
```
