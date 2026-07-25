---
title: "Get a single term in all locales"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}/locales
url: /get-a-single-term-in-all-locales
product: Contentstack
doc_type: api-request
created_at: 2026-05-18T15:20:24.257Z
updated_at: 2026-05-18T15:28:51.291Z
---

# Get a single term in all locales

<p>The <span data-type='inlineCode'>Get a single term</span> in all locales request retrieves all localized versions of a published term.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}/locales`

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
      "uid": "gaming_laptops",
      "name": "Gaming Laptops",
      "locale": "en-us",
      "publish_details": {
        "time": "2025-09-01T13:19:28.365Z",
        "user": "blt368bfe4e50023d0e",
        "environment": "bltd7f8cacaf649b485",
        "locale": "en-us"
      }
    },
    {
      "uid": "gaming_laptops",
      "name": "Ordinateurs Portables de Jeu",
      "locale": "fr-fr",
      "publish_details": {
        "time": "2025-09-01T13:25:00.000Z",
        "user": "blt368bfe4e50023d0e",
        "environment": "bltd7f8cacaf649b485",
        "locale": "fr-fr"
      }
    }
  ]
}
```

