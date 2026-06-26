---
title: "Unpublish metadata"
description: POST /metadata/{metadata_uid}/unpublish
url: developer-apis/content-management-api-requests/unpublish-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Unpublish metadata

**POST** `/metadata/{metadata_uid}/unpublish`

The Unpublish metadata request lets you unpublish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to unpublish against the metadata_uid parameter.

## URL Parameters

- **metadata_uid** (optional)
  Enter the unique ID of the metadata that you want to unpublish. You can find the metadata UID by by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

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
    "notice": "Metadata sent for unpublishing."
}
```

