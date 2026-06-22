---
title: "Unpublish metadata"
description: POST /metadata/{metadata_uid}/unpublish
url: developers/apis/content-management-api/requests/unpublish-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Unpublish metadata


**Method:** `POST`  
**Endpoint:** `/metadata/{metadata_uid}/unpublish`

The Unpublish metadata request lets you unpublish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to unpublish against the metadata_uid parameter.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch or alias unique ID. |

| metadata_uid | blt045d039eb6f2f9df | Enter the unique ID of the metadata that you want to unpublish. You can find the metadata UID by  by passing include_metadata parameters while running the [Get  |

**Request Body:**

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

**Response (200):**

```json
{
    "notice": "Metadata sent for unpublishing."
}
```
