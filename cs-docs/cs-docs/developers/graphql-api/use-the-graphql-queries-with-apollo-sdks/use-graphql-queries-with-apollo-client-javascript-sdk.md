---
title: "[GraphQL API NEW] - Use GraphQL Queries with Apollo Client JavaScript SDK"
description: Use Contentstack GraphQL queries with the Apollo Client JavaScript SDK to fetch and render content.
url: https://www.contentstack.com/docs/developers/graphql-api/use-the-graphql-queries-with-apollo-sdks/use-graphql-queries-with-apollo-client-javascript-sdk
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [GraphQL API NEW] - Use GraphQL Queries with Apollo Client JavaScript SDK

This page explains how to use Apollo Client with Contentstack GraphQL queries in JavaScript SDK apps, including prerequisites, query authoring, Apollo setup, and fetching content for rendering.

## Use GraphQL Queries with Apollo Client JavaScript SDK

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your [JavaScript SDK](/docs/developers/javascript-browser) apps.

## Prerequisites

Refer the [Getting started](https://www.apollographql.com/docs/react/get-started/) document for the initial installation procedure. Begin by including packages that are essential for building the Apollo app. Install the following modules using the `npm install` command:
- [apollo-client](https://www.npmjs.com/package/apollo-client)

**Additional Resource**: To get an overall idea about Apollo for JavaScript along with its features, refer to its [official documentation](https://www.apollographql.com/docs/react/).

## Write GraphQL queries

Contentstack provides a GraphQL playground, which is the GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.

Open a browser of your choice and hit the following URL after filling the required details:

```
https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/explorer/
```

**Note**: If you have pieces of data you may want to reuse in multiple places, make use of [fragments](https://www.apollographql.com/docs/ios/fragments.html).

## Add modules in server file to invoke Apollo

In order to invoke Apollo as part of the JavaScript, you need to import certain modules to the server file, `app.js`.

```
const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express()
var { ApolloClient, InMemoryCache, HttpLink,from, gql } =  require('@apollo/client');
var fetch = require('node-fetch');
```

Create a single shared instance of “Apollo-link” and point it at your GraphQL server. Under the `HttpLink` module instance, set the URL of GraphQL schema under the `uri` parameter and use `fetch` to fetch the data from graphql API.

```
const cache = new InMemoryCache();
const link = new HttpLink({  uri:'https://graphql.contentstack.io/stacks/api_key?environment=environment_name', // GraphQL API endpoint to fetch data from your stack
  headers: {
    access_token: ‘environment-specific_delivery_token’,
  },

fetch
})

const client = new ApolloClient({
  link: from([link]),
  cache
})
```

## Fetch data using ApolloClient

To fetch all entries of the “Product” [content type](/docs/developers/create-content-types/about-content-types), add the following code snippet in the server file `app.js.`

```
// ... above is the instantiation of the client object.

client
 .query({
  query: gql`query {
    all_product(locale: "en-us") {
      items {
        title
        description
        price
        featured_imageConnection(limit: 10) {
          edges {
            node {
              url
            }
          }
        }
      }
    }
  }`,
  .then(result =>
   res.render('./index', result)
   )
```

After executing the above query using the client object of the `ApolloClient` module, we will fetch the data of specific fields of all entries of the **Product** content type. You can render the response to view the result.

## Example app

We have created an [example app](https://github.com/contentstack/contentstack-js-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo JavaScript SDK which you can refer to create your own apps easily.

## Common questions

### Do I need the GraphQL playground to run queries from my app?
No. Contentstack provides a GraphQL playground to test queries in the browser, but your app can run queries directly using ApolloClient.

### Where do I set the GraphQL endpoint and delivery token?
Set the GraphQL endpoint in the `uri` parameter of `HttpLink`, and set the `access_token` in the `headers` object.

### Can I reuse parts of queries across multiple requests?
Yes. If you have pieces of data you may want to reuse in multiple places, make use of fragments.

### Is there a working reference implementation?
Yes. An example app is available at https://github.com/contentstack/contentstack-js-graphql-example.

<!-- filename: graphql-api-new-use-graphql-queries-with-apollo-client-javascript-sdk.md -->