---
title: "Get a single taxonomy"
description: /taxonomies/{taxonomy_uid}
url: /get-a-single-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T10:27:32.080Z
updated_at: 2025-11-13T17:49:44.208Z
---

# Get a single taxonomy

<p>The <span class="code">Get a single taxonomy</span> request returns comprehensive information of a specific taxonomy available in a particular stack.</p>

**API Endpoint**: `/taxonomies/{taxonomy_uid}`

**Method**: `GET`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **locale** (optional)
  <p>Locale from which to fetch the taxonomy. If not specified, the master locale is used.</p>
- **include_fallback** (optional)
  <p>Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.</p>
- **include_terms_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.</p>
- **include_referenced_terms_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).</p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which terms are added.</p>

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
   "taxonomy":{
      "uid":"global_content_topics",
      "name":"Temas Globales de Contenido",
      "description":"Description for the Global Content Topics taxonomy.",
      "locale": "es",
      "created_at":"2025-11-13T05:30:20.509Z",
      "created_by":"b****************44",
      "updated_at":"2025-11-13T05:30:20.509Z",
      "updated_by":"b****************44",
      "terms_count":2,
      "referenced_terms_count":3,
      "referenced_entries_count":6
   }
}
```

