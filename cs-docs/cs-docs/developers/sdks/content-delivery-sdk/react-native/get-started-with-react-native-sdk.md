---
title: "[React Native] - Get Started with React Native SDK"
description: Get started guide for installing, initializing, and running basic queries with the Contentstack React Native SDK.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/react-native/get-started-with-react-native-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - mobile-developers
version: unknown
last_updated: 2026-03-25
---

# [React Native] - Get Started with React Native SDK

This page explains how to install and initialize the Contentstack React Native SDK, then run basic queries to fetch entries. It is intended for developers building React Native apps that retrieve published content from Contentstack, and should be used when setting up the SDK and implementing initial content retrieval.

## Get Started with React Native SDK

This guide will help you get started with Contentstack [React Native SDK](/docs/developers/sdks/content-delivery-sdk/react-native/about-react-native-sdk/) to build apps powered by Contentstack.

## Prerequisites
To get started with [React Native](https://reactnative.dev/docs/getting-started.html), you will need the following:
- iOS: Node.js, Watchman, React Native command line interface, and XCode.
- Android: Node.js, Watchman, React Native command line interface, and Android Studio.
- NodeJS 4.4.7 or later

## SDK installation and setup
Contentstack offers six [regions](/docs/developers/contentstack-regions/about-regions) **AWS North America**,** AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

Open the terminal and install the contentstack module via npm command.

```
$ npm install contentstack --save

```
To use the module in your application, you need to first require it

```
import Contentstack from 'contentstack/react-native'

```

## Initialize SDK
To initialize the SDK, you will need to specify the **stack’s API key**, [**delivery token**](/docs/developers/create-tokens/about-delivery-tokens), and name of the [**environment**](/docs/developers/set-up-environments/about-environments) where you will publish the content.

```
// Initialize the SDK
var Stack = Contentstack.Stack({
    'api_key': 'YOUR_API_KEY',
    'delivery_token': 'YOUR_DELIVERY_TOKEN',
    'environment': 'YOUR_ENVIRONMENT_NAME'
});

```
**For Setting other Regions**:

Refer the below code if you want to use the Europe, Azure North America, or Azure Europe region:

```
const Stack = new Contentstack({ 'api_key': "stack_api_key", 'access_token': "delivery_token", 'environment': "environment_name", "region": Contentstack.Region.EU}) //For Europe
const Stack = new Contentstack({ ‘api_key’: “stack_api_key”, ‘access_token’: “delivery_token”, ‘environment’: “environment_name”, “region”: Contentstack.Region.AZURE_NA}) //For Azure NA
const Stack = new Contentstack({ ‘api_key’: “stack_api_key”, ‘access_token’: “delivery_token”, ‘environment’: “environment_name”, “region”: Contentstack.Region.AZURE_EU}) //For Azure EU
```
Once you have initialized the SDK, you can start getting content in your app.

## Basic queries
Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a single entry
To get a single [entry](/docs/content-managers/author-content/about-entries/), specify the [content type](/docs/developers/create-content-types/about-content-types) and the id of the entry.

```
var Query = Stack.ContentType('blog').Entry("blta464e9fbd048668c")
Query.fetch()
   .then(function success(entry) {
       console.log(entry.get('title')); // Use get() to retrieve field value by providing a field's uniq
       console.log(entry.toJSON()); // You can also use toJSON() to convert the entry result object to JSON.
   }, function error(err) {
       // err object
   });

```

### Get multiple entries
To retrieve multiple entries of a content type, specify the content type UID. You can also specify search parameters to filter results.

```
var Query = Stack.ContentType('blog').Query();
Query
   .where("title", "welcome")
   .includeSchema()
   .includeCount()
   .toJSON()
   .find()
   .then(function success(result) {
      // result is array where -
      // result[0] => entry objects
      // result[result.length-1] => entry objects count included only when .includeCount() is queried.
      // result[1] => schema of the content type is included when .includeSchema() is queried.
  }, function error(err) {
     // err object
 });

```
These were examples of some of the basic queries of the SDK. For advanced queries, refer to Contentstack React Native [API reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/).

**Note:** Currently, the React Native SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-limit) parameters in subsequent requests.

```
const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");
let blogQuery = Stack.ContentType('example').Query();
         let data = blogQuery.skip(20).limit(20).find()
         data.then(function(result) {
      },function (error) {
         // error function
     })
```

## Limitations
- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The React Native SDK does not support multiple content types referencing in a single query.
- Currently, the React Native SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [React Native News App](/docs/developers/sample-apps/create-a-news-app-for-ios-and-or-android-using-react-native-and-contentstack/)
- [React Native API Reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/)
- [React Native SDK Changelog](/docs/developers/sdks/content-delivery-sdk/javascript-browser/javascript-sdk-changelog/)

## Common questions

### What credentials do I need to initialize the SDK?
You will need the **stack’s API key**, the **delivery token**, and the **environment** name where you will publish the content.

### How do I configure the SDK to use a non-default region?
Use the `"region"` option when creating the stack, for example `Contentstack.Region.EU`, `Contentstack.Region.AZURE_NA`, or `Contentstack.Region.AZURE_EU`.

### Why does my “Get multiple entries” query return only 100 items?
In a single instance, the query will retrieve only the first 100 items of the specified content type; use `skip` and `limit` in subsequent requests to paginate.

### What happens if my request URL is too large?
Any Request URL that goes above the 8KB size limit will receive the `400 - Bad request` error response.