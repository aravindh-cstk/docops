---
title: "[Python] - Using the Sync API with Python SDK"
description: How to use the Sync API with the Contentstack Python SDK, including initial sync, pagination sync, subsequent sync, and advanced sync queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/using-the-sync-api-with-python-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - python-developers
version: unknown
last_updated: 2026-03-26
---

# [Python] - Using the Sync API with Python SDK

This page explains how to use Contentstack’s Sync API via the Python SDK to keep application content up-to-date using initial sync, pagination, subsequent sync tokens, and advanced sync query parameters. It is intended for developers integrating Contentstack content delivery into Python applications and should be used when implementing or maintaining sync-based content updates.

## Using the Sync API with Python SDK

The Sync API takes care of syncing your Contentstack data with your application and ensures that the data is always up-to-date by providing delta updates. Contentstack’s [Python SDK](/docs/developers/python/about-python-sdk) supports Sync API, which you can use to build powerful applications.

This guide will help you understand how to use the Sync API with Contentstack Python SDK.

## Initial Sync

The Initial sync request performs complete sync of your application data. The initial sync returns only 100 items. If the item count exceeds 100, the pagination token is provided to paginate the rest of the data ([entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets)).

To start the initial sync process, use the sync method.

```
import contentstack
stack = contentstack.Stack(api_key = 'api_key', access_token = 'access_token', environment = 'environment')
result = stack.sync_init()
if result is not None:
        logger.info(result)
   else:
        logger.error(result)
```

**Note**: Use the value of the [delivery token](/docs/developers/create-tokens/create-a-delivery-token) against the **access_token** key.

## Pagination Sync

If the result of the sync contains more than 100 records, the response would be paginated. A pagination response is provided in the response which you can use manually to get the next batch.

You can use a pagination token in case you want to fetch only selected batches, where each pagination token fetches 100 items.

```
import contentstack
stack = contentstack.Stack(api_key = 'api_key', access_token = 'access_token', environment = 'environment')
result = stack.pagination('pagination_token')
if result is not None:
   logger.info(result)
        # result['items']: Contains sync data
        # result['paginationToken']: For fetching the next batch of entries using pagination token
        # result['syncToken']: For performing subsequent sync after initial sync
else:
    logger.error(result)
```

## Subsequent Sync

You can use the sync token (that you receive after pagination completion) to get the updated content next time. The sync token fetches only the content that was added after your last sync and the details of the content that was deleted or updated.

```
import contentstack
stack = contentstack.Stack(api_key = 'api_key', access_token = 'access_token', environment = 'environment')
result = stack.sync_token('sync_token')
if result is not None:
   logger.info(result)
else:
   logger.error(result)
```

## Advanced Sync Queries

You can also initialize sync with entries that satisfy multiple parameters. To do this, use sync and specify parameters. However, if you do this, the subsequent syncs will only include the entries of the specified parameters.

```
import contentstack
stack = contentstack.Stack(api_key = 'api_key', access_token = 'access_token', environment = 'environment')
result = stack.sync_token( content_type_uid  = 'content_type_uid', from_date = 'date', locale = 'locale', publish_type = 'publish_type')
if result is not None:
   logger.info(result)
else:
    logger.error(result)
```

**Note**: The acceptable values for “publish_type” are “entry_published,” “entry_unpublished,” “entry_deleted,” “asset_published,” “asset_unpublished,” “asset_deleted,” and “content_type_deleted.”

## More resources

- [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python)

## Common questions

### Which token should I use for `access_token` in the Python SDK Stack initialization?
Use the value of the [delivery token](/docs/developers/create-tokens/create-a-delivery-token) against the **access_token** key.

### Why do I only get 100 items from the initial sync?
The initial sync returns only 100 items. If the item count exceeds 100, the pagination token is provided to paginate the rest of the data.

### When should I use the pagination token vs the sync token?
Use the pagination token to fetch the next batch of entries during a paginated sync response. Use the sync token (received after pagination completion) to perform subsequent syncs that fetch only changes since the last sync.

### What values are allowed for `publish_type` in advanced sync queries?
The acceptable values for “publish_type” are “entry_published,” “entry_unpublished,” “entry_deleted,” “asset_published,” “asset_unpublished,” “asset_deleted,” and “content_type_deleted.”