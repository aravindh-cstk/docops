---
title: "Swift Delivery Introduction"
description: "Contentstack - Swift SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
cms_uid: "blt064fa862f708c0c9"
---

# Swift Delivery Introduction

## Overview

CocoaPods is planned to move to a read-only state and may not support future SDK updates. [Install the Swift CDA SDK](/docs/developers/sdks/content-delivery-sdk/ios/get-started-with-swift-sdk#sdk-installation-and-setup) using Swift Package Manager to ensure continued access to updates. For more details, refer to the [CocoaPods Trunk Read-Only Plan](https://blog.cocoapods.org/CocoaPods-Specs-Repo/?utm_source=chatgpt.com) announcement.

## Swift Delivery SDK for Contentstack

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

Contentstack provides Swift Delivery SDK to build application on top of Swift. Given below is the detailed guide and helpful resources to get started with our Swift Delivery SDK.

The Swift Delivery SDK can also be used to create iOS, Apple TV and Mac applications.

## Prerequisite

Latest Xcode and Mac OS X

## Setup and Installation

To use this SDK on iOS platform, you will have to install the SDK according to the steps given below.

**CocoaPods**

- Add the following line to your Podfile

```
pod ‘ContentstackSwift’
```

- Run pod install, and you should now have the latest Contentstack release.

**Import Header/Module**

```
import ContentstackSwift
```

## Quickstart in 5 mins

### Initializing your SDK

To start using the SDK in your application, you will need to initialize the stack by providing the required keys and values associated with them:

```
let stack:Stack = Contentstack.stack(apiKey: API_KEY, deliveryToken: DELIVERY_TOKEN, environment: ENVIRONMENT)
```

To get the api credentials mentioned above, you need to log into your Contentstack account and then in your top panel navigation, go to Settings -> Stack to view both your API Key and your Delivery Token

The stack object that is returned is a Contentstack client object, which can be used to initialize different modules and make queries against our Content Delivery API. The initialization process for each module is explained in the following section.

### Querying content from your stack

To fetch all entries of of a content type, use the query given below:

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query()
.find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
      switch result {
      case .success(let contentstackResponse):

      case .failure(let error):

      }
 }
```

To fetch a specific entry from a content type, use the following query:

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry(uid: UID)
.fetch { (result: Result<EntryModel, Error>, response: ResponseType) in
     switch result {
     case .success(let model):

     case .failure(let error):

     }
 }
```

### Paginating Responses

In a single instance, the Get Multiple Entries query will retrieve only the first 100 items of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).query()
.skip(20).limit(20).find { (result: Result<ContentstackResponse<EntryModel>, Error>, response: ResponseType) in
      switch result {
      case .success(let contentstackResponse):

      case .failure(let error):

      }
}
```

### Querying Assets from your stack

To get a single asset, you need to specify the UID of the asset.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>")
.fetch { (result: Result<AssetModel, Error>, response: ResponseType) in
   switch result {
   case .success(let model):

   case .failure(let error):

   }
}
```

To retrieve multiple assets. You can also specify search parameters to filter results.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query()
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):

    case .failure(let error):

    }
}
```
