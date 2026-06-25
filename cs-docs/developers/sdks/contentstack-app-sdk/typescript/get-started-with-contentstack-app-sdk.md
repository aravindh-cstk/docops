---
title: "[TypeScript Contentstack App SDK] - Get Started with Contentstack App SDK"
description: Get Started with Contentstack App SDK
url: https://www.contentstack.com/docs/developers/sdks/contentstack-app-sdk/typescript/get-started-with-contentstack-app-sdk
product: Contentstack
doc_type: getting-started
audience:
  - developers
version: typescript
last_updated: 2026-03-25
---

# [TypeScript Contentstack App SDK] - Get Started with Contentstack App SDK

This page explains how to install and initialize the Contentstack App SDK in a TypeScript project and how to access the Custom Field context for working with entry and field data when building Contentstack Marketplace apps.

## Get Started with Contentstack App SDK

This guide explains how to install the Contentstack App SDK, initialize it, and access the **Custom Field** context to work with entry and field data.

## Prerequisites
To get started with the TypeScript Delivery SDK, you will need the following:
- [Contentstack account](https://www.contentstack.com/login/) with access to [Marketplace apps](../../../marketplace-apps.md)
- [Node.js](https://nodejs.org/) version 22 or later
- Basic knowledge of TypeScript

## Installation
Install the Contentstack App SDK in your project using `npm`. The SDK provides initialization methods and context objects for your app to communicate with Contentstack.

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
After initializing the SDK, you can use the available UI location APIs to build custom behavior for your app. Refer to the [Overview of UI Locations](../../../create-content-types/reference.md#overview-of-ui-locations) section to explore supported locations and their capabilities.

## Common questions

### What is the Contentstack App SDK used for?
It provides initialization methods and context objects for your app to communicate with Contentstack.

### What do I need before installing the SDK?
A Contentstack account with access to Marketplace apps, Node.js version 22 or later, and basic knowledge of TypeScript.

### How do I access the Custom Field context after initialization?
Initialize the SDK and use `sdk.location.CustomField` to access the current entry and field values.

### Where can I learn about other supported UI locations?
Refer to the [Overview of UI Locations](../../../create-content-types/reference.md#overview-of-ui-locations) section.