---
title: "Get Started with Dart SDK and Live Preview"
description: "Get Started with Dart SDK and Live Preview"
url: /developers/sdks/content-delivery-sdk/dart/get-started-with-dart-sdk-and-live-preview
uid: blta10e3ba513bc1974
---

# Get Started with Dart SDK and Live Preview

## Get Started with Dart SDK and Live Preview

This guide will help you get started with [Contentstack Dart SDK](/docs/developers/sdks/content-delivery-sdk/dart/about-dart-sdk/) to build apps powered by Contentstack.

## Prerequisites

-   [Contentstack account](https://app.contentstack.com/#!/login)
-   [Dart](https://dart.dev/get-dart)

## SDK Installation and Setup

To use the Contentstack Dart SDK with your existing project, perform the following steps:

### Create a New Flutter Project in VS Code

1.  Open VS Code and select **Extensions** from the left navigation panel. 
2.  Then, in the **Search Extensions in Marketplace** search box, type **Flutter**. From the quick results, click on **Flutter**.
3.  From the **Flutter** details page, click on **Install**.
4.  Press Ctrl + Shift + P on Windows and Cmd + Shift + P on macOS.
5.  Type **flutter** and select **Flutter: New Project**.
6.  If the Flutter SDK is not installed on your machine, it will ask you to **Download SDK**. Click on it and from the pop-up that opens, click **Open**.
7.  It will take you to the **Flutter install** page. Select the Flutter version as per your OS and the download will begin.
8.  Once it is installed, follow **steps 4** and **5** and create a new Flutter project.

### Create a New Project in Android Studio

1.  Open Android Studio and click on **Configure**. 
2.  Then, select **Plugins**. From the resulting screen, click on **Flutter** and click on **Install**.
3.  Click on **Accept** and then **Yes** to install the Dart plugin.
4.  Click on **Restart** when prompted.
5.  In the Android Studio IDE, click on **Start a new Flutter Project** from the **Welcome** screen.
6.  Then, select **Flutter Application** in the menu, and click on **Next**.
7.  On the next screen, give your project a name, provide the Flutter SDK path (where you installed the Flutter SDK), and your project location.
8.  If you prefer publishing the app, set the company domain and click on **Finish**.

### Add Dart Dependencies to Your Project

To use Contentstack's Dart SDK in your existing project, you need to add the following code within your pubspec.yaml file:

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

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
final stack = Contentstack.stack(api_key, delivery_token, environment, live_preview: live_preview = {
    managementToken: management_token, 
    enable: true, 
    host: 'api.contentstack.io'
});
```

**Note:** By default, the host parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the host parameter.

## Create an Interceptor

Use the following code to create an interceptor:

```
class LoggingInterceptor implements InterceptorContract {
  @override
  Future<RequestData> interceptRequest({RequestData data}) async {
   print(data.toString());
  stack.livePreviewQuery(data.toString())
   return data;
  }

  @override
  Future<ResponseData> interceptResponse({ResponseData data}) async {
      print(data.toString());
      return data;
  }

}
```

## For Server-side Rendered Websites

To install and initialize the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk), you can refer to our [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website#server-side-rendering-ssr-) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
final entry = stack.contentType('contentTypeUid').entry(entryUid: 'entryUid');
    await entry.fetch().then((response) {
        print(response.toString());
    }).catchError((error) {
        print(error.message.toString());
});
```

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [API Reference](/docs/developers/sdks/content-delivery-sdk/dart/reference/)
-   [Dart SDK Changelog](/docs/changelog?filter=sdks)
-   [View and Download Dart SDK repository on GitHub](https://github.com/contentstack/contentstack-dart)
