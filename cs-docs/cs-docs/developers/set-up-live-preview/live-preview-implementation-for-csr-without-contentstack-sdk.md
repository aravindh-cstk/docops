---
title: "[Live Preview] Live preview for CSR without Contentstack Delivery SDK"
description: Live Preview for CSR without Contentstack Delivery SDK
url: https://www.contentstack.com/docs/developers/set-up-live-preview/live-preview-implementation-for-csr-without-contentstack-sdk
product: Contentstack
doc_type: guide
audience:
  - developers
  - frontend-engineers
version: v3
last_updated: 2026-03-25
---

# [Live Preview] Live preview for CSR without Contentstack Delivery SDK

This page explains how to set up Contentstack Live Preview for client-side rendered (CSR) websites using REST APIs (without the Contentstack Delivery SDK). It is intended for developers implementing Live Preview in browser-rendered apps (including SSGs that load dynamic content in the browser) and should be used when configuring preview tokens, Live Preview Utils SDK, REST host/headers, and stack settings.

## Live Preview for CSR without Contentstack Delivery SDK

Client-side rendering (CSR) means your website loads data and builds pages directly inside the browser using JavaScript. This guide walks you through setting up Contentstack Live Preview for CSR websites using REST APIs.

**Tip: **CSR mode can also be used for static site generators (SSG) that load dynamic content on the browser.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Preview token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview for your CSR website:

## Set Up the Website

To enable Live Preview on your website, begin by setting up the essentials.

### Generate a Preview Token

Create a preview token by navigating to **Settings **> **Tokens **> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**

**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Install and Initialize the Live Preview Utils SDK

Use the [Live Preview Utils SDK](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.

Install the SDK using one of the following methods:

**Via npm**:Install the Live Preview Utils SDK package via `npm` by running the following command:

```
npm install @contentstack/live-preview-utils@contentstack/utils
```

Initialize the SDK using the `init()` method to set up event listeners for content updates:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({
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
```

- **Via script**:Add the following `script` tag to your HTML file to load the Live Preview Utils SDK::

```

import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";

ContentstackLivePreview.init({
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

```

**Note: **To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

### Update the REST URL and Headers

To make sure your website works properly in the Live Preview panel, you need to update the REST API hostname. When the site loads in the preview panel, the Live Preview SDK detects a special value (called a hash) in the URL. You can use this value to tell your site to fetch data from the correct preview server.

You can use a code snippet like the one below to fetch data from the Contentstack CDN accordingly:

```
// utils.js

function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
  return headers;
}
export const fetchData = async (ctUID, entryUID) => {
  const contentstackURL = new URL(
    `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
  );
  const headers = getHeaders();
  const res = await fetch(contentstackURL.toString(), {
    method: "GET",
    headers: headers,
  });
  return res.json();
};
```

By default, the `contentstackURL` points to the Contentstack CDN. The `getHeaders()` function adds the required headers. The `fetchData()` function sends the request and fetches the data.

To support Live Preview, check if a hash is present, update the URL and headers to use the Preview Service instead.

```
// utils.js
import ContentstackLivePreview from "@contentstack/live-preview-utils";
const CONTENTSTACK_CDN_URL = "cdn.contentstack.io";
const LIVE_PREVIEW_HOST_NAME = "rest-preview.contentstack.com";
function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
  return headers;
}
export const fetchData = async (ctUID, entryUID) => {
  const contentstackURL = new URL(
    `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
  );
  const hash = ContentstackLivePreview.hash;
  const headers = getHeaders();
  if (hash) {
    headers.append("live_preview", hash);
    headers.append("preview_token", REACT_APP_CONTENTSTACK_PREVIEW_TOKEN);
    // Optionally, to enable variant support add the include_applied_variants header.
    headers.append("include_applied_variants", "true");

    contentstackURL.hostname = LIVE_PREVIEW_HOST_NAME;
  } else {
    contentstackURL.hostname = CONTENTSTACK_CDN_URL;
  }
  const res = await fetch(contentstackURL.toString(), {
    method: "GET",
    headers: headers,
  });
  return res.json();
};
```

In this example, the hash helps you switch the hostname and set the right headers. To enable Live Preview, make sure you send both the hash and the `preview_token`. Once this is set up, you can continue using the REST API as usual.

**Note**: For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers:

**AWS EU**: `eu-rest-preview.contentstack.com`
- **Azure NA**: `azure-na-rest-preview.contentstack.com`
- **Azure EU**: `azure-eu-rest-preview.contentstack.com`
- **GCP NA:**` gcp-na-rest-preview.contentstack.com`
- **GCP EU:**` gcp-eu-rest-preview.contentstack.com`For other base urls like the CDN, refer to our documentation on [API Endpoints](/docs/developers/contentstack-regions/api-endpoints#base-api-urls-for-azure-north-america-region).

### Configure Live Preview across Each Webpage

When you update an entry, the `onEntryChange()` method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.

In the example below, an `updateData()` function handles the data fetch and state update. Pass this function to `onEntryChange()` inside a `useEffect()` hook to automatically refresh the data whenever the entry content changes.

```
// utils.js
...
export const onEntryChange = ContentstackLivePreview.onEntryChange;
 ...

import React from "react";
import { onEntryChange, fetchData } from "./utils.js";
const Footer = () => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    // For Initial render
    fetchData("your_content_type_uid", "your_entry_uid").then((data) => {
      const entry = data.entry;
      setData(entry);
    });
    // To fetch the live preview data
    onEntryChange(() => {
      fetchData("your_content_type_uid", "your_entry_uid").then((data) => {
        const entry = data.entry;
        setData(entry);
      });
    });
  }, []);
  return {data.company_name};
};/pre>
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

### Do I need the Contentstack Delivery SDK to use Live Preview in CSR?
No. This page describes using REST APIs along with the Live Preview Utils SDK to enable Live Preview for CSR websites without the Contentstack Delivery SDK.

### What do I need to send to enable Live Preview requests?
To enable Live Preview, make sure you send both the hash and the `preview_token`.

### Which REST preview host should I use for my region?
For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers, use the region-specific hosts listed in the note under “Update the REST URL and Headers”.

### Where should I initialize the Live Preview Utils SDK in a CSR app?
**Note: **To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

