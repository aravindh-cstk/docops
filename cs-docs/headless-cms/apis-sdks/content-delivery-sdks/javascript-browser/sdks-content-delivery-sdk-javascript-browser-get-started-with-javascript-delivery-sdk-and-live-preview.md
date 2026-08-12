---
title: "Get Started with JavaScript Delivery SDK and Live Preview"
description: "Get started with Contentstack’s JavaScript Delivery SDK for browsers and Live Preview to enable real-time content updates easily."
url: /developers/sdks/content-delivery-sdk/javascript-browser/get-started-with-javascript-delivery-sdk-and-live-preview
---

# Get Started with JavaScript Delivery SDK and Live Preview

## Get Started with JavaScript Delivery SDK and Live Preview

This guide will help you get started with Contentstack [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with JavaScript, you will need the following:

-   [NodeJS](https://nodejs.org/en) version 22 or later

## SDK Installation and Setup

To use the JavaScript Delivery SDK, [download](/docs/developers/sdks/content-delivery-sdk/javascript-browser/download-javascript-sdk/) and include it in the script tag:

```
<script type="text/javascript" src="/path/to/contentstack.min.js"></script>
```

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.  

Use the following command to initialize the stack:

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({ 
 api_key: 'api_key', 
 delivery_token: 'delivery_token', 
 environment: 'environment',
 live_preview: {
   enable: true, 
   preview_token: '<your-preview-token>',
   host: 'rest-preview.contentstack.com'
 }
})
```

Sharing a single instance of the Contentstack SDK across multiple requests (e.g., in a server-side environment like Node.js) with Live Preview enabled can cause unexpected behavior when multiple users make simultaneous requests. When Live Preview is enabled, the SDK may modify its configuration (such as API endpoints) for a specific request. If the same SDK instance handles multiple requests, configuration changes for one user (e.g., User A) can affect others (e.g., User B), leading to incorrect or unexpected content. To avoid this, create a new Contentstack SDK instance for each request to ensure isolated configurations and prevent interference between requests.

**Note:** By default, the host parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the host parameter.

## For Server-side Rendered Websites

If you have a Server-side Rendered (SSR) website, use the following code to get the Live Preview hash key:

```
import express from 'express'
const app = express()

app.use((req, response, next) => {
 // this will get live_preview hash and ContentType to request
 Stack.livePreviewQuery(req.query)
 next()
});
```

To install and initialize the Live Preview Utils SDK, you can refer to our [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website/#server-side-rendering-ssr) documentation.

## For Client-side Rendered Websites

If your website is rendered on the client-side, you can refer to our [CSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website/#client-side-rendering-csr) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.  

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
Stack.ContentType('content_type_uid').Entry('entry_uid').fetch()

Stack.ContentType('content_type_uid').Query().find()
```

## Timeline Preview

The Timeline Preview feature in the JavaScript Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.  
For more information, refer to our [Timeline Preview](/docs/headless-cms/set-up-timeline-for-your-website) documentation

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [JavaScript Playground App](https://github.com/contentstack/contentstack-js-sync-playground)
-   [API Reference for JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/reference/)
-   [JavaScript SDK Changelog](/docs/developers/sdks/content-delivery-sdk/javascript-browser/javascript-sdk-changelog/)
-   [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript)
