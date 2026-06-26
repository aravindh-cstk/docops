---
title: "UpdateAsync"
description: "Updates the content of a specific entry variant asynchronously."
url: "https://www.contentstack.com/dotnet-management-entryvariant-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateAsync

Updates the content of a specific entry variant asynchronously.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | object | Yes | NA | Defines the updated variant entry data, including `entry` fields and `_variant` metadata. Use `_change_set` to list the fields to overwrite. |
| collection | ParameterCollection | No | null | Defines optional query parameters. When `null` , API defaults apply. |

Returns:
Type
ContentstackResponse. Resolves to the updated variant content.

**Validation**

Throws `InvalidOperationException` if no variant UID is set on the `EntryVariant` instance. Pass the target variant UID to `.Variant(uid)` before calling `UpdateAsync`.

**Behavior**

- Delegates to `CreateAsync` internally and sends a PUT request to `/content_types/{contentTypeUid}/entries/{entryUid}/variants/{variantUid}` asynchronously. Returns the raw API response wrapped in `ContentstackResponse`.
- Both `CreateAsync` and `UpdateAsync` are functionally identical. `UpdateAsync` is a semantic alias for update workflows.

**Implementation and examples**

The following example updates specific fields of an entry variant asynchronously.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");

var variantData = new
{
    entry = new
    {
        title = "UPDATED_TITLE",
        url = "UPDATED_URL"
    },
    _variant = new
    {
        _change_set = new[] { "title", "url" },
        _order = new string[] { }
    }
};

ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID")
    .UpdateAsync(variantData);
```

The following example updates variant content asynchronously, scoped to a specific branch.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");

var variantData = new
{
    entry = new
    {
        title = "UPDATED_TITLE",
        url = "UPDATED_URL"
    },
    _variant = new
    {
        _change_set = new[] { "title", "url" },
        _order = new string[] { }
    }
};

ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID", "BRANCH_UID")
    .UpdateAsync(variantData);
```
