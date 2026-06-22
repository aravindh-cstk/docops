---
title: "Localize a taxonomy"
description: POST /taxonomies/{taxonomy_uid}
url: developers/apis/content-management-api/requests/localize-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Localize a taxonomy


**Method:** `POST`  
**Endpoint:** `/taxonomies/{taxonomy_uid}`

The Localize a taxonomy request is used to add translated values to a taxonomy for specific locales available in your stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | global_content_topics | Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/api |

| locale | fr-fr | The locale in which the taxonomy should be localized. |

**Request Body:**

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France."
    }
}
```

**Response (201):**

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France.",
        "locale": "fr-fr",
        "created_at": "2025-11-13T11:23:11.996Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T11:23:11.996Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```
