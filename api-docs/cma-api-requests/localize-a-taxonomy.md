---
title: "Localize a taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /localize-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2025-11-13T17:52:50.571Z
updated_at: 2025-11-13T18:19:16.195Z
---

# Localize a taxonomy

<p>The <span data-type='inlineCode'>Localize a taxonomy</span> request is used to add translated values to a taxonomy for specific locales available in your stack.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `POST`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '<a href="/docs/developers/apis/content-management-api#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **locale** (required)
  <p>The locale in which the taxonomy should be localized.</p>

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
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France."
    }
}
```

## Response

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

