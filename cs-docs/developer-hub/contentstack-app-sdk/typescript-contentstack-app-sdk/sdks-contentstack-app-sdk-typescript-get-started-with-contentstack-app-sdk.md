---
title: "Get Started with Contentstack App SDK"
description: "Install and initialize the TypeScript-based Contentstack App SDK to access Custom Field context, entry data, and UI location APIs for type-safe in-app extensions."
url: /developers/sdks/contentstack-app-sdk/typescript/get-started-with-contentstack-app-sdk
uid: bltfb049e330527db59
---

# Get Started with Contentstack App SDK

## Get Started with Contentstack App SDK

This guide explains how to install the Contentstack App SDK, initialize it, and access the **Custom Field** context to work with entry and field data.

## Prerequisites

To get started with the TypeScript Delivery SDK, you will need the following:

-   [Contentstack account](https://www.contentstack.com/login/) with access to [Marketplace apps](/marketplace)
-   [Node.js](https://nodejs.org/en) version 22 or later
-   Basic knowledge of TypeScript

## What You Will Learn

-   How to install the Contentstack App SDK.

-   How to initialize the SDK.

-   How to access the Custom Field context to work with entry and field data.


## Installation

Install the Contentstack App SDK in your project using npm. The SDK provides initialization methods and context objects for your app to communicate with Contentstack.

```
npm install @contentstack/app-sdk
```

## Initialization

After installing the SDK, initialize it to to access the **Custom Field** context, which provides access to the current entry and field values.

```
import { ContentstackAppSDK } from '@contentstack/app-sdk';

const sdk = await ContentstackAppSDK.init();
const customField = sdk.location.CustomField;

if (customField) {
  const field = customField.field;
  const entry = customField.entry;
}
```

After initializing the SDK, you can use the available UI location APIs to build custom behavior for your app. Refer to the [Overview of UI Locations](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#overview-of-ui-locations) section to explore supported locations and their capabilities.
