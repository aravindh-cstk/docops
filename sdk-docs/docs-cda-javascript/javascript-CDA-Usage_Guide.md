---
title: "JavaScript Delivery SDK"
description: "JavaScript Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# JavaScript Delivery SDK

**Note**: We recommend using the [TypeScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript) as a preferred option over the JavaScript Delivery SDK for optimal performance and enhanced functionality in your project. Learn to seamlessly [migrate from JavaScript to TypeScript](/docs/developers/sdks/content-delivery-sdk/typescript/migrate-from-javascript-to-typescript/).

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

Contentstack provides JavaScript Delivery SDK to build application on top of JavaScript. Given below is the detailed guide and helpful resources to get started with our JavaScript Delivery SDK.

The JavaScript Delivery SDK can also be used to create Node.js and React native applications.

## Prerequisite

You need [Node.js version 22 or later](https://nodejs.org/en) or later installed to use the Contentstack JavaScript Delivery SDK.

## Setup and Installation

### For JavaScript (Browser)

For browsers, we recommend to download the library via npm or yarn to ensure 100% availability.

If you'd like to use a standalone built file you can use the following script tag or download it from [jsDelivr](https://www.jsdelivr.com/package/npm/contentstack), under the `dist` directory:

```
<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>
```

You can also specify a specific version number.

```
<script src="https://cdn.jsdelivr.net/npm/contentstack@3.16.0/dist/web/contentstack.min.js"></script>
```

To initialize the SDK, you will need to specify the API Key, Delivery Token, and Environment Name of your stack.

```
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment"});
```

To initialize the SDK for the Europe, Azure NA, Azure EU region, GCP NA, GCP EU, or AWS AU refer to the code below:

```
FOR EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.EU});

FOR AZURE_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AZURE_EU});

FOR AZURE_NA

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AZURE_NA});

FOR GCP_NA
const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_NA});

FOR GCP_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_EU});

FOR AWS_AU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AWS_AU});
```

To initialize the SDK with Early Access Header, refer to the code below:

```
const Stack = Contentstack.Stack({
    'api_key':'api_key',
    'delivery_token':'delivery_token',
    'environment':'environment_name',
    'early_access': ['early_access_1', 'early_access_2']
});
```

### For Node.js

Node.js uses the Javascript SDK to create apps. To use the JavaScript Delivery SDK, install it via npm:

```
npm i contentstack
```

To import the SDK in your project, use the following command:

```
import Contentstack from 'contentstack';
```

To initialize the SDK, you will need to specify the API Key, Delivery Token, and Environment Name of your stack.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment");
```

To initialize the SDK for the Europe, Azure NA, Azure EU, GCP NA, or GCP EU region, refer to the code below:

```
FOR EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.EU});

FOR AZURE_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AZURE_EU});

FOR AZURE_NA

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment": "environment","region":Contentstack.Region.AZURE_NA });

FOR GCP_NA

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_NA});

FOR GCP_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_EU});

FOR AU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AU});
```

### For React Native

React Native uses the Javascript SDK to create apps. To use the JavaScript Delivery SDK, install ist via npm:

```
npm i contentstack
```

To import the SDK in your project, use the following command:

```
import Contentstack from 'contentstack/react-native'
```

To initialize the SDK, you will need to specify the API Key, Delivery Token, and Environment Name of your stack.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
```

To initialize the SDK for the Europe, Azure NA, Azure EU, GCP NA, or GCP EU region, refer to the code below:

```
FOR EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.EU});

FOR AZURE_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AZURE_EU});

FOR AZURE_NA

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment": "environment", "region": Contentstack.Region.AZURE_NA});

FOR GCP_NA

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_NA});

FOR GCP_EU

const Stack = Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.GCP_EU});

const Stack = 
Contentstack.Stack({"api_key":"api_key","delivery_token":"delivery_token","environment":"environment","region":Contentstack.Region.AU});
```

## Quickstart in 5 mins

### Initializing your SDK

You will need to specify the API key, Delivery token, and Environment Name of your stack to initialize the SDK:

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
```

Once you have initialized the SDK, you can start getting content in your app.

### Querying content from your stack

To get a single entry, you need to specify the content type as well as the ID of the entry.

```
const Stack = Contentstack.Stack({ "api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment" });
const entry = Stack.ContentType('blog').Entry("entry_uid");
const result = await entry.toJSON().fetch();
```

**Note**: We have a method on query for a specific language. For example, consider the following query:

```
Stack.ContentType('content_type_uid').Query().language('fr-fr').toJSON().find();
```

It will provide all entries of a content type published on the French locale.

To retrieve multiple entries of a content type, you need to specify the content type uid. You can also specify search parameters to filter results.

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

- Currently, the JavaScript SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#queries) section of our Content Delivery API documentation.
- By default, the limit for response details per request is **100**, with the maximum limit set at **250**.

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

##### Setting a cache policy on a stack

This option allows you to globalize a cache policy. This means the cache policy you set will be applied to all the query objects of the stack.

```
//Setting a cache policy on a stack
Stack.setCachePolicy(Contentstack.CachePolicy.NETWORK_ELSE_CACHE)
```

##### Setting a cache policy on a query object

This option allows you to set/override a cache policy on a specific query object.

```
// setting a cache policy on a queryobject
Query.setCachePolicy(Contentstack.CachePolicy.CACHE_THEN_NETWORK)
```
