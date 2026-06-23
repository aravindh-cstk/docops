---
title: "[iOS] - Get Started with Swift SDK"
description: This guide will help you get started with Contentstack Swift SDK to build apps powered by Contentstack.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ios/get-started-with-swift-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ios-developers
  - swift-developers
version: unknown
last_updated: 2026-03-25
---

# [iOS] - Get Started with Swift SDK

This page explains how to install, configure, and initialize the Contentstack Swift SDK for iOS, and how to run basic queries with cache policies. It is intended for iOS/Swift developers integrating Contentstack Content Delivery APIs into an app, and should be used when setting up a new project or adding Contentstack to an existing iOS codebase.

## Get Started with Swift SDK

This guide will help you get started with Contentstack Swift SDK to build apps powered by Contentstack.

## Prerequisites
To get started with Swift SDK, you will need the following:
- The latest version of [Xcode 11.0](https://xcodereleases.com/)
- [Swift 5.0](https://www.swift.org/download/)
- [iOS 8](https://support.apple.com/en-us/docs/iphone#) or later

## SDK Installation and Setup
Contentstack offers seven [regions](../../../contentstack-regions/about-regions.md) **AWS North America**,** AWS Europe**, **AWS Australia, Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. Both regions are independent of each other, and therefore, have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To add the Contentstack Swift SDK to your existing project, perform the following steps:

### Configure the SDK
You can configure the SDK installation using [CocoaPods](https://cocoapods.org/pods/contentstackswift).

Add the following line to your Podfile:

```
pod 'ContentstackSwift'
```

Then, run the command given below to get the latest release of Contentstack.

```
pod install
```

### Import Header/Module
Run the following command to import the headers and modules:

```
import ContentstackSwift
```

## Initializing your SDK
To initialize the SDK, specify the application context, the stack’s API key, [Delivery token](../../../create-tokens/about-delivery-tokens.md), and name of the [environment](../../../set-up-environments/about-environments.md) where you will publish the content, as shown in the snippet below:

```
let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)
```

**For Setting other Regions:**

Refer the below code if you want to use the Europe, Australia, Azure North America, or Azure Europe region.

```
let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT, region: .us) //.eu, .azure_na, or .azure_eu
```

**For Setting the branch:**

If you want to initialize SDK in a particular branch use the code given below:

```
let stack:Stack = Contentstack.stack(apiKey: 'api_key', deliveryToken: 'delivery_token', environment: 'environment', branch: 'branch', region: .eu, .azure_na, or .azure_eu)
```

## Cache Policies
The cache policies allow you to define the source from where the SDK will retrieve data. Based on the selected policy, the SDK can get the data from the cache, network, or both.

Let’s look at the various cache policies available for use:

| POLICIES | DESCRIPTION |
|---|---|
| networkOnly (default) | If you set networkOnly as the cache policy, the SDK retrieves data through a network call and saves the retrieved data in the cache. This is set as the default policy. |
| cacheElseNetwork | If you set cacheElseNetwork as the cache policy, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. |
| networkElseCache | If you set networkElseCache as the cache policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from the cache |
| cacheThenNetwork | If you set cacheThenNetwork as the cache policy, the SDK gets data from the cache, and then makes a network call. (A success callback will be invoked twice.) |
| cacheOnly | If you set cacheOnly as the cache policy, the SDK gets data from the cache. You can set a cache policy on an [entry](../../../../content-managers/author-content/about-entries.md), [asset](../../../../content-managers/author-content/about-assets.md), and/or a query object. |

### Setting a Cache Policy on an Entry
To set the cache policy to all the query objects of an entry, refer to the code below:

```
let stack = Contentstack.stack(apiKey: apiKey,
              deliveryToken: deliveryToken,
              environment: environment)

let entry = stack.contentType(uid: contentTypeUID).entry(uid: UID)
entry.cachePolicy = .networkElseCache
entry.fetch { (result: Result, response: ResponseType) in
     switch result {
     case .success(let model):
          //Model retrieve from API
     case .failure(let error):
          //Error Message
     }
}
```

### Setting a Cache Policy on an Asset
To set the cache policy to all the query objects of an asset, refer to the code below:

```
let stack = Contentstack.stack(apiKey: apiKey,
              deliveryToken: deliveryToken,
              environment: environment)

let asset = stack.contentType(uid: contentTypeUID).asset(uid: UID)
asset.cachePolicy = .networkElseCache
asset.fetch { (result: Result, response: ResponseType) in
     switch result {
     case .success(let model):
          //Model retrieve from API
     case .failure(let error):
          //Error Message
     }
}
```

### Setting a Cache Policy on a Query Object
To set/override a cache policy on a specific query object, refer to the code below:

```
let stack = Contentstack.stack(apiKey: apiKey,
             deliveryToken: deliveryToken,
             environment: environment)

let query = stack.contentType(uid: contentTypeUID).entry().query()
query.cachePolicy = .networkElseCache
query.find { (result: Result, Error>, response: ResponseType) in
      switch result {
      case .success(let contentstackResponse):
          // Contentstack response with EntryModel array in items.
      case .failure(let error):
          //Error Message
      }
  }
```

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To retrieve a single entry from a [content type](../../../create-content-types/about-content-types.md), refer to the code below:

```
let stack = Contentstack.stack(apiKey: apiKey,
              deliveryToken: deliveryToken,
              environment: environment)

stack.contentType(uid: contentTypeUID).entry(uid: UID)
.fetch { (result: Result, response: ResponseType) in
     switch result {
     case .success(let model):
          //Model retrieve from API
     case .failure(let error):
          //Error Message
     }
 }
```

### Get Multiple Entries
To retrieve multiple entries of a particular content type, refer to the code below:

```
let stack = Contentstack.stack(apiKey: apiKey,
             deliveryToken: deliveryToken,
             environment: environment)

stack.contentType(uid: contentTypeUID).entry().query()
    .find { (result: Result, Error>, response: ResponseType) in
      switch result {
      case .success(let contentstackResponse):
          // Contentstack response with EntryModel array in items.
      case .failure(let error):
          //Error Message
      }
  }
```

These were examples of some of the basic queries of the Swift SDK. For advanced queries, refer to the Contentstack [Swift API reference](/docs/developers/swift/api-reference/).

**Note:** Currently, the Swift SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](../../../../../api-docs/api-detail/content-delivery-api.md#queries) section of our Content Delivery API documentation.

### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](../../../create-content-types/reference.md#basequery-skip-thefirst) and [limit](../../../create-content-types/reference.md#basequery-limit-to) parameters in subsequent requests.

```
let stack:Stack = Contentstack.stack(apiKey: stack_api_key, deliveryToken: delivery_token, environment: environment)

stack.contentType(uid: contentTypeUID).entry().query().skip(theFirst: 20).limit(to: 20).find { (result: Result, Error>, response: ResponseType) in
    switch result
    {
          case .success(let contentstackResponse):
          // Contentstack response with EntryModel array in items.
         case .failure(let error):
         //Error Message
     }
}
```

## Limitations
- We have a URL size limitation of **8KB** on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The Swift SDK does not support multiple content types referencing in a single query.
- Currently, the Swift SDK does not yet support querying Global Field schemas ([All Global Fields](../../../../../api-docs/api-detail/content-delivery-api.md#all-global-fields) and [Single Global Field](../../../../../api-docs/api-detail/content-delivery-api.md#single-global-field)). You can include these details when querying content type details ([All Content Types](../../../../../api-docs/api-detail/content-delivery-api.md#all-content-types) and [Single Content Type](../../../../../api-docs/api-detail/content-delivery-api.md#single-content-type)) with the `include_global_field_schema query parameter`.

## More resources
- [View and Download iOS SDK repository on GitHub](https://github.com/contentstack/contentstack-ios)

## Common questions

### How do I install the Contentstack Swift SDK?
Use CocoaPods by adding `pod 'ContentstackSwift'` to your Podfile and running `pod install`.

### How do I initialize the SDK?
Initialize a `Stack` with your API key, delivery token, and environment using `Contentstack.stack(apiKey:deliveryToken:environment:)`.

### How do I change the cache policy for requests?
Set `cachePolicy` on an entry, asset, or query object (for example, `.networkElseCache`) before calling `fetch` or `find`.

### How do I paginate results beyond the first 100 items?
Use the `skip` and `limit` parameters on the query in subsequent requests.