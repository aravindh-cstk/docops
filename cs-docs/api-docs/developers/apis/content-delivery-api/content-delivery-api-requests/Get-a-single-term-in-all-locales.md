---
title: "Get a single term in all locales"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/locales
url: developers/apis/content-delivery-api/requests/get-a-single-term-in-all-locales
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get a single term in all locales

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/locales`

The Get a single term in all locales request retrieves all localized versions of a published term.

## URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

## Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`

## Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

## Sample Response

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

