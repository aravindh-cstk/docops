---
title: "Unpublish metadata"
description: /metadata/{metadata_uid}/unpublish
url: /unpublish-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.814Z
updated_at: 2025-07-18T09:48:41.753Z
---

# Unpublish metadata

<p>The <span data-type='inlineCode'>Unpublish metadata</span> request lets you unpublish the metadata associated with a specific entry or asset.</p>
<p>In the URL, you need to pass the unique ID of the metadata that you want to unpublish against the <span data-type='inlineCode'>metadata_uid</span> parameter.</p>

**API Endpoint**: `/metadata/{metadata_uid}/unpublish`

**Method**: `POST`

## URL Parameters

- **metadata_uid** (optional)
  Enter the unique ID of the metadata that&nbsp;you want to unpublish. You can find the metadata UID by<p>by passing <span data-type='inlineCode'>include_metadata</span> parameters while&nbsp;running the <a href="#get-all-assets" target="_self">Get all assets</a> API request or <a href="#get-all-entries" target="_self">Get all entries</a> API request.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Request Body

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

## Response

```json
{
    "notice": "Metadata sent for unpublishing."
}
```

