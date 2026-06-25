---
title: "[Set up Live Preview] - Set up Live Preview for Static-Site Generator (SSG)"
description: Set up Live Preview for Static-Site Generator (SSG) websites using CSR mode, including prerequisites, preview token setup, SDK configuration, Live Preview Utils SDK initialization, webpage configuration, hosting, stack settings, and Live Edit tags.
url: https://www.contentstack.com/docs/headless-cms/set-up-live-preview-for-static-site-generator-ssg
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set up Live Preview] - Set up Live Preview for Static-Site Generator (SSG)

This page explains how to set up Live Preview for Static Site Generator (SSG) websites using CSR (Client-side Rendering) mode. It is intended for developers configuring Contentstack Live Preview with Delivery SDKs and the Live Preview Utils SDK, and should be used when enabling real-time preview and editing workflows for SSG-based sites.

## Set Up Live Preview for Static-Site Generator (SSG)

Static Site Generators (SSGs) let you create static HTML websites from raw data and templates, and are often used for websites that don't need much dynamic content.

When it comes to working with Live Preview, these websites use Live Preview in the CSR (Client-side Rendering) mode. Let’s look at how to set up Live Preview for your SSG websites in detail.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack](/docs/developers/set-up-stack) settings
- [Preview token](../create-tokens/about-delivery-tokens.md#understanding-preview-tokens)
- Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview with REST for your SSG website:

## Set up the Website
To enable Live Preview on your website, begin by setting up the essentials.

### Generate a Preview Token
Create a preview token by navigating to **Settings **> **Tokens **> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac).

**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Update Contentstack's Delivery SDK:
Add the Live Preview configuration inside the `Contentstack.Stack()` method when configuring Contentstack’s Delivery SDK. For example, here’s a sample configuration using the [JavaScript Delivery SDK](../sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk.md):

```
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

**Note**: For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers:**AWS EU: **`eu-rest-preview.contentstack.com`
- **Azure NA: **`azure-na-rest-preview.contentstack.com`
- **Azure EU: **`azure-eu-rest-preview.contentstack.com`
- **GCP NA: **`gcp-na-rest-preview.contentstack.com`
- **GCP EU: **`gcp-eu-rest-preview.contentstack.com`

### Migrate to New Preview Service (recommended)
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

**Warning**: Updating to the latest SDK version won’t affect your current configuration. However, you may experience limited performance improvements in Live Preview for referenced entries and certain operations unless you update both the host and `token` as shown above.

### Install and Initialize the Live Preview Utils SDK
Use the [Live Preview Utils SDK](./get-started-with-live-preview-utils-sdk-v3.md) to listen for content updates and fetch real-time preview data on the client side.

Install the SDK using one of the following methods:

**Via npm**:Install the Live Preview Utils SDK package via `npm` by running the following command:

```
npm install @contentstack/live-preview-utils
```

Initialize the SDK using the `init()` method to set up event listeners for content updates:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";

ContentstackLivePreview.init({
  enable: true,
  ssr: false,
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

**Via script**:Add the following `script` tag to your HTML file to load the Live Preview Utils SDK:

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

### Configure Live Preview across Each Webpage
Whenever you update an entry, the `onLiveEdit()` method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.

In the example below, an `updateData()` function handles the data fetch and state update. Pass this function to `onEntryChange()` inside a `useEffect()` hook to automatically refresh the data whenever the entry content changes.

```
// Footer.js
import React from "react";
import { onLiveEdit, getEntryFromCMS } from "./contentstack-sdk.js";

const Footer = ({ entryData }) => {
    const [data, setData] = React.useState(entryData);

    const updateData = () => {
        const fetchedData = getEntryFromCMS();
        setData(fetchedData);
    };

    React.useEffect(() => {
        onLiveEdit(updateData);
    }, []);

    return {data.company_name};
};

export const getStaticProps = async () => {
    const fetchedData = await getEntryFromCMS();
    return {
        props: { data: fetchedData },
    };
};
```

## Host the Website
To host a website, you can simply use [launch](../launch.md) or any other website hosting service.

## Update Stack Settings
To set up Live Preview for the entries of your stack, perform the following steps:

Navigate to **Settings **and select** Environments**.
- [Set the base URL](../set-up-environments/add-an-environment.md)s for different locales, and click **Save**.
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status.       You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

## Live Edit Tags for Entries (Recommended)
Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](./set-up-live-edit-tags-for-entries-with-rest.md).

## Common questions

### Do SSG websites use CSR or SSR mode for Live Preview?
When it comes to working with Live Preview, these websites use Live Preview in the CSR (Client-side Rendering) mode.

### Which host should I use for the North America endpoint?
For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`.

### How do I avoid configuration reset errors due to rerendering?
To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

### What is recommended for enabling Live Edit tags?
**Recommended: Enables Edit Tags** and refer to [Set Up Live Edit Tags for Entries with REST](./set-up-live-edit-tags-for-entries-with-rest.md).

<!-- filename: set-up-live-preview-set-up-live-preview-for-static-site-generator-ssg.md -->