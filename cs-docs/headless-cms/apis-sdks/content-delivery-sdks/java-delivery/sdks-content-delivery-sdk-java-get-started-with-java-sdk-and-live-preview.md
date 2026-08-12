---
title: "Get Started with Java Delivery SDK and Live Preview"
description: "Get started with Contentstack’s Java Delivery SDK for browsers and Live Preview to enable real-time content updates easily."
url: /developers/sdks/content-delivery-sdk/java/get-started-with-java-sdk-and-live-preview
---

# Get Started with Java Delivery SDK and Live Preview

## Get Started with Java Delivery SDK and Live Preview

This guide will help you get started with Contentstack [Java SDK](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk) to build apps powered by Contentstack.

## Prerequisites

To get started with the Java SDK, you will need the following:

-   An IDE. You can use an IDE of your choice, but make sure it supports Java.
-   Java SDK version 1.8 or later.

## SDK Installation and Setup

To install the Java SDK, choose either of the following methods (Maven or Gradle).

Add the following dependency code snippets into your project:

-   **Maven**
    
    ```
    <dependency>
        <groupid>com.contentstack.sdk</groupid>
        <artifactid>java</artifactid>
        <version>{latest}</version>
    </dependency>
    ```
    
    Maven users need to add the above code in your pom.xml file under the <dependencies> section.
    
-   **Gradle**
    
    ```
    compile 'com.contentstack.sdk:java:{latest}'
    ```
    
    Gradle users need to add the above dependency code into your build.gradle file.
    

You can download the latest dependency version [here](https://search.maven.org/artifact/com.contentstack.sdk/java).

## Set the Configurations

To initialize the [Live Preview](/docs/headless-cms/about-live-preview) feature, you need to configure certain settings:

```
Config livePreviewConfig = new Config()
                 .enableLivePreview(true)
                 .setLivePreviewHost("rest-preview.contentstack.com")
                 .setPreviewToken("preview_token");
```

**Note:** By default, the setLivePreviewHost() method points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against this method.

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.  

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

To install and initialize the Live Preview Utils SDK, you can refer to our [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website#server-side-rendering-ssr-) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
Entry entry = stack.contentType("contentType").entry();
entry.fetch(new EntryResultCallBack() {
});
```

## Timeline Preview

The Timeline Preview feature in the Java Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.

For more information, refer to our [Timeline Preview](/docs/headless-cms/set-up-timeline-for-your-website) documentation

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [Java Sample App](/docs/developers/sdks/content-delivery-sdk/java/java-sample-app)
-   [Java SDK API Reference](/docs/developers/sdks/content-delivery-sdk/java/reference/)
-   [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)
