---
title: "Get Started with iOS SDK"
description: "This guide will help you get started with Contentstack iOS SDK to build apps. Learn more about basic installation, setup, and cache policies on this page."
url: /developers/sdks/content-delivery-sdk/ios/get-started-with-ios-sdk
uid: blt3cd72f74f4ac3833
---

# Get Started with iOS SDK

## Get Started with iOS SDK

This guide will help you get started with Contentstack [iOS SDK](/docs/developers/sdks/content-delivery-sdk/ios/about-objective-c-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with iOS SDK, you will need the following:

-   Latest version of Xcode
-   Objective-C and Swift 4.2
-   iOS 10 or later.

## SDK Installation and Setup

Contentstack offers six [regions](/docs/administration/about-regions/) **AWS North America**, **AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America,** and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.  

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To add the Contentstack iOS SDK to your existing project, perform the following steps:

1.  **SDK Installation:**  
    You can use the SDK using CocoaPods.
    1.  Add the following line to your Podfile:

        ```
        pod 'Contentstack'
        ```

    2.  Then, run the command given below to get the latest release of Contentstack.

        ```
        pod install
        ```

2.  **Import header/module:**

    You can either import the header or the module.

    1.  Import the header file in Objective-C project using the command given below:  

        ```
        #import <contentstack/contentstack.h>
        ```

    2.  Import the header files as a module too:  

        -   Swift
        -   ObjC

        ```
        import Contentstack
        ```

        ```
        @import Contentstack
        ```


## Initialize SDK

To initialize the SDK, specify **application context**, **the stack’s API key**, [**Delivery token**](/docs/headless-cms/about-delivery-tokens/), and name of the [**environment**](/docs/headless-cms/about-environments/) where you will publish the content, as shown in the snippet below:

-   Swift
-   ObjC

```
let stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")
```

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
```

**For Setting other Regions**:

To set and use the SDK for the Europe, Azure NA, or Azure EU region, refer to the code below:

-   Swift
-   ObjC

```
var config: Config = Config();
config.region = ContentstackRegion.EU; //ContentstackRegion.AZURE_NA or ContentstackRegion.AZURE_EU
let stack:Stack = Contentstack.stack(withAPIKey: "API_KEY",
accessToken:"DELIVERY_TOKEN", 
environmentName:"ENVIRONMENT", 
config:config)
```

```
Config *config = [[Config alloc] init];
config.region = EU; //AZURE_NA or AZURE_EU
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" 
accessToken:@"DELIVERY_TOKEN" 
environmentName:@"ENVIRONMENT" 
config:config];
```

Once you have initialized the SDK, you can query entries to fetch the required content.

## Cache Policies

The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both.

Let’s look at the various cache policies available for use:  

<table><tbody><tr><td>POLICIES</td><td>DESCRIPTION</td></tr><tr><td>NETWORK_ONLY (default)</td><td>If you set NETWORK_ONLY&nbsp;as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache. This is set as the default policy.</td></tr><tr><td>CACHE_ELSE_NETWORK</td><td>If you set CACHE_ELSE_NETWORK as the cache policy, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call.</td></tr><tr><td>NETWORK_ELSE_CACHE</td><td>If you set NETWORK_ELSE_CACHE&nbsp;as the cache policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache.</td></tr><tr><td>CACHE_THEN_NETWORK</td><td>If you set CACHE_THEN_NETWORK as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.)</td></tr><tr><td>CACHE_ONLY</td><td>If you set CACHE_ONLY as the cache policy, the SDK gets data from the cache.</td></tr></tbody></table>

You can set a cache policy on an [entry](/docs/headless-cms/about-entries), an [asset](/docs/headless-cms/about-assets), and/or a query object.

### Setting a cache policy on an entry

To set the cache policy to all the query objects of an entry, refer to the code below:  

-   Swift
-   ObjC

```
let stack : Stack = Contentstack.stack(withAPIKey: "API_KEY",
accessToken:"DELIVERY_TOKEN", 
environmentName:"ENVIRONMENT")
let contentType = stack.contentType(withName: "CONTENT_TYPE_UID")
let entry = contentType.entry(withUID: "ENTRY_UID")
entry.cachePolicy = .NETWORK_ELSE_CACHE
entry.fetch { (responseType, error) in
}
```

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" 
accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType* csForm = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry *entry = [csForm entryWithUID:@"ENTRY_UID"];
[entry setCachePolicy:(NETWORK_ELSE_CACHE)];
[entry fetch:^(ResponseType type, NSError * _Nullable error) {
}];
```

### Setting a cache policy on an asset  

To set the cache policy to all the query objects of an asset, refer to the code below:  

-   Swift
-   ObjC

```
let stack : Stack = Contentstack.stack(withAPIKey: Contentstack.stack(withAPIKey: "API_KEY",
accessToken:"DELIVERY_TOKEN", 
environmentName:"ENVIRONMENT")
let asset = stack.asset(withUID: "ASSET_UID")
asset.cachePolicy = .NETWORK_ELSE_CACHE
asset.fetch { (responseType, error) in
}
```

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" 
accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
Asset* asset = [stack assetWithUID:@"ASSET_UID"];
[asset setCachePolicy:(NETWORK_ELSE_CACHE)];
[asset fetch:^(ResponseType type, NSError * _Nullable error) {
}];
```

### Setting a cache policy on a query object

To set/override a cache policy on a specific query object, refer to the code below:  

-   Swift
-   ObjC

```
let stack : Stack = Contentstack.stack(withAPIKey: "API_KEY",
accessToken:"DELIVERY_TOKEN", 
environmentName:"ENVIRONMENT")
let contentType = stack.contentType(withName: "CONTENT_TYPE_UID")
let query = contentType.query()
query.cachePolicy = .NETWORK_ELSE_CACHE
query.find { (responseType, result, error) in
}
```

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" 
accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
ContentType* contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query* query = [contentType query];
[query setCachePolicy:(NETWORK_ELSE_CACHE)];
[query find:^(ResponseType type, QueryResult * _Nullable result, NSError * _Nullable error) {
}];
```

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api/) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To retrieve a single entry from a [content type](/docs/headless-cms/about-content-types/), refer to the code below::

-   Swift
-   ObjC

```
var contentType:ContentType = stack.contentType(withName: "CONTENT_TYPE_UID")
var entry:Entry = contentType.entry(withUID: "ENTRY_UID")
entry.fetch { (responseType, error) -&gt; Void in
}
```

```
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry *entry  = [contentType entryWithUID:@"ENTRY_UID"];
[entry fetch:^(ResponseType type, NSError * _Nullable error) {
}];
```

### Get Multiple Entries

To retrieve multiple entries of a particular content type, refer to the code below::

-   Swift
-   ObjC

```
var contentType:ContentType = stack.contentType(withName: "CONTENT_TYPE_UID")
var query:Query = contentType.query()
query.find { (responseType, result!, error!) -&gt; Void in
//error for any error description
//result for response data
}
```

```
ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query *query = [contentType query];
[query find:^(ResponseType type, QueryResult *result, NSError *error) {
//error for any error description
//result for response data
}];
```

These were the examples of some of the basic queries of the iOS SDK. For advanced queries, refer to the Contentstack iOS [API reference](/docs/developers/sdks/content-delivery-sdk/ios/reference/).

**Note:** For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our [Content Delivery API](/docs/developers/apis/content-delivery-api/) documentation.

#### **Paginating Responses**

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified ContentType. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/ios/reference/#query-skipobjects) and [limit](/docs/developers/sdks/content-delivery-sdk/ios/reference/#query-limitobjects) parameters in subsequent requests.

-   Swift
-   ObjC

```
var contentType:ContentType = stack.contentType(withName: "blog")
var query:Query = contentType.query()
query.limitObjects(NSNumber(int:5))
query.skipObjects(NSNumber(int:5))
query.find { (responseType, result!, error!) -&gt; Void in
//error for any error description
//result for response data
}
```

```
ContentType *contentType = [stack contentTypeWithName:@"blog"];
Query *query = [contentType query];
[query limitObjects:@(5)];
[query skipObjects:@(5)];
[query find:^(ResponseType type, QueryResult *result, NSError *error) {
//error for any error description
//result for response data
}];
```

## Limitations

-   We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.
-   The iOS SDK does not support multiple content types referencing in a single query.
-   Currently, the iOS SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [iOS Playground App](https://github.com/contentstack/contentstack-ios-sync-playground)
-   [iOS Sample App](https://github.com/contentstack/contentstack-ios-persistence-example)
-   [API Reference for IOS SDK](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ios/reference/)
-   [API Reference for Swift SDK](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/swift/reference/)
-   [iOS SDK Change Log](/docs/changelog?filter=sdks)
-   [Swift SDK Change Log](/docs/changelog?filter=sdks)
-   [View and Download iOS SDK repository on GitHub](https://github.com/contentstack/contentstack-ios)
