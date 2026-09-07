---
title: "Preview API"
description: "Discover how Contentstack's Preview API enables content retrieval for preview, supporting Live Preview and Timeline. Access content by switching hosts and including specified headers."
url: /headless-cms/preview-api
uid: bltc0c88d53c01fb15e
---

# Preview API

## Preview API

This document serves as a comprehensive guide to Contentstack's Preview API. The Preview Service API enables the retrieval of content for previewing from your Contentstack account. Both [Live Preview](/docs/headless-cms/about-live-preview/) and [Timeline](/docs/headless-cms/about-timeline) utilize this service to display pertinent data.

The Preview Service API supports all routes of the Content Delivery API. By switching the host from CDN to the preview hosts specified below and including the headers provided, you can access content for preview.

## Base URLs

-   **REST**
    -   US (North America, or NA): https://rest-preview.contentstack.com
    -   Europe (EU): https://eu-rest-preview.contentstack.com
    -   Azure North America (AZURE NA): https://azure-na-rest-preview.contentstack.com
    -   Azure Europe (Azure EU): https://azure-eu-rest-preview.contentstack.com
    -   GCP NA: https://gcp-na-rest-preview.contentstack.com
-   **GraphQL**
    -   US (North America, or NA): https://graphql-preview.contentstack.com
    -   Europe (EU): https://eu-graphql-preview.contentstack.com
    -   Azure North America (AZURE NA): https://azure-na-graphql-preview.contentstack.com
    -   Azure Europe (Azure EU): https://azure-eu-graphql-preview.contentstack.com
    -   GCP NA: https://gcp-na-graphql-preview.contentstack.com

## Authentication

Since the Preview Service APIs are private, you must include specific HTTP headers to make authorized requests:

-   The **Preview Token** for the relevant environment (against the preview\_token key)
-   The stack **API Key**

The **API Key** is a unique key assigned to each stack. The **Preview Token** is a read-only credential that can be created alongside the Delivery Token.

**Additional Resource:** Learn more about [creating preview tokens](/docs/headless-cms/create-a-delivery-token).

## HTTP Headers

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value.

### Required Header

-   live\_preview: A live preview hash will be included in the URL search parameters whenever the user website is loaded in an iframe within Contentstack. This hash must be passed to the Preview Service API in the headers.

### Optional Header for Timeline

-   preview\_timestamp: This header allows you to request a preview for a specific date and time. It must contain a datetime value in ISO format (e.g., 2024-07-24T09:07:35.286Z).

**Example for REST**:

```
curl 'https://rest-preview.contentstack.com/v3/content_types/page/entries' \
  -H 'api_key: {api_key_of_your_stack}' \
  -H 'branch: {branchName || branchAlias}' \
  -H 'content-type: application/json; charset=UTF-8' \
  -H 'live_preview: {live_preview_hash}' \
  -H 'preview_timestamp: {desired_iso_timestamp_for_preview}' \
  -H 'preview_token: {your_preview_token}'
```

**Example for GraphQL**:

```
curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "preview_token: {your_preview_token}" \
-H "branch: {branchName || branchAlias}" \
-H "live_preview: {live_preview_hash}" \
-H "preview_timestamp: {desired_iso_timestamp_for_preview}" \
-d '{"query":"query($locale: String){all_blog(locale: $locale){items{title}}}","variables":{"locale":"en-us"}}' \
https://graphql-preview.contentstack.com/stacks/{api_key}
```
