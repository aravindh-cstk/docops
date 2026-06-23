---
title: "[Dart] - Get Started with Dart SDK and Live Preview"
description: Get started guide for using Contentstack Dart SDK with Live Preview.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dart/get-started-with-dart-sdk-and-live-preview
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - mobile-developers
  - flutter-developers
version: unknown
last_updated: 2026-03-26
---

# [Dart] - Get Started with Dart SDK and Live Preview

This page explains how to set up the Contentstack Dart SDK in a Dart/Flutter project and enable Live Preview, including configuration, stack initialization, and a basic query example. It is intended for developers integrating Contentstack content delivery into Flutter apps or Dart projects and who need Live Preview support during development.

## Get Started with Dart SDK and Live Preview

This guide will help you get started with [Contentstack Dart SDK](./about-dart-sdk.md) to build apps powered by Contentstack.

## Prerequisites
- [Contentstack account](https://app.contentstack.com/#!/login)
- [Dart](https://dart.dev/get-dart)

## SDK Installation and Setup
To use the Contentstack Dart SDK with your existing project, perform the following steps:

### Create a New Flutter Project in VS Code
- Open VS Code and select **Extensions** from the left navigation panel.
- Then, in the **Search Extensions in Marketplace** search box, type **Flutter**. From the quick results, click on **Flutter**.
- From the **Flutter** details page, click on **Install**.
- Press Ctrl + Shift + P on Windows and Cmd + Shift + P on macOS.
- Type **flutter** and select **Flutter: New Project**.
- If the Flutter SDK is not installed on your machine, it will ask you to **Download SDK**. Click on it and from the pop-up that opens, click **Open**.
- It will take you to the **Flutter install** page. Select the Flutter version as per your OS and the download will begin.
- Once it is installed, follow **steps 4** and **5** and create a new Flutter project.

### Create a New Project in Android Studio
- Open Android Studio and click on **Configure**.
- Then, select **Plugins**. From the resulting screen, click on **Flutter** and click on **Install**.
- Click on **Accept** and then **Yes** to install the Dart plugin.
- Click on **Restart** when prompted.
- In the Android Studio IDE, click on **Start a new Flutter Project** from the **Welcome** screen.
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

## Set the Configurations
To initialize the Live Preview feature, you need to set certain configurations:

```
live_preview = {
    managementToken: management_token,
    enable: true,
    host: 'api.contentstack.io'
  }
```

## Initializing the Stack with Live Preview
Since the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
final stack = Contentstack.stack(api_key, delivery_token, environment, live_preview: live_preview = {
    managementToken: management_token,
    enable: true,
    host: 'api.contentstack.io'
});
```
**Note**: By default, the `host` parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) endpoint against the `host` parameter.

## Create an Interceptor
Use the following code to create an interceptor:

```
class LoggingInterceptor implements InterceptorContract {
  @override
  Future interceptRequest({RequestData data}) async {
   print(data.toString());
  stack.livePreviewQuery(data.toString())
   return data;
  }

  @override
  Future interceptResponse({ResponseData data}) async {
      print(data.toString());
      return data;
  }

}
```

## For Server-side Rendered Websites
To install and initialize the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md), you can refer to our [SSR Live Preview Setup](../../../set-up-live-preview/set-up-live-preview-for-your-website.md#server-side-rendering-ssr-) documentation.

## Query Request
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) UID and the UID of the entry.

```
final entry = stack.contentType('contentTypeUid').entry(entryUid: 'entryUid');
    await entry.fetch().then((response) {
        print(response.toString());
    }).catchError((error) {
        print(error.message.toString());
});
```

## More Resources
- [JavaScript Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md)
- [E-commerce App using Contentstack's Dart SDK](/docs/developers/sample-apps/build-a-flutter-e-commerce-app-using-contentstack-s-dart-sdk)
- [API Reference](/docs/developers/dart/api-reference/)
- [Dart SDK Changelog](./dart-sdk-changelog.md)
- [View and Download Dart SDK repository on GitHub](https://github.com/contentstack/contentstack-dart)

## Common questions

### What do I need before using the Contentstack Dart SDK?
You need a [Contentstack account](https://app.contentstack.com/#!/login) and [Dart](https://dart.dev/get-dart).

### Where do I add the Contentstack Dart SDK dependency?
Add it to your `pubspec.yaml` file under `dependencies`.

### What does the `host` parameter do in the Live Preview configuration?
By default, the `host` parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) endpoint against the `host` parameter.

### Where can I find guidance for SSR Live Preview setup?
Refer to the [SSR Live Preview Setup](../../../set-up-live-preview/set-up-live-preview-for-your-website.md#server-side-rendering-ssr-) documentation.

Filename: dart-get-started-with-dart-sdk-and-live-preview.md