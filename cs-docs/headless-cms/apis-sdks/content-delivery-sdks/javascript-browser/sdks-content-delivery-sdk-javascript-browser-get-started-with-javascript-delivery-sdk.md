---
title: "Get Started with JavaScript Delivery SDK"
description: "Getting Started with JavaScript Delivery SDK"
url: /developers/sdks/content-delivery-sdk/javascript-browser/get-started-with-javascript-delivery-sdk
---

# Get Started with JavaScript Delivery SDK

## Get Started with JavaScript Delivery SDK

**Note:** We recommend using the [TypeScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript/about-typescript-delivery-sdk) as a preferred option over the JavaScript Delivery SDK for optimal performance and enhanced functionality in your project. Learn to seamlessly [migrate from JavaScript to TypeScript](/docs/developers/sdks/content-delivery-sdk/typescript/migrate-from-javascript-to-typescript/).

This guide will help you get started with Contentstack [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk) to build apps powered by Contentstack.

## Prerequisites

To get started with JavaScript, you will need the following:

-   [NodeJS](https://nodejs.org/en) version 22 or later

## SDK Installation and Setup

To use the JavaScript Delivery SDK, [download](/docs/developers/javascript-browser/javascript_sdk_latest) and include it in the <script> tag:

```
<script type="text/javascript" src="/path/to/contentstack.min.js"></script>
```

**Tip:** You can click on the **download** link above and download the JavaScript SDK code. Save the code in a file named "contentstack.min.js" and provide the path to this file in the script tag, as shown above.

## Initialize SDK

To initialize the SDK, you will need to specify the **stack’s API key**, [**delivery token**](/docs/headless-cms/about-delivery-tokens), and name of the [**environment**](/docs/headless-cms/about-environments) where you will publish the content:

```
const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");
```

**Note:** By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe, check the [code of your region](/docs/administration/selecting-region-in-sdks#js-react-native-nodejs) and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Azure North America, or Azure Europe, check the [code of your region](/docs/administration/selecting-region-in-sdks#js-react-native-node-js) and initialize SDK in a particular branch.

### Proxy Configuration

Contentstack allows you to define HTTP proxy for your requests with the JavaScript Delivery SDK. A proxied request allows you to anonymously access public URLs through a proxy server even from within a corporate firewall.

Here is the basic syntax of the proxy settings that you can pass within fetchOptions of the JavaScript Delivery SDK:

```
const HttpProxyAgent = require("http-proxy-agent");
const proxyAgent = new HttpProxyAgent("http://proxyurl/");
const Stack = Contentstack.Stack("api_key", "access_token", "environment_name", 
{
  agent: proxyAgent
});
```

Here are a few examples of how you can add a username and password to HttpProxyAgent.

-   You can pass it in the URI:  
    
    ```
    var proxy = new HttpsProxyAgent('https://username:password@your-proxy.com');
    ```
    
-   You can set it in the auth option  
    
    ```
    var proxyOpts = url.parse('https://your-proxy.com');
    proxyOpts.auth = 'username:password';
    var proxy = new HttpsProxyAgent(proxyOpts);
    ```
    
-   You can even set the HTTP header manually:  
    
    ```
    var proxyOpts = url.parse('https://your-proxy.com');
    proxyOpts.headers = {
      'Proxy-Authentication': 'Basic ' + new Buffer('username:password').toString('base64')
    };
    var proxy = new HttpsProxyAgent(proxyOpts);
    ```
    

### Region Support

Contentstack offers **AWS North America**, **AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America, GCP Europe, and AWS Australia** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.  
To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

```
const Stack = new Contentstack({ 
'api_key': "stack_api_key", 
'delivery_token': "environment-specific_delivery_token", 
'environment': "environment_name", 
"region": Contentstack.Region.<<add_your_region>> //EU, AZURE_NA, AZURE_EU, GCP_NA, AU
})
```

Once you have initialized the SDK, you can start getting content in your app.

## Cache Policies

The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both.

Let’s look at the various cache policies available for use:

<table><tbody><tr><td><strong>POLICIES</strong></td><td><strong>DESCRIPTION</strong></td></tr><tr><td>IGNORE_CACHE (default)</td><td>When the IGNORE_CACHE policy is set, the SDK always retrieves data by making a network call, without maintaining any cache. This is set as the default policy.</td></tr><tr><td>ONLY_NETWORK</td><td>If you set ONLY_NETWORK as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache.</td></tr><tr><td>CACHE_ELSE_NETWORK</td><td>When the CACHE_ELSE_NETWORK policy is set, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call.</td></tr><tr><td>NETWORK_ELSE_CACHE</td><td>When the NETWORK_ELSE_CACHE policy is set, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache.</td></tr><tr><td>CACHE_THEN_NETWORK</td><td>If CACHE_THEN_NETWORK&nbsp;is set as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.)</td></tr></tbody></table>

You can set a cache policy on a stack and/or query object.

**Note:** Caching in SDK is performed through the SDK's local storage instead of CDN.

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

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To get a single [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) and the id of the entry.

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

**Note:** We have a method on query for a specific language. For example, consider the following query:  
Stack.ContentType(type).Query().language('fr-fr').toJSON().find()  
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
      // result[0] =&gt; entry objects
      // result[result.length-1] =&gt; entry objects count included only when .includeCount() is queried.
      // result[1] =&gt; schema of the content type is included when .includeSchema() is queried.
  }, function error(err) {
     // err object
 });
```

These were examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack JavaScript Delivery SDK [API reference](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/).

**Note:** Currently, the JavaScript SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/#query-limit) parameters in subsequent requests.

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

-   We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.
-   The JavaScript Delivery SDK does not support multiple content types referencing in a single query.
-   Currently, the JavaScript Delivery SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [JavaScript Playground App](https://github.com/contentstack/contentstack-js-sync-playground)
-   [API Reference for JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference)
-   [JavaScript SDK Changelog](/docs/changelog)
-   [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript)
