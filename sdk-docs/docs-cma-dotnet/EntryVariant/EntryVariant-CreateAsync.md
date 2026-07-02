---
title: "CreateAsync"
description: "Creates or replaces the content of a specific entry variant asynchronously."
url: "https://www.contentstack.com/dotnet-management-entryvariant-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

Creates or replaces the content of a specific entry variant asynchronously.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | object | Yes | NA | Defines the variant entry data, including `entry` fields and `_variant` metadata. The `_variant` object must include `_change_set` (list of field names to write) and `_order` (field ordering). |
| collection | ParameterCollection | No | null | Defines optional query parameters. When `null` , API defaults apply. |

Returns:
Type
Task<ContentstackResponse>. Resolves to the created or updated variant content.

**Validation**

The following validation applies to the parameters above:

- Throws `InvalidOperationException` if no variant UID is set on the `EntryVariant` instance. Pass the target variant UID to `.Variant(uid)` before calling `CreateAsync`.
- Throws `InvalidOperationException` if the client is not authenticated.

**Behavior**

Sends a PUT request to `/content_types/{contentTypeUid}/entries/{entryUid}/variants/{variantUid}` asynchronously. Returns the raw API response wrapped in `ContentstackResponse`.

**Implementation and examples**

The following example creates content for a specific entry variant asynchronously.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");

var variantData = new
{
    entry = new
    {
        title = "ENTRY_TITLE",
        description = "ENTRY_DESCRIPTION"
    },
    _variant = new
    {
        _change_set = new[] { "title", "description" },
        _order = new string[] { }
    }
};

ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID")
    .CreateAsync(variantData);
```

The following example creates variant content asynchronously, scoped to a specific branch.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("AUTH_TOKEN");

var variantData = new
{
    entry = new
    {
        title = "ENTRY_TITLE",
        description = "ENTRY_DESCRIPTION"
    },
    _variant = new
    {
        _change_set = new[] { "title", "description" },
        _order = new string[] { }
    }
};

ContentstackResponse response = await client
    .Stack("API_KEY")
    .ContentType("CONTENT_TYPE_UID")
    .Entry("ENTRY_UID")
    .Variant("VARIANT_UID", "BRANCH_UID")
    .CreateAsync(variantData);
```
