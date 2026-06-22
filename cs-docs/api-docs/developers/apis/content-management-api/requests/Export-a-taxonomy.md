---
title: "Export a taxonomy"
description: GET /taxonomies/{taxonomy_uid}/export
url: developers/apis/content-management-api/requests/export-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Export a taxonomy


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/export`

The Export a taxonomy request is used to export a specific taxonomy and its terms. in JSON or CSV format.

The exported file doesn't download automatically. You can use a REST API client such as Postman to manually download it.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | dev | Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy you want to export. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/apis/ |

| format | json or csv | Enter the file format for exporting the taxonomy. The default format is JSON. |

| locale | es | Exports the taxonomy in the specified locale. If not provided, the system uses the master locale by default (en-us). |

**Response (200):**

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
