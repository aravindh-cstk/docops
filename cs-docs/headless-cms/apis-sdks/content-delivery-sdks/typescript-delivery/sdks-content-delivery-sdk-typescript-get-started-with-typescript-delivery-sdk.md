---
title: "Get Started with TypeScript Delivery SDK"
description: "This guide will help you get started with Contentstack TypeScript Delivery SDK to build apps. Learn more about basic installation, setup, and cache policies on this page."
url: /developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk
---

# Get Started with TypeScript Delivery SDK

## Get Started with TypeScript Delivery SDK

This step-by-step guide will help you get started with the Typescript SDK and build apps powered by Contentstack.

## Prerequisites

To get started with the Typescript Delivery SDK, you will need the following:

-   [Contentstack account](https://www.contentstack.com/login)
-   [Node.js](https://nodejs.org/) version 22 or later

## Authentication

To effectively interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api), a secure authentication process is employed using a Delivery Token that is specific to a publishing environment. Consequently, when utilizing the TypeScript Delivery SDK, you need to provide the necessary [delivery token](/docs/headless-cms/about-delivery-tokens) during the SDK initialization process for making API requests.

## Installation and Setup

To install the TypeScript SDK via npm, open the terminal and run the following command:

```
npm i @contentstack/delivery-sdk
```

## Initialize the SDK

To initialize the SDK, execute the following command:

```
import contentstack from '@contentstack/delivery-sdk';
const stack = contentstack.stack({ 
  apiKey: "apiKey",
  deliveryToken: "deliveryToken",
  environment: "environment_name"
})
```

Following are the details of the parameters that you need to pass in the above command:

-   apiKey: Enter the API key of your stack.
-   deliveryToken: Enter the delivery token associated with the environment of your stack. Here’s how you can [create a delivery token](/docs/headless-cms/create-a-delivery-token/).
-   environment: Enter the environment name where you want to initialize your SDK. Here’s how you can [add an environment](/docs/headless-cms/add-an-environment).

To initialize the SDK with the latest features offered in the early access phase, include the early access parameter as shown in the following code:

```
const stack = contentstack.stack({
    apiKey:"api_key",
    deliveryToken:"delivery_token",
    environment:"environment_name",
    early_access: ["early_access_1", "early_access_2"]
});
```

## Custom Configurations

Custom Configurations offer developers the flexibility to customize and adapt the SDK's behavior to suit their specific needs.

Here's an overview of the common customizable configurations within a SDK.

### Regions

Contentstack offers six [regions](/docs/administration/about-regions); AWS North America (NA), AWS Europe (EU), Azure North America (Azure NA), Azure Europe (Azure EU), GCP North America (GCP NA), and AWS Australia (AWS AU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions on how to use Contentstack SDKs.

**Note:** Users using the AWS NA region do not need to make any configuration changes as the SDK considers this region by default. This means, you need not pass the region parameter in the following code.

To utilize the SDKs in the AWS Europe, Azure NA, Azure EU, GCP NA, or AWS Australia regions, modify the SDK configuration as specified below, while keeping the rest of the instructions unchanged.

```
const stack = contentstack.stack({
 apiKey: "apiKey",
 deliveryToken: "deliveryToken",
 environment: "environment_name",
 region: Region.<<add_your_region>>
})
```

### Branches

For setting the branch for AWS Europe, Azure North America, Azure Europe, GCP North America, or AWS Australia, you need to execute the following command and initialize the SDK in a particular branch.

**Note:** Users using the AWS NA region need not pass the region parameter in the following code.

```
const stack = contentstack.stack({
 apiKey: "api_key",
 deliveryToken: "delivery_token",
 environment: "environment",
 region: Region.<<add_your_region>>;
 host: "<<add_your_host_URL>>", 
 branch: "branch"
})
```

Once you have initialized the SDK, you can start getting content in your app.

## Cache Policies

The cache policies allow you to define the source from which the SDK will retrieve the content. Depending on the chosen policy, the SDK can retrieve data from the cache, network, or both. You can set a cache policy on a stack and/or a query object.

Let's explore the different cache policies available for use:

| POLICIES | DESCRIPTION |
| --- | --- |
| IGNORE\_CACHE (default) | For the IGNORE\_CACHE policy, the SDK always retrieves data by making a network call without maintaining any cache. This is the default policy. |
| CACHE\_ELSE\_NETWORK | For the CACHE\_ELSE\_NETWORK policy, the SDK gets data from the cache, however, it makes a network call if it fails to retrieve data from the cache. |
| NETWORK\_ELSE\_CACHE | For the NETWORK\_ELSE\_CACHE policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from the cache. |
| CACHE\_THEN\_NETWORK | For the CACHE\_THEN\_NETWORK policy, the SDK gets data from the cache and makes a network call. (A successful callback is invoked twice.) |

**Note:** Caching in SDK is performed through the SDK's local storage or memory storage instead of CDN.

### Setting a Cache Policy for a Stack

This option allows you to apply a cache policy globally, ensuring that the cache policy you define is implemented across all query objects within the stack.

```
const stack = contentstack.stack({
 apiKey: "apiKey",
 deliveryToken: "deliveryToken",
 environment: "environment_name",
 cacheOptions: {
  policy: "CACHE_THEN_NETWORK",
  storeType: "memoryStorage"
 }
})
```

## Basic Queries

Contentstack SDKs are designed exclusively for read-only purposes and utilize Fastly, our robust and efficient CDN, to fetch and deliver content from the nearest server.

This section focuses explicitly on the Typescript Delivery SDK and provides an overview of basic queries. You will learn how to fetch data using the SDK and learn the techniques for efficient content retrieval.

### Get a Single Entry

To retrieve details of a single entry, execute the following code and specify the UID of the content type and the entry.

```
import { BaseEntry } from '@contentstack/delivery-sdk'


interface BlogEntry extends BaseEntry {
  note: string;
  photo: string;
  // other props
}

const result = await stack
                       .contentType("contentType_uid")
                       .entry("entry_uid")
                       .fetch<BlogEntry>();
```

### Get Multiple Entries

To retrieve details of multiple entries, execute the following code and specify the content type UID.

```
import { BaseEntry } from '@contentstack/delivery-sdk'


interface BlogEntry extends BaseEntry {
  note: string;
  photo: string;
  // other props
}

const result = await stack
                       .contentType("contentType_uid")
                       .entry()
                       .find<BlogEntry>();
```

### Get a Single Asset

To retrieve details of a single asset, execute the following code and specify the asset UID.

```
import { BaseAsset } from '@contentstack/delivery-sdk'

interface BlogAsset extends BaseAsset {
  // other props
}

const result = await stack.asset('asset_uid').fetch<BlogAsset>();
```

### Get Multiple Assets

To retrieve details of multiple assets, execute the following code.

```
import { BaseAsset } from '@contentstack/delivery-sdk'


interface BlogAsset extends BaseAsset {
  // other props
}

const result = await stack.asset().find<BlogAsset>();
```

## Advanced Queries

In this section, we will explore advanced queries for the TypeScript Delivery SDK. Below examples show how to create complex queries and implement pagination effectively.

### Creating Complex Queries

The query retrieves all entries that satisfy the query conditions made on referenced fields.

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.whereIn("brand").find<BlogEntry>();
```

### Pagination

Users can paginate API responses. This means you can request and receive data from the API in smaller chunks or pages, rather than receiving the entire dataset in one go.

```
const query = stack.contentType("contentTypeUid").entry().query();

interface BlogEntry extends BaseEntry {
	note: string;
	photo: string;
	// other props
}
const pagedResult = await query.paginate().find<BlogEntry>();

// for paginating use the next() or previous() method

const nextPageResult = await query.next().find<BlogEntry>();
const prevPageResult = await query.previous().find<BlogEntry>();
```

## Limitations

-   Our CDN services have a maximum URL size of **8KB**. Any request from Typescript Delivery SDK that exceeds this limit will get a 400 error.
-   The Typescript Delivery SDK does not support multiple content types referencing in a single query.
-   The Typescript Delivery SDK currently does not support querying [Global Field](/docs/developers/apis/content-delivery-api/global-fields) schemas. However, you can include these details when querying [content type](/docs/developers/apis/content-delivery-api/content-types) details by using the include\_global\_field\_schema query parameter.

## More Resources

[Typescript GitHub Repository](https://github.com/contentstack/contentstack-typescript)

## Next Steps

[Typescript Delivery SDK API Reference](/docs/developers/sdks/content-delivery-sdk/typescript/reference/)
