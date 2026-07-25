---
title: "Export a taxonomy"
description: /taxonomies/{taxonomy_uid}/export
url: /export-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2024-02-09T08:07:12.375Z
updated_at: 2025-11-13T17:59:55.734Z
---

# Export a taxonomy

<p>The <span data-type='inlineCode'>Export a taxonomy</span> request is used to export a specific taxonomy and its terms. in JSON or CSV format.</p><p>The exported file doesn't download automatically. You can use a REST API client such as Postman to manually download it.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/export`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to export. The UID of a taxonomy is unique across a stack. Execute the '<a href="/docs/developers/apis/content-management-api#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **format** (optional)
  <p>Enter the file format for exporting the taxonomy. The default format is JSON.</p>
- **locale** (optional)
  <p>Exports the taxonomy in the specified locale. If not provided, the system uses the master locale by default (<span data-type='inlineCode'>en-us</span>).</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Specify the target branch when using the <span data-type='inlineCode'>include_fallback</span> parameter. If not specified, the system uses the <span data-type='inlineCode'>main</span> branch by default.</p>

## Response

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

