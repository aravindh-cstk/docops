---
title: "[Set Up Live Preview] Live PreviewImplementation for ReactJS CSR  Website"
description: Live Preview Implementation for ReactJS CSR Website
url: https://www.contentstack.com/docs/headless-cms/live-preview-implementation-for-reactjs-csr-website
product: Contentstack
doc_type: guide
audience:
  - developers
version: v3
last_updated: 2026-03-25
---

# [Set Up Live Preview] Live PreviewImplementation for ReactJS CSR  Website

This page explains how to set up Live Preview for a ReactJS client-side rendering (CSR) website using Contentstack REST APIs and related SDKs. It is intended for developers configuring preview tokens, SDK settings, and client-side update listeners for real-time preview behavior.

## Live Preview Implementation for ReactJS CSR Website

Client-side rendering (CSR) is where developers render their content directly to a browser using JavaScript. This guide explains in detail how to set up Live Preview for your CSR websites using REST APIs.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Preview token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens)
- Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview for your ReactJS CSR App router:

## Set Up the Website
To enable Live Preview on your website, begin by setting up the essentials.

### Generate a Preview Token
Create a preview token by navigating to **Settings **> **Tokens **> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**

**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Update Contentstack's delivery SDK:
Add the Live Preview configuration inside the `Contentstack.Stack()` method when configuring Contentstack’s Delivery SDK. For example, here’s a sample configuration using the [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/):

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

**Note**: For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers:

**AWS EU**: `eu-rest-preview.contentstack.com`
- **Azure NA**: `azure-na-rest-preview.contentstack.com`
- **Azure EU**: `azure-eu-rest-preview.contentstack.com`
- **GCP NA:**` gcp-na-rest-preview.contentstack.com`
- **GCP EU:**` gcp-eu-rest-preview.contentstack.com`

### Migrate to New Preview Service (recommended)
Upgrade the Contentstack SDK to its latest version. Find the `Contentstack.Stack()` initialization method and replace the `management_token` parameter with the `preview_token` as shown below:

```
// utils.js
Contentstack.Stack({

        ...
        live_preview: {
        enable: true,
        host: "rest-preview.contentstack.com",
        preview_token: "csxxxxxxxxxxxx"
          }
        })
```

**Additional Resource: **For detailed information on migrating to preview service refer to the[ Migrate to Preview Service](/docs/developers/set-up-live-preview/migrate-to-preview-service/) documentation.

**Warning:** Upgrading to the latest SDK version won't disrupt your existing configuration, but you might notice suboptimal performance in live preview within references and other operations. To enhance efficiency, update the` host` and replace `management_token` with `preview_token`.

### Install and Initialize the Live Preview Utils SDK:
Use the [Live Preview Utils SDK](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.
You can either use`npm` or `yarn `to install the Live Preview Utils SDK`.`

To install the package via `npm `use the following command:

```
npm install @contentstack/live-preview-utils
```

Initialize the SDK using the `init()` method to set up event listeners for content updates:

```
// utils.js
...
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({
  stackSdk: Stack,
  enable: true,
  ssr: false,
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
export const onEntryChange = ContentstackLivePreview.onEntryChange;
...
```

**Note:**To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

### Configure Live Preview across Each Webpage
When you update an entry, the `onEntryChange()` method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.

In the example below, an `updateData()` function handles the data fetch and state update. Pass this function to `onEntryChange()` inside a `useEffect()` hook to automatically refresh the data whenever the entry content changes.

```
// Footer.js
        import React from "react";
        import { onEntryChange, getCMSData } from "./utils.js";
        const Footer = () => {
            const [data, setData] = React.useState({});
            const updateData = async () => {
                const fetchedData = await getCMSData();
                setData(fetchedData);
            };
            React.useEffect(() => {
                onEntryChange(updateData);
            }, []);
            return {data.company_name};
        };
```

## Host the Website
To host a website, you can simply use [launch](/docs/developers/launch) or any other website hosting service.

## Update Stack Settings
To set up Live Preview for the entries of your stack, perform the following steps:

Navigate to **Settings **and select** Environments**.
- [Set the base URL](/docs/developers/set-up-environments/add-an-environment/)s for different locales, and click **Update**.
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status.       You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

## Live Edit Tags for Entries (recommended)
Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest)

## Common questions

### Do I need a preview token or can I use a management token?
**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

### What host should I use for Live Preview?
For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers: **AWS EU**: `eu-rest-preview.contentstack.com`, **Azure NA**: `azure-na-rest-preview.contentstack.com`, **Azure EU**: `azure-eu-rest-preview.contentstack.com`, **GCP NA:**` gcp-na-rest-preview.contentstack.com`, **GCP EU:**` gcp-eu-rest-preview.contentstack.com`.

### How do I refresh data automatically when an entry changes?
When you update an entry, the `onEntryChange()` method detects the change and runs your defined logic to fetch updated data. Pass your update function to `onEntryChange()` inside a `useEffect()` hook.