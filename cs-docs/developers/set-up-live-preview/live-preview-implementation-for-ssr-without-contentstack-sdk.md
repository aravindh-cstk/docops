---
title: "[Live Preview] Live Preview for SSR without Contentstack SDK"
description: Live Preview for SSR without Contentstack Delivery SDK
url: https://www.contentstack.com/docs/headless-cms/live-preview-implementation-for-ssr-without-contentstack-sdk
product: Contentstack
doc_type: guide
audience:
  - developers
version: v3
last_updated: 2026-03-25
---

# [Live Preview] Live Preview for SSR without Contentstack SDK

This page explains how to configure Contentstack Live Preview for server-side rendered (SSR) websites using REST APIs (without the Contentstack Delivery SDK). It is intended for developers implementing SSR preview flows and should be used when you need Live Preview support via REST, including preview hash handling and preview service endpoints.

## Live Preview for SSR without Contentstack Delivery SDK

Server-side rendering (SSR) means your website’s pages are generated on the server before they reach a visitor’s browser. Instead of building the page in the browser, the server sends fully prepared HTML to display. This guide explains how to configure Live Preview for SSR websites using REST APIs.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](../set-up-stack/view-stack-details.md)
- [Preview token](../create-tokens/about-delivery-tokens.md#understanding-preview-tokens)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview for your SSR website without Contentstack SDK:

## Set Up the Website

To enable Live Preview on your website, begin by setting up the essentials.

### Generate a Preview Token

Create a preview token by navigating to **Settings **> **Tokens **> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac).

**Note**: It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **+ Create Preview Token** option and copy the generated token.

### Install and Initialize the Live Preview Utils SDK

Use the [Live Preview Utils SDK](./get-started-with-live-preview-utils-sdk-v3.md) to listen for content updates and fetch real-time preview data on the client side.

You can use the `script` tag in your HTML page or any other view engine code to install the package. To do so, run the following command:

```

import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";
ContentstackLivePreview.init({
  enable: true,
  ssr: true,

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

### Utilize the Live Preview Hash

When the Live Preview panel is open in SSR (server-side rendering) mode, Contentstack automatically adds a **hash** as a query parameter in the URL. This hash helps the system identify that the request is coming from Live Preview and ensures the correct version of the content is displayed. To make Live Preview work properly, you need to pass this hash to the Contentstack Delivery SDK while fetching data.

Here’s a simple example:

```
app.get('/', async (request, response) => {
    const livePreviewHash = request.query.live_preview  // This implementation may vary across frameworks, but the Live Preview hash will always be available in the query string.

	const data = await fetchData(ctUID, entryUID, livePreviewHash); // check step 4 for function definition

...utilise the data to populate your template html
});
```

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
        `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`
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
const CONTENTSTACK_CDN_URL = "cdn.contentstack.io";
const PREVIEW_HOST_NAME = "rest-preview.contentstack.com";
function getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
    headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
    return headers;
}
export const fetchData = async (ctUID, entryUID, hash = null) => {
    const contentstackURL = new URL(
        `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`
    );
    const headers = getHeaders();
    if (hash) {
        headers.append("live_preview", hash);
        headers.append("preview_token", REACT_APP_CONTENTSTACK_PREVIEW_TOKEN);
        // Optionally, to enable variant support add the include_applied_variants header.
          headers.append("include_applied_variants", "true");

        contentstackURL.hostname = PREVIEW_HOST_NAME;
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

Note: For the **North America **endpoint, set the host parameter to `rest-preview.contentstack.com`. For other data centers:

**AWS EU**: `eu-rest-preview.contentstack.com`
- **Azure NA**: `azure-na-rest-preview.contentstack.com`
- **Azure EU**: `azure-eu-rest-preview.contentstack.com`
- **GCP NA:**` gcp-na-rest-preview.contentstack.com`
- **GCP EU:**` gcp-eu-rest-preview.contentstack.com`

For other base urls like the CDN, refer to our documentation on [API Endpoints](../contentstack-regions/api-endpoints.md#base-api-urls-for-azure-north-america-region).

To fetch content in the Live Preview panel, it is recommended to use a preview token rather than a read-only management token. For more information, refer to our documentation on [Preview Tokens](../set-up-timeline/preview-api.md).

## Host the Website

To host a website, you can simply use [launch](../launch.md) or any other website hosting service.

**Note:** Make sure your website is HTTPS enabled.

## Update Stack Settings

To set up Live Preview for the entries of your stack, perform the following steps:

Navigate to **Settings **and select** Environments**.

- [Set the base URL](../set-up-environments/add-an-environment.md)s for different locales, and click **Update**.
- Select **Visual Experience** from the stack settings.
- In the **General** tab, select the **Enable Live Preview** checkbox.
- Set the **Default Preview Environment** and click **Save** to save the settings.**Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
- Enable the** Display Setup Status** toggle to display the configuration status.       You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

## Live Edit Tags for Entries (recommended)

Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

**Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](./set-up-live-edit-tags-for-entries-with-rest.md)

## Common questions

### Do I need the Contentstack Delivery SDK to use Live Preview with SSR?
No. This page describes configuring Live Preview for SSR websites using REST APIs without Contentstack SDK.

### What is the Live Preview hash used for?
The hash is added as a query parameter in the URL and helps identify that the request is coming from Live Preview so the correct version of the content is displayed.

### Which host should I use for preview requests?
When a hash is present, update the hostname to the Preview Service (for example, `rest-preview.contentstack.com` for the **North America **endpoint) and use the region-specific preview host for other data centers.

### What headers are required to enable Live Preview via REST?
When a hash is present, send both the `live_preview` hash and the `preview_token` in headers (and optionally `include_applied_variants` to enable variant support).