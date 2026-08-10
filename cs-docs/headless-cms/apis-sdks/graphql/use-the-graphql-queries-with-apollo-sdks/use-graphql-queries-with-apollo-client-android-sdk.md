---
title: "Use GraphQL Queries with Apollo Client Android SDK"
description: "use the Apollo client and Contentstack GraphQL queries to power the content of your Android SDK apps."
url: /headless-cms/use-graphql-queries-with-apollo-client-android-sdk
---

# Use GraphQL Queries with Apollo Client Android SDK

## Use GraphQL Queries with Apollo Client Android SDK

**Warning:** This sample app is no longer maintained. It remains available for reference. If you have questions regarding this, please reach out to our [support team](mailto:support@contentstack.com) and we will do our best to help!

Apollo is a GraphQL client that helps you consume GraphQL APIs.

This step-by-step guide explains how to use the Apollo client and Contentstack GraphQL queries to power the content of your Android SDK apps.

## Prerequisites

Before proceeding with the Apollo SDK, we need to install certain dependencies of the project’s build.gradle file. Install the required dependencies as follows:

```
buildscript {
    dependencies {
        // ... (other values from the project)
        classpath 'com.apollographql.apollo:apollo-gradle-plugin:x.y.z'
    }
}
```

Next, add the Gradle plugin within your app module’s build.gradle file as follows:

```
// ... other apply statements, Apollo needs to be last
apply plugin: 'com.apollographql.apollo'

dependencies {
    // ... more implementation statments
    implementation 'com.apollographql.apollo:apollo-runtime:x.y.z'
}
```

**Note:** The latest Gradle plugin version is [mentioned](https://bintray.com/apollographql/android/apollo-gradle-plugin/_latestVersion) in the Bintray documentation. Refer the [Apollo-Android](https://www.apollographql.com/docs/android/) documentation for more details on what needs to be performed to add the Apollo SDK for Android into your project.

1.  ## Download your schema
    
    The first step is to construct a GraphQL schema file for your content model and include the file in your project. This schema file is a JSON file that contains the results of introspection queries and is used by Apollo-Android for the code generation process.
    
    You can download the GraphQL schema for your content model using Apollo CLI or can use apollo-codegen as follows:
    
    ```
    ./gradlew downloadApolloSchema --endpoint="https://<HOST>/stacks/<API_KEY>?environment=<ENVIRONMENT_NAME>" \
      --header="access_token: <ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>"
    ```
    
    **Download schema using Contentstack schema download**
    
    Download the GraphQL schema for your content model using [Contentstack GraphQL Schema Download](https://github.com/contentstack/contentstack-graphql-schema-download.git), and place it in the root directory of your Android project.
    
    **Note:** Place the schema file next to your .graphql files or within the /app/src/main/graphql/com/contentstack/graphql directory.
    
2.  ## Write GraphQL queries
    
    Contentstack provides a GraphQL playground, which is the GraphiQL interface, to test your GraphQL queries in your browser. Use this interface to write and test your queries.
    
    Open a browser of your choice and hit the following URL after filling the required details:
    
    ```
    https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/explorer/
    ```
    
    The following is an example of a sample query for GraphQL:
    
    ```
    query ALLProducts($skip:Int, $limit:Int) {
    all_product(locale: "en-us", skip:$skip, limit:$limit){
        items{
            title
            price
            url
            description
            featured_imageConnection{
                edges{
                    node{
                        title
                        url
                    }
                }
            }
        }
    }}
    ```
    
    If you want to query assets via class, you will need to implement the **SysAsset** class, as shown below:  
    
    ```
    class AssetFile implements SysAsset {
        filename
        url
    }
    ```
    
    Next, you need to create an instance of Apollo Client to fetch data.
    
3.  ## Create ApolloClient
    
    After downloading the schema and creating the queries, let’s create an instance of ApolloClient and point it at the GraphQL server.
    
    ApolloClient uses OkHttp under the hood to handle network requests. To send header values with your GraphQL requests, you can add those to your OkHttpClient instance by means of an Interceptor. Create an instance of OkHttpClient and pass it to the ApolloClient builder as follows:
    
    ```
    String BASE_URL = "https://<HOST>/stacks/<API_KEY>?environment=<ENVIRONMENT_NAME>";
    OkHttpClient okHttpClient = new OkHttpClient.Builder().build();
    ApolloClient apolloClient = ApolloClient.builder().serverUrl(BASE_URL).okHttpClient(okHttpClient).build();
    ```
    
4.  ## Fetch data using ApolloClient
    
    Finally, integrate ApolloClient into the app and pass in the generated queries. Write the logic for handling already-parsed responses as follows:
    
    ```
    apolloClient.query(AllProductQuery.builder().build()).enqueue(new      
    ApolloCall.Callback<AllProductQuery.Data>() {    
        @Override    
        public  void  onResponse(@NotNull Response<AllProductQuery.Data> response) {        
            response.data().all_product().items().stream().forEach(item -> {
                  Log.i("Title", item.title());
                  Log.i("Price", item.price().toString());
                  Log.i("description", item.description());
                  Log.i("image", item.featured_imageConnection().edges().get(0).node().url());
             });
        }    
        @Override    
        public  void  onFailure(@NotNull ApolloException e) {    
            Log.e(TAG, e.getLocalizedMessage());    
        }    
    });
    ```
    
    Additionally, the snippet above sets the Stack and the Locale to be used by the client.
    

## Example app

To create your own apps easily, you can refer to the [example app](https://github.com/contentstack/contentstack-android-graphql-example) that demonstrates the usage of Contentstack GraphQL queries and Apollo Android SDK.
