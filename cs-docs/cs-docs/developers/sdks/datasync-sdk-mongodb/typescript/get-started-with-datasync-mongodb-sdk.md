---
title: "[Datasync SDK] - Get Started with DataSync MongoDB SDK"
description: Get started guide for the Contentstack DataSync MongoDB SDK, including prerequisites, installation, configuration, and basic queries.
url: https://www.contentstack.com/docs/developers/sdks/datasync-sdk-mongodb/typescript/get-started-with-datasync-mongodb-sdk
product: Contentstack DataSync
doc_type: sdk-getting-started
audience:
  - developers
  - backend-engineers
  - javascript-developers
version: typescript
last_updated: 2026-03-25
---

# [Datasync SDK] - Get Started with DataSync MongoDB SDK

This page explains how to install, configure, and initialize the Contentstack DataSync MongoDB SDK, then run basic queries against content synchronized into MongoDB. It is intended for developers integrating DataSync with a Node.js application and should be used when you want to query locally stored content from MongoDB.

## Get Started with DataSync MongoDB SDK

The Contentstack DataSync MongoDB SDK enables developers to synchronize and query content stored locally in a MongoDB database, facilitating efficient content delivery directly from the database.

## Prerequisites
- [Node.js](https://nodejs.org/en/download/) version 20 or higher.
- [MongoDB](https://www.mongodb.com/products/self-managed/community-edition) version 3.6 or higher.
- Data synchronized through [Contentstack DataSync](../../../develop-apps-with-datasync/about-contentstack-datasync.md)

## Installation and Setup
To use the DataSync MongoDB SDK, integrate it into the DataSync Boilerplate to query content synchronized with MongoDB.

Run the following command to install the SDK:

```
npm install contentstack/datasync-mongodb-sdk

```

## Initializing the SDK
Initialize the SDK using the configuration provided in the [datasync-boilerplate repository](https://github.com/contentstack/datasync-boilerplate) or by using the sample configuration given below.

```
import { Contentstack } from 'datasync-mongodb-sdk'
const Stack = Contentstack.Stack(config)

```

## Configuration Properties

| Property | Type | Description | Default Value |
|---|---|---|---|
| `dbName` | String | MongoDB database name | `'contentstack-persistent-db'` |
| `collection` | String | MongoDB collection names for assets, entries, and schemas | `'contents'` |
| `url` | String | MongoDB connection URI | `'mongodb://localhost:27017'` |
| `limit` | Number | Maximum number of objects returned in a single call | `100` |
| `skip` | Number | Number of objects skipped before results are returned | `0` |
| `indexes` | Object | Database indexes configuration | `null` |
| `projections` | Object | MongoDB projections to include/exclude specific fields | `null` |
| `options` | Object | MongoDB connection options (e.g., autoReconnect, connectTimeoutMS, keepAlive) | `{}` |
| `referenceDepth` | Number | Default nested-reference-field depth for `.includeReferences()` | `2` |

## Configuration Overview
Here's an overview of the SDK's configurable properties for databases and collections.

```
{
  contentStore: {
    collection: {
      asset: 'contents',
      entry: 'contents',
      schema: 'content_types',
    },
    dbName: 'contentstack-db',
    indexes: {
      _content_type_uid: 1,
      locale: 1,
      uid: 1,
      updated_at: -1,
    },
    limit: 100,
    locale: 'en-us',
    // https://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html
    options: {
      autoReconnect: true,
      connectTimeoutMS: 15000,
      keepAlive: true,
      noDelay: true,
      reconnectInterval: 1000,
      reconnectTries: 20,
      useNewUrlParser: true,
    },
    projections: {
      _content_type_uid: 0,
      _id: 0,
    },
    referenceDepth: 2,
    skip: 0,
    url: 'mongodb://localhost:27017',
  },
}

```

## Basic Queries
Once you have initialized the SDK, you can start querying on MongoDB. This section provides an overview of basic queries.

### Sample SDK Query
Here's a sample SDK query to get started.

```
import { Contentstack } from 'datasync-mongodb-sdk'
const Stack = Contentstack.Stack(config)

Stack.connect()
  .then(() => {
    return Stack.contentType('blog')
      .entries()
      .language('en-gb') // Optional. If not provided, defaults to en-us
      .include(['authors'])
      .includeCount()
      .includeContentType()
      .queryReferences({'authors.firstName': 'R.R. Martin'})
      .then((result) => {
        // Your result would be
        // {
        //   entries: [...], // All entries, whose first name is R.R. Martin
        //   content_type_uid: 'blog',
        //   locale: 'en-gb',
        //   content_type: {...}, // Blog content type's schema
        //   count: 3, // Total count of blog content type
        // }
      })
  })
  .catch((error) => {
    // handle errors..
  })

```
**Note: **Call `.connect()` to initiate SDK queries.

### Query a Single Entry
This query returns the first entry that matches query filters in the result

```
Stack.contentType('blog')
  .entry() // OR .asset()
  .find()
  .then((result) => {
    // Response
    // result = {
    //   entry: any | null,
    //   content_type_uid: string,
    //   locale: string,
    // }
  })
  .catch(reject)

```

### Querying a set of entries, assets or content types
This query returns the entry/ assets/ content types that match the query filters in the result

```
Stack.contentType('blog')
  .entries() // for .assets()
  .includeCount()
  .find()
  .then((result) => {
    // Response
    // result = {
    //   entry: any | null,
    //   content_type_uid: string,
    //   count: number,
    //   locale: string,
    // }
  })
  .catch(reject)

```

## Limitations
- Responses always include` content_type_uid` and` locale` keys.
- If` .language() `is not specified, the first language defined in `config.defaultLocale `is used.
- Single-entry queries (`>using .entry()` OR` .findOne()`) return `{ entry: {} }`, if found, or` { entry: null }`, if not found.
- Multiple-entry queries return` { entries: [ {...} ] }`.
- Referenced assets are included by default; use`.excludeReferences()`to exclude references (including assets) from responses.

## More Resources
DataSync MongoDB SDK API Reference

## Common questions

### Do I need to call `.connect()` before running queries?
Yes. **Note: **Call `.connect()` to initiate SDK queries.

### What happens if I don’t specify `.language()`?
If` .language() `is not specified, the first language defined in `config.defaultLocale `is used.

### How do single-entry and multiple-entry query responses differ?
Single-entry queries (`>using .entry()` OR` .findOne()`) return `{ entry: {} }`, if found, or` { entry: null }`, if not found. Multiple-entry queries return` { entries: [ {...} ] }`.

### Are referenced assets included automatically?
Referenced assets are included by default; use`.excludeReferences()`to exclude references (including assets) from responses.