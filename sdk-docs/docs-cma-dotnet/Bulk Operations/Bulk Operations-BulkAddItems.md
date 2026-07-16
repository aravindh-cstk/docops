---
title: "Bulk AddItems"
description: "The `AddItems` method adds multiple entries and assets to a release in a single operation."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-additems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Bulk AddItems

The `AddItems` method adds multiple entries and assets to a release in a single operation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | BulkAddItemsData | No | — | Data containing the entries and assets to be deleted. |
| bulkVersion | String | No | — | The bulk operation version. |

Returns:
Type
ContentstackResponse

**Example:**

```
var releaseData = new BulkAddItemsData
{
    Release = "release_uid",
    Action = "publish",
    Locale = new List<string> { "en-us", "en-gb" },
    Reference = true,
    Items = new List<BulkReleaseItem>
    {
        new BulkReleaseItem
        {
            ContentTypeUid = "content_type_uid",
            Uid = "entry_uid",
            Version = 1,
            Locale = "en-us",
            Title = "Sample Entry"
        },
        new BulkReleaseItem
        {
            ContentTypeUid = "content_type_uid",
            Uid = "entry_uid_2",
            Version = 2,
            Locale = "en-gb",
            Title = "Sample Entry 2"
        }
    }
};

ContentstackResponse response = bulkOperation.AddItems(releaseData, "2.0");
```
