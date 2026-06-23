---
title: "[Java Marketplace] Get Started with Java Marketplace SDK"
description: Step-by-step guide to install, initialize, and run basic queries using the Java Marketplace SDK.
url: https://www.contentstack.com/docs/developers/sdks/marketplace-sdk/java/get-started-with-java-marketplace-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java-developers
version: v1
last_updated: 2026-03-26
---

# [Java Marketplace] Get Started with Java Marketplace SDK

This page explains how to install and set up the Java Marketplace SDK, initialize it with optional configuration (host and region), and run basic queries. It is intended for developers building apps powered by Contentstack who need to integrate with the Marketplace SDK in Java.

## Get Started with Java Marketplace SDK

This step-by-step guide will help you get started with the [Java Marketplace SDK](/docs/developers/sdks/marketplace-sdk/java/about-java-marketplace-sdk) and build apps powered by Contentstack.

## Prerequisites
- [Java version 8](https://www.java.com/download/ie_manual.jsp)or later.
- [Contentstack Account](https://www.contentstack.com/login/)
- Basic understanding of Java programming language.
- Familiarity with your chosen Integrated Development Environment (IDE), such as Eclipse or IntelliJ IDEA.

## Installation and Setup
To install the Java Marketplace SDK in your system, follow the steps below:

**Step 1:** Create a New Project
- Open your preferred IDE.
- Create a new Java project. The process may vary depending on your IDE, but generally, you'll find an option like "New Project" or "Create New Project."

**Step 2: **Add the Library Dependency
- Search Java SDK to [Maven Central Repository](https://mvnrepository.com/) that is a vast collection of Java libraries
- Open your project's build configuration file. In most cases, this is a build.gradle(for Gradle) or pom.xml(for maven) file.
- Add the dependency information to the configuration file by executing the below code:

**For Gradle build system:**

```
dependencies {
     implementation com.contentstack.sdk:marketplace:{version}'
 }
```

**For Maven build system:**

```

    	com.contentstack.sdk
    	marketplace
    	{version}

</dependencies
```

**Step 3: **Save the `pom.xml` file.

## Initialize the SDK
To initialize the SDK in your system, execute the following command:

```
import com.contentstack.sdk.marketplace;

Marketplace marketplace = new Marketplace.Builder("organisationId").build();
```

## Custom Configuration
Custom Configurations offer developers the flexibility to customize and adapt the SDK's behavior to suit their specific needs.

Here's an overview of the common customizable configurations within the Java Marketplace SDK.

### Host
Contentstack offers custom host configuration while initializing the Marketplace Java SDK.

A custom host refers to any host that differs from the default Contentstack endpoint, `cdn.contentstack.io`. Users can define their own host and use it instead of the default one.

Execute the below code for custom host configuration:

```
import com.contentstack.sdk.marketplace
Marketplace marketplace = new Marketplace.Builder("organisationId").host("api.contentstack.io").build();
```

### Regions
Contentstack offers four [regions](/docs/developers/contentstack-regions/about-regions), North America (NA), Europe (EU), Azure North America (Azure NA), and Azure Europe (Azure EU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions on how to use Contentstack SDKs.

**Note:** Users using the NA region do not need to make any configuration changes as the SDK considers this region by default. This means, you need not pass the region parameter in the following code.

To utilize the SDKs in the Europe, Azure NA, or Azure EU regions, modify the SDK configuration as specified below, while keeping the rest of the instructions unchanged.

```
Marketplace marketplace = new
Marketplace.Builder("organisationId").host("api.contentstack.io").region(Region.EU).build();
```

## Basic Queries
Contentstack SDKs are designed exclusively for read-only purposes and utilize our robust and efficient CDN, to fetch and deliver content from the nearest server.

This section focuses explicitly on the Java Marketplace SDK and provides an overview of basic queries. You will learn how to retrieve a class using the SDK and learn the techniques for efficient content retrieval.

### Initialize Marketplace class
To initialize the marketplace class within your organization, execute the below command:

```
// Replace 'YOUR_ORG_ID' with your Contentstack organization UID
String organizationUid = "YOUR_ORG_ID";
Marketplace marketplace = new Marketplace(organizationUid);
```

### Retrieve an instance of the App class
To retrieve an instance of the App class, execute the following command:

```
// Get an instance of the App class
App app = marketplace.app();

// Alternatively, you can pass the app UID to retrieve a specific app
String appUid = "APP_UID";
App specificApp = marketplace.app(appUid);
```

### Retrieve an instance of the Auth class
To retrieve an instance of the Auth class, execute the following command:

```
// Get an instance of the Auth class
Auth auth = marketplace.authorizations();
```

### Retrieve an instance of the Installation class
To retrieve an instance of the Installation class, execute the following command:

```
// Get an instance of the Installation class
Installation installation = marketplace.installation();

// Alternatively, you can pass the installation ID to retrieve a specific installation
String installationId = "INSTALLATION_ID";
Installation specificInstallation = marketplace.installation(installationId);
```

### Create an instance of the AppRequest class:
To retrieve an instance of the AppRequest class, execute the following command:

```
// Get an instance of the AppRequest class
AppRequest appRequest = marketplace.request();
```

## More Resources
[Java Marketplace Github Repository](https://github.com/contentstack/contentstack-marketplace-java)

## Next Steps
[Java Marketplace SDK API Reference](/docs/developers/sdks/marketplace-sdk/java/reference/)

## Common questions

### Which Java version is required?
- [Java version 8](https://www.java.com/download/ie_manual.jsp)or later.

### Do I need to configure a region for North America (NA)?
**Note:** Users using the NA region do not need to make any configuration changes as the SDK considers this region by default.

### Where can I find the Java Marketplace SDK source repository?
[Java Marketplace Github Repository](https://github.com/contentstack/contentstack-marketplace-java)

### Where is the API reference for the Java Marketplace SDK?
[Java Marketplace SDK API Reference](/docs/developers/sdks/marketplace-sdk/java/reference/)