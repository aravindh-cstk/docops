---
title: "[Java] - Get Started with Java Delivery SDK"
description: Get started guide for Contentstack Java Delivery SDK, including prerequisites, installation, initialization, basic queries, pagination, limitations, and resources.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/get-started-with-java-delivery-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Java] - Get Started with Java Delivery SDK

This page explains how to install, initialize, and use the Contentstack Java Delivery SDK to fetch content via the Content Delivery APIs. It is intended for developers integrating Contentstack content retrieval into Java applications and should be used when setting up the SDK and implementing basic queries.

## Get Started with Java Delivery SDK

This guide will help you get started with Contentstack [Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk/) to build apps powered by Contentstack.

## Prerequisites
To get started with Java SDK, you will the following:
- An IDE. You can use an IDE of your choice, but make sure it supports Java.
- Java SDK version 1.8 or later

## SDK Installation and Setup
Add the following dependency code snippets into your project:
- **Maven**
```

    com.contentstack.sdk
    java
    {version}

```
Maven users need to add the above code in your `pom.xml` file under the `<dependencies>` section.
- **Gradle**
```
compile 'com.contentstack.sdk:java:{version}'
```
Gradle users need to add the above dependency code into your `build.gradle` file.

You can download the latest dependency version [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

## Initialize SDK
Contentstack offers six [regions](/docs/developers/contentstack-regions/about-regions) seven regions, **AWS North America**,** AWS Europe, AWS Australia**, **Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Australia, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To initialize the SDK, you will need to specify the stack’s **API Key, **[**delivery token**](/docs/developers/create-tokens/about-delivery-tokens)**,** and name of the [**environment**](/docs/developers/set-up-environments/about-environments)****where you will publish your content.

```
Stack stack = Contentstack.stack("stack_api_key", "delivery_token", "environment_name");
```
**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, AWS Australia, Azure North America, or Azure EU check the [code of your region](/docs/developers/contentstack-regions/selecting-region-in-sdks#java) and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For Setting the branch for Europe, Azure North America, Azure Europe, check the [code of your region](/docs/developers/contentstack-regions/selecting-region-in-sdks#java) and initialize SDK in a particular branch.

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To retrieve a single [entry](/docs/content-managers/author-content/about-entries/) from a [content type](/docs/developers/create-content-types/about-content-types), use the code snippet given below:

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

**Note:** Currently, the Java SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-limit) parameters in subsequent requests.

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
- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The Java SDK does not support multiple content types referencing in a single query.
- Currently, the Java SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [Java Sample App](/docs/developers/sample-apps/build-a-web-application-using-contentstack-java-sdk-and-spring-boot/)
- [Java SDK API Reference](/docs/developers/sdks/content-delivery-sdk/java/reference/)
- [Java SDK Changelog](/docs/developers/sdks/content-delivery-sdk/java/java-sdk-changelog/)
- [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

## Common questions

### Which Java version is required?
Java SDK version 1.8 or later

### Where do I add the Maven dependency?
Maven users need to add the above code in your `pom.xml` file under the `<dependencies>` section.

### How do I fetch more than 100 entries?
You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/java/reference/#query-limit) parameters in subsequent requests.

### Does the Java SDK support multiple content types referencing in a single query?
Currently, the Java SDK does not support multiple content types referencing in a single query.