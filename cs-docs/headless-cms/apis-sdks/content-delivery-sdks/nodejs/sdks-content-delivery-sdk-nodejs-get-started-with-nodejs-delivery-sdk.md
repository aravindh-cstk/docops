---
title: "Get Started with NodeJS Delivery SDK"
description: "Steps for getting started with NodeJS SDK"
url: /developers/sdks/content-delivery-sdk/nodejs/get-started-with-nodejs-delivery-sdk
---

# Get Started with NodeJS Delivery SDK

## Get Started with NodeJS Delivery SDK

This guide will help you get started with Contentstack [Node.js SDK](/docs/developers/sdks/content-delivery-sdk/nodejs/about-nodejs-delivery-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with Node.js, you will need the following:

-   [Node.js](https://nodejs.org/en) version 20 or later

## SDK Installation and Setup

Contentstack offers seven [regions:](/docs/administration/about-regions) **AWS North America**, **AWS Europe**, **AWS Australia, Azure North America**, **Azure Europe**, **GCP North America,** and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use the SDKs offered by Contentstack.

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

To initialize the SDK, specify the **stack’s API key**, [**delivery token**](/docs/headless-cms/about-delivery-tokens), and name of the [**environment**](/docs/headless-cms/about-environments) where you have published the content.

```
// Initialize the Contentstack Stack
const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");
```

**For Setting other Regions**:

Refer to the code below to use the Europe, Australia, Azure North America, or Azure Europe region:

```
const Stack = new Contentstack.Stack({ 'api_key': "stack_api_key", 'access_token': "delivery_token", 'environment': "environment_name", "region":Contentstack.Region.<<add_your_region>>}.Region.EU})
```

Once you have initialized the SDK, you can start getting content in your app.

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To get a single [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) as well as the id of the entry.

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
      // result[result.length-1] =&gt; entry objects count included only when .includeCount() is queried.
      // result[1] => schema of the content type is included when .includeSchema() is queried.
  }, function error(err) {
     // err object
 });
```

These were the examples of some of the basic queries of the NodeJS SDK. For advanced queries, refer to Contentstack NodeJS [API reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/).

**Note:** Currently, the NodeJS SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-limit) parameters in subsequent requests. 

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

We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.

The NodeJS SDK does not support multiple content types referencing in a single query.

Currently, the NodeJS SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [Sample website using Nuxt.js](/docs/headless-cms/nuxt)
-   [Sample website using Next.js](/docs/headless-cms/next)
-   [API Reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/)
-   [Node.js (JavaScript) SDK Changelog](/docs/developers/sdks/content-delivery-sdk/javascript-browser/javascript-sdk-changelog)
