---
title: "Publish metadata"
description: POST /metadata/{metadata_uid}/publish
url: developers/apis/content-management-api/requests/publish-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-10-01
---

# Publish metadata


**Method:** `POST`  
**Endpoint:** `/metadata/{metadata_uid}/publish`

The Publish metadata request lets you publish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to publish against the metadata_uid parameter.

Keep the following points in mind when publishing metadata:

- When you publish an entry/asset, the associated metadata of that entry/asset will also get published.Tip: If you publish only the metadata without publishing the corresponding asset or entry, the metadata will not resolve if you pass include_metadata: true. As a best practice, always publish the associated asset or entry.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a Request body. |

| branch | main | Enter your branch or alias unique ID. |

| metadata_uid | blt045d039eb6f2f9df | Enter the unique ID of the metadata that you want to publish. You can find the metadata UID by passing include_metadata parameters while running the [Get all as |

| include_publish_details | false | Enter 'true' to include the publish details of the entry. |

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
    "notice": "Metadata sent for publishing."
}
```
