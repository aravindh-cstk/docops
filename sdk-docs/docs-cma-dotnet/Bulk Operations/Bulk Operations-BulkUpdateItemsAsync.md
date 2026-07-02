---
title: "Bulk UpdateItemsAsync"
description: "The UpdateItemsAsync method updates multiple entries and assets to a release in a single operation."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-updateitemsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Bulk UpdateItemsAsync

The `UpdateItemsAsync` method updates multiple entries and assets to a release in a single operation.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | BulkAddItemsData | No | — | Data containing the entries and assets to be deleted. |
| bulkVersion | String | No | — | The bulk operation version. |

Returns:
Type
Task<ContentstackResponse>

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

ContentstackResponse response = await bulkOperation.UpdateItemsAsync(itemsData, "2.0");
```
