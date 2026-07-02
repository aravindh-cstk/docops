---
title: "Contentstack - Android Delivery SDK"
description: "Contentstack - Android Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blt3456345a64828830"
---

# Contentstack - Android Delivery SDK

## Android Delivery SDK for Contentstack

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application front end, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/docs/developers/java/).

Contentstack provides Android Delivery SDK to build applications on top of Android. Given below is the detailed guide and helpful resources to get started with our Android Delivery SDK.

## Prerequisite

To get started with Android SDK, you will the following:

- Android Studio IDE
- Android API SDK support 19 and above
- Java SDK version 1.8 or later

## SDK Installation and Setup

Using Android Studio, you can easily add dependencies by opening the app's **build.gradle** file, under the dependencies section in the project:

```
dependencies{
    implementation 'com.contentstack.sdk:android:{version}'
}
```

You can download the latest dependency version [here](https://mvnrepository.com/artifact/com.contentstack.sdk/android)

## Quickstart in 5 mins

### Initializing your SDK

**For setting the Region refer to the code below:**

```
import com.contentstack.sdk.*;
Config config = Config();
config.region = ContentstackRegion.EU;
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment", config);
```

**For setting the Branch refer to the code below:**

```
import com.contentstack.sdk.*;

Config config = Config();
config.setBranch("branch");
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment", config);
```

**Note:** Use the following region codes based on your platform and location:

- **NA** for North America
- **EU** for Europe
- **AU** for Australia
- **AZURE NA** for Azure North America
- **AZURE EU** for Azure Europe
- **GCP NA** for GCP North America
- **GCP EU** for GCP Europe

### Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](https://www.contentstack.com/docs/developers/apis/content-delivery-api/) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

**Get a Single Entry**

To retrieve a single entry from a [content type](https://www.contentstack.com/docs/developers/create-content-types/about-content-types/), use the code snippet given below:

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
ContentType contentType = stack.contentType("contentTypeUid");
Entry entry = contentType.entry("entryUid");
entry.fetch(new EntryResultCallBack(){	
@Override public void onCompletion(ResponseType responseType, Error error) {
   if (error == null) {
    System.out.println("response: "+entry.title);
 }}
});
```

**Get Multiple Entries**

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
Query query = stack.contentType("contentTypeUid").query();
query.find(new QueryResultsCallBack(){
@Override public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error){       
  if(error == null) { 
     System.out.println("response: "+entry.title);
  }
}
});
```

Note:

- Currently, the Android SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer to the [Queries](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#queries) section of our Content Delivery API documentation
- By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Pagination

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/java/get-started-with-java-delivery-sdk/#get-multiple-entries) query will retrieve only the first 100 items** **of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
import com.contentstack.sdk.*;
 
Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment"); 
Query query = stack.contentType("contentTypeUid").query();  
query.skip(20).limit(20).find(new QueryResultsCallBack(){  
  @Override  public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error){ 
   if(error == null){
     System.out.println("response: "+queryResult);
   }}  
});
```
