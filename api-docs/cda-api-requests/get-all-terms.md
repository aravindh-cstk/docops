---
title: "Get all terms"
description: /taxonomies/{taxonomy_uid}/terms
url: /get-all-terms
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:17:56.499Z
updated_at: 2026-05-18T15:28:29.015Z
---

# Get all terms

<p>The <span data-type='inlineCode'>Get all terms</span> request retrieves all published terms in a taxonomy for the specified environment and locale.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (optional)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.</p>

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
  "terms": [
    {
      "uid": "california",
      "name": "California",
      "parent_uid": "usa",
      "taxonomy_uid": "regions",
      "order": 1,
      "locale": "en-us",
      "created_at": "2024-02-01T10:30:00.000Z",
      "updated_at": "2024-02-01T10:30:00.000Z",
      "created_by": "admin",
      "updated_by": "admin"
    }
  ],
  "count": 1
}
```

