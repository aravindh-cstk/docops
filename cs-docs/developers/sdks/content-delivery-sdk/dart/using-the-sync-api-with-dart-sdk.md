---
title: "[Dart] - Using the Sync API with Dart SDK"
description: Using the Sync API with Contentstack Dart SDK.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dart/using-the-sync-api-with-dart-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - mobile-developers
  - dart-developers
version: unknown
last_updated: 2026-03-26
---

# [Dart] - Using the Sync API with Dart SDK

This page explains how to use the Sync API with the Contentstack Dart SDK to keep application content up-to-date, including initial sync, pagination, subsequent sync, and advanced sync queries. It is intended for developers integrating Contentstack content delivery into Dart applications and should be used when implementing or maintaining sync workflows.

## Using the Sync API with Dart SDK

The Sync API takes care of syncing your Contentstack data with your application and ensures that the data is always up-to-date by providing delta updates. Contentstack's [Dart SDK](./about-dart-sdk.md) supports Sync API, which you can use to build powerful applications.

This guide will help you understand how to use the Sync API with Contentstack Dart SDK.

## Initial Sync

The Initial sync request performs complete sync of your application data. The initial sync returns only 100 items. If the item count exceeds 100, the pagination token is provided to paginate the rest of the data (entries and assets).

To start the initial sync process, use the sync method.

```
import ‘package:contentstack/contentstack.dart’ as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final response = stack.sync();
await response.then((response) {
    print(‘response: $response’);
});

```

## Pagination Sync

If the result of the sync contains more than 100 records, the response would be paginated. A pagination response is provided in the response which you can use manually to get the next batch.

You can use a pagination token in case you want to fetch only selected batches, where each pagination token fetches 100 items.

```
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final sync = stack.paginationToken('pagination_token');
await sync.then((response) {
    print('result: $response');
});

```

## Subsequent Sync

You can use the sync token (that you receive after pagination completion) to get the updated content next time. The sync token fetches only the content that was added after your last sync and the details of the content that was deleted or updated.

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final sync = stack.syncToken('sync_token');
await sync.then((response) {
      print('result: $response');
});

```

## Advanced Sync Queries

You can also initialize sync with entries that satisfy multiple parameters. To do this, use sync and specify parameters. However, if you do this, the subsequent syncs will only include the entries of the specified parameters.

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final response = stack.sync(fromDate: 'from_date', locale: 'locale',   publishType: PublishType.assetPublished());
await response.then((response) {
    print('result: $response');
});

```

The acceptable values for “publish_type” are “entry_published,” “entry_unpublished,” “entry_deleted,” “asset_published,” “asset_unpublished,” “asset_deleted,” and “content_type_deleted.”

## More resources

- [View and Download Dart SDK repository on GitHub](https://github.com/contentstack/contentstack-dart)

## Common questions

### What is the difference between initial sync and subsequent sync?
Initial sync performs complete sync of your application data, while subsequent sync uses the sync token to fetch only the content that was added after your last sync and the details of the content that was deleted or updated.

### How many items does an initial sync return?
The initial sync returns only 100 items.

### When do I need to use a pagination token?
If the result of the sync contains more than 100 records, the response would be paginated and you can use the pagination token to get the next batch.

### What happens if I use advanced sync parameters?
If you initialize sync with specified parameters, the subsequent syncs will only include the entries of the specified parameters.