---
title: "[Dart] - Get Started with Dart SDK"
description: Get started guide for using the Contentstack Dart SDK to build Flutter apps and run basic Content Delivery API queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dart/get-started-with-dart-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - mobile-developers
  - flutter-developers
version: latest
last_updated: 2026-03-25
---

# [Dart] - Get Started with Dart SDK

This page explains how to install, initialize, and use the Contentstack Dart SDK in Flutter projects, including basic querying patterns and known limitations. It is intended for developers setting up Contentstack content delivery in Dart/Flutter apps and should be used when configuring a new project or adding Contentstack to an existing one.

## Get Started with Dart SDK

This guide will help you get started with Contentstack Dart SDK to build Flutter apps powered by Contentstack.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Dart](https://dart.dev/get-dart)

## Installation and Setup
To use the Contentstack Dart SDK with your existing project, perform the following steps:

### Create a New Flutter Project in VS Code
- Open VS Code and select **Extensions** from the left navigation panel.
- Then, in the **Search Extensions in Marketplace** search box, type **Flutter**. From the quick results, click on **Flutter**.
- From the **Flutter** details page, click on **Install**.
- Press Ctrl + Shift + P on Windows and Cmd + Shift + P on macOS.
- Type **flutter** and select **Flutter: New Project**.
- If the Flutter SDK is not installed on your machine, it will ask you to **Download SDK**. Click on it and from the pop-up that opens, click on **Open**.
- It will take you the **Flutter install** page. Select as per your OS and the download will begin.
- Once it is installed, follow steps 4 and 5 and create a new Flutter project.

### Create a New Project in Android Studio
- Open Android Studio and click on **Configure**.
- Then, select **Plugins**. From the resulting screen, click on **Flutter** and click on **Install**.
- Click on **Accept** and then **Yes** to install the Dart plugin.
- Click on **Restart** when prompted.
- In the Android Studio IDE, click on **Start a new Flutter project** from the **Welcome** screen.
- Then, select **Flutter Application** in the menu, and click on **Next**.
- On the next screen, give your project a name, provide the Flutter SDK path (where you installed the Flutter SDK), and your project location.
- If you prefer publishing the app, set the company domain and click on **Finish**.

### Add Dart Dependencies to Your Project
To use Contentstack's Dart SDK in your existing project, you need to add the following code within your `pubspec.yaml` file:

```
dependencies:
  contentstack: any
```

You can download the latest dependency version [here](https://pub.dev/packages/contentstack).

## Initialize SDK
Contentstack offers six regions **AWS North America**,** AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

Add this to your package's pubspec.yaml file:

```
dependencies:
  contentstack: ^any
```

To initialize the SDK, enter the stack’s API key, delivery token, and environment name where you will publish the content, as shown in the snippet below:

```
import 'package:contentstack/contentstack.dart' as contentstack;

final stack = contentstack.Stack(apiKey, deliveryToken, environment);
```

**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe, check the [code of your region](../../../contentstack-regions/selecting-region-in-sdks.md#dart) and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Azure North America, or Azure Europe, check the [code of your region](../../../contentstack-regions/selecting-region-in-sdks.md#dart) and initialize SDK in a particular branch.

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To retrieve a single entry from a content type, use the code snippet given below:

```
import 'package:contentstack/contentstack.dart' as contentstack;
final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final entry = stack.contentType('content_type_uid').entry(entryUid: entryUid);
await entry.fetch().then((response) {
    print(response.toString());
}).catchError((onError) {
    prints(onError.toString());
});
```

### Get Multiple Entries
To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import 'package:contentstack/contentstack.dart' as contentstack;

final stack = contentstack.Stack(apiKey, deliveryToken, environment);
final query = stack.contentType('content_type_uid').entry().query();
await query.find().then((response){
 print(response);
}).catchError((onError){
 print(onError.message);
});
```

These were examples of some of the basic queries of the SDK. For advanced queries, refer to Contentstack [Dart SDK API Reference](/docs/developers/dart/api-reference/) documentation.

**Note:** Currently, the Dart SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](../../../../../api-docs/api-detail/content-delivery-api.md#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](../../../create-content-types/reference.md#query-skip) and [limit](../../../create-content-types/reference.md#query-limit) parameters in subsequent requests.

```
final stack = contentstack.Stack( "apiKey", "deliveryToken", "environment");
final query = stack.contentType("contentTypeUid").entry().query().skip(20).limit(20);
await query.find().then((response){
 print(response);
}).catchError((onError){
 print(onError.message);
});
```

## Limitations
- We have a URL size limitation of **8KB** on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The Dart SDK does not support multiple content types referencing in a single query.
- Currently, the Dart SDK does not yet support querying Global Field schemas ([All Global Fields](../../../../../api-docs/api-detail/content-delivery-api.md#all-global-fields) and [Single Global Field](../../../../../api-docs/api-detail/content-delivery-api.md#single-global-field)). You can include these details when querying content type details ([All Content Types](../../../../../api-docs/api-detail/content-delivery-api.md#all-content-types) and [Single Content Type](../../../../../api-docs/api-detail/content-delivery-api.md#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [E-commerce App using Contentstack's Dart SDK](/docs/developers/sample-apps/build-a-flutter-e-commerce-app-using-contentstack-s-dart-sdk)
- [API Reference](../../../create-content-types/reference.md)
- [View and Download Dart SDK repository on GitHub](https://github.com/contentstack/contentstack-dart)

## Common questions

### Which regions does the SDK support by default?
**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

### How do I configure the SDK for Europe, Azure North America, or Azure Europe?
For Europe, Azure North America, or Azure Europe, check the [code of your region](../../../contentstack-regions/selecting-region-in-sdks.md#dart) and configure your SDK.

### How many items does “Get Multiple Entries” return in one request?
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type.

### Where can I find advanced query documentation?
For advanced queries, refer to Contentstack [Dart SDK API Reference](/docs/developers/dart/api-reference/) documentation.

Filename: dart-get-started-with-dart-sdk.md