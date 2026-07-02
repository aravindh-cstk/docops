---
title: "Bulk UpdateItems"
description: "The UpdateItems method updates multiple entries and assets to a release in a single operation."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-updateitems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Bulk UpdateItems

The `UpdateItems` method updates multiple entries and assets to a release in a single operation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | BulkAddItemsData | No | — | Data containing the entries and assets to be deleted. |
| bulkVersion | String | No | — | The bulk operation version. |

Returns:
Type
ContentstackResponse

**Example:**

```
var itemsData = new BulkAddItemsData
{
    Items = new List<BulkAddItem>
    {
        new BulkAddItem
        {
            Uid = "entry_uid_1",
            ContentType = "blog_post"
        },
        new BulkAddItem
        {
            Uid = "entry_uid_2",
            ContentType = "product"
        },
        new BulkAddItem
        {
            Uid = "entry_uid_3",
            ContentType = "article"
        }
    }
};

// Update items in release with specific bulk version
ContentstackResponse response = bulkOperation.UpdateItems(itemsData, "2.0");
```
