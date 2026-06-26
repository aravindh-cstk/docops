---
title: "[GraphQL API NEW] - Use GraphQL Queries with Apollo Client iOS SDK"
description: Use GraphQL Queries with Apollo Client iOS SDK
url: https://www.contentstack.com/docs/headless-cms/use-graphql-queries-with-apollo-client-ios-sdk
product: Contentstack
doc_type: guide
audience:
  - developers
  - ios-developers
version: "NEW"
last_updated: 2026-03-26
---

# [GraphQL API NEW] - Use GraphQL Queries with Apollo Client iOS SDK

This page explains how to use Apollo Client with Contentstack GraphQL queries in an iOS app, including downloading a schema, writing queries, generating Swift models, creating an ApolloClient instance, and fetching data. It is intended for developers building iOS apps that consume Contentstack content via GraphQL and should be used when setting up Apollo iOS code generation and query execution.

## Use GraphQL Queries with Apollo Client iOS SDK

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your [iOS SDK](/docs/developers/ios) apps.[https://github.com/contentstack/contentstack-ios-graphql-example](https://github.com/contentstack/contentstack-ios-graphql-example)

## Prerequisites

- [Apollo SDK for iOS](https://www.apollographql.com/docs/ios/)
- [Install Apollo Framework](https://www.apollographql.com/docs/ios/installation.html#installing-framework)

## Download your schema

The first step is to construct a GraphQL schema file for your [content type](../../create-content-types/about-content-types.md) and include this file in your project. This schema file is a JSON file named `schema.json` that contains the results of introspection queries and is used by Apollo iOS for the code generation process.

`apolloClient` has generic `fetch(query:)` methods that take a query argument conforming to the `Apollo.GraphQLQuery` protocol.

**Download schema using Apollo CLI**

Download the GraphQL schema for your content model using Apollo CLI and place it in the root directory of your Xcode project:

```
apollo schema:download --endpoint="https://graphql.contentstack.com/stacks/?environment=" --header="access_token: "
```

Refer the [Downloading Schema](https://www.apollographql.com/docs/ios/downloading-schema.html) doc for more information.

**Download schema using Contentstack schema download**

Download the GraphQL schema for your content model using [Contentstack GraphQL Schema Download](https://github.com/contentstack/contentstack-graphql-schema-download.git), and place it in the root directory of your Xcode project.

## Write GraphQL queries

Contentstack provides a GraphQL playground, which is a GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.

Open a browser of your choice and hit this URL (after filling the required details):

```
https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/explorer/
```

The following is an example of a sample query for GraphQL:

```
query Products($skip: Int = 0 ,$limit: Int){
    all_product(locale:"en-us",skip:$skip,limit:$limit) {
        items {
            title
            description
            price
            featured_imageConnection (limit: 10){
                edges{
                    node {
                        ...AssetFile
                    }
                }
            }
        }
    }
}

fragment AssetFile on SysAsset{
    filename
    url
}
```

**Note**: If you have pieces of data you may want to reuse in multiple places, make use of [fragments](https://www.apollographql.com/docs/ios/fragments.html).

Next, we will generate Swift model types from your schema and queries.

## Generate Swift query models

Once your queries are working and return the expected data, the next step is to add a code generation build step to your target by invoking Apollo as part of the Xcode build process.

Now, you need to create a build step and make sure that it runs before “Compile Sources.” To do so, perform the steps given below:

Click on the **Build Phases** settings tab under your application’s **TARGETS** section.
- Click on the **+** (Plus) icon and select **New Run Script Phase**.
- Create a run script and change its name to “Generate Apollo GraphQL API.”
- Drag this script just above **Compile Sources**. This opens the script area. Add the following content into it:

```
SCRIPT_PATH="${PODS_ROOT}/Apollo/scripts"
cd "${SRCROOT}/${TARGET_NAME}"
"${SCRIPT_PATH}"/run-bundled-codegen.sh codegen:generate --target=swift --includes=./**/*.graphql --localSchemaFile="schema.json" API.swift
```

This step allows you to check whether the version of Apollo installed on your system is compatible with the current version of the framework installed in your project. If it isn’t, you will receive a warning.

Now, whenever you build your project, it executes `apollo-codegen`, which ensures that you will always have an updated set of Swift models and queries.

## Creating ApolloClient

After downloading the schema and creating the queries, create a single shared instance of ApolloClient and point it at the GraphQL server.

To do this, define a global variable in `AppDelegate.swift` by using an immediately invoked closure as follows:

```
let apollo: ApolloClient = {
    let url = URL(string: "https://graphql.contentstack.com/stacks/?environment=")!
    let configuration = URLSessionConfiguration.default
    configuration.httpAdditionalHeaders = ["access_token": ""]
    return  ApolloClient(networkTransport: HTTPNetworkTransport(url: url, client: URLSessionClient(sessionConfiguration: configuration)))
}()
```

## Fetch data using ApolloClient

Finally, integrate ApolloClient into your app, and pass the Swift model and queries generated above.

```
apolloClient.fetch(query: ProductQuery()) { [weak self] result, error in
    // Handle the response here.
}
```

Queries are represented as instances of generated classes conforming to the `GraphQLQuery` protocol. When you pass a query object to the `ApolloClient.fetch()` method, upon a successful API response, the method returns typed results.

**Additional Resource**:  To see the other arguments of the apolloClient.fetch(query:) method, refer the [Apollo iOS SDK documentation](https://www.apollographql.com/docs/ios/).

## Example app

We have created an [example app](https://github.com/contentstack/contentstack-ios-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo iOS SDK. You can refer to this guide and create your own apps easily.

## Common questions

### Do I need to download a schema file before generating Swift models?
Yes. The guide states the first step is to construct a GraphQL schema file named `schema.json` and include it in your project for Apollo iOS code generation.

### Where should I place the downloaded `schema.json` file?
Place it in the root directory of your Xcode project.

### How do I ensure code generation runs automatically?
Add a “New Run Script Phase” named “Generate Apollo GraphQL API” and drag it just above **Compile Sources** so it runs during builds.

### Where can I find an end-to-end working example?
Use the [example app](https://github.com/contentstack/contentstack-ios-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo iOS SDK.

Filename: graphql-api-new-use-graphql-queries-with-apollo-client-ios-sdk.md