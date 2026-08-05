---
title: "[Synchronize Data With Datasync] - Use Sync API With JavaScript SDK"
description: Use Sync API With JavaScript SDK
url: https://www.contentstack.com/docs/developers/use-the-sync-apis-with-sdk/use-sync-api-with-javascript-sdk
product: Contentstack
doc_type: api-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Synchronize Data With Datasync] - Use Sync API With JavaScript SDK

This page explains how to use Contentstack’s Sync API via the JavaScript SDK to keep your app data up-to-date, including initial sync, pagination, subsequent sync, and advanced sync queries. It is intended for developers integrating Contentstack content sync into JavaScript applications and should be used when implementing full or incremental (delta) synchronization workflows.

## Use Sync API With JavaScript SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s JavaScript SDK supports Sync API, which you can use to build powerful apps. Read through to understand how to use the Sync API with Contentstack JavaScript SDK.

## Initial sync

The Initial sync process performs a complete sync of your app data. It returns all the published entries and assets of the specified stack in response.

To start the Initial sync process, use the `sync` method.

```
let data = Stack.sync({"init": true})
data.then(function(sync_data) {
     //sync_data.items: contains sync data
     //sync_data.paginationToken:For fetching the next batch of entries using pagination token.
    //sync_token.syncToken: For performing subsequent sync after initial sync.

}).catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

**Note**: Use the value of the delivery token against the **access_token** key. Learn [how to create a delivery token](../create-tokens/create-a-delivery-token.md).

The response also contains a sync token, which you need to store since this token is used to get subsequent delta updates later, as shown in the [Subsequent sync](#subsequent-sync) section below.

You can also fetch custom results in initial sync by using [advanced sync queries](#advanced-sync-queries).

## Sync pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response.

Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note:** If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.

```
let data = Stack.sync({"pagination_token" : ""})
data.then(function(result) {
     //result.items: contains sync data
     //result.paginationToken: For fetching the next batch of entries using pagination token
     //result.syncToken: For performing subsequent sync after initial sync
})
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

## Subsequent sync

You can use the sync token (that you receive after initial sync) to get the updated content next time. The sync token fetches only the content that was added after your last sync and the details of the content that was deleted or updated.

```
let data = Stack.sync({"sync_token" : ""})
data.then(function(sync_data) {
      //sync_data.items: contains sync data
      //sync_data.paginationToken: For fetching the next batch of entries using pagination token..
     //sync_token.syncToken: For performing subsequent sync after initial sync.
})
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

Remember that you get a sync token in response after every sync. So, don’t forget to store it every time.

## Advanced sync queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial sync from specific date

For initializing sync from a specific date, you can specify the date as follows:

```
let data = Stack.sync({"init": true, "start_from": ""})
data.then(function(data) {
      //data.items: contains sync data
      //data.paginationToken: For fetching the next batch of entries using pagination token.
     //data.syncToken: For performing subsequent sync after initial sync.
})
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

### Initial sync with specific content type

You can also initialize sync with entries of only specific content types.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.

```
let data = Stack.sync({"init": true, "content_type_uid": ""})
data.then(function(sync_data) {
      //sync_data.items: contains sync data
      //sync_data.paginationToken: For fetching the next batch     of entries using pagination token.
     //sync_token.syncToken: For performing subsequent sync after initial sync.
})
   .catch(function(err) {
    // err for any error description
      console.error("Fetch Error :", err)
   })
```

### Initial sync of specific locale

You can also initialize sync with entries of only specific locales.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.

```
let data = Stack.sync({"init": true, "locale": ""})
data.then(function(data) {
      //data.items: contains sync data
      //data.paginationToken: For fetching the next batch of entries using pagination token.
      //data.syncToken: For performing subsequent sync after initial sync.
})
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

### Initial sync with publish type

You can also initialize sync with entries based on a specific publish type. The acceptable values are `entry_published`, `entry_unpublished`, `entry_deleted`, `asset_published`, `asset_unpublished`, `asset_deleted`, and `content_type_deleted`. To do this, use `syncPublishType` and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type

```
let data = Stack.sync({"init": true, "type": ""})
data.then(function(sync_data) {
      //sync_data.items: contains sync data
      //sync_data.paginationToken: for fetching the next batch of entries using pagination token
     //sync_token.syncToken: for performing subsequent sync after initial sync
 })
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

### Initial sync with multiple parameters

You can also initialize sync with entries that satisfy multiple parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified parameters

```
let data = Stack.sync({"init": true, "locale": "", "content_type_uid": ""})
data.then(function(data) {
      //data.items: contains sync data
      //data.paginationToken: For fetching the next batch of entries using pagination token.
     //data.syncToken: For performing subsequent sync after initial sync.
})
   .catch(function(err) {
        // err for any error description
        console.error("Fetch Error :", err)
   })
```

## More resources

- [JavaScript playground app](https://github.com/contentstack/contentstack-js-sync-playground.git)
- [JavaScript SDK API reference](/docs/platforms/javascript-browser/api-reference)

## Common questions

### What should I store after an initial sync?
Store the sync token returned in the response, since this token is used to get subsequent delta updates later.

### When do I need to use the pagination token?
Use the pagination token when the response is paginated (more than 100 records) and you want to fetch only selected batches or restart the sync process from where it was interrupted.

### When should I run the `init` call again?
If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.

### Can I filter what gets returned in sync?
Yes—use advanced sync queries such as `start_from`, `content_type_uid`, `locale`, `type`, or multiple parameters to fetch filtered results.