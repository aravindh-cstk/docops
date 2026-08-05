---
title: "Get all taxonomies"
description: /taxonomies
url: /get-all-taxonomies
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:12:00.169Z
updated_at: 2026-05-18T15:28:02.894Z
---

# Get all taxonomies

<p>The <span data-type='inlineCode'>Get all taxonomies</span> request retrieves all published taxonomies for the given environment.</p>

**API Endpoint**: `/taxonomies`

**Method**: `GET`

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
  "taxonomies": [
    {
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
  ],
  "count": 1
}
```

