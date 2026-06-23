---
title: "[Node JS] - Get Started with NodeJS Delivery SDK"
description: Get started guide for the Contentstack Node.js Delivery SDK, including installation, initialization, basic queries, pagination, limitations, and resources.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/nodejs/get-started-with-nodejs-delivery-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Node JS] - Get Started with NodeJS Delivery SDK

This page explains how to install, configure, and use the Contentstack Node.js Delivery SDK to fetch published content from Contentstack, including basic querying patterns, pagination, and known limitations. It is intended for developers integrating Contentstack content delivery into Node.js applications.

## Get Started with NodeJS Delivery SDK

This guide will help you get started with Contentstack [Node.js SDK](./about-nodejs-delivery-sdk.md) to build apps powered by Contentstack.

## Prerequisites
To get started with Node.js, you will need the following:
- [Node.js](https://nodejs.org/en) version 20 or later

## SDK Installation and Setup
Contentstack offers seven [regions:](../../../contentstack-regions/about-regions.md) **AWS North America**,** AWS Europe**, **AWS Australia, Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe **as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use the SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

Open the terminal and install the contentstack module via the ‘npm’ command.

```
$ npm install contentstack --save
```
To use the module in your application, you need to require the ‘contentstack’ module.

```
import Contentstack from 'contentstack';
```

## Initialize SDK
To initialize the SDK, specify the** stack’s API key**, [**delivery token**](../../../create-tokens/about-delivery-tokens.md), and name of the [**environment**](../../../set-up-environments/about-environments.md) where you have published the content.

```
// Initialize the Contentstack Stack
const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");
```
**For Setting other Regions**:

Refer to the code below to use the Europe, Australia, Azure North America, or Azure Europe region:

```
const Stack = new Contentstack.Stack({ 'api_key': "stack_api_key", 'access_token': "delivery_token", 'environment': "environment_name", "region":Contentstack.Region.>}.Region.EU})
```
Once you have initialized the SDK, you can start getting content in your app.

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To get a single [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) as well as the id of the entry.

```
const Query = Stack.ContentType('blog').Entry("entry_uid")
Query.fetch()
   .then(function success(entry) {
       console.log(entry.get('title')); // Retrieve field value by providing a field's uid
       console.log(entry.toJSON()); // Convert the entry result object to JSON
   }, function error(err) {
       // err object
   });
```

### Get Multiple Entries
To retrieve multiple entries of a content type, specify the content type UID. You can also specify search parameters to filter results.

```
const Query = Stack.ContentType('blog').Query();
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
These were the examples of some of the basic queries of the NodeJS SDK. For advanced queries, refer to Contentstack NodeJS [API reference](../../../create-content-types/reference.md).

**Note:** Currently, the NodeJS SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](../../../../../api-docs/api-detail/content-delivery-api.md#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](../../../create-content-types/reference.md#query-skip) and [limit](../../../create-content-types/reference.md#query-limit) parameters in subsequent requests.

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
We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.

The NodeJS SDK does not support multiple content types referencing in a single query.

Currently, the NodeJS SDK does not yet support querying Global Field schemas ([All Global Fields](../../../../../api-docs/api-detail/content-delivery-api.md#all-global-fields) and [Single Global Field](../../../../../api-docs/api-detail/content-delivery-api.md#single-global-field)). You can include these details when querying content type details ([All Content Types](../../../../../api-docs/api-detail/content-delivery-api.md#all-content-types) and [Single Content Type](../../../../../api-docs/api-detail/content-delivery-api.md#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [Sample website using Nuxt.js](/docs/developers/sample-apps/build-a-website-using-nuxt-js-and-contentstack)
- [Sample website using Next.js](https://www.contentstack.com/docs/developers/sample-apps/build-a-website-using-next-js-and-contentstack)
- [Sample website using Metalsmith](/docs/developers/sample-apps/build-a-website-using-metalsmith-and-contentstack)
- [API Reference](../../../create-content-types/reference.md)
- [Node.js (JavaScript) SDK Changelog](../javascript-browser/javascript-sdk-changelog.md)

## Common questions

### Which Node.js version is required?
[Node.js](https://nodejs.org/en) version 20 or later.

### How do I initialize the SDK?
Use the stack’s API key, delivery token, and environment name in `Contentstack.Stack("api_key", "delivery_token", "environment_name");`.

### How many entries does “Get Multiple Entries” return by default?
The [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type.

### What are key limitations to be aware of?
There is an 8KB URL size limitation on API Requests that hit CDN services, and the NodeJS SDK does not support multiple content types referencing in a single query.