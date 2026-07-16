---
title: "BulkPublishAsync"
description: "The `BulkPublish` method publishes multiple entries and assets simultaneously across specified locales and environments."
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-publishasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## BulkPublishAsync

The `BulkPublish` method publishes multiple entries and assets simultaneously across specified locales and environments.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| publishDetails | BulkPublishDetails | No | — | Specify entry or asset UIDs along with the target locales and publishing environments. If omitted, the system defaults to the primary locale. |
| skipWorkflowStage | Boolean | No | — | Set to true to publish entries that are in workflow stages eligible under the applied publish rules. |
| approvals | Boolean | No | — | Set to true to publish entries that do not require an approval to be published. |
| apiVersion | String | No | — | Specify the API Version in Headers |

Returns:
Type
Task<ContentstackResponse>

**Example:**

```
var bulkOperation = stack.BulkOperation();
var publishDetails = new BulkPublishDetails
{
   Entries = new List<BulkPublishEntry>
   {
       new BulkPublishEntry
       {
           Uid = "entry_uid_1",
           ContentType = "content_type_uid",
           Version = 1,
           Locale = "en-us"
       },
       new BulkPublishEntry
       {
           Uid = "entry_uid_2",
           ContentType = "content_type_uid",
           Version = 2,
           Locale = "en-us"
       }
   },
   Assets = new List<BulkPublishAsset>
   {
       new BulkPublishAsset { Uid = "asset_uid_1" },
       new BulkPublishAsset { Uid = "asset_uid_2" }
   },
   Locales = new List<string> { "en-us", "en-gb" },
   Environments = new List<string> { "environment_uid" }
};
ContentstackResponse response = await bulkOperation.PublishAsync(publishDetails);
```
