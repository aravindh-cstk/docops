---
title: "[Android] - Get Started with Android SDK"
description: Get started guide for integrating the Contentstack Android SDK, including installation, initialization, cache policies, basic queries, limitations, and resources.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/android/get-started-with-android-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
platform:
  - android
sdk:
  - Content Delivery SDK
language:
  - java
version: latest
last_updated: 2026-03-25
---

# [Android] - Get Started with Android SDK

This page explains how to install, initialize, and use the Contentstack Android SDK to fetch content via the Content Delivery APIs. It is intended for Android developers integrating Contentstack into an app and should be used when setting up the SDK, configuring regions, applying cache policies, and running basic entry/query fetches.

## Get Started with Android SDK

This guide will help you get started with Contentstack [Android SDK](/docs/developers/sdks/content-delivery-sdk/android/about-android-sdk/) to build apps powered by Contentstack.

## Prerequisites
To get started with Android SDK, you will need one the following:
- [Java JDK](https://www.oracle.com/in/java/technologies/javase/javase8-archive-downloads.html) version 1.8 or later
- [Android Studio](https://developer.android.com/studio) or Eclipse
- [Contentstack Java SDK latest version](https://mvnrepository.com/artifact/com.contentstack.sdk/java)

## SDK Installation and Setup
To integrate your Android project with Contentstack, install the following dependency:

**Gradle**

To add a dependency to your project, open the build.gradle file of the app module and paste the desired dependency under the "dependencies" tag.

For instance, here's an example of adding the Contentstack SDK as a dependency in the module-level build.gradle file.

```
// build.gradle (Module-level)

apply plugin: 'com.android.application'

android {
    // ...
}

dependencies {
    implementation 'com.contentstack.sdk:android:{latest_version}'
}
```
**Note: **You can find the latest version of dependency [here](https://search.maven.org/artifact/com.contentstack.sdk/android).

## Initialize SDK

Contentstack offers six regions **AWS North America**,** AWS Europe**, **AWS Australia Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Australia Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To initialize the SDK, specify **application context**, stack’s **API Key, **[**delivery token**](/docs/developers/create-tokens/about-delivery-tokens)**,** and name of the [**environment**](/docs/developers/set-up-environments/about-environments) where will publish your content, as shown in the snippet below:

```
Stack stack = Contentstack.stack(applicationcontext, "apiKey", "deliveryToken", "environment");
```
**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe check the [code of your region](/docs/developers/contentstack-regions/selecting-region-in-sdks#android) and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Australia, Azure North America, or Azure Europe, check the [code of your region](/docs/developers/contentstack-regions/selecting-region-in-sdks#android) and initialize SDK in a particular branch.

## Cache Policies
The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both.

Let’s look at the various cache policies available for use:

| POLICIES | DESCRIPTION |
|---|---|
| NETWORK_ONLY (default) | If you set NETWORK_ONLY as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache. This is set as the default policy. |
| CACHE_ELSE_NETWORK | If you set CACHE_ELSE_NETWORK as the cache policy, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. |
| NETWORK_ELSE_CACHE | If you set NETWORK_ELSE_CACHE as the cache policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache. |
| CACHE_ONLY | If you set CACHE_ONLY as the cache policy, the SDK gets data from the cache. |
| CACHE_THEN_NETWORK | If you set CACHE_THEN_NETWORK as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.) |
| IGNORE_CACHE | If you set IGNORE_CACHE as the cache policy, the SDK always retrieves data by making a network call, without maintaining any cache. |

You can set a cache policy on an [entry](/docs/content-managers/author-content/about-entries), an [asset](/docs/content-managers/author-content/about-assets), and/or a query object.

### Setting a cache policy on an entry
To set the cache policy to all the query objects of an entry, refer to the code below:

```
public void entry_NETWORK_ONLY() {
    final Entry entry = stack.contentType("user").entry("entryUid");
    entry.setCachePolicy(CachePolicy.NETWORK_ONLY);
    entry.addParam("key", "some_value");
    entry.fetch(new EntryResultCallBack() {
        @Override
        public void onCompletion(ResponseType responseType, Error error) {
            if (error == null) {
                //Success block
            } else {
                //Error block
            }
        }
    });}
```

### Setting a cache policy on an asset
To set the cache policy to all the query objects of an asset, refer to the code below:

```
public void assets_NETWORK_ONLY() {
    stack.assetLibrary().setCachePolicy(CachePolicy.NETWORK_ONLY);
    stack.assetLibrary().fetchAll(new FetchAssetsCallback() {
        @Override
        public void onCompletion(ResponseType responseType, List  assets, Error error) {
            if (error == null) {
                // Success block
            } else {
                // Failure block
            }
        }
    });
}
```

### Setting a cache policy on a query object
To set/override a cache policy on a specific query object, refer to the code below:

```
public void query_NETWORK_ONLY() {
    Query query = stack.contentType("categories").query();
    query.where("Title", "Your Title");
    query.setCachePolicy(CachePolicy.NETWORK_ONLY);
    query.find(new QueryResultsCallBack() {
        @Override
        public void onCompletion(ResponseType responseType, QueryResult queryresult, Error error) {
            if (error == null) {
                // Success block
            } else {
                // Failure block
            }
        }
    });
}
```

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To retrieve a single entry from a [content type](/docs/developers/create-content-types/about-content-types) use the code snippet given below:

```
ContentType contentType = stack.contentType("contentTypeUid");
Entry blogEntry = contentType.entry("entryUid");
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
Query blogQuery = stack.contentType("contentTypeUid").query();
blogQuery.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if(error == null){
            //Success block
        }else{
            //Error block
        }
    }
});
```
These were examples of some of the basic queries of the SDK. For advanced queries, refer to Contentstack Android SDK [API reference](/docs/developers/sdks/content-delivery-sdk/android/reference/).

**Note:** Currently, the Android SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/android/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/android/reference/#query-limit) parameters in subsequent requests.

```
Stack stack = Contentstack.stack(applicationContext, "apiKey", "deliveryToken", "environment");
Query csQuery = stack.contentType("contentTypeId").query();
csQuery.skip(20);
csQuery.limit(20);
csQuery.find(new QueryResultsCallBack() {
  @Override
  public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
      System.out.println("response "+queryResult)
  }
});
```

## Limitations
- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The Android SDK does not support multiple content types referencing in a single query.
- Currently, the Android SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [Android News App](/docs/developers/sample-apps/build-an-android-news-app-using-contentstacks-android-sdk)
- [Android E-commerce App](/docs/developers/sample-apps/build-an-android-e-commerce-app-using-contentstack-s-android-sdk)
- [Android Playground App using Sync API](https://github.com/contentstack/contentstack-android-sync-playground)
- [Android Sample App using Sync API and Persistence Library](https://github.com/contentstack/contentstack-android-persistence-example)
- [Android TV App](/docs/developers/sample-apps/build-an-android-tv-app-using-contentstacks-android-sdk)
- [Android SDK API Reference](/docs/developers/sdks/content-delivery-sdk/android/reference/)
- [Android SDK Change Log](/docs/developers/sdks/content-delivery-sdk/android/android-sdk-changelog/)
- [View and Download Android SDK repository on GitHub](https://github.com/contentstack/contentstack-android)

## Common questions

### Which region does the Android SDK use by default?
By default, the SDK uses the North American region.

### Where do I find the latest Gradle dependency version?
You can find the latest version of dependency [here](https://search.maven.org/artifact/com.contentstack.sdk/android).

### How many items does “Get Multiple Entries” return in one request?
In a single instance, the Get Multiple Entries query will retrieve only the first 100 items of the specified content type.

### Can I set cache policies on entries, assets, and queries?
You can set a cache policy on an entry, an asset, and/or a query object.

<!-- filename: android-get-started-with-android-sdk.md -->