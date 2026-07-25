---
title: "Get a single term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /get-a-single-term
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:19:23.553Z
updated_at: 2026-05-18T15:28:39.872Z
---

# Get a single term

<p>The <span data-type='inlineCode'>Get a single term</span> request retrieves a specific published term within a taxonomy.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (optional)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.</p>
- **term_uid** (optional)
  <p>Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.</p>

## Query Parameters

- **limit** (optional)
  <p>Number of results to return.</p>
- **skip** (optional)
  <p>Number of results to skip (for pagination).</p>
- **depth** (optional)
  <p>Depth of term hierarchy to retrieve.</p>

## Headers

- **api_key** (optional)
  <p>Enter the API key of the stack.</p>
- **access_token** (optional)
  <p>Enter your environment-specific delivery token. Check <a href="/docs/developers/apis/content-delivery-api#authentication" target="_self">Authentication</a>.</p>

## Response

```json
{
  "term": {
    "uid": "gaming_laptops",
    "name": "Gaming Laptops",
    "parent_uid": "laptops",
    "order": 1,
    "locale": "en-us",
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```

