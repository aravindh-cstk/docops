---
title: "[TypeScript] - About TypeScript Delivery SDK"
description: Overview of Contentstack's TypeScript Delivery SDK, including key features and a quickstart example.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/typescript/about-typescript-delivery-sdk
product: Contentstack
doc_type: overview
audience:
  - developers
  - TypeScript developers
version: latest
last_updated: 2026-03-25
---

# [TypeScript] - About TypeScript Delivery SDK

This page introduces Contentstack’s TypeScript Delivery SDK, highlights its key features, and provides a quickstart example for initializing the SDK, creating a stack instance, and executing queries in TypeScript-based applications.

## About TypeScript Delivery SDK

Contentstack's TypeScript Delivery SDK lets you harness the power of Contentstack by utilizing the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) to efficiently fetch and deliver content to your TypeScript-based applications. In our comprehensive tutorials and guides, you will find valuable information on the various tools and integrations supported by Contentstack, along with TypeScript SDK example apps, empowering you to kickstart your project with ease.

**Note:** The Contentstack TypeScript SDK supports [Node.js](https://nodejs.org/) 22 or later.

To integrate your TypeScript application with Contentstack’s TypeScript Delivery SDK, follow the steps mentioned in the [Get Started with Typescript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk/) documentation.

## Key Features

Here are some of the key features of the TypeScript SDK:
- **Content retrieval through Content Delivery API: **Simplifies interaction with Contentstack's Content Delivery APIs, enabling developers to efficiently retrieve the required data.
- **Synchronization:** Keeps your application up-to-date by syncing Contentstack data using delta updates, fetching only modified or new data instead of the entire dataset.
- **Image Transformation: **The SDK offers support for the Image Delivery API, empowering developers to include various parameters in the URL. These parameters allow for retrieving, manipulating, or converting image files, enabling seamless display on web and mobile applications.
- **Live Preview Support:** The Live Preview Utils SDK package is compatible with any application project that utilizes the TypeScript Delivery SDK. It can be loaded and integrated seamlessly to enhance image preview functionalities.
- **RTE support:** The Typescript Delivery SDK allows you to retrieve embedded entries and assets that are stored in the Rich Text Editor (RTE) field.

## Quickstart With TypeScript Delivery SDK

Here is an example of how you can start using the TypeScript Delivery SDK.

### Initializing the SDK

To initialize the SDK and import its library into your system, execute the following command:

```
import contentstack from '@contentstack/delivery-sdk'
```

### Create a Stack Instance

Next, you need to create a stack instance that is a repository that holds all your content and where you want to perform all your operations.

To do so, execute the following command:

```
const stack = contentstack.stack({ apiKey: "apiKey", deliveryToken: "deliveryToken", environment: "environment" });
```

### Execute Queries

Once you have access to the stack instance, you can execute any query.

For example, to retrieve details for a particular asset, execute the following command and enter the UID of the asset..

```
const result = stack.asset('asset_uid').includeDimension().fetch();
```

## More Resources

[Typescript GitHub Repository](https://github.com/contentstack/contentstack-typescript)

## Common questions

### What APIs does the TypeScript Delivery SDK use?
It utilizes the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) to fetch and deliver content to TypeScript-based applications.

### What Node.js version is required?
**Note:** The Contentstack TypeScript SDK supports [Node.js](https://nodejs.org/) 22 or later.

### Where do I start to integrate the SDK?
Follow the steps mentioned in the [Get Started with Typescript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk/) documentation.

### Where can I find the SDK source code?
[Typescript GitHub Repository](https://github.com/contentstack/contentstack-typescript)