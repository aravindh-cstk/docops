---
title: "Export a taxonomy"
description: GET /taxonomies/{taxonomy_uid}/export
url: developer-apis/content-management-api-requests/export-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Export a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/export`

The Export a taxonomy request is used to export a specific taxonomy and its terms. in JSON or CSV format.

The exported file doesn't download automatically. You can use a REST API client such as Postman to manually download it.

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to export. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](../../../../api-detail/content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

## Query Parameters

- **format** (optional)
  Enter the file format for exporting the taxonomy. The default format is JSON.
  Default: `json or csv`
- **locale** (optional)
  Exports the taxonomy in the specified locale. If not provided, the system uses the master locale by default (en-us).
  Default: `es`

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
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

## Sample Response

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Temas Globales de Contenido",
        "description": "Description for the Global Content Topics taxonomy.",
        "locale": "es"
    },
    "terms": [
        {
            "uid": "artificial_intelligence",
            "name": "Inteligencia Artificial",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "content_management",
            "name": "Gestión de Contenidos",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "ai_child_1",
            "name": "Inteligencia Artificial Child 1",
            "parent_uid": "artificial_intelligence",
            "locale": "es"
        }
    ]
}
```

