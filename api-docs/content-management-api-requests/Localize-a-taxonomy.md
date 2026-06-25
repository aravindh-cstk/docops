---
title: "Localize a taxonomy"
description: POST /taxonomies/{taxonomy_uid}
url: developer-apis/content-management-api-requests/localize-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Localize a taxonomy

**POST** `/taxonomies/{taxonomy_uid}`

The Localize a taxonomy request is used to add translated values to a taxonomy for specific locales available in your stack.

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](../../../../api-detail/content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

## Query Parameters

- **locale** (required)
  The locale in which the taxonomy should be localized.
  Default: `fr-fr`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France."
    }
}
```

## Sample Response

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

