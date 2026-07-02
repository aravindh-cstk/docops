---
title: "query"
description: "The query() method returns a query builder. Pass optional query parameters, which are stored until any one of the following terminal methods is called: find() : Retrieves multiple stacks as a ContentstackCollection . findOne() : Retrieves at most one stack as a ContentstackCollection ( items[0] ). count(): Returns the total count by merging count: true into the request and returning response.data . Note: The find() method performs a single API request and returns a ContentstackCollection . Page size and offset are controlled via limit and skip in query() . Omitting them uses API defaults."
url: "https://www.contentstack.com/js-management-stack-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The `query()` method returns a query builder. Pass optional query parameters, which are stored until any one of the following terminal methods is called:

- `find()`: Retrieves multiple stacks as a `ContentstackCollection`.
- `findOne()`: Retrieves at most one stack as a `ContentstackCollection` (`items[0]`).
- `count():` Returns the total count by merging `count: true` into the request and returning `response.data`.

**Note:** The `find()` method performs a single API request and returns a `ContentstackCollection`. Page size and offset are controlled via `limit` and `skip` in `query()`. Omitting them uses API defaults.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.query | object | No | — | Top-level `query` object for filtering stacks. Sibling keys can include pagination and include flags. |
| params.include_collaborators | boolean | No | false | When true, it includes the details of the stack collaborators in the response. |
| params.include_stack_variables | boolean | No | false | When true, includes stack variables in the response (e.g., description, date format, time format). Response includes stack variable details. |
| params.include_discrete_variables | boolean | No | false | When true, it includes your stack's access token in the response. Response includes discrete variables. |
| params.include_count | boolean | No | false | When true, includes the total count of stacks owned by or shared with your account. Response includes a count. |

Returns:
Type
Query

**Example:** Fetch a filtered list of stacks in a single request.

**Note:** Each `include_*` flag can increase response size and transfer time. Request only the expansions your app needs.

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({
  authtoken: '<AUTHTOKEN>',
})
client
  .stack()
  .query({
    query: { name: '<STACK_NAME>' },
    limit: 20,
    skip: 0,
    include_count: true,
    include_collaborators: true,
    include_stack_variables: true,
    include_discrete_variables: true,
  })
  .find()
  .then((stacks) => console.log(stacks))
  .catch((err) => console.error(err))
```

**Example:** Get the total count of stacks matching the query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({
  authtoken: '<AUTHTOKEN>',
})
client
  .stack()
  .query({
    query: { name: '<STACK_NAME>' },
    limit: 20,
    skip: 0,
    include_count: true,
    include_collaborators: true,
    include_stack_variables: true,
    include_discrete_variables: true,
  })
  .count()
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
```
