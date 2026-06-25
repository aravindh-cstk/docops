---
title: "Localize a term"
description: POST /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developer-apis/content-management-api-requests/localize-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Localize a term

**POST** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Localize a term request is used to add translated taxonomy terms to specific locales available within a stack.

##### Unlocalize a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to localize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

## Query Parameters

- **locale** (required)
  The locale in which you want to localize the taxonomy term.
  Default: `es-es`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
  "term": {
    "uid": "artificial_intelligence",
    "name": "Inteligencia Artificial",
    "parent_uid": null,
    "order": 1
  }
}
```

## Sample Response

```json
{
    "term": {
        "uid": "artificial_intelligence",
        "name": "Inteligencia Artificial",
        "locale": "es-es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2025-11-13T12:03:27.032Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T12:03:27.032Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```

