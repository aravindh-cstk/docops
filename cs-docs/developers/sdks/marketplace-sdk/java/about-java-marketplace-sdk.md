---
title: "[Java Marketplace] About Java Marketplace SDK"
description: About Java Marketplace SDK
url: https://www.contentstack.com/docs/developers/sdks/marketplace-sdk/java/about-java-marketplace-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Java Marketplace] About Java Marketplace SDK

This page explains what the Contentstack Java Marketplace SDK is, what it can do, and provides a quickstart example for initializing and using it. It is intended for developers integrating Java applications with Contentstack Marketplace capabilities and should be used when you need to manage Marketplace apps, requests, authorization, or installations via Java.

## About Java Marketplace SDK

Contentstack provides a Java Marketplace SDK (that uses Content Marketplace APIs) that developers can use to manage the content of your [Contentstack account](https://www.contentstack.com/login/).

It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level.

## Key Features
- **Operation on Apps: **Using the Java Marketplace SDK, you have the capability to execute various operations on Marketplace apps, including Installation, Authorization, Configuration, and more.
- **Operation App Request:** A user who does not have access to install apps from the Marketplace can request the stack or organization admin to get the app installed. Only organization admins can accept or reject the request raised by the user.
- **Operation on authorization:** When authorizing a Contentstack app, the app requests access to perform specific operations on behalf of the user. After the user authenticates and grants access, the app receives an access token. This token is then used as a credential when making calls to the Contentstack APIs.
- **Operation on installation: **Starter Apps can be installed via the Marketplace. Additionally you can [Install Starter via Stack Creation Experience](../../../marketplace-platform-guides/installing-a-starter.md#install-starter-via-stack-creation-experience) as well.

To integrate your Java app with Contentstack Java Management SDK, follow the steps mentioned in the [Get Started with Java Marketplace SDK](./get-started-with-java-marketplace-sdk.md) document

## Quickstart with Java Marketplace SDK
Here is an example of how you can start working with the Java Marketplace SDK

### Initializing the SDK
To initialize the SDK and import its library in your system, execute the following command:

```
import com.contentstack.sdk.marketplace;
Marketplace mk = Contentstack.Marketplace("Organization_Uid");
```

### Initialize the Marketplace class
Next, you need to initialize the marketplace class within your organization. For this, you need to pass your organization UID as parameter in the below command:

```
// Replace 'YOUR_ORG_ID' with your Contentstack organization UID
String organizationUid = "YOUR_ORG_ID";
Marketplace marketplace = new Marketplace(organizationUid);
```

### Execute the Query
Once you have initialized the marketplace class within your organization, you can execute any query.

For example, to retrieve an instance of the App class, execute the following command:

```
// Get an instance of the App class
App app = marketplace.app();

// Alternatively, you can pass the app UID to retrieve a specific app
String appUid = "APP_UID";
App specificApp = marketplace.app(appUid);

```

### More Resources
[Java Marketplace SDK GitHub Repository](https://github.com/contentstack/contentstack-marketplace-java)

## Common questions

### What do I need to initialize the Marketplace class?
You need to pass your organization UID as parameter in the below command.

### Can I retrieve a specific app instance?
Yes, you can pass the app UID to retrieve a specific app.

### Where can I find the Java Marketplace SDK source code?
[Java Marketplace SDK GitHub Repository](https://github.com/contentstack/contentstack-marketplace-java)

### Where do I go next after this page?
Follow the steps mentioned in the [Get Started with Java Marketplace SDK](./get-started-with-java-marketplace-sdk.md) document.