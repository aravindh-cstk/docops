---
title: "[Timeline] - Set Up Timeline without Contentstack SDK"
description: Set up the Timeline feature for your stack without using the Contentstack SDK by adding preview_timestamp to API request headers and using Live Preview Utils SDK.
url: https://www.contentstack.com/docs/headless-cms/set-up-timeline-without-contentstack-sdk
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Timeline] - Set Up Timeline without Contentstack SDK

This page explains how to enable and use Contentstack’s Timeline feature in a stack without using the Contentstack SDK. It is intended for developers implementing Timeline support in CSR/SSR websites and should be used when you need to pass the Timeline timestamp through API request headers for previewing scheduled content changes.

Set Up Timeline without Contentstack SDK

The [Timeline](../../content-managers/timeline/about-timeline.md) feature enables you to see how your site will appear once scheduled updates are made live, providing a comprehensive view of upcoming content transformations. This guide helps you set up the Timeline feature for your stack without using the Contentstack SDK.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](../set-up-stack/view-stack-details.md)
- [Preview token](../create-tokens/about-delivery-tokens.md#about-preview-tokens)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

To enable the timeline feature, you need to include the `preview_timestamp` property in the headers of your API calls. This property holds a datetime value in ISO format, which can be extracted from the URL parameters when your site is loaded in the Timeline.

## Install or Update Live Preview Utils SDK

Install [live preview utils SDK](../sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) version **2.0** or above if not done already. To install it, you can either use `npm` or import it using the script tag in your HTML page code.

**Using npm**: Alternatively, you can install the Live Preview Utils SDK package via `npm` using the following command:
```
npm install @contentstack/live-preview-utils
```

**Using script tag**: To import the Live Preview Utils SDK using the script tag of the HTML file, add the following code:
```

```

**Note**: The timeline feature requires Live Preview Utils version **2.0** or above.

## Remove Live Preview Utils CSS

Live Preview Utils CSS is now included by default, so you no longer need to import it.

**For Client-side Rendering (CSR)**

Remove the following from your CSR website code.

```
// REMOVE LIVE PREVIEW UTILS CSS
import "@contentstack/live-preview-utils/dist/main.css";
```

**For Server-side Rendering (SSR)**

Remove the following from your SSR website code.

```
// REMOVE LIVE PREVIEW UTILS CSS
import "@contentstack/live-preview-utils/dist/main.css";
```

## Utility Functions

Create a `utils.js` file. This file will contain utility functions to handle the API requests and manage preview tokens and timestamps.

**For Client-side Rendering (CSR)**

Use the following code snippet within the `utils.js` file for your CSR websites. This setup is essential for handling the preview functionality on client-side rendered applications.

```
// utils.js
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({ ssr: false });

const CDN_HOST = "https://cdn.contentstack.io";
const LIVE_PREVIEW_REST_HOST = "https://rest-preview.contentstack.com";

const extractPreviewTimestampFromUrl = () => {
	const params = new URL(window.location.toString()).searchParams;
	if (params.has("preview_timestamp")) return params.get("preview_timestamp");
	else return null;
}

const getHeaders = () => {
  const headers = new Headers();
  const hash = ContentstackLivePreview.hash;
  const previewTimestamp = extractPreviewTimestampFromUrl();
  headers.append("Content-Type", "application/json");
  headers.append("api_key", process.env.REACT_APP_CONTENTSTACK_API_KEY);
  if (hash) {
    headers.append(
      "preview_token",
      process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN
    );
    headers.append("live_preview", hash);
    if (previewTimestamp) {
      headers.append("preview_timestamp", previewTimestamp);
    }
  } else {
    headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  }
  return headers;
};

export const apiRequest = async ({ contentTypeUid, entryUid }) => {
  const url = new URL(
    `${CDN_HOST}/v3/content_types/${contentTypeUid}/entries/${entryUid}`
  );
  if (ContentstackLivePreview.hash) {
    url.hostname = LIVE_PREVIEW_REST_HOST;
  }

  const headers = getHeaders();

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

**For Server-side Rendering (SSR)**

Use the following code snippet within the `utils.js` file for your SSR websites. This setup is tailored for server-side rendered applications to manage preview states.

```
// utils.js
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init();
ContentstackLivePreview.setConfigFromParams(window.location.search);

const extractPreviewTimestamp = () => {
  const urlWithParams = window.location.toString();
  const params = new URL(urlWithParams).searchParams;
  if (params.has("preview_timestamp")) return params.get("preview_timestamp");
  else return null;
};

// extract and store preview timestamp in context
const previewContext = {
  timestamp: extractPreviewTimestamp(),
};

const CDN_HOST = "https://cdn.contentstack.io";
const LIVE_PREVIEW_REST_HOST = "https://rest-preview.contentstack.com";

const getHeaders = () => {
  const headers = new Headers();
  const hash = ContentstackLivePreview.hash;
  headers.append("Content-Type", "application/json");
  headers.append("api_key", process.env.REACT_APP_CONTENTSTACK_API_KEY);
  if (hash) {
    headers.append(
      "preview_token",
      process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN
    );
    headers.append("live_preview", hash);
    if (previewContext.timestamp) {
      headers.append("preview_timestamp", previewContext.timestamp);
    }
  } else {
    headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
  }
  return headers;
};

export const apiRequest = async ({ contentTypeUid, entryUid }) => {
  const url = new URL(
    `${CDN_HOST}/v3/content_types/${contentTypeUid}/entries/${entryUid}`
  );
  if (ContentstackLivePreview.hash) {
    url.hostname = LIVE_PREVIEW_REST_HOST;
  }

  const headers = getHeaders();

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

## Home Component

Modify your component to utilize the `apiRequest` utility function created in the previous step.

**For Client-side Rendering (CSR)**

Add the following code to your `home.js` file for your CSR website code. This setup will handle the content display and live preview updates for client-side rendered applications.

```
// home.js
const Home = () => {
    const [state, setState] = React.useState(null);

    useEffect(() => {
        const getHomeEntry = async () => {
            const response = await apiRequest({ contentTypeUid: "YOUR_CONTENT_TYPE_UID", entryUid: "CORRESPONDING_ENTRY_UID" });
            setState(response.data.entry);
        };
        ContentstackLivePreview.onEntryChange(getHomeEntry);
    }, [])

    return (

# {state.title}

            {state.bannerDescription}

    );
}

export default Home;
```

**For Server-side Rendering (SSR)**

Add the following code to your `home.js` file for your SSR website code. This setup is suitable for server-side rendered applications, ensuring the home component displays the latest content.

```
// home.js
'use-client'

const Home = () => {
    const [state, setState] = React.useState(null);

    useEffect(() => {
        const getHomeEntry = async () => {
            const response = await apiRequest({ contentTypeUid: "YOUR_CONTENT_TYPE_UID", entryUid: "CORRESPONDING_ENTRY_UID" });
            setState(response.data.entry);
        };
    }, [])

    return (

# {state.title}

            {state.bannerDescription}

    );
}

export default Home;
```

**Additional Resource**: If you want to use the tree shaking technique and customize the color for the highlight differences functionality, refer to the [Set Up Timeline for your Website](./set-up-timeline-for-your-website.md) document.

By following the steps outlined above, you can set up the timeline feature for your website without using the Contentstack SDK. This will allow you to preview content at different points in time by providing a timestamp value in the API request headers.

## Common questions

### What header do I need to add to enable the timeline feature?
You need to include the `preview_timestamp` property in the headers of your API calls.

### What format should the `preview_timestamp` value use?
This property holds a datetime value in ISO format.

### What version of Live Preview Utils is required for Timeline?
The timeline feature requires Live Preview Utils version **2.0** or above.

### Where does the `preview_timestamp` value come from?
It can be extracted from the URL parameters when your site is loaded in the Timeline.