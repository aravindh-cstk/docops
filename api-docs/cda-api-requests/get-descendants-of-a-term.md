---
title: "Get descendants of a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants
url: /get-descendants-of-a-term
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:21:33.174Z
updated_at: 2026-05-18T15:29:02.132Z
---

# Get descendants of a term

<p>The <span data-type='inlineCode'>Get descendants of a term</span> request retrieves all descendant terms of a given term.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

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
    "uid": "electronics",
    "name": "Electronics",
    "parent_uid": null,
    "order": 1,
    "locale": "en-us",
    "descendants": [
      {
        "uid": "laptops",
        "name": "Laptops",
        "parent_uid": "electronics",
        "order": 1,
        "locale": "en-us"
      }
    ]
  }
}
```

