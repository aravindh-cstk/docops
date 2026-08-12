---
title: "Use Sync API With JavaScript Delivery SDK"
description: "methods for using the Sync API With JavaScript Delivery SDK"
url: /developers/sdks/content-delivery-sdk/javascript-browser/use-sync-api-with-javascript-delivery-sdk
---

# Use Sync API With JavaScript Delivery SDK

## Use Sync API With JavaScript Delivery SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s [JavaScript Delivery SDK](https://github.com/contentstack/contentstack-javascript) supports Sync API, which you can use to build powerful apps. 

This guide will help you understand how to use the Sync API with Contentstack JavaScript Delivery SDK.

## Initial sync

The Initial sync process performs a complete sync of your app data. It returns all the published [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets) of the specified [stack](/docs/headless-cms/about-stack) in response.

To start the Initial sync process, use the sync method.

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

**Note:** Use the value of the [delivery token](/docs/headless-cms/create-a-delivery-token) against the **access\_token** key.

The response also contains a sync token, which you need to store since this token is used to get subsequent delta updates later, as shown in the [Subsequent sync](#subsequent-sync) section below. 

You can also fetch custom results in initial sync by using [advanced sync queries](#advanced-sync-queries).

## Sync pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response.

You can use pagination token in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note:** If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the init call again and generate a new pagination\_token to fetch the remaining records.

```
let data = Stack.sync({"pagination_token" : "<pagination_token>"})
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
let data = Stack.sync({"sync_token" : "<sync_token>"})
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
let data = Stack.sync({"init": true, "start_from": "<start_date>"})
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
let data = Stack.sync({"init": true, "content_type_uid": "<contenttype_uid>"})
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
let data = Stack.sync({"init": true, "locale": "<locale>"})
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

You can also initialize sync with entries based on a specific publish type. The acceptable values are entry\_published, entry\_unpublished, entry\_deleted, asset\_published, asset\_unpublished, asset\_deleted, and content\_type\_deleted. To do this, use syncPublishType and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type

```
let data = Stack.sync({"init": true, "type": "<type>"})
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
let data = Stack.sync({"init": true, "locale": "<locale>", "content_type_uid": "<contenttype_uid>"})
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

-   [JavaScript playground app](https://github.com/contentstack/contentstack-js-sync-playground.git)
-   [JavaScript Delivery SDK API reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/)
-   [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript)
