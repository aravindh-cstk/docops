---
title: "[Datasync SDK] - Get Started with DataSync FileSystem SDK"
description: Get started guide for the Contentstack DataSync Filesystem SDK, including prerequisites, installation, configuration, and basic queries.
url: https://www.contentstack.com/docs/developers/sdks/datasync-sdk/typescript/get-started-with-datasync-filesystem-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Datasync SDK] - Get Started with DataSync FileSystem SDK

This page explains how to install, configure, and use the Contentstack DataSync Filesystem SDK to synchronize and query Contentstack data from a local filesystem. It is intended for developers integrating DataSync into Node.js projects and should be used when setting up local content querying via the DataSync boilerplate.

## Get Started with DataSync Filesystem SDK

The Contentstack DataSync Filesystem SDK enables developers to efficiently synchronize and query Contentstack data directly from a local file system, optimizing content delivery and access.

## Prerequisites
- [Node.js](https://nodejs.org/en/download/) version 20 or higher
- Data synchronized through [Contentstack DataSync](../../../develop-apps-with-datasync/about-contentstack-datasync.md)

## Installation and Setup
To use the DataSync Filesystem SDK, integrate it into the DataSync Boilerplate to query content synchronized to the local filesystem.

Run the following command to install the SDK:

```
npm install contentstack/datasync-filesystem-sdk
```

## Initializing the SDK
Initialize the SDK using the configuration provided in the [datasync-boilerplate repository](https://github.com/contentstack/datasync-boilerplate) or by using the sample configuration shown below.

```
import { Contentstack } from 'datasync-filesystem-sdk'
const Stack = Contentstack.Stack(config)
```

## Configuration Properties

| Property | Type | Description | Default Value |
|---|---|---|---|
| `baseDir` | String | Directory path where content files are stored locally | `./contents` |
| `locale` | String | Default locale for content queries | `'en-us'` |
| `referenceDepth` | Number | Nested reference depth for `.includeReferences()` | `2` |

## Configuration Overview
Here's an overview of the SDK's configurable properties for databases and collections.

```
{
  contentStore: {
    baseDir: './_contents',
    defaultSortingField: 'updated_at',
    locale: 'en-us',
    projections: {
      _content_type_uid: 0,
    },
    referenceDepth: 2,
  },
}
```

## Basic Queries
Once you have initialized the SDK, you can start querying the filesystem SDK. This section provides an overview of basic queries.

### Sample SDK Query

```
import { Contentstack } from 'datasync-filesystem-sdk'
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
This query returns the entry/ assets/ content types that match the query filters in the results

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
- Single-entry queries (`using .entry()` OR` .findOne()`) return `{ entry: {} }`, if found, or `{ entry: null }`, if not found.
- Multiple-entry queries return` { entries: [ {...} ] }`.
- Referenced assets are included by default; use`.excludeReferences()`to exclude references (including assets) from responses.

## More Resources
DataSync FileSystem SDK API Reference

## Common questions

### Do I need to call `.connect()` before running queries?
Yes. **Note: **Call `.connect()` to initiate SDK queries.

### What happens if I don’t specify `.language()`?
If` .language() `is not specified, the first language defined in `config.defaultLocale `is used.

### What do single-entry queries return when nothing matches?
Single-entry queries (`using .entry()` OR` .findOne()`) return `{ entry: {} }`, if found, or `{ entry: null }`, if not found.

### How do I exclude referenced assets from responses?
Referenced assets are included by default; use`.excludeReferences()`to exclude references (including assets) from responses.