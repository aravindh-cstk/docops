---
title: "[Synchronize Data With Datasync] - Use Sync API With Objective-C SDK"
description: Use Sync API With Objective-C SDK
url: https://www.contentstack.com/docs/developers/ios/use-the-sync-api-with-objective-c-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ios-developers
  - objective-c-developers
version: unknown
last_updated: 2026-03-26
---

# [Synchronize Data With Datasync] - Use Sync API With Objective-C SDK

This page explains how to use the Sync API with the Contentstack iOS SDK (including Objective-C) to keep app content up-to-date via initial sync, pagination, subsequent sync, and advanced sync queries. It is intended for iOS developers integrating Contentstack data synchronization into their apps, and should be used when implementing or troubleshooting sync flows and delta updates.

## Use Sync API With Objective-C SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack’s iOS SDK supports Sync API, which you can use to build powerful apps. Read through to understand how to use the Sync API with Contentstack iOS SDK.

## Initial sync

The Initial sync process performs complete sync of your app data. It returns all the published entries and assets of the specified stack in response.

To start the Initial Sync process, use the `sync` method.
- Swift
- ObjC

```
stack.sync({
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: Contains token for next sync. Store this token for next sync
    //syncStack.paginationToken: Contains token for next sync page. Use this token for next sync.
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack sync: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "Token"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

**Note**: Use the value of the delivery token against the **access_token** key. Learn [how to create a delivery token](/docs/developers/create-tokens/create-a-delivery-token).

The response also contains a sync token, which you need to store since this token is used to get subsequent delta updates later, as shown in the [Subsequent sync](#subsequent-sync) section below.

You can also fetch custom results in initial sync by using [advanced sync queries](#advanced-sync-queries).

## Sync pagination

If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated. It provides pagination token in the response. However, you don’t have to use the pagination token manually to get the next batch; the SDK does that automatically until the sync is complete.

Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted mid way (due to network issues, etc.) In such cases, this token can be used to restart the sync process from where it was interrupted.

**Note:** If any changes are made to the entries (if any actions i.e., Unpublish/Publish/Delete have been performed), then you need to run the `init` call again and generate a new `pagination_token` to fetch the remaining records.
- Swift
- ObjC

```
stack.syncPaginationToken(  , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token for next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncPaginationToken:  completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "Token"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

## Subsequent sync

You can use the sync token (that you receive after initial sync) to get the updated content next time. The sync token fetches only the content that was added after your last sync, and the details of the content that was deleted or updated.
- Swift
- ObjC

```
stack.syncToken(  , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token for next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncToken:  completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

Remember that you get a sync token in response after every sync. So, don’t forget to store it every time.

## Advanced sync queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial sync from specific date

For initializing sync from a specific date, you can specify the date using the `from` (Swift) and `syncFrom` (Objective C) parameters.
- Swift
- ObjC

```
stack.sync(from:  , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncFrom:  completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.paginationToken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

### Initial sync of specific content types

You can also initialize sync with entries of only specific content types. To do this, use syncOnly and specify the content type UID as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.
- Swift
- ObjC

```
stack.syncOnly(  , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncOnly:  completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.paginationtoken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

### Initial sync with specific language

You can also initialize sync with entries of only specific locales. To do this, use syncOnly and specify the locale code as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.
- Swift
- ObjC

```
stack.syncLocale( ENGLISH_UNITED_STATES , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncLocale: ENGLISH_UNITED_STATES completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.paginationtoken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

### Initial sync with publish type

You can also initialize sync with entries and assets based on a specific publish type. The acceptable values are `ENTRY_PUBLISHED`, `ENTRY_UNPUBLISHED`, `ENTRY_DELETED`, `ASSET_PUBLISHED`, `ASSET_UNPUBLISHED`, `ASSET_DELETED`, and `CONTENT_TYPE_DELETED`. To do this, use `syncPublishType` and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type
- Swift
- ObjC

```
stack.syncPublishType( ENTRY_PUBLISHED, completion: {(SyncStack: syncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token for next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncPublishType: ENTRY_PUBLISHED completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

### Initial sync with multiple parameters

For initializing sync with entries of specific content types, starting from specific date, use the snippet given below.

Note that subsequent syncs will only include the entries of the specified content types.
- Swift
- ObjC

```
stack.syncOnly(  , locale: ENGLISH_UNITED_STATES , from:  , publishType:ENTRY_PUBLISHED , completion: {
    (syncStack: SyncStack, error: NSError) in
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    If
    let token = syncStack.paginationToken {
        UserDefault.standard.setValue(token, forKey: "PaginationToken")
    } else if
    let token = syncStack.syncToken {
        UserDefault.standard.setValue(token, forKey: "SyncToken")
    }
})
```

```
[stack syncOnly:  locale: ENGLISH_UNITED_STATES from:  publishType:ENTRY_PUBLISHED completion: ^ (SyncStack * _Nullable syncStack, NSError * _Nullable error) {
    //error for any error description
    //syncStack for SyncStack
    //syncStack.syncToken: contains token for next sync Store this token For next sync
    //syncStack.paginationToken: contains token for next sync page this token for next sync
    //syncStack.items: contains sync data
    if (syncStack.paginationToken != nil) {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.paginationToken forKey: @ "PaginationToken"
        ];
    } else {
        [
            [NSUserDefaults standardUserDefaults] setValue: syncStack.syncToken forKey: @ "SyncToken"
        ];
    }
}];
```

## More resources

- [iOS playground app](https://github.com/contentstack/contentstack-ios-sync-playground.git)
- [iOS SDK API reference](/docs/platforms/ios/api-reference)

## Common questions

### Do I need to store the sync token after every sync?
Yes. "Remember that you get a sync token in response after every sync. So, don’t forget to store it every time."

### What happens if the sync response has more than 100 records?
"If the result of the initial sync (or subsequent sync) contains more than 100 records, the response would be paginated."

### When should I use the pagination token manually?
"Pagination token can be used in case you want to fetch only selected batches. It is especially useful if the sync process is interrupted mid way (due to network issues, etc.)"

### What token should be used for the access_token key?
"Use the value of the delivery token against the access_token key."