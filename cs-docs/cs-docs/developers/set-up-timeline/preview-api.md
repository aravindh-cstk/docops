---
title: "[Timeline] - Preview API"
description: Comprehensive guide to Contentstack's Preview API for retrieving content for previewing, used by Live Preview and Timeline.
url: https://www.contentstack.com/docs/headless-cms/preview-api
product: Contentstack
doc_type: api-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Timeline] - Preview API

This page explains how to use Contentstack’s Preview Service API (Preview API) to retrieve content for previewing, including the required base URLs, authentication headers, and example REST and GraphQL requests. It is intended for developers integrating preview functionality and should be used when switching from CDN delivery hosts to preview hosts for Live Preview or Timeline use cases.

## Preview API

This document serves as a comprehensive guide to Contentstack's Preview API. The Preview Service API enables the retrieval of content for previewing from your Contentstack account. Both [Live Preview](/docs/content-managers/live-preview/about-live-preview/) and [Timeline](/docs/content-managers/timeline/about-timeline) utilize this service to display pertinent data.

The Preview Service API supports all routes of the Content Delivery API. By switching the host from CDN to the preview hosts specified below and including the headers provided, you can access content for preview.

## Base URLs

- **REST**US (North America, or NA): `https://rest-preview.contentstack.com`
- Europe (EU): `https://eu-rest-preview.contentstack.com`
- Azure North America (AZURE NA): `https://azure-na-rest-preview.contentstack.com`
- Azure Europe (Azure EU): `https://azure-eu-rest-preview.contentstack.com`
- GCP NA: `https://gcp-na-rest-preview.contentstack.com`
- **GraphQL**US (North America, or NA): `https://graphql-preview.contentstack.com`
- Europe (EU): `https://eu-graphql-preview.contentstack.com`
- Azure North America (AZURE NA): `https://azure-na-graphql-preview.contentstack.com`
- Azure Europe (Azure EU): `https://azure-eu-graphql-preview.contentstack.com`
- GCP NA: `https://gcp-na-graphql-preview.contentstack.com`

## Authentication

Since the Preview Service APIs are private, you must include specific HTTP headers to make authorized requests:
- The **Preview Token** for the relevant environment (against the `preview_token` key)
- The stack **API Key**

The **API Key** is a unique key assigned to each stack. The **Preview Token** is a read-only credential that can be created alongside the Delivery Token.

**Additional Resource**: Learn more about [creating preview tokens](/docs/developers/create-tokens/create-a-delivery-token).

## HTTP Headers

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value.

### Required Header

- `live_preview`: A live preview hash will be included in the URL search parameters whenever the user website is loaded in an iframe within Contentstack. This hash must be passed to the Preview Service API in the headers.

### Optional Header for Timeline

- `preview_timestamp`: This header allows you to request a preview for a specific date and time. It must contain a datetime value in ISO format (e.g., `2024-07-24T09:07:35.286Z`).

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

## Common questions

### Do I need to change my API routes to use the Preview Service API?
The Preview Service API supports all routes of the Content Delivery API. By switching the host from CDN to the preview hosts specified below and including the headers provided, you can access content for preview.

### Which headers are required to authenticate Preview Service API requests?
You must include the **Preview Token** for the relevant environment (against the `preview_token` key) and the stack **API Key**.

### What is the `live_preview` header used for?
A live preview hash will be included in the URL search parameters whenever the user website is loaded in an iframe within Contentstack. This hash must be passed to the Preview Service API in the headers.

### When should I use the `preview_timestamp` header?
This header allows you to request a preview for a specific date and time. It must contain a datetime value in ISO format (e.g., `2024-07-24T09:07:35.286Z`).