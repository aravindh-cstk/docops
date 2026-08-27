---
title: "Use GraphQL Queries with Apollo Client React Native SDK"
description: "This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your React Native SDK apps."
url: /headless-cms/use-graphql-queries-with-apollo-client-react-native-sdk
uid: bltd0621e02da8b3e5f
---

# Use GraphQL Queries with Apollo Client React Native SDK

## Use GraphQL Queries with Apollo Client React Native SDK

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your [React Native SDK](/docs/developers/sdks/content-delivery-sdk/react-native/about-react-native-sdk) apps.

## Prerequisites

First, you need to install the dependencies using [Apollo Client](https://www.npmjs.com/package/apollo-client). Apollo Client helps you include packages that are essential for building an Apollo app.

1.  ## Create Apollo Client

    Create a file named \`apollo.js\` and export a function that accepts a token and returns an instance of Apollo Client. You have to configure the Apollo client with the GraphQL endpoint and the token. (Replace with your own GraphQL endpoint)

    ```
    import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';

    const GRAPHQL_ENDPOINT =
     'https://graphql.contentstack.com/stacks/<API_KEY>?environment=<ENVIRONMENT_NAME>';

    const apolloClient = () => {
     const link = new HttpLink({
       uri: GRAPHQL_ENDPOINT,
       headers: {
         access_token: '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>',
       },
     });

     return new ApolloClient({
       link: from([link]),
       cache: new InMemoryCache(),
     });
    };
    export default apolloClient;
    ```

2.  ## Connect your Client to React

    To connect Apollo Client to React, you need to use the \`ApolloProvider\` component exported from \`react-apollo\`. The \`ApolloProvider\` component wraps your React app and places the client on the context, which allows you to access it from anywhere in your component tree.

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
         <ApolloProvider client={this.state.client}>
           <Router>
             <Scene key="root">
               <Scene
                 key="Products"
                 component={Products}
                 title="Products"
                 initial={true}
               />
             </Scene>
           </Router>
         </ApolloProvider>
       );
     }
    }

    export default App;
    ```

3.  ## Write GraphQL queries

    Contentstack provides a GraphQL playground, which is the GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.

    Open a browser of your choice and hit the following URL after filling the required details:

    ```
    https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/explorer/
    ```

    **Note:** If you have pieces of data you may want to reuse in multiple places, make use of [fragments](https://www.apollographql.com/docs/ios/fetching/fragments).

4.  ## Fetch Data Using ApolloClient

    Once you have set up ApolloProvider to connect your client to React, you can start requesting data using Query, which is a React component exported from react-apollo.

    Create the FETCH\_ALL\_PRODUCT component in index.js, add the following code snippet, and run it to see the Query component in action!

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
         <Query  query = {FETCH_ALL_PRODUCT}> 
         {({ loading, error, data }) => { 
           if (loading) { 
             return <View  style={styles.container}><Text>Loading....</Text></View> 
           } 
           if (error){ 
             return <View  style={styles.container}><Text>`Error! ${error.message}`</Text></View> 
           } 
           return <FlatList 
           data = {data.all_product.items} 
           renderItem=({item}) => ( 
             <Text  numberOfLines = {1}  style= {{textAlign: "center", fontSize:  15,}}>{item.title}</Text> 
           ); 
           /> 
         }} 
         </Query> 
       ); 
     } 
    }
    ```


## Example app

To create an app easily, we have an [example app](https://github.com/contentstack/contentstack-reactnative-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo React Native SDK.
