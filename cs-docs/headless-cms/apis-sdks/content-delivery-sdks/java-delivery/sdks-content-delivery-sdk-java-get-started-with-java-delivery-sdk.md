---
title: "Get Started with Java Delivery SDK"
description: "This guide will help you get started with Contentstack Java SDK to build apps. Get clear steps on SDK installation & setup, initialization, and basic queries."
url: /developers/sdks/content-delivery-sdk/java/get-started-with-java-delivery-sdk
---

# Get Started with Java Delivery SDK

## Get Started with Java Delivery SDK

This guide will help you get started with Contentstack [Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk/) to build apps powered by Contentstack.  

## Prerequisites

To get started with Java SDK, you will the following:

-   An IDE. You can use an IDE of your choice, but make sure it supports Java.
-   Java SDK version 1.8 or later

## SDK Installation and Setup

Add the following dependency code snippets into your project:

-   **Maven**
    
    ```
    <dependency>
        <groupid>com.contentstack.sdk</groupid>
        <artifactid>java</artifactid>
        <version>{version}</version>
    </dependency>
    ```
    
    Maven users need to add the above code in your pom.xml file under the <dependencies> section.
    
-   **Gradle**
    
    ```
    compile 'com.contentstack.sdk:java:{version}'
    ```
    
    Gradle users need to add the above dependency code into your build.gradle file.
    

You can download the latest dependency version [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

## Initialize SDK

Contentstack offers six [regions](/docs/administration/about-regions) seven regions, **AWS North America**, **AWS Europe, AWS Australia**, **Azure North America**, **Azure Europe**, **GCP North America,** and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.  
  
To use SDKs for the Europe, Australia, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To initialize the SDK, you will need to specify the stack’s **API Key,** [**delivery token**](/docs/headless-cms/about-delivery-tokens)**,** and name of the [**environment**](/docs/headless-cms/about-environments)where you will publish your content.  

```
Stack stack = Contentstack.stack("stack_api_key", "delivery_token", "environment_name");
```

**Note:** By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, AWS Australia, Azure North America, or Azure EU check the [code of your region](/docs/administration/selecting-region-in-sdks#java) and configure your SDK.  

Once you have initialized the SDK, you can query entries to fetch the required content.

For Setting the branch for Europe, Azure North America, Azure Europe, check the [code of your region](/docs/administration/selecting-region-in-sdks#java) and initialize SDK in a particular branch.

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To retrieve a single [entry](/docs/headless-cms/about-entries/) from a [content type](/docs/headless-cms/about-content-types), use the code snippet given below:

```
ContentType contentType = stack.contentType("content_type_uid");
Entry blogEntry = contentType.entry("entry_uid");
blogEntry.fetch(new EntryResultCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, Error error) {
        if (error == null) {
            // Success block
        } else {
            // Error block 
        }
    }
});
```

### Get Multiple Entries

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
//stack is an instance of Stack class
Query blogQuery = stack.contentType("content_type_uid").query();
blogQuery.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error == null) {
            //Success block
        } else {
            //Error block
        }
    }
});
```

These were examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack Java SDK [API reference](/docs/developers/sdks/content-delivery-sdk/java/reference/).

**Note:** Currently, the Java SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-limit) parameters in subsequent requests.

```
Stack stack = Contentstack.stack("stack_api_key", "delivery_token", "environment", false);
Query csQuery = stack.contentType("contentType_name").query();
csQuery.skip(20);
csQuery.limit(20);
csQuery.find(new QueryResultsCallBack() {

          @Override
          public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
          }
      });
```

## Limitations

-   We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.
-   The Java SDK does not support multiple content types referencing in a single query.
-   Currently, the Java SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [Java SDK API Reference](/docs/developers/sdks/content-delivery-sdk/java/reference/)
-   [Java SDK Changelog](/docs/developers/sdks/content-delivery-sdk/java/java-sdk-changelog/)
-   [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)
