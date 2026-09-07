---
title: "Using the Sync API with Dart SDK"
description: "Use Sync APIs with Dart SDK"
url: /developers/sdks/content-delivery-sdk/dart/using-the-sync-api-with-dart-sdk
uid: blt798f01ee7c73af0f
---

# Using the Sync API with Dart SDK

## Using the Sync API with Dart SDK

The Sync API takes care of syncing your Contentstack data with your application and ensures that the data is always up-to-date by providing delta updates. Contentstack's [Dart SDK](/docs/developers/sdks/content-delivery-sdk/dart/about-dart-sdk) supports Sync API, which you can use to build powerful applications.

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

The acceptable values for “publish\_type” are “entry\_published,” “entry\_unpublished,” “entry\_deleted,” “asset\_published,” “asset\_unpublished,” “asset\_deleted,” and “content\_type\_deleted.”

## More resources

-   [View and Download Dart SDK repository on GitHub](https://github.com/contentstack/contentstack-dart)
