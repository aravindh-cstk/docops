---
title: "[Set Up Live Preview] Live Preview Implementation for NextJS SSR App Router"
description: Live Preview Implementation for NextJS SSR App Router
url: https://www.contentstack.com/docs/headless-cms/live-preview-implementation-for-nextjs-ssr-app-router
product: Contentstack
doc_type: guide
audience:
  - developers
  - implementers
version: v3
last_updated: 2026-03-25
---

# [Set Up Live Preview] Live Preview Implementation for NextJS SSR App Router

This page explains how to configure Contentstack Live Preview for a NextJS SSR App Router website using REST APIs. It is intended for developers setting up preview for server-rendered pages and should be used when enabling real-time content updates and (optionally) Live Edit tags in a Next.js App Router project.

## Live Preview Implementation for NextJS SSR App Router

Server-side rendering (SSR) means your website’s pages are generated on the server before they reach a visitor’s browser. Instead of building the page in the browser, the server sends fully prepared HTML to display. This guide explains how to configure Live Preview for SSR websites using REST APIs.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](../set-up-stack/view-stack-details.md)
- [Preview token](../create-tokens/about-delivery-tokens.md#understanding-preview-tokens)
- Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
- IFrame-compatible website to avoid [CORS ](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)errors

Follow these steps to configure Live Preview for your NextJS SSR App router:

## Set Up the Website

To enable Live Preview on your website, begin by setting up the essentials.

### Generate a Preview Token

Create a preview token by navigating to **Settings **> **Tokens **> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**

**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Update Contentstack's delivery SDK:

Add the Live Preview configuration inside the `Contentstack.Stack()` method when configuring Contentstack’s Delivery SDK. For example, here’s a sample configuration using the [JavaScript Delivery SDK](../sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk.md):

```
// utils.js
import Contentstack from 'contentstack'
const Stack = Contentstack.Stack({
  ...
  // update your configs here
  live_preview: {
    preview_token: preview_token,
    enable: true,
    host: 'rest-preview.contentstack.com' //recommended
  },
  ...
})
```

**Note**: For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. If your website is hosted on a different data center, use one of the following values:**AWS EU**: `eu-rest-preview.contentstack.com`
- **Azure NA**: `azure-na-rest-preview.contentstack.com`
- **Azure EU**: `azure-eu-rest-preview.contentstack.com`
- **GCP NA:**` gcp-na-rest-preview.contentstack.com`
- **GCP EU:**` gcp-eu-rest-preview.contentstack.com`

### Migrate to New Preview Service (recommended):

Upgrade the Contentstack SDK to its latest version to use the new preview service. In your `Contentstack.Stack()` initialization, replace the `management_token` parameter with the `preview_token`, as shown below:

```
Contentstack.Stack({
...,
live_preview: {
enable: true,
host: "rest-preview.contentstack.com",
preview_token: "csxxxxxxxxxxxx"
}
})
```

**Additional Resource: **For detailed information, refer to the [Migrate to Preview Service](./migrate-to-preview-service.md) documentation.

**Warning**: Updating to the latest SDK version won’t affect your current configuration. However, you may experience limited performance improvements in Live Preview for referenced entries and certain operations unless you update both the `host` and `token` as shown above.

### Install and Initialize the Live Preview Utils SDK:

Use the [Live Preview Utils SDK](./get-started-with-live-preview-utils-sdk-v3.md) to listen for content updates and fetch real-time preview data on the client side.

Install the SDK using one of the following methods:

**Via npm**:Install the Live Preview Utils SDK package via `npm` by running the following command:

```
npm install @contentstack/live-preview-utils @contentstack/utils
```

Initialize the SDK using the `init()` method to set up event listeners for content updates:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";

ContentstackLivePreview.init({
  enable: true,
  ssr: true,
  stackSdk: Stack,
  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: "your api key",
    environment: "your environment value",
    branch: "your branch",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com", // Use region-specific host if applicable
    port: 443,
  },
});
```

**Note**: To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

In Next.js App Router projects, when using `npm`, initialize the Live Preview SDK inside a dedicated client component.

This approach ensures the SDK runs only once and prevents re-render issues between server and client environments.

Create a separate initialization component as shown below:

```
"use client";
import { useEffect } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export default function LivePreviewInitComponent() {
  useEffect(() => {
    ContentstackLivePreview.init({
      enable: true,
      ssr: true,
      stackSdk: Stack,
      // Recommended: Enables Edit Tags
      editButton: { enable: true },
      stackDetails: {
        apiKey: "your api key",
        environment: "your environment value",
        branch: "your branch",
      },
      clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com", // Use region-specific URL if required
        port: 443,
      },
    });
  }, []);

  return null;
}
```

- **Via script**:Add the following `script` tag to your HTML file to load the Live Preview Utils SDK:

```

import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";
ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  stackSdk: Stack, // Stack instance from delivery sdk,
  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: "your api key",
    environment: "your environment value",
    branch: "your branch",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com", // Use region-specific host if applicable
    port: 443,
  },
});

```

Define the SDK initialization code within a separate JavaScript file to prevent configuration resetting errors in your Live Preview setup caused by rerendering.

### Set Up SDK Initialization and Data Fetching Utilities:

Create a utility file and add the SDK initialization and data fetching logic to it.

```
// utils.js
...
import Contentstack from 'contentstack';

export function initializeContentstackDeliverySDK() {
  return Contentstack.Stack({
    // add your config here
  });
}

 export async function getCMSData(stack, options) {
  return await stack.ContentType("your_content_type")
    .Entry("entry_uid")
    .toJSON()
    .fetch();
}
...
```

### Configure Live Preview across each webpage

Whenever you update an entry, the live preview will re-render the entire page. This allows you to implement any coding logic necessary to fetch data within the component.

```
// page.js
import {
  initializeContentstackDeliverySDK,
  getCMSData
} from "./utils.js";
import LivePreviewInitComponent from "../components/LivePreviewInitComponent";

export default async function Page({ searchParams }) {
  // 1. Create a new SDK client per request
  const stack = initializeContentstackDeliverySDK();

  // 2. Pass live preview query parameters to the SDK
  stack.livePreviewQuery(searchParams);

  // 3. Fetch data using this stack instance
  const entryData = await getCMSData(stack, { url: "/" });

  return (
    <>

# Hello, World! {" " + entryData?.title}

  );
}
```

With these steps completed, the user website is ready. Let's proceed to host the website.

## Host the Website

To host a website, you can simply use [launch](../launch.md) or any other website hosting service.

## Update Stack Settings

To set up Live Preview for the entries of your stack, you need to perform the following steps:

Navigate to **Settings **and select** Environments**.

- [Set the base URL](../set-up-environments/add-an-environment.md)s for different locales and click **Update.**
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status.       You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

## Live Edit Tags for Entries (recommended)

Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](./set-up-live-edit-tags-for-entries-with-rest.md)

## Common questions

### Do I need a preview token or can I use a management token?

Use a preview token for Live Preview instead of a previously utilized, read-only management token.

### Where should I initialize the Live Preview Utils SDK in a Next.js App Router project?

Initialize the Live Preview SDK inside a dedicated client component to ensure the SDK runs only once and prevents re-render issues between server and client environments.

### What host should I use for Live Preview?

For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. If your website is hosted on a different data center, use one of the listed region-specific host values.

### Why should the initialization code be in a separate JavaScript file?

To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.