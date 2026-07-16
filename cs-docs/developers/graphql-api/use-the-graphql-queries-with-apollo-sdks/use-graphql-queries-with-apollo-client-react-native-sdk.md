---
title: "[GraphQL API NEW] - Use GraphQL Queries with Apollo Client React Native SDK"
description: Step-by-step guide to use Apollo Client and Contentstack GraphQL queries in React Native SDK apps.
url: https://www.contentstack.com/docs/headless-cms/use-graphql-queries-with-apollo-client-react-native-sdk
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - mobile-developers
  - react-native-developers
version: NEW
last_updated: 2026-03-26
---

# [GraphQL API NEW] - Use GraphQL Queries with Apollo Client React Native SDK

This page explains how to use Apollo Client with Contentstack GraphQL queries in React Native SDK apps. It is intended for developers building React Native applications who want to fetch and render Contentstack content using GraphQL and Apollo, and should be used when setting up GraphQL data fetching in a React Native project.

## Use GraphQL Queries with Apollo Client React Native SDK

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your [React Native SDK](../../sdks/content-delivery-sdk/react-native.md) apps.

## Prerequisites

First, you need to install the dependencies using [Apollo Client](https://www.npmjs.com/package/apollo-client). Apollo Client helps you include packages that are essential for building an Apollo app.

## Create Apollo Client

Create a file named `apollo.js` and export a function that accepts a token and returns an instance of Apollo Client. You have to configure the Apollo client with the GraphQL endpoint and the token. (Replace with your own GraphQL endpoint)

```
import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';

const GRAPHQL_ENDPOINT =
 'https://graphql.contentstack.com/stacks/?environment=';

const apolloClient = () => {
 const link = new HttpLink({
   uri: GRAPHQL_ENDPOINT,
   headers: {
     access_token: '',
   },
 });

 return new ApolloClient({
   link: from([link]),
   cache: new InMemoryCache(),
 });
};
export default apolloClient;
```

## Connect your Client to React

To connect Apollo Client to React, you need to use the `ApolloProvider` component exported from `react-apollo`. The `ApolloProvider` component wraps your React app and places the client on the context, which allows you to access it from anywhere in your component tree.

```
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import apolloClient from './apollo';
import {ApolloProvider} from 'react-apollo';
import Products from './Products';

class App extends Component {
 state = {
   client: apolloClient(),
 };

 render() {
   return (

   );
 }
}

export default App;
```

## Write GraphQL queries

Contentstack provides a GraphQL playground, which is the GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.

Open a browser of your choice and hit the following URL after filling the required details:

```
https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/explorer/
```

**Note**: If you have pieces of data you may want to reuse in multiple places, make use of [fragments](https://www.apollographql.com/docs/ios/fragments.html).

## Fetch Data Using ApolloClient

Once you have set up `ApolloProvider` to connect your client to React, you can start requesting data using `Query`, which is a React component exported from `react-apollo`.

Create the `FETCH_ALL_PRODUCT` component in `index.js`, add the following code snippet, and run it to see the Query component in action!

```
import {Query} from 'react-apollo';
import {gql} from '@apollo/client';
 const FETCH_ALL_PRODUCT = gql `
query {
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
}
`;
 export  default  class  Products  extends  React.Component  {
  render() {
   return(

     {({ loading, error, data }) => {
       if (loading) {
         return Loading....
       }
       if (error){
         return `Error! ${error.message}`
       }
       return  (
         {item.title}
       );
       />
     }}

   );
 }
}
```

## Example app

To create an app easily, we have an [example app](https://github.com/contentstack/contentstack-reactnative-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo React Native SDK.

## Common questions

### Do I need ApolloProvider to use Apollo Client in React Native?
Yes. To connect Apollo Client to React, you need to use the `ApolloProvider` component exported from `react-apollo`.

### Where do I test Contentstack GraphQL queries in the browser?
Use the GraphQL playground (GraphiQL interface) at:
`https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/explorer/`

### What should I replace in the Apollo client configuration?
Replace with your own GraphQL endpoint and configure the token in the `access_token` header.

### Is there a working sample project I can reference?
Yes. An [example app](https://github.com/contentstack/contentstack-reactnative-graphql-example) demonstrates the usage of Contentstack GraphQL queries and Apollo React Native SDK.

<!-- filename: graphql-api-new-use-graphql-queries-with-apollo-client-react-native-sdk.md -->