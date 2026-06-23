---
title: "[Java] - Use the Sync API With Java SDK"
description: Use the Sync API with Contentstack Java SDK to sync published entries and assets, handle pagination, perform subsequent syncs, and run advanced sync queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/use-the-sync-api-with-java-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java-developers
version: unknown
last_updated: 2026-03-26
---

# [Java] - Use the Sync API With Java SDK

This page explains how to use Contentstack’s Sync API via the Contentstack Java SDK to perform initial and subsequent syncs, handle pagination, and apply advanced sync query parameters. It is intended for developers building Java applications that need to keep Contentstack content up-to-date locally.

## Use the Sync API With Java SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s [Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-sdk/) supports Sync API, which you can use to build powerful apps.

This guide will help you understand how to use the Sync API with Contentstack Java SDK.

## Initial sync

The Initial sync request performs a complete sync of your app data. It returns all the published [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets) of the specified [stack](/docs/developers/set-up-stack/about-stack) in response.

To start the Initial sync process, use the sync method.

```
stack.sync(new SyncResultCallBack() {
    @Override
    public void onCompletion(SyncStack syncStack,Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block
        }
    }
});

```

**Note**: Use the value of the [delivery token](/docs/developers/create-tokens/create-a-delivery-token) against the **access_token** key.

The response also contains a sync token, which you need to store, since this token is used to get subsequent delta updates later, as shown in the [Subsequent sync](#subsequent-sync) section below.

You can also fetch custom results in initial sync by using [advanced sync queries](#advanced-sync-queries).

## Sync pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you don’t have to use the pagination token manually to get the next batch; the SDK does that automatically until the sync is complete.

You can use pagination token in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted midway (due to network issues, etc.). In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note:** If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.

```
stack.syncPaginationToken("pagination_token", new SyncResultCallBack() {
    @Override
    public void onCompletion(SyncStack syncStack, Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block
        }
    }
});

```

## Subsequent sync

You can use the sync token (that you receive after initial sync) to get the updated content next time. The sync token fetches only the content that was added after your last sync, and the details of the content that was deleted or updated.

**Note:** If you have made any changes to the entries  (performed any actions i.e., Unpublish/Publish/Delete), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.

```
stack.syncToken("sync_token", new SyncResultCallBack() {
    @Override
    public void onCompletion(SyncStack syncStack,Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block
        }
    }
});

```

Remember that you get a sync token in response after every sync. So, don’t forget to store it every time.

## Advanced sync queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial sync from specific date

For initializing sync from a specific date, you can use `syncFromDate` and specify the date as follows:

```
stack.syncFromDate(date, new SyncResultCallBack() {
    @Override
    public void onCompletion(SyncResult syncResult,Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block
        }
    }
});

```

### Initial sync with specific content type

You can also initialize sync with entries of only specific content types. To do this, use `syncContentType` and specify the content type UID as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.

```
stack.syncContentType("contentType", new SyncResultCallBack() {
@Override
public void onCompletion(SyncStack syncStack, Error error) {
     if (error == null) {
        // Success block
     } else {
        // Error block
     }
}});
```

### Initial sync of specific locale

You can also initialize sync with entries of only specific locales. To do this, use `syncLocale` and specify the locale code as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.

```
stack.syncLocale("locale", new SyncResultCallBack() {
@Override
public void onCompletion(SyncStack syncStack, Error error) {
     if (error == null) {
        // Success block
     } else {
        // Error block
     }
}});
```

### Initial sync with publish type

You can also initialize sync with entries and assets based on a specific publish type. The acceptable values are `entry_published`, `entry_unpublished`, `entry_deleted`, `asset_published`, `asset_unpublished`, `asset_deleted`, and `content_type_deleted`. To do this, use `syncPublishType` and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type

```
stack.syncPublishType(Stack.PublishType.entry_published, new SyncResultCallBack() {
    @Override
    public void onCompletion(SyncStack syncStack, Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block
        }
    }
});

```

### Initial sync with multiple parameters

You can also initialize sync with entries that satisfy multiple parameters. To do this, use `sync` and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified parameters

```
stack.sync("contentType", new Date(), "en-us", Stack.PublishType.CONTENT_TYPE_DELETED, new SyncResultCallBack() {
@Override
public void onCompletion(SyncStack syncStack, Error error) {
     if (error == null) {
        // Success block
     } else {
        // Error block
     }
}});
```

## More resources

- [Java Sample App](/docs/developers/sdks/content-delivery-sdk/java/java-sample-app)
- [Contentstack Java News App](https://github.com/contentstack/contentstack-java-news-web-app-example)
- [Java SDK API reference](/docs/developers/sdks/content-delivery-sdk/java/reference/)
- [View and Download Java SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

## Common questions

### What should I store after an initial sync?
Store the sync token returned in the response, since it is used to get subsequent delta updates later.

### Do I need to manually handle pagination tokens?
No. The SDK does that automatically until the sync is complete, but you can use the pagination token if you want to fetch only selected batches or restart after an interruption.

### When do I need to run the `init` call again?
If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.

### Can I filter what the initial sync returns?
Yes. You can fetch filtered results in initial sync by using advanced sync queries such as `syncFromDate`, `syncContentType`, `syncLocale`, `syncPublishType`, or multiple parameters via `sync`.