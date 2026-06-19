---
title: "[Ruby] - Use the Sync API With Ruby SDK"
description: How to use the Sync API with Contentstack Ruby SDK to perform initial sync, pagination, subsequent sync, and advanced sync queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ruby/use-the-sync-api-with-ruby-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ruby-developers
version: unknown
last_updated: 2026-03-26
---

# [Ruby] - Use the Sync API With Ruby SDK

This page explains how to use Contentstack’s Sync API via the Contentstack Ruby SDK to keep your app’s content up-to-date, including initial sync, pagination, subsequent syncs, and advanced sync query options. It is intended for developers integrating Contentstack content delivery into Ruby applications and should be used when implementing or troubleshooting content synchronization.

## Use the Sync API With Ruby SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s Ruby SDK supports Sync API, which you can use to build powerful apps. Read through to understand how to use the Sync API with Contentstack Ruby SDK.

## Initial Sync

The Initial Sync process performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response.

To start the Initial Sync process, use the sync method.

```
@sync_result = @stack.sync({init: true})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: for fetching the next batch of entries using pagination token
# @sync_result.sync_token: for performing subsequent sync after initial sync

```

**Note**: Use the value of the delivery token against the access_token key. Learn how to create a [delivery token](/docs/developers/create-tokens/create-a-delivery-token).

The response also contains a sync token, which you need to store, since this token is used to get subsequent delta updates later, as shown in the [Subsequent Sync](#subsequent-sync) section below.

You can also fetch custom results in initial sync by using [advanced sync](#advanced-sync-queries) queries.

## Sync Pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides a pagination token in the response. You will need to use this token to get the next batch of data.

You can use a pagination token in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note**: If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the init call again and generate a new pagination_token to fetch the remaining records.

```
@sync_result = @stack.sync({pagination_token : ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

## Subsequent Sync

You can use the sync token (that you receive after initial sync) to get the updated content next time. The sync token fetches only the content that was added after your last sync, and the details of the content that was deleted or updated.

```
@sync_result = @stack.sync({sync_token : ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

Remember that you get a sync token in the response after every sync. So, don’t forget to store it every time.

## Advanced Sync Queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial sync from specific date

For initializing sync from a specific date, you can specify the date as follows:

```
@sync_result = @stack.sync({init : true, start_date: ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

### Initial sync with specific content type

You can also initialize sync with entries of only specific content types.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.

```
@sync_result = @stack.sync({init : true, content_type_uid: ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

### Initial sync of specific locale

You can also initialize sync with entries of only specific locales.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.

```
@sync_result = @stack.sync({init : true, locale: ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync
```

### Initial sync with publish type

You can also initialize sync with entries based on a specific publish type. The acceptable values are entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, and content_type_deleted. To do this, use syncPublishType and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type

```
@sync_result = @stack.sync({init : true, type: ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

### Initial sync with multiple parameters

You can also initialize sync with entries that satisfy multiple parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified parameters

```
@sync_result = @stack.sync({init : true, locale: "" content_type_uid: ""})
# @sync_result.items: contains sync data
# @sync_result.pagination_token: For fetching the next batch of entries using pagination token
# @sync_result.sync_token: For performing subsequent sync after initial sync

```

## More resources

- [View and Download Ruby SDK repository on GitHub](https://github.com/contentstack/contentstack-ruby)

## Common questions

### Where do I get the `sync_token` used for subsequent sync?
You get a sync token in the response after every sync, and you need to store it to use for subsequent sync.

### When should I use `pagination_token`?
If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated and provides a pagination token to fetch the next batch of data.

### What happens if content changes during pagination?
**Note**: If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the init call again and generate a new pagination_token to fetch the remaining records.

### Can I filter what the initial sync returns?
You can also fetch custom results in initial sync by using [advanced sync](#advanced-sync-queries) queries.