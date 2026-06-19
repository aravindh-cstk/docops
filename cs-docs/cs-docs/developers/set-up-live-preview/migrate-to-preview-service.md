---
title: "[Set up Live Preview] - Migrate to Preview Service"
description: Migrate Live Preview from the Content Management API (CMA) to the Preview Service by updating base URLs and authentication tokens (and headers for direct API calls).
url: https://www.contentstack.com/docs/headless-cms/migrate-to-preview-service
product: Contentstack
doc_type: guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Set up Live Preview] - Migrate to Preview Service

This page explains how to migrate an existing Live Preview implementation from the Content Management API (CMA) to the Preview Service. It is intended for developers maintaining Live Preview integrations and should be used when you want faster preview performance by switching to the Preview Service.

## Migrate to Preview Service

The **Preview Service** enhances performance by offering faster load times and improved efficiency compared to the [Content Management API (CMA)](/docs/developers/apis/content-management-api). This guide walks you through the migration process from the CMA to the Preview Service.

## Prerequisites
- Access to a Contentstack [stack](/docs/developers/set-up-stack/about-stack) with [Live Preview](/docs/content-managers/live-preview/about-live-preview/) enabled
- [Preview token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens) (instead of a management token)
- Your project currently relies on the **CMA** for Live Preview

## Steps for Execution
Follow the steps below to migrate from the CMA to the Preview Service.

### For Developers using Contentstack Delivery SDK
If your application uses a **Contentstack Delivery SDK**, migration is simple. You only need to update the **API Base URL **and **authentication token** to start fetching content from the Preview Service.
- #### Update API Base URL
Modify your project configuration to change the API Base URL:

**From:**

```
api.contentstack.io

```

**To:**

```
rest-preview.contentstack.com

```

This ensures your application fetches preview content from the Preview Service instead of the CMA.

Your final code will look like this:

```
contentstack.stack({
    ...,
    live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com",
    preview_token: "csxxxxxxxxxxxx"
    }
})

```

**Note: **For region-specific base URLs, refer to the [Preview API](/docs/developers/set-up-timeline/preview-api) documentation.
- #### Update API Token
Replace the **authen****tication token** with the **preview token** in your API configuration to authenticate requests correctly.

### For Developers not using Contentstack Delivery SDK
If your application makes direct API calls without a **Contentstack Delivery SDK**, update the **API Base URLs **and** Headers** to complete the migration.
- #### Update API Base URL
Modify your code to update the API Base URL:

**From:**

```
api.contentstack.io

```

**To:**

```
rest-preview.contentstack.com

```

This ensures your application fetches preview content from the Preview Service instead of the CMA.

**Note: **For region-specific base URLs, refer to the [Preview API](/docs/developers/set-up-timeline/preview-api) documentation.
- #### Modify API Request Headers
Your application receives a **Live Preview hash**, which you must include in the request headers along with the **preview token** to fetch the latest unpublished content.

**Example:**

```
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

**Note: **This example uses the REST Preview Service. To use the GraphQL Preview service, refer to:[Set Up Live Preview with GraphQL for SSR](/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-server-side-rendering/)
- [Set Up Live Preview with GraphQL for CSR](/docs/developers/set-up-live-preview/set-up-live-preview-with-graphql-for-client-side-rendering/)

**Additional Resource**: For more information on Live Preview, refer to [About Live Preview](https://www.contentstack.com/docs/content-managers/live-preview/about-live-preview/) to understand its benefits and functionality, or follow [Set up Live Preview for your Website](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website/) for a step-by-step configuration guide.

## Common questions

### Do I need a management token to use the Preview Service?
No. Use a [Preview token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens) (instead of a management token).

### What base URL should I use for the REST Preview Service?
Use `rest-preview.contentstack.com` instead of `api.contentstack.io`.

### What changes if I’m not using a Contentstack Delivery SDK?
Update the **API Base URLs **and** Headers**, including sending the **Live Preview hash** and **preview token** in request headers.

### Where do I find region-specific base URLs?
Refer to the [Preview API](/docs/developers/set-up-timeline/preview-api) documentation.