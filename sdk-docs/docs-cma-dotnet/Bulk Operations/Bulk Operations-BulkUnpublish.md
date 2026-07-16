---
title: "BulkUnpublish"
description: "The `BulkUnpublish` method allows you to unpublish multiple entries and assets simultaneously across selected locales and environments."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## BulkUnpublish

The `BulkUnpublish` method allows you to unpublish multiple entries and assets simultaneously across selected locales and environments.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publishDetails | BulkPublishDetails | No | — | Specify entry or asset UIDs along with the target locales and unpublishing environments. If omitted, the system defaults to the primary locale. |
| skipWorkflowStage | Boolean | No | — | Set to true to unpublish entries that are in workflow stages eligible under the applied publish rules. |
| approvals | Boolean | No | — | Set to true to publish entries that do not require an approval to be published. |
| apiVersion | String | No | — | Specify the API Version in Headers |

Returns:
Type
Task<ContentstackResponse>

**Example:**

```
var bulkOperation = stack.BulkOperation();

var unpublishDetails = new BulkPublishDetails
{
    Entries = new List<BulkPublishEntry>
    {
        new BulkPublishEntry
        {
            Uid = "entry_uid_1",
            ContentType = "content_type_uid",
            Locale = "en-us"
        },
        new BulkPublishEntry
        {
            Uid = "entry_uid_2",
            ContentType = "content_type_uid",
            Locale = "en-us"
        }
    },
    Assets = new List<BulkPublishAsset>
    {
        new BulkPublishAsset { Uid = "asset_uid_1" }
    },
    Locales = new List<string> { "en-us" },
    Environments = new List<string> { "environment_uid" }
};

ContentstackResponse response = bulkOperation.Unpublish(unpublishDetails);
```
