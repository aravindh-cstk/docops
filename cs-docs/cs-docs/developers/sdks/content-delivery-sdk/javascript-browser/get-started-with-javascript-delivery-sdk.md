---
title: "[JavaScript Delivery] - Get Started with JavaScript Delivery SDK"
description: Get started guide for the Contentstack JavaScript Delivery SDK, including installation, initialization, proxy configuration, region support, cache policies, basic queries, pagination, limitations, and resources.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/javascript-browser/get-started-with-javascript-delivery-sdk
product: Contentstack
doc_type: getting-started
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [JavaScript Delivery] - Get Started with JavaScript Delivery SDK

This page explains how to install, initialize, and use the Contentstack JavaScript Delivery SDK (including proxy, region, caching, and querying). It is intended for developers integrating Contentstack content delivery into JavaScript/browser-based apps and should be used when setting up the SDK and making basic content queries.

## Get Started with JavaScript Delivery SDK

**Note**: We recommend using the [TypeScript Delivery SDK](../typescript.md) as a preferred option over the JavaScript Delivery SDK for optimal performance and enhanced functionality in your project. Learn to seamlessly [migrate from JavaScript to TypeScript](../typescript/migrate-from-javascript-to-typescript.md).

This guide will help you get started with Contentstack [JavaScript Delivery SDK](./about-javascript-delivery-sdk.md) to build apps powered by Contentstack.

## Prerequisites

To get started with JavaScript, you will need the following:
- [NodeJS](https://nodejs.org/en) version 22 or later

## SDK Installation and Setup

To use the JavaScript Delivery SDK, [download](/docs/developers/javascript-browser/javascript_sdk_latest) and include it in the <script> tag:

```

```

**Tip**: You can click on the **download** link above and download the JavaScript SDK code. Save the code in a file named "contentstack.min.js" and provide the path to this file in the script tag, as shown above.

## Initialize SDK

To initialize the SDK, you will need to specify the **stack’s API key**, [**delivery token**](../../../create-tokens/about-delivery-tokens.md), and name of the [**environment**](../../../set-up-environments/about-environments.md) where you will publish the content:

```
const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");
```

**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe, check the [code of your region](../../../contentstack-regions/selecting-region-in-sdks.md#js-react-native-node-js) and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Azure North America, or Azure Europe, check the [code of your region](../../../contentstack-regions/selecting-region-in-sdks.md#js-react-native-node-js) and initialize SDK in a particular branch.

### Proxy Configuration

Contentstack allows you to define HTTP proxy for your requests with the JavaScript Delivery SDK. A proxied request allows you to anonymously access public URLs through a proxy server even from within a corporate firewall.

Here is the basic syntax of the proxy settings that you can pass within `fetchOptions` of the JavaScript Delivery SDK:

```
const HttpProxyAgent = require("http-proxy-agent");
const proxyAgent = new HttpProxyAgent("http://proxyurl/");
const Stack = Contentstack.Stack("api_key", "access_token", "environment_name",
{
  agent: proxyAgent
});
```

Here are a few examples of how you can add a username and password to HttpProxyAgent.
- You can pass it in the URI:

```
var proxy = new HttpsProxyAgent('https://username:password@your-proxy.com');
```
- You can set it in the auth option

```
var proxyOpts = url.parse('https://your-proxy.com');
proxyOpts.auth = 'username:password';
var proxy = new HttpsProxyAgent(proxyOpts);
```
- You can even set the HTTP header manually:

```
var proxyOpts = url.parse('https://your-proxy.com');
proxyOpts.headers = {
  'Proxy-Authentication': 'Basic ' + new Buffer('username:password').toString('base64')
};
var proxy = new HttpsProxyAgent(proxyOpts);
```

### Region Support

Contentstack offers **AWS North America**,** AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America, GCP Europe, and AWS Australia** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.
To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

```
const Stack = new Contentstack({
'api_key': "stack_api_key",
'delivery_token': "environment-specific_delivery_token",
'environment': "environment_name",
"region": Contentstack.Region.> //EU, AZURE_NA, AZURE_EU, GCP_NA, AU
})
```

Once you have initialized the SDK, you can start getting content in your app.

## Cache Policies

The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both.

Let’s look at the various cache policies available for use:

| **POLICIES** | **DESCRIPTION** |
|---|---|
| IGNORE_CACHE (default) | When the IGNORE_CACHE policy is set, the SDK always retrieves data by making a network call, without maintaining any cache. This is set as the default policy. |
| ONLY_NETWORK | If you set ONLY_NETWORK as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache. |
| CACHE_ELSE_NETWORK | When the CACHE_ELSE_NETWORK policy is set, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. |
| NETWORK_ELSE_CACHE | When the NETWORK_ELSE_CACHE policy is set, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache. |
| CACHE_THEN_NETWORK | If CACHE_THEN_NETWORK is set as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.) |

You can set a cache policy on a stack and/or query object.

**Note**: Caching in SDK is performed through the SDK's local storage instead of CDN.

### Setting a cache policy on a stack

This option allows you to globalize a cache policy. This means the cache policy you set will be applied to all the query objects of the stack.

```
// setting a cache policy on a stack
Stack.setCachePolicy(Contentstack.CachePolicy.NETWORK_ELSE_CACHE)
```

### Setting a cache policy on a query object

This option allows you to set/override a cache policy on a specific query object.

```
// setting a cache policy on a query object
Query.setCachePolicy(Contentstack.CachePolicy.CACHE_THEN_NETWORK)
```

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To get a single [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) and the id of the entry.

```
const Query = Stack.ContentType("content_type_uid").Entry("entry_uid")
Query.toJSON().fetch()
   .then(function success(entry) {
       console.log(entry['title']); // Retrieve field value by providing a field's UID
       console.log(entry); // Convert the entry result object to JSON
   }, function error(err) {
       // err object
   		console.log(err);
   });
```

**Note**: We have a method on query for a specific language. For example, consider the following query:
`Stack.ContentType(type).Query().language('fr-fr').toJSON().find()`
It will provide all entries of a content type published on the French locale.

### Get Multiple Entries

To retrieve multiple entries of a content type, you need to specify the content type UID. You can also specify search parameters to filter results.

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

These were examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack JavaScript Delivery SDK [API reference](../../../create-content-types/reference.md).

**Note:** Currently, the JavaScript SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](../../../../../api-docs/api-detail/content-delivery-api.md#queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](../../../create-content-types/reference.md#query-skip) and [limit](../../../create-content-types/reference.md#query-limit) parameters in subsequent requests.

```
const Stack = Contentstack.Stack("stack_api_key", "delivery_token", "environment_name");
let blogQuery = Stack.ContentType('example').Query();
         let data = blogQuery.skip(20).limit(20).find()
         data.then(function(result) {
      },function (error) {
         // error function
     })
```

## Limitations
- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The JavaScript Delivery SDK does not support multiple content types referencing in a single query.
- Currently, the JavaScript Delivery SDK does not yet support querying Global Field schemas ([All Global Fields](../../../../../api-docs/api-detail/content-delivery-api.md#all-global-fields) and [Single Global Field](../../../../../api-docs/api-detail/content-delivery-api.md#single-global-field)). You can include these details when querying content type details ([All Content Types](../../../../../api-docs/api-detail/content-delivery-api.md#all-content-types) and [Single Content Type](../../../../../api-docs/api-detail/content-delivery-api.md#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [Static Corporate Website](/docs/developers/sample-apps/build-a-corporate-website-using-contentstack-express-framework)
- [Marketing Website](/docs/developers/sample-apps/build-a-marketing-website-using-express-and-contentstack)
- [Universal React.js Website - Next.js](/docs/developers/sample-apps/build-a-website-using-next-js-and-contentstack)
- [JavaScript Playground App](https://github.com/contentstack/contentstack-js-sync-playground)
- [TypeScript News App](/docs/developers/sample-apps/build-a-news-app-using-typescript-react-and-contentstack)
- [API Reference for JavaScript Delivery SDK](../../../create-content-types/reference.md)
- [JavaScript SDK Changelog](./javascript-sdk-changelog.md)
- [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript)

## Common questions

### Should I use the JavaScript Delivery SDK or the TypeScript Delivery SDK?
The page notes: **“We recommend using the TypeScript Delivery SDK as a preferred option over the JavaScript Delivery SDK for optimal performance and enhanced functionality in your project.”**

### What credentials do I need to initialize the SDK?
You need the **stack’s API key**, **delivery token**, and the name of the **environment** where you will publish the content.

### How many items does “Get Multiple Entries” return by default?
“In a single instance, the Get Multiple Entries query will **retrieve only the first 100 items** of the specified content type.”

### Does the JavaScript Delivery SDK support multiple content types referencing in a single query?
**No.** The page states: “Currently, the JavaScript SDK does not support multiple content types referencing in a single query.”

