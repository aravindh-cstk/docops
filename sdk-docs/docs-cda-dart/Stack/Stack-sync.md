---
title: "sync"
description: "The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates."
url: "https://www.contentstack.com/dart-stack-sync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## sync

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | String | No | — | content type UID. e.g., products This retrieves published entries of specified content type. |
| fromDate | String | No | — | Enter the start date. e.g., 2018-08-14T00:00:00.000Z This retrieves published entries starting from a specific date |
| locale | String | No | — | Enter locale code. e.g., en-us This retrieves published entries of the specific locale |
| publishType | PublishType | No | — | Applicable values are: entry_published asset_published entry_unpublished asset_unpublished entry_deleted asset_deleted content_type_deleted If you do not specify any value, it will bring all published entries and published assets. |

Returns:
Type
Future<T>

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var response = stack.sync("contentTypeUid", "fromDate", "locale", PublishType.Entry_Published)
```
