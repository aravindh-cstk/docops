---
title: "[iOS] - Use the Sync API With Swift SDK"
description: How to use the Sync API with Contentstack Swift SDK for iOS, including advanced sync queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ios/use-the-sync-api-with-swift-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ios-developers
  - swift-developers
version: unknown
last_updated: 2026-03-26
---

# [iOS] - Use the Sync API With Swift SDK

This page explains how to use Contentstack’s Sync API with the Swift SDK in an iOS app, including advanced sync query options (date, content type, locale, publish type, and multiple parameters). It is intended for developers integrating Contentstack content delivery and keeping app data up-to-date via delta sync.

## Use the Sync API With Swift SDK

The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing [delta updates](https://en.wikipedia.org/wiki/Delta_update). Contentstack's Swift SDK supports Sync API, which you can use to build powerful apps. Read through to understand how to use the Sync API with Contentstack Swift SDK.

## Advanced Sync Queries

You can use advanced sync queries to fetch filtered results. Let's look at them in detail.

### Initial Sync From a Specific Date

For initializing sync from a specific date, you can specify the date using the "sync" parameters.

```
let stack = Contentstack.stack(apiKey: apiKey,
          deliveryToken: deliveryToken,
          environment: environment)

let syncStack = SyncStack(syncToken: syncToken)

stack.sync(syncTypes: [.startFrom(date)], then: { (result: Result) in
 switch result {
 case .success(let syncStack):
      let items = syncStack.items

      //error for any error description
      //syncStack for SyncStack
      //syncStack.syncToken: contains token for next sync Store this token For next sync
      //syncStack.paginationToken: contains token for next sync page this token for next sync
      //syncStack.items: contains sync data
      If let token = syncStack.paginationToken {
          UserDefault.standard.setValue(token, forKey:"PaginationToken")
      }else if let token = syncStack.syncToken {
          UserDefault.standard.setValue(token, forKey:"SyncToken")
      }

 case .failure(let error):
      print(error)
 }
})
```

### Initial Sync of Specific Content Types

You can also initialize sync with entries of only specific content types. To do this, use syncOnly and specify the content type UID as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified content types.

```
let stack = Contentstack.stack(apiKey: apiKey,
           deliveryToken: deliveryToken,
           environment: environment)

 let syncStack = SyncStack(syncToken: syncToken)

 stack.sync(syncTypes: [.contentType("contentTypeUID")], then: { (result: Result) in
  switch result {
  case .success(let syncStack):
       let items = syncStack.items

       //error for any error description
       //syncStack for SyncStack
       //syncStack.syncToken: contains token for next sync Store this token For next sync
       //syncStack.paginationToken: contains token for next sync page this token for next sync
       //syncStack.items: contains sync data
       If let token = syncStack.paginationToken {
           UserDefault.standard.setValue(token, forKey:"PaginationToken")
       }else if let token = syncStack.syncToken {
           UserDefault.standard.setValue(token, forKey:"SyncToken")
       }

  case .failure(let error):
       print(error)
  }
 })

```

### Initial Sync with Specific Language

You can also initialize sync with entries of only specific locales. To do this, use sync and specify the locale code as its value.

However, if you do this, the subsequent syncs will only include the entries of the specified locales.

```
let stack = Contentstack.stack(apiKey: apiKey,
          deliveryToken: deliveryToken,
          environment: environment)

let syncStack = SyncStack(syncToken: syncToken)

stack.sync(syncTypes: [.locale("en-gb")], then: { (result: Result) in
 switch result {
 case .success(let syncStack):
      let items = syncStack.items

      //error for any error description
      //syncStack for SyncStack
      //syncStack.syncToken: contains token for next sync Store this token For next sync
      //syncStack.paginationToken: contains token for next sync page this token for next sync
      //syncStack.items: contains sync data
      If let token = syncStack.paginationToken {
          UserDefault.standard.setValue(token, forKey:"PaginationToken")
      }else if let token = syncStack.syncToken {
          UserDefault.standard.setValue(token, forKey:"SyncToken")
      }

 case .failure(let error):
      print(error)
 }
})

```

### Initial Sync with Publish Type

You can also initialize sync with entries and assets based on a specific publish type. The acceptable values are PublishType enums entryPublished, entryUnpublished, entryDeleted, assetPublished, assetUnpublished, assetDeleted, and contentTypeDeleted. To do this, use syncPublishType and specify the parameters.

However, if you do this, the subsequent syncs will only include the entries of the specified publish type.

```
let stack = Contentstack.stack(apiKey: apiKey,
           deliveryToken: deliveryToken,
           environment: environment)

 let syncStack = SyncStack(syncToken: syncToken)

 stack.sync(syncTypes: [.publishType(.assetPublished)], then: { (result: Result) in
  switch result {
  case .success(let syncStack):
       let items = syncStack.items

       //error for any error description
       //syncStack for SyncStack
       //syncStack.syncToken: contains token for next sync Store this token For next sync
       //syncStack.paginationToken: contains token for next sync page this token for next sync
       //syncStack.items: contains sync data
       If let token = syncStack.paginationToken {
           UserDefault.standard.setValue(token, forKey:"PaginationToken")
       }else if let token = syncStack.syncToken {
           UserDefault.standard.setValue(token, forKey:"SyncToken")
       }

  case .failure(let error):
       print(error)
  }
 })
```

### Initial Sync with Multiple Parameters

For initializing sync with entries of specific content types, starting from specific date, use the snippet given below.

Note that subsequent syncs will only include the entries of the specified content types.

```
let stack = Contentstack.stack(apiKey: apiKey,
          deliveryToken: deliveryToken,
          environment: environment)

let syncStack = SyncStack(syncToken: syncToken)

stack.sync(syncTypes: [.locale("en-gb"), .contentType("contentTypeUID")], then: { (result: Result) in
 switch result {
 case .success(let syncStack):
      let items = syncStack.items

      //error for any error description
      //syncStack for SyncStack
      //syncStack.syncToken: contains token for next sync Store this token For next sync
      //syncStack.paginationToken: contains token for next sync page this token for next sync
      //syncStack.items: contains sync data
      If let token = syncStack.paginationToken {
          UserDefault.standard.setValue(token, forKey:"PaginationToken")
      }else if let token = syncStack.syncToken {
          UserDefault.standard.setValue(token, forKey:"SyncToken")
      }

 case .failure(let error):
      print(error)
 }
})
```

## More resources

- [View and Download iOS SDK repository on GitHub](https://github.com/contentstack/contentstack-ios)

## Common questions

### What is the Sync API used for in the Swift SDK?
The Sync API takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.

### What should I store for the next sync request?
Store `syncStack.paginationToken` for the next sync page, or `syncStack.syncToken` for the next sync.

### Can I limit sync results to a specific content type or locale?
Yes. You can initialize sync with only specific content types using `.contentType("contentTypeUID")` and only specific locales using `.locale("en-gb")`.

### Can I sync by publish type (entries/assets)?
Yes. You can initialize sync based on a specific publish type using `.publishType(...)`, with acceptable values including entryPublished, entryUnpublished, entryDeleted, assetPublished, assetUnpublished, assetDeleted, and contentTypeDeleted.