---
title: "Publish metadata"
description: POST /metadata/{metadata_uid}/publish
url: developer-apis/content-management-api-requests/publish-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-10-01
---

# Publish metadata

**POST** `/metadata/{metadata_uid}/publish`

The Publish metadata request lets you publish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to publish against the metadata_uid parameter.

Keep the following points in mind when publishing metadata:

- When you publish an entry/asset, the associated metadata of that entry/asset will also get published.Tip: If you publish only the metadata without publishing the corresponding asset or entry, the metadata will not resolve if you pass include_metadata: true. As a best practice, always publish the associated asset or entry.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

## URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to publish. You can find the metadata UID by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

## Query Parameters

- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Request

```json
{
  "metadata": {
    "environments": [
      "test"
    ],
    "locales": [
      "en-us"
    ]
  }
}
```

## Sample Response

```json
{
    "notice": "Metadata sent for publishing."
}
```

