---
title: "Get Started with TypeScript Delivery SDK and Live Preview"
description: "Implement TypeScript Delivery SDK with Live Preview, handle SSR/CSR correctly, and create per-request SDK instances to prevent config leakage."
url: /developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk-and-live-preview
uid: bltc4bb73902001f712
---

# Get Started with TypeScript Delivery SDK and Live Preview

## Get Started with TypeScript Delivery SDK and Live Preview

This guide explains how to use the Contentstack [TypeScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript/about-typescript-delivery-sdk) to retrieve published content and configure Live Preview for real-time content updates in your application.

## Prerequisites

To get started with TypeScript, ensure the following:

-   [NodeJS version 22](https://nodejs.org/en) or later

## Install the SDK

Install the TypeScript Delivery SDK. If you use Live Preview, install the Live Preview Utils SDK as well (or install both in one command):

```
npm install @contentstack/delivery-sdk @contentstack/live-preview-utils
```

If you only need the Delivery SDK (no Live Preview):

```
npm install @contentstack/delivery-sdk
```

After installing the required packages, initialize your stack configuration and enable Live Preview as needed.

## Initialize the Stack and Enable Live Preview

[Live Preview](/docs/headless-cms/about-live-preview) enables editors to view content changes in real time before publishing.

To use Live Preview, configure the following parameters in your stack configuration:

-   enable
-   preview\_token
-   host

Initialize the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) separately within your project. The SDK manages communication between your application and Contentstack to support Live Preview functionality.

Use the following command to initialize the stack:

```
import contentstack from 'contentstack/delivery-sdk'

const Stack = contentstack.stack({
  apiKey: 'api_key',
  deliveryToken: 'delivery_token',
  environment: 'environment',
  live_preview: {
    enable: true,
    preview_token: '<your_preview_token>',
    host: 'rest-preview.contentstack.com',
  }
})
```

**Note:** host is required when Live Preview is enabled (no default). For example:

-   North America: rest-preview.contentstack.com
-   Europe: eu-rest-preview.contentstack.com

Refer to the [About Regions](/docs/administration/about-regions) document to learn more about other regions.

When using the TypeScript Delivery SDK with the Live Preview Utils SDK, pass Stack.config (with type assertion to IStackSdk) instead of the whole Stack instance during initialization.

```
ContentstackLivePreview.init({
  enable: true,
  ssr: true,
  stackSdk: Stack.config as IStackSdk,
});
```

Once Live Preview is configured, additional setup may be required depending on your rendering architecture.

## Configure Live Preview for Server-Side Rendering (SSR)

For server-side rendered (SSR) applications, use the following middleware to retrieve the Live Preview hash key:

```
import express from 'express'

const app = express()

app.use((req, response, next) => {
  Stack.livePreviewQuery(req.query)
  next()
});
```

To install and initialize the Live Preview Utils SDK, refer to the [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website/#server-side-rendering-ssr) documentation.

When using Live Preview in server-side environments, you must manage SDK instances carefully to prevent configuration leakage between requests.

## Manage SDK Instances per Request

When Live Preview is enabled, it modifies the SDK configuration for each request (for example, API endpoints).

Reusing a single SDK instance across multiple server-side requests can cause configuration leakage and result in incorrect content being served.

**Best Practice**

Create a new Contentstack SDK instance for each server-side request, such as:

-   Each Node.js request
-   Each serverless function invocation

This ensures request-specific configuration does not affect other users.

**Warning:** Do not reuse a single Contentstack SDK instance across multiple server-side requests when Live Preview is enabled. Reusing the same instance causes users to receive incorrect or inconsistent content.

### Why SDK Instances Must Not Be Reused

Live Preview adjusts SDK configuration values such as API endpoints based on the incoming request.

If the same SDK instance is reused:

-   Configuration changes can persist beyond the current request.
-   One user’s request can affect another user’s response.

This typically occurs in environments where the SDK is reused across requests:

-   Long-running Node.js servers
-   Serverless functions with warm containers

### Recommended Per-Request Instantiation

Create a new Contentstack SDK instance for each request.

Creating a new instance for each request:

-   Prevents configuration leakage
-   Ensures predictable behavior
-   Guarantees that users receive the correct content

The above guidance applies only to server-side environments. If your application uses client-side rendering, refer to the setup below.

## Configure Live Preview for Client-Side Rendering (CSR)

For client-side rendered (CSR) applications, refer to the [CSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website/#client-side-rendering-csr) guide.

## Retrieve Published Content Using the Delivery SDK

After configuring the SDK and setting up Live Preview, you can retrieve published content using the Contentstack Delivery SDK. The SDK communicates with the Content Delivery APIs to fetch read-only content from your stack.

### Retrieve a Single Entry

To retrieve a specific entry, provide:

-   The content type UID
-   The entry UID

```
try {
  const entry = await Stack
    .contentType('blog')
    .entry('entry_uid')
    .fetch();

  console.log(entry.title, entry.uid);
} catch (err) {
  console.error('Failed to fetch entry:', err);
}
```

**Response Behavior**

-   fetch() resolves with the complete entry object, including:
    -   uid
    -   title
    -   All fields defined in the content type (for example, body, image, or reference fields)
-   The method throws an error if:
    -   The entry does not exist
    -   The request fails

If you are using TypeScript, you can improve type inference by using a generic:

```
fetch<BlogEntry>()
```

### Retrieve Multiple Entries

To fetch multiple entries for a content type, use:

```
.entry().find()
```

Instead of:

```
.entry('entry_uid').fetch()
```

Use .find() when you need a list of entries rather than a single entry.
