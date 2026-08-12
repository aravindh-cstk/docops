---
title: "Get Started with Java Management SDK"
description: "This guide will help you get started with Contentstack Java Management SDK to build apps. Get clear steps on SDK installation & setup, initialization, and basic queries."
url: /developers/sdks/content-management-sdk/java/get-started-with-java-management-sdk
---

# Get Started with Java Management SDK

## Get Started with Java Management SDK

This guide will help you get started with Contentstack [Java Management SDK](/docs/developers/sdks/content-management-sdk/java/about-java-management-sdk) (that uses Content Management APIs) to manage Java apps powered by Contentstack.

## Prerequisite

-   **Java version 8** or later.

## SDK Installation and Setup

To install, you can use either Maven or Gradle.

**Maven:**  
Add the given code to your pom.xml file.

```
<project>
  <dependencies>
   <dependency>
     <groupId>com.contentstack.sdk</groupId>
     <artifactId>cms</artifactId>
     <version>{version}</version>
   </dependency>
  </dependencies>
 </project>
```

**Gradle:**  
Add the given code to your build.gradle file.

```
repositories {
      mavenCentral()
  }
  dependencies {
      compile 'com.contentstack.sdk:cms:{version}'
  }
```

To import the SDK, use the following command:

```
import com.contentstack.cms.Contentstack;
Contentstack client = new Contentstack.Builder().build();
```

## Authentication

To use this SDK, you need to authenticate users. You can do this by using an authtoken, credentials, or a management token (stack-level token). Let's discuss each of them in detail.

### Authtoken

An [authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-authtokens-) is a read-write token used to make authorized CMA requests, and it is a user-specific token.

```
Contentstack client = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
```

### Login

To log in to Contentstack, provide your credentials as follows:

```
Contentstack client = new Contentstack.Builder().build();
client.login("EMAIL", "PASSWORD");
```

### Management Token

[Management tokens](/docs/headless-cms/about-management-tokens) are stack-level tokens with no users attached to them.

```
<p>Contentstack client = new Contentstack.Builder().build();
client.login("EMAIL", "PASSWORD");
stack = contentstack.stack("APIKey", "managementToken").execute();</p>
```

## Initialize your SDK

To use the Java Management SDK, you need to first initialize it.

```
package com.contentstack.cms.stack;
Contentstack client = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
```

### For Setting the branch:

If you want to initialize the SDK in a particular branch, use the following code:

```
Contentstack client = new Contentstack.Builder().build();
client.login("EMAIL", "PASSWORD");
stack = contentstack.stack("APIKey", "managementToken", "branch").execute();
```

### Proxy Configuration

Contentstack allows you to define HTTP proxy for your requests with the Java Management SDK. A proxied request allows you to anonymously access public URLs even from within a corporate firewall through a proxy server.

Here is the basic syntax of the proxy settings that you can pass within fetchOptions of the Java Management SDK:

```
Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("hostname", 433));
Contentstack client = new Contentstack.Builder().setProxy(proxy).setAuthtoken("authtoken").build();
```

## Fetch Stack Details

To fetch your stack details through the SDK, use the following code:

```
Stack stack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build().stack(headers);
Response<ResponseBody> response = stack.fetch().execute();
```

## Create an Entry

You can use the following code to create an entry in a specific content type of a stack through the SDK:

```
Stack stack = new Contentstack.Builder().setAuthtoken("authtoken").build().stack(headers);
Entry entry = stack.entry("contentTypeUid");
JSONObject requestBody = ...
Response<ResponseBody> response = entry.create(requestBody).execute();
if (response.isSuccessful()){
   System.out.println(response.body());
}
```

## Upload Assets

Use the following code snippet to upload assets to your stack through the SDK:

```
Stack stack = new Contentstack.Builder().setAuthtoken("authtoken").build().stack(headers);
Asset asset = stack.asset();
Response<ResponseBody> response = asset.uploadAsset("filePath", "description").execute();
if (response.isSuccessful()){
   System.out.println(response.body());
}
```
