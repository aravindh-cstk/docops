---
title: "Contentstack - Dart Delivery SDK"
description: "Contentstack - Dart Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blta909a8112006b5f9"
---

# Contentstack - Dart Delivery SDK

## Overview

The Dart Content Delivery SDK (`contentstack` package on pub.dev) is planned for deprecation. We recommend using the [Content Delivery API](/docs/developers/apis/content-delivery-api) for new integrations.

## Dart Delivery SDK for Contentstack

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application front end, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/docs/developers/java/).

Contentstack provides Dart Delivery SDK to build applications on top of Dart. Given below is the detailed guide and helpful resources to get started with our Dart Delivery SDK.

## Prerequisite

This guide will help you get started with Contentstack Dart SDK to build Flutter apps powered by Contentstack.

- [Contentstack account](https://app.contentstack.com/#!/login)
- [Dart](https://dart.dev/get-dart)

## SDK Installation and Setup

To use the Contentstack Dart SDK with your existing project, perform the following steps:

**Create a New Flutter Project in VS Code**

****

1. Open VS Code and select **Extensions** from the left navigation panel.
2. Then, in the **Search Extensions in Marketplace** search box, type **Flutter**. From the quick results, click on **Flutter**.
3. From the **Flutter** details page, click on **Install**.
4. Press Ctrl + Shift + P on Windows and Cmd + Shift + P on macOS.
5. Type **flutter** and select **Flutter: New Project**.
6. If the Flutter SDK is not installed on your machine, it will ask you to **Download SDK**. Click on it and from the pop-up that opens, click on **Open**.
7. It will take you the **Flutter install** page. Select as per your OS and the download will begin.
8. Once it is installed, follow steps 4 and 5 and create a new Flutter project.

****

**Create a New Project in Android Studio**

1. Open Android Studio and click on **Configure**.
2. Then, select **Plugins**. From the resulting screen, click on **Flutter** and click on **Install**.
3. Click on **Accept** and then **Yes** to install the Dart plugin.
4. Click on **Restart** when prompted.
5. In the Android Studio IDE, click on **Start a new Flutter project** from the **Welcome** screen.
6. Then, select **Flutter Application** in the menu, and click on **Next**.
7. On the next screen, give your project a name, provide the Flutter SDK path (where you installed the Flutter SDK), and your project location.
8. If you prefer publishing the app, set the company domain and click on **Finish**.

****

**Add Dart Dependencies to Your Project**

To use Contentstack's Dart SDK in your existing project, you need to add the following code within your **pubspec.yaml** file:

```
dependencies:
  contentstack: any
```

You can download the latest dependency version [here](https://pub.dev/packages/contentstack).

## Quickstart in 5 mins

### Initializing your SDK

Contentstack offers six [regions](/docs/developers/contentstack-regions/about-regions) North America (NA), Europe (EU), Azure North America (AZURE_NA), Azure Europe (AZURE_EU), GCP North America (GCP_NA), and GCP Europe (GCP_EU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, Azure EU region, GCP NA, or GCP EU you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

Add this to your package's **pubspec.yaml** file:

```
dependencies:
   contentstack: ^any
```

To initialize the SDK, enter the stack’s API key, delivery token, and environment name where you will publish the content, as shown in the snippet below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment, region: contentstack.Region.<add_your_region>);
```

****

**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

**Refer the below code if you want to use the Europe, Azure North America, Azure Europe, GCP North America region, or GCP Europe.**

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment, region: contentstack.Region.<add_your_region>);
```

Once you have initialized the SDK, you can query entries to fetch the required content.

For Setting the branch for Europe, Azure North America, Azure Europe, GCP North America, or GCP Europe refer the code below:

**For Setting Branch**

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack('apiKey', 'deliveryToken', 'environment', branch: 'branch');
```

### Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](https://www.contentstack.com/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

**Get a Single Entry**

To retrieve a single [entry](https://www.contentstack.com/docs/content-managers/author-content/about-entries) from a [content type](https://www.contentstack.com/docs/developers/create-content-types/about-content-types), use the code snippet given below:

```
import contentstack

stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
contentType = stack.content_type("content_type_uid")
entry = content_type.entry("entry_uid")
response = entry.fetch()
```

**Get Multiple Entries**

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import contentstack

stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
query = stack.content_type("content_type_uid").query()
response = query.find()
```

### Pagination

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dart/get-started-with-dart-sdk/#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
final stack = contentstack.Stack( "apiKey", "deliveryToken", "environment"); 
final query = stack.contentType("contentTypeUid").entry().query().skip(20).limit(20);
await query.find().then((response){
   print(response);
}).catchError((onError){
   print(onError.message);
});
```
