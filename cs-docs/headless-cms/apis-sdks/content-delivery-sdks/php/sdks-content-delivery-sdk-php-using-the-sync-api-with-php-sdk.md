---
title: "Using the Sync API with PHP SDK"
description: "steps to use the Sync API with PHP SDK"
url: /developers/sdks/content-delivery-sdk/php/using-the-sync-api-with-php-sdk
uid: bltece25db1f9122b7b
---

# Using the Sync API with PHP SDK

## Using the Sync API with PHP SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s PHP SDK supports Sync API, which you can use to build powerful apps. Read through to understand how to use the Sync API with Contentstack PHP SDK.

## Initial Sync

The Initial Sync process performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response.

To start the Initial Sync process, use the sync method.

```
$_result = $Stack->sync(array('init'=> 'true'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

**Note:** Use the value of the delivery token against the access\_token key. Learn [how to create a delivery token](/docs/headless-cms/create-a-delivery-token).

The response also contains a sync token, which you need to store, since this token is used to get subsequent delta updates later, as shown in the [Subsequent Sync](#subsequent-sync) section below.

You can also fetch custom results in initial sync by using [advanced sync](#advanced-sync-queries) queries.

## Sync Pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides a pagination token in the response. You will need to use this token to get the next batch of data.

You can use a pagination token in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note:** If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the init call again and generate a new pagination\_token to fetch the remaining records.

```
$_result = $Stack->sync(array('pagination_token'=> '<pagination_token>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

## Subsequent Sync

You can use the sync token (that you receive after initial sync) to get the updated content next time. The sync token fetches only the content that was added after your last sync, and the details of the content that was deleted or updated.

```
$_result = $Stack->sync(array('sync_token'=> '<sync_token>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

Remember that you get a sync token in the response after every sync. So, don’t forget to store it every time.

## Advanced Sync Queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial sync from specific date

For initializing sync from a specific date, you can specify the date as follows:

```
$_result = $Stack->sync(array('init'=> 'true', 'start_date'=> '<start_date>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

### Initial sync with specific content type

You can also initialize sync with entries of only specific content types.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.

```
$_result = $Stack->sync(array('init'=> 'true', 'content_type_uid'=> '<content_type_uid>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

### Initial sync of specific locale

You can also initialize sync with entries of only specific locales.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.

```
$_result = $Stack->sync(array('init'=> 'true', 'locale'=> '<locale>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

### Initial sync with publish type

You can also initialize sync with entries based on a specific publish type. The acceptable values are entry\_published, entry\_unpublished, entry\_deleted, asset\_published, asset\_unpublished, asset\_deleted, and content\_type\_deleted. To do this, use syncPublishType and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type

```
$_result = $Stack->sync(array('init'=> 'true', 'type'=> '<type>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

### Initial sync with multiple parameters

You can also initialize sync with entries that satisfy multiple parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified parameters

```
$_result = $Stack->sync(array('init'=> 'true', 'locale'=> '<locale>', 'content_type_uid' => '<content_type_uid>'));
# $_result['items']: contains sync data
# $_result[pagination_token]: for fetching the next batch of entries using pagination token
# $_result[sync_token]: for performing subsequent sync after initial sync
```

## More resources

-   [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)
