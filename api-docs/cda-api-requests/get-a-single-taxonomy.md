---
title: "Get a single taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /get-a-single-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:16:37.924Z
updated_at: 2026-05-18T15:28:16.308Z
---

# Get a single taxonomy

<p>The <span data-type='inlineCode'>Get a single taxonomy</span> request retrieves details of a single published taxonomy.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (optional)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.</p>

## Query Parameters

- **limit** (optional)
  <p>Number of results to return.</p>
- **skip** (optional)
  <p>Number of results to skip (for pagination).</p>

## Headers

- **api_key** (optional)
  <p>Enter the API key of the stack.</p>
- **access_token** (optional)
  <p>Enter your environment-specific delivery token. Check <a href="/docs/developers/apis/content-delivery-api#authentication" target="_self">Authentication</a>.</p>

## Response

```json
{
  "taxonomy": {
    "uid": "categories",
    "name": "Categories",
    "description": "All categories for products.",
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```

