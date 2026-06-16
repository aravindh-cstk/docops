---
title: Set Up Live Preview with REST for CSR
description: Set up Contentstack Live Preview for client-side rendering (CSR) websites using REST APIs.
url: https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-client-side-rendering
product: Contentstack
doc_type: guide
audience:
  - developers
version: v3
last_updated: 2026-03-25
---

# Set Up Live Preview with REST for CSR

This page explains how to set up Contentstack Live Preview for client-side rendering (CSR) websites using REST APIs. It is intended for developers integrating Live Preview into browser-rendered apps (including SSGs with client-side dynamic content) and should be used when configuring preview tokens, SDK settings, and Live Preview Utils for real-time updates.

**Note:** This guide focuses on setting up Live Preview using REST APIs. If you are using GraphQL, refer to our [**Set-up Live Preview with GraphQL for CSR**](/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-client-side-rendering/)document.

Client-side rendering (CSR) means your website loads data and builds pages directly inside the browser using JavaScript. This guide walks you through setting up Contentstack Live Preview for CSR websites using REST APIs.

**Tip:** CSR mode can also be used for static site generators (SSG) that load dynamic content on the browser.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Preview token](https://www.contentstack.com/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens)
- Website that uses [Contentstack Delivery SDKs](/docs/developers#development-resources-and-sdks)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview with REST for your CSR website:

## Set Up the Website

To enable Live Preview on your website, begin by setting up the essentials—create a preview token, install the Live Preview Utils SDK, and configure your GraphQL requests to support real-time updates.

### Generate a Preview Token

Create a preview token by navigating to **Settings** > **Tokens** > **Delivery Tokens** (press “Alt + O” for Windows or “Option + O” for Mac).

**Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Update Contentstack's Delivery SDK

Add the Live Preview configuration inside the Contentstack.Stack() method when configuring Contentstack’s Delivery SDK. For example, here’s a sample configuration using the [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/):

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
  ...
  live_preview: {
    preview_token: preview_token,
    enable: true,
    host: 'rest-preview.contentstack.com' // recommended
  },
  ...
});
```

**Note:** For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers:

- **AWS EU:** eu-rest-preview.contentstack.com
- **Azure NA:** azure-na-rest-preview.contentstack.com
- **Azure EU:** azure-eu-rest-preview.contentstack.com
- **GCP NA:** gcp-na-rest-preview.contentstack.com
- **GCP EU:** gcp-eu-rest-preview.contentstack.com

### Migrate to New Preview Service (recommended)

Upgrade the Contentstack SDK to its latest version to use the new preview service. In your Contentstack.Stack() initialization, replace the management_token parameter with the preview_token, as shown below:

```
Contentstack.Stack({
  ...,
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com",
    preview_token: "csxxxxxxxxxxxx"
  }
});
```

**Additional Resource:** For detailed information, refer to the [Migrate to Preview Service](https://docs.google.com/document/d/1UEtL8CpyglL6W-citT4CIuqRF-wBIeLxUctt1GyMf6Y/edit) documentation.

**Warning:** Updating to the latest SDK version won’t affect your current configuration. However, you may experience limited performance improvements in Live Preview for referenced entries and certain operations unless you update both the host and token as shown above.

### Install and Initialize the Live Preview Utils SDK

Use the [Live Preview Utils SDK](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.

Install the SDK using one of the following methods:

**Via npm:**

Install the Live Preview Utils SDK package via npm:

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

**Note:** To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

**Via script:**

Install the Live Preview Utils SDK package using a script tag in your HTML:

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

When you update an entry, the onEntryChange() method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.

In the example below, an updateData() function handles the data fetch and state update. Pass this function to onEntryChange() inside a useEffect() hook to automatically refresh the data whenever the entry content changes.

```
// utils.js
...
export const onEntryChange = ContentstackLivePreview.onEntryChange();
...

// Footer.js
import React from "react";
import { onEntryChange } from "./utils.js";

const Footer = () => {
  const [data, setData] = React.useState({});

  const updateData = () => {
    const fetchedData = SomeCallToGetData();
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

Navigate to **Settings** and select **Environments**.

- [**Set the base URLs**](/docs/developers/set-up-environments/add-an-environment/) for different locales, and click **Update**.
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status.

You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

## Live Edit Tags for Entries (recommended)

Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Additional Resource:** For detailed information on how to set up Live Edit tags, refer to our documentation on [**Set Up Live Edit Tags for Entries with REST**](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest).

## Common questions

### Do I need a preview token or can I use a management token?
Use a preview token for Live Preview instead of a previously utilized, read-only management token.

### Which REST preview host should I use for my region?
For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers: **AWS EU:** eu-rest-preview.contentstack.com, **Azure NA:** azure-na-rest-preview.contentstack.com, **Azure EU:** azure-eu-rest-preview.contentstack.com, **GCP NA:** gcp-na-rest-preview.contentstack.com, **GCP EU:** gcp-eu-rest-preview.contentstack.com.

### Where should I initialize the Live Preview Utils SDK in a CSR app?
To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

### How do pages refresh when entry content changes?
The onEntryChange() method detects the change and runs your defined logic to fetch updated data; pass your data-refresh function to onEntryChange() (for example, inside a useEffect() hook in React).