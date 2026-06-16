---
title: "[Java] - Get Started with Java Delivery SDK and Live Preview"
description: Get Started with Java Delivery SDK and Live Preview
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/get-started-with-java-sdk-and-live-preview
product: Contentstack
doc_type: getting-started
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Java] - Get Started with Java Delivery SDK and Live Preview

This page explains how to install and set up the Contentstack Java Delivery SDK with Live Preview, including configuration, stack initialization, and example usage. It is intended for developers integrating Contentstack content delivery and preview capabilities into Java applications, especially when enabling Live Preview and Timeline Preview during development.

## Get Started with Java Delivery SDK and Live Preview

This guide will help you get started with Contentstack [Java SDK](/docs/developers/java/about-java-sdk) to build apps powered by Contentstack.

## Prerequisites

To get started with the Java SDK, you will need the following:
- An IDE. You can use an IDE of your choice, but make sure it supports Java.
- Java SDK version 1.8 or later.

## SDK Installation and Setup

To install the Java SDK, choose either of the following methods (Maven or Gradle).

Add the following dependency code snippets into your project:
- **Maven**

```

    com.contentstack.sdk
    java
    {latest}

```

    Maven users need to add the above code in your `pom.xml` file under the `<dependencies>` section.
- **Gradle**

```
compile 'com.contentstack.sdk:java:{latest}'
```

    Gradle users need to add the above dependency code into your `build.gradle` file.

You can download the latest dependency version [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

## Set the Configurations

To initialize the [Live Preview](/docs/content-managers/live-preview/about-live-preview) feature, you need to configure certain settings:

```
Config livePreviewConfig = new Config()
                 .enableLivePreview(true)
                 .setLivePreviewHost("rest-preview.contentstack.com")
                 .setPreviewToken("preview_token");

```

**Note**: By default, the setLivePreviewHost() method points to the North America endpoint. If your website is hosted on the [European](/docs/developers/contentstack-regions/europe-region-what-it-is-and-what-it-isnt) data center, then pass the European endpoint against this method.

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/javascript-browser/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
Stack stack = Contentstack.stack("APIKey", "deliveryToken", "environment", config);
```

## Create an Interceptor

Use the following code to create an interceptor:

```
@Component
public class ServiceInterceptor implements HandlerInterceptor {
   @Override
   public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
       System.out.println("Pre Handle getQueryString: " + request.getQueryString());
       stack.livePreviewQuery(request.getQueryString())
       return true;
   }
}
```

## For Server-side Rendered Websites

To install and initialize the Live Preview Utils SDK, you can refer to our [SSR Live Preview Setup](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website#server-side-rendering-ssr-) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/content-managers/working-with-entries/about-entries), you need to specify the [content type](/docs/developers/create-content-types/about-content-types) UID and the UID of the entry.

```
Entry entry = stack.contentType("contentType").entry();
entry.fetch(new EntryResultCallBack() {
});
```

## Timeline Preview

The Timeline Preview feature in the Java Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.

For more information, refer to our [Timeline Preview](/docs/developers/set-up-timeline) documentation

## More Resources
- [JavaScript Live Preview Utils SDK](/docs/developers/javascript-browser/about-javascript-live-preview-utils-sdk)
- [Java Sample App](/docs/developers/java/java-sample-app)
- [Java SDK API Reference](/docs/developers/sdks/content-delivery-sdk/java/reference/)
- [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

## Common questions

### How do I choose the correct Live Preview host?
By default, the setLivePreviewHost() method points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against this method.

### Where do I add the Maven or Gradle dependency?
Maven users need to add the above code in your `pom.xml` file under the `<dependencies>` section. Gradle users need to add the above dependency code into your `build.gradle` file.

### What do I need to fetch an entry?
You need to specify the content type UID and the UID of the entry.

### Where can I find more information about Timeline Preview?
For more information, refer to our [Timeline Preview](/docs/developers/set-up-timeline) documentation