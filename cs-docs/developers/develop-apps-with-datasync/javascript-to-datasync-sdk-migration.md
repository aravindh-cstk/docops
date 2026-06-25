---
title: "[Synchronize Data With Datasync] - JavaScript to DataSync SDK Migration"
description: This guide will give you detailed information about how to migrate from contentstack-javascript to DataSync.
url: https://www.contentstack.com/docs/headless-cms/javascript-to-datasync-sdk-migration
product: Contentstack DataSync
doc_type: migration-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Synchronize Data With Datasync] - JavaScript to DataSync SDK Migration

This page explains how to migrate from the `contentstack-javascript` SDK to the DataSync SDK. It is intended for developers who already have DataSync set up and synced content, and should be used when updating existing JavaScript implementations to the DataSync SDK equivalents.

## JavaScript to DataSync SDK Migration

This guide will give you detailed information about how to migrate from contentstack-javascript to DataSync.

## Pre-requisites
- [Nodejs v20+](https://nodejs.org/en/download/)
- DataSync already set up
- Synced content using DataSync

Some important points before we move in:
- If a particular method isn't mentioned here, check the Methods not supported by the DataSync section.
- If the method isn't listed there as well, it probably works the same as contentstack-javascript SDK.
- You don't need to call .Query() on DataSync SDK's. By default, you need to query/filter the data that you want to fetch.
- You don't need to call .toJSON() on DataSync SDK's. By default, the data returned will be in JSON format.
- You need to call Stack.connect(dbOptions) before running subsequent queries in the DataSync SDK.
- You need to call Stack.close(dbOptions) before the DataSync SDK terminates.

## DataSync Specific Methods
- **.entry(uid?: string)**: This method fetches the first entry of that particular [content type](../create-content-types/about-content-types.md) after all the filters are applied. The `uid` is an optional field. Generally, this method is used when querying a singleton content type.
- **.entries()**: This method fetches the [entry](../../content-managers/author-content/about-entries.md) list of a specified content type. Generally, it is called after `.contentType('content_type_uid')`.
- **.asset(uid?: string)**: This method fetches the first asset that is found after all the filters are applied. The `uid` is an optional field.
- **.assets()**: This method fetches the asset list. Do not call `.contentType('content_type_uid')` for this because both the methods internally set a `_content_type_uid` which is used to determine what kind of object to fetch. Since both of them differ for assets, content_type and entries, it is best not to call them both in the same query. If it does, the last one called, will take preference (as it will override the previous) - which can lead to unexpected results.
- **.schema(uid?: string)**: This method fetches the first content type schema that's found after all the filters are applied. The `uid` is an optional field.
- **.schemas()**: This method fetches the content type schema list. Do not call `.contentType('content_type_uid')` for this.
- **.excludeReferences()**: This method returns the data without calling any references and is used along with fetching entries.
- **.includeReferences(depth?: number)**: Includes all references of entries for a specified content type. By default, it will fetch all references, their references and their references (Depth 2). You can increase or decrease the reference depth, by passing in a number parameter.

## Equivalent Methods
- Setting the content type to query on

```
// In `contentstack-javascript`, you need to call
Stack.ContentType('')

// In DataSync SDK, you need to call
Stack.contentType('')
```

- To sort in ascending order

```
// In contentstack-javascript, you need to call

Stack.ContentType('') .Query() .ascending(fieldName: string)

// In DataSync SDK, you need to call

Stack.contentType('') .entries() .ascending(fieldName: string)

```

- To sort in descending order

```
//In `contentstack-javascript`, you need to call

Stack.ContentType('')
  .Query()
  .descending(fieldName: string)

//In DataSync SDK, you need to call

Stack.contentType('')
  .entries()
  .descending(fieldName: string)
```

- Query: $where

In contentstack-javascript, you need to call

```
Stack.ContentType('')
  .Query()
  .where(field, value)
```

In DataSync SDK, you'd need to call

```
Stack.contentType('')
  .entries()
  .where(expression)

// Expression here is similar to: [https://docs.mongodb.com/manual/reference/operator/query/where/](https://docs.mongodb.com/manual/reference/operator/query/where/)
```

- Query: $and
In contentstack-javascript, you need to call

```
const Query1 = Stack.ContentType('blog').Query().where('title', 'Demo')
const Query2 = Stack.ContentType('blog').Query().lessThan('comments', 10)

Stack.ContentType('')
  .entries()
  .and(Query1, Query2)
  .find()
```

In DataSync SDK, you need to call

`$and` and `$or` because internally they work similar to MongoDb’s [**and**](https://docs.mongodb.com/manual/reference/operator/query/and/)** **and [**or**](https://docs.mongodb.com/manual/reference/operator/query/or/)** **operator.[https://docs.mongodb.com/manual/reference/operator/query/or/](https://docs.mongodb.com/manual/reference/operator/query/or/)

```
Stack.ContentType('blog')
 .entries()
  .and([
    {
      $where: () => {
        this.title = 'Demo'
      },
    },
    {
      comments: {
        $lt: 10
      }
    }
  ])
  .find()
```

- Query: $or
In contentstack-javascript, youd need to call

```
const Query1 = Stack.ContentType('blog').Query().where('title', 'Demo')
const Query2 = Stack.ContentType('blog').Query().lessThan('comments', 10)

Stack.ContentType('')
  .entries()
  .or(Query1, Query2)
  .find()
```

In DataSync SDK, you need to call `$and` and `$or` because internally they work similar to MongoDb’s [**and**](https://docs.mongodb.com/manual/reference/operator/query/and/)** **and [**or**](https://docs.mongodb.com/manual/reference/operator/query/or/)** **operator.[https://docs.mongodb.com/manual/reference/operator/query/or/](https://docs.mongodb.com/manual/reference/operator/query/or/)

```
Stack.ContentType('blog')
  .entries()
  .or([
    {
      $where: () => {
        this.title = 'Demo'
      },
    },
    {
      comments: {
        $lt: 10
      }
    }
  ])
  .find()
```

- Projection: Only

In contentstack-javascript, you need to call

```
// .only with field uid
.only('title')

// .only with field uid
only('BASE','title')

// .only with field uids(array)
.only(['title','description'])

// .only with reference_field_uid and field uid
.includeReference('category').only('category','title')

// .only with reference_field_uid and field uids(array)
.includeReference('category').only('category', ['title', 'description'])
```

In DataSync SDK, you need to call

```
/**
 * Currently, projections do not work on reference fields.
 * It's proposed to be added in v1.1.x release
 */
Stack.contentType('')
  .entries()
  .include('categories')
  .only(['title', 'categories'])
```

- Projection: Except

In contentstack-javascript, you need to call

```
// .except with field uid
.except('title')

// .except with field uid
except('BASE','title')

// .except with field uids(array)
.except(['title','description'])

// .except with reference_field_uid and field uid
.includeReference('category').except('category','title')

// .except with reference_field_uid and field uids(array)
.includeReference('category').except('category', ['title', 'description'])
```

In DataSync SDK, you need to call

```
/**
 * Currently, projections do not work on reference fields.
 * It's proposed to be added in v1.1.x release
 */
Stack.contentType('')
  .entries()
  .include('categories')
  .except(['title', 'categories'])
```

- Include reference

In contentstack-javascript, you need to call

```
Stack.ContentType('')
  .Query()
  .includeReferences([''])
```

In DataSync SDK, you need to call

```
Stack.contentType('')
  .entries()
  .include([''])
```

- Query: Query on references

In contentstack-javascript, you need to call

```
Stack.ContentType('')
  .Query()
  .includeReferences('reference')
  .query({
    $and: [
      {
        description: 'This is a special blog'
      },
      {
        reference: {
          $in_query: {
            title: 'Expectation'
          }
        }
      }
    ]
  })
```

In DataSync SDK, you need to call

```
Stack.ContentType('')
  .entries()
  .include('reference')
  .query({
    description: 'This is a special blog'
  })
  .queryReferences({
    reference.title: 'Expectation'
  })
```

## Unchanged Methods in DataSync
The following methods have not been changed in DataSync:
- .ascending()
- .descending()
- .lessThan():
- .lessThanOrEqualTo()
- .greaterThan()
- .greaterThanOrEqualTo()
- .containedIn()
- .notContainedIn()
- .limit()
- .skip()
- .query()
- .exists()
- .notExists()
- .tags()
- .includeCount()
- .includeContentType()
- .find()
- .findOne()
- .count()
- .includeSchema()

## Methods not supported by DataSync
- **.includeReferenceContentTypeUid()**: This method provides the content type UIDs of the referenced entries.
- **.search()**: It provides only the entries matching the specified value.
- **.ContentType()**: Fetches the list of a particular content type.
- **.Entry()**: Fethes a particular entry. As this method is no longer available in DataSync, use `.entries()` OR `.entry()` instead.
- **.Assets()**: Fetches list of assets in your stack. As this method is no longer available in DataSync, it is suggested to use the `.assets()` method instead.
- **.getContentTypes()**: This method returns a comprehensive detail of all content types in a particular stack. As this method is not available in DataSync, you can use `.schemas()` OR `.schema()` instead.
- **.fetch()**: This method helps you fetch the content based on the value specified, for example, asset, entries, etc.
- **.getLastActivities()**: This method helps you fetch the previous activities filtered through different parameters.
- **.imageTransform()**: This method helps you manipulate an image using different parameters.

## Common questions

### Do I need to call `.Query()` in the DataSync SDK?
No. You don't need to call `.Query()` on DataSync SDK's. By default, you need to query/filter the data that you want to fetch.

### Do I need to call `.toJSON()` in the DataSync SDK?
No. You don't need to call `.toJSON()` on DataSync SDK's. By default, the data returned will be in JSON format.

### When should I call `Stack.connect(dbOptions)` and `Stack.close(dbOptions)`?
You need to call `Stack.connect(dbOptions)` before running subsequent queries in the DataSync SDK, and you need to call `Stack.close(dbOptions)` before the DataSync SDK terminates.

### What should I use instead of `.Entry()` in DataSync?
As this method is no longer available in DataSync, use `.entries()` OR `.entry()` instead.