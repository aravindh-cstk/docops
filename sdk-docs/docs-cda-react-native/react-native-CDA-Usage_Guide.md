---
title: "React Native Delivery Introduction"
description: "React Native Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
cms_uid: "blt90a6ea868e2b787e"
---

# React Native Delivery Introduction

## Overview

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

Contentstack provides [React Native Delivery SDK](/docs/developers/sdks/content-delivery-sdk/react-native/about-react-native-sdk) to build application on top of React Native. Given below is the detailed guide and helpful resources to get started with our React Native Delivery SDK.

## Prerequisite

You need Node.js version 4.4.7 or later installed to use the Contentstack JavaScript Delivery SDK.

## Setup and Installation

React Native uses the [Javascript SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/) to create apps. To use the JavaScript Delivery SDK, install ist via npm:

```
npm i contentstack
```

To import the SDK in your project, use the following command:

```
import Contentstack from 'contentstack/react-native'
```

To initialize the SDK, you will need to specify the [API Key](/docs/developers/set-up-stack/view-stack-details), [Delivery Token](/docs/developers/create-tokens/about-delivery-tokens), and [Environment](/docs/developers/set-up-environments/about-environments) Name of your stack.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
```

To initialize the SDK for the Europe, Azure NA, Azure EU, or GCP NA region, refer to the code below:

For EU

```
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.EU});
```

For Azure EU

```
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AZURE_EU});
```

FOR AZURE\_NA

```
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment": "environment", "region": Contentstack.Region.AZURE_NA});
```

FOR GCP\_NA

```
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_NA});
```

## Quickstart in 5 mins

### Initializing your SDK

You will need to specify the API key, Access token, and Environment Name of your stack to initialize the SDK:

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
```

Once you have initialized the SDK, you can start getting content in your app.

### Querying content from your stack

To get a single entry, you need to specify the content type as well as the ID of the entry.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
const entry = Stack.ContentType('blog').Entry("entry_uid");
const result = await entry.fetch()
```

**Note**: We have a method on query for a specific language. For example, consider the following query:

```
Stack.ContentType('content_type_uid').Query().language('fr-fr').toJSON().find()
```

It will provide all entries of a content type published on the French locale.

To retrieve multiple entries of a content type, you need to specify the content type UID. You can also specify search parameters to filter results.

```
const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
const Query = Stack.ContentType('blog').Query();
Query.where("title", "welcome")
.includeSchema()
.includeCount()
.toJSON()
.find()
.then((result) => {

})
.catch((error))=> {

});
```

Note:

-   Currently, the JavaScript SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#queries) section of our Content Delivery API documentation.
-   By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Paginating Responses

In a single instance, the Get Multiple Entries query will retrieve only the first 100 items of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
let blogQuery = Stack.ContentType('example').Query();
blogQuery.skip(20).limit(20).find()
.then((result) => {

}).catch((error))=> {

});
```

### Querying Assets from your stack

To get a single asset, you need to specify the UID of the asset.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
const Asset = Stack.Asset("asset_uid");
Asset.fetch()
.then((result) => {

}).catch((error))=> {

});
```

To retrieve multiple assets. You can also specify search parameters to filter results.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
const Query = Stack.Asset().Query();
Query
.limit(20)
.toJSON()
.find()
.then(function success(result) {

}, function error(err) {

});
```

### Cache Policies

You can set a cache policy on a stack and/or query object.

Setting a cache policy on a stack

This option allows you to globalize a cache policy. This means the cache policy you set will be applied to all the query objects of the stack.

```
//Setting a cache policy on a stack
Stack.setCachePolicy(Contentstack.CachePolicy.NETWORK_ELSE_CACHE)
```

Setting a cache policy on a query object

This option allows you to set/override a cache policy on a specific query object.

```
// setting a cache policy on a queryobject
Query.setCachePolicy(Contentstack.CachePolicy.CACHE_THEN_NETWORK)
```
