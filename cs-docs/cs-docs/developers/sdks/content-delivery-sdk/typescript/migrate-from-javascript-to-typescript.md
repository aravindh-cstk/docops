---
title: "[TypeScript] - Migrate from JavaScript to TypeScript"
description: Migration guide detailing the changes needed to transition from a JavaScript Delivery SDK to a TypeScript Delivery SDK.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/typescript/migrate-from-javascript-to-typescript
product: Contentstack
doc_type: migration-guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [TypeScript] - Migrate from JavaScript to TypeScript

This page provides a migration guide for developers moving from the JavaScript Delivery SDK to the TypeScript Delivery SDK, including setup, initialization, and API usage differences across common objects like Stack, Entries, Assets, and Query.

## Migrate from JavaScript to TypeScript

This migration guide offers a detailed breakdown of the necessary changes needed to transition from a JavaScript Delivery SDK to a TypeScript Delivery SDK. The TypeScript Delivery SDK is built upon version 4 of the JavaScript Delivery SDK.

## Prerequisites

Both SDKs have the same requirements to get started. To begin using either SDK, you will need the following:
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js](https://nodejs.org/) version 20 or later

## Setup and Installation

This section illustrates the setup and installation for the JavaScript and TypeScript Delivery SDKs.
- **JavaScript Implementation:**
    Execute the below command to install the JavaScript Delivery SDK in your system:

```
// Browser

// Node.js
npm i contentstack@3.17.0
```

- **TypeScript Implementation:**
    Execute the below command to install the TypeScript Delivery SDK in your system:

```
// Node.js
npm i @contentstack/delivery-sdk@latest
```

## Initialization

This section shows how to initialize the JavaScript and TypeScript Delivery SDKs. The initialization process is essentially the same for both SDKs. See the code below for an example of how to initialize the SDKs in your stack.
- **JavaScript Implementation******Execute the below command to initialize the JavaScript Delivery SDK in your system:

```
import contentstack from 'contentstack';

const Stack = contentstack.Stack({apiKey: “apiKey”, deliveryToken: “deliveryToken”, environment: “environment”});
```

- **TypeScript Implementation******Execute the below command to initialize the TypeScript Delivery SDK in your system:

```
import contentstack from '@contentstack/delivery-sdk';

const Stack = contentstack.stack({apiKey: “apiKey”, deliveryToken: “deliveryToken”, environment: “environment”});
```

## Stack

A [stack](../../../set-up-stack/about-stack.md) is a repository or a container that holds all the content/assets of your site. It allows multiple users to create, edit, approve, and publish their content within a single space.

The stack function initializes an instance of the “Stack”

### JavaScript Implementation for Stack

Below are some methods for the Stack class that you can execute in the JavaScript SDK.

**Sync**

The `sync` method syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.
- For initializing sync

```
const result = await Stack.sync({'init': true});
```

- For initializing sync with entries of a specific locale

```
const result = await Stack.sync({'init': true, 'locale': 'en-us'
});
```

- For initializing sync with entries published after a specific date

```
const result = await Stack.sync({'init': true, 'start_date': '2018-10-22'});
```

- For initializing sync with entries of a specific content type

```
const result = await Stack.sync({ 'init': true, 'content_type_uid': 'session'});
```

- For initializing sync with a specific type of content

```
const result = await Stack.sync({ 'init': true, 'type': 'entry_published'});
```

- For fetching the next batch of entries using pagination token

```
const result = await Stack.sync({'pagination_token': ''});
```

- For performing subsequent sync after initial sync

```
const result = await Stack.sync({'sync_token': ''});
```

### TypeScript Implementation for Stack

Below are some methods for the Stack class that you can execute in the TypeScript SDK.
- **setLocale**

    The `setLocale` method sets the locale of the API server.

```
stack.setLocale('en-155');
```

- **Sync**

    The `sync` method syncs your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates.

        For initializing sync

```
Stack.sync();
```

- For initializing sync with entries of a specific locale

```
Stack.sync({ 'locale': 'en-us'});
```

- For initializing sync with entries published after a specific date

```
Stack.sync({ 'start_date': '2018-10-22'});
```

- For initializing sync with entries of a specific content type

```
Stack.sync({ 'content_type_uid': 'session'});
```

- For initializing sync with a specific type of content

```
Stack.sync({ 'type': 'entry_published'});
//Use the type parameter to get a specific type of content. Supports 'asset_published', 'entry_published', 'asset_unpublished', 'entry_unpublished', 'asset_deleted', 'entry_deleted', 'content_type_deleted'.
```

- For fetching the next batch of entries using pagination token

```
Stack.sync({'pagination_token': ''});
```

- For performing subsequent sync after initial sync

```
Stack.sync({'sync_token': ''});
```

## Entries

An [entry](../../../../content-managers/author-content/about-entries.md) is the actual piece of content created using one of the defined content types. To work with a single entry, specify its UID.

### JavaScript Implementation for Entries

Below are some methods for the Entry class that you can execute in the JavaScript SDK.
- **Single Entry**

    To retrieve a single entry, execute the following code and specify the content type and entry UID.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').toJSON().fetch();
```

- **includeBranch**

    The `includeBranch` method includes the branch details in the result.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeBranch().toJSON().fetch();
```

- **includeFallback**

    The `includeFallback` method retrieves the entry in its fallback language.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').includeFallback().toJSON().fetch();
```

- **only**

    The `only` method selects specific field(s) of an entry.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').only('title').toJSON().fetch();
```

- **except**

    The `except` method excludes specific field(s) of an entry.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').except('title').toJSON().fetch();
```

- **language**

    The `language` method sets the language code of which you want to retrieve data.

```
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').language('language_code').toJSON().fetch();
```

- **Multiple Entries**

    To retrieve details of multiple entries, execute the following code.

```
const result = await Stack.ContentType('content_type_uid').Query().toJSON().find();
```

### TypeScript Implementation for Entries

Below are some methods for the Entry class that you can execute in the TypeScript SDK.
- **Single Entry**

    To get a single entry, you need to specify the content type as well as the ID of the entry.

```
interface BlogEntry extends BaseEntry {
	// Entry properties
}
const result = await stack.contentType("content_type_uid").entry("entry_uid").fetch();
```

- **includeBranch**

    The `includeBranch` method includes the branch details in the result.

```
const result = await stack.contentType("content_type_uid").entry().includeBranch().find();
```

- **includeFallback**

    The `includeFallback` method retrieves the entry in its fallback language.

```
const result = await stack.contentType("content_type_uid").entry().includeFallback().find();
```

- **only**

    The `only` method selects specific field(s) of an entry.

```
const result = await stack.contentType("content_type_uid").entry().only("field_uid").find();
```

- **except**

    The `except` method excludes specific field(s) of an entry.

```
const result = await stack.contentType("content_type_uid").entry().except("field_uid").find();
```

- **locale**

    The `locale` method retrieves the entries published in that locale.

```
const result = await stack.contentType('content_type_uid').entry('entry_uid').locale('locale_code').toJSON().fetch();
```

- **Multiple Entries**

    To retrieve details of multiple entries, execute the following code.

```
const result = await stack.contentType("content_type_uid").entry().find();
```

## Assets

In Contentstack, any files (images, videos, PDFs, audio files, and so on) that you upload get stored in your repository for future use. This repository of uploaded files is called [assets](../../../../content-managers/author-content/about-assets.md).

The Asset method by default creates an object for all assets of a stack. To retrieve a single asset, specify its UID.

### JavaScript Implementation for Assets

Below are some methods for the Asset class that you can execute in the JavaScript SDK.
- **Single Asset**

    To retrieve details of a single asset, execute the following code and specify the asset UID.

```
const result = await Stack.Assets('asset_uid').toJSON().fetch();
```

- **Multiple Assets**

    To retrieve details of multiple assets, execute the following code.

```
const result = await Stack.Assets().toJSON().find();
```

### TypeScript Implementation for Assets

Below are some methods for the Asset class that you can execute in the TypeScript SDK.
- **Single Asset**

    To retrieve details of a single asset, execute the following code and specify the asset UID.

```
interface BlogBG extends BaseAsset {
	// Asset properties
}
const result = await stack.asset('asset_uid').fetch();
```

- **Multiple Assets**

    To retrieve details of multiple assets, execute the following code.

```
const result = await stack.asset().find();
```

## Query

The initializer creates a Query object and provides support for all the different types of search queries.

### TypeScript Implementation for Query

The query class in the JavaScript Delivery SDK is not as feature-rich as the query class in the TypeScript SDK, as we have introduced some additional methods in the TypeScript Delivery SDK.
- **includeReference**

    The `includeReference` method retrieves the content of the referred entries in your response.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.includeReference("reference_field_uid").find();
```

- **includeCount**

    The `includeCount` method retrieves count and data of objects in the result.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.includeCount().find();

//OR
const asset = await stack.asset().includeCount().find();
```

- **orderByAscending**

    The `orderByAscending` method sorts the results in ascending order based on the specified field UID.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.orderByAscending("field_uid").find();

// OR
const asset = await stack.asset().orderByAscending().find();
```

- **orderByDescending**

    The `orderByDescending` method sorts the results in descending order based on the specified key.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.orderByDescending("field_uid").find();

// OR
const asset = await stack.asset().orderByDescending().find();
```

- **addParams**

    The `addParams` method adds a query parameter to the query.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.addParams({"key": "value"}).find();

// OR
const asset = await stack.asset().addParams({"key": "value"}).find();
```

- **addQuery**

    The `addQuery` method adds multiple query parameters to the query.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.addQuery("query_param_key", "query_param_value").find();

//OR
const asset = await stack.asset().addQuery("query_param_key", "query_param_value").find();
```

- **removeParam**

    The `removeParam` method removes a query parameter from the query.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.removeParam("query_param_key").find();

// OR
const asset = await stack.asset().removeParam("query_param_key").find();
```

- **where**

    The `where` method filters the results based on the specified criteria.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.where("field_UID", QueryOperationEnum.IS_LESS_THAN, ["field1", "field2"]).find();

//OR
const asset = await stack.asset().where("field_UID", QueryOperationEnum.IS_LESS_THAN, ["field1", "field2"]).find();
```

- **whereIn**

    The `whereIn` method retrieves the entries that meet the query conditions made on referenced fields.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.whereIn("reference_uid").find();
```

- **whereNotIn**

    The `whereNotIn` method retrieves the entries that do not meet the query conditions made on referenced fields.

```
const query = stack.contentType("content_type_uid").entry().query();

const result = await query.whereNotIn("reference_uid").find();
```

- **queryOperator**

    The `queryOperator` method retrieves the entries as per the given operator.

```
const query = stack.contentType("contentType1Uid").entry().query();

const subQuery1 = stack.contentType("contentType2Uid").query().where("reference_uid1", QueryOperation.IS_LESS_THAN, fields=90);

const subQuery2 = stack.contentType("contentType3Uid").query().where("reference_uid2", QueryOperation.INCLUDES, fields=[20, 45]);

query.queryOperator(QueryOperation.AND, subQuery1, subQuery2);

const res = await query.find();
```

## Content Type

A [content type](../../../create-content-types/about-content-types.md) is the structure or blueprint of a page or a section that your web or mobile property will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties.

### TypeScript Implementation for Content Type

Below are some methods for the ContentType class that you can execute in the TypeScript SDK.
- **Single Content Type**

    To retrieve a specific content type, execute the following code:

```
const contentType = await Stack.contentType('content_type_uid').fetch();
```

- **Multiple Content Type**

    To retrieve multiple content types, execute the following code:

```
const contentType = await Stack.contentType().find();
```

- **includeGlobalFieldSchema**

    The `includeGlobalFieldSchema` method retrieves the assets published in the locale.

```
const contentType = await Stack.contentType().includeGlobalFieldSchema().find();
```

## Pagination Responses

In a single instance, the Get Multiple Entries query will retrieve only the first 100 items of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](../../../create-content-types/reference.md#query-skip) and [limit](../../../create-content-types/reference.md#query-limit) parameters in subsequent requests.

### JavaScript Implementation for Pagination

Below is the code you can execute in the JavaScript SDK for pagination:

```
let blogQuery = Stack.contentType('example').query(); blogQuery.skip(20).limit(20).find()
   .then((result) => {
       console.log(result);
    })
   .catch((error))=> {
       console.log(error);
    });
```

### TypeScript Implementation for Pagination

Below is the code you can execute in the TypeScript SDK for pagination:

```
const query = stack.ContentType("contentTypeUid").Entry().query();
interface BlogEntry extends BaseEntry {
	note: string;
	photo: string;
	// other props
}
const pagedResult = await query.paginate().find();

// for paginating use the next() or previous() method
const nextPageResult = await query.next().find();
const prevPageResult = await query.previous().find();
```

## Cache Policies

Cache policies enable specifying the content source for the SDK retrieval. The chosen policy determines data retrieval from cache, network, or both. Apply a cache policy to a stack and/or query object as needed.

### JavaScript Implementation for Cache Policies

Below are some methods for the cache policies that you can execute in the JavaScript SDK.
- **Setting a cache policy for a stack**

    This option allows you to globalize a cache policy. This means the cache policy you set will be applied to all the query objects of the stack.

```
//Setting a cache policy on a stack
Stack.setCachePolicy(Contentstack.CachePolicy.NETWORK_ELSE_CACHE)
```

- **Setting a cache policy for a query object**

    This option allows you to set/override a cache policy on a specific query object.

```
// setting a cache policy on a queryobject
Query.setCachePolicy(Contentstack.CachePolicy.CACHE_THEN_NETWORK)
```

### TypeScript Implementation for Cache Policies

To set up a cache policy in the SDK, you need to install the persistence plugin separately:

```
npm i @contentstack/persistance-plugin@latest
```

After installing the persistence plugin, initialize the SDK and pass the cache configuration along with the persistence plugin object:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
import PersistanceStore from '@contentstack/persistance-plugin';

const Stack = contentstack.stack({
  apiKey: ,
  deliveryToken: ,
  environment: ,
  cacheOptions: {
    policy: Policy.CACHE_THEN_NETWORK,
    persistanceStore: new PersistanceStore({
      storeType: 'localStorage',
	maxAge:  // Default is 24h
	serializer:  // Default is JSON.stringify
	deserializer:  // Default is JSON.parse
    })
});
```

**Note**: If caching is not used or the policy is set to `Policy.IGNORE_CACHE`, you do not need to install the persistence plugin or configure the `cacheOptions`.

## Utils Library Usage

Utils library is imported default in case of Javascript Delivery SDK. However in Typescript user would need to install it separately.

### JavaScript Implementation for Utils Library Usage

You can directly make use of the methods available in the utils library.

```
import contentstack from 'contentstack';

// create stack instance and query a single entry
contentstack.Utils.jsonToHTML({
  entry: result,
  paths: ["rte_fieldUid", "group.rteFieldUID"],
  renderOption
})
```

### TypeScript Implementation for Utils Library Usage

To use the Utils library in TypeScript, install the package separately:

```
npm i @contentstack/utils@latest
```

Once installed, import and use it in your project:

```
import contentstack from 'contentstack';
import * as Utils from '@contentstack/utils';

// create stack instance and query a single entry
Utils.jsonToHTML({
  entry: result,
  paths: ["rte_fieldUid", "group.rteFieldUID"],
  renderOption
})
```

## Limitations
- Our CDN services have a maximum URL size of **8KB**. Any request from Typescript Delivery SDK that exceeds this limit will get a 400 error.
- The Typescript Delivery SDK does not support multiple content types referencing in a single query.
- The Typescript Delivery SDK currently does not support querying [Global Field](../../../../../api-docs/api-detail/content-delivery-api.md#global-fields) schemas. However, you can include these details when querying [content type](../../../../../api-docs/api-detail/content-delivery-api.md#content-types) details by using the `include_global_field_schema` query parameter.

## Common questions

**How do I install the TypeScript Delivery SDK?**  
Run `npm i @contentstack/delivery-sdk@latest`.

**Do JavaScript and TypeScript Delivery SDKs have different prerequisites?**  
No. Both SDKs have the same requirements to get started.

**Do I need an extra package to use caching in the TypeScript Delivery SDK?**  
Yes. You need to install `@contentstack/persistance-plugin@latest` and configure `cacheOptions` unless caching is not used or the policy is set to `Policy.IGNORE_CACHE`.

**Do I need to install the Utils library separately for TypeScript?**  
Yes. Install `npm i @contentstack/utils@latest` and then import it in your project.

filename: typescript-migrate-from-javascript-to-typescript.md