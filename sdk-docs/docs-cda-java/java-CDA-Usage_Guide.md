---
title: "Java Delivery Introduction"
description: "Contentstack - Java Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
cms_uid: "blta396c6baa21b4f19"
---

# Java Delivery Introduction

## Java Delivery SDK for Contentstack

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/docs/developers/java/).

Contentstack provides Java Delivery SDK to build application on top of Java. Given below is the detailed guide and helpful resources to get started with our Java Delivery SDK.

## Prerequisite

To get started with Java SDK, you will need the following:

-   An IDE. You can use an IDE of your choice, but make sure it supports Java.
-   Java SDK version 1.8 or later

## SDK Installation and Setup

Add the following dependency code snippets into your project:

**Maven**

```
<dependency>
  <groupid>com.contentstack.sdk</groupid>
  <artifactid>java</artifactid>
  <version>{version}</version>
</dependency>
```

Maven users need to add the above code in your `pom.xml` file under the `<dependencies>` section.

**Gradle**

```
implementation'com.contentstack.sdk:java:{version}
```

Gradle users need to add the above dependency code into your `build.gradle` file.

You can download the latest dependency version [here](https://mvnrepository.com/artifact/com.contentstack.sdk/java).

## Quickstart in 5 mins

### Initializing your SDK

To initialize the SDK, you will need to specify the stack’s **APIKey, Delivery Token, **and **Environment** where you will publish your content.

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack("APIKey","deliveryToken","environmentName");
```

**Note **: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

**For setting the Region refer to the code below:**

```
import com.contentstack.sdk.*;

Config config = Config();
Config.region = ContentstackRegion.EU;
Stack stack = Contentstack.stack("APIKey", "deliveryToken", "environmentName", config);
```

**For setting the Branch refer to the code below:**

```
import com.contentstack.sdk.*;

Config config = Config();
config.setBranch("branch");
Stack stack = Contentstack.stack("APIkey", "deliveryToken", "environmentName", config);
```

**Note**:For Europe, set the region as** EU**, for Azure North America , set the region as **AZURE\_NA**, for Azure Europe, set the region as** AZURE\_EU**, for GCP North America, set the region as **GCP\_NA**, for GCP Europe, set the region as **GCP\_EU.**

### Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api/) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

**Get a Single Entry**

To retrieve a single [Entry](/docs/developers/apis/content-delivery-api/) from a [Content Type](/docs/developers/apis/content-delivery-api/#content-types), use the code snippet given below:

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack("APIKey", "deliveryToken", "environmentName");
ContentType contentType = stack.contentType("contentTypeUid");
Entry entry = contentType.entry("entryUid");
entry.fetch(new EntryResultCallBack() {
@Override
public void onCompletion(ResponseType responseType, Error error) {
if (error == null) {
  System.out.println(entry);
}});
```

**Get Multiple Entries**

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack("APIKey", "deliveryToken", "environmentName");
Query query = stack.contentType("contentTypeUid").query();
query.find(new QueryResultsCallBack){
 @Override
public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
if (error == null) {
}}
});
```

Note:

-   Currently, the Java SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/#queries)section of our Content Delivery API documentation
-   By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Pagination

In a single instance, the [Get Multiple Entries](https://contentstack-docs.vercel.app/docs/developers/apis/content-delivery-api/#entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack("APIKey","deliveryToken","environmentName"); 
Query query = stack.contentType("contentTypeUid").query(); 
query.skip(20).limit(20).find(newQueryResultsCallBack(){ 
@Override 
public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error){

}});
```
