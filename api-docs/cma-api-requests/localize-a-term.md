---
title: "Localize a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: /localize-a-term
product: Contentstack
doc_type: api-request
created_at: 2025-11-13T18:09:15.980Z
updated_at: 2025-11-13T18:09:15.980Z
---

# Localize a term

<p>The <span data-type='inlineCode'>Localize a term</span> request is used to add translated taxonomy terms to specific locales available within a stack.</p><h5>Unlocalize a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

**Method**: `POST`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term you want to localize. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **locale** (required)
  <p>The locale in which you want to localize the taxonomy term.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Request Body

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

## Response

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

