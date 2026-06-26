---
title: "Contentstack - Objective-C Delivery SDK"
description: "Contentstack - Objective-C Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Contentstack - Objective-C Delivery SDK

## Overview

The Contentstack iOS CDA SDK (Objective-C) is planned for deprecation. We recommend migrating to the [Swift CDA SDK](/docs/developers/sdks/content-delivery-sdk/ios/get-started-with-swift-sdk#sdk-installation-and-setup) to ensure continued support and access to future updates.

## Objective C SDK for Contentstack's Content Delivery API

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest.[Read More](https://www.contentstack.com/).

## Prerequisites

To get started with iOS SDK, you will need the following:

- Latest version of Xcode
- Objective-C and Swift 4.2 and above
- iOS 10 or later.

## SDK installation and setup

Contentstack offers seven [regions](/docs/developers/contentstack-regions/about-regions) AWS North America (AWS NA), AWS Europe (AWS EU), AWS Australia (AWS AU), Azure North America (AZURE NA), Azure Europe (AZURE EU), GCP North America(GCP NA), and GCP Europe(GCP EU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Australia, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To add the Contentstack iOS SDK to your existing project, perform the following steps:

**SDK Installation:**

You can use the SDK using CocoaPods. Add the following line to your Podfile:

```
pod 'Contentstack'
```

Then, run the command given below to get the latest release of Contentstack.

```
pod install
```

**Import header/module:**

You can either import the header or the module. Import the header file in Objective-C project using the command given below:

```
#import <Contentstack/Contentstack.h>
```

Import the header files as a module too:

1. Swiftimport Contentstack
2. Objective C@import Contentstack

## Quickstart in 5 mins

### Initialize SDK

To initialize the SDK, specify application context, the stack’s API key, Delivery token, and name of the environment where you will publish the content, as shown in the snippet below:

1. Swiftlet stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")
2. Objective CStack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

**For Setting other Regions:**

To set and use the SDK for the AWS Europe, AWS AU, Azure NA, Azure EU, GCP NA, or GCP EU region refer to the code below:

1. Swiftvar config: Config = Config();
config.region = ContentstackRegion.EU; //ContentstackRegion.AU; or ContentstackRegion.AZURE_NA or ContentstackRegion.AZURE_EU or ContentstackRegion.GCP_NA or ContentstackRegion.GCP_EU

lt stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN",environmentName:"ENVIRONMENT", config:config)
2. Objective CConfig *config = [[Config alloc] init];
config.region = EU; //AU or AZURE_NA or AZURE_EU or GCP_NA or GCP_EU
 Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT" config:config];

Once you have initialized the SDK, you can query entries to fetch the required content.

**For Setting the Branch:**

If you want to initialize SDK in a particular branch use the code given below:

1. Swiftvar config: Config = Config();
config.branch = "branch";
let stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN",environmentName:"ENVIRONMENT", config:config)
2. Objective CConfig *config = [[Config alloc] init];
config.branch = @"branch";
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT" config:config];

### Basic Queries

**Get a Single Entry**

To retrieve a single entry from a content type, use the code snippet given below:

1. Swiftlet stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")

var contentType:ContentType = stack.contentType(withName: "CONTENT_TYPE_UID")
var entry:Entry = contentType.entry(withUID: "ENTRY_UID")
entry.fetch { (responseType, error) -> Void in
}
2. Objective CStack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Entry *entry  = [contentType entryWithUID:@"ENTRY_UID"];
[entry fetch:^(ResponseType type, NSError * _Nullable error) {

}];

**Get Multiple Entries******To retrieve multiple entries of a particular content type, use the code snippet given below:

1. Swiftlet stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")

var contentType:ContentType = stack.contentType(withName: "CONTENT_TYPE_UID")
var query: Query = contentType.query()
query.find { (responseType, result, error) -> Void in
}
2. Objective CStack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query *query  = [contentType <span>query</span>];
[query find:^(ResponseType type,  QueryResult *result,, NSError * _Nullable error) {

}];

### Paginating Responses

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/dot-net/get-started-with-dot-net-delivery-sdk/#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the skip and limit parameters in subsequent requests.

1. Swiftlet stack:Stack = Contentstack.stack(withAPIKey: "API_KEY", accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")

var contentType:ContentType = stack.contentType(withName: "CONTENT_TYPE_UID")
var query:Query = contentType.query()
    query.limitObjects(NSNumber(int:20))
query.skipObjects(NSNumber(int: 20))
query.find { (responseType, result!, error!) -> Void in
}
2. Objective CStack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

ContentType *contentType = [stack contentTypeWithName:@"CONTENT_TYPE_UID"];
Query *query  = [contentType query</span>];
[query limitObjects:@(20)];
[query skipObjects:@(20)];
[query find:^(ResponseType type, QueryResult *result, NSError *error) {

}];
