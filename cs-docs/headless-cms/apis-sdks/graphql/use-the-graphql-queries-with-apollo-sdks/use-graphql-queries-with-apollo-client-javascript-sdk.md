---
title: "Use GraphQL Queries with Apollo Client JavaScript SDK"
description: "Use the Apollo client and Contentstack GraphQL queries to power the content of your JavaScript SDK apps. Get the step-by-step guide here."
url: /headless-cms/use-graphql-queries-with-apollo-client-javascript-sdk
uid: blt1574d3ab342c29d7
---

# Use GraphQL Queries with Apollo Client JavaScript SDK

## Use GraphQL Queries with Apollo Client JavaScript SDK

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your [JavaScript SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk) apps.

## Prerequisites

Refer the [Getting started](https://www.apollographql.com/docs/react/get-started/) document for the initial installation procedure. Begin by including packages that are essential for building the Apollo app. Install the following modules using the npm install command:

-   [apollo-client](https://www.npmjs.com/package/apollo-client)

**Additional Resource:** To get an overall idea about Apollo for JavaScript along with its features, refer to its [official documentation](https://www.apollographql.com/docs/react/).

1.  ## Write GraphQL queries

    Contentstack provides a GraphQL playground, which is the GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.

    Open a browser of your choice and hit the following URL after filling the required details:

    ```
    https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/explorer/
    ```

    **Note:** If you have pieces of data you may want to reuse in multiple places, make use of [fragments](https://www.apollographql.com/docs/ios/fetching/fragments).

2.  ## Add modules in server file to invoke Apollo

    In order to invoke Apollo as part of the JavaScript, you need to import certain modules to the server file, app.js. 

    ```
    const express = require('express');
    const expressNunjucks = require('express-nunjucks');
    const app = express()
    var { ApolloClient, InMemoryCache, HttpLink,from, gql } =  require('@apollo/client');
    var fetch = require('node-fetch');
    ```

    Create a single shared instance of “Apollo-link” and point it at your GraphQL server. Under the HttpLink module instance, set the URL of GraphQL schema under the uri parameter and use fetch to fetch the data from graphql API.

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

3.  ## Fetch data using ApolloClient

    To fetch all entries of the “Product” [content type](/docs/headless-cms/about-content-types), add the following code snippet in the server file app.js.

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

    After executing the above query using the client object of the ApolloClient module, we will fetch the data of specific fields of all entries of the **Product** content type. You can render the response to view the result.


## Example app

We have created an [example app](https://github.com/contentstack/contentstack-js-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo JavaScript SDK which you can refer to create your own apps easily.
