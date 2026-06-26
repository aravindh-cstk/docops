---
title: "BulkDeleteAsync"
description: "The `BulkDeleteAsync` method allows you to delete multiple entries and assets simultaneously across specified locales and environments."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## BulkDeleteAsync

The `BulkDeleteAsync` method allows you to delete multiple entries and assets simultaneously across specified locales and environments.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | BulkDeleteDetails | No | — | Data containing the entries and assets to be deleted. |

Returns:
Type
Task<ContentstackResponse>

**Example:**

```
var deleteDetails = new BulkDeleteDetails
{
    Entries = new List<BulkDeleteEntry>
    {
        new BulkDeleteEntry
        {
            Uid = "entry_uid_1",
            ContentType = "content_type_uid",
            Locale = "en-us"
        },
        new BulkDeleteEntry
        {
            Uid = "entry_uid_2",
            ContentType = "content_type_uid",
            Locale = "en-us"
        }
    },
    Assets = new List<BulkDeleteAsset>
    {
        new BulkDeleteAsset { Uid = "asset_uid_1" },
        new BulkDeleteAsset { Uid = "asset_uid_2" }
    }
};

// Execute bulk delete
ContentstackResponse response = await bulkOperation.DeleteAsync(deleteDetails);
```
